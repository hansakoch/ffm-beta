import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { Search, Lock, Heart, MessageCircle, Crown, Star, Users } from 'lucide-react'

const ExplorePage = () => {
  const [activeRoleFilters, setActiveRoleFilters] = useState<string[]>([])
  const [activeAvailabilityFilters, setActiveAvailabilityFilters] = useState<string[]>([])
  const [activeNicheFilters, setActiveNicheFilters] = useState<string[]>([])

  const roleFilters = ['Athletes', 'Actor / Actress', 'Celebrities']
  const availabilityFilters = ['Live Now', 'Online Now']
  const nicheFilters = ['Bodybuilding', 'Fitness / Gym', 'Combat Sports', 'Martial Arts', 'Nutrition']

  const toggleFilter = (filter: string, filterType: 'role' | 'availability' | 'niche') => {
    if (filterType === 'role') {
      setActiveRoleFilters(prev =>
        prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
      )
    } else if (filterType === 'availability') {
      setActiveAvailabilityFilters(prev =>
        prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
      )
    } else if (filterType === 'niche') {
      setActiveNicheFilters(prev =>
        prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
      )
    }
  }

  const samplePosts: any[] = []

  const topCreators: any[] = []

  return (
    <DashboardLayout>
      <main className="flex-1 w-full overflow-y-auto">
        <div className="w-full py-6 px-4">
          {/* Search Bar */}
          <div className="mb-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search posts, creators, topics..."
              className="w-full pl-12 pr-4 py-3 bg-[#334155] rounded-xl text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          {/* Filter Pills - Responsive Grid */}
          <div className="space-y-6 sm:space-y-7 mb-10 sm:mb-12">
            {/* Role Filters */}
            <div>
              <h3 className="text-xs font-bold text-[#9ca3af] mb-3 uppercase tracking-wider">Who They Are</h3>
              <div className="flex flex-wrap gap-2">
                {roleFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter, 'role')}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeRoleFilters.includes(filter)
                        ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white'
                        : 'bg-[#334155]/60 text-[#cbd5e1] hover:bg-[#475569]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability Filters */}
            <div>
              <h3 className="text-xs font-bold text-[#9ca3af] mb-3 uppercase tracking-wider">When They're Active</h3>
              <div className="flex flex-wrap gap-2">
                {availabilityFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter, 'availability')}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeAvailabilityFilters.includes(filter)
                        ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white'
                        : 'bg-[#334155]/60 text-[#cbd5e1] hover:bg-[#475569]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Niche Filters */}
            <div>
              <h3 className="text-xs font-bold text-[#9ca3af] mb-3 uppercase tracking-wider">What They Do</h3>
              <div className="flex flex-wrap gap-2">
                {nicheFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter, 'niche')}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeNicheFilters.includes(filter)
                        ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white'
                        : 'bg-[#334155]/60 text-[#cbd5e1] hover:bg-[#475569]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Feed */}
          <div className="space-y-4 sm:space-y-6 w-full">
            {samplePosts.length === 0 ? (
              <div className="bg-[#1e293b] rounded-2xl border border-[#334155]/50 p-8 sm:p-16 text-center">
                <Search size={48} sm:size={64} className="text-[#9ca3af] mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-[#e2e8f0] mb-2">Explore creators and content</h3>
                <p className="text-[#9ca3af] text-sm sm:text-base">Browse fitness coaches, combat sports athletes, nutritionists, and more. Follow creators to see their content in your feed.</p>
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
      <aside className="hidden lg:block w-72 h-[calc(100vh-65px)] sticky top-[65px] border-l border-[#334155]/30 bg-gradient-to-br from-[#1e293b]/50 to-[#0f172a]/30 overflow-y-auto p-6">
        <h3 className="text-base font-bold text-[#e2e8f0] mb-6">Suggested Creators</h3>
        <div className="space-y-3">
          {topCreators.length === 0 ? (
            <div className="text-center py-10">
              <Users size={40} className="text-[#9ca3af]/50 mx-auto mb-3" />
              <p className="text-[#9ca3af] text-xs">No creators to suggest yet</p>
            </div>
          ) : (
            topCreators.map((creator, index) => (
              <div key={index} className="flex items-center space-x-2 p-2.5 bg-[#0f172a]/40 rounded-lg border border-[#334155]/30 hover:border-purple-500/50 transition-colors">
                <img
                  src={creator.avatar}
                  alt={`${creator.name} - Fitness & Martial Arts Creator Avatar`}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1">
                    <h4 className="font-semibold text-[#e2e8f0] truncate text-sm">{creator.name}</h4>
                    {creator.verified && (
                      <Star size={12} className="text-yellow-400 fill-current flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-[#9ca3af]">@{creator.username}</p>
                </div>
                <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-2 py-1.5 rounded-md transition-opacity text-xs flex-shrink-0">
                  Follow
                </button>
              </div>
            ))
          )}
        </div>

        {/* Premium Banner */}
        <div className="mt-8 bg-gradient-to-br from-[#f97316]/10 to-[#9333ea]/10 rounded-xl p-5 border border-[#f97316]/20">
          <Crown size={24} className="text-[#f97316]/70 mb-2" />
          <h4 className="font-semibold text-[#e2e8f0] mb-1.5 text-sm">Unlock Premium</h4>
          <p className="text-xs text-[#9ca3af] mb-3.5">
            Get exclusive content from top creators
          </p>
          <button className="w-full bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white font-bold px-3 py-1.5 rounded-lg text-xs">
            Upgrade Now
          </button>
        </div>
      </aside>
    </DashboardLayout>
  )
}

export default ExplorePage
