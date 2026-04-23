import React from 'react'
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

// Custom TikTok Icon Component
const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
)

const Footer = () => {
  const navigate = useNavigate()

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100089966703593', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/fansfollowdotme', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@FFMFansFollowME', label: 'YouTube' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@fansfollow.me', label: 'TikTok' }
  ]

  const footerLinks = {
    'For Creators': [
      { name: 'Getting Started', href: '/signup' },
      { name: 'Personal Video Messages', href: '/creators' },
    ],
    'Revenue Streams': [
      { name: 'Content Monetization', href: '/creators' },
      { name: 'Paid Phone Calls', href: '/creators' },
      { name: 'Text Coaching', href: '/creators' },
      { name: 'Video Consultations', href: '/creators' },
    ],
    'Support': [
      { name: 'Help Center', href: '/support' },
      { name: 'Contact Us', href: '/support' },
      { name: 'Creator Resources', href: '/support' },
      { name: 'Community', href: '/support' },
    ],
    'Advanced': [
      { name: 'Token Ecosystem', href: '/business#tokens' },
      { name: 'Presale Info', href: '/business#presale' },
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden border-t border-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDuration: '20s', animationDelay: '5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Logo and Description - Takes full width */}
            <div className="lg:col-span-12 text-center">
            </div>
          </div>
        </div>

        {/* Footer Links Section - Now at bottom */}
        <div className="relative pt-4 sm:pt-4 pb-8 sm:pb-8">
          {/* Premium Tapered Divider Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-sm"></div>
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" style={{clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)'}}></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-5 text-white relative">
                  {category}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></div>
                </h3>
                <ul className="space-y-1 sm:space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          if (link.href.startsWith('/')) {
                            navigate(link.href)
                          } else {
                            window.location.href = link.href
                          }
                        }}
                        className="text-gray-400 hover:text-orange-400 transition-all duration-200 text-xs sm:text-sm hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative pt-2 pb-3 sm:pt-2 sm:pb-3">
          {/* Premium Tapered Divider Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-sm"></div>
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" style={{clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)'}}></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-3 text-center lg:text-left text-xs">
              <div className="text-gray-400">
                © 2026 FansFollow.me. All rights reserved.
              </div>
              <div className="flex items-center text-gray-400">
                <span className="bg-gray-800 px-2.5 py-0.5 rounded-full">
                  <span className="text-orange-400">₿</span> <span className="text-white font-medium">BTC/ETH/USDT/SOL Accepted</span>
                </span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-1.5 lg:gap-2 text-gray-400">
                <Link
                  to="/privacy"
                  className="hover:text-orange-400 transition-colors hover:underline whitespace-nowrap"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/privacy')
                  }}
                >
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link
                  to="/terms"
                  className="hover:text-orange-400 transition-colors hover:underline whitespace-nowrap"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/terms')
                  }}
                >
                  Terms of Service
                </Link>
                <span>•</span>
                <Link
                  to="/cookies"
                  className="hover:text-orange-400 transition-colors hover:underline whitespace-nowrap"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/cookies')
                  }}
                >
                  Cookie Policy
                </Link>
                <span>•</span>
                <Link
                  to="/faq"
                  className="hover:text-orange-400 transition-colors hover:underline whitespace-nowrap"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/faq')
                  }}
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl hover:rotate-12"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={14} className="sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer