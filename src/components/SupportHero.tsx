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
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '20s', animationDelay: '5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border-2 border-blue-500/40 mb-6 shadow-lg">
            <HelpCircle className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-semibold">SUPPORT CENTER</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            We're Here to Help
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text animate-pulse drop-shadow-lg" style={{animationDuration: '3s'}}>
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
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 shadow-2xl hover:border-blue-500/40 transition-all duration-300"
            />
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border-2 border-white/20 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-blue-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-blue-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
                <MessageCircle size={32} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Live Chat Support</h3>
              <p className="text-gray-300 mb-4">Connect with our support team</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full shadow-lg hover:scale-105 hover:shadow-blue-500/40">
                Start Chat
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border-2 border-white/20 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-purple-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-purple-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
                <Mail size={32} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Email Support</h3>
              <p className="text-gray-300 mb-4">Send us a detailed message</p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full shadow-lg hover:scale-105 hover:shadow-purple-500/40">
                Send Email
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border-2 border-white/20 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-green-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-green-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
                <HelpCircle size={32} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Help Center</h3>
              <p className="text-gray-300 mb-4">Browse guides and resources</p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 block w-full text-center shadow-lg hover:scale-105 hover:shadow-green-500/40">
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