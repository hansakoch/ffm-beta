import React, { useState } from 'react'
import ContentFeed from '../components/ContentFeed'
import MessagingSystem from '../components/MessagingSystem'
import PurchasedContent from '../components/PurchasedContent'
import ExploreCreators from '../components/ExploreCreators'
import SubscriptionManager from '../components/SubscriptionManager'
import PromotedContent from '../components/PromotedContent'
import FanProgressWidget from '../components/FanProgressWidget'
import ContentDiscovery from '../components/ContentDiscovery'
import NotificationSystem from '../components/NotificationSystem'
import AIContentRecommendations from '../components/AIContentRecommendations'
import FanLoyaltySystem from '../components/FanLoyaltySystem'
import CreatorWishlist from '../components/CreatorWishlist'
import { useNavigate } from 'react-router-dom'
import {
  Home,
  User,
  ShoppingBag,
  MessageCircle,
  Search,
  TrendingUp,
  Users,
  Bookmark,
  Bell,
  Settings,
  LogOut,
  Heart,
  Star,
  DollarSign,
  Wallet,
  ChevronDown,
  Moon,
  UserPlus,
  Crown,
  Target,
  Award,
  Zap,
  Gift,
  Menu,
  X
} from 'lucide-react'

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const navigate = useNavigate()

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'discover', label: 'Discover', icon: Search },
    { id: 'live', label: 'Live Streams', icon: TrendingUp },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'purchased', label: 'Purchased', icon: ShoppingBag },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'subscriptions', label: 'Subscriptions', icon: Users },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark },
    { id: 'wishlist', label: 'Creator Wishlists', icon: Gift },
    { id: 'loyalty', label: 'Fan Status', icon: Crown }
  ]

  const userDropdownItems = [
    { label: 'User', icon: User, type: 'header' },
    { label: 'Balance: £0.00', icon: DollarSign, type: 'info' },
    { label: 'Wallet: £0.01', icon: Wallet, type: 'info' },
    { label: 'Crypto: 0.0025 BTC', icon: Wallet, type: 'info' },
    { label: 'Settings', icon: Settings, type: 'link' },
    { label: 'My Profile', icon: User, type: 'link' },
    { label: 'My subscriptions', icon: Users, type: 'link' },
    { label: 'Bookmarks', icon: Bookmark, type: 'link' },
    { label: 'Likes', icon: Heart, type: 'link' },
    { label: 'Be a creator!', icon: UserPlus, type: 'special' },
    { label: 'Dark mode', icon: Moon, type: 'toggle' },
    { label: 'Logout', icon: LogOut, type: 'logout' }
  ]

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* Fan Progress Widget */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="lg:col-span-2">
                <FanProgressWidget 
                  fanData={{
                    tier: 'Gold',
                    points: 1247,
                    dailyStreak: 12,
                    totalSpent: 340,
                    nextTierProgress: 68
                  }}
                  creatorName="Marcus Johnson"
                />
              </div>
              
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Zap className="mr-2 text-yellow-400" />
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Active Subscriptions</span>
                    <span className="text-blue-400 font-bold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Messages Sent</span>
                    <span className="text-purple-400 font-bold">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Spent</span>
                    <span className="text-green-400 font-bold">£247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Favorite Creator</span>
                    <span className="text-orange-400 font-bold">Marcus J.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <AIContentRecommendations 
              userId="current-user-id"
              userPreferences={{
                categories: ['UFC/MMA', 'Nutrition', 'Strength Training'],
                followedCreators: ['marcus_beast', 'dr_luna'],
                interactionHistory: ['deadlift', 'meal prep', 'boxing'],
                spendingPattern: 'medium',
                timeOfDay: 'evening'
              }}
            />

            {/* Content Feed */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Your Feed</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
                    Following
                  </button>
                  <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600">
                    Trending
                  </button>
                </div>
              </div>
              <ContentFeed />
            </div>
          </div>
        )

      case 'discover':
        return (
          <div className="space-y-6">
            {/* Discovery Header */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Discover Amazing Content</h2>
                <p className="text-gray-300 mb-6">AI-powered recommendations based on your interests and activity</p>
                
                {/* Quick Filter Chips */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold hover:bg-red-500/30 transition-colors animate-pulse">
                    🔴 Live Now (12)
                  </button>
                  <Link 
                    to="/scan"
                    className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold hover:bg-blue-500/30 transition-colors flex items-center space-x-1"
                  >
                    <span>📱</span>
                    <span>Scan Creator Code</span>
                  </Link>
                  <button className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold hover:bg-yellow-500/30 transition-colors">
                    👑 Elite Creators
                  </button>
                  <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold hover:bg-green-500/30 transition-colors">
                    🆓 Free Content
                  </button>
                  <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-semibold hover:bg-purple-500/30 transition-colors">
                    💎 Premium
                  </button>
                  <button className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold hover:bg-orange-500/30 transition-colors">
                    🔥 Trending
                  </button>
                </div>
              </div>
            </div>

            <ContentDiscovery 
              userPreferences={{
                categories: ['Fitness', 'Martial Arts', 'Nutrition'],
                followedCreators: ['marcus_beast', 'dr_luna'],
                interactionHistory: ['deadlift', 'meal prep', 'boxing']
              }}
            />
          </div>
        )

      case 'live':
        return (
          <div className="space-y-6">
            {/* Live Streams Header */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h2 className="text-2xl font-bold text-white">Live Streams</h2>
                </div>
                <div className="text-red-400 font-bold">12 Live Now</div>
              </div>
              <p className="text-gray-300">Join live training sessions and Q&As with your favorite creators</p>
            </div>

            {/* Live Stream Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  creator: 'Marcus "Beast" Johnson',
                  title: 'UFC Training Session - Ask Me Anything!',
                  viewers: 234,
                  category: 'UFC/MMA',
                  isTicketed: true,
                  price: '£15'
                },
                {
                  creator: 'Dr. Luna Chen',
                  title: 'Live Meal Prep & Nutrition Q&A',
                  viewers: 156,
                  category: 'Nutrition',
                  isTicketed: false,
                  price: 'Free'
                },
                {
                  creator: 'Jake Thompson',
                  title: 'Chest & Triceps Workout - Follow Along',
                  viewers: 312,
                  category: 'Bodybuilding',
                  isTicketed: true,
                  price: '£25'
                }
              ].map((stream, index) => (
                <div key={index} className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-red-500/30 transition-all">
                  <div className="aspect-video bg-gray-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">🎥</div>
                    </div>
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      🔴 LIVE
                    </div>
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {stream.viewers} watching
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-2">{stream.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">by {stream.creator}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                        {stream.category}
                      </span>
                      <div className="text-right">
                        <div className={`font-bold ${stream.isTicketed ? 'text-orange-400' : 'text-green-400'}`}>
                          {stream.price}
                        </div>
                        <button className="mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all">
                          Join Live
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'loyalty':
        return (
          <div className="space-y-6">
            <FanProgressWidget 
              fanData={{
                tier: 'Gold',
                points: 1247,
                dailyStreak: 12,
                totalSpent: 340,
                nextTierProgress: 68
              }}
              creatorName="Marcus Johnson"
            />
            <FanProgressWidget 
              fanData={{
                tier: 'Gold',
                points: 1247,
                dailyStreak: 12,
                totalSpent: 340,
                nextTierProgress: 68
              }}
              creatorName="Marcus Johnson"
            />
            
            <FanLoyaltySystem 
              fanData={{
                id: 'fan-123',
                name: 'John Doe',
                avatar: 'JD',
                tier: 'Gold',
                points: 1247,
                streaks: {
                  daily: 12,
                  weekly: 3,
                  monthly: 1
                },
                achievements: ['first_tip', 'week_streak', 'big_spender', 'early_bird', 'call_master'],
                totalSpent: 340,
                joinDate: 'January 2024',
                monthlySpending: 85,
                favoriteContentType: 'Videos',
                totalMessages: 156,
                totalCalls: 8
              }}
              creatorName="Marcus Johnson"
            />
          </div>
        )

      case 'wishlist':
        return (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-4">Creator Wishlists</h2>
              <p className="text-gray-300 mb-6">Support your favorite creators by purchasing items from their wishlists</p>
              
              <div className="space-y-6">
                <CreatorWishlist creatorId="marcus_beast" isOwner={false} creatorName="Marcus Johnson" />
              </div>
            </div>
          </div>
        )

      case 'profile':
        return (
          <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-orange-500/30 to-purple-600/30"></div>
              <div className="px-6 pb-6 relative">
                <div className="relative -mt-12 mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl text-white font-bold border-4 border-gray-800 shadow-xl">
                    JD
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">John Doe</h3>
                  <p className="text-gray-300">Fitness Enthusiast</p>
                  <p className="text-gray-400 text-sm">Member since January 2024</p>
                  
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">5</div>
                      <div className="text-gray-400 text-sm">Subscriptions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">156</div>
                      <div className="text-gray-400 text-sm">Messages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">£247</div>
                      <div className="text-gray-400 text-sm">Total Spent</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/30 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3">Fan Status</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Current Tier</span>
                        <span className="text-yellow-400 font-semibold">Gold Fan</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Loyalty Points</span>
                        <span className="text-purple-400 font-semibold">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Daily Streak</span>
                        <span className="text-orange-400 font-semibold">12 days 🔥</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/30 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3">Wallet & Balance</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Account Balance</span>
                        <span className="text-orange-400 font-semibold">£0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Wallet Balance</span>
                        <span className="text-purple-400 font-semibold">£0.01</span>
                      </div>
                      <button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white py-2 rounded-lg text-sm">
                        Add Funds
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: 'Subscribed to', creator: 'Marcus Johnson', time: '2 hours ago', icon: '👑' },
                  { action: 'Sent tip to', creator: 'Dr. Luna Chen', time: '1 day ago', icon: '💰' },
                  { action: 'Purchased content from', creator: 'Jake Thompson', time: '3 days ago', icon: '🔒' },
                  { action: 'Started following', creator: 'Sarah Rodriguez', time: '1 week ago', icon: '👥' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <span className="text-2xl">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="text-white">
                        {activity.action} <span className="text-orange-400 font-semibold">{activity.creator}</span>
                      </p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'messages':
        return (
          <MessagingSystem />
        )

      case 'subscriptions':
        return (
          <SubscriptionManager />
        )

      case 'purchased':
        return (
          <PurchasedContent />
        )

      case 'bookmarks':
        return (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Bookmarked Content</h2>
                <div className="text-gray-400 text-sm">12 saved items</div>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Advanced Deadlift Technique', creator: 'Jake Thompson', type: 'Video', saved: '2 days ago', thumbnail: '🏋️' },
                  { title: 'Martial Arts Training Guide', creator: 'Dr. Luna Chen', type: 'Guide', saved: '1 week ago', thumbnail: '🥋' },
                  { title: 'UFC Training Routine', creator: 'Marcus Johnson', type: 'Workout', saved: '2 weeks ago', thumbnail: '🥊' },
                  { title: 'Nutrition Masterclass', creator: 'Dr. Luna Chen', type: 'Course', saved: '3 weeks ago', thumbnail: '🥗' }
                ].map((bookmark, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl">
                      {bookmark.thumbnail}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <h4 className="text-white font-semibold">{bookmark.title}</h4>
                        <p className="text-gray-300 text-sm">by {bookmark.creator} • {bookmark.type}</p>
                      </div>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-gray-400 text-sm">{bookmark.saved}</p>
                      <div className="flex space-x-2 mt-2">
                        <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold">View</button>
                        <button className="text-red-400 hover:text-red-300 text-sm">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
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
      {/* Top Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button & Logo */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                {showMobileMenu ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
              </button>
              <img
                src="/artboard_1_copy.png"
                alt="FansFollow"
                className="h-8 sm:h-10 w-auto"
                width="180"
                height="48"
              />
            </div>

            {/* User Dropdown */}
            <div className="relative flex items-center space-x-2 sm:space-x-4">
              {/* Notification Bell */}
              <NotificationSystem userId="current-user-id" userType="fan" />
              
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors min-w-[44px] min-h-[44px]"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <span className="hidden sm:inline text-white font-semibold">John Doe</span>
                <ChevronDown size={16} className={`hidden sm:block text-gray-400 transition-transform ${showUserDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-xl shadow-xl border border-gray-700 z-50">
                  <div className="py-2">
                    {userDropdownItems.map((item, index) => {
                      if (item.type === 'header') {
                        return (
                          <div key={index} className="px-4 py-3 border-b border-gray-700">
                            <div className="flex items-center space-x-3">
                              <item.icon size={20} className="text-gray-400" />
                              <span className="text-white font-bold">{item.label}</span>
                            </div>
                          </div>
                        )
                      }
                      
                      if (item.type === 'info') {
                        return (
                          <div key={index} className="px-4 py-2 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <item.icon size={16} className="text-gray-400" />
                              <span className="text-gray-300 text-sm">{item.label}</span>
                            </div>
                          </div>
                        )
                      }

                      if (item.type === 'special') {
                        return (
                          <button key={index} className="w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors flex items-center space-x-3">
                            <item.icon size={16} className="text-orange-400" />
                            <span className="text-orange-400 font-semibold">{item.label}</span>
                          </button>
                        )
                      }

                      if (item.type === 'logout') {
                        return (
                          <button key={index} className="w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors flex items-center space-x-3 border-t border-gray-700 mt-2 pt-3">
                            <item.icon size={16} className="text-red-400" />
                            <span className="text-red-400">{item.label}</span>
                          </button>
                        )
                      }

                      if (item.type === 'toggle') {
                        return (
                          <button key={index} className="w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <item.icon size={16} className="text-gray-400" />
                              <span className="text-gray-300">{item.label}</span>
                            </div>
                            <div className="w-8 h-4 bg-gray-600 rounded-full relative">
                              <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                            </div>
                          </button>
                        )
                      }

                      return (
                        <button key={index} className="w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors flex items-center space-x-3">
                          <item.icon size={16} className="text-gray-400" />
                          <span className="text-gray-300">{item.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
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

        {/* Left Sidebar Navigation */}
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

export default DashboardPage