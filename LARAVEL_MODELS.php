<?php

// User Model (extends Laravel's default)
class User extends Authenticatable
{
    protected $fillable = [
        'name', 'email', 'password', 'username', 'bio', 'website', 
        'is_creator', 'is_verified', 'avatar_url'
    ];

    protected $casts = [
        'is_creator' => 'boolean',
        'is_verified' => 'boolean',
        'email_verified_at' => 'datetime',
    ];

    // Relationships
    public function creatorSettings()
    {
        return $this->hasOne(CreatorSettings::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class, 'creator_id');
    }

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class, 'creator_id');
    }

    public function subscribedTo()
    {
        return $this->hasMany(Subscription::class, 'fan_id');
    }

    public function sentMessages()
    {
        return $this->hasMany(Message::class, 'sender_id');
    }

    public function conversations()
    {
        return $this->hasMany(Conversation::class, 'creator_id')
                    ->orWhere('fan_id', $this->id);
    }

    // Helper methods
    public function isCreator()
    {
        return $this->is_creator;
    }

    public function isSubscribedTo(User $creator)
    {
        return $this->subscribedTo()
                    ->where('creator_id', $creator->id)
                    ->where('status', 'active')
                    ->exists();
    }

    public function totalEarnings()
    {
        return Payment::where('recipient_id', $this->id)
                     ->where('status', 'completed')
                     ->sum('amount');
    }
}

// Creator Settings Model
class CreatorSettings extends Model
{
    protected $fillable = [
        'user_id', 'subscription_price', 'personal_chat_rate', 
        'phone_call_rate', 'video_call_rate', 'response_time',
        'categories', 'bio_extended', 'is_accepting_calls',
        'is_accepting_messages', 'is_accepting_video_calls'
    ];

    protected $casts = [
        'categories' => 'array',
        'is_accepting_calls' => 'boolean',
        'is_accepting_messages' => 'boolean',
        'is_accepting_video_calls' => 'boolean',
        'subscription_price' => 'decimal:2',
        'personal_chat_rate' => 'decimal:2',
        'phone_call_rate' => 'decimal:2',
        'video_call_rate' => 'decimal:2',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

// Post Model
class Post extends Model
{
    protected $fillable = [
        'creator_id', 'title', 'content', 'media_urls', 'visibility',
        'price', 'is_pinned', 'tip_goal', 'tip_goal_description',
        'tip_goal_current'
    ];

    protected $casts = [
        'media_urls' => 'array',
        'is_pinned' => 'boolean',
        'price' => 'decimal:2',
        'tip_goal' => 'decimal:2',
        'tip_goal_current' => 'decimal:2',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function tips()
    {
        return $this->hasMany(Tip::class);
    }

    public function isLikedBy(User $user)
    {
        return $this->likes()->where('user_id', $user->id)->exists();
    }

    public function canBeViewedBy(User $user)
    {
        if ($this->visibility === 'public') {
            return true;
        }

        if ($this->visibility === 'subscribers') {
            return $user->isSubscribedTo($this->creator);
        }

        if ($this->visibility === 'ppv') {
            // Check if user has purchased this content
            return Payment::where('payer_id', $user->id)
                         ->where('related_id', $this->id)
                         ->where('payment_type', 'ppv')
                         ->where('status', 'completed')
                         ->exists();
        }

        return false;
    }
}

// Subscription Model
class Subscription extends Model
{
    protected $fillable = [
        'fan_id', 'creator_id', 'subscription_price', 'status',
        'current_period_start', 'current_period_end', 'auto_renew'
    ];

    protected $casts = [
        'subscription_price' => 'decimal:2',
        'auto_renew' => 'boolean',
        'current_period_start' => 'datetime',
        'current_period_end' => 'datetime',
    ];

    public function fan()
    {
        return $this->belongsTo(User::class, 'fan_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function isActive()
    {
        return $this->status === 'active' && 
               $this->current_period_end > now();
    }
}

// Message Model
class Message extends Model
{
    protected $fillable = [
        'conversation_id', 'sender_id', 'content', 'message_type',
        'media_url', 'tip_amount', 'is_read'
    ];

    protected $casts = [
        'tip_amount' => 'decimal:2',
        'is_read' => 'boolean',
    ];

    public function conversation()
    {
        return $this->belongsTo(Conversation::class);
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }
}

// Conversation Model
class Conversation extends Model
{
    protected $fillable = [
        'creator_id', 'fan_id', 'last_message_at'
    ];

    protected $casts = [
        'last_message_at' => 'datetime',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function fan()
    {
        return $this->belongsTo(User::class, 'fan_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function latestMessage()
    {
        return $this->hasOne(Message::class)->latest();
    }
}

// Payment Model
class Payment extends Model
{
    protected $fillable = [
        'payer_id', 'recipient_id', 'amount', 'currency', 'payment_type',
        'payment_method', 'status', 'transaction_id', 'crypto_currency',
        'crypto_amount', 'related_id'
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'crypto_amount' => 'decimal:8',
    ];

    public function payer()
    {
        return $this->belongsTo(User::class, 'payer_id');
    }

    public function recipient()
    {
        return $this->belongsTo(User::class, 'recipient_id');
    }
}

// Training Program Model
class TrainingProgram extends Model
{
    protected $fillable = [
        'creator_id', 'title', 'description', 'price', 'duration_weeks',
        'difficulty', 'category', 'includes', 'status'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'includes' => 'array',
        'rating' => 'decimal:2',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
}

// Live Stream Model
class LiveStream extends Model
{
    protected $fillable = [
        'creator_id', 'title', 'description', 'status', 'scheduled_at',
        'max_viewers', 'ticket_price', 'is_recording', 'recording_price'
    ];

    protected $casts = [
        'scheduled_at' => 'datetime',
        'started_at' => 'datetime',
        'ended_at' => 'datetime',
        'ticket_price' => 'decimal:2',
        'recording_price' => 'decimal:2',
        'is_recording' => 'boolean',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
}

// Fan Loyalty Model
class FanLoyalty extends Model
{
    protected $table = 'fan_loyalty';
    
    protected $fillable = [
        'fan_id', 'creator_id', 'tier', 'points', 'total_spent',
        'daily_streak', 'weekly_streak', 'monthly_streak', 'achievements'
    ];

    protected $casts = [
        'total_spent' => 'decimal:2',
        'achievements' => 'array',
    ];

    public function fan()
    {
        return $this->belongsTo(User::class, 'fan_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
}