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
        id="celebrities"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(rgba(0,0,0,.45), rgba(15,23,42,.35)), url("/ffmherobackground.jpg") center/cover no-repeat',
          color: '#e5e7eb',
          minHeight: 'calc(100svh + 76px)',
          display: 'flex',
          alignItems: 'center',
          marginTop: '-76px',
          paddingTop: '76px'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]"
            style={{
              position: 'relative',
              zIndex: 1,
              gap: '1.5rem',
              alignItems: 'center',
              padding: '5rem 0 4rem',
              maxWidth: '72rem',
              margin: '0 auto',
              textAlign: 'left'
            }}
          >
            {/* Left - Text */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  lineHeight: '1.25',
                  margin: '0 0 .5rem',
                  letterSpacing: '-.025em',
                  maxWidth: '32ch',
                  color: '#fff',
                  fontWeight: 900
                }}
              >
                FansFollow.me — where fans become friends
              </h1>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.45rem',
                  color: '#fb923c',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  textShadow: '0 1px 4px rgba(0,0,0,.6)'
                }}
              >
                For Fitness, Bodybuilding and Martial Arts Creators
              </div>
              <p
                style={{
                  color: '#f1f5f9',
                  maxWidth: '32rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textShadow: '0 1px 3px rgba(0,0,0,.5)',
                  lineHeight: '1.75',
                  margin: 0
                }}
              >
                Built for fitness coaches, bodybuilders, nutrition experts, martial artists and combat sports creators to earn from fans worldwide through content, coaching and direct fan access.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                <Link
                  to="/explore"
                  style={{
                    borderRadius: '12px',
                    fontWeight: 700,
                    minHeight: '44px',
                    padding: '.75rem 1.5rem',
                    letterSpacing: '-0.01em',
                    borderWidth: '1px',
                    fontSize: '0.875rem',
                    transition: 'all .3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'linear-gradient(135deg, #f97316 0%, #a855f7 100%)',
                    borderColor: 'transparent',
                    color: '#fff',
                    boxShadow: '0 10px 20px rgba(249, 115, 22, .3)'
                  }}
                  className="hover:scale-105 transition-transform"
                >
                  <Search size={18} />
                  Explore Creators
                </Link>
                <Link
                  to="/signup"
                  style={{
                    borderRadius: '12px',
                    fontWeight: 700,
                    minHeight: '44px',
                    padding: '.75rem 1.5rem',
                    letterSpacing: '-0.01em',
                    borderWidth: '1px',
                    fontSize: '0.875rem',
                    transition: 'all .3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(30,41,59,.8)',
                    border: '1px solid rgba(255,255,255,.15)',
                    color: '#e2e8f0',
                    boxShadow: 'none'
                  }}
                  className="hover:scale-105 transition-transform"
                >
                  <UserPlus size={18} />
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right - Logo */}
            <div
              style={{
                width: '75%',
                maxWidth: '400px',
                margin: '2rem 0 0',
                alignSelf: 'end',
                justifySelf: 'center',
                opacity: '.95'
              }}
            >
              <img
                src="/fans-foloow-me-logo-final-file--png-version.png"
                alt="FansFollow.me logo"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,.3))',
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
      <section style={{ padding: '4rem 0 .5rem', background: 'transparent' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 900,
                color: '#fff',
                textAlign: 'center',
                marginBottom: '.5rem',
                lineHeight: '1.25',
                margin: '0 0 .5rem 0'
              }}
            >
              One home for fitness creators and their fans
            </h2>
            <p
              className="section-sub"
              style={{
                textAlign: 'center',
                color: '#d1d5db',
                maxWidth: '48rem',
                margin: '0 auto 2rem',
                fontSize: '.95rem',
                lineHeight: '1.75'
              }}
            >
              FansFollow.me brings fighters, coaches, fitness influencers, sports professionals and actors with fitness-based content together on one platform, so fans can find them in one place and creators can build real relationships, add new revenue streams and unlock bigger opportunities.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ display: 'grid', gap: '1rem' }}
          >
            {featureCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  height: '100%',
                  transition: 'all .3s ease'
                }}
                className="ffm-card-hover"
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #f97316 0%, #a855f7 100%)',
                    color: '#fff',
                    fontSize: '1.25rem',
                    transition: 'transform .3s ease'
                  }}
                >
                  <card.icon size={20} className="text-white" />
                </div>
                <h3 style={{ margin: '0 0 .4rem', fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{card.title}</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.65', marginBottom: 0, fontSize: '.9rem', margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FOR FANS ===== */}
      <section
        id="fans"
        style={{
          background: 'linear-gradient(180deg, rgba(11,15,26,.96), rgba(21,27,44,.96)), radial-gradient(circle at 18% 20%, rgba(96,165,250,.13), transparent 34%), radial-gradient(circle at 82% 72%, rgba(249,115,22,.08), transparent 38%), #0b0f1a',
          paddingBottom: 0
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '.75rem 1rem 3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  padding: '.5rem 1rem',
                  borderRadius: '999px',
                  background: 'rgba(249,115,22,.2)',
                  border: '1px solid rgba(249,115,22,.3)',
                  marginBottom: '1rem'
                }}
              >
                <Users size={16} className="text-[#fb923c]" />
                <span style={{ color: '#fdba74', fontWeight: 600, fontSize: '.75rem' }}>For Fans Globally | Pay with BTC/ETH/USDT/SOL</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 900,
                  color: '#fff',
                  textAlign: 'center',
                  marginBottom: '.5rem',
                  lineHeight: '1.25',
                  margin: '0 0 .5rem 0'
                }}
              >
                Get closer access to your favourite athletes &amp; creators
              </h2>
              <p
                style={{
                  textAlign: 'center',
                  color: '#d1d5db',
                  maxWidth: '48rem',
                  margin: '0 auto 2rem',
                  fontSize: '.95rem',
                  lineHeight: '1.75'
                }}
              >
                FansFollow.me lets you build real connections with UFC fighters, bodybuilders, martial artists, fitness models and other creators through private chats, exclusive content, calls and video sessions.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,.05)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: '16px',
                padding: '1.25rem',
                border: '1px solid rgba(255,255,255,.1)'
              }}
            >
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                style={{ display: 'grid', gap: '1rem' }}
              >
                {fanCards.map((card, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'linear-gradient(135deg, rgba(249,115,22,.2), rgba(168,85,247,.2))',
                      borderRadius: '12px',
                      padding: '1rem',
                      textAlign: 'center',
                      border: i % 2 === 0
                        ? '1px solid rgba(249,115,22,.3)'
                        : '1px solid rgba(168,85,247,.3)',
                      transition: 'all .3s'
                    }}
                  >
                    <card.icon
                      size={24}
                      style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        marginBottom: '.5rem',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        color: i % 2 === 0 ? '#fb923c' : '#a78bfa'
                      }}
                    />
                    <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '.95rem', marginBottom: '.25rem', margin: '0 0 .25rem 0' }}>{card.title}</h4>
                    <p style={{ color: '#d1d5db', fontSize: '.85rem', margin: 0 }}>{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CTA ===== */}
      <section
        id="business"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(rgba(0,0,0,.5), rgba(15,23,42,.5)), url("/ffmherobackground.jpg") center/cover no-repeat',
          padding: '5rem 0',
          textAlign: 'center'
        }}
      >
        <div id="scan" style={{ position: 'relative', top: '-90px', height: 0 }} />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 900,
              color: '#fff',
              marginBottom: '.5rem',
              margin: '0 0 .5rem 0'
            }}
          >
            Ready to start as a creator?
          </h2>
          <p
            style={{
              color: '#d1d5db',
              fontSize: '1rem',
              maxWidth: '500px',
              margin: '0 auto 2rem',
              lineHeight: '1.7'
            }}
          >
            Keep more of what you earn, connect with fans in one place and unlock new media and casting opportunities as you grow on FansFollow.me.
          </p>
          <Link
            to="/signup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              padding: '.75rem 1.75rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f97316 0%, #a855f7 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all .3s',
              boxShadow: '0 14px 28px rgba(249,115,22,.3)'
            }}
            className="hover:scale-105 transition-transform"
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
