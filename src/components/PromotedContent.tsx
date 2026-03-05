import React from 'react'
import { TrendingUp, Star, Clock, Users } from 'lucide-react'

const PromotedContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp size={24} className="text-orange-400" />
            <h1 className="text-2xl font-bold text-white">Promoted</h1>
          </div>
          <p className="text-gray-300">Discover featured content and special offers</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Empty State - Matching the screenshot */}
        <div className="text-center py-16">
          <div className="w-32 h-32 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp size={48} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No promoted content available</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Check back later for featured content, special offers, and promoted posts from your favorite creators.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            onClick={() => window.location.href = '/explore'}
          >
            Explore Creators
          </button>
        </div>

        {/* When there is promoted content, it would look like this */}
        <div className="hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Ultimate Muscle Building Guide', 
                creator: 'Jake Thompson', 
                price: '£39.99', 
                originalPrice: '£49.99',
                discount: '20% OFF', 
                featured: true,
                image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
                rating: 4.9,
                students: 1234
              },
              { 
                title: 'Combat Training Masterclass', 
                creator: 'Rico Martinez', 
                price: '£59.99', 
                originalPrice: '£79.99',
                discount: 'LIMITED TIME', 
                featured: true,
                image: 'https://images.pexels.com/photos/7045717/pexels-photo-7045717.jpeg?auto=compress&cs=tinysrgb&w=400',
                rating: 4.8,
                students: 856
              },
              { 
                title: 'Martial Arts Transformation', 
                creator: 'Dr. Luna Chen', 
                price: '£29.99', 
                originalPrice: '£39.99',
                discount: 'NEW', 
                featured: false,
                image: 'https://images.pexels.com/photos/7045717/pexels-photo-7045717.jpeg?auto=compress&cs=tinysrgb&w=400',
                rating: 4.7,
                students: 567
              }
            ].map((promo, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-video">
                  <img src={promo.image} alt={promo.title} className="w-full h-full object-cover" />
                  
                  {promo.featured && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    {promo.discount}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{promo.title}</h3>
                  <p className="text-gray-300 mb-4">by {promo.creator}</p>
                  
                  {/* Rating and Students */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span>{promo.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{promo.students}</span>
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400 font-bold text-xl">{promo.price}</span>
                      <span className="text-gray-500 line-through text-sm">{promo.originalPrice}</span>
                    </div>
                    <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                      Get Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-white mb-6">Browse Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Fitness Training', count: 45, icon: '💪' },
              { name: 'Nutrition Plans', count: 32, icon: '🥗' },
              { name: 'Combat Sports', count: 28, icon: '🥊' },
              { name: 'Martial Arts', count: 19, icon: '🥋' }
            ].map((category, index) => (
              <button key={index} className="bg-gray-800/30 hover:bg-gray-700/50 rounded-xl p-4 text-left transition-colors border border-gray-700/30 hover:border-gray-600/50">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-white font-semibold">{category.name}</div>
                <div className="text-gray-400 text-sm">{category.count} items</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotedContent