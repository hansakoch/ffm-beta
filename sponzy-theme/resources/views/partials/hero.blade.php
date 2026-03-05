<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-20">
    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
            <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span class="gradient-text">Monetize Your Passion.</span><br/>
                <span class="text-white">Build Your Empire.</span>
            </h1>

            <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {{ $subtitle ?? 'Join thousands of fitness, martial arts, and wellness creators earning from their passion on a platform built for creators, by creators.' }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                        Get Started Free
                    </a>
                    <a href="{{ route('login') }}" class="btn-secondary inline-block">
                        Already a Member?
                    </a>
                @endauth
            </div>

            <div class="grid grid-cols-3 gap-8 mt-16 text-center">
                <div>
                    <div class="text-4xl font-bold gradient-text mb-2">{{ $creators_count ?? '10K+' }}</div>
                    <div class="text-gray-400">Creators Earning</div>
                </div>
                <div>
                    <div class="text-4xl font-bold gradient-text mb-2">{{ $fans_count ?? '500K+' }}</div>
                    <div class="text-gray-400">Active Members</div>
                </div>
                <div>
                    <div class="text-4xl font-bold gradient-text mb-2">${{ $payouts ?? '50M' }}+</div>
                    <div class="text-gray-400">Paid Out</div>
                </div>
            </div>
        </div>
    </div>
</section>
