import React, { useState } from 'react'
import { ShoppingBag, Download, Eye, Calendar, Filter, Search } from 'lucide-react'

interface PurchasedItem {
  id: string
  title: string
  creator: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  type: 'video' | 'image' | 'audio' | 'document' | 'live_session'
  price: string
  purchaseDate: string
  thumbnail?: string
  duration?: string
  size?: string
  downloadUrl?: string
  viewUrl?: string
}

const PurchasedContent = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Empty state for now - matching the screenshot
  const purchasedItems: PurchasedItem[] = []

  const filteredItems = purchasedItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.creator.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === 'all' || item.type === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3 mb-4">
            <ShoppingBag size={24} className="text-orange-400" />
            <h1 className="text-2xl font-bold text-white">Purchased</h1>
          </div>
          <p className="text-gray-300">Content you have purchased from creators</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search purchased content..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              onClick={() => window.location.href = '/explore'}
            >
              <option value="all">All Content</option>
              <option value="video">Videos</option>
              <option value="image">Images</option>
              <option value="audio">Audio</option>
              <option value="document">Documents</option>
              <option value="live_session">Live Sessions</option>
            </select>
          </div>
        </div>

        {/* Content */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={48} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You have not purchased any content</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              When you purchase content from creators, it will appear here for easy access and download.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
              Explore Creators
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300">
                {/* Thumbnail */}
                <div className="aspect-video bg-gray-700/50 relative">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl">
                        {item.type === 'video' ? '🎥' : 
                         item.type === 'image' ? '🖼️' : 
                         item.type === 'audio' ? '🎵' : 
                         item.type === 'document' ? '📄' : '🎬'}
                      </div>
                    </div>
                  )}
                  
                  {item.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {item.duration}
                    </div>
                  )}
                </div>

                {/* Content Info */}
                <div className="p-6">
                  <h3 className="text-white font-bold mb-2 line-clamp-2">{item.title}</h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.creator.avatar}
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">{item.creator.name}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{item.purchaseDate}</span>
                    </div>
                    <div className="text-green-400 font-bold">{item.price}</div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                      <Eye size={16} />
                      <span>View</span>
                    </button>
                    <button className="bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PurchasedContent