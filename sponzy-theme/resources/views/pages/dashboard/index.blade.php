@extends('layouts.app')

@section('title', 'My Dashboard - FansFollow.me')

@section('content')
<div class="min-h-screen bg-gray-900 pt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-8">Welcome, {{ auth()->user()->name }}</h1>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="feature-card">
                <div class="text-3xl font-bold gradient-text">{{ $subscribedCount ?? 0 }}</div>
                <div class="text-gray-400">Subscriptions</div>
            </div>
            <div class="feature-card">
                <div class="text-3xl font-bold gradient-text">${{ $totalSpent ?? 0 }}</div>
                <div class="text-gray-400">Total Spent</div>
            </div>
            <div class="feature-card">
                <div class="text-3xl font-bold gradient-text">{{ $messageCount ?? 0 }}</div>
                <div class="text-gray-400">Messages</div>
            </div>
            <div class="feature-card">
                <div class="text-3xl font-bold gradient-text">{{ $notificationCount ?? 0 }}</div>
                <div class="text-gray-400">Notifications</div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="feature-card">
                <h3 class="font-bold text-lg mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="{{ route('explore') }}" class="text-orange-400 hover:text-orange-300">Explore Creators</a></li>
                    <li><a href="{{ route('dashboard') }}" class="text-orange-400 hover:text-orange-300">My Subscriptions</a></li>
                    <li><a href="{{ route('dashboard') }}" class="text-orange-400 hover:text-orange-300">Messages</a></li>
                </ul>
            </div>
            <div class="feature-card">
                <h3 class="font-bold text-lg mb-4">Account</h3>
                <ul class="space-y-2">
                    <li><a href="{{ route('profile.edit') }}" class="text-orange-400 hover:text-orange-300">Edit Profile</a></li>
                    <li><a href="{{ route('profile.edit') }}" class="text-orange-400 hover:text-orange-300">Settings</a></li>
                    <li><a href="{{ route('profile.edit') }}" class="text-orange-400 hover:text-orange-300">Wallet</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
