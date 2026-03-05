import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { Heart, Image, Video, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const LikesPage: React.FC = () => {
  const likedPosts = [
    {
      id: 1,
      creator: 'Alex Fighter',
      username: 'alexfighter',
      avatar: 'https://i.pravatar.cc/150?img=12',
      type: 'image',
      content: 'Training session highlights from today',
      date: '2024-01-15',
      thumbnail: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      creator: 'Choco Smiles',
      username: 'rosean18420',
      avatar: 'https://i.pravatar.cc/150?img=47',
      type: 'video',
      content: 'New technique breakdown',
      date: '2024-01-14',
      thumbnail: 'https://images.pexels.com/photos/4754147/pexels-photo-4754147.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      creator: 'Justice Jimmy',
      username: 'jimmy_justice',
      avatar: 'https://i.pravatar.cc/150?img=33',
      type: 'text',
      content: 'Upcoming seminar announcement - don\'t miss out!',
      date: '2024-01-13'
    }
  ]

  return (
    <DashboardLayout>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="text-red-500" size={32} />
              <h1 className="text-3xl font-bold text-white">Liked Posts</h1>
            </div>
            <p className="text-gray-400">Content you've liked from creators you follow</p>
          </div>

          {/* Stats */}
          <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155] mb-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Likes</p>
                <p className="text-3xl font-bold text-white">248</p>
              </div>
              <div className="flex space-x-4">
                <div className="text-center">
                  <Image className="text-blue-500 mx-auto mb-1" size={20} />
                  <p className="text-white font-semibold">156</p>
                  <p className="text-gray-400 text-xs">Images</p>
                </div>
                <div className="text-center">
                  <Video className="text-orange-500 mx-auto mb-1" size={20} />
                  <p className="text-white font-semibold">78</p>
                  <p className="text-gray-400 text-xs">Videos</p>
                </div>
                <div className="text-center">
                  <FileText className="text-purple-500 mx-auto mb-1" size={20} />
                  <p className="text-white font-semibold">14</p>
                  <p className="text-gray-400 text-xs">Posts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liked Posts */}
          <div className="space-y-4">
            {likedPosts.map((post) => (
              <div key={post.id} className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden hover:border-purple-500 transition-colors">
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Link to={`/profile/${post.username}`}>
                      <img
                        src={post.avatar}
                        alt={post.creator}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link to={`/profile/${post.username}`} className="hover:underline">
                        <p className="text-white font-semibold">{post.creator}</p>
                        <p className="text-gray-400 text-sm">@{post.username}</p>
                      </Link>
                    </div>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>

                  {post.thumbnail && (
                    <img
                      src={post.thumbnail}
                      alt="Post"
                      className="w-full rounded-lg mb-4 max-h-96 object-cover"
                    />
                  )}

                  <p className="text-white mb-4">{post.content}</p>

                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                      <Heart size={18} fill="currentColor" />
                      <span>Liked</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}

export default LikesPage
