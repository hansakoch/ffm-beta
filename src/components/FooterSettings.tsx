import React from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react'

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
)

const FooterSettings: React.FC = () => {
  return (
    <footer className="bg-[#1e293b] border-t border-[#334155] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* ABOUT Column */}
          <div>
            <h3 className="text-[#e2e8f0] font-bold text-lg mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Privacy</Link></li>
              <li><Link to="/about" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">About us</Link></li>
              <li><Link to="/how-it-works" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">How it works</Link></li>
              <li><Link to="/cookies" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Cookies Policy</Link></li>
              <li><Link to="/shipping" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Shipping</Link></li>
              <li><Link to="/referrals" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Referrals</Link></li>
              <li><Link to="/brand" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Brand</Link></li>
              <li><Link to="/blog" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* CATEGORIES Column */}
          <div>
            <h3 className="text-[#e2e8f0] font-bold text-lg mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              <li><Link to="/category/80s-90s-action-stars" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">80's & 90's Action Stars</Link></li>
              <li><Link to="/category/actor" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Actor</Link></li>
              <li><Link to="/category/animation-comics" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Animation & Comics</Link></li>
              <li><Link to="/category/art-drawing-painting" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Art, Drawing & Painting</Link></li>
              <li><Link to="/category/artist-singer" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Artist & Singer</Link></li>
              <li><Link to="/category/author-writer-blogger" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Author, Writer & Blogger</Link></li>
              <li><Link to="/category/fitness-bodybuilding" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Fitness & Bodybuilding</Link></li>
              <li><Link to="/category/martial-arts" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Martial Arts</Link></li>
              <li><Link to="/explore" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold">Explore →</Link></li>
            </ul>
          </div>

          {/* LINKS Column */}
          <div>
            <h3 className="text-[#e2e8f0] font-bold text-lg mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li><Link to="/creator-profile" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">My page</Link></li>
              <li><Link to="/profile/edit" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Edit my page</Link></li>
              <li><Link to="/subscriptions" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">My subscriptions</Link></li>
              <li><Link to="/logout" className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors text-sm">Log out</Link></li>
            </ul>
          </div>

          {/* CONNECT Column */}
          <div>
            <h3 className="text-[#e2e8f0] font-bold text-lg mb-4">CONNECT</h3>
            <p className="text-[#9ca3af] text-sm mb-4">
              Keep connect with us! Follow us on any of these platforms
            </p>
            <div className="flex items-center space-x-3 mb-6">
              <a
                href="https://twitter.com/fansfollow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#334155] hover:bg-[#475569] rounded-full flex items-center justify-center text-[#e2e8f0] transition-all hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100089966703593"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#334155] hover:bg-[#475569] rounded-full flex items-center justify-center text-[#e2e8f0] transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/fansfollowdotme"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#334155] hover:bg-[#475569] rounded-full flex items-center justify-center text-[#e2e8f0] transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@FFMFansFollowME"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#334155] hover:bg-[#475569] rounded-full flex items-center justify-center text-[#e2e8f0] transition-all hover:scale-110"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@fansfollow.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#334155] hover:bg-[#475569] rounded-full flex items-center justify-center text-[#e2e8f0] transition-all hover:scale-110"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
            <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold py-2 px-6 rounded-lg transition-opacity text-sm">
              Install Web App
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-[#334155] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                FFM
              </div>
            </div>
            <div className="text-[#9ca3af] text-sm">
              © 2026 FansFollow.me, All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSettings
