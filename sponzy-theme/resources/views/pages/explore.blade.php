@extends('layouts.app')

@section('title', 'Explore Creators - FansFollow.me')

@section('content')
    <div class="min-h-screen bg-gray-900 pt-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold mb-4">Explore Creators</h1>
            <p class="text-gray-400 mb-12">Discover and follow your favorite fitness, martial arts, and wellness creators.</p>

            <div class="mb-8">
                <div class="flex flex-col md:flex-row gap-4 mb-8">
                    <input type="search" placeholder="Search creators..." class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                    <select class="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                        <option>All Categories</option>
                        <option>Fitness</option>
                        <option>Martial Arts</option>
                        <option>Nutrition</option>
                        <option>Bodybuilding</option>
                        <option>Yoga</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                @forelse($creators ?? [] as $creator)
                    @include('partials.creator-card', ['creator' => $creator])
                @empty
                    <div class="col-span-full text-center py-12">
                        <p class="text-gray-400 text-lg">No creators found. Check back soon!</p>
                    </div>
                @endforelse
            </div>
        </div>
    </div>
@endsection
