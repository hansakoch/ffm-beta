import React from 'react'
import { Search, Filter, Users, Star, Heart, MessageCircle, Phone, Video, Crown, Clock } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'
import Footer from '../components/Footer'

const ExploreCreatorsPage = () => {
  const navigate = useNavigate()
  
  // Simplified main categories
  const mainCategories = [
    {
      emoji: '💪',
      name: 'Fitness & Martial Arts (Our Specialty)',
      description: 'Personal trainers, bodybuilders, nutritionists, martial artists, fitness models'
    },
    {
      emoji: '🥊',
      name: 'Combat Sports Athletes',
      description: 'UFC fighters, boxers, kickboxers, MMA fighters, wrestlers'
    },
    {
      emoji: '⚽',
      name: 'Professional Sports Athletes',
      description: 'Footballers, golfers, tennis players, basketball, baseball, hockey, esports'
    },
    {
      emoji: '🧘',
      name: 'Health & Wellness Coaches',
      description: 'Yoga instructors, pilates, life coaches, meditation, therapy'
    },
    {
      emoji: '🎭',
      name: 'Entertainment & Lifestyle',
      description: 'Musicians, actors, dancers, adult creators, influencers, content creators'
    },
    {
      emoji: '📚',
      name: 'All Other Creators',
      description: 'Everyone else welcome - gaming, tech, business, art, and more'
    }
  ]
  // Creators data - will be populated from database
  const creators: any[] = []

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title={pageSEO.explore.title}
        description={pageSEO.explore.description}
        keywords={pageSEO.explore.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'Explore Creators', url: 'https://fansfollow.me/explore' }
          ])
        ]}
      />
      
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6">
              <Users className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold">ALL CREATORS WELCOME | SPECIALIZING IN FITNESS & MARTIAL ARTS</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Explore Creators Worldwide</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover fitness trainers, martial artists, sports professionals, musicians, adult creators, and more. 
              <strong className="text-white"> Everyone's welcome - personal connections for every niche!</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Featured Categories */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 pointer-events-none rounded-3xl"></div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg relative z-10">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 relative z-10">
            {mainCategories.map((category, index) => (
              <div
                key={category.name}
                className={`${
                  index === 0
                    ? 'bg-gradient-to-br from-orange-500/20 to-purple-500/20 border-2 border-orange-500/40 hover:border-orange-500/70'
                    : 'bg-gray-800/60 backdrop-blur-sm border-2 border-gray-700/50 hover:border-purple-500/50'
                } rounded-2xl p-6 text-center transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-orange-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <span className="text-white font-bold text-2xl drop-shadow-lg">{category.emoji}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name.replace(category.emoji, '').trim()}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
                {index === 0 && (
                  <div className="mt-4 text-green-400 font-bold">Highest Earning Potential</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          {/* Quick Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold hover:bg-yellow-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-yellow-500/30">
              👑 Elite Creators
            </button>
            <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold hover:bg-green-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/30">
              ✅ Verified Pros
            </button>
            <button className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold hover:bg-orange-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-500/30">
              🔥 Trending Now
            </button>
            <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold hover:bg-red-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/30 animate-pulse">
              🔴 LIVE NOW
            </button>
            <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold hover:bg-green-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/30">
              ⚡ Online Now
            </button>
            <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/30">
              💎 Premium Content
            </button>
            <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30">
              📱 Quick Responders
            </button>
            <button className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold hover:bg-yellow-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-yellow-500/30">
              🎬 Movie Casting
            </button>
          </div>

          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search creators..."
              className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg hover:border-gray-500 transition-all duration-300"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />

            {/* Simplified Category Dropdown */}
            <select className="px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg hover:border-gray-500 transition-all duration-300">
              <option value="all">All Categories</option>
              {mainCategories.map(category => (
                <option key={category.name} value={category.name}>
                  {category.emoji} {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Creators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <div key={creator.id} className="bg-gray-800/60 backdrop-blur-lg rounded-3xl border-2 border-gray-700/50 overflow-hidden hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30">
              {/* Cover Image/Banner */}
              <div className="h-32 bg-gradient-to-r from-orange-500/30 to-purple-600/30 relative">
                {/* Live Indicator */}
                {creator.isLive && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2 animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <span>LIVE</span>
                    <span className="text-xs">({creator.liveViewers} watching)</span>
                  </div>
                )}
                
                {creator.verified && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                    <Star size={14} className="fill-current" />
                <div className="ml-2 flex items-center space-x-1">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">
                    👑 LVL 4
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">
                    ⚡ QUICK
                  </span>
                </div>
                    <span>VERIFIED</span>
                  </div>
                )}
                
                {/* Creator Tier Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                  <span>👑</span>
                  <span>LVL 4</span>
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="px-6 pt-0 pb-6 relative">
                {/* Avatar */}
                <div className="relative -mt-12 mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl border-4 border-gray-800 shadow-xl">
                    {creator.avatar}
                  </div>
                  {creator.isCreator && (
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full px-2 py-1 text-xs font-bold text-white shadow-lg">
                      CREATOR
                    </div>
                  )}
                </div>
                
                {/* Name and Username */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    {creator.name}
                    {creator.verified && (
                      <Star size={16} className="ml-2 text-yellow-400 fill-current" />
                    )}
                  </h2>
                  <p className="text-gray-400">@{creator.username}</p>
                </div>
                
                {/* Bio */}
                <p className="text-gray-300 mb-4 line-clamp-3">{creator.bio}</p>
                
                {/* Live Stream Info */}
                {creator.isLive && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-400 font-bold text-sm">LIVE NOW</span>
                      <span className="text-gray-300 text-sm">• {creator.liveViewers} watching</span>
                    </div>
                    <p className="text-white font-semibold text-sm">{creator.liveTitle}</p>
                    <button className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>🔴</span>
                      <span>Join Live Stream</span>
                    </button>
                  </div>
                )}
                
                {/* Stats */}
                <div className="flex items-center space-x-6 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{creator.followers.toLocaleString()}</div>
                    <div className="text-gray-400 text-sm">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{creator.posts}</div>
                    <div className="text-gray-400 text-sm">Posts</div>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {creator.categories.slice(0, 2).map((category, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                {/* Subscription Info */}
                <div className="bg-gray-700/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Crown size={18} className="text-orange-400 mr-2" />
                      <span className="text-white font-semibold">Subscription</span>
                    </div>
                    <div className="text-orange-400 font-bold">{creator.subscriptionPrice}/month</div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-300">
                        <MessageCircle size={14} className="mr-2 text-blue-400" />
                        <span>Personal Chats</span>
                      </div>
                      <span className="text-blue-400">{creator.personalChatRate}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-300">
                        <Phone size={14} className="mr-2 text-green-400" />
                        <span>Phone Calls</span>
                      </div>
                      <span className="text-green-400">{creator.phoneCallRate}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-300">
                        <Video size={14} className="mr-2 text-purple-400" />
                        <span>Video Sessions</span>
                      </div>
                      <span className="text-purple-400">{creator.videoCallRate}</span>
                    </div>
                  </div>
                </div>
                
                {/* Response Time */}
                <div className="flex items-center text-gray-400 mb-4">
                  <Clock size={14} className="mr-2" />
                  <span>Responds {creator.responseTime}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 hover:-translate-y-1">
                    <Crown size={18} />
                    <span>Subscribe {creator.subscriptionPrice}/month</span>
                  </button>
                  <Link
                    to="/scan"
                    className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold hover:bg-orange-500/30 transition-colors flex items-center space-x-1"
                  >
                    <span>📱</span>
                    <span>Scan Creator Code</span>
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                      <Users size={18} />
                      <span>Follow</span>
                    </button>

                    <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                      <MessageCircle size={18} />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State (if no creators) */}
        {creators.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No creators found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Join as Creator CTA */}
        <div className="mt-20 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-3xl p-8 border-2 border-gray-700/50 text-center shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Ready to Start Earning?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of creators already building genuine friendships with fans while earning through personal connections, exclusive content, and coaching services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60"
            >
              Become a Creator
            </button>
            <button
              onClick={() => navigate('/how-it-works')}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:scale-110 hover:-translate-y-2"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ExploreCreatorsPage