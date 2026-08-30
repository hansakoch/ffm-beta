import React from 'react'
import { Search, UserPlus, DollarSign, Zap, Globe, MessageCircle, Camera, Phone, Video, QrCode, Lock, ArrowRight, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import { pageSEO, organizationSchema, websiteSchema, createBreadcrumbSchema } from '../config/seo'

const HomePage = () => {
  const featureCards = [
    { icon: DollarSign, title: 'Keep 80%+ Revenue', text: 'Keep more of what you earn with a creator-first revenue share.' },
    { icon: Zap, title: '17+ Revenue Streams', text: 'Earn through subscriptions, coaching, premium content, calls, tips and more.' },
    { icon: Globe, title: 'Global Payments', text: 'Accept payments from fans worldwide with flexible payment options.' },
    { icon: MessageCircle, title: 'Direct Fan Connection', text: 'Build stronger fan relationships through private access and paid interactions.' },
    { icon: Camera, title: 'Mobile Content Creation', text: 'Create and upload content directly from your phone.' },
    { icon: Phone, title: 'Instant Messaging', text: 'Chat privately with fans in real time.' },
    { icon: Video, title: 'Live Streaming', text: 'Go live to your audience from any device.' },
    { icon: QrCode, title: 'In-Person QR Sign-Ups', text: 'Let fans join and pay on the spot by scanning your unique QR code at events and gyms.' }
  ]

  const fanCards = [
    { icon: MessageCircle, title: 'Personal Chats', text: 'Direct messaging with your favorite athletes' },
    { icon: Lock, title: 'Exclusive Content', text: 'Premium photos, videos, and training materials' },
    { icon: Phone, title: 'Phone Calls', text: 'Voice conversations and coaching' },
    { icon: Video, title: 'Video Sessions', text: 'Face-to-face time with champions and exclusive content' }
  ]

  return (
    <>
      <SEOOptimizer
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          websiteSchema,
          createBreadcrumbSchema([{ name: 'Home', url: 'https://fansfollow.me' }])
        ]}
      />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative overflow-hidden flex items-center min-h-[calc(100svh+72px)] -mt-[72px] pt-[72px]"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(15,23,42,0.35)), url("/ffmherobackground.jpg") center/cover no-repeat'
        }}
      >
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] gap-6 items-center py-20 lg:py-16">
            {/* Left - Text */}
            <div className="text-left">
              <h1
                className="text-white mb-2 leading-[1.25] tracking-[-0.025em] max-w-[32ch]"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 900 }}
              >
                FansFollow.me — where fans become friends
              </h1>
              <div className="inline-flex items-center gap-[0.45rem] text-[#fb923c] text-[0.8rem] font-semibold mb-3" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
                For Fitness, Bodybuilding and Martial Arts Creators
              </div>
              <p
                className="text-[#f1f5f9] max-w-[32rem] leading-[1.75] font-medium"
                style={{ fontSize: '0.875rem', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
              >
                Built for fitness coaches, bodybuilders, nutrition experts, martial artists and combat sports creators to earn from fans worldwide through content, coaching and direct fan access.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 rounded-xl font-bold text-white border border-transparent transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #a855f7 100%)',
                    minHeight: '44px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.875rem',
                    boxShadow: '0 10px 20px rgba(249, 115, 22, 0.3)'
                  }}
                >
                  <Search size={18} />
                  Explore Creators
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-xl font-bold text-[#e2e8f0] border transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(30,41,59,0.8)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    minHeight: '44px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.875rem'
                  }}
                >
                  <UserPlus size={18} />
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right - Logo */}
            <div className="flex justify-center items-end self-end justify-self-center mt-8 lg:mt-0 opacity-95">
              <img
                src="/fans-foloow-me-logo-final-file--png-version.png"
                alt="FansFollow.me logo"
                className="block w-full h-auto"
                style={{
                  width: '75%',
                  maxWidth: '400px',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                  animation: 'heroFloat 6s ease-in-out infinite'
                }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: FEATURE CARDS ===== */}
      <section className="py-16 lg:py-16 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2
              className="text-white text-center mb-2 leading-[1.25]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900 }}
            >
              One home for fitness creators and their fans
            </h2>
            <p
              className="text-[#d1d5db] max-w-[48rem] mx-auto mb-8"
              style={{ fontSize: '0.95rem', lineHeight: 1.75 }}
            >
              FansFollow.me brings fighters, coaches, fitness influencers, sports professionals and actors with fitness-based content together on one platform, so fans can find them in one place and creators can build real relationships, add new revenue streams and unlock bigger opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((card, i) => (
              <div key={i} className="ffm-card p-6 h-full">
                <div className="ffm-feature-icon">
                  <card.icon size={20} className="text-white" />
                </div>
                <h3 className="m-0 mb-[0.4rem] text-[1rem] font-bold text-white">{card.title}</h3>
                <p className="text-[#d1d5db] m-0" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FOR FANS ===== */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(11,15,26,0.92), rgba(21,27,44,0.88)), url("/ffmherobackground.jpg") center/cover no-repeat',
          paddingBottom: 0
        }}
      >
        <div className="max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{
                background: 'rgba(249,115,22,0.2)',
                border: '1px solid rgba(249,115,22,0.3)'
              }}
            >
              <Users size={16} className="text-[#fb923c]" />
              <span className="text-[#fdba74] font-semibold text-[0.75rem]">For Fans Globally | Pay with BTC/ETH/USDT/SOL</span>
            </div>
            <h2
              className="text-white text-center mb-2 leading-[1.25]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900 }}
            >
              Get closer access to your favourite athletes &amp; creators
            </h2>
            <p
              className="text-[#d1d5db] max-w-[48rem] mx-auto mb-6"
              style={{ fontSize: '0.95rem', lineHeight: 1.75 }}
            >
              FansFollow.me lets you build real connections with UFC fighters, bodybuilders, martial artists, fitness models and other creators through private chats, exclusive content, calls and video sessions.
            </p>
          </div>

          <div className="ffm-card p-5 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fanCards.map((card, i) => (
                <div key={i} className="ffm-fan-card">
                  <card.icon
                    size={24}
                    className={i % 2 === 0 ? 'text-[#fb923c]' : 'text-[#a78bfa]'}
                    style={{ display: 'block', margin: '0 auto 0.5rem' }}
                  />
                  <h4 className="text-white font-bold text-[0.95rem] mb-1">{card.title}</h4>
                  <p className="text-[#d1d5db] text-[0.85rem] m-0">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CTA ===== */}
      <section
        className="relative overflow-hidden text-center py-20 lg:py-20"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(15,23,42,0.5)), url("/ffmherobackground.jpg") center/cover no-repeat'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-white mb-2 leading-[1.25]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900 }}
          >
            Ready to start as a creator?
          </h2>
          <p
            className="text-[#d1d5db] mx-auto mb-8"
            style={{ fontSize: '1rem', maxWidth: '500px', lineHeight: 1.7 }}
          >
            Keep more of what you earn, connect with fans in one place and unlock new media and casting opportunities as you grow on FansFollow.me.
          </p>
          <Link
            to="/signup"
            className="ffm-cta-btn inline-flex"
          >
            Get Started Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default HomePage
