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
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-40 sm:pt-48 lg:pt-56 pb-20 sm:pb-24 lg:pb-28">
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
                FansFollowMe — Where Fans Become Friends
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
            <div className="relative flex justify-center items-center w-full mx-auto overflow-visible mt-4 lg:mt-0 flex-col">
              <img
                src="/fans-foloow-me-logo-final-file--png-version.png"
                alt="FansFollowMe Logo - Where Fans Become Friends - Global Platform for Fitness, Martial Arts & Combat Sports Creators"
                className="h-auto max-w-full mx-auto transform drop-shadow-2xl animate-float opacity-95 hover:opacity-100 transition-all duration-300 bg-transparent"
                style={{ width: '75%', maxWidth: '400px', margin: '0 auto', animationDuration: '6s' }}
                width="400"
                height="400"
                loading="eager"
              />

              {/* Founder Paragraph */}
              <p className="text-center text-sm sm:text-base text-gray-300 mt-6 max-w-md leading-relaxed">
                FansFollowMe is built for fitness, combat sports and performance creators. The founding team has decades of experience in action films and combat sports, and actively creates casting and media opportunities for FFM creators worldwide.
              </p>

              {/* Orange CTA Box */}
              <div className="mt-8 w-full max-w-md bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-3">
                  Ready to start as a creator?
                </h3>
                <p className="text-sm sm:text-base text-orange-200 mb-6 leading-relaxed">
                  Keep more of what you earn, connect with fans in one place and unlock new media and casting opportunities as you grow on FansFollowMe.
                </p>
                <Link
                  to="/signup"
                  className="inline-block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mb-4 text-sm sm:text-base"
                >
                  Get Started as Creator
                </Link>
                <div className="flex items-center justify-center space-x-2 text-gray-400 text-xs sm:text-sm">
                  <Mail size={16} />
                  <span>support@fansfollow.me</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Benefits Section */}
      <section className="py-16 pb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
              One home for fitness creators and their fans
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
              FansFollowMe brings fighters, coaches, fitness influencers, sports professionals and actors with fitness-based content together on one platform, so fans can find them in one place and creators can build real relationships, add new revenue streams and unlock bigger opportunities.
            </p>
          </div>

          {/* 7 Creator Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Card 1: Keep 80%+ Revenue */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <DollarSign size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Keep 80%+ Revenue
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Keep more of what you earn with a creator-first revenue share.
              </p>
            </div>

            {/* Card 2: 17+ Revenue Streams */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                17+ Revenue Streams
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Earn through subscriptions, coaching, premium content, calls, tips and more.
              </p>
            </div>

            {/* Card 3: Global Payments */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Global Payments
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Accept payments from fans worldwide with flexible payment options.
              </p>
            </div>

            {/* Card 4: Direct Fan Connection */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <MessageCircle size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Direct Fan Connection
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Build stronger fan relationships through private access and paid interactions.
              </p>
            </div>

            {/* Card 5: Mobile Content Creation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <Camera size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Mobile Content Creation
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Create and upload content directly from your phone.
              </p>
            </div>

            {/* Card 6: Instant Messaging */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <Phone size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Instant Messaging
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Chat privately with fans in real time.
              </p>
            </div>

            {/* Card 7: Live Streaming */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <Video size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Live Streaming
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Go live to your audience from any device.
              </p>
            </div>

            {/* Card 8: In-Person QR Sign-Ups */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <QrCode size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                In-Person QR Sign-Ups
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Let fans join and pay on the spot by scanning your unique QR code at events and gyms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Fans/Members Section */}
      <section className="py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5"></div>
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold text-xs sm:text-sm">For Fans Globally | Pay with BTC/ETH/USDT/SOL</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4">
              Get closer access to your favourite athletes & creators
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto mb-4 sm:mb-6" aria-label="Fan benefits">
              FansFollowMe lets you build real connections with UFC fighters, bodybuilders, martial artists, fitness models and other creators through private chats, exclusive content, calls and video sessions.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/10 hover:shadow-orange-500/30 hover:border-orange-500/30 transition-all duration-500 hover:scale-[1.02] mb-6 sm:mb-8">
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

      {/* Final CTA */}
      <section className="py-12 relative overflow-hidden">
        {/* Martial arts/gym background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('/background-1718534992 copy.jpeg')`
        }}></div>

        <div className="relative max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-black text-white mb-4 sm:mb-6 drop-shadow-2xl">
            Ready to Start Earning From Fans Worldwide with Crypto Payments?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 drop-shadow-xl" aria-label="Global earning potential">
            Start monetizing your expertise with fans from every country
          </p>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="relative inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-sm sm:text-base shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-110 hover:-translate-y-2 group overflow-hidden"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '/signup'
              }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span className="relative z-10">Sign Up as Creator</span>
            </Link>
            <Link
              to="/how-it-works"
              className="bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl text-sm sm:text-base hover:scale-110 hover:-translate-y-2"
            >
              <span>How It Works</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default HomePage