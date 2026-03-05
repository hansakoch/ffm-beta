@extends('layouts.app')

@section('title', 'FansFollow.me - Global Creator Platform')
@section('description', 'The #1 platform for fitness, martial arts, and wellness creators to monetize with 21+ revenue streams.')

@section('content')
    @include('partials.hero', [
        'subtitle' => 'Join thousands of fitness, martial arts, and wellness creators earning from their passion on a platform built for creators, by creators.',
        'creators_count' => '10K+',
        'fans_count' => '500K+',
        'payouts' => '50M'
    ])

    <section class="section-spacing bg-gray-900 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">21+ Revenue Streams</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                @foreach([
                    ['icon' => '💰', 'title' => 'Subscriptions', 'desc' => 'Monthly recurring revenue'],
                    ['icon' => '💳', 'title' => 'Tips & Donations', 'desc' => 'One-time payments'],
                    ['icon' => '🔒', 'title' => 'PPV Content', 'desc' => 'Pay-per-view posts'],
                    ['icon' => '💬', 'title' => 'Paid Messages', 'desc' => 'Premium DMs'],
                    ['icon' => '📞', 'title' => 'Phone Calls', 'desc' => 'Voice call sessions'],
                    ['icon' => '📹', 'title' => 'Video Calls', 'desc' => '1-on-1 video sessions'],
                    ['icon' => '🔴', 'title' => 'Live Streams', 'desc' => 'Ticketed streams'],
                    ['icon' => '👥', 'title' => 'Group Coaching', 'desc' => 'Group programs'],
                    ['icon' => '📚', 'title' => 'Digital Products', 'desc' => 'E-books & courses'],
                    ['icon' => '🛍️', 'title' => 'Wishlist', 'desc' => 'Amazon affiliate'],
                    ['icon' => '🔗', 'title' => 'Affiliate Links', 'desc' => 'Product commissions'],
                    ['icon' => '⭐', 'title' => 'Promoted Posts', 'desc' => 'Boosted content'],
                ] as $stream)
                    <div class="feature-card text-center">
                        <div class="text-4xl mb-3">{{ $stream['icon'] }}</div>
                        <h3 class="font-bold text-lg mb-2">{{ $stream['title'] }}</h3>
                        <p class="text-gray-400 text-sm">{{ $stream['desc'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <section class="section-spacing bg-gray-800/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Why Choose FansFollow?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="feature-card">
                    <div class="text-3xl mb-4">✅</div>
                    <h3 class="font-bold text-xl mb-3">Creator-Focused</h3>
                    <p class="text-gray-400">Built by creators for creators. We understand your needs and revenue goals.</p>
                </div>
                <div class="feature-card">
                    <div class="text-3xl mb-4">🌍</div>
                    <h3 class="font-bold text-xl mb-3">Global Audience</h3>
                    <p class="text-gray-400">Reach fans worldwide with support for multiple currencies and payment methods.</p>
                </div>
                <div class="feature-card">
                    <div class="text-3xl mb-4">🔒</div>
                    <h3 class="font-bold text-xl mb-3">Secure & Private</h3>
                    <p class="text-gray-400">Industry-leading security with encrypted communications and secure payments.</p>
                </div>
                <div class="feature-card">
                    <div class="text-3xl mb-4">💪</div>
                    <h3 class="font-bold text-xl mb-3">Community Driven</h3>
                    <p class="text-gray-400">Join thousands of fitness and martial arts creators in a supportive community.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-spacing bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Featured Creators</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                @foreach($featuredCreators ?? [] as $creator)
                    @include('partials.creator-card', ['creator' => $creator])
                @endforeach
            </div>
        </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-orange-500/10 to-purple-600/10">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to Start Earning?</h2>
            <p class="text-xl text-gray-300 mb-8">Join thousands of creators already making money on FansFollow</p>
            @auth
                @if(auth()->user()->is_creator)
                    <a href="{{ route('creator.dashboard') }}" class="btn-primary inline-block">
                        Go to Dashboard
                    </a>
                @else
                    <a href="{{ route('dashboard') }}" class="btn-primary inline-block">
                        Explore Creators
                    </a>
                @endif
            @else
                <a href="{{ route('register') }}" class="btn-primary inline-block">
                    Start Your Free Account
                </a>
            @endauth
        </div>
    </section>
@endsection
