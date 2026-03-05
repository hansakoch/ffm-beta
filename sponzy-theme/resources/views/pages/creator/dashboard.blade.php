@extends('layouts.app')

@section('title', 'Creator Dashboard - FansFollow.me')

@section('content')
<div class="min-h-screen bg-gray-900 pt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-8">Creator Dashboard</h1>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="feature-card">
                <div class="text-3xl font-bold gradient-text">${{ $totalEarnings ?? 0 }}</div>
                <div class="text-gray-400">Total Earnings</div>
            </div>
            <div class="feature-card">
                <div class="text-3xl font-bold gradient-text">{{ $subscriberCount ?? 0 }}</div>
                <div class="text-gray-400">Subscribers</div>
            </div>
            <div class="feature-card">
                <div class="text-3xl font-bold gradient-text">{{ $viewsCount ?? 0 }}</div>
                <div class="text-gray-400">Total Views</div>
            </div>
            <div class="feature-card">
                <div class="text-3xl font-bold gradient-text">{{ $engagementRate ?? '0%' }}</div>
                <div class="text-gray-400">Engagement Rate</div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="feature-card">
                <h3 class="font-bold text-lg mb-4">Creator Tools</h3>
                <ul class="space-y-3">
                    <li><a href="{{ route('creator.posts') }}" class="flex items-center text-orange-400 hover:text-orange-300">
                        <span class="mr-2">📝</span> Manage Posts
                    </a></li>
                    <li><a href="{{ route('creator.subscribers') }}" class="flex items-center text-orange-400 hover:text-orange-300">
                        <span class="mr-2">👥</span> My Subscribers
                    </a></li>
                    <li><a href="{{ route('profile.edit') }}" class="flex items-center text-orange-400 hover:text-orange-300">
                        <span class="mr-2">⚙️</span> Settings
                    </a></li>
                    <li><a href="{{ route('profile.edit') }}" class="flex items-center text-orange-400 hover:text-orange-300">
                        <span class="mr-2">💰</span> Pricing & Tiers
                    </a></li>
                </ul>
            </div>

            <div class="feature-card">
                <h3 class="font-bold text-lg mb-4">Quick Stats</h3>
                <div class="space-y-3 text-gray-300">
                    <div class="flex justify-between">
                        <span>Posts This Month:</span>
                        <span class="font-bold">{{ $postsThisMonth ?? 0 }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>New Subscribers:</span>
                        <span class="font-bold">{{ $newSubscribers ?? 0 }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Messages Received:</span>
                        <span class="font-bold">{{ $messagesReceived ?? 0 }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
