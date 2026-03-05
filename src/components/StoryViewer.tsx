import React, { useState, useEffect } from 'react'
import { X, Heart, MessageCircle, Send, Eye, Clock, Crown, Users, Globe } from 'lucide-react'
import TipAnimation from './TipAnimation'

interface Story {
  id: string
  author: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  type: 'text' | 'media'
  content?: string
  mediaUrl?: string
  mediaType?: 'image' | 'video'
  backgroundColor?: string
  textColor?: string
  fontSize?: string
  textAlign?: string
  visibility: 'public' | 'subscribers' | 'ppv'
  price?: string
  duration: number
  timestamp: string
  views: number
  likes: number
  isLiked: boolean
  isPurchased?: boolean
}

interface StoryViewerProps {
  stories: Story[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  onLike?: (storyId: string) => void
  onPurchase?: (storyId: string) => void
}

const StoryViewer: React.FC<StoryViewerProps> = ({
  stories,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  onLike,
  onPurchase
}) => {
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showReplyInput, setShowReplyInput] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [showTipAnimation, setShowTipAnimation] = useState(false)
  const [tipAnimationType, setTipAnimationType] = useState<'money' | 'champagne' | 'confetti' | 'hearts'>('hearts')
  const [tipAmount, setTipAmount] = useState(0)

  const currentStory = stories[currentIndex]
  const storyDuration = 5000 // 5 seconds per story

  useEffect(() => {
    if (!isOpen || isPaused) return

    setProgress(0)
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          onNext()
          return 0
        }
        return prev + (100 / (storyDuration / 100))
      })
    }, 100)

    return () => clearInterval(interval)
  }, [currentIndex, isOpen, isPaused, onNext])

  if (!isOpen || !currentStory) return null

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'now'
    if (diffInHours < 24) return `${diffInHours}h`
    return `${Math.floor(diffInHours / 24)}d`
  }

  const getVisibilityIcon = () => {
    switch (currentStory.visibility) {
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

  const isContentLocked = currentStory.visibility === 'ppv' && !currentStory.isPurchased

  const handleSendReply = () => {
    if (replyText.trim()) {
      console.log('Sending reply:', replyText)
      setReplyText('')
      setShowReplyInput(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      {/* Story Progress Bars */}
      <div className="absolute top-4 left-4 right-4 flex space-x-1 z-10">
        {stories.map((_, index) => (
          <div key={index} className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-100 shadow-inner"
              style={{ 
                width: index < currentIndex ? '100%' : 
                       index === currentIndex ? `${progress}%` : '0%' 
              }}
            />
          </div>
        ))}
      </div>

      {/* Story Header */}
      <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
            {currentStory.author.avatar}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold">{currentStory.author.name}</span>
              {currentStory.author.verified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <span>{formatTimestamp(currentStory.timestamp)}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                {getVisibilityIcon()}
                <Eye size={12} />
                <span>{currentStory.views}</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors bg-black/20 p-2 rounded-full"
        >
          <X size={24} />
        </button>
      </div>

      {/* Story Content */}
      <div 
        className="w-full max-w-md h-full flex items-center justify-center relative shadow-2xl rounded-3xl overflow-hidden"
        onClick={() => setIsPaused(!isPaused)}
      >
        {isContentLocked ? (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center p-8 backdrop-blur-sm">
            <div className="text-center">
              <Crown size={64} className="text-purple-400 mx-auto mb-6 animate-pulse" style={{animationDuration: '2s'}} />
              <div className="text-white font-bold text-xl mb-2">Premium Story</div>
              <div className="text-gray-300 mb-6">Purchase to view this story</div>
              <button
                onClick={() => onPurchase?.(currentStory.id)}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Buy for {currentStory.price}
              </button>
            </div>
          </div>
        ) : currentStory.type === 'text' ? (
          <div 
            className="w-full h-full flex items-center justify-center p-8"
            style={{ backgroundColor: currentStory.backgroundColor }}
          >
            <div 
              className={`${currentStory.fontSize} font-bold ${
                currentStory.textAlign === 'center' ? 'text-center' : 
                currentStory.textAlign === 'left' ? 'text-left' : 'text-right'
              }`}
              style={{ color: currentStory.textColor }}
            >
              {currentStory.content}
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative">
            {currentStory.mediaType === 'image' ? (
              <img 
                src={currentStory.mediaUrl} 
                alt="Story content"
                className="w-full h-full object-cover"
              />
            ) : (
              <video 
                src={currentStory.mediaUrl}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />
            )}
            {currentStory.content && (
              <div className="absolute bottom-20 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                <p className="text-white">{currentStory.content}</p>
              </div>
            )}
          </div>
        )}

        {/* Navigation Areas */}
        <button 
          onClick={onPrevious}
          className="absolute left-0 top-0 w-1/3 h-full z-10"
        />
        <button 
          onClick={onNext}
          className="absolute right-0 top-0 w-1/3 h-full z-10"
        />
      </div>

      {/* Story Actions */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onLike?.(currentStory.id)}
              className={`flex items-center space-x-2 transition-colors p-2 rounded-full cursor-pointer ${
                currentStory.isLiked ? 'text-red-400' : 'text-white/80 hover:text-red-400'
              } ${currentStory.isLiked ? 'bg-red-500/20' : 'hover:bg-white/10'}`}
            >
              <Heart size={24} className={currentStory.isLiked ? 'fill-current' : ''} />
              <span>{currentStory.likes}</span>
            </button>

            <button
              onClick={() => {
                setTipAmount(5)
                setTipAnimationType('gifts')
                setShowTipAnimation(true)
                // In a real app, you would call an API to process the tip
                console.log('Tipping story:', currentStory.id)
              }}
              className="text-white/80 hover:text-yellow-400 transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
            >
              <span className="text-xl">💰</span>
            </button>

            <button
              onClick={() => setShowReplyInput(!showReplyInput)}
              className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
            >
              <MessageCircle size={24} />
            </button>
          </div>

          {isPaused && (
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
              <span className="text-white text-sm">Paused</span>
            </div>
          )}
        </div>

        {/* Reply Input */}
        {showReplyInput && (
          <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/10">
            <input
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Reply to story..."
              className="flex-1 bg-transparent text-white placeholder-white/60 border-none outline-none px-2 py-1"
              onKeyPress={(e) => e.key === 'Enter' && handleSendReply()}
            />
            <button
              onClick={handleSendReply}
              disabled={!replyText.trim()}
              className="text-white/80 hover:text-white disabled:opacity-50 transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <Send size={20} />
            </button>
          </div>
        )}
      </div>
      
      {/* Tip Animation */}
      {showTipAnimation && (
        <TipAnimation
          type={tipAnimationType}
          amount={tipAmount}
          isVisible={showTipAnimation}
          onAnimationComplete={() => setShowTipAnimation(false)}
        />
      )}
    </div>
  )
}

export default StoryViewer