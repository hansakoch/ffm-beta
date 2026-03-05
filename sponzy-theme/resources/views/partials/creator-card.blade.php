<div class="feature-card group cursor-pointer hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
    <div class="relative mb-4 overflow-hidden rounded-xl">
        <img src="{{ $creator->avatar_url ?? asset('assets/images/default-avatar.png') }}" alt="{{ $creator->name }}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
        @if($creator->is_verified)
            <div class="absolute top-2 right-2 bg-orange-500 rounded-full p-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
        @endif
    </div>

    <h3 class="font-bold text-lg mb-1 group-hover:text-orange-400 transition-colors">{{ $creator->name }}</h3>
    <p class="text-orange-400 text-sm mb-2">@{{ $creator->username }}</p>
    <p class="text-gray-400 text-sm mb-4 line-clamp-2">{{ $creator->bio ?? 'Passionate creator' }}</p>

    <div class="flex items-center justify-between mb-4">
        <div class="text-center flex-1">
            <div class="font-bold">{{ number_format($creator->followers_count ?? 0) }}</div>
            <div class="text-xs text-gray-400">Followers</div>
        </div>
        <div class="border-l border-gray-700"></div>
        <div class="text-center flex-1">
            <div class="font-bold">${{ $creator->creatorSettings->subscription_price ?? '9.99' }}</div>
            <div class="text-xs text-gray-400">Monthly</div>
        </div>
    </div>

    <a href="{{ route('profile.show', $creator->username) }}" class="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 block text-center">
        View Profile
    </a>
</div>
