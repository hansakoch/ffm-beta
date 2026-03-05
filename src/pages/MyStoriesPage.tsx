import React from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { Clock, Plus } from 'lucide-react'

const MyStoriesPage: React.FC = () => {
  return (
    <SettingsLayout>
      <div className="max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Clock size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">My stories</h1>
          </div>
          <p className="text-[#9ca3af]">All the stories you've created</p>
        </div>

        {/* Empty State */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg py-16">
          <div className="text-center">
            <div className="w-32 h-32 bg-[#334155] rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={64} className="text-[#9ca3af]" />
            </div>
            <h2 className="text-2xl font-bold text-[#e2e8f0] mb-2">
              No results have been found
            </h2>
            <p className="text-[#9ca3af] mb-8">
              Create your first story and share it with your followers
            </p>
            <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-opacity inline-flex items-center space-x-2">
              <Plus size={20} />
              <span>Add story</span>
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">About Stories</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">24-Hour Stories:</span> Share moments that disappear after 24 hours
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Engage Followers:</span> Keep your audience engaged with quick updates
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Behind the Scenes:</span> Share exclusive behind-the-scenes content
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Multiple Formats:</span> Upload photos, videos, or text stories
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default MyStoriesPage
