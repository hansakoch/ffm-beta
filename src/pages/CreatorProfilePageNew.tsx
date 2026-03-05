import React, { useState } from 'react'
import {
  Camera,
  Check,
  Heart,
  Users,
  Star,
  MapPin,
  Briefcase,
  Share2,
  Edit3,
  FileEdit,
  Image as ImageIcon,
  Radio,
  Headphones,
  ShoppingBag,
  Bold,
  FileText,
  Tag,
  Lock,
  Type,
  Smile
} from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout'

const CreatorProfilePageNew: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'photos' | 'videos' | 'audio' | 'shop'>('posts')
  const [viewMode, setViewMode] = useState<'posted' | 'scheduled'>('posted')
  const [postContent, setPostContent] = useState('')
  const maxChars = 3000

  const tabs = [
    { id: 'posts', label: 'Posts', count: 5, icon: FileEdit },
    { id: 'photos', label: 'Photos', count: 0, icon: ImageIcon },
    { id: 'videos', label: 'Videos', count: 4, icon: Radio },
    { id: 'audio', label: 'Audio', count: 0, icon: Headphones },
    { id: 'shop', label: 'Shop', count: 22, icon: ShoppingBag }
  ]

  return (
    <DashboardLayout>
      {/* FULL WIDTH CENTER CONTENT */}
      <main className="flex-1 px-6 py-6">
        {/* Cover Photo */}
        <div className="relative h-64 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 rounded-lg overflow-hidden mb-20">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Cover"
            className="w-full h-full object-cover opacity-60"
          />
          <button className="absolute top-4 right-4 bg-[#1e293b] hover:bg-[#334155] text-[#e2e8f0] px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <Camera size={18} />
            <span>Change Cover</span>
          </button>

          {/* Avatar - Overlapping */}
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#0f172a]"
              />
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-[#f97316] to-[#9333ea] rounded-full flex items-center justify-center border-2 border-[#0f172a] hover:opacity-90 transition-opacity">
                <Camera size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold text-[#e2e8f0]">John Doe</h1>
                <Check size={24} className="text-blue-400" />
              </div>

              {/* Stats Row */}
              <div className="flex items-center space-x-6 text-sm text-[#9ca3af] mb-3">
                <div className="flex items-center space-x-2">
                  <Heart size={16} />
                  <span>31 Likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>9 Subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} />
                  <span>3.6k Admirers</span>
                </div>
              </div>

              {/* Location & Role */}
              <div className="flex items-center space-x-6 text-sm text-[#9ca3af]">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>London, UK</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase size={16} />
                  <span>Fitness Creator</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-opacity flex items-center space-x-2">
                <Edit3 size={18} />
                <span>Edit my page</span>
              </button>
              <button className="bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-[#e2e8f0] font-bold px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Bio */}
          <p className="text-[#e2e8f0] mb-6 max-w-3xl">
            Professional fitness trainer and nutrition coach. Helping people transform their lives through health and wellness.
          </p>
        </div>

        {/* Content Tabs */}
        <div className="border-b border-[#334155] mb-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-4 border-b-2 transition-colors flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-[#e2e8f0]'
                      : 'border-transparent text-[#9ca3af] hover:text-[#e2e8f0]'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{tab.count} {tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Scheduled/Posted Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 bg-[#1e293b] rounded-lg p-1 border border-[#334155]">
            <button
              onClick={() => setViewMode('posted')}
              className={`px-6 py-2 rounded-md transition-colors font-medium ${
                viewMode === 'posted'
                  ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white'
                  : 'text-[#9ca3af] hover:text-[#e2e8f0]'
              }`}
            >
              Posted
            </button>
            <button
              onClick={() => setViewMode('scheduled')}
              className={`px-6 py-2 rounded-md transition-colors font-medium ${
                viewMode === 'scheduled'
                  ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white'
                  : 'text-[#9ca3af] hover:text-[#e2e8f0]'
              }`}
            >
              Scheduled
            </button>
          </div>
        </div>

        {/* Post Composer */}
        <div className="bg-[#1e293b] rounded-lg border border-[#334155] p-5 mb-6">
          <div className="flex items-start space-x-3 mb-4">
            <img
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Your avatar"
              className="w-11 h-11 rounded-full object-cover"
            />
            <div className="flex-1 space-y-3">
              <div className="flex items-center space-x-2">
                <button className="p-1.5 hover:bg-[#334155] rounded transition-colors" title="Bold">
                  <Bold size={18} className="text-[#9ca3af]" />
                </button>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Write something..."
                  className="flex-1 bg-transparent text-[#e2e8f0] placeholder-[#9ca3af] resize-none focus:outline-none min-h-[80px]"
                  maxLength={maxChars}
                />
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between border-t border-[#334155] pt-4">
            <div className="flex items-center space-x-1">
              <button className="p-2 hover:bg-[#334155] rounded transition-colors" title="Image">
                <ImageIcon size={20} className="text-[#9ca3af]" />
              </button>
              <button className="p-2 hover:bg-[#334155] rounded transition-colors" title="File">
                <FileText size={20} className="text-[#9ca3af]" />
              </button>
              <button className="p-2 hover:bg-[#334155] rounded transition-colors" title="Tag">
                <Tag size={20} className="text-[#9ca3af]" />
              </button>
              <button className="p-2 hover:bg-[#334155] rounded transition-colors" title="Lock">
                <Lock size={20} className="text-[#9ca3af]" />
              </button>
              <button className="p-2 hover:bg-[#334155] rounded transition-colors" title="Audio">
                <Radio size={20} className="text-[#9ca3af]" />
              </button>
              <button className="p-2 hover:bg-[#334155] rounded transition-colors" title="Text format">
                <Type size={20} className="text-[#9ca3af]" />
              </button>
              <button className="p-2 hover:bg-[#334155] rounded transition-colors ml-2" title="Emoji">
                <Smile size={20} className="text-[#9ca3af]" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-[#9ca3af]">
                {maxChars}
              </span>
              <button
                className="bg-[#ff6b6b] hover:opacity-90 text-white font-bold px-6 py-2 rounded-lg transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={postContent.trim().length === 0}
              >
                Publish
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        {activeTab === 'posts' && (
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3, 4, 5].map((post) => (
              <div key={post} className="bg-[#1e293b] rounded-lg border border-[#334155] p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-bold text-[#e2e8f0]">John Doe</h4>
                      <Check size={14} className="text-blue-400" />
                      <span className="text-sm text-[#9ca3af]">2 hours ago</span>
                    </div>
                    <p className="text-[#e2e8f0]">
                      Just finished an amazing workout session! Feeling energized and ready to take on the day.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-[#9ca3af]">
                  <button className="flex items-center space-x-2 hover:text-[#e2e8f0] transition-colors">
                    <Heart size={18} />
                    <span>24</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-[#e2e8f0] transition-colors">
                    <Share2 size={18} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'shop' && (
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-[#1e293b] rounded-lg border border-[#334155] overflow-hidden hover:border-purple-500/50 transition-all">
                <div className="aspect-square bg-gradient-to-br from-purple-900 to-blue-900">
                  <img
                    src={`https://images.pexels.com/photos/416717${item}/pexels-photo-416717${item}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                    alt={`Product ${item}`}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[#e2e8f0] mb-1">Product {item}</h4>
                  <p className="text-sm text-[#9ca3af] mb-3">Fitness equipment</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-400">£49.99</span>
                    <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-4 py-2 rounded-lg transition-opacity text-sm">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {(activeTab === 'photos' || activeTab === 'videos' || activeTab === 'audio') && (
          <div className="bg-[#1e293b] rounded-lg border border-[#334155] p-12 text-center">
            <div className="w-20 h-20 bg-[#334155] rounded-full mx-auto mb-4 flex items-center justify-center">
              {activeTab === 'photos' && <ImageIcon size={32} className="text-[#9ca3af]" />}
              {activeTab === 'videos' && <Radio size={32} className="text-[#9ca3af]" />}
              {activeTab === 'audio' && <Headphones size={32} className="text-[#9ca3af]" />}
            </div>
            <h3 className="text-xl font-bold text-[#e2e8f0] mb-2">No {activeTab} yet</h3>
            <p className="text-[#9ca3af]">
              Start uploading {activeTab} to share with your followers
            </p>
          </div>
        )}
      </main>
    </DashboardLayout>
  )
}

export default CreatorProfilePageNew
