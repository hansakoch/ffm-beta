import React, { useState, useEffect } from 'react'
import { Menu, X, Search, UserPlus, Film, Radio, Briefcase, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const navItems = [
    { name: 'For Creators', href: '/creators' },
    { name: 'For Fans', href: '/fans' },
    { name: 'Celebrities', href: '/celebrities' },
    { name: 'Explore', href: '/explore' }
  ]

  const moreItems = [
    { name: 'Movie Casting', href: '/casting', icon: Film },
    { name: 'Live Streams', href: '/live-streams', icon: Radio },
    { name: 'Business', href: '/business', icon: Briefcase },
    { name: 'Support', href: '/support', icon: MessageSquare }
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(11,15,26,0.82)] backdrop-blur-[18px] border-b border-white/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.15)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 min-h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/fans-foloow-me-logo-final-file--png-version.png"
                alt="FansFollow.me"
                className="h-[30px] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center flex-wrap gap-[0.15rem]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-[0.7rem] py-2 rounded-[10px] font-bold text-[0.9rem] text-[#cbd5e1] hover:text-[#fb923c] transition-all duration-150 hover:-translate-y-px"
                >
                  {item.name}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative group">
                <button className="px-[0.7rem] py-2 rounded-[10px] font-bold text-[0.9rem] text-[#cbd5e1] hover:text-[#fb923c] transition-all duration-150 hover:-translate-y-px flex items-center">
                  More
                  <svg className="w-3.5 h-3.5 ml-1 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute top-full left-0 mt-[0.55rem] min-w-[220px] p-[0.45rem] bg-[#151b2c] border border-white/[0.08] rounded-2xl shadow-[0_18px_54px_rgba(0,0,0,0.36)] grid gap-[0.15rem] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {moreItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-3 py-[0.7rem] rounded-xl font-semibold text-[#e5e7eb] hover:bg-white/[0.08] hover:text-white transition-colors flex items-center gap-[0.6rem]"
                    >
                      <item.icon size={16} className="text-[#fb923c] flex-shrink-0" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-[0.6rem] flex-shrink-0">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <Link
                    to="/dashboard"
                    className="flex items-center justify-center w-9 h-9 rounded-full text-white font-bold text-sm bg-gradient-to-br from-blue-500 to-purple-600"
                  >
                    {user?.user_metadata?.full_name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="text-sm font-semibold text-red-400 hover:text-red-300 border border-red-400/40 hover:border-red-300/60 px-3 py-1.5 rounded-lg transition-all"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="rounded-xl font-bold text-[0.9rem] min-h-[42px] px-[1.1rem] py-[0.65rem] flex items-center text-white border border-transparent transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #f97316 0%, #ec4899 48%, #a855f7 100%)',
                      boxShadow: '0 14px 28px rgba(249, 115, 22, 0.24)'
                    }}
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/login"
                    className="rounded-xl font-bold text-[0.9rem] min-h-[42px] px-[1.1rem] py-[0.65rem] flex items-center text-[#e5e7eb] bg-[rgba(30,41,59,0.9)] border-none hover:bg-[rgba(51,65,85,0.9)] hover:text-white transition-all duration-300"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2 text-[#e5e7eb] cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[101] w-[min(85vw,360px)] bg-gradient-to-b from-[#151b2c] to-[#0f172a] border-l border-white/[0.08] overflow-y-auto flex flex-col p-6 transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <button
            className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 text-[#e5e7eb] cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation section */}
        <div className="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-[#64748b] py-[0.6rem]">Navigation</div>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="block py-3 text-[#e5e7eb] text-[1.05rem] font-semibold hover:text-[#fb923c] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        {/* More section */}
        <div className="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-[#64748b] py-[0.6rem] mt-2">More</div>
        {moreItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="block py-3 text-[#e5e7eb] text-[1.05rem] font-semibold hover:text-[#fb923c] transition-colors flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <item.icon size={20} className="text-[#fb923c]" />
            {item.name}
          </Link>
        ))}

        {/* CTA */}
        <div className="mt-auto pt-6">
          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className="block w-full py-4 rounded-xl font-extrabold text-[1rem] text-center text-white min-h-[56px] flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 48%, #a855f7 100%)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/signup"
                className="block w-full py-4 rounded-xl font-extrabold text-[1rem] text-center text-white min-h-[56px] flex items-center justify-center mb-3"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ec4899 48%, #a855f7 100%)',
                  boxShadow: '0 14px 28px rgba(249, 115, 22, 0.24)'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="block w-full py-3 rounded-xl font-bold text-[1rem] text-center text-[#e5e7eb] bg-[rgba(30,41,59,0.9)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
