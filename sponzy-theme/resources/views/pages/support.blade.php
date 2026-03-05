@extends('layouts.app')
@section('title', 'Support - FansFollow.me')
@section('content')
<div class="min-h-screen bg-gray-900 pt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-8 text-center">Contact Support</h1>
        <div class="max-w-2xl mx-auto">
            <form method="POST" action="{{ route('contact.submit') }}" class="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
                @csrf
                <div class="mb-6">
                    <label class="block text-sm font-semibold mb-2">Name</label>
                    <input type="text" name="name" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                </div>
                <div class="mb-6">
                    <label class="block text-sm font-semibold mb-2">Email</label>
                    <input type="email" name="email" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white">
                </div>
                <div class="mb-6">
                    <label class="block text-sm font-semibold mb-2">Message</label>
                    <textarea name="message" required rows="6" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white"></textarea>
                </div>
                <button type="submit" class="btn-primary w-full">Send Message</button>
            </form>
        </div>
    </div>
</div>
@endsection
