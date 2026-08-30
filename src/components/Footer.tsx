import React from 'react'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const MARKETING_PATHS = new Set([
  '/', '/creators', '/fans', '/celebrities', '/casting', '/business',
  '/support', '/faq', '/privacy', '/terms', '/cookies', '/login', '/signup',
  '/live-streams', '/explore-creators', '/group-coaching',
])

const TikTokIcon = ({ size = 14 }: { size?: number }) => (
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

  const footerSections: { title: string; links: { name: string; href: string }[] }[] = [
    {
      title: 'For Creators',
      links: [
        { name: 'Getting Started', href: '/signup' },
        { name: 'Personal Video Messages', href: '/creators' },
      ]
    },
    {
      title: 'Revenue Streams',
      links: [
        { name: 'Content Monetization', href: '/creators' },
        { name: 'Paid Phone Calls', href: '/creators' },
        { name: 'Text Coaching', href: '/creators' },
        { name: 'Video Consultations', href: '/creators' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Contact Us', href: '/support' },
        { name: 'Creator Resources', href: '/creators' },
        { name: 'Community', href: '/support' },
      ]
    },
    {
      title: 'Advanced',
      links: [
        { name: 'Token Ecosystem', href: '/business#token' },
        { name: 'Presale Info', href: '/business#presale' },
      ]
    }
  ]

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
      style={{
        padding: '1.5rem 0 1.2rem',
        color: '#94a3b8',
        background: 'linear-gradient(135deg, #111827, #1f2937, #111827)',
        borderTop: '1px solid #1f293b'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top gradient line */}
        <div style={{
          height: '3px',
          width: '100%',
          borderRadius: '999px',
          background: 'linear-gradient(90deg, rgba(249,115,22,0) 0%, rgba(249,115,22,.85) 18%, rgba(168,85,247,.95) 50%, rgba(236,72,153,.85) 82%, rgba(236,72,153,0) 100%)',
          opacity: '.95',
          marginBottom: '1rem'
        }} />

        {/* Footer link grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ gap: '2rem', alignItems: 'start' }}
        >
          {footerSections.map((section) => (
            <div key={section.title} className="footer-links">
              <h3
                style={{
                  margin: '0 0 .75rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#fff',
                  position: 'relative'
                }}
              >
                {section.title}
                <span
                  style={{
                    content: '""',
                    position: 'absolute',
                    left: '0',
                    bottom: '0',
                    width: '32px',
                    height: '2px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #f97316 0%, #ec4899 48%, #a855f7 100%)'
                  }}
                />
              </h3>
              {section.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  style={{
                    display: 'block',
                    padding: '.15rem 0',
                    color: '#9ca3af',
                    fontSize: '.9rem',
                    lineHeight: '1.4'
                  }}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom gradient line */}
        <div style={{
          height: '3px',
          width: '100%',
          borderRadius: '999px',
          background: 'linear-gradient(90deg, rgba(249,115,22,0) 0%, rgba(249,115,22,.85) 18%, rgba(168,85,247,.95) 50%, rgba(236,72,153,.85) 82%, rgba(236,72,153,0) 100%)',
          opacity: '.95',
          marginTop: '1.5rem',
          marginBottom: '.75rem'
        }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '.75rem',
            padding: '.75rem 0'
          }}
        >
          {/* Left side: copyright, BTC, policies */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '.85rem', color: '#94a3b8' }}>
              &copy; 2026 FansFollow.me. All rights reserved.
            </span>
            <span style={{ fontSize: '.85rem', color: '#94a3b8' }}>
              <span style={{ color: '#f97316', fontWeight: 800 }}>&#8383;</span>{' '}
              <strong style={{ color: '#fff' }}>BTC/ETH/USDT/SOL Accepted</strong>
            </span>
            <a
              href="/privacy"
              onClick={(e) => handleNav(e, '/privacy')}
              style={{ fontSize: '.85rem', color: '#94a3b8' }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <span style={{ color: '#4b5563' }}>&bull;</span>
            <a
              href="/terms"
              onClick={(e) => handleNav(e, '/terms')}
              style={{ fontSize: '.85rem', color: '#94a3b8' }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Terms of Service
            </a>
            <span style={{ color: '#4b5563' }}>&bull;</span>
            <a
              href="/cookies"
              onClick={(e) => handleNav(e, '/cookies')}
              style={{ fontSize: '.85rem', color: '#94a3b8' }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Cookie Policy
            </a>
            <span style={{ color: '#4b5563' }}>&bull;</span>
            <a
              href="/faq"
              onClick={(e) => handleNav(e, '/faq')}
              style={{ fontSize: '.85rem', color: '#94a3b8' }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              FAQ
            </a>
          </div>

          {/* Right side: social */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '.85rem', color: '#94a3b8' }}>Follow us:</span>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#1f2937',
                    color: '#9ca3af',
                    border: '1px solid rgba(255,255,255,.08)'
                  }}
                  className="hover:text-white transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(249,115,22,.16)'
                    e.currentTarget.style.borderColor = 'rgba(249,115,22,.24)'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1f2937'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'
                    e.currentTarget.style.color = '#9ca3af'
                  }}
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
