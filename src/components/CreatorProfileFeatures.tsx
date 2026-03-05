import React, { useState } from 'react'
import { Heart, DollarSign, Users, Lock, Globe, Crown, Video, MessageCircle, Phone, Gift } from 'lucide-react'

const CreatorProfileFeatures = () => {
  const [activeTab, setActiveTab] = useState(0)

  // Add subtle animation to tabs on hover
  const contentTypes = [
    {
      icon: Video,
      title: 'Posts & Videos',
      description: 'Share workout videos, nutrition tips, and training content',
      monetization: [
        { type: 'Free for All', icon: Globe, description: 'Public content to attract new followers' },
        { type: 'Free for Subscribers', icon: Users, description: 'Exclusive content for your subscribers only' },
        { type: 'Pay-Per-View', icon: DollarSign, description: 'Premium content with one-time purchase' },
        { type: 'Tips Enabled', icon: Heart, description: 'Fans can tip on any post or video' }
      ]
    },
    {
      icon: Video,
      title: 'Live Streams',
      description: 'Real-time training sessions and Q&A',
      monetization: [
        { type: 'Free Live Streams', icon: Globe, description: 'Open to all viewers with tip jar enabled' },
        { type: 'Subscriber-Only Live', icon: Crown, description: 'Exclusive live sessions for subscribers' },
        { type: 'Paid Live Events', icon: DollarSign, description: 'Premium live workshops and masterclasses' },
        { type: 'Live Tips & Gifts', icon: Gift, description: 'Real-time tips and virtual gifts during streams' }
      ]
    },
    {
      icon: MessageCircle,
      title: 'Personal Connections',
      description: 'Where fans become genuine friends',
      monetization: [
        { type: 'Personal Text Chats', icon: MessageCircle, description: 'Daily conversations and friendship building' },
        { type: 'Per-Character Pricing', icon: MessageCircle, description: 'Charge by character count for detailed responses' },
        { type: 'Personal Phone Calls', icon: Phone, description: 'Voice chats with your biggest fans' },
        { type: 'Video Hangouts', icon: Video, description: 'Face-to-face time with fans who become friends' },
        { type: 'Exclusive Access', icon: Crown, description: 'Behind-the-scenes content and personal updates' }
      ]
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-md">
            <Heart className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-semibold">Creator Profile Features</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">
            Every Post, Video & Live Stream
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text">
              Can Generate Revenue
            </span>
          </h2>

          <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unlike other platforms, every piece of content on your profile can earn money through tips,
            subscriptions, pay-per-view, or direct coaching services
          </p>
        </div>

        {/* Content Type Tabs */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {contentTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                window.location.href = '/signup';
              }}
              className={`p-4 rounded-2xl border transition-all duration-500 text-left transform hover:scale-105 ${
                activeTab === index
                  ? 'bg-gray-800/70 backdrop-blur-sm border-orange-500/50 shadow-xl shadow-orange-500/20'
                  : 'bg-gray-800/50 backdrop-blur-sm border-white/10 hover:border-purple-500/50 hover:shadow-lg'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center mb-3">
                <type.icon size={20} className="text-white" />
              </div>

              <h3 className="font-bold mb-1 text-sm text-white">
                {type.title}
              </h3>

              <p className="text-xs text-gray-300">
                {type.description}
              </p>
            </button>
          ))}
        </div>

        {/* Active Content Type Details */}
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/10 mb-8 transform transition-all duration-500">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {contentTypes[activeTab].title} Monetization Options
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentTypes[activeTab].monetization.map((option, idx) => (
              <div key={idx} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-gray-900/70 border border-white/10 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <option.icon size={20} className="text-white" />
                </div>

                <h4 className="font-bold text-white mb-1 text-sm">{option.type}</h4>
                <p className="text-gray-300 text-xs">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-3">Turn Fans Into Friends</h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              Set up your profile with personal interaction options, exclusive content access, and friendship-building features.
              Every connection becomes a meaningful relationship.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span className="absolute inset-0 w-full h-full shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              Start Building Friendships
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorProfileFeatures