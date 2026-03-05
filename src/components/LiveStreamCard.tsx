import React, { useState, useEffect } from 'react'
import { 
  Video, 
  Users, 
  Heart, 
  Gift, 
  MessageCircle, 
  DollarSign, 
  Crown, 
  Star,
  Clock,
  Target,
  Zap,
  Globe,
  Play,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Settings,
  Share,
  Bookmark,
  Flag
} from 'lucide-react'

interface LiveStreamCardProps {
  stream: {
    id: string
    title: string
    creator: {
      name: string
      username: string
      avatar: string
      verified: boolean
      tier: string
    }
    viewers: number
    duration: string
    category: string
    visibility: 'public' | 'subscribers' | 'ppv'
    ticketPrice?: number
    isRecording?: boolean
    recordingPrice?: number
    hasReplay?: boolean
    streamQuality: 'HD' | '4K' | 'Auto'
    maxViewers?: number
    currentViewers: number
    tipGoal?: {
      current: number
      target: number
      description: string
    }
    streamFeatures: string[]
    streamStats: {
      peakViewers: number
      totalTips: number
      newFollowers: number
      chatMessages: number
    }
    tags: string[]
    thumbnail: string
  }
  onJoin: (streamId: string) => void
  onTip: (streamId: string, amount: number) => void
}

const LiveStreamCard: React.FC<LiveStreamCardProps> = ({ stream, onJoin, onTip }) => {
  const [viewerCount, setViewerCount] = useState(stream.viewers)
  const [tipAmount, setTipAmount] = useState('')
  const [showTipModal, setShowTipModal] = useState(false)

  // Simulate live viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 5) - 2)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const tipGoalProgress = stream.tipGoal 
    ? (stream.tipGoal.current / stream.tipGoal.target) * 100 
    : 0

  return (
    <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl border-2 border-gray-700/50 overflow-hidden hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-red-500/30">
      {/* Stream Thumbnail */}
      <div className="relative aspect-video">
        <img 
          src={stream.thumbnail} 
          alt={stream.title}
          className="w-full h-full object-cover"
        />
        
        {/* Live Indicator */}
        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2 animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          <span>LIVE</span>
        </div>
        
        {/* Viewer Count */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
          <Users size={14} />
          <span>{viewerCount.toLocaleString()}</span>
        </div>
        
        {/* Duration */}
        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
          <Clock size={12} />
          <span>{stream.duration}</span>
        </div>
        
        {/* Ticket Price */}
        {stream.visibility === 'ppv' && stream.ticketPrice && (
          <div className="absolute bottom-3 right-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            £{stream.ticketPrice >= 2 ? stream.ticketPrice : 2}
          </div>
        )}
        
        {/* Stream Stats */}
        <div className="bg-gray-700/40 backdrop-blur-sm rounded-xl p-4 mb-4 shadow-lg">
          <h4 className="text-white font-semibold mb-3">Stream Stats</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Peak Viewers:</span>
              <span className="text-white font-bold">{stream.streamStats.peakViewers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total Tips:</span>
              <span className="text-green-400 font-bold">£{stream.streamStats.totalTips}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">New Followers:</span>
              <span className="text-blue-400 font-bold">+{stream.streamStats.newFollowers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Chat Messages:</span>
              <span className="text-purple-400 font-bold">{stream.streamStats.chatMessages}</span>
            </div>
          </div>
        </div>
        
        {/* Recording Options */}
        {stream.isRecording && (
          <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-4 mb-4 shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 font-bold text-sm">RECORDING LIVE</span>
            </div>
            <p className="text-red-300 text-sm mb-2">This stream is being recorded for replay</p>
            {stream.recordingPrice && (
              <p className="text-gray-300 text-xs">Replay will be available for £{stream.recordingPrice}</p>
            )}
          </div>
        )}
        
        {/* Visibility Indicator */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-1">
          {stream.visibility === 'public' && (
            <>
              <Globe size={12} className="text-green-400" />
              <span className="text-green-400 text-xs font-bold">FREE</span>
            </>
          )}
          {stream.visibility === 'subscribers' && (
            <>
              <Users size={12} className="text-blue-400" />
              <span className="text-blue-400 text-xs font-bold">SUBS</span>
            </>
          )}
          {stream.visibility === 'ppv' && (
            <>
              <Crown size={12} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-bold">PPV</span>
            </>
          )}
        </div>
      </div>

      {/* Stream Info */}
      <div className="p-6">
        {/* Creator Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            {stream.creator.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold">{stream.creator.name}</span>
              {stream.creator.verified && (
                <Star size={16} className="text-yellow-400 fill-current" />
              )}
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">
                {stream.creator.tier}
              </span>
            </div>
            <p className="text-gray-400 text-sm">@{stream.creator.username}</p>
          </div>
        </div>

        {/* Stream Title */}
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{stream.title}</h3>
        
        {/* Category & Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
            {stream.category}
          </span>
          {stream.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-600/50 text-gray-300 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Tip Goal Progress */}
        {stream.tipGoal && (
          <div className="mb-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30 rounded-xl p-4 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Target size={16} className="text-yellow-400" />
                <span className="text-white font-semibold text-sm">Tip Goal</span>
              </div>
              <div className="text-yellow-400 font-bold text-sm">
                £{stream.tipGoal.current} / £{stream.tipGoal.target}
              </div>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(tipGoalProgress, 100)}%` }}
              ></div>
            </div>
            
            <p className="text-gray-300 text-xs">{stream.tipGoal.description}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => onJoin(stream.id)}
            className="flex-1 font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white text-sm shadow-lg hover:shadow-red-500/40 hover:scale-105"
          >
            <Video size={18} />
            <span>
              {stream.visibility === 'public' ? 'Join Free' :
               stream.visibility === 'subscribers' ? 'Join (Subscribers)' :
               `Buy Ticket £${stream.ticketPrice}`}
            </span>
            {stream.maxViewers && (
              <span className="text-gray-400">/{stream.maxViewers}</span>
            )}
          </button>
          
          {/* Stream Quality */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${
              stream.streamQuality === '4K' ? 'bg-purple-400' :
              stream.streamQuality === 'HD' ? 'bg-blue-400' : 'bg-green-400'
            }`}></div>
            <span>{stream.streamQuality}</span>
          </div>
          
          {/* Recording Indicator */}
          {stream.isRecording && (
            <div className="absolute bottom-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>REC</span>
            </div>
          )}
          
          <button
            onClick={() => setShowTipModal(true)}
            className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center space-x-1 text-sm shadow-lg hover:shadow-yellow-500/30 hover:scale-105"
          >
            <Gift size={16} />
            <span>Tip</span>
          </button>
          
          <button className="bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-lg transition-all duration-300 shadow-lg hover:scale-110">
            <Share size={16} />
          </button>

          <button className="bg-gray-700/50 hover:bg-gray-700 text-white p-2 rounded-lg transition-all duration-300 shadow-lg hover:scale-110">
            <Bookmark size={16} />
          </button>
        </div>
        
        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 text-sm flex items-center justify-center space-x-1 shadow-lg hover:shadow-blue-500/40 hover:scale-105">
            <Users size={14} />
            <span>Follow</span>
          </button>

          <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 text-sm flex items-center justify-center space-x-1 shadow-lg hover:shadow-purple-500/40 hover:scale-105">
            <MessageCircle size={14} />
            <span>Message</span>
          </button>

          {stream.hasReplay && (
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-green-500/40 hover:scale-110">📹</button>
          )}
        </div>
      </div>

      {/* Tip Modal */}
      {showTipModal && (
        <TipModal
          onClose={() => setShowTipModal(false)}
          onTip={(amount) => {
            onTip(stream.id, amount)
            setShowTipModal(false)
          }}
          creator={stream.creator}
        />
      )}
    </div>
  )
}

// Tip Modal Component
const TipModal: React.FC<{
  onClose: () => void
  onTip: (amount: number) => void
  creator: any
}> = ({ onClose, onTip, creator }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const quickAmounts = [5, 10, 25, 50, 100]

  const handleTip = () => {
    const amount = selectedAmount || parseFloat(customAmount)
    if (amount > 0) {
      onTip(amount)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800/95 backdrop-blur-lg rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-gray-700/50">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            💰
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Send Live Tip</h3>
          <p className="text-gray-300">Support {creator.name} during their live stream</p>
        </div>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount)
                setCustomAmount('')
              }}
              className={`py-3 px-4 rounded-xl font-bold transition-all duration-300 ${
                selectedAmount === amount
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-2xl shadow-yellow-500/40'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 shadow-lg hover:scale-105'
              }`}
            >
              £{amount}
            </button>
          ))}
          
          {/* Stream Features */}
          <div className="flex flex-wrap gap-2">
            {stream.streamFeatures.map((feature, index) => (
              <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                {feature}
              </span>
            ))}
          </div>
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
              }}
              className="flex-1 px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-r-xl focus:ring-2 focus:ring-yellow-500 text-white shadow-lg hover:border-gray-500 transition-all duration-300"
              placeholder="Enter amount"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border-2 border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Cancel
          </button>
          <button
            onClick={handleTip}
            disabled={!selectedAmount && !parseFloat(customAmount)}
            className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-500/60 hover:scale-105"
          >
            Send Tip
          </button>
        </div>
      </div>
    </div>
  )
}

export default LiveStreamCard