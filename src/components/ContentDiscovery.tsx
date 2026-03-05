import React, { useState, useEffect } from 'react'
import { Search, TrendingUp, Star, Filter, Heart, Eye, Users, Clock, Crown, Siren as Fire, Target, Zap, Award, Globe, MessageCircle, Play, Bookmark } from 'lucide-react'

interface ContentItem {
  id: string
  type: 'video' | 'image' | 'text' | 'live' | 'audio'
  title: string
  description: string
  creator: {
    name: string
    username: string
    avatar: string
    verified: boolean
    tier: string
  }
  thumbnail: string
  duration?: string
  views: number
  likes: number
  comments: number
  tips: number
  category: string
  tags: string[]
  price?: number
  isPremium: boolean
  isLive?: boolean
  publishedAt: string
  trending: boolean
  featured: boolean
  personalizedScore: number
}

interface ContentDiscoveryProps {
  userPreferences?: {
    categories: string[]
    followedCreators: string[]
    interactionHistory: string[]
  }
}

const ContentDiscovery: React.FC<ContentDiscoveryProps> = ({ userPreferences }) => {
  const [activeTab, setActiveTab] = useState('for-you')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('trending')
  const [showFilters, setShowFilters] = useState(false)

  // Content data - will be populated from database
  const allContent: ContentItem[] = []

  const categories = [
    'All', 'Strength Training', 'Boxing', 'Nutrition', 'Bodybuilding', 
    'UFC/MMA', 'Martial Arts', 'Cardio', 'Yoga', 'Supplements'
  ]

  const trendingTags = [
    { tag: 'UFC Training', count: 234, growth: '+45%' },
    { tag: 'Meal Prep', count: 189, growth: '+32%' },
    { tag: 'Boxing', count: 156, growth: '+28%' },
    { tag: 'Deadlift', count: 134, growth: '+25%' },
    { tag: 'Nutrition', count: 123, growth: '+22%' }
  ]

  // Smart content filtering and sorting
  const getFilteredContent = () => {
    let filtered = allContent.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // Smart sorting based on tab and sort preference
    switch (activeTab) {
      case 'for-you':
        filtered = filtered.sort((a, b) => b.personalizedScore - a.personalizedScore)
        break
      case 'trending':
        filtered = filtered.filter(item => item.trending)
        break
      case 'live':
        filtered = filtered.filter(item => item.isLive)
        break
      case 'premium':
        filtered = filtered.filter(item => item.isPremium)
        break
    }

    // Secondary sorting
    switch (sortBy) {
      case 'trending':
        return filtered.sort((a, b) => (b.views + b.likes * 2) - (a.views + a.likes * 2))
      case 'recent':
        return filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      case 'popular':
        return filtered.sort((a, b) => b.views - a.views)
      case 'tips':
        return filtered.sort((a, b) => b.tips - a.tips)
      default:
        return filtered
    }
  }

  const filteredContent = getFilteredContent()

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play size={16} className="text-blue-400" />
      case 'live': return <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      case 'image': return <Eye size={16} className="text-green-400" />
      case 'audio': return <MessageCircle size={16} className="text-purple-400" />
      default: return <Star size={16} className="text-yellow-400" />
    }
  }

  const renderContentCard = (item: ContentItem) => (
    <div key={item.id} className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Live Indicator */}
        {item.isLive && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2 animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            <span>LIVE</span>
          </div>
        )}
        
        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            FEATURED
          </div>
        )}
        
        {/* Content Type & Duration */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-2">
          {getContentIcon(item.type)}
          {item.duration && (
            <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
              {item.duration}
            </span>
          )}
        </div>
        
        {/* Premium Price */}
        {item.isPremium && item.price && (
          <div className="absolute bottom-3 right-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            £{item.price}
          </div>
        )}
        
        {/* Trending Indicator */}
        {item.trending && (
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            🔥 TRENDING
          </div>
        )}
      </div>

      {/* Content Info */}
      <div className="p-6">
        {/* Creator Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            {item.creator.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold">{item.creator.name}</span>
              {item.creator.verified && (
                <Star size={14} className="text-yellow-400 fill-current" />
              )}
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">
                {item.creator.tier}
              </span>
            </div>
            <p className="text-gray-400 text-sm">@{item.creator.username}</p>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Eye size={14} className="mr-1" />
              {item.views.toLocaleString()}
            </span>
            <span className="flex items-center">
              <Heart size={14} className="mr-1" />
              {item.likes}
            </span>
            <span className="flex items-center">
              <MessageCircle size={14} className="mr-1" />
              {item.comments}
            </span>
            <span className="flex items-center">
              <span className="mr-1">💰</span>
              {item.tips}
            </span>
          </div>
          <span>{item.publishedAt}</span>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
            {item.isPremium ? `Buy £${item.price}` : item.isLive ? 'Join Live' : 'View'}
          </button>
          <button className="bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors">
            <Bookmark size={16} />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search content, creators, or topics..."
              className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          {/* Filters */}
          <div className="flex items-center space-x-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500"
            >
              <option value="trending">Trending</option>
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="tips">Most Tipped</option>
            </select>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-3 bg-gray-700/50 hover:bg-gray-700 border border-gray-600 rounded-xl text-white transition-colors"
            >
              <Filter size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden">
        <div className="flex space-x-1 p-2">
          {[
            { id: 'for-you', label: 'For You', icon: Target, description: 'Personalized content' },
            { id: 'trending', label: 'Trending', icon: TrendingUp, description: 'What\'s hot now' },
            { id: 'live', label: 'Live', icon: Fire, description: 'Live streams' },
            { id: 'premium', label: 'Premium', icon: Crown, description: 'Exclusive content' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <tab.icon size={18} />
              <div className="text-center">
                <div>{tab.label}</div>
                <div className="text-xs opacity-75">{tab.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Tags */}
      {activeTab === 'trending' && (
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Fire className="mr-2 text-orange-400" />
            Trending Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            {trendingTags.map((item, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(item.tag)}
                className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-xl px-4 py-2 hover:from-orange-500/30 hover:to-purple-500/30 transition-all"
              >
                <div className="text-white font-bold">#{item.tag}</div>
                <div className="text-orange-400 text-sm">{item.count} posts • {item.growth}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map(renderContentCard)}
      </div>

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <div className="text-center py-16">
          <div className="w-32 h-32 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={48} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No content found</h3>
          <p className="text-gray-400 mb-8">Try adjusting your search or filters</p>
          <button 
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('All')
              setActiveTab('for-you')
            }}
            className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Load More */}
      {filteredContent.length > 0 && (
        <div className="text-center">
          <button className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300">
            Load More Content
          </button>
        </div>
      )}
    </div>
  )
}

export default ContentDiscovery