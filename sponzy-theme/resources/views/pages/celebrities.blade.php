@extends('layouts.app')
@section('title', 'Celebrities - FansFollow.me')
@section('content')
<div class="min-h-screen bg-gray-900 pt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-4">Celebrity Creators</h1>
        <p class="text-gray-400 mb-12">Connect with verified celebrity creators and exclusive content.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @forelse($celebrities ?? [] as $creator)
                @include('partials.creator-card', ['creator' => $creator])
            @empty
                <p class="text-gray-400">Coming soon...</p>
            @endforelse
        </div>
    </div>
</div>
@endsection
