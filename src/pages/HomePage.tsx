import React from 'react'
import { Users, Star, ArrowRight, Search, UserPlus, Zap, CheckCircle, DollarSign, MessageCircle, Phone, Video, Lock, TrendingUp, Globe, Shield, CreditCard, Camera, QrCode, Mail } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import { pageSEO, organizationSchema, websiteSchema, createBreadcrumbSchema } from '../config/seo'

// SEO-optimized keywords and phrases
const seoKeywords = {
  primary: [
    "global content creator platform",
    "fitness creator platform",
    "martial arts creator platform",
    "combat sports platform",
    "nutrition expert platform",
    "bodybuilding platform",
    "fitness monetization",
    "creator earnings"
  ],
  crypto: [
    "crypto payments for creators",
    "bitcoin payments",
    "ethereum payments",
    "USDT payments",
    "SOL payments",
    "blockchain payments for creators",
    "crypto creator platform",
    "cryptocurrency for content creators"
  ],
  secondary: [
    "fitness content monetization",
    "personal training platform",
    "fitness subscription platform",
    "creator economy platform",
    "fitness influencer platform",
    "martial arts monetization",
    "combat sports monetization"
  ],
  international: [
    "international fitness platform",
    "global creator earnings",
    "worldwide fitness monetization",
    "cross-border creator payments",
    "international content monetization",
    "global fitness audience",
    "worldwide martial arts platform",
    "international fitness coaching"
  ],
  longtail: [
    "how to monetize fitness content",
    "best platform for fitness creators",
    "how to make money as a fitness creator",
    "platform for martial arts instructors",
    "monetize nutrition expertise online",
    "earn money from fitness content",
    "crypto payments for content creators",
    "highest paying creator platform"
  ],
  ultraLongTail: [
    "how to accept bitcoin payments as a fitness creator",
    "best platform for martial arts instructors to monetize globally",
    "how to earn in cryptocurrency as a fitness influencer",
    "platform for bodybuilders to connect with international fans",
    "how to monetize nutrition expertise with worldwide audience",
    "accept ethereum payments for fitness content",
    "global platform for combat sports monetization with crypto"
  ]
};

const HomePage = () => {
  const navigate = useNavigate()

  const featuredCreators = [
    {
      id: 1,
      name: 'Marcus "The Beast" Johnson',
      category: 'UFC/MMA',
      followers: '2.1M',
      avatar: '🥊',
      specialty: 'UFC Heavyweight Champion',
      price: '$5/message'
    },
    {
      id: 2,
      name: 'Dr. Luna "Warrior" Chen',
      category: 'Nutrition',
      followers: '1.5M',
      avatar: '🥗',
      specialty: 'Sports Nutritionist',
      price: '$2.50/message'
    },
    {
      id: 3,
      name: 'Jake "Thunder" Thompson',
      category: 'Bodybuilding',
      followers: '3.2M',
      avatar: '💪',
      specialty: 'Mr. Olympia Winner',
      price: '$4/message'
    }
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
      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(15, 23, 42, 0.2)), url('/ffmherobackground.jpg')`
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className="mb-8 lg:mb-0 text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight">
                FansFollowMe — where fans become friends
              </h1>

              <div className="mb-4 sm:mb-6">
                <p className="text-orange-400 font-semibold text-sm sm:text-base mb-3">
                  For Fitness, Bodybuilding and Martial Arts Creators
                </p>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-lg" aria-label="Platform description">
                  Built for fitness coaches, bodybuilders, nutrition experts, martial artists and combat sports creators to earn from fans worldwide through content, coaching and direct fan access.
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Link 
                  to="/explore"
                  className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-glow flex items-center justify-center space-x-2 relative overflow-hidden group text-sm sm:text-base"
                >
                  <span className="absolute inset-0 w-full h-full shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <Search size={20} />
                  <span>Explore Creators</span>
                </Link>
                
                <Link 
                  to="/signup"
                  className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:border-white/40 hover:shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <UserPlus size={20} />
                  <span>Get Started</span>
                </Link>
              </div>
            </div>

            {/* Logo on right side */}
            <div className="relative flex justify-center items-center w-full mx-auto overflow-visible mt-4 lg:mt-0">
              <img
                src="/fans-foloow-me-logo-final-file--png-version.png"
                alt="FansFollowMe Logo - Where Fans Become Friends - Global Platform for Fitness, Martial Arts & Combat Sports Creators"
                className="h-auto max-w-full mx-auto transform drop-shadow-2xl animate-float opacity-95 hover:opacity-100 transition-all duration-300 bg-transparent"
                style={{ width: '75%', maxWidth: '400px', margin: '0 auto', animationDuration: '6s' }}
                width="400"
                height="400"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creator Benefits Section */}
      <section className="py-16 sm:py-20 bg-[#080d1a] relative overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              One home for fitness creators and their fans
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-300 max-w-5xl mx-auto">
              FansFollow.me brings fighters, coaches, fitness influencers, sports professionals and actors with fitness-based content together on one platform, so fans can find them in one place and creators can build real relationships, add new revenue streams and unlock bigger opportunities.
            </p>
          </div>

          {/* 7 Creator Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Card 1: Keep 80%+ Revenue */}
            <div className="bg-[#101827] rounded-2xl p-7 sm:p-8 border border-[#263247] hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-[70px] h-[70px] rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center mb-3 shadow-lg">
                <DollarSign size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Keep 80%+ Revenue
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Keep more of what you earn with a creator-first revenue share.
              </p>
            </div>

            {/* Card 2: 17+ Revenue Streams */}
            <div className="bg-[#101827] rounded-2xl p-7 sm:p-8 border border-[#263247] hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-[70px] h-[70px] rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center mb-3 shadow-lg">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                17+ Revenue Streams
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Earn through subscriptions, coaching, premium content, calls, tips and more.
              </p>
            </div>

            {/* Card 3: Global Payments */}
            <div className="bg-[#101827] rounded-2xl p-7 sm:p-8 border border-[#263247] hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-[70px] h-[70px] rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center mb-3 shadow-lg">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Global Payments
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Accept payments from fans worldwide with flexible payment options.
              </p>
            </div>

            {/* Card 4: Direct Fan Connection */}
            <div className="bg-[#101827] rounded-2xl p-7 sm:p-8 border border-[#263247] hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-[70px] h-[70px] rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center mb-3 shadow-lg">
                <MessageCircle size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Fan Connection
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Build stronger fan relationships through private access and paid interactions.
              </p>
            </div>

            {/* Card 5: Mobile Content Creation */}
            <div className="bg-[#101827] rounded-2xl p-7 sm:p-8 border border-[#263247] hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-[70px] h-[70px] rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center mb-3 shadow-lg">
                <Camera size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Mobile Content Creation
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Create and upload content directly from your phone.
              </p>
            </div>

            {/* Card 6: Instant Messaging */}
            <div className="bg-[#101827] rounded-2xl p-7 sm:p-8 border border-[#263247] hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-[70px] h-[70px] rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center mb-3 shadow-lg">
                <Phone size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Instant Messaging
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Chat privately with fans in real time.
              </p>
            </div>

            {/* Card 7: Live Streaming */}
            <div className="bg-[#101827] rounded-2xl p-7 sm:p-8 border border-[#263247] hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-[70px] h-[70px] rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center mb-3 shadow-lg">
                <Video size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Live Streaming
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Go live to your audience from any device.
              </p>
            </div>

            {/* Card 8: In-Person QR Sign-Ups */}
            <div className="bg-[#101827] rounded-2xl p-7 sm:p-8 border border-[#263247] hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-[70px] h-[70px] rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center mb-3 shadow-lg">
                <QrCode size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                In-Person QR Sign-Ups
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">
                Let fans join and pay on the spot by scanning your unique QR code at events and gyms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Fans/Members Section */}
      <section className="py-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(15, 23, 42, 0.4)), url('/background-1718534992.jpeg')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5"></div>
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold text-xs sm:text-sm">For Fans Globally | Pay with BTC/ETH/USDT/SOL</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3">
              Get closer access to your favourite athletes & creators
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto mb-3 sm:mb-4" aria-label="Fan benefits">
              FansFollowMe lets you build real connections with UFC fighters, bodybuilders, martial artists, fitness models and other creators through private chats, exclusive content, calls and video sessions.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/10 hover:shadow-orange-500/30 hover:border-orange-500/30 transition-all duration-500 hover:scale-[1.02] mb-4 sm:mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-orange-500/30">
                <MessageCircle size={24} className="text-orange-400 mx-auto mb-2 drop-shadow-md" />
                <div className="text-sm sm:text-base font-bold text-white mb-1">Personal Chats</div>
                <div className="text-xs sm:text-sm text-gray-300">Direct messaging with your favorite athletes</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-purple-500/30">
                <Lock size={24} className="text-purple-400 mx-auto mb-2 drop-shadow-md" />
                <div className="text-sm sm:text-base font-bold text-white mb-1">Exclusive Content</div>
                <div className="text-xs sm:text-sm text-gray-300">Premium photos, videos, and training materials</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-orange-500/30">
                <Phone size={24} className="text-orange-400 mx-auto mb-2 drop-shadow-md" />
                <div className="text-sm sm:text-base font-bold text-white mb-1">Phone Calls</div>
                <div className="text-xs sm:text-sm text-gray-300">Voice conversations and coaching</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-purple-500/30">
                <Video size={24} className="text-purple-400 mx-auto mb-2 drop-shadow-md" />
                <div className="text-sm sm:text-base font-bold text-white mb-1">Video Sessions</div>
                <div className="text-xs sm:text-sm text-gray-300">Face-to-face time with champions and exclusive content</div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => {
                  // Navigate directly to signup page with fan parameter
                  window.location.href = '/signup'
                }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 mb-1 text-sm sm:text-base shadow-lg shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-1"
              >
                <span>Sign Up as Fan - It's Free</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

{/* Creator CTA Section - Distinct Card */}
      <section className="py-6 sm:py-7 lg:py-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/4 to-purple-500/4"></div>

        <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center z-10">
          {/* CTA Card - Premium Elevation */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-xl rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-700/60 shadow-2xl shadow-orange-500/15 hover:shadow-orange-500/25 transition-all duration-300 hover:scale-[1.01] hover:border-slate-700/80 group">

            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500 bg-clip-text text-transparent mb-2 sm:mb-3 drop-shadow-xl">
              Ready to start as a creator?
            </h2>

            <p className="text-sm sm:text-base lg:text-base text-gray-200 mb-4 sm:mb-5 leading-relaxed max-w-2xl mx-auto">
              Keep more of what you earn, connect with fans in one place and unlock new media and casting opportunities as you grow on FansFollowMe.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-purple-500 text-white hover:from-orange-600 hover:to-purple-600 font-bold py-3 px-6 rounded-full transition-all duration-300 text-sm sm:text-base shadow-lg shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/signup'
                }}
              >
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default HomePage