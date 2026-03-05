import React, { useState } from 'react'
import { Search, Filter, Heart, Users, Star, Crown, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Creator {
  id: string
  name: string
  username: string
  avatar: string
  verified: boolean
  category: string
  followers: string
  subscriptionPrice: string
  isSubscribed: boolean
  hasFreePosts: boolean
  hasPaidPosts: boolean
  lastActive: string
  previewImage?: string
  description: string
}

const ExploreCreators = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Fitness', 'Nutrition', 'Combat Sports', 'Martial Arts', 'Bodybuilding']

  const creators: Creator[] = []

  const filteredCreators = creators.filter(creator => {
    const matchesSearch = creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         creator.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         creator.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || creator.category.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Explore Creators</h2>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search creators..."
              className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Creators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator) => (
            <div key={creator.id} className="bg-gray-700/30 rounded-2xl border border-gray-600/50 overflow-hidden hover:border-gray-500/50 transition-all duration-300 transform hover:-translate-y-2">
              {/* Creator Header */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {creator.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-white font-bold text-lg">{creator.name}</h3>
                      {creator.verified && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <Star size={12} className="text-white fill-current" />
                        </div>
                      )}
                      {/* Creator Badges */}
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        ⚡ Quick
                      </span>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                        ⭐ Top
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">@{creator.username}</p>
                    <p className="text-gray-300 text-sm">{creator.followers} followers</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{creator.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
                    {creator.category}
                  </span>
                  <span className="text-green-400 font-bold">{creator.subscriptionPrice}/month</span>
                </div>

                <div className="flex space-x-2">
                  <Link 
                    to={`/profile/${creator.username}`}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                  >
                    View Profile
                  </Link>
                  <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex-shrink-0">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No creators found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExploreCreators