import React, { useState } from 'react'
import {
  Home,
  User,
  BarChart3,
  ShoppingBag,
  Send,
  Compass,
  Volume2,
  Users,
  Bookmark,
  Search,
  Bell,
  Radio,
  ChevronDown,
  Settings,
  LogOut,
  Wallet,
  Heart,
  FileEdit,
  Moon,
  UserPlus
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const location = useLocation()

  const sampleCreators = [
    { name: 'Choco Smiles', username: 'rosean18420', avatar: 'https://i.pravatar.cc/150?img=47' },
    { name: 'Justice Jimmy', username: 'jimmy_justice', avatar: 'https://i.pravatar.cc/150?img=33' },
    { name: 'Alex Fighter', username: 'alexfighter', avatar: 'https://i.pravatar.cc/150?img=12' },
  ]

  const filteredCreators = sampleCreators.filter(
    creator =>
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.username.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const navItems = [
    { icon: Home, label: 'Home', path: '/feed', active: false },
    { icon: User, label: 'My page', path: '/creator-profile', active: false },
    { icon: BarChart3, label: 'Dashboard', path: '/creator-dashboard', active: false },
    { icon: ShoppingBag, label: 'Shop', path: '/shop', active: false },
    { icon: Send, label: 'Messages', path: '/messages', active: false },
    { icon: Compass, label: 'Explore', path: '/explore', active: false },
    { icon: Radio, label: 'Live', path: '/live', active: false },
    { icon: Volume2, label: 'Promoted', path: '/promoted', active: false },
    { icon: Users, label: 'Subscriptions', path: '/subscriptions', active: false },
    { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks', active: false }
  ]

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* TOP HEADER - Sticky */}
      <header className="sticky top-0 z-50 bg-[#1e293b] border-b border-[#334155]">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity min-h-[48px] min-w-[50px] z-50 relative">
            <img
              src="/artboard_1_copy.png"
              alt="FansFollowMe"
              className="h-10 w-auto hidden sm:block"
            />
            <img
              src="/celebhero.png"
              alt="FFM"
              className="h-10 w-auto sm:hidden"
            />
          </Link>

          {/* Center: Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Find a creator"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setShowSearchResults(e.target.value.length > 0)
                }}
                onFocus={() => searchQuery && setShowSearchResults(true)}
                onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                className="w-full pl-12 pr-4 py-2.5 bg-[#334155] rounded-full text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Search Results Dropdown */}
              {showSearchResults && searchQuery && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-2xl overflow-hidden">
                  {filteredCreators.length > 0 ? (
                    <>
                      <div className="py-2">
                        {filteredCreators.map((creator) => (
                          <Link
                            key={creator.username}
                            to={`/profile/${creator.username}`}
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 transition-colors"
                          >
                            <img
                              src={creator.avatar}
                              alt={creator.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-semibold text-gray-900">{creator.name}</p>
                              <p className="text-sm text-gray-500">@{creator.username}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-200 px-4 py-3">
                        <Link
                          to="/explore"
                          className="text-sm text-purple-600 hover:text-purple-700 font-semibold"
                        >
                          View all →
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="px-4 py-6 text-center">
                      <p className="text-gray-500">No creators found</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Navigation Icons */}
          <div className="flex items-center space-x-3">
            {/* LIVE Badge */}
            <Link to="/live" className="flex items-center space-x-1 px-3 py-1.5 bg-red-500/20 rounded-full border border-red-500/50 hover:opacity-80 transition-opacity">
              <Radio size={14} className="text-red-500" />
              <span className="text-red-400 text-sm font-bold">LIVE</span>
              <span className="text-[#e2e8f0] text-sm">(0)</span>
            </Link>

            {/* Home */}
            <Link to="/feed" className="p-2 hover:opacity-80 rounded-lg transition-opacity">
              <Home size={20} className="text-[#e2e8f0]" />
            </Link>

            {/* Discover */}
            <Link to="/explore" className="p-2 hover:opacity-80 rounded-lg transition-opacity">
              <Compass size={20} className="text-[#e2e8f0]" />
            </Link>

            {/* Shopping */}
            <Link to="/shop" className="p-2 hover:opacity-80 rounded-lg transition-opacity relative">
              <ShoppingBag size={20} className="text-purple-500" />
            </Link>

            {/* Messages */}
            <Link to="/messages" className="p-2 hover:opacity-80 rounded-lg transition-opacity">
              <Send size={20} className="text-[#e2e8f0]" />
            </Link>

            {/* Notifications */}
            <button className="p-2 hover:opacity-80 rounded-lg transition-opacity relative">
              <Bell size={20} className="text-[#e2e8f0]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Avatar & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 hover:opacity-80 rounded-lg p-1 pr-2 transition-opacity"
              >
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="User"
                  className="w-9 h-9 rounded-full object-cover border-2 border-purple-500"
                />
                <ChevronDown size={16} className="text-[#9ca3af]" />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-[#1e293b] rounded-lg border border-[#334155] shadow-2xl overflow-hidden">
                  {/* Balance & Wallet */}
                  <div className="px-4 py-3 border-b border-[#334155] bg-[#0f172a]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#9ca3af]">Balance</span>
                      <span className="text-lg font-bold text-[#e2e8f0]">£146.25</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#9ca3af]">Wallet</span>
                      <span className="text-lg font-bold text-[#e2e8f0]">£23.20</span>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <Link to="/settings" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-[#334155] transition-colors text-[#e2e8f0]">
                      <Settings size={18} />
                      <span>Settings</span>
                    </Link>
                    <Link to="/creator-profile" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-[#334155] transition-colors text-[#e2e8f0]">
                      <User size={18} />
                      <span>My page</span>
                    </Link>
                    <Link to="/creator-dashboard" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-[#334155] transition-colors text-[#e2e8f0]">
                      <BarChart3 size={18} />
                      <span>Dashboard</span>
                    </Link>
                    <Link to="/posts" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-[#334155] transition-colors text-[#e2e8f0]">
                      <FileEdit size={18} />
                      <span>My Posts</span>
                    </Link>
                    <Link to="/subscribers" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-[#334155] transition-colors text-[#e2e8f0]">
                      <Users size={18} />
                      <span>My subscribers</span>
                    </Link>
                    <Link to="/subscriptions" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-[#334155] transition-colors text-[#e2e8f0]">
                      <UserPlus size={18} />
                      <span>My subscriptions</span>
                    </Link>
                    <Link to="/bookmarks" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-[#334155] transition-colors text-[#e2e8f0]">
                      <Bookmark size={18} />
                      <span>Bookmarks</span>
                    </Link>
                    <Link to="/likes" className="flex items-center space-x-3 px-4 py-2.5 hover:bg-[#334155] transition-colors text-[#e2e8f0]">
                      <Heart size={18} />
                      <span>Likes</span>
                    </Link>
                  </div>

                  <div className="border-t border-[#334155] py-2">
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-[#334155] transition-colors text-[#e2e8f0]"
                    >
                      <div className="flex items-center space-x-3">
                        <Moon size={18} />
                        <span>Dark mode</span>
                      </div>
                      <div className={`w-10 h-6 rounded-full transition-colors ${darkMode ? 'bg-purple-500' : 'bg-[#334155]'} relative`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-1'}`}></div>
                      </div>
                    </button>
                    <button className="w-full flex items-center space-x-3 px-4 py-2.5 hover:bg-[#334155] transition-colors text-red-400">
                      <LogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Edit Profile Button */}
            <Link
              to="/profile/edit"
              className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-5 py-2 rounded-lg transition-opacity flex items-center space-x-2"
            >
              <span>Edit Profile</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT - Layout with Sidebar */}
      <div className="flex">
        {/* LEFT SIDEBAR - Fixed */}
        <aside className="w-64 h-[calc(100vh-65px)] sticky top-[65px] border-r border-[#334155] bg-[#1e293b] overflow-y-auto">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white font-bold'
                      : 'text-[#e2e8f0] hover:bg-[#334155]'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
