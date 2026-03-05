import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { FileEdit, Image, Video, Calendar } from 'lucide-react'

const PostsPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      type: 'image',
      content: 'Check out my latest training session!',
      date: '2024-01-15',
      likes: 234,
      comments: 45,
      thumbnail: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      type: 'video',
      content: 'New technique breakdown video',
      date: '2024-01-14',
      likes: 456,
      comments: 89,
      thumbnail: 'https://images.pexels.com/photos/4754147/pexels-photo-4754147.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      type: 'text',
      content: 'Excited to announce my upcoming seminar!',
      date: '2024-01-13',
      likes: 178,
      comments: 23
    }
  ]

  return (
    <DashboardLayout>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">My Posts</h1>
            <p className="text-gray-400">Manage and view all your content</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
              <FileEdit className="text-purple-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-white">156</p>
              <p className="text-gray-400 text-sm">Total Posts</p>
            </div>
            <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
              <Image className="text-blue-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-white">89</p>
              <p className="text-gray-400 text-sm">Images</p>
            </div>
            <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
              <Video className="text-orange-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-white">67</p>
              <p className="text-gray-400 text-sm">Videos</p>
            </div>
            <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
              <Calendar className="text-green-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-white">12.5k</p>
              <p className="text-gray-400 text-sm">Total Views</p>
            </div>
          </div>

          {/* Posts List */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden hover:border-purple-500 transition-colors">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt="Post thumbnail"
                        className="w-32 h-24 rounded-lg object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          post.type === 'image' ? 'bg-blue-500/20 text-blue-400' :
                          post.type === 'video' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {post.type.toUpperCase()}
                        </span>
                        <span className="text-gray-400 text-sm">{post.date}</span>
                      </div>
                      <p className="text-white mb-3">{post.content}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
                      Edit
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

export default PostsPage
