import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { Radio, Filter, X } from 'lucide-react'

const LivePage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const filters = [
    { id: 'all', label: 'Popular' },
    { id: 'featured', label: 'Featured' },
    { id: 'celebrity', label: 'Celebrity' },
    { id: 'active', label: 'More active' },
    { id: 'new', label: 'New Creators' },
    { id: 'free', label: 'Free Subscription' },
    { id: 'gender', label: 'Gender and Age' },
    { id: 'live', label: 'Live' },
    { id: 'promoted', label: 'Promoted' }
  ]

  const liveStreams: any[] = []

  return (
    <DashboardLayout>
      <main className="flex-1 w-full overflow-hidden">
        <div className="w-full py-4 sm:py-6 px-4 sm:px-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <Radio size={24} sm:size={28} className="text-red-500 flex-shrink-0" />
              <h1 className="text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Creators Broadcasting live</h1>
            </div>
            <p className="text-[#9ca3af] text-sm sm:text-base">
              Watch live streams from your favorite creators and interact in real-time
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4 flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-[#334155] text-[#e2e8f0] rounded-lg hover:bg-[#475569] transition-colors flex-1"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>

          <div className="flex gap-4 md:gap-6 flex-col md:flex-row">
            {/* Left Filter Sidebar - Hidden on mobile, shown in modal */}
            <aside className={`w-full md:w-64 bg-[#1e293b] rounded-xl border border-[#334155] p-4 h-fit ${
              showFilters ? 'block' : 'hidden md:block'
            } md:block fixed md:static inset-0 md:inset-auto top-0 left-0 z-40 md:z-auto max-h-screen md:max-h-fit overflow-y-auto bg-[#0f172a] md:bg-[#1e293b] w-full md:w-64 p-4 md:p-4`}>
              <div className="flex items-center justify-between space-x-2 mb-4">
                <div className="flex items-center space-x-2">
                  <Filter size={20} className="text-[#e2e8f0]" />
                  <h3 className="font-bold text-[#e2e8f0]">Filters</h3>
                </div>
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden p-1.5 hover:bg-[#334155] rounded-lg transition-colors"
                >
                  <X size={20} className="text-[#e2e8f0]" />
                </button>
              </div>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white font-bold'
                        : 'text-[#e2e8f0] hover:bg-[#334155]'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 w-full">
              {liveStreams.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-20 bg-[#1e293b] rounded-xl border border-[#334155] px-4">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#334155] rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                    <Radio size={32} sm:size={40} className="text-[#9ca3af]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#e2e8f0] mb-2 text-center">
                    There are no live streams at this time
                  </h3>
                  <p className="text-[#9ca3af] text-center max-w-md mb-6 text-sm sm:text-base">
                    Check back later or follow your favorite creators to get notified when they go live!
                  </p>
                  <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-opacity text-sm sm:text-base">
                    Explore Creators
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {liveStreams.map((stream) => (
                    <div
                      key={stream.id}
                      className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden hover:border-red-500 transition-colors cursor-pointer"
                    >
                      <div className="relative">
                        <img
                          src={stream.thumbnail}
                          alt={stream.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-2 animate-pulse">
                          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                          <span>LIVE</span>
                        </div>
                        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-bold">
                          {stream.viewers} watching
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-[#e2e8f0] mb-2 line-clamp-2">
                          {stream.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <img
                            src={stream.creatorAvatar}
                            alt={stream.creatorName}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="text-sm font-semibold text-[#e2e8f0]">
                              {stream.creatorName}
                            </p>
                            <p className="text-xs text-[#9ca3af]">@{stream.creatorUsername}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}

export default LivePage
