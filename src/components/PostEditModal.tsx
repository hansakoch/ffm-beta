import React, { useState } from 'react'
import { X, Bold, Italic, Link, Smile, Tag, Lock, DollarSign, Globe, Users, Crown } from 'lucide-react'

interface PostEditModalProps {
  post?: {
    id: string
    content: string
    visibility: 'public' | 'subscribers' | 'ppv'
    price?: string
  }
  isOpen: boolean
  onClose: () => void
  onSave: (postData: any) => void
}

const PostEditModal: React.FC<PostEditModalProps> = ({ post, isOpen, onClose, onSave }) => {
  const [content, setContent] = useState(post?.content || '')
  const [selectedOption, setSelectedOption] = useState<'public' | 'subscribers' | 'ppv' | null>(null)
  const [price, setPrice] = useState(post?.price || '')

  if (!isOpen) return null

  const handleSave = () => {
    const postData = {
      id: post?.id,
      content,
      visibility: selectedOption || post?.visibility || 'public',
      price: selectedOption === 'ppv' ? price : null
    }
    onSave(postData)
    onClose()
  }

  const resetSelection = () => {
    setSelectedOption(null)
    setPrice('')
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Edit post</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Text Formatting Toolbar */}
        <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-200">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bold size={18} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Italic size={18} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Link size={18} className="text-gray-600" />
          </button>
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Smile size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Content Input */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-transparent text-gray-900 placeholder-gray-400 resize-none border-none outline-none text-base leading-relaxed mb-6"
          rows={4}
          placeholder="Write something..."
        />

        {/* Monetization Options */}
        {!selectedOption && (
          <div className="space-y-3 mb-6">
            {/* Set Price Option */}
            <button
              onClick={() => setSelectedOption('ppv')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <DollarSign size={20} />
              <span>Set a price for this post</span>
            </button>

            {/* Subscribers Only Option */}
            <button
              onClick={() => setSelectedOption('subscribers')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-4 rounded-xl transition-all duration-200"
            >
              <div className="text-center">
                <div className="font-semibold">Publish a locked content</div>
                <div className="text-sm opacity-90">viewable only to your subscribers.</div>
              </div>
            </button>
          </div>
        )}

        {/* Price Input for PPV */}
        {selectedOption === 'ppv' && (
          <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
            <div className="flex items-center space-x-2 mb-3">
              <Crown size={20} className="text-purple-600" />
              <span className="font-semibold text-purple-900">Pay-Per-View Content</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Price:</span>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">£</span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="9.99"
                  step="0.01"
                  min="0.01"
                />
              </div>
            </div>
            <button
              onClick={resetSelection}
              className="text-purple-600 hover:text-purple-700 text-sm mt-2"
            >
              Change option
            </button>
          </div>
        )}

        {/* Subscribers Only Confirmation */}
        {selectedOption === 'subscribers' && (
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <Lock size={20} className="text-blue-600" />
              <span className="font-semibold text-blue-900">Subscribers Only</span>
            </div>
            <p className="text-blue-800 text-sm">This content will only be visible to your subscribers.</p>
            <button
              onClick={resetSelection}
              className="text-blue-600 hover:text-blue-700 text-sm mt-2"
            >
              Change option
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Tag size={20} className="text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Lock size={20} className="text-gray-400" />
          </button>
          
          <div className="flex-1"></div>
          
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-2 px-6 rounded-xl transition-all duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostEditModal