import React, { useState } from 'react'
import PostEditModal from './PostEditModal'
import TipAnimation from './TipAnimation'
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark, 
  MoreHorizontal,
  Play,
  Volume2,
  VolumeX,
  Download,
  Flag,
  Eye,
  Lock,
  Crown,
  Globe,
  Users
} from 'lucide-react'

interface PostFile {
  id: string
  type: 'image' | 'video' | 'document'
  url: string
  thumbnail?: string
  size?: string
  name?: string
}

interface PostData {
  id: string
  author: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  content: string
  files: PostFile[]
  visibility: 'public' | 'subscribers' | 'ppv'
  price?: string
  isPinned?: boolean
  timestamp: string
  likes: number
  comments: number
  shares: number
  isLiked: boolean
  isBookmarked: boolean
  isPurchased?: boolean
  tags?: string[]
  category?: string
  targetAudience?: string
  duration?: string
  difficulty?: string
  allowComments?: boolean
  allowSharing?: boolean
  contentWarning?: string
  isExclusive?: boolean
  exclusiveUntil?: string
  tipGoal?: number
  tipGoalCurrent?: number
  tipGoalDescription?: string
  tipGoal?: number
  tipGoalCurrent?: number
  tipGoalDescription?: string
}

interface PostDisplayProps {
  post: PostData
  onLike?: (postId: string) => void
  onComment?: (postId: string) => void
  onShare?: (postId: string) => void
  onBookmark?: (postId: string) => void
  onPurchase?: (postId: string) => void
  onTip?: (postId: string, amount: number) => void
}

const PostDisplay: React.FC<PostDisplayProps> = ({
  post,
  onLike,
  onComment,
  onShare,
  onBookmark,
  onPurchase,
  onTip
}) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showTipModal, setShowTipModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showTipAnimation, setShowTipAnimation] = useState(false)
  const [tipAnimationType, setTipAnimationType] = useState<'money' | 'champagne' | 'confetti' | 'hearts'>('money')
  const [tipAmount, setTipAmount] = useState(0)
  const [isVideoMuted, setIsVideoMuted] = useState(true)

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return date.toLocaleDateString()
  }

  const getVisibilityIcon = () => {
    switch (post.visibility) {
      case 'public':
        return <Globe size={14} className="text-green-400" />
      case 'subscribers':
        return <Users size={14} className="text-blue-400" />
      case 'ppv':
        return <Crown size={14} className="text-purple-400" />
      default:
        return null
    }
  }

  const getVisibilityLabel = () => {
    switch (post.visibility) {
      case 'public':
        return 'Public'
      case 'subscribers':
        return 'Subscribers Only'
      case 'ppv':
        return `PPV ${post.price}`
      default:
        return ''
    }
  }

  const isContentLocked = post.visibility === 'ppv' && !post.isPurchased

  const renderMediaContent = () => {
    if (post.files.length === 0) return null

    const images = post.files.filter(f => f.type === 'image')
    const videos = post.files.filter(f => f.type === 'video')
    
    const getImageGridLayout = (count: number) => {
      if (count === 1) return 'grid grid-cols-1'
      if (count === 2) return 'grid grid-cols-2 gap-2'
      if (count === 3) return 'grid grid-cols-3 gap-2'
      if (count === 4) return 'grid grid-cols-2 gap-2'
      if (count === 5) return 'grid grid-cols-3 gap-2'
      return 'grid grid-cols-3 gap-2'
    }
    
    const getImageAspectRatio = (count: number, index: number) => {
      if (count === 1) return 'aspect-video'
      if (count === 4 && index >= 2) return 'aspect-square'
      if (count === 5 && index === 0) return 'aspect-video col-span-2'
      if (count === 5 && index > 0) return 'aspect-square'
      return 'aspect-square'
    }

    return (
      <div className="mt-4">
        {/* Images */}
        {images.length > 0 && (
          <div className="relative">
            {isContentLocked ? (
              <div className="relative aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                <div className="text-center">
                  <Lock size={48} className="text-gray-400 mx-auto mb-4" />
                  <div className="text-white font-bold mb-2">Premium Content</div>
                  <div className="text-gray-300 text-sm mb-4">Purchase to view this content</div>
                  <button
                    onClick={() => onPurchase?.(post.id)}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    Buy for {post.price}
                  </button>
                </div>
              </div>
            ) : (
              <div className={getImageGridLayout(images.length)}>
                {images.map((image, index) => (
                  <div key={image.id} className={`relative ${getImageAspectRatio(images.length, index)}`}>
                    <img
                      src={image.url}
                      alt={`Post content ${index + 1}`}
                      className="w-full h-full rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  </div>
                ))}
                
                {/* Image counter for multiple images */}
                {images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                      1 / {images.length}
                    </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Videos */}
        {videos.length > 0 && (
          <div className="mt-4">
            {videos.map((video, index) => (
              <div key={video.id} className="relative">
                {isContentLocked ? (
                  <div className="relative aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                    <div className="text-center">
                      <Lock size={48} className="text-gray-400 mx-auto mb-4" />
                      <div className="text-white font-bold mb-2">Premium Video</div>
                      <div className="text-gray-300 text-sm mb-4">Purchase to watch this video</div>
                      <button
                        onClick={() => onPurchase?.(post.id)}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
                      >
                        Buy for {post.price}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <video
                      src={video.url}
                      poster={video.thumbnail}
                      controls
                      muted={isVideoMuted}
                      className="w-full rounded-xl max-h-96"
                    />
                    
                    <button
                      onClick={() => setIsVideoMuted(!isVideoMuted)}
                      className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      {isVideoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
      {/* Post Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {/* Pin indicator */}
            {post.isPinned && (
              <div className="absolute -top-2 -left-2 bg-orange-500 text-white p-1 rounded-full">
                📌
              </div>
            )}
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {post.author.avatar}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-white font-bold">{post.author.name}</span>
                {post.author.verified && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                <span className="text-gray-400">@{post.author.username}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-gray-400 text-sm">{formatTimestamp(post.timestamp)}</span>
                <span className="text-gray-600">•</span>
                <div className="flex items-center space-x-1">
                  {getVisibilityIcon()}
                  <span className="text-gray-400 text-sm">{getVisibilityLabel()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <MoreHorizontal size={20} className="text-gray-400" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-xl shadow-xl border border-gray-700 z-10">
                <div className="py-2">
                  <button 
                    onClick={() => {
                      setShowEditModal(true)
                      setShowDropdown(false)
                    }}
                    className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 transition-colors flex items-center space-x-2"
                  >
                    <span>✏️</span>
                    <span>Edit post</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 transition-colors flex items-center space-x-2">
                    <span>📌</span>
                    <span>Pin to your profile</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 transition-colors flex items-center space-x-2">
                    <span>🔗</span>
                    <span>Copy link</span>
                  </button>
                  <div className="border-t border-gray-700 my-1"></div>
                  <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 transition-colors flex items-center space-x-2">
                    <Download size={16} />
                    <span>Save Media</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 transition-colors flex items-center space-x-2">
                    <Flag size={16} />
                    <span>Report Post</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-gray-700/50 transition-colors flex items-center space-x-2">
                    <span>🗑️</span>
                    <span>Delete post</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Post Content */}
        {post.content && (
          <div className="mt-4">
            <p className="text-white leading-relaxed whitespace-pre-wrap">{post.content}</p>
          </div>
        )}

        {/* Content Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 5).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 5 && (
              <span className="px-2 py-1 bg-gray-600/50 text-gray-400 rounded-full text-xs">
                +{post.tags.length - 5} more
              </span>
            )}
          </div>
        )}
        
        {/* Content Details */}
        {(post.category || post.difficulty || post.duration) && (
          <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400">
            {post.category && (
              <span className="flex items-center">
                <span className="mr-1">📂</span>
                {post.category}
              </span>
            )}
            {post.difficulty && (
              <span className="flex items-center">
                <span className="mr-1">⚡</span>
                {post.difficulty}
              </span>
            )}
            {post.duration && (
              <span className="flex items-center">
                <span className="mr-1">⏱️</span>
                {post.duration}
              </span>
            )}
            {post.targetAudience && (
              <span className="flex items-center">
                <span className="mr-1">🎯</span>
                {post.targetAudience}
              </span>
            )}
          </div>
        )}
        
        {/* Content Warning */}
        {post.contentWarning && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">⚠️</span>
              <span className="text-yellow-300 font-semibold text-sm">Content Warning:</span>
              <span className="text-yellow-200 text-sm">{post.contentWarning}</span>
            </div>
          </div>
        )}
        
        {/* Exclusive Content Badge */}
        {post.isExclusive && (
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-purple-400">⭐</span>
              <span className="text-purple-300 font-semibold text-sm">Exclusive Content</span>
              {post.exclusiveUntil && (
                <span className="text-purple-200 text-sm">
                  Until {new Date(post.exclusiveUntil).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Media Content */}
        {renderMediaContent()}
      </div>

      {/* Post Footer */}
      <div className="px-6 py-4 border-t border-gray-700/50">
        <div className="flex items-center justify-between">
          {/* Engagement Buttons */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onLike?.(post.id)}
              className={`flex items-center space-x-2 transition-colors ${
                post.isLiked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
              }`}
            >
              <Heart size={20} className={post.isLiked ? 'fill-current' : ''} />
              <span className="text-sm">{post.likes}</span>
            </button>

            <button
              onClick={() => onComment?.(post.id)}
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="text-sm">{post.comments}</span>
            </button>

            <button
              onClick={() => onShare?.(post.id)}
              className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              <Share size={20} />
              <span className="text-sm">{post.shares}</span>
            </button>
          </div>

          {/* Tip Goal Progress */}
          {post.tipGoal && (
            <div className="mt-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🎯</span>
                  <span className="text-white font-semibold">Tip Goal</span>
                </div>
                <div className="text-yellow-400 font-bold">
                  £{post.tipGoalCurrent || 0} / £{post.tipGoal}
                </div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(((post.tipGoalCurrent || 0) / post.tipGoal) * 100, 100)}%` }}
                ></div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 text-sm mb-2">{post.tipGoalDescription}</p>
                {(post.tipGoalCurrent || 0) >= post.tipGoal ? (
                  <div className="text-green-400 font-bold text-sm flex items-center justify-center space-x-1">
                    <span>🎉</span>
                    <span>Goal Reached! Thank you!</span>
                  </div>
                ) : (
                  <div className="text-yellow-400 text-sm">
                    £{post.tipGoal - (post.tipGoalCurrent || 0)} left to reach goal
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bookmark */}
          {/* Tip Button */}
          <button
            onClick={() => setShowTipModal(true)}
            className="flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <span className="text-lg">💰</span>
            <span className="text-sm">Tip</span>
          </button>

          <button
            onClick={() => onBookmark?.(post.id)}
            className={`transition-colors ${
              post.isBookmarked ? 'text-orange-400' : 'text-gray-400 hover:text-orange-400'
            }`}
          >
            <Bookmark size={20} className={post.isBookmarked ? 'fill-current' : ''} />
          </button>
        </div>

        {/* Engagement Summary */}
        {(post.likes > 0 || post.comments > 0) && (
          <div className="mt-3 pt-3 border-t border-gray-700/50">
            <div className="text-gray-400 text-sm">
              {post.likes > 0 && (
                <span>{post.likes} like{post.likes !== 1 ? 's' : ''}</span>
              )}
              {post.likes > 0 && post.comments > 0 && <span> • </span>}
              {post.comments > 0 && (
                <span>{post.comments} comment{post.comments !== 1 ? 's' : ''}</span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Tip Modal */}
      {showTipModal && (
        <TipModal
          onClose={() => setShowTipModal(false)}
          onTip={(amount, animationType) => {
            onTip?.(post.id, amount)
            setTipAmount(amount)
            setTipAnimationType(animationType || 'money')
            setShowTipAnimation(true)
            setShowTipModal(false)
          }}
          post={post}
        />
      )}

      {/* Tip Animation */}
      {showTipAnimation && (
        <TipAnimation
          type={tipAnimationType}
          amount={tipAmount}
          isVisible={showTipAnimation}
          onAnimationComplete={() => setShowTipAnimation(false)}
        />
      )}

      {/* Edit Modal */}
      <PostEditModal
        post={post}
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={(postData) => {
          console.log('Saving post:', postData)
          setShowEditModal(false)
        }}
      />
    </div>
  )
}

// Tip Modal Component
const TipModal: React.FC<{
  post: PostData
  onClose: () => void
  onTip: (amount: number, animationType?: 'money' | 'champagne' | 'confetti' | 'hearts') => void
}> = ({ post, onClose, onTip }) => {
  const [customAmount, setCustomAmount] = useState('')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [selectedAnimation, setSelectedAnimation] = useState<'money' | 'champagne' | 'confetti' | 'hearts' | 'beer' | 'wine' | 'cocktail' | 'coffee' | 'cake'>('money')
  const [selectedGift, setSelectedGift] = useState<string | null>(null)

  const quickAmounts = [1, 5, 10, 20, 50, 100]
  
  const gifts = [
    { id: 'rose', name: 'Rose', emoji: '🌹', value: 2 },
    { id: 'beer', name: 'Beer', emoji: '🍺', value: 5 },
    { id: 'cake', name: 'Cake', emoji: '🎂', value: 10 },
    { id: 'protein', name: 'Protein', emoji: '🥤', value: 15 },
    { id: 'steak', name: 'Steak', emoji: '🥩', value: 20 },
    { id: 'champagne', name: 'Champagne', emoji: '🍾', value: 25 },
    { id: 'ffm-tokens', name: 'FFM Tokens', emoji: '🪙', value: 30 },
    { id: 'diamond', name: 'Diamond', emoji: '💎', value: 50 },
    { id: 'crown', name: 'Crown', emoji: '👑', value: 100 },
    { id: 'ffm-gold', name: 'Gold FFM', emoji: '🏆', value: 200 },
    { id: 'luxury-car', name: 'Luxury Car', emoji: '🏎️', value: 500 },
    { id: 'private-jet', name: 'Private Jet', emoji: '✈️', value: 1000 },
    { id: 'yacht', name: 'Yacht', emoji: '🛥️', value: 2000 },
    { id: 'mansion', name: 'Mansion', emoji: '🏰', value: 5000 },
    { id: 'island', name: 'Private Island', emoji: '🏝️', value: 10000 },
    { id: 'rocket', name: 'Rocket Ship', emoji: '🚀', value: 25000 },
    { id: 'golden-throne', name: 'Golden Throne', emoji: '👑', value: 50000 },
    { id: 'mega-yacht', name: 'Mega Yacht', emoji: '🛳️', value: 100000 }
  ]

  const handleTip = () => {
    let amount = 0;
    
    if (selectedGift) {
      amount = gifts.find(gift => gift.id === selectedGift)?.value || 0;
    } else {
      amount = selectedAmount || parseFloat(customAmount);
    }
    
    if (amount > 0) {
      onTip(amount, selectedAnimation)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-md w-full p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            {selectedGift ? gifts.find(gift => gift.id === selectedGift)?.emoji : '💰'}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Send a Tip</h3>
          <p className="text-gray-300">Show your appreciation to {post.author.name}</p>
        </div>

        {/* Gift Selection */}
        <div className="mb-6">
          <h4 className="block text-sm font-medium text-gray-300 mb-3">
            Send a Gift
          </h4>
          <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
            {gifts.map((gift) => (
              <button
                key={gift.id}
                onClick={() => {
                  setSelectedGift(gift.id === selectedGift ? null : gift.id);
                  setSelectedAmount(null);
                  setCustomAmount('');
                }}
                className={`py-2 px-1 rounded-xl font-bold transition-all flex flex-col items-center text-center ${
                  selectedGift === gift.id
                    ? gift.value >= 500 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                      : gift.value >= 100
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className={`mb-1 ${gift.value >= 500 ? 'text-lg' : gift.value >= 100 ? 'text-base' : 'text-sm'}`}>
                  {gift.emoji}
                </span>
                <span className="text-xs leading-tight">{gift.name}</span>
                <span className={`text-xs font-bold mt-1 ${
                  gift.value >= 1000 ? 'text-purple-300' :
                  gift.value >= 500 ? 'text-yellow-300' :
                  gift.value >= 100 ? 'text-orange-300' : ''
                }`}>
                  £{gift.value >= 1000 ? `${gift.value/1000}K` : gift.value}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mb-6">
          — OR —
        </div>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount)
                setCustomAmount('')
                setSelectedGift(null)
              }}
              className={`py-3 px-4 rounded-xl font-bold transition-all ${
                selectedAmount === amount
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              £{amount}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Custom Amount
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-600 bg-gray-700/30 text-gray-400">£</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedAmount(null)
                setSelectedGift(null)
              }}
              className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-r-xl focus:ring-2 focus:ring-yellow-500 text-white"
              placeholder="Enter amount"
            />
          </div>
        </div>

        {/* Animation Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tip Animation
          </label>
          <div className="grid grid-cols-5 gap-2 mb-3">
            <button
              onClick={() => setSelectedAnimation('wine')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'wine'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🍷</span>
              <span className="text-xs">Wine</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('champagne')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'champagne'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🍾</span>
              <span className="text-xs">Champagne</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('whiskey')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'whiskey'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🥃</span>
              <span className="text-xs">Whiskey</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('protein')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'protein'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🥤</span>
              <span className="text-xs">Protein</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('steak')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'steak'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🥩</span>
              <span className="text-xs">Steak</span>
            </button>
          </div>
          
          <div className="grid grid-cols-5 gap-2">
            <button
              onClick={() => setSelectedAnimation('hearts')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'hearts'
                  ? 'bg-gradient-to-r from-pink-500 to-red-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">❤️</span>
              <span className="text-xs">Hearts</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('fire')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'fire'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🔥</span>
              <span className="text-xs">Fire</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('sparkles')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'sparkles'
                  ? 'bg-gradient-to-r from-yellow-400 to-white text-black'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">✨</span>
              <span className="text-xs">Sparkles</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('golden-rain')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'golden-rain'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🌧️</span>
              <span className="text-xs">Gold Rain</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('diamond-shower')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'diamond-shower'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">💎</span>
              <span className="text-xs">Diamond</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('fireworks')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'fireworks'
                  ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🎆</span>
              <span className="text-xs">Fireworks</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('champagne-bottle')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'champagne-bottle'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🍾</span>
              <span className="text-xs">Champagne</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('shooting-stars')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'shooting-stars'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🌟</span>
              <span className="text-xs">Stars</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('confetti-cannon')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'confetti-cannon'
                  ? 'bg-gradient-to-r from-rainbow-500 to-rainbow-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🎊</span>
              <span className="text-xs">Confetti</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('magic-sparkles')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'magic-sparkles'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">✨</span>
              <span className="text-xs">Magic</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('rainbow-wave')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'rainbow-wave'
                  ? 'bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🌈</span>
              <span className="text-xs">Rainbow</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('snow-storm')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'snow-storm'
                  ? 'bg-gradient-to-r from-blue-300 to-white text-gray-800'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">❄️</span>
              <span className="text-xs">Snow</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('meteor-shower')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'meteor-shower'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">☄️</span>
              <span className="text-xs">Meteor</span>
            </button>
          </div>
          
          <div className="grid grid-cols-5 gap-2 mt-2">
            <button
              onClick={() => setSelectedAnimation('dumbbell')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'dumbbell'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🏋️</span>
              <span className="text-xs">Dumbbell</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('ffm-tokens')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'ffm-tokens'
                  ? 'bg-gradient-to-r from-gray-400 to-purple-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🪙</span>
              <span className="text-xs">FFM</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('ffm-gold')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'ffm-gold'
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🏆</span>
              <span className="text-xs">Gold FFM</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('trophy')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'trophy'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">🏆</span>
              <span className="text-xs">Trophy</span>
            </button>
            <button
              onClick={() => setSelectedAnimation('diamond')}
              className={`p-3 rounded-xl font-bold transition-all flex flex-col items-center ${
                selectedAnimation === 'diamond'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl mb-1">💎</span>
              <span className="text-xs">Diamond</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="py-3 px-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-colors w-1/3"
          >
            Cancel
          </button>
          <button
            onClick={handleTip}
            disabled={!selectedAmount && !parseFloat(customAmount) && !selectedGift}
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 w-2/3"
          >
            {selectedGift 
              ? `Send ${gifts.find(gift => gift.id === selectedGift)?.name} (£${gifts.find(gift => gift.id === selectedGift)?.value})` 
              : 'Send Tip'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostDisplay