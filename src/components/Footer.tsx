import React from 'react'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const MARKETING_PATHS = new Set([
  '/', '/creators', '/fans', '/celebrities', '/casting', '/business',
  '/support', '/faq', '/privacy', '/terms', '/cookies', '/login', '/signup',
  '/live-streams', '/explore-creators', '/group-coaching',
])

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
)

const Footer = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isMarketing = MARKETING_PATHS.has(pathname) || pathname.startsWith('/profile/')

  if (!isMarketing) return null

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
      { name: 'Creator Resources', href: '/creators' },
      { name: 'Community', href: '/support' },
    ],
    'Advanced': [
      { name: 'Token Ecosystem', href: '/business#tokens' },
      { name: 'Presale Info', href: '/business#presale' },
    ]
  }

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    if (href.startsWith('/')) {
      navigate(href)
    } else {
      window.location.href = href
    }
  }

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        padding: '1.5rem 0 1.2rem',
        color: '#94a3b8',
        background: 'linear-gradient(135deg, #111827, #1f2937, #111827)',
        borderTop: '1px solid #1f293b'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top gradient line */}
        <div className="ffm-footer-line mb-4" />

        {/* Footer link grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-6" style={{ gap: '2rem' }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="m-0 font-bold text-white relative"
                style={{ fontSize: '1rem', marginBottom: '.75rem' }}
              >
                {category}
                <span
                  className="absolute bottom-0 left-0 h-[2px] rounded-full"
                  style={{
                    width: '32px',
                    background: 'linear-gradient(135deg, #f97316 0%, #ec4899 48%, #a855f7 100%)'
                  }}
                />
              </h3>
              <div>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="block py-[0.15rem] text-[#9ca3af] hover:text-white transition-colors"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom gradient line */}
        <div className="ffm-footer-line mt-6 mb-3" />

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 py-3" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.75rem', padding: '.75rem 0' }}>
          <div className="flex items-center gap-4 flex-wrap justify-center" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="text-[#94a3b8]" style={{ fontSize: '0.85rem' }}>
              &copy; 2026 FansFollow.me. All rights reserved.
            </span>
            <span className="text-[#94a3b8]" style={{ fontSize: '0.85rem' }}>
              <span className="text-[#f97316] font-extrabold">&#8383;</span>{' '}
              <strong className="text-white font-bold">BTC/ETH/USDT/SOL Accepted</strong>
            </span>
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              <Link to="/privacy" onClick={(e) => handleNav(e, '/privacy')} className="text-[#94a3b8] hover:text-white transition-colors whitespace-nowrap" style={{ fontSize: '0.85rem' }}>
                Privacy Policy
              </Link>
              <span className="text-[#4b5563]">&bull;</span>
              <Link to="/terms" onClick={(e) => handleNav(e, '/terms')} className="text-[#94a3b8] hover:text-white transition-colors whitespace-nowrap" style={{ fontSize: '0.85rem' }}>
                Terms of Service
              </Link>
              <span className="text-[#4b5563]">&bull;</span>
              <Link to="/cookies" onClick={(e) => handleNav(e, '/cookies')} className="text-[#94a3b8] hover:text-white transition-colors whitespace-nowrap" style={{ fontSize: '0.85rem' }}>
                Cookie Policy
              </Link>
              <span className="text-[#4b5563]">&bull;</span>
              <Link to="/faq" onClick={(e) => handleNav(e, '/faq')} className="text-[#94a3b8] hover:text-white transition-colors whitespace-nowrap" style={{ fontSize: '0.85rem' }}>
                FAQ
              </Link>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
            <span className="text-[#94a3b8]" style={{ fontSize: '0.85rem' }}>Follow us:</span>
            <div className="flex gap-2" style={{ display: 'flex', gap: '.5rem' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center rounded-full text-[#9ca3af] border border-white/[0.08] hover:text-white transition-all duration-300"
                  style={{
                    width: '28px',
                    height: '28px',
                    background: '#1f2937'
                  }}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={14} />
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
