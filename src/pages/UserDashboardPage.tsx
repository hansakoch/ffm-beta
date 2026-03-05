import React, { useState } from 'react'
import {
  Home,
  Compass,
  Plus,
  Shuffle,
  RefreshCw,
  UserPlus,
  X,
  Smile,
  Bold,
  Check,
  Radio,
  Image as ImageIcon,
  FileText,
  Tag,
  Lock,
  Type,
  Heart,
  ShoppingBag,
  FileEdit
} from 'lucide-react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'

const UserDashboardPage: React.FC = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true)
  const [postContent, setPostContent] = useState('')
  const maxChars = 3000

  const exploreCreators = [
    {
      id: '1',
      name: 'Mike Rashid',
      username: '@mikerashid',
      avatar: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=200',
      cover: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { posts: 29, photos: 17, videos: 7, likes: 0, products: 4 },
      isFree: false,
      isVerified: true
    },
    {
      id: '2',
      name: 'Kayla Itsines',
      username: '@kaylaitsines',
      avatar: 'https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=200',
      cover: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { posts: 45, photos: 32, videos: 12, likes: 156, products: 8 },
      isFree: true,
      isVerified: true
    },
    {
      id: '3',
      name: 'Jeff Nippard',
      username: '@jeffnippard',
      avatar: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=200',
      cover: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { posts: 67, photos: 23, videos: 34, likes: 892, products: 15 },
      isFree: false,
      isVerified: true
    }
  ]

  return (
    <DashboardLayout>
      {/* CENTER FEED */}
      <main className="flex-1 max-w-[800px] px-6 py-6">
        {/* Story Section */}
        <div className="mb-6">
          <button className="relative group">
            <img
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Your story"
              className="w-20 h-20 rounded-full object-cover border-4 border-[#334155]"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-[#f97316] to-[#9333ea] rounded-full flex items-center justify-center border-2 border-[#0f172a]">
              <Plus size={16} className="text-white" />
            </div>
            <div className="text-sm text-[#e2e8f0] mt-2">Add story</div>
          </button>
        </div>

        {/* Announcements Banner */}
        {showAnnouncement && (
          <div className="bg-[#6366f1]/20 border border-[#6366f1]/50 rounded-lg p-4 mb-6 relative">
            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute top-3 right-3 text-[#e2e8f0] hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
            <div className="flex items-start space-x-3">
              <div className="text-2xl">📢</div>
              <div className="flex-1">
                <div className="font-bold text-[#e2e8f0] mb-1">Announcements</div>
                <p className="text-[#e2e8f0]/80 text-sm">
                  Please keep Public posts family-friendly by avoiding explicit content. Thanks!
                </p>
              </div>
            </div>
          </div>
        )}

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

        {/* Feed Empty State */}
        <div className="bg-[#1e293b] rounded-lg border border-[#334155] p-12 text-center">
          <div className="w-20 h-20 bg-[#334155] rounded-full mx-auto mb-4 flex items-center justify-center">
            <Home size={32} className="text-[#9ca3af]" />
          </div>
          <h3 className="text-xl font-bold text-[#e2e8f0] mb-2">Your feed is empty</h3>
          <p className="text-[#9ca3af] mb-6">
            Follow creators to see their posts here, or create your first post above!
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-opacity"
          >
            <Compass size={20} />
            <span>Explore Creators</span>
          </Link>
        </div>
      </main>

      {/* RIGHT SIDEBAR - Fixed */}
      <aside className="w-[350px] h-[calc(100vh-65px)] sticky top-[65px] border-l border-[#334155] bg-[#0f172a] overflow-y-auto p-4">
        {/* Explore Creators */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#e2e8f0]">Explore Creators</h3>
            <div className="flex space-x-1">
              <button className="p-1.5 hover:bg-[#1e293b] rounded transition-colors">
                <Shuffle size={16} className="text-[#9ca3af]" />
              </button>
              <button className="p-1.5 hover:bg-[#1e293b] rounded transition-colors">
                <RefreshCw size={16} className="text-[#9ca3af]" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {exploreCreators.map((creator) => (
              <div
                key={creator.id}
                className="bg-[#1e293b] rounded-lg border border-[#334155] overflow-hidden hover:border-purple-500/50 transition-all duration-300 relative"
              >
                {/* FREE Badge */}
                {creator.isFree && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    FREE
                  </div>
                )}

                {/* Cover Image */}
                <div className="h-24 bg-gradient-to-br from-purple-900 to-blue-900 relative overflow-hidden">
                  <img
                    src={creator.cover}
                    alt={`${creator.name} cover`}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                {/* Avatar Overlay */}
                <div className="px-3 pb-3">
                  <div className="flex items-end -mt-8 mb-2">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-[#1e293b]"
                    />
                  </div>

                  {/* Creator Info */}
                  <div className="mb-2">
                    <div className="flex items-center space-x-1 mb-0.5">
                      <h4 className="font-bold text-[#e2e8f0] text-sm truncate">{creator.name}</h4>
                      {creator.isVerified && (
                        <Check size={14} className="text-blue-400 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-[#9ca3af] truncate">{creator.username}</p>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between text-xs text-[#9ca3af] mb-3 pb-3 border-b border-[#334155]">
                    <div className="flex items-center space-x-1">
                      <FileEdit size={12} />
                      <span>{creator.stats.posts}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ImageIcon size={12} />
                      <span>{creator.stats.photos}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Radio size={12} />
                      <span>{creator.stats.videos}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart size={12} />
                      <span>{creator.stats.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ShoppingBag size={12} />
                      <span>{creator.stats.products}</span>
                    </div>
                  </div>

                  {/* Follow Button */}
                  <button className="w-full bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold py-2 rounded-lg transition-opacity text-sm flex items-center justify-center space-x-2">
                    <UserPlus size={14} />
                    <span>Follow</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </DashboardLayout>
  )
}

export default UserDashboardPage
