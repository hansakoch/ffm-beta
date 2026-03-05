import React from 'react'
import { Plus } from 'lucide-react'

interface Story {
  id: string
  author: {
    name: string
    username: string
    avatar: string
  }
  timestamp: string
  hasUnseenStories: boolean
}

interface StoryRingProps {
  stories: Story[]
  onCreateStory: () => void
  onViewStory: (index: number) => void
  currentUser?: {
    name: string
    avatar: string
  }
}

const StoryRing: React.FC<StoryRingProps> = ({ 
  stories, 
  onCreateStory, 
  onViewStory,
  currentUser 
}) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
      {/* Add Story Button */}
      <div className="flex-shrink-0">
        <button
          onClick={onCreateStory}
          className="relative group"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center border-2 border-gray-500 group-hover:border-orange-400 transition-colors">
            {currentUser ? (
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {currentUser.avatar}
              </div>
            ) : (
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">You</span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-gray-800">
            <Plus size={12} className="text-white" />
          </div>
          <div className="text-center mt-2">
            <div className="text-white text-xs font-medium">Add Story</div>
          </div>
        </button>
      </div>

      {/* Story Rings */}
      {stories.map((story, index) => (
        <div key={story.id} className="flex-shrink-0">
          <button
            onClick={() => onViewStory(index)}
            className="relative group"
          >
            <div className={`w-16 h-16 rounded-full p-0.5 ${
              story.hasUnseenStories 
                ? 'bg-gradient-to-tr from-orange-500 via-purple-500 to-pink-500' 
                : 'bg-gray-600'
            }`}>
              <div className="w-full h-full bg-gray-800 rounded-full p-0.5">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {story.author.avatar}
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <div className="text-white text-xs font-medium truncate w-16">
                {story.author.name}
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  )
}

export default StoryRing