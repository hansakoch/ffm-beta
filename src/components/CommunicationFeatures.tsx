import React, { useState } from 'react'
import { Phone, MessageCircle, Video, Clock, DollarSign, Shield, Star, Users } from 'lucide-react'

const CommunicationFeatures = () => {
  const [activeTab, setActiveTab] = useState(0)

  const communicationOptions = [
    {
      icon: Phone,
      title: 'Paid Phone Calls',
      description: 'Offer personalized coaching calls',
      features: [
        'Set your own per-minute rates',
        'Secure, encrypted voice calls',
        'Automatic billing and payments',
        'Call recording for training purposes',
        'Flexible scheduling system'
      ],
      pricing: '$2-10/minute',
      useCase: 'Perfect for personal training consultations, detailed nutrition advice, meal planning, and technique coaching'
    },
    {
      icon: MessageCircle,
      title: 'Personal Text Chats',
      description: 'Direct messaging where fans become friends',
      features: [
        'Charge per message, per character, or monthly',
        'Share personal photos and videos',
        'Voice messages and audio notes',
        'Build genuine friendships with fans',
        'Exclusive behind-the-scenes access',
        'Personal life updates and stories'
      ],
      pricing: '$0.10-2/character or $1-5/message or $50-200/month',
      useCase: 'Perfect for personal connections, daily life sharing, exclusive content, and building genuine friendships with your biggest fans'
    },
    {
      icon: Video,
      title: 'Video Consultations',
      description: '1-on-1 video coaching sessions',
      features: [
        'HD video quality',
        'Screen sharing for form analysis',
        'Session recording available',
        'Calendar integration',
        'Follow-up message included'
      ],
      pricing: '$50-200/session',
      useCase: 'Ideal for technique analysis, workout planning, nutrition assessments, and comprehensive consultations'
    }
  ]

  const successStories = [
    {
      name: 'Marcus Chen',
      specialty: 'Martial Arts',
      earnings: '$3,200/month',
      method: 'Personal connections',
      quote: 'My fans have become real friends. They text me about their day, we chat about life, and they love the personal connection. Way more than just fitness content.'
    },
    {
      name: 'Sarah Rodriguez',
      specialty: 'Certified Nutritionist',
      earnings: '$2,800/month',
      method: 'Daily personal chats',
      quote: 'My fans text me about everything - their meals, their day, their struggles. We\'ve built real friendships that go beyond just nutrition advice.'
    },
    {
      name: 'Jake Thompson',
      specialty: 'Bodybuilding',
      earnings: '$4,500/month',
      method: 'Personal video chats',
      quote: 'Video calls with my biggest fans feel like hanging out with friends. We talk about workouts, life, goals - it\'s so much more meaningful than just posting content.'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-md">
            <Phone className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-semibold">Exclusive Revenue Streams</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Personal Connections Other Platforms
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text">
              Don't Offer
            </span>
          </h2>

          <h3 className="text-3xl font-bold text-white mb-4">Start Building Real Friendships</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            While other platforms keep fans at a distance, we help you build real friendships. Offer paid personal chats,
            Set up your personal interaction preferences and rates. Turn your biggest fans into genuine friends while earning from these meaningful connections.
          </p>
        </div>

        {/* Communication Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communicationOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border transition-all duration-500 cursor-pointer transform hover:-translate-y-3 ${
                activeTab === index
                  ? 'border-orange-500/50 shadow-2xl shadow-orange-500/20'
                  : 'border-white/10 hover:border-purple-500/50'
              }`}
              onClick={() => {
                setActiveTab(index);
                window.location.href = '/signup';
              }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                <option.icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
              <p className="text-gray-300 mb-4">{option.description}</p>

              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-lg p-3 mb-4 border border-orange-500/30">
                <div className="text-orange-300 font-bold text-lg">{option.pricing}</div>
                <div className="text-gray-300 text-sm">Typical creator rates</div>
              </div>

              <p className="text-sm text-gray-400">{option.useCase}</p>
            </div>
          ))}
        </div>

        {/* Active Option Details */}
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10 mb-16 transform transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                {communicationOptions[activeTab].title}
              </h3>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {communicationOptions[activeTab].useCase}
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Key Features:</h4>
                {communicationOptions[activeTab].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Star size={20} className="text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-3xl p-8 shadow-lg border border-orange-500/30">
                <div className="text-center mb-6">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text mb-2">
                    {communicationOptions[activeTab].pricing}
                  </div>
                  <div className="text-orange-300 font-bold">You Set The Rates</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-800/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Platform Fee</span>
                      <span className="font-bold text-white">20%</span>
                    </div>
                  </div>
                  <div className="bg-gray-800/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Payment Processing</span>
                      <span className="font-bold text-green-400">&lt;1%</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl p-4 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">You Keep</span>
                      <span className="font-bold text-xl">~80%+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        {/* Success stories section removed */}

        {/* Getting Started */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-xl hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-3">Turn Fans Into Friends</h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              Set up your communication preferences, rates, and availability. Start earning from your expertise through direct fan interactions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-md hover:shadow-lg hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                <Clock size={32} className="text-orange-400 mx-auto mb-3" />
                <div className="font-bold text-white">Set Your Schedule</div>
                <div className="text-gray-300 text-sm">Choose when you're available</div>
              </div>
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-md hover:shadow-lg hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <DollarSign size={32} className="text-green-400 mx-auto mb-3" />
                <div className="font-bold text-white">Set Your Rates</div>
                <div className="text-gray-300 text-sm">You control the pricing</div>
              </div>
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-md hover:shadow-lg hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
                <Shield size={32} className="text-purple-400 mx-auto mb-3" />
                <div className="font-bold text-white">Secure Platform</div>
                <div className="text-gray-300 text-sm">Safe, encrypted communications</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span className="absolute inset-0 w-full h-full shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              Start Building Friendships
            </button>
          </div>
        </div>
    </section>
  )
}

export default CommunicationFeatures