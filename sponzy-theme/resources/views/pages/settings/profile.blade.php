@extends('layouts.app')

@section('title', 'Settings - FansFollow.me')

@section('content')
<div class="min-h-screen bg-gray-900 pt-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-8">Settings</h1>

        <div class="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
            <h2 class="font-bold text-2xl mb-6">Edit Profile</h2>

            <form action="{{ route('profile.update') }}" method="POST" enctype="multipart/form-data" class="space-y-6">
                @csrf
                @method('PUT')

                <div>
                    <label class="block text-sm font-semibold mb-2">Name</label>
                    <input type="text" name="name" value="{{ auth()->user()->name }}" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Username</label>
                    <input type="text" name="username" value="{{ auth()->user()->username }}" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Bio</label>
                    <textarea name="bio" rows="4" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white">{{ auth()->user()->bio ?? '' }}</textarea>
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Website</label>
                    <input type="url" name="website" value="{{ auth()->user()->website ?? '' }}" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Avatar</label>
                    <input type="file" name="avatar" accept="image/*" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                </div>

                <button type="submit" class="btn-primary">Save Changes</button>
            </form>
        </div>

        @if(auth()->user()->is_creator)
        <div class="bg-gray-800/50 rounded-xl border border-gray-700 p-8 mt-8">
            <h2 class="font-bold text-2xl mb-6">Creator Settings</h2>

            <form action="{{ route('creator.settings.update') }}" method="POST" class="space-y-6">
                @csrf
                @method('PUT')

                <div>
                    <label class="block text-sm font-semibold mb-2">Subscription Price (Monthly)</label>
                    <input type="number" name="subscription_price" step="0.01" min="0" value="{{ auth()->user()->creatorSettings->subscription_price ?? '' }}" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Message Rate</label>
                    <input type="number" name="message_rate" step="0.01" min="0" value="{{ auth()->user()->creatorSettings->message_rate ?? '' }}" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                </div>

                <button type="submit" class="btn-primary">Save Settings</button>
            </form>
        </div>
        @endif
    </div>
</div>
@endsection
