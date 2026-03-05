import React from 'react'
import { Bell, Camera, MessageCircle, Video, Wallet, WifiOff, Star, Download, QrCode } from 'lucide-react'

const MobileAppSection = () => {
  const features = [
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
      icon: Wallet,
      title: 'Mobile Payments',
      description: 'Secure payments with Apple Pay, Google Pay, and crypto wallets'
    },
    {
      icon: WifiOff,
      title: 'Offline Mode',
      description: 'Download content for offline viewing during workouts or travel'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-lg">
            <Download className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-semibold">COMING SOON</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            FansFollow Mobile App
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Native iOS and Android apps in development. Create content, connect with fans, and earn money anywhere, anytime.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="#"
              className="flex items-center space-x-3 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/30"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/30"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>

            <div className="bg-white rounded-xl p-4 shadow-2xl hover:scale-105 transition-all duration-300">
              <QrCode className="w-24 h-24 text-gray-900" />
              <div className="text-xs text-gray-600 mt-2 text-center">Scan to Download</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-orange-500/30 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl p-8 border-2 border-orange-500/40 max-w-3xl mx-auto shadow-2xl backdrop-blur-sm text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Coming Soon to iOS & Android
          </h3>
          <p className="text-lg text-gray-300">
            Be the first to know when we launch. Download buttons and QR codes will be activated upon release.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection
