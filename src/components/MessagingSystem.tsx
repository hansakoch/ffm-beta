import React, { useState } from 'react'
import { 
  ArrowLeft, 
  Send, 
  Paperclip, 
  Smile, 
  Phone, 
  Video, 
  MoreHorizontal,
  Search,
  Plus,
  Star,
  Heart,
  Image,
  Gift
} from 'lucide-react'

interface Message {
  id: string
  senderId: string
  senderName: string
  senderAvatar: string
  content: string
  timestamp: string
  isRead: boolean
  type: 'text' | 'image' | 'video' | 'voice' | 'tip'
  amount?: number
  voiceDuration?: number
  reactions?: { emoji: string; userId: string; userName: string }[]
  isTyping?: boolean
}

interface Conversation {
  id: string
  participant: {
    name: string
    username: string
    avatar: string
    verified: boolean
    isOnline: boolean
    lastSeen?: string
  }
  lastMessage: string
  timestamp: string
  unreadCount: number
  isPaid: boolean
  pricingModel: 'per_character' | 'per_word' | 'per_message' | 'monthly_unlimited'
  rate: number
  rateDisplay: string
  subscriberBenefit: 'free' | 'discount_50' | 'discount_25' | 'none'
  subscriberRate?: number
  subscriberRateDisplay?: string
  isSubscriber: boolean
  isTyping?: boolean
}

const MessagingSystem = () => {
  const [activeConversation, setActiveConversation] = useState<string | null>(null)
  const [messageText, setMessageText] = useState('')
  const [showNewMessage, setShowNewMessage] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingDuration, setRecordingDuration] = useState(0)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const conversations: Conversation[] = [
    {
      id: '1',
      participant: {
        name: 'Marcus "The Beast" Johnson',
        username: 'marcus_beast',
        avatar: 'MJ',
        verified: true,
        isOnline: true
      },
      lastMessage: 'Thanks for the support! Your form is looking great 💪',
      timestamp: '2 minutes ago',
      unreadCount: 2,
      isPaid: true,
      pricingModel: 'per_message',
      rate: 5.00,
      rateDisplay: '£5.00/message',
      subscriberBenefit: 'discount_50',
      subscriberRate: 2.50,
      subscriberRateDisplay: '£2.50/message (50% off)',
      isSubscriber: true,
      isTyping: false
    },
    {
      id: '2',
      participant: {
        name: 'Dr. Luna Chen',
        username: 'dr_luna',
        avatar: 'LC',
        verified: true,
        isOnline: false,
        lastSeen: '1 hour ago'
      },
      lastMessage: 'Here\'s your personalized meal plan 🥗',
      timestamp: '1 hour ago',
      unreadCount: 0,
      isPaid: true,
      pricingModel: 'per_character',
      rate: 0.02,
      rateDisplay: '£0.02/character',
      subscriberBenefit: 'free',
      subscriberRate: 0,
      subscriberRateDisplay: 'FREE for subscribers',
      isSubscriber: true,
      isTyping: false
    },
    {
      id: '3',
      participant: {
        name: 'Jake "Thunder" Thompson',
        username: 'jake_thunder',
        avatar: 'JT',
        verified: true,
        isOnline: true
      },
      lastMessage: 'Ready for tomorrow\'s workout? 🔥',
      timestamp: '3 hours ago',
      unreadCount: 1,
      isPaid: true,
      pricingModel: 'monthly_unlimited',
      rate: 199.99,
      rateDisplay: '£199.99/month unlimited',
      subscriberBenefit: 'none',
      isSubscriber: true,
      isTyping: true
    },
    {
      id: '4',
      participant: {
        name: 'Sarah "Iron" Rodriguez',
        username: 'sarah_iron',
        avatar: 'SR',
        verified: true,
        isOnline: true
      },
      lastMessage: 'Your boxing technique is improving! 🥊',
      timestamp: '1 hour ago',
      unreadCount: 0,
      isPaid: true,
      pricingModel: 'per_word',
      rate: 0.25,
      rateDisplay: '£0.25/word',
      subscriberBenefit: 'discount_25',
      subscriberRate: 0.19,
      subscriberRateDisplay: '£0.19/word (25% off)',
      isSubscriber: false,
      isTyping: false
    }
  ]

  const messages: Message[] = [
    {
      id: '1',
      senderId: 'marcus_beast',
      senderName: 'Marcus Johnson',
      senderAvatar: 'MJ',
      content: 'Hey! Just watched your latest workout video. Your deadlift form is looking solid! 💪',
      timestamp: '10 minutes ago',
      isRead: true,
      type: 'text',
      reactions: [
        { emoji: '💪', userId: 'user1', userName: 'You' }
      ]
    },
    {
      id: '2',
      senderId: 'user1',
      senderName: 'You',
      senderAvatar: 'YU',
      content: 'Thanks Marcus! Your tips really helped. Can you check my form in this video?',
      timestamp: '8 minutes ago',
      isRead: true,
      type: 'text',
      reactions: []
    },
    {
      id: '3',
      senderId: 'marcus_beast',
      senderName: 'Marcus Johnson',
      senderAvatar: 'MJ',
      content: 'voice_message_url_here',
      timestamp: '5 minutes ago',
      isRead: true,
      type: 'voice',
      voiceDuration: 45,
      reactions: [
        { emoji: '🔥', userId: 'user1', userName: 'You' }
      ]
    },
    {
      id: '4',
      senderId: 'marcus_beast',
      senderName: 'Marcus Johnson',
      senderAvatar: 'MJ',
      content: 'Thanks for the support! Your form is looking great 💪',
      timestamp: '2 minutes ago',
      isRead: false,
      type: 'text',
      reactions: []
    }
  ]

  const quickReactions = ['❤️', '👍', '😍', '🔥', '💪', '🙌']

  const filteredConversations = conversations.filter(conv =>
    conv.participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.participant.username.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log('Sending message:', messageText)
      setMessageText('')
      setIsTyping(false)
      
      // Simulate message sent animation
      const messageElement = document.querySelector('.message-input')
      messageElement?.classList.add('animate-pulse')
      setTimeout(() => {
        messageElement?.classList.remove('animate-pulse')
      }, 500)
    }
  }

  const handleVoiceRecord = () => {
    if (isRecording) {
      setIsRecording(false)
      setRecordingDuration(0)
      console.log('Voice message recorded')
    } else {
      setIsRecording(true)
      const timer = setInterval(() => {
        setRecordingDuration(prev => {
          if (prev >= 60) {
            setIsRecording(false)
            clearInterval(timer)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
  }

  const handleReaction = (messageId: string, emoji: string) => {
    console.log(`Adding reaction ${emoji} to message ${messageId}`)
    // Add visual feedback
    const reactionButton = document.querySelector(`[data-message-id="${messageId}"]`)
    reactionButton?.classList.add('animate-bounce')
    setTimeout(() => {
      reactionButton?.classList.remove('animate-bounce')
    }, 500)
  }

  const handleTyping = (text: string) => {
    setMessageText(text)
    if (!isTyping && text.length > 0) {
      setIsTyping(true)
      setTimeout(() => setIsTyping(false), 3000)
    }
  }

  const renderConversationList = () => (
    <div className="w-80 bg-gray-800/50 border-r border-gray-700/50 h-full backdrop-blur-lg">
      {/* Header */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Messages</h2>
          <button 
            onClick={() => setShowNewMessage(true)}
            className="p-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg hover:from-orange-600 hover:to-purple-700 transition-all transform hover:scale-110 shadow-lg"
          >
            <Plus size={20} className="text-white" />
          </button>
        </div>
        <p className="text-gray-400">Connect with your favorite creators</p>
      </div>

      {/* Enhanced Search */}
      <div className="p-4 border-b border-gray-700/50">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.length === 0 ? (
          <div className="p-6 text-center">
            <div className="text-gray-400 mb-4">No conversations found</div>
            <button 
              onClick={() => setShowNewMessage(true)}
              className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              + Start chatting
            </button>
          </div>
        ) : (
          filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setActiveConversation(conversation.id)}
              className={`p-4 border-b border-gray-700/50 cursor-pointer hover:bg-gray-700/30 transition-all duration-200 ${
                activeConversation === conversation.id ? 'bg-gray-700/50 border-l-4 border-orange-500' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {conversation.participant.avatar}
                  </div>
                  {/* Enhanced Online Status */}
                  {conversation.participant.isOnline ? (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800 animate-pulse"></div>
                  ) : (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-gray-500 rounded-full border-2 border-gray-800"></div>
                  )}

                  {/* Typing Indicator */}
                  {conversation.isTyping && (
                    <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-semibold truncate">
                      {conversation.participant.name}
                    </span>
                    {conversation.participant.verified && (
                      <Star size={14} className="text-yellow-400 fill-current flex-shrink-0" />
                    )}
                    {conversation.isPaid && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full flex-shrink-0">
                        PAID
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-gray-300 text-sm truncate">
                      {conversation.isTyping ? (
                        <span className="text-blue-400 italic">typing...</span>
                      ) : (
                        conversation.lastMessage
                      )}
                    </p>
                    {conversation.unreadCount > 0 && (
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs font-bold">
                          {conversation.unreadCount}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-gray-400 text-xs">{conversation.timestamp}</span>
                    {conversation.rate && (
                      <span className="text-gray-400 text-xs">{conversation.rateDisplay}</span>
                    )}
                    {!conversation.participant.isOnline && conversation.participant.lastSeen && (
                      <span className="text-gray-500 text-xs">Last seen {conversation.participant.lastSeen}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )

  const renderChatArea = () => {
    if (!activeConversation) {
      return (
        <div className="flex-1 flex items-center justify-center bg-gray-900/50">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Your Messages</h3>
            <p className="text-gray-400 mb-6">Connect with your favorite creators</p>
            <button 
              onClick={() => setShowNewMessage(true)}
              className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-purple-700 transition-all font-semibold transform hover:scale-105 shadow-lg"
            >
              + Start conversation
            </button>
          </div>
        </div>
      )
    }

    const currentConversation = conversations.find(c => c.id === activeConversation)
    if (!currentConversation) return null

    return (
      <div className="flex-1 flex flex-col">
        {/* Enhanced Chat Header */}
        <div className="p-4 border-b border-gray-700/50 bg-gray-800/50 backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setActiveConversation(null)}
                className="lg:hidden text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {currentConversation.participant.avatar}
                </div>
                {currentConversation.participant.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800 animate-pulse"></div>
                )}
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">
                    {currentConversation.participant.name}
                  </span>
                  {currentConversation.participant.verified && (
                    <Star size={14} className="text-yellow-400 fill-current" />
                  )}
                </div>
                <div className="text-gray-400 text-sm">
                  {currentConversation.participant.isOnline ? (
                    <span className="text-green-400">● Online</span>
                  ) : (
                    <span>Last seen {currentConversation.participant.lastSeen}</span>
                  )}
                  {` • ${currentConversation.rateDisplay}`}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all transform hover:scale-110">
                <Phone size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all transform hover:scale-110">
                <Video size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
          
          {/* Pricing Model Display */}
          <div className="mt-1">
            <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
              currentConversation.pricingModel === 'per_character' ? 'bg-blue-500/20 text-blue-400' :
              currentConversation.pricingModel === 'per_word' ? 'bg-green-500/20 text-green-400' :
              currentConversation.pricingModel === 'per_message' ? 'bg-purple-500/20 text-purple-400' :
              'bg-orange-500/20 text-orange-400'
            }`}>
              {currentConversation.rateDisplay}
            </span>
          </div>
        </div>

        {/* Enhanced Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Enhanced Typing Indicator */}
          {currentConversation.isTyping && (
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {currentConversation.participant.avatar}
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600/50">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-3 group animate-fade-in">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {message.senderAvatar}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-white font-semibold text-sm">{message.senderName}</span>
                  <span className="text-gray-400 text-xs">{message.timestamp}</span>
                  {/* Enhanced Read Receipts */}
                  {message.senderId === 'user1' && (
                    <span className={`text-xs ${message.isRead ? 'text-blue-400' : 'text-gray-500'}`}>
                      {message.isRead ? '✓✓ Read' : '✓ Sent'}
                    </span>
                  )}
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-3 max-w-md relative border border-gray-600/30 hover:border-gray-500/50 transition-all">
                  {message.type === 'text' && (
                    <p className="text-gray-200">{message.content}</p>
                  )}
                  
                  {message.type === 'voice' && (
                    <div className="flex items-center space-x-3">
                      <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                        <span className="text-white">▶️</span>
                      </button>
                      <div className="flex-1">
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full w-1/3 transition-all"></div>
                        </div>
                        <div className="text-gray-300 text-xs mt-1">{message.voiceDuration}s</div>
                      </div>
                      <div className="text-blue-400">🎤</div>
                    </div>
                  )}
                  
                  {/* Enhanced Quick Reactions */}
                  <div className="absolute -bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="flex space-x-1 bg-gray-800 rounded-full p-1 shadow-lg border border-gray-600">
                      {quickReactions.slice(0, 3).map((emoji) => (
                        <button
                          key={emoji}
                          data-message-id={message.id}
                          onClick={() => handleReaction(message.id, emoji)}
                          className="w-6 h-6 hover:bg-gray-700 rounded-full flex items-center justify-center text-sm transition-all transform hover:scale-125"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Message Reactions */}
                {message.reactions && message.reactions.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {message.reactions.map((reaction, index) => (
                      <div key={index} className="bg-gray-600/50 rounded-full px-2 py-1 flex items-center space-x-1 border border-gray-500/30 hover:bg-gray-600/70 transition-all">
                        <span className="text-sm">{reaction.emoji}</span>
                        <span className="text-xs text-gray-300">{reaction.userName}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Message Input */}
        <div className="p-4 border-t border-gray-700/50 bg-gray-800/50 backdrop-blur-lg">
          {/* Enhanced Voice Recording Indicator */}
          {isRecording && (
            <div className="mb-4 bg-red-500/20 border border-red-500/30 rounded-lg p-3 flex items-center space-x-3 animate-pulse">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              <span className="text-red-400 font-semibold">Recording voice message...</span>
              <span className="text-white font-mono">{recordingDuration}s</span>
              <button 
                onClick={handleVoiceRecord}
                className="ml-auto bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-all transform hover:scale-105"
              >
                Stop & Send
              </button>
            </div>
          )}
          
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all transform hover:scale-110">
              <Paperclip size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all transform hover:scale-110">
              <Image size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all transform hover:scale-110">
              <Video size={20} />
            </button>
            <button 
              onClick={handleVoiceRecord}
              className={`p-2 rounded-lg transition-all transform hover:scale-110 ${
                isRecording 
                  ? 'text-red-400 bg-red-500/20 animate-pulse' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              🎤
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all transform hover:scale-110">
              <Gift size={20} />
            </button>
            
            <div className="flex-1 relative message-input">
              <input
                type="text"
                value={messageText}
                onChange={(e) => handleTyping(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-all"
              >
                <Smile size={16} />
              </button>
              
              {/* Enhanced Emoji Picker */}
              {showEmojiPicker && (
                <div className="absolute bottom-full right-0 mb-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-3 animate-fade-in">
                  <div className="grid grid-cols-6 gap-2">
                    {['😀', '😍', '🥰', '😘', '🤗', '🤔', '😎', '🥳', '🔥', '💪', '👍', '❤️', '💯', '🙌', '👏', '🎉'].map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => {
                          setMessageText(prev => prev + emoji)
                          setShowEmojiPicker(false)
                        }}
                        className="w-8 h-8 hover:bg-gray-700 rounded transition-all flex items-center justify-center transform hover:scale-125"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={handleSendMessage}
              disabled={!messageText.trim() && !isRecording}
              className="p-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white rounded-lg transition-all transform hover:scale-110 shadow-lg"
            >
              <Send size={20} />
            </button>
          </div>
          
          {currentConversation.isPaid && (
            <div className="mt-2 text-center">
              <div className={`px-3 py-2 rounded-xl ${
                currentConversation.isSubscriber && currentConversation.subscriberBenefit === 'free' ? 'bg-green-500/20' :
                currentConversation.isSubscriber && (currentConversation.subscriberBenefit === 'discount_50' || currentConversation.subscriberBenefit === 'discount_25') ? 'bg-orange-500/20' :
                'bg-gray-700/30'
              }`}>
                {/* Subscriber Benefits Display */}
                {currentConversation.isSubscriber && currentConversation.subscriberBenefit === 'free' && (
                  <div className="text-center mb-2">
                    <span className="text-green-400 font-bold text-sm">🎉 FREE MESSAGING FOR SUBSCRIBERS!</span>
                  </div>
                )}
                
                {currentConversation.isSubscriber && (currentConversation.subscriberBenefit === 'discount_50' || currentConversation.subscriberBenefit === 'discount_25') && (
                  <div className="text-center mb-2">
                    <span className="text-orange-400 font-bold text-sm">
                      🎉 {currentConversation.subscriberBenefit === 'discount_50' ? '50% SUBSCRIBER DISCOUNT!' : '25% SUBSCRIBER DISCOUNT!'}
                    </span>
                    <div className="text-xs text-gray-400 line-through">{currentConversation.rateDisplay}</div>
                  </div>
                )}
                
                <span className="text-gray-400 text-sm">
                  {currentConversation.pricingModel === 'per_character' && 'Charged per character: '}
                  {currentConversation.pricingModel === 'per_word' && 'Charged per word: '}
                  {currentConversation.pricingModel === 'per_message' && 'Charged per message: '}
                  {currentConversation.pricingModel === 'monthly_unlimited' && 'Unlimited messaging: '}
                  <span className={`font-semibold ${
                    currentConversation.isSubscriber && currentConversation.subscriberBenefit === 'free' ? 'text-green-400' :
                    currentConversation.isSubscriber && (currentConversation.subscriberBenefit === 'discount_50' || currentConversation.subscriberBenefit === 'discount_25') ? 'text-orange-400' :
                    currentConversation.pricingModel === 'per_character' ? 'text-blue-400' :
                    currentConversation.pricingModel === 'per_word' ? 'text-green-400' :
                    currentConversation.pricingModel === 'per_message' ? 'text-purple-400' :
                    'text-orange-400'
                  }`}>
                    {currentConversation.isSubscriber && currentConversation.subscriberRateDisplay ? 
                      currentConversation.subscriberRateDisplay : 
                      currentConversation.rateDisplay}
                  </span>
                </span>
                
                {/* Live Character/Word Counter */}
                {(currentConversation.pricingModel === 'per_character' || currentConversation.pricingModel === 'per_word') && 
                 currentConversation.subscriberBenefit !== 'free' && (
                  <div className="mt-1 text-xs">
                    <span className="text-gray-500">
                      Current message: {currentConversation.pricingModel === 'per_character' ? messageText.length : messageText.split(' ').filter(w => w.length > 0).length} 
                      {currentConversation.pricingModel === 'per_character' ? ' characters' : ' words'}
                    </span>
                    {messageText.length > 0 && (
                      <span className={`ml-2 font-semibold ${
                        currentConversation.isSubscriber && (currentConversation.subscriberBenefit === 'discount_50' || currentConversation.subscriberBenefit === 'discount_25') ? 'text-orange-400' : 'text-green-400'
                      }`}>
                        ≈ £{(currentConversation.pricingModel === 'per_character' 
                          ? messageText.length * (currentConversation.isSubscriber && currentConversation.subscriberRate ? currentConversation.subscriberRate : currentConversation.rate)
                          : messageText.split(' ').filter(w => w.length > 0).length * (currentConversation.isSubscriber && currentConversation.subscriberRate ? currentConversation.subscriberRate : currentConversation.rate)
                        ).toFixed(2)}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {renderConversationList()}
      {renderChatArea()}
      
      {/* New Message Modal */}
      {showNewMessage && (
        <NewMessageModal onClose={() => setShowNewMessage(false)} />
      )}
    </div>
  )
}

// Enhanced New Message Modal Component
const NewMessageModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const creators = [
    { 
      name: 'Marcus Johnson', 
      username: 'marcus_beast', 
      avatar: 'MJ', 
      verified: true, 
      pricingModel: 'per_message',
      rate: 5.00,
      rateDisplay: '£5.00/message', 
      online: true, 
      category: 'UFC/MMA',
      description: 'Premium personal coaching - detailed responses'
    },
    { 
      name: 'Dr. Luna Chen', 
      username: 'dr_luna', 
      avatar: 'LC', 
      verified: true, 
      pricingModel: 'per_character',
      rate: 0.02,
      rateDisplay: '£0.02/character', 
      online: false, 
      category: 'Nutrition',
      description: 'Detailed nutrition advice - pay for what you need'
    },
    { 
      name: 'Jake Thompson', 
      username: 'jake_thunder', 
      avatar: 'JT', 
      verified: true, 
      pricingModel: 'monthly_unlimited',
      rate: 199.99,
      rateDisplay: '£199.99/month unlimited', 
      online: true, 
      category: 'Bodybuilding',
      description: 'Unlimited access to champion-level coaching'
    },
    { 
      name: 'Sarah Rodriguez', 
      username: 'sarah_iron', 
      avatar: 'SR', 
      verified: true, 
      pricingModel: 'per_word',
      rate: 0.25,
      rateDisplay: '£0.25/word', 
      online: true, 
      category: 'Boxing',
      description: 'Concise, powerful advice - every word counts'
    },
    { 
      name: 'Rico Martinez', 
      username: 'rico_savage', 
      avatar: 'RM', 
      verified: true, 
      pricingModel: 'per_character',
      rate: 0.01,
      rateDisplay: '£0.01/character', 
      online: false, 
      category: 'Combat Sports',
      description: 'Affordable detailed coaching for everyone'
    }
  ]

  const filteredCreators = creators.filter(creator =>
    creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    creator.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    creator.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl max-w-md w-full p-6 border border-gray-700/50 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Start New Conversation</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            ✕
          </button>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search creators..."
              className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>
        </div>

        <div className="space-y-3 max-h-60 overflow-y-auto">
          {filteredCreators.map((creator, index) => (
            <button
              key={index}
              onClick={() => {
                console.log('Starting conversation with:', creator.name)
                onClose()
              }}
              className="w-full flex items-center space-x-3 p-3 hover:bg-gray-700/50 rounded-lg transition-all transform hover:scale-105"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {creator.avatar}
                </div>
                {creator.online && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">{creator.name}</span>
                  {creator.verified && (
                    <Star size={14} className="text-yellow-400 fill-current" />
                  )}
                </div>
                <div className="text-gray-400 text-sm">@{creator.username} • {creator.rateDisplay}</div>
                <div className="text-gray-500 text-xs">{creator.description}</div>
                <div className="text-gray-500 text-xs">{creator.category}</div>
              </div>
              {creator.online && (
                <div className="text-green-400 text-xs font-semibold">Online</div>
              )}
            </button>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">No creators found</div>
            <div className="text-gray-500 text-sm">Try a different search term</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessagingSystem