import React, { useState, useEffect } from 'react'
import { Menu, X, Bell } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import NotificationSystem from './NotificationSystem'
import QRCodeScannerModal from './QRCodeScannerModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'For Creators', href: '/creators' },
    { name: 'For Fans', href: '/fans' },
    { name: 'Celebrities', href: '/celebrities' },
    { name: 'Explore', href: '/explore' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[72px] ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <img
              src="/artboard_1_copy.png"
              alt="FansFollowMe - Global Fitness & Martial Arts Creator Platform Logo"
              className="h-12 w-auto"
              width="180"
              height="48"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-semibold transition-colors duration-200 whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-300 hover:text-orange-400' 
                    : 'text-white hover:text-orange-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Dropdown for More Options */}
            <div className="relative group">
              <button className={`font-semibold transition-colors duration-200 flex items-center whitespace-nowrap ${
                isScrolled 
                  ? 'text-gray-300 hover:text-orange-400' 
                  : 'text-white hover:text-orange-400'
              }`}>
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900/95 rounded-xl shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/casting" className="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                    🎬 Movie Casting
                  </Link>
                  <Link to="/live" className="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                    🔴 Live Streams
                  </Link>
                  <Link to="/business" className="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                    💼 Business
                  </Link>
                  <button
                    onClick={() => setIsQRModalOpen(true)}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors"
                  >
                    📱 Scan Creator Code
                  </button>
                  <Link to="/support" className="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                    💬 Support
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                {/* Notification Bell */}
                <NotificationSystem userId={user?.id || ''} userType="creator" />

                <div className="relative group flex items-center">
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  {user?.user_metadata?.full_name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                </Link>
                <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900/95 rounded-xl shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link to="/dashboard" className="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                      Dashboard
                    </Link>
                    <Link to="/profile/edit" className="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                      Profile Settings
                    </Link>
                    <Link to="/creator-dashboard" className="block px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors">
                      Creator Dashboard
                    </Link>
                    <div className="border-t border-gray-700 my-1"></div>
                    <button
                      onClick={() => {
                        logout();
                        navigate('/');
                      }}
                      className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-800/50 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-glow-pulse whitespace-nowrap h-[44px] flex items-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 font-bold px-6 py-2 rounded-xl transition-all duration-300 hover:border-white/40 whitespace-nowrap h-[44px] flex items-center"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors flex-shrink-0 ${
              isScrolled ? 'text-gray-300' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl mt-2 py-4 border border-gray-700/50 max-h-[80vh] overflow-y-auto z-50 absolute left-4 right-4">
            <div className="px-4 py-2 text-xs text-gray-500 uppercase font-semibold">Navigation</div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-4 py-2 text-xs text-gray-500 uppercase font-semibold border-t border-gray-700 mt-2">More</div>
            <Link
              to="/casting"
              className="block px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              🎬 Movie Casting
            </Link>
            <Link
              to="/live"
              className="block px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              🔴 Live Streams
            </Link>
            <Link
              to="/business"
              className="block px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              💼 Business
            </Link>
            <button
              onClick={() => {
                setIsQRModalOpen(true)
                setIsMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800 transition-colors"
            >
              📱 Scan Creator Code
            </button>
            <Link
              to="/support"
              className="block px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              💬 Support
            </Link>
            
            <div className="px-4 py-3 border-t border-gray-700 mt-2">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="block w-full text-left text-gray-300 hover:text-orange-400 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                      navigate('/');
                    }}
                    className="w-full text-left text-red-400 hover:text-red-300 mb-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div>
                  <Link 
                    to="/login" 
                    className="block w-full text-left text-gray-300 hover:text-orange-400 mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg text-center min-h-[44px] flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* QR Code Scanner Modal */}
      <QRCodeScannerModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </header>
  )
}

export default Header