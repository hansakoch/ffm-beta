import React from 'react'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const CelebrityHero = () => {
  return (
    <section className="relative pt-[72px] pb-16 overflow-hidden min-h-[85vh]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('/celebhero copy.png')`,
              backgroundPosition: 'center center'
          }}
        ></div>
        
        {/* Animated gradient overlays */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '20s', animationDelay: '5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-start pt-6 md:pt-12">
          {/* Left Content */}
          <div className="transition-all duration-1000 animate-slide-in-left text-left max-w-md">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 mb-6">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-300 font-semibold">CELEBRITY CONNECTIONS</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Chat Personally With<br/>
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text animate-pulse" style={{animationDuration: '3s'}}> 
                Your Favorite Champions
              </span>
            </h1>
            
            <p className="text-base text-gray-200 mb-6 leading-relaxed">
              Connect directly with UFC fighters, Olympic champions, bodybuilding legends, and fitness icons. 
              Build real friendships through personal chats, phone calls, and video hangouts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/celebrities"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span>Explore Celebrities</span>
              </Link>
              
              <Link 
                to="/signup"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/signup'
                }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Become a Fan</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CelebrityHero