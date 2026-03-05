import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { Search, Lock, Heart, MessageCircle, Crown, Star, Users } from 'lucide-react'

const ExplorePage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    'Elite Creators',
    'Verified Pros',
    'Trending Now',
    'Online Now',
    'Premium Content',
    'Quick Responders'
  ]

  const samplePosts: any[] = []

  const topCreators: any[] = []

  return (
    <DashboardLayout>
      <main className="flex-1">
        <div className="max-w-5xl mx-auto py-6">
          {/* Search Bar */}
          <div className="mb-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search posts, creators, topics..."
              className="w-full pl-12 pr-4 py-3 bg-[#334155] rounded-xl text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white'
                    : 'bg-[#334155] text-[#e2e8f0] hover:bg-[#475569]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Content Feed */}
          <div className="space-y-6">
            {samplePosts.length === 0 ? (
              <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-12 text-center">
                <Search size={64} className="text-[#9ca3af] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#e2e8f0] mb-2">No posts yet</h3>
                <p className="text-[#9ca3af]">Be the first to create content and share with the community!</p>
              </div>
            ) : (
              samplePosts.map((post) => (
                <div key={post.id} className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden">
                  {/* Post Header */}
                  <div className="p-4 flex items-center space-x-3">
                    <img
                      src={post.avatar}
                      alt={`${post.creator} - Fitness & Martial Arts Creator Profile Picture`}
                      className="w-12 h-12 rounded-full object-cover"
                      width="48"
                      height="48"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-[#e2e8f0]">{post.creator}</h3>
                        {post.verified && (
                          <Star size={16} className="text-yellow-400 fill-current" />
                        )}
                      </div>
                      <p className="text-sm text-[#9ca3af]">@{post.username}</p>
                    </div>
                    <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-4 py-2 rounded-lg transition-opacity">
                      Follow
                    </button>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-4">
                    <p className="text-[#e2e8f0] mb-3">{post.content}</p>

                    {/* Post Image/Media */}
                    {post.image && (
                      <div className="relative rounded-lg overflow-hidden mb-3">
                        {post.isLocked && (
                          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                            <Lock size={48} className="text-white mb-3" />
                            <p className="text-white font-bold text-lg mb-2">Unlock this content</p>
                            <p className="text-[#9ca3af] mb-4">{post.price}</p>
                            <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white font-bold px-6 py-3 rounded-lg">
                              Subscribe to Unlock
                            </button>
                          </div>
                        )}
                        <img
                          src={post.image}
                          alt={`${post.creator} - Fitness and martial arts content post`}
                          className={`w-full h-96 object-cover ${post.isLocked ? 'blur-lg' : ''}`}
                          width="800"
                          height="384"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {post.isLocked && !post.image && (
                      <div className="bg-[#0f172a] rounded-lg p-8 text-center border border-[#334155]">
                        <Lock size={48} className="text-[#9ca3af] mx-auto mb-3" />
                        <p className="text-white font-bold text-lg mb-2">Premium Content</p>
                        <p className="text-[#9ca3af] mb-4">Subscribe to unlock {post.price}</p>
                        <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white font-bold px-6 py-3 rounded-lg">
                          Subscribe Now
                        </button>
                      </div>
                    )}

                    {/* Engagement Stats */}
                    <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-[#334155]">
                      <button className="flex items-center space-x-2 text-[#9ca3af] hover:text-red-400 transition-colors">
                        <Heart size={20} />
                        <span className="font-semibold">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-[#9ca3af] hover:text-blue-400 transition-colors">
                        <MessageCircle size={20} />
                        <span className="font-semibold">{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 h-[calc(100vh-65px)] sticky top-[65px] border-l border-[#334155] bg-[#1e293b] overflow-y-auto p-6">
        <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">Suggested Creators</h3>
        <div className="space-y-4">
          {topCreators.length === 0 ? (
            <div className="text-center py-8">
              <Users size={48} className="text-[#9ca3af] mx-auto mb-3" />
              <p className="text-[#9ca3af] text-sm">No creators to suggest yet</p>
            </div>
          ) : (
            topCreators.map((creator, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-[#0f172a] rounded-lg border border-[#334155] hover:border-purple-500 transition-colors">
                <img
                  src={creator.avatar}
                  alt={`${creator.name} - Fitness & Martial Arts Creator Avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1">
                    <h4 className="font-bold text-[#e2e8f0] truncate">{creator.name}</h4>
                    {creator.verified && (
                      <Star size={14} className="text-yellow-400 fill-current flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-[#9ca3af]">@{creator.username}</p>
                  <div className="flex items-center space-x-1 text-xs text-[#9ca3af] mt-1">
                    <Users size={12} />
                    <span>{creator.followers} followers</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-3 py-2 rounded-lg transition-opacity text-sm">
                  Follow
                </button>
              </div>
            ))
          )}
        </div>

        {/* Premium Banner */}
        <div className="mt-6 bg-gradient-to-br from-[#f97316]/20 to-[#9333ea]/20 rounded-xl p-6 border border-[#f97316]/30">
          <Crown size={32} className="text-[#f97316] mb-3" />
          <h4 className="font-bold text-[#e2e8f0] mb-2">Unlock Premium</h4>
          <p className="text-sm text-[#9ca3af] mb-4">
            Get exclusive access to premium content from top creators
          </p>
          <button className="w-full bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white font-bold px-4 py-2 rounded-lg">
            Upgrade Now
          </button>
        </div>
      </aside>
    </DashboardLayout>
  )
}

export default ExplorePage
