import React, { useState } from 'react'
import {
  DollarSign,
  Users,
  Eye,
  TrendingUp,
  MessageCircle,
  Calendar,
  Settings,
  BarChart3,
  FileText,
  Video,
  Gift,
  Star,
  Crown,
  Zap,
  Target,
  Award,
  Bell,
  Plus,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CreatorDashboardStats from '../components/CreatorDashboardStats'
import CreatorAnalytics from '../components/CreatorAnalytics'
import QRCodeGenerator from '../components/QRCodeGenerator'
import TrainingProgramBuilder from '../components/TrainingProgramBuilder'
import AffiliateMarketingSystem from '../components/AffiliateMarketingSystem'
import CreatorLoyaltyDashboard from '../components/CreatorLoyaltyDashboard'
import CreatorWishlist from '../components/CreatorWishlist'
import ContentCreator from '../components/ContentCreator'
import ContentFeed from '../components/ContentFeed'

const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [timeframe, setTimeframe] = useState('month')
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'qr-codes', label: 'QR Codes', icon: Target },
    { id: 'programs', label: 'Training Programs', icon: Award },
    { id: 'affiliate', label: 'Affiliate Marketing', icon: Gift },
    { id: 'loyalty', label: 'Fan Loyalty', icon: Crown },
    { id: 'wishlist', label: 'My Wishlist', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Quick Stats */}
            <CreatorDashboardStats timeframe={timeframe} />
            
            {/* Quick Actions */}
            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 border border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <button 
                  onClick={() => setActiveTab('content')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <Plus size={20} />
                  <span>Create Post</span>
                </button>
                <button 
                  onClick={() => setActiveTab('qr-codes')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <Target size={20} />
                  <span>Create QR Code</span>
                </button>
                <Link 
                  to="/messages"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Messages</span>
                </Link>
                <Link 
                  to="/live"
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <Video size={20} />
                  <span>Go Live</span>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { type: 'earning', message: 'Earned £25.50 from tip on workout video', time: '2 hours ago', icon: '💰' },
                  { type: 'subscriber', message: 'Alex M. subscribed to your content', time: '4 hours ago', icon: '👑' },
                  { type: 'message', message: 'New message from Sarah K.', time: '6 hours ago', icon: '💬' },
                  { type: 'qr', message: 'QR code BEAST2024 was scanned 5 times', time: '1 day ago', icon: '📱' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-2xl">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="text-white">{activity.message}</p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'content':
        return (
          <div className="space-y-6">
            <ContentCreator />
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Your Content Feed</h3>
              <ContentFeed />
            </div>
          </div>
        )

      case 'analytics':
        return <CreatorAnalytics />

      case 'qr-codes':
        return <QRCodeGenerator />

      case 'programs':
        return <TrainingProgramBuilder />

      case 'affiliate':
        return <AffiliateMarketingSystem />

      case 'loyalty':
        return <CreatorLoyaltyDashboard />

      case 'wishlist':
        return (
          <div className="space-y-6">
            <CreatorWishlist creatorId="current-creator" isOwner={true} creatorName="Your" />
          </div>
        )

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Creator Settings</h3>
              <p className="text-gray-300">Manage your creator profile, pricing, and preferences</p>
              
              <div className="mt-6">
                <Link 
                  to="/profile/edit"
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all"
                >
                  Edit Profile Settings
                </Link>
              </div>
            </div>
          </div>
        )

      default:
        return <div className="text-white">Content for {activeTab}</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors min-w-[44px] min-h-[44px]"
              >
                {showMobileMenu ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
              </button>
              <Link to="/">
                <img
                  src="/artboard_1_copy.png"
                  alt="FansFollow"
                  className="h-8 sm:h-10 w-auto"
                  width="180"
                  height="48"
                />
              </Link>
              <div className="hidden md:block text-white font-semibold">Creator Dashboard</div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Timeframe Selector */}
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="hidden sm:block px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-white rounded-lg min-w-[44px] min-h-[44px]">
                <Bell size={20} />
                <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <span className="hidden sm:inline text-white font-semibold">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative">
        {/* Mobile Menu Overlay */}
        {showMobileMenu && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setShowMobileMenu(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-gray-800/95 lg:bg-gray-800/30 backdrop-blur-lg border-r border-gray-700/50
          transform transition-transform duration-300 ease-in-out lg:transform-none
          ${showMobileMenu ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          min-h-screen
        `}>
          <div className="p-4 sm:p-6 pt-20 lg:pt-6">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setShowMobileMenu(false)
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 min-h-[44px] ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full lg:w-auto p-4 sm:p-6">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorDashboard