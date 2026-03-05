@extends('layouts.app')

@section('title', 'Sign Up - FansFollow.me')

@section('content')
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-4">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        </div>

        <div class="relative z-10 w-full max-w-md">
            <div class="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold mb-2">Join FansFollow</h1>
                    <p class="text-gray-400">Start monetizing your passion today</p>
                </div>

                <form action="{{ route('register') }}" method="POST" class="space-y-6">
                    @csrf

                    <div>
                        <label for="name" class="block text-sm font-semibold mb-2">Full Name</label>
                        <input type="text" id="name" name="name" required value="{{ old('name') }}" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400" placeholder="Your name">
                        @error('name')
                            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-semibold mb-2">Email Address</label>
                        <input type="email" id="email" name="email" required value="{{ old('email') }}" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400" placeholder="you@example.com">
                        @error('email')
                            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <div>
                        <label for="username" class="block text-sm font-semibold mb-2">Username</label>
                        <input type="text" id="username" name="username" required value="{{ old('username') }}" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400" placeholder="yourname">
                        @error('username')
                            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400" placeholder="••••••••">
                        @error('password')
                            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <div>
                        <label for="password_confirmation" class="block text-sm font-semibold mb-2">Confirm Password</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" required class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400" placeholder="••••••••">
                    </div>

                    <div class="flex items-start">
                        <input type="checkbox" id="terms" name="terms" required class="mt-1 w-4 h-4 bg-gray-700 border-gray-600 rounded">
                        <label for="terms" class="ml-2 text-sm text-gray-400">
                            I agree to the <a href="{{ route('terms') }}" class="text-orange-400 hover:text-orange-300">Terms of Service</a> and <a href="{{ route('privacy') }}" class="text-orange-400 hover:text-orange-300">Privacy Policy</a>
                        </label>
                    </div>

                    <button type="submit" class="btn-primary w-full text-center">
                        Create Account
                    </button>
                </form>

                <div class="mt-6 text-center">
                    <p class="text-gray-400">
                        Already have an account?
                        <a href="{{ route('login') }}" class="text-orange-400 hover:text-orange-300 font-semibold">Sign in here</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
@endsection
