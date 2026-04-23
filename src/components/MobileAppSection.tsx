import React from 'react'
import { Camera, MessageCircle, Video, Wallet, Star, Download, QrCode } from 'lucide-react'

const MobileAppSection = () => {
  const features = [
    {
      icon: Camera,
      title: 'Mobile Content Creation',
      description: 'Record and upload content directly from your phone with simple editing tools.'
    },
    {
      icon: MessageCircle,
      title: 'Instant Messaging',
      description: 'Chat with fans in real time with text, voice and media messages.'
    },
    {
      icon: Video,
      title: 'Live Streaming',
      description: 'Go live to your audience with mobile‑optimised video quality.'
    },
    {
      icon: Wallet,
      title: 'Mobile Payments',
      description: 'Accept secure payments from fans with Apple Pay, Google Pay and cards.'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
            Built for creators on the move
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Create, communicate and get paid directly from your phone with tools designed for busy fitness and combat sports creators.
          </p>

        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-orange-500/30"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 shadow-lg mx-auto">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection
