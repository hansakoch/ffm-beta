<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" data-initial="bg-transparent" data-scrolled="bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
            <div class="flex items-center">
                <a href="{{ route('home') }}" class="flex items-center">
                    <img
                        src="{{ asset('assets/images/logo.png') }}"
                        alt="FansFollow - Global Fitness & Martial Arts Creator Platform Logo"
                        class="h-12 w-auto"
                        width="180"
                        height="48"
                    />
                </a>
            </div>

            <nav class="hidden md:flex items-center space-x-6">
                <a href="{{ route('home') }}" class="nav-link font-semibold transition-colors duration-200 text-gray-300 hover:text-orange-400">
                    Home
                </a>
                <a href="{{ route('creators') }}" class="nav-link font-semibold transition-colors duration-200 text-gray-300 hover:text-orange-400">
                    For Creators
                </a>
                <a href="{{ route('celebrities') }}" class="nav-link font-semibold transition-colors duration-200 text-gray-300 hover:text-orange-400">
                    Celebrities
                </a>
                <a href="{{ route('explore') }}" class="nav-link font-semibold transition-colors duration-200 text-gray-300 hover:text-orange-400">
                    Explore
                </a>

                <div class="relative group">
                    <button class="nav-link font-semibold transition-colors duration-200 text-gray-300 hover:text-orange-400 flex items-center whitespace-nowrap">
                        More
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div class="absolute top-full right-0 mt-2 w-48 bg-gray-900/95 rounded-xl shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div class="py-2">
                            <a href="{{ route('casting') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                                🎬 Movie Casting
                            </a>
                            <a href="{{ route('live') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                                🔴 Live Streams
                            </a>
                            <a href="{{ route('business') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                                💼 Business
                            </a>
                            <a href="{{ route('support') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                                💬 Support
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="flex items-center space-x-4">
                @auth
                    <button id="notifications-btn" class="text-gray-300 hover:text-orange-400 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>

                    <div class="relative group">
                        <img src="{{ auth()->user()->avatar_url ?? asset('assets/images/default-avatar.png') }}" alt="{{ auth()->user()->name }}" class="w-8 h-8 rounded-full cursor-pointer">
                        <div class="absolute top-full right-0 mt-2 w-48 bg-gray-900/95 rounded-xl shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div class="py-2">
                                @if(auth()->user()->is_creator)
                                    <a href="{{ route('creator.dashboard') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                                        Dashboard
                                    </a>
                                @else
                                    <a href="{{ route('dashboard') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                                        My Dashboard
                                    </a>
                                @endif
                                <a href="{{ route('profile.edit') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                                    Settings
                                </a>
                                <form action="{{ route('logout') }}" method="POST" class="inline">
                                    @csrf
                                    <button type="submit" class="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                                        Logout
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                @else
                    <a href="{{ route('login') }}" class="text-gray-300 hover:text-orange-400 font-semibold transition-colors">
                        Login
                    </a>
                    <a href="{{ route('register') }}" class="btn-primary text-sm">
                        Sign Up
                    </a>
                @endauth
            </div>

            <button id="mobile-menu-btn" class="md:hidden text-gray-300 hover:text-orange-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <div id="mobile-menu" class="hidden md:hidden pb-4">
            <a href="{{ route('home') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400">Home</a>
            <a href="{{ route('creators') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400">For Creators</a>
            <a href="{{ route('celebrities') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400">Celebrities</a>
            <a href="{{ route('explore') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400">Explore</a>
            <a href="{{ route('casting') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400">Movie Casting</a>
            <a href="{{ route('live') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400">Live Streams</a>
            <a href="{{ route('business') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400">Business</a>
            <a href="{{ route('support') }}" class="block px-4 py-2 text-gray-300 hover:text-orange-400">Support</a>
        </div>
    </div>
</header>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.getElementById('main-header');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.className = header.className.replace('bg-transparent', 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700');
            } else {
                header.className = header.className.replace('bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700', 'bg-transparent');
            }
        });

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    });
</script>
