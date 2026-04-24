import React, { useState, useEffect } from 'react'
import { 
  Bell, 
  X, 
  DollarSign, 
  MessageCircle, 
  Users, 
  Heart, 
  Star, 
  Gift,
  Video,
  Crown,
  Zap,
  Calendar,
  TrendingUp,
  Award,
  Settings,
  Check,
  Trash2
} from 'lucide-react'

interface Notification {
  id: string
  type: 'earning' | 'message' | 'subscriber' | 'tip' | 'like' | 'comment' | 'live' | 'milestone' | 'system'
  title: string
  message: string
  timestamp: string
  isRead: boolean
  isNew: boolean
  actionUrl?: string
  amount?: number
  senderName?: string
  senderAvatar?: string
  priority: 'low' | 'medium' | 'high'
}

interface NotificationSystemProps {
  userId: string
  userType: 'creator' | 'fan'
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({ userId, userType }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [filter, setFilter] = useState('all')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [pushEnabled, setPushEnabled] = useState(true)

  // Mock notifications data
  const mockNotifications: Notification[] = [
    {
      id: '1',
      type: 'earning',
      title: 'New Earnings!',
      message: 'You earned £25.50 from your latest post',
      timestamp: '2 minutes ago',
      isRead: false,
      isNew: true,
      amount: 25.50,
      priority: 'high'
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message',
      message: 'Alex sent you a message',
      timestamp: '5 minutes ago',
      isRead: false,
      isNew: true,
      senderName: 'Alex M.',
      senderAvatar: 'AM',
      priority: 'high'
    },
    {
      id: '3',
      type: 'tip',
      title: 'New Tip Received!',
      message: 'Sarah tipped you £10 on your workout video',
      timestamp: '15 minutes ago',
      isRead: false,
      isNew: true,
      amount: 10,
      senderName: 'Sarah K.',
      senderAvatar: 'SK',
      priority: 'high'
    },
    {
      id: '4',
      type: 'subscriber',
      title: 'New Subscriber!',
      message: 'Mike subscribed to your content',
      timestamp: '1 hour ago',
      isRead: true,
      isNew: false,
      senderName: 'Mike R.',
      senderAvatar: 'MR',
      priority: 'medium'
    },
    {
      id: '5',
      type: 'milestone',
      title: 'Milestone Achieved!',
      message: 'You reached 1,000 subscribers! 🎉',
      timestamp: '2 hours ago',
      isRead: true,
      isNew: false,
      priority: 'medium'
    },
    {
      id: '6',
      type: 'live',
      title: 'Live Stream Starting',
      message: 'Marcus is going live in 5 minutes',
      timestamp: '3 hours ago',
      isRead: true,
      isNew: false,
      senderName: 'Marcus Johnson',
      senderAvatar: 'MJ',
      priority: 'medium'
    }
  ]

  useEffect(() => {
    setNotifications(mockNotifications)
    
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }
  }, [])

  // Simulate real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every 10 seconds
        const newNotification: Notification = {
          id: Date.now().toString(),
          type: Math.random() > 0.5 ? 'tip' : 'message',
          title: Math.random() > 0.5 ? 'New Tip!' : 'New Message!',
          message: Math.random() > 0.5 ? 'Someone tipped you £5!' : 'You have a new message',
          timestamp: 'just now',
          isRead: false,
          isNew: true,
          amount: Math.random() > 0.5 ? 5 : undefined,
          priority: 'high'
        }
        
        setNotifications(prev => [newNotification, ...prev])
        
        // Play notification sound
        if (soundEnabled) {
          playNotificationSound()
        }
        
        // Show browser notification
        if (pushEnabled && 'Notification' in window && Notification.permission === 'granted') {
          new Notification(newNotification.title, {
            body: newNotification.message,
            icon: '/website-header-3000-1500 original.png',
            badge: '/website-header-3000-1500 original.png'
          })
        }
      }
    }, 10000) // Check every 10 seconds

    return () => clearInterval(interval)
  }, [soundEnabled, pushEnabled])

  const playNotificationSound = () => {
    // Create audio context for notification sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1)
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.3)
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'earning': return <DollarSign size={20} className="text-green-400" />
      case 'message': return <MessageCircle size={20} className="text-blue-400" />
      case 'subscriber': return <Users size={20} className="text-purple-400" />
      case 'tip': return <Gift size={20} className="text-yellow-400" />
      case 'like': return <Heart size={20} className="text-red-400" />
      case 'live': return <Video size={20} className="text-red-400" />
      case 'milestone': return <Award size={20} className="text-orange-400" />
      default: return <Bell size={20} className="text-gray-400" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'earning': return 'border-green-500/30 bg-green-500/10'
      case 'message': return 'border-blue-500/30 bg-blue-500/10'
      case 'subscriber': return 'border-purple-500/30 bg-purple-500/10'
      case 'tip': return 'border-yellow-500/30 bg-yellow-500/10'
      case 'like': return 'border-red-500/30 bg-red-500/10'
      case 'live': return 'border-red-500/30 bg-red-500/10'
      case 'milestone': return 'border-orange-500/30 bg-orange-500/10'
      default: return 'border-gray-500/30 bg-gray-500/10'
    }
  }

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId 
          ? { ...notif, isRead: true, isNew: false }
          : notif
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, isRead: true, isNew: false }))
    )
  }

  const deleteNotification = (notificationId: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== notificationId))
  }

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.isRead
    if (filter === 'earnings') return notif.type === 'earning' || notif.type === 'tip'
    if (filter === 'messages') return notif.type === 'message'
    if (filter === 'activity') return ['subscriber', 'like', 'comment', 'live'].includes(notif.type)
    return true
  })

  const unreadCount = notifications.filter(n => !n.isRead).length

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all transform hover:scale-110 min-h-[44px] min-w-[44px]"
      >
        <Bell size={24} />
        {unreadCount > 0 && (
          <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          </div>
        )}

        {/* Subtle notification indicator */}
        {unreadCount === 0 && (
          <div className="absolute top-0 right-0 w-2 h-2 bg-orange-400 rounded-full animate-bounce-subtle opacity-60"></div>
        )}
      </button>

      {/* Notification Panel */}
      {showNotifications && (
        <div className="absolute right-0 top-full mt-2 w-96 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 z-50 max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Notifications</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={markAllAsRead}
                  className="text-orange-400 hover:text-orange-300 text-sm font-semibold"
                >
                  Mark all read
                </button>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex space-x-1">
              {[
                { id: 'all', label: 'All' },
                { id: 'unread', label: 'Unread' },
                { id: 'earnings', label: 'Money' },
                { id: 'messages', label: 'Messages' },
                { id: 'activity', label: 'Activity' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
                    filter === tab.id
                      ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredNotifications.length === 0 ? (
              <div className="p-8 text-center">
                <Bell size={48} className="text-gray-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">No notifications</h4>
                <p className="text-gray-400 text-sm">You're all caught up!</p>
              </div>
            ) : (
              <div className="space-y-1">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-700/30 transition-all cursor-pointer border-l-4 ${
                      notification.isNew ? 'bg-gray-700/20' : ''
                    } ${getNotificationColor(notification.type)}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-semibold ${notification.isRead ? 'text-gray-300' : 'text-white'}`}>
                            {notification.title}
                          </h4>
                          {notification.isNew && (
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        
                        <p className={`text-sm ${notification.isRead ? 'text-gray-400' : 'text-gray-300'}`}>
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">{notification.timestamp}</span>
                          
                          {notification.amount && (
                            <span className="text-green-400 font-bold text-sm">
                              +£{notification.amount}
                            </span>
                          )}
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteNotification(notification.id)
                            }}
                            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition-all"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {notification.senderAvatar && (
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {notification.senderAvatar}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Settings Footer */}
          <div className="p-4 border-t border-gray-700/50 bg-gray-700/20">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">Notification Settings</span>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={soundEnabled}
                    onChange={(e) => setSoundEnabled(e.target.checked)}
                    className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500"
                  />
                  <span className="text-gray-300 text-sm">Sound</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={pushEnabled}
                    onChange={(e) => setPushEnabled(e.target.checked)}
                    className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500"
                  />
                  <span className="text-gray-300 text-sm">Push</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationSystem