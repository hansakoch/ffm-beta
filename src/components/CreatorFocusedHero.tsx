import React, { useEffect, useState } from 'react'
import { Play, Users, TrendingUp, ArrowRight, Sparkles, DollarSign, Phone, MessageCircle, Video, Gift, FileText, ShoppingBag, Award, BarChart3, Shield, Zap, Heart } from 'lucide-react'

const CreatorFocusedHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-20 pb-2 sm:pb-10 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-4">
              <Sparkles className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold">FITNESS, NUTRITION, BODYBUILDING, MARTIAL ARTS, MARTIAL ART ACTORS & COMBAT SPORTS</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Ready to grow your fitness brand?
            </h1>

            <p className="text-xl text-gray-200 mb-5 leading-relaxed">
              Join fitness, martial arts and combat sports creators building loyal fan communities and new revenue streams on FansFollowMe.
            </p>

            {/* Revenue streams grid - 3x3 */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">💰</div>
                  <div className="text-white font-bold text-sm">Subscriptions</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">💬</div>
                  <div className="text-white font-bold text-sm">Paid Chats</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">📞</div>
                  <div className="text-white font-bold text-sm">Phone Calls</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">📹</div>
                  <div className="text-white font-bold text-sm">Video Sessions</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">🔒</div>
                  <div className="text-white font-bold text-sm">Paid Videos & Streams</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">🎁</div>
                  <div className="text-white font-bold text-sm">Tips & Supporters</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">📚</div>
                  <div className="text-white font-bold text-sm">Training Programs</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">🥗</div>
                  <div className="text-white font-bold text-sm">Meal Plans</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-1">🛒</div>
                  <div className="text-white font-bold text-sm">Product Sales</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-0 sm:mb-4">
              <button
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 group relative overflow-hidden"
                onClick={() => window.location.href = '/signup'}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span>Create Your Profile Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Why Creators Choose Us */}
          <div className="space-y-4 -mt-4 sm:mt-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Why creators choose us</h2>

              <div className="space-y-3">
                {/* Keep 80%+ of Earnings */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-0.5">Keep 80%+ of Earnings</h3>
                    <p className="text-gray-300 text-sm">Industry-leading revenue share from subscriptions, content, calls and coaching.</p>
                  </div>
                </div>

                {/* Get Paid Your Way */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-0.5">Get Paid Your Way</h3>
                    <p className="text-gray-300 text-sm">Bank transfer or crypto payouts with low fees and fast processing.</p>
                  </div>
                </div>

                {/* Direct Fan Connection */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-0.5">Direct Fan Connection</h3>
                    <p className="text-gray-300 text-sm">Paid calls, private chats and coaching so fans become long-term clients.</p>
                  </div>
                </div>

                {/* Secure & Professional */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-0.5">Secure & Professional</h3>
                    <p className="text-gray-300 text-sm">Encrypted messaging, automated billing and a professional environment for your brand.</p>
                  </div>
                </div>

                {/* Track Your Success */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-0.5">Track Your Success</h3>
                    <p className="text-gray-300 text-sm">Simple dashboard to see earnings, active fans and content performance at a glance.</p>
                  </div>
                </div>

                {/* Built for Your Niche */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-0.5">Built for Your Niche</h3>
                    <p className="text-gray-300 text-sm">Designed for fitness, bodybuilding, nutrition, martial arts and combat sports creators.</p>
                  </div>
                </div>

                {/* Earn FFM Reward Tokens */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🪙</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-0.5">Earn FFM Reward Tokens</h3>
                    <p className="text-gray-300 text-sm">Earn extra reward tokens as your fans engage, which you can convert inside the platform.</p>
                  </div>
                </div>

                {/* Negotiate Higher Rates */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💎</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-0.5">Negotiate Higher Rates</h3>
                    <p className="text-gray-300 text-sm">Large creators can discuss custom payout terms above 80%+. Contact us for VIP options.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorFocusedHero