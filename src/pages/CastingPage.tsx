import React from 'react'
import { ArrowLeft, Star, Film, Bell, Zap, Users, Briefcase, Heart, Shield, Award } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'
import Footer from '../components/Footer'

const CastingPage = () => {
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title={pageSEO.casting.title}
        description={pageSEO.casting.description}
        keywords={pageSEO.casting.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'Casting', url: 'https://fansfollow.me/casting' }
          ])
        ]}
      />

      {/* Header Navigation */}
      <div className="bg-gray-900/50 border-b border-gray-700/50 sticky top-0 z-40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="flex items-center text-orange-400 hover:text-orange-300 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* 1) HERO SECTION */}
      <div
        className="relative min-h-[90vh] flex items-center justify-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(15, 23, 42, 0.6)), url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6">
            <Film className="w-5 h-5 text-orange-300 mr-2" />
            <span className="text-orange-300 font-semibold">FFM STUDIOS</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Get Cast In Real Action Films
          </h1>

          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            We discover and cast talented martial artists, fighters, actors and performers for authentic action movies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection('waitlist-form')}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-orange-500/40"
            >
              <span className="flex items-center justify-center">
                <Bell className="w-5 h-5 mr-2" />
                Join Casting Waitlist
              </span>
            </button>
            <button
              onClick={() => scrollToSection('current-status')}
              className="bg-transparent border-2 border-orange-400/50 hover:border-orange-400 text-orange-300 hover:text-orange-200 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              See what we're working on
            </button>
          </div>
        </div>
      </div>

      {/* 2) FOUNDER / CREDIBILITY BAND */}
      <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-y border-gray-700/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image */}
            <div className="flex-shrink-0 w-full lg:w-1/3">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-500/30">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="David Kurzhal - Viking Samurai - Action Film Director and Casting Expert"
                  className="w-full h-full object-cover"
                  width="400"
                  height="400"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Led by Viking Samurai</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                FFM founder <span className="text-orange-400 font-semibold">David Kurzhal (Viking Samurai)</span> has starred in <span className="text-purple-400 font-semibold">The Last Kumite</span>, <span className="text-purple-400 font-semibold">Bloodstorm</span>, <span className="text-purple-400 font-semibold">Elite Target</span>, and <span className="text-purple-400 font-semibold">Order of the Dragon</span> alongside Steven Seagal. Now co-directing films, he's creating real casting opportunities for talented creators and martial artists.
              </p>
              <p className="text-gray-400 text-base">
                Join FFM, build your audience, and get discovered for film roles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3) CURRENT CASTING STATUS */}
      <div id="current-status" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Current Casting Status</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl border-2 border-gray-700/50 p-12 shadow-2xl text-center">
              <div className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 rounded-full px-6 py-2 mb-8">
                <span className="text-purple-300 font-semibold text-sm uppercase">Pre-production</span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                We're currently in pre-production on multiple martial arts film projects. Casting calls will open soon. Be the first to know when opportunities become available by joining our waitlist.
              </p>

              <button
                onClick={() => scrollToSection('waitlist-form')}
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-orange-500/40"
              >
                <span className="flex items-center justify-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Join Casting Waitlist
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4) WHO WE'RE LOOKING FOR (GRID) */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-y border-gray-700/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Who We Want To Work With</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              FFM Studios is looking for talented martial artists, actors and stunt performers who bring authenticity and professionalism to action cinema.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700/50 p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-lg p-3 flex-shrink-0">
                  <Zap size={24} className="text-orange-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white text-lg mb-2">Authentic Martial Arts Skills</h3>
                  <p className="text-gray-400 text-sm">With on-screen potential</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-lg p-3 flex-shrink-0">
                  <Heart size={24} className="text-purple-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white text-lg mb-2">Real Acting Ability</h3>
                  <p className="text-gray-400 text-sm">Able to convey emotion and character</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700/50 p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-lg p-3 flex-shrink-0">
                  <Award size={24} className="text-orange-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white text-lg mb-2">Physically Prepared</h3>
                  <p className="text-gray-400 text-sm">Fit and able to perform or learn choreography</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-lg p-3 flex-shrink-0">
                  <Briefcase size={24} className="text-purple-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white text-lg mb-2">Professional On Set</h3>
                  <p className="text-gray-400 text-sm">Reliable in a fast-paced film environment</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700/50 p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-lg p-3 flex-shrink-0">
                  <Shield size={24} className="text-orange-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white text-lg mb-2">Committed to Authentic Action</h3>
                  <p className="text-gray-400 text-sm">Focused on long-term growth in film and entertainment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Form Section */}
      <div id="waitlist-form" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl border-2 border-gray-700/50 p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Join the Casting Waitlist</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Specialty / What You Do</label>
                <input
                  type="text"
                  placeholder="e.g., Martial Artist, Stunt Performer, Actor"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Tell us about yourself (optional)</label>
                <textarea
                  placeholder="Your experience, skills, or why you're interested in FFM casting..."
                  rows={4}
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/40"
              >
                Join Waitlist
              </button>

              <p className="text-gray-500 text-xs text-center">
                We'll notify you when casting calls open. No spam, just opportunities.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* 5) SOCIAL / FOLLOW SECTION */}
      <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-t border-gray-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gray-300 text-sm">
                Follow <span className="text-orange-400 font-semibold">David Kurzhal (Viking Samurai)</span> for behind-the-scenes updates and casting announcements.
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-orange-500/30 border border-gray-600/50 hover:border-orange-500/50 flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-orange-400"
                aria-label="Facebook"
              >
                <span className="text-lg">f</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-purple-500/30 border border-gray-600/50 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-purple-400"
                aria-label="Instagram"
              >
                <span className="text-lg">@</span>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-red-500/30 border border-gray-600/50 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-red-400"
                aria-label="YouTube"
              >
                <span className="text-lg">▶</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CastingPage
