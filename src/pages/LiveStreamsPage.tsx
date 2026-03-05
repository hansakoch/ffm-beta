import React, { useState } from 'react'
import { Video, Users, Filter, Search, TrendingUp, Clock, Gift, Target } from 'lucide-react'
import LiveStreamCard from '../components/LiveStreamCard'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'
import Footer from '../components/Footer'

const LiveStreamsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Streams')
  const [filterType, setFilterType] = useState('all') // all, free, ticketed

  const categories = ['All Streams', 'Fitness & Martial Arts', 'Combat Sports', 'Professional Sports', 'Health & Wellness', 'Entertainment & Lifestyle', 'All Other Creators']

  // Live streams will be loaded from the database when creators go live
  const liveStreams: any[] = []

  const filteredStreams = liveStreams.filter(stream => {
    const matchesSearch = stream.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stream.creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stream.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === 'All Streams' || stream.category === selectedCategory

    const matchesFilter = filterType === 'all' ||
                         (filterType === 'free' && stream.visibility === 'public') ||
                         (filterType === 'ticketed' && stream.visibility === 'ppv')

    return matchesSearch && matchesCategory && matchesFilter
  })

  const handleJoinStream = (streamId: string) => {
    console.log('Joining stream:', streamId)
    // In a real app, this would open the live stream viewer
  }

  const handleTipStream = (streamId: string, amount: number) => {
    console.log(`Tipping £${amount} to stream ${streamId}`)
    // In a real app, this would process the tip payment
  }

  const totalViewers = liveStreams.reduce((sum, stream) => sum + stream.viewers, 0)
  const freeStreams = liveStreams.filter(s => s.visibility === 'public').length
  const ticketedStreams = liveStreams.filter(s => s.visibility === 'ppv').length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title={pageSEO.liveStreams.title}
        description={pageSEO.liveStreams.description}
        keywords={pageSEO.liveStreams.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'Live Streams', url: 'https://fansfollow.me/live-streams' }
          ])
        ]}
      />
      
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30 mb-6">
              <Video className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-300 font-semibold">LIVE STREAMS</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Live Streams</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join live training sessions, Q&As, and exclusive events with top creators.
              <strong className="text-white"> Real-time interaction with your favorite athletes!</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Live Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 text-center hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-red-500/30">
            <div className="text-2xl font-bold text-red-400 mb-2 drop-shadow-lg">{liveStreams.length}</div>
            <div className="text-gray-300">Live Now</div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 text-center hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-blue-500/30">
            <div className="text-2xl font-bold text-blue-400 mb-2 drop-shadow-lg">{totalViewers.toLocaleString()}</div>
            <div className="text-gray-300">Total Viewers</div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 text-center hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-green-500/30">
            <div className="text-2xl font-bold text-green-400 mb-2 drop-shadow-lg">{freeStreams}</div>
            <div className="text-gray-300">Free Streams</div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 text-center hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-purple-500/30">
            <div className="text-2xl font-bold text-purple-400 mb-2 drop-shadow-lg">{ticketedStreams}</div>
            <div className="text-gray-300">Premium Events</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search live streams..."
              className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-lg hover:border-gray-500 transition-all duration-300"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-lg hover:border-gray-500 transition-all duration-300"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-lg hover:border-gray-500 transition-all duration-300"
            >
              <option value="all">All Streams</option>
              <option value="free">Free Only</option>
              <option value="ticketed">Premium Only</option>
            </select>
          </div>
        </div>

        {/* Quick Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-16">
          <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold hover:bg-red-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/30">
            🔴 Live Now ({liveStreams.length})
          </button>
          <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold hover:bg-green-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/30">
            🆓 Free Streams
          </button>
          <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/30">
            👑 Premium Events
          </button>
          <button className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold hover:bg-yellow-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-yellow-500/30">
            🎯 Tip Goals Active
          </button>
          <button className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold hover:bg-orange-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-orange-500/30">
            🔥 Trending
          </button>
          <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/30">
            💬 Interactive
          </button>
          <button className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-semibold hover:bg-pink-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/30">
            📱 Mobile Optimized
          </button>
        </div>

        {/* Live Streams Grid */}
        {filteredStreams.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStreams.map((stream) => (
              <LiveStreamCard
                key={stream.id}
                stream={stream}
                onJoin={handleJoinStream}
                onTip={handleTipStream}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-gray-800/60 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Video size={48} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Creators Live Right Now</h3>
            <p className="text-gray-400 mb-8">
              Check back soon! Creators will be going live with training sessions, Q&As, and exclusive content.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-red-500/40 hover:shadow-red-500/60">
              Become a Creator & Go Live
            </button>
          </div>
        )}

        {/* Creator Live Streaming CTA */}
        <div className="mt-20 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-500/10 rounded-3xl p-8 border-2 border-red-500/30 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl pointer-events-none"></div>
          <div className="text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Ready to Go Live?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start earning from live streams with custom ticket pricing, tip goals, and real-time fan interaction. 
              Set your own rates and build deeper connections with your audience.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-red-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-red-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <Video size={32} className="text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Professional Streaming</h3>
                <p className="text-gray-300 text-sm">4K quality, recording options, interactive features</p>
              </div>
              
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-yellow-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-yellow-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <Target size={32} className="text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Monetization Tools</h3>
                <p className="text-gray-300 text-sm">Tip goals, ticket sales, recording sales, subscriber perks</p>
              </div>
              
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-purple-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-purple-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <Users size={32} className="text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Fan Engagement</h3>
                <p className="text-gray-300 text-sm">Real-time chat, reactions, Q&A, form analysis</p>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-400/20 to-orange-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span className="relative z-10">Start Live Streaming</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LiveStreamsPage