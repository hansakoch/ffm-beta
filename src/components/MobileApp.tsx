import React, { useState, useEffect } from 'react'
import { Smartphone, Download, Apple, Play, QrCode, Star, Users, DollarSign, Zap, Bell, Camera, MessageCircle, Video, Heart, Share, Bookmark } from 'lucide-react'

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState('features')
  const [showQR, setShowQR] = useState(false)

  const appFeatures = [
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Never miss a message, tip, or live stream from your favorite creators'
    },
    {
      icon: Camera,
      title: 'Mobile Content Creation',
      description: 'Create and upload content directly from your phone with built-in editing tools'
    },
    {
      icon: MessageCircle,
      title: 'Instant Messaging',
      description: 'Real-time chat with creators, voice messages, and video calls on the go'
    },
    {
      icon: Video,
      title: 'Live Streaming',
      description: 'Watch and host live streams with mobile-optimized video quality'
    },
    {
      icon: DollarSign,
      title: 'Mobile Payments',
      description: 'Secure payments with Apple Pay, Google Pay, and crypto wallets'
    },
    {
      icon: Zap,
      title: 'Offline Mode',
      description: 'Download content for offline viewing during workouts or travel'
    }
  ]

  const screenshots = [
    {
      title: 'Creator Dashboard',
      description: 'Manage your content and earnings on the go',
      image: '📱'
    },
    {
      title: 'Live Streaming',
      description: 'Host live workouts and Q&A sessions',
      image: '📹'
    },
    {
      title: 'Personal Chats',
      description: 'Connect personally with your biggest fans',
      image: '💬'
    },
    {
      title: 'Content Feed',
      description: 'Discover amazing fitness and martial arts content',
      image: '🏋️'
    }
  ]

  return (
    <div className="space-y-12">
      {/* App Hero */}
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border-2 border-blue-500/40 mb-6 shadow-lg">
          <Smartphone className="w-5 h-5 text-blue-400 mr-2" />
          <span className="text-blue-300 font-semibold">MOBILE APP</span>
        </div>

        <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          FansFollow Mobile App
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Take your creator business mobile with our native iOS and Android apps. 
          Create content, connect with fans, and earn money anywhere, anytime.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-blue-500/40 hover:scale-110 hover:-translate-y-2">
            <Apple size={24} />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-bold">App Store</div>
            </div>
          </button>

          <button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-green-500/40 hover:scale-110 hover:-translate-y-2">
            <Play size={24} />
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
          </button>

          <button
            onClick={() => setShowQR(!showQR)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:scale-110 hover:shadow-purple-500/30"
          >
            <QrCode size={24} />
            <span>QR Code</span>
          </button>
        </div>

        {/* QR Code */}
        {showQR && (
          <div className="bg-white rounded-2xl p-8 max-w-sm mx-auto mb-8 shadow-2xl border-4 border-gray-200">
            <div className="w-48 h-48 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
              <QrCode size={64} className="text-gray-400" />
            </div>
            <p className="text-gray-600 text-sm">Scan to download the app</p>
          </div>
        )}
      </div>

      {/* App Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appFeatures.map((feature, index) => (
          <div key={index} className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-blue-500/30">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-2xl shadow-blue-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
              <feature.icon size={32} className="text-white drop-shadow-lg" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* App Screenshots */}
      <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white text-center mb-8">App Screenshots</h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center">
              <div className="w-full aspect-[9/16] bg-gray-700 rounded-3xl flex items-center justify-center text-6xl mb-4 border-4 border-gray-600 shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-blue-500/20">
                {screenshot.image}
              </div>
              <h4 className="text-white font-bold mb-1">{screenshot.title}</h4>
              <p className="text-gray-400 text-sm">{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* App Benefits */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 text-center hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-green-500/30">
          <div className="text-3xl mb-2 drop-shadow-lg">📱</div>
          <div className="text-lg font-bold text-white mb-2">iOS & Android</div>
          <div className="text-gray-300">Native Apps</div>
        </div>
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 text-center hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-blue-500/30">
          <div className="text-3xl mb-2 drop-shadow-lg">⚡</div>
          <div className="text-lg font-bold text-white mb-2">Fast & Smooth</div>
          <div className="text-gray-300">Optimized Performance</div>
        </div>
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 text-center hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-purple-500/30">
          <div className="text-3xl mb-2 drop-shadow-lg">🔔</div>
          <div className="text-lg font-bold text-white mb-2">Real-Time</div>
          <div className="text-gray-300">Push Notifications</div>
        </div>
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 text-center hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-orange-500/30">
          <div className="text-3xl mb-2 drop-shadow-lg">🔒</div>
          <div className="text-lg font-bold text-white mb-2">Secure</div>
          <div className="text-gray-300">Encrypted Data</div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp