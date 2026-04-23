<footer class="bg-gray-800/50 border-t border-gray-700 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
                <h3 class="font-semibold text-lg mb-4">For Creators</h3>
                <ul class="space-y-2">
                    <li><a href="{{ route('register') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Getting Started</a></li>
                    <li><a href="{{ route('creators') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Personal Video Messages</a></li>
                </ul>
            </div>

            <div>
                <h3 class="font-semibold text-lg mb-4">Revenue Streams</h3>
                <ul class="space-y-2">
                    <li><a href="{{ route('creators') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Content Monetization</a></li>
                    <li><a href="{{ route('creators') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Live Streams</a></li>
                    <li><a href="{{ route('creators') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Group Coaching</a></li>
                    <li><a href="{{ route('creators') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Video Consultations</a></li>
                </ul>
            </div>

            <div>
                <h3 class="font-semibold text-lg mb-4">Legal</h3>
                <ul class="space-y-2">
                    <li><a href="{{ route('terms') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a></li>
                    <li><a href="{{ route('privacy') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                    <li><a href="{{ route('cookies') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Cookie Policy</a></li>
                </ul>
            </div>

            <div>
                <h3 class="font-semibold text-lg mb-4">Support</h3>
                <ul class="space-y-2">
                    <li><a href="{{ route('support') }}" class="text-gray-400 hover:text-orange-400 transition-colors">Contact Us</a></li>
                    <li><a href="{{ route('faq') }}" class="text-gray-400 hover:text-orange-400 transition-colors">FAQ</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-orange-400 transition-colors">Blog</a></li>
                </ul>
            </div>
        </div>

        <div class="border-t border-gray-700 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <p class="text-gray-400 text-sm">
                        &copy; {{ date('Y') }} FansFollow.me. All rights reserved.
                    </p>
                </div>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-orange-400 transition-colors" aria-label="Twitter">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 10 1.1 10 1.1" /></svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-orange-400 transition-colors" aria-label="Facebook">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" /></svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-orange-400 transition-colors" aria-label="Instagram">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
