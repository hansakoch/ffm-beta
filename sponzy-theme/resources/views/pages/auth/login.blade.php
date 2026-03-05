@extends('layouts.app')

@section('title', 'Login - FansFollow.me')

@section('content')
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-4">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        </div>

        <div class="relative z-10 w-full max-w-md">
            <div class="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold mb-2">Welcome Back</h1>
                    <p class="text-gray-400">Sign in to your FansFollow account</p>
                </div>

                <form action="{{ route('login') }}" method="POST" class="space-y-6">
                    @csrf

                    <div>
                        <label for="email" class="block text-sm font-semibold mb-2">Email Address</label>
                        <input type="email" id="email" name="email" required value="{{ old('email') }}" class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400" placeholder="you@example.com">
                        @error('email')
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

                    <div class="flex items-center justify-between">
                        <label class="flex items-center">
                            <input type="checkbox" name="remember" class="w-4 h-4 bg-gray-700 border-gray-600 rounded" {{ old('remember') ? 'checked' : '' }}>
                            <span class="ml-2 text-sm text-gray-400">Remember me</span>
                        </label>
                        <a href="#" class="text-sm text-orange-400 hover:text-orange-300">Forgot password?</a>
                    </div>

                    <button type="submit" class="btn-primary w-full text-center">
                        Sign In
                    </button>
                </form>

                <div class="mt-6 text-center">
                    <p class="text-gray-400">
                        Don't have an account?
                        <a href="{{ route('register') }}" class="text-orange-400 hover:text-orange-300 font-semibold">Sign up here</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
@endsection
