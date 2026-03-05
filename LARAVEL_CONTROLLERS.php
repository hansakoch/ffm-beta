<?php

// Creator Dashboard Controller
class CreatorDashboardController extends Controller
{
    public function index()
    {
        $creator = auth()->user();
        
        $stats = [
            'total_earnings' => $this->getTotalEarnings($creator),
            'subscribers' => $this->getSubscriberCount($creator),
            'total_views' => $this->getTotalViews($creator),
            'engagement_rate' => $this->getEngagementRate($creator),
            'messages_count' => $this->getMessagesCount($creator),
            'new_followers' => $this->getNewFollowers($creator),
        ];

        $recentPosts = $creator->posts()
                              ->with(['likes', 'comments', 'tips'])
                              ->latest()
                              ->take(5)
                              ->get();

        return response()->json([
            'stats' => $stats,
            'recent_posts' => $recentPosts
        ]);
    }

    private function getTotalEarnings($creator)
    {
        return Payment::where('recipient_id', $creator->id)
                     ->where('status', 'completed')
                     ->sum('amount');
    }

    private function getSubscriberCount($creator)
    {
        return Subscription::where('creator_id', $creator->id)
                          ->where('status', 'active')
                          ->count();
    }
}

// Subscription Controller
class SubscriptionController extends Controller
{
    public function subscribe(Request $request, User $creator)
    {
        $request->validate([
            'payment_method' => 'required|in:card,paypal,crypto'
        ]);

        $fan = auth()->user();
        
        // Check if already subscribed
        $existingSubscription = Subscription::where('fan_id', $fan->id)
                                          ->where('creator_id', $creator->id)
                                          ->where('status', 'active')
                                          ->first();

        if ($existingSubscription) {
            return response()->json(['error' => 'Already subscribed'], 400);
        }

        // Process payment
        $paymentResult = app(PaymentService::class)->processPayment(
            $creator->creatorSettings->subscription_price,
            'GBP',
            $request->payment_method
        );

        if ($paymentResult['success']) {
            $subscription = Subscription::create([
                'fan_id' => $fan->id,
                'creator_id' => $creator->id,
                'subscription_price' => $creator->creatorSettings->subscription_price,
                'current_period_end' => now()->addMonth()
            ]);

            // Record payment
            Payment::create([
                'payer_id' => $fan->id,
                'recipient_id' => $creator->id,
                'amount' => $creator->creatorSettings->subscription_price,
                'payment_type' => 'subscription',
                'payment_method' => $request->payment_method,
                'status' => 'completed',
                'transaction_id' => $paymentResult['transaction_id']
            ]);

            return response()->json(['success' => true, 'subscription' => $subscription]);
        }

        return response()->json(['error' => 'Payment failed'], 400);
    }

    public function cancel(Subscription $subscription)
    {
        $this->authorize('update', $subscription);

        $subscription->update([
            'status' => 'cancelled',
            'auto_renew' => false
        ]);

        return response()->json(['success' => true]);
    }
}

// Message Controller
class MessageController extends Controller
{
    public function sendMessage(Request $request, User $creator)
    {
        $request->validate([
            'content' => 'required|string|max:5000',
            'message_type' => 'in:text,image,video,voice'
        ]);

        $fan = auth()->user();
        
        // Get or create conversation
        $conversation = Conversation::firstOrCreate([
            'creator_id' => $creator->id,
            'fan_id' => $fan->id
        ]);

        // Calculate message cost
        $cost = $this->calculateMessageCost(
            $request->content, 
            $creator->creatorSettings,
            $fan->isSubscribedTo($creator)
        );

        // Process payment if required
        if ($cost > 0) {
            $paymentResult = app(PaymentService::class)->processPayment(
                $cost, 'GBP', 'card'
            );

            if (!$paymentResult['success']) {
                return response()->json(['error' => 'Payment failed'], 400);
            }
        }

        // Create message
        $message = Message::create([
            'conversation_id' => $conversation->id,
            'sender_id' => $fan->id,
            'content' => $request->content,
            'message_type' => $request->message_type ?? 'text'
        ]);

        // Update conversation
        $conversation->update(['last_message_at' => now()]);

        // Send real-time notification
        broadcast(new MessageSent($message));

        return response()->json($message);
    }

    private function calculateMessageCost($content, $settings, $isSubscriber)
    {
        if ($isSubscriber) {
            return 0; // Free for subscribers
        }

        // Calculate based on character count
        $characterCount = strlen($content);
        return $characterCount * $settings->personal_chat_rate;
    }
}

// Post Controller
class PostController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'content' => 'required|string',
            'visibility' => 'in:public,subscribers,ppv',
            'price' => 'nullable|numeric|min:0',
            'media_urls' => 'array',
            'tip_goal' => 'nullable|numeric|min:0'
        ]);

        $post = Post::create([
            'creator_id' => auth()->id(),
            'title' => $request->title,
            'content' => $request->content,
            'visibility' => $request->visibility ?? 'public',
            'price' => $request->price,
            'media_urls' => $request->media_urls ?? [],
            'tip_goal' => $request->tip_goal,
            'tip_goal_description' => $request->tip_goal_description
        ]);

        return response()->json($post);
    }

    public function purchase(Post $post)
    {
        $user = auth()->user();

        if ($post->visibility !== 'ppv') {
            return response()->json(['error' => 'Post is not pay-per-view'], 400);
        }

        // Check if already purchased
        $existingPurchase = Payment::where('payer_id', $user->id)
                                  ->where('related_id', $post->id)
                                  ->where('payment_type', 'ppv')
                                  ->where('status', 'completed')
                                  ->exists();

        if ($existingPurchase) {
            return response()->json(['error' => 'Already purchased'], 400);
        }

        // Process payment
        $paymentResult = app(PaymentService::class)->processPayment(
            $post->price, 'GBP', 'card'
        );

        if ($paymentResult['success']) {
            Payment::create([
                'payer_id' => $user->id,
                'recipient_id' => $post->creator_id,
                'amount' => $post->price,
                'payment_type' => 'ppv',
                'payment_method' => 'card',
                'status' => 'completed',
                'related_id' => $post->id,
                'transaction_id' => $paymentResult['transaction_id']
            ]);

            return response()->json(['success' => true]);
        }

        return response()->json(['error' => 'Payment failed'], 400);
    }

    public function tip(Request $request, Post $post)
    {
        $request->validate([
            'amount' => 'required|numeric|min:1',
            'message' => 'nullable|string|max:500',
            'animation_type' => 'nullable|string'
        ]);

        $user = auth()->user();

        // Process payment
        $paymentResult = app(PaymentService::class)->processPayment(
            $request->amount, 'GBP', 'card'
        );

        if ($paymentResult['success']) {
            // Create tip record
            $tip = Tip::create([
                'tipper_id' => $user->id,
                'recipient_id' => $post->creator_id,
                'post_id' => $post->id,
                'amount' => $request->amount,
                'message' => $request->message,
                'animation_type' => $request->animation_type ?? 'money'
            ]);

            // Update post tip goal if exists
            if ($post->tip_goal) {
                $post->increment('tip_goal_current', $request->amount);
            }

            $post->increment('tips_count');

            // Record payment
            Payment::create([
                'payer_id' => $user->id,
                'recipient_id' => $post->creator_id,
                'amount' => $request->amount,
                'payment_type' => 'tip',
                'payment_method' => 'card',
                'status' => 'completed',
                'related_id' => $post->id,
                'transaction_id' => $paymentResult['transaction_id']
            ]);

            return response()->json(['success' => true, 'tip' => $tip]);
        }

        return response()->json(['error' => 'Payment failed'], 400);
    }
}

// Live Stream Controller
class LiveStreamController extends Controller
{
    public function start(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'ticket_price' => 'nullable|numeric|min:0',
            'max_viewers' => 'nullable|integer|min:1'
        ]);

        $stream = LiveStream::create([
            'creator_id' => auth()->id(),
            'title' => $request->title,
            'description' => $request->description,
            'ticket_price' => $request->ticket_price,
            'max_viewers' => $request->max_viewers,
            'status' => 'live',
            'started_at' => now(),
            'stream_key' => Str::random(32)
        ]);

        // Notify subscribers
        $this->notifySubscribers($stream);

        return response()->json($stream);
    }

    public function end(LiveStream $stream)
    {
        $this->authorize('update', $stream);

        $stream->update([
            'status' => 'ended',
            'ended_at' => now()
        ]);

        return response()->json(['success' => true]);
    }
}

// Payment Service
class PaymentService
{
    public function processPayment($amount, $currency = 'GBP', $method = 'card')
    {
        switch ($method) {
            case 'crypto':
                return $this->processCryptoPayment($amount, $currency);
            case 'paypal':
                return $this->processPayPalPayment($amount, $currency);
            case 'card':
            default:
                return $this->processCardPayment($amount, $currency);
        }
    }

    private function processCardPayment($amount, $currency)
    {
        // Integrate with Stripe
        try {
            $stripe = new \Stripe\StripeClient(config('services.stripe.secret'));
            
            $paymentIntent = $stripe->paymentIntents->create([
                'amount' => $amount * 100, // Convert to cents
                'currency' => strtolower($currency),
                'automatic_payment_methods' => ['enabled' => true],
            ]);

            return [
                'success' => true,
                'transaction_id' => $paymentIntent->id,
                'client_secret' => $paymentIntent->client_secret
            ];
        } catch (\Exception $e) {
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    private function processCryptoPayment($amount, $currency)
    {
        // Integrate with crypto payment processor
        // Support BTC, ETH, USDT, SOL
        return [
            'success' => true,
            'transaction_id' => 'crypto_' . Str::random(16),
            'crypto_address' => '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
        ];
    }
}