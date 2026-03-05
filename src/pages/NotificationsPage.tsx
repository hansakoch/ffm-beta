import React, { useState } from 'react'
import {
  Bell,
  Settings,
  Trash2,
  ChevronDown,
  Heart,
  UserPlus,
  MessageCircle,
  Gift,
  Radio,
  AtSign
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface Notification {
  id: string
  type: 'subscription' | 'like' | 'comment' | 'tip' | 'live' | 'mention'
  user: {
    name: string
    avatar: string
  }
  text: string
  timestamp: string
  isRead: boolean
}

const NotificationsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all')
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)

  const notifications: Notification[] = [
    {
      id: '1',
      type: 'subscription',
      user: {
        name: 'Date Doctor',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      text: 'has subscribed to your content',
      timestamp: '1 month ago',
      isRead: false
    },
    {
      id: '2',
      type: 'subscription',
      user: {
        name: 'Jessica',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      text: 'has subscribed to your content',
      timestamp: '5 months ago',
      isRead: true
    },
    {
      id: '3',
      type: 'like',
      user: {
        name: 'lezzieM',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      text: 'liked your post Can I play?',
      timestamp: '6 months ago',
      isRead: true
    },
    {
      id: '4',
      type: 'comment',
      user: {
        name: 'Mike Rashid',
        avatar: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      text: 'commented on your workout video',
      timestamp: '2 weeks ago',
      isRead: false
    },
    {
      id: '5',
      type: 'tip',
      user: {
        name: 'Sarah K.',
        avatar: 'https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      text: 'sent you a tip of £25.00',
      timestamp: '3 days ago',
      isRead: false
    }
  ]

  const filterOptions = [
    { value: 'all', label: 'All', icon: Bell },
    { value: 'subscriptions', label: 'Subscriptions', icon: UserPlus },
    { value: 'likes', label: 'Likes', icon: Heart },
    { value: 'tips', label: 'Tips', icon: Gift },
    { value: 'live', label: 'Live Streaming', icon: Radio },
    { value: 'mentions', label: 'Mentions', icon: AtSign }
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'subscription':
        return <UserPlus size={20} className="text-purple-400" />
      case 'like':
        return <Heart size={20} className="text-red-400" />
      case 'comment':
        return <MessageCircle size={20} className="text-blue-400" />
      case 'tip':
        return <Gift size={20} className="text-yellow-400" />
      case 'live':
        return <Radio size={20} className="text-green-400" />
      case 'mention':
        return <AtSign size={20} className="text-orange-400" />
      default:
        return <Bell size={20} className="text-gray-400" />
    }
  }

  const filteredNotifications = filter === 'all'
    ? notifications
    : notifications.filter(n => n.type === filter || (filter === 'subscriptions' && n.type === 'subscription'))

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* HEADER - Using simplified header without full dashboard layout */}
      <header className="sticky top-0 z-50 bg-[#1e293b] border-b border-[#334155]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/feed" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                FFM
              </div>
            </Link>
            <Link
              to="/feed"
              className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-5 py-2 rounded-lg transition-opacity"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT - Full Width */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <Bell size={32} className="text-[#e2e8f0]" />
              <h1 className="text-3xl font-bold text-[#e2e8f0]">Notifications</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-[#1e293b] rounded-lg transition-colors">
                <Settings size={24} className="text-[#9ca3af] hover:text-[#e2e8f0]" />
              </button>
              <button className="p-2 hover:bg-[#1e293b] rounded-lg transition-colors">
                <Trash2 size={24} className="text-[#9ca3af] hover:text-red-400" />
              </button>
            </div>
          </div>
          <p className="text-[#9ca3af]">New subscribers, likes and new comments</p>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-end mb-6">
          <div className="relative">
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="flex items-center space-x-2 bg-[#1e293b] text-[#e2e8f0] px-4 py-2 rounded-lg border border-[#334155] hover:bg-[#334155] transition-colors"
            >
              <span>{filterOptions.find(opt => opt.value === filter)?.label || 'All'}</span>
              <ChevronDown size={18} className="text-[#9ca3af]" />
            </button>

            {showFilterDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-[#1e293b] rounded-lg border border-[#334155] shadow-2xl overflow-hidden z-10">
                {filterOptions.map((option) => {
                  const Icon = option.icon
                  return (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFilter(option.value)
                        setShowFilterDropdown(false)
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-[#334155] transition-colors ${
                        filter === option.value ? 'bg-[#334155]' : ''
                      }`}
                    >
                      <Icon size={18} className="text-[#9ca3af]" />
                      <span className="text-[#e2e8f0]">{option.label}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Notifications List */}
        {filteredNotifications.length > 0 ? (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-[#1e293b] rounded-lg border border-[#334155] p-5 hover:border-purple-500/50 transition-all ${
                  !notification.isRead ? 'border-l-4 border-l-purple-500' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <img
                    src={notification.user.avatar}
                    alt={notification.user.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-[#e2e8f0]">
                        <span className="font-bold">{notification.user.name}</span>{' '}
                        {notification.text}
                      </p>
                      <div className="ml-4 flex-shrink-0">
                        {getNotificationIcon(notification.type)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#9ca3af]">{notification.timestamp}</span>
                      {!notification.isRead && (
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="bg-[#1e293b] rounded-lg border border-[#334155] p-12 text-center">
            <div className="w-20 h-20 bg-[#334155] rounded-full mx-auto mb-4 flex items-center justify-center">
              <Bell size={32} className="text-[#9ca3af]" />
            </div>
            <h3 className="text-xl font-bold text-[#e2e8f0] mb-2">No notifications yet</h3>
            <p className="text-[#9ca3af]">
              When you get new subscribers, likes, or comments, they'll show up here
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default NotificationsPage
