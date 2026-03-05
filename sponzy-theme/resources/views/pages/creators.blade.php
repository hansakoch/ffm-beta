@extends('layouts.app')

@section('title', 'For Creators - FansFollow.me')
@section('description', 'Discover how fitness and martial arts creators monetize their passion on FansFollow.')

@section('content')
    @include('partials.hero', ['subtitle' => 'Join the fastest-growing platform for fitness creators. Earn from 21+ revenue streams.'])

    <section class="section-spacing bg-gray-900 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold mb-12">How Creators Make Money</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="feature-card">
                    <h3 class="font-bold text-2xl mb-4">📊 Subscriptions</h3>
                    <p class="text-gray-400 mb-4">Set your own subscription price and earn recurring monthly revenue from loyal fans.</p>
                    <ul class="space-y-2 text-gray-300">
                        <li>✓ Customizable tiers</li>
                        <li>✓ Monthly recurring revenue</li>
                        <li>✓ Exclusive subscriber content</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h3 class="font-bold text-2xl mb-4">💳 Tips & Pay-Per-View</h3>
                    <p class="text-gray-400 mb-4">Earn extra income from fans who want to support you beyond subscriptions.</p>
                    <ul class="space-y-2 text-gray-300">
                        <li>✓ One-time tips</li>
                        <li>✓ PPV premium content</li>
                        <li>✓ Flexible pricing</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h3 class="font-bold text-2xl mb-4">💬 Paid Messaging</h3>
                    <p class="text-gray-400 mb-4">Direct messages, calls, and video sessions at your set rates.</p>
                    <ul class="space-y-2 text-gray-300">
                        <li>✓ Set your message rate</li>
                        <li>✓ Voice & video calls</li>
                        <li>✓ Subscriber discounts</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h3 class="font-bold text-2xl mb-4">🎓 Coaching & Programs</h3>
                    <p class="text-gray-400 mb-4">Create and sell training programs, group coaching, and courses.</p>
                    <ul class="space-y-2 text-gray-300">
                        <li>✓ Group coaching programs</li>
                        <li>✓ Structured courses</li>
                        <li>✓ Custom training plans</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h3 class="font-bold text-2xl mb-4">🔴 Live Streaming</h3>
                    <p class="text-gray-400 mb-4">Host free or paid live streams to engage with your community.</p>
                    <ul class="space-y-2 text-gray-300">
                        <li>✓ Free & paid streams</li>
                        <li>✓ Viewer statistics</li>
                        <li>✓ Recording options</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h3 class="font-bold text-2xl mb-4">🌐 Affiliate & Partnerships</h3>
                    <p class="text-gray-400 mb-4">Earn commissions from products and partnerships.</p>
                    <ul class="space-y-2 text-gray-300">
                        <li>✓ Amazon affiliate links</li>
                        <li>✓ Product recommendations</li>
                        <li>✓ Brand partnerships</li>
                    </ul>
                </div>
            </div>

            <div class="bg-gradient-to-r from-orange-500/10 to-purple-600/10 rounded-2xl p-8 text-center">
                <h3 class="text-2xl font-bold mb-4">Fair Revenue Share</h3>
                <p class="text-xl text-gray-300 mb-6">Keep 80%+ of what you earn. Industry-leading payouts.</p>
                <a href="{{ route('register') }}" class="btn-primary inline-block">
                    Start Earning Today
                </a>
            </div>
        </div>
    </section>

    <section class="section-spacing bg-gray-800/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-12">Creator Tools & Features</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="feature-card text-center">
                    <div class="text-4xl mb-4">📊</div>
                    <h3 class="font-bold text-lg mb-2">Advanced Analytics</h3>
                    <p class="text-gray-400">Track earnings, engagement, and subscriber growth in real-time.</p>
                </div>

                <div class="feature-card text-center">
                    <div class="text-4xl mb-4">💡</div>
                    <h3 class="font-bold text-lg mb-2">Creator Content</h3>
                    <p class="text-gray-400">Access guides and best practices for growing your audience.</p>
                </div>

                <div class="feature-card text-center">
                    <div class="text-4xl mb-4">🤝</div>
                    <h3 class="font-bold text-lg mb-2">Creator Community</h3>
                    <p class="text-gray-400">Connect with other creators and share strategies.</p>
                </div>

                <div class="feature-card text-center">
                    <div class="text-4xl mb-4">🎯</div>
                    <h3 class="font-bold text-lg mb-2">Promotion Tools</h3>
                    <p class="text-gray-400">Built-in tools to help promote your content and grow faster.</p>
                </div>

                <div class="feature-card text-center">
                    <div class="text-4xl mb-4">🔐</div>
                    <h3 class="font-bold text-lg mb-2">Safety & Privacy</h3>
                    <p class="text-gray-400">Your content is protected with industry-standard security.</p>
                </div>

                <div class="feature-card text-center">
                    <div class="text-4xl mb-4">💰</div>
                    <h3 class="font-bold text-lg mb-2">Quick Payouts</h3>
                    <p class="text-gray-400">Withdraw your earnings weekly to your preferred payment method.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-orange-500/10 to-purple-600/10">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to Monetize Your Passion?</h2>
            <p class="text-xl text-gray-300 mb-8">Join thousands of fitness and martial arts creators earning on FansFollow</p>
            <a href="{{ route('register') }}" class="btn-primary inline-block">
                Create Your Creator Account
            </a>
        </div>
    </section>
@endsection
