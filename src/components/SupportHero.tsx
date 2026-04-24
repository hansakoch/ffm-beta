import React from 'react'
import { HelpCircle, MessageCircle, Mail, Phone, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const SupportHero = () => {
  return (
    <section className="relative pt-24 pb-8 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('/1000011998 copy copy copy.jpg')`
          }}
        ></div>

        {/* Animated gradient overlays */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '20s', animationDelay: '5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border-2 border-orange-500/40 mb-6 shadow-lg">
            <HelpCircle className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-semibold">SUPPORT CENTER</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            We're Here to Help
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text animate-pulse drop-shadow-lg" style={{animationDuration: '3s'}}>
              Support Center
            </span>
          </h1>
          
          <p className="text-lg text-gray-200 mb-10 leading-relaxed">
            Get the support you need to succeed on FansFollow. Our team is available to help you 
            maximize your earnings and grow your community.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 shadow-2xl hover:border-orange-500/40 transition-all duration-300"
            />
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur rounded-2xl p-6 border-2 border-gray-700/50 hover:border-orange-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-xl hover:shadow-orange-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-orange-500/30">
                <MessageCircle size={32} className="text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Live Chat Support</h3>
              <p className="text-gray-300 mb-4">Connect with our support team</p>
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full shadow-lg hover:scale-105">
                Start Chat
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur rounded-2xl p-6 border-2 border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/30">
                <Mail size={32} className="text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Email Support</h3>
              <p className="text-gray-300 mb-4">Send us a detailed message</p>
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full shadow-lg hover:scale-105">
                Send Email
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur rounded-2xl p-6 border-2 border-gray-700/50 hover:border-orange-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-xl hover:shadow-orange-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-orange-500/30">
                <HelpCircle size={32} className="text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Help Center</h3>
              <p className="text-gray-300 mb-4">Browse guides and resources</p>
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full shadow-lg hover:scale-105">
                View Guides
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportHero