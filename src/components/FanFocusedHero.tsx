import React, { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, MessageCircle, Video, Lock, Users, Zap, Heart, ShoppingBag, FileText, Gift } from 'lucide-react'

const FanFocusedHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-24 pb-16 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(15, 23, 42, 0.55)), url('https://images.pexels.com/photos/3987047/pexels-photo-3987047.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold">FITNESS, NUTRITION, BODYBUILDING, MARTIAL ARTS, MARTIAL ART ACTORS & COMBAT SPORTS</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Discover and connect with your favourite fitness creators
            </h1>

            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Find fighters, coaches, bodybuilders and fitness influencers in one place and get closer access through chats, exclusive content, calls and video sessions.
            </p>

            {/* Ways to Connect Grid - 3x2 */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-white font-bold text-sm">Private Chats</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎥</div>
                  <div className="text-white font-bold text-sm">Exclusive Videos & Streams</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎁</div>
                  <div className="text-white font-bold text-sm">Tips & Support</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-white font-bold text-sm">Training Programs</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">🥗</div>
                  <div className="text-white font-bold text-sm">Meal Plans</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-orange-500/30 transition-colors duration-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">🛍️</div>
                  <div className="text-white font-bold text-sm">Merch & Products</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 group relative overflow-hidden"
                onClick={() => window.location.href = '/signup'}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span>Sign Up as Fan – It's Free</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 group relative overflow-hidden"
                onClick={() => window.location.href = '/explore-creators'}
              >
                <span>Explore Creators</span>
              </button>
            </div>
          </div>

          {/* Right Content - Why Fans Love FansFollowMe */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Why fans love FansFollowMe</h2>

              <div className="space-y-6">
                {/* Closer Access */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Closer access</h3>
                    <p className="text-gray-300">Go beyond social media with real conversations and interactions.</p>
                  </div>
                </div>

                {/* All Your Favourites in One Place */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">All your favourites in one place</h3>
                    <p className="text-gray-300">Follow multiple fitness and combat sports creators on a single platform.</p>
                  </div>
                </div>

                {/* Safe & Secure */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Safe & secure</h3>
                    <p className="text-gray-300">Protected payments and private communication with creators.</p>
                  </div>
                </div>

                {/* Global Access */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Global access</h3>
                    <p className="text-gray-300">Support creators from any country with card or crypto payments.</p>
                  </div>
                </div>

                {/* Easy to Use */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Easy to use</h3>
                    <p className="text-gray-300">Simple mobile-friendly experience for chats, content and calls.</p>
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

export default FanFocusedHero
