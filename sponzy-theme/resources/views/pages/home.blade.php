@extends('layouts.app')

@section('title', 'FansFollow.me - Global Creator Platform')
@section('description', 'The #1 platform for fitness, martial arts, and wellness creators to monetize with 21+ revenue streams.')

@section('content')
    <section class="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-40 sm:pt-48 lg:pt-56 pb-20 sm:pb-24 lg:pb-28">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(15, 23, 42, 0.2)), url('/ffmherobackground.jpg')"></div>

        <div class="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 z-10 w-full">
            <div class="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
                <div class="mb-8 lg:mb-0 text-left">
                    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight">
                        FansFollow — Where Fans Become Friends
                    </h1>

                    <div class="mb-4 sm:mb-6">
                        <p class="text-orange-400 font-semibold text-sm sm:text-base mb-3">
                            For fitness, bodybuilding and martial arts creators
                        </p>
                        <p class="text-sm sm:text-base text-gray-200 leading-relaxed max-w-lg">
                            Built for fitness coaches, bodybuilders, nutrition experts, martial artists and combat sports creators to earn from fans worldwide through content, coaching and direct fan access.
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a href="{{ route('explore') }}" class="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 text-sm sm:text-base">
                            <span>Explore Creators</span>
                        </a>

                        <a href="{{ route('register') }}" class="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:border-white/40 hover:shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base">
                            <span>Get Started</span>
                        </a>
                    </div>
                </div>

                <div class="relative flex justify-center items-center w-full mx-auto overflow-visible mt-4 lg:mt-0">
                    <img src="{{ asset('assets/images/logo.png') }}" alt="FansFollow Logo" class="h-auto max-w-full mx-auto transform drop-shadow-2xl opacity-95 hover:opacity-100 transition-all duration-300" style="width: 75%; max-width: 400px;">
                </div>
            </div>
        </div>
    </section>

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
