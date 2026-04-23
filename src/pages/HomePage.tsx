import React from 'react'
import { Users, Star, ArrowRight, Search, UserPlus, Zap, CheckCircle, DollarSign, MessageCircle, Phone, Video, Lock, TrendingUp, Globe, Shield, CreditCard } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import MobileAppSection from '../components/MobileAppSection'
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
                FansFollow — Where Fans Become Friends
              </h1>

              <div className="mb-4 sm:mb-6">
                <p className="text-orange-400 font-semibold text-sm sm:text-base mb-3">
                  For Fitness, Bodybuilding and Martial Arts creators
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
                alt="FansFollow Logo - Where Fans Become Friends - Global Platform for Fitness, Martial Arts & Combat Sports Creators"
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

      {/* For Creators Section - Merged */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
              For Creators: Turn Your Expertise Into Worldwide Income
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
              Built for fitness, bodybuilding, nutrition, martial arts, and combat sports creators worldwide. <strong className="text-white">Keep 80%+ of everything you earn.</strong>
            </p>
          </div>

          {/* 6 Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Card 1: Keep 80%+ Revenue */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <DollarSign size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Keep 80%+ Revenue
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Industry-leading revenue share. VIP creators with large followings can negotiate custom rates even higher.
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
                Personal coaching, content sales, live sessions, digital products, text coaching, video consultations, and more.
              </p>
            </div>

            {/* Card 3: Global Crypto Payments */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Global Crypto Payments
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Accept BTC, ETH, USDT, SOL from fans worldwide. Get paid via bank transfer, PayPal, or crypto with no banking restrictions.
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
                Paid phone calls, text coaching, personalized training programs, and exclusive content.
              </p>
            </div>

            {/* Card 5: Professional Creator Tools */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <TrendingUp size={28} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Professional Creator Tools
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Analytics dashboard to track earnings and growth, encrypted communications, automatic billing, dedicated support.
              </p>
            </div>

            {/* Card 6: Earn FFM Reward Tokens */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg text-2xl">
                🪙
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Earn FFM Reward Tokens
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Creators earn reward tokens which can be converted to the FFM token.
              </p>
            </div>
          </div>

          {/* Earning Potential Chart */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/10 hover:shadow-orange-500/30 hover:border-orange-500/30 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Earning Potential</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg border border-white/10 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-purple-500/20 transition-all duration-300 hover:shadow-md">
                  <span className="text-gray-300 font-medium">Small Creator (1K-5K)</span>
                  <span className="font-bold text-white text-lg">$5K-20K/month</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg border border-white/10 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-purple-500/20 transition-all duration-300 hover:shadow-md">
                  <span className="text-gray-300 font-medium">Growing Creator (5K-50K)</span>
                  <span className="font-bold text-white text-lg">$20K-75K/month</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg border border-white/10 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-purple-500/20 transition-all duration-300 hover:shadow-md">
                  <span className="text-gray-300 font-medium">Established (100K+)</span>
                  <span className="font-bold text-white text-lg">$50K-200K+/month</span>
                </div>
              </div>

              {/* Single CTA */}
              <div className="text-center mt-6">
                <Link
                  to="/signup"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-1"
                >
                  <UserPlus size={20} />
                  <span>Get Started as Creator</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Fans/Members Section */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5"></div>
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold text-xs sm:text-sm">For Fans Globally | Pay with BTC/ETH/USDT/SOL</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4">
              Connect With Your Favorite Athletes & Actors Worldwide
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto mb-4 sm:mb-6" aria-label="Fan benefits">
              Build real friendships with UFC fighters, bodybuilders, nutritionists, martial artists, fitness models, and combat sports athletes from around the world through personal interactions.
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

      {/* Mobile App Section */}
      <MobileAppSection />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default HomePage