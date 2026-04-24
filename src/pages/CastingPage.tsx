import React from 'react'
import { ArrowLeft, Film, Bell, Zap, Heart, Award, Briefcase, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'
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
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 animate-pulse">
            <Film className="w-5 h-5 text-orange-300 mr-2" />
            <span className="text-orange-300 font-semibold">FFM STUDIOS</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Get Cast In Real Action Films
          </h1>

          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            We discover and cast talented martial artists, fighters, actors and performers for authentic action movies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('waitlist-form')}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-orange-500/40 flex items-center justify-center gap-2"
            >
              <Bell className="w-5 h-5" />
              Join Casting Waitlist
            </button>
            <button
              onClick={() => scrollToSection('current-status')}
              className="bg-transparent border-2 border-orange-400/50 hover:border-orange-400 text-orange-300 hover:text-orange-200 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              See what we're working on
            </button>
          </div>
        </div>
      </div>

      {/* 2) FOUNDER / CREDIBILITY SECTION - ENHANCED */}
      <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-y border-orange-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image with styling */}
            <div className="flex-shrink-0 w-full lg:w-2/5 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-600 rounded-3xl blur-3xl opacity-30 group-hover:opacity-40 -z-10 transition-opacity duration-300"></div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-500/40 group-hover:border-orange-500/70 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-orange-500/30">
                <img
                  src="/Viking.png"
                  alt="David Kurzhal - Viking Samurai - Action Film Director and Casting Expert"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 lg:pt-8">
              <div className="inline-block bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-orange-400 font-semibold text-sm">FOUNDER & CO-DIRECTOR</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Led by <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Viking Samurai</span>
              </h2>

              <div className="space-y-6 mb-8">
                <p className="text-gray-200 text-lg leading-relaxed">
                  FFM founder <span className="text-orange-400 font-bold">David Kurzhal (Viking Samurai)</span> brings real film credentials to casting. He's starred in blockbuster action films including:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['The Last Kumite', 'Bloodstorm', 'Elite Target', 'Order of the Dragon'].map((film, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-lg px-4 py-3">
                      <p className="text-gray-200 font-semibold">{film}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 text-base leading-relaxed border-l-4 border-orange-500 pl-4">
                  Now co-directing films and creating real casting opportunities. He's not just finding talent—he understands what it takes to succeed on set in high-octane action productions.
                </p>
              </div>

              <p className="text-gray-400 italic">Join FFM, build your audience, and get discovered for film roles.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3) CURRENT CASTING STATUS */}
      <div id="current-status" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Current Casting Status</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We're actively developing multiple martial arts film projects</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-3xl border-2 border-gray-700/50 p-12 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
              <div className="flex items-center justify-center mb-8">
                <div className="inline-block bg-gradient-to-r from-purple-500/30 to-blue-500/30 border-2 border-purple-500/50 rounded-full px-8 py-3">
                  <span className="text-purple-300 font-bold text-sm uppercase tracking-wider">Pre-production Phase</span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center max-w-xl mx-auto">
                We're currently in pre-production on multiple martial arts film projects. Casting calls will open soon. Be the first to know when opportunities become available by joining our waitlist.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('waitlist-form')}
                  className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-orange-500/40 flex items-center justify-center gap-2"
                >
                  <Bell className="w-5 h-5" />
                  Join Casting Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4) WHO WE'RE LOOKING FOR - CLEAN GRID */}
      <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/60 border-y border-gray-700/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Who We Want To Work With</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Talented martial artists, actors and stunt performers who bring authenticity and professionalism to action cinema.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto auto-rows-max">
            {/* Card 1 - Large */}
            <div className="sm:col-span-2 lg:row-span-2 group">
              <div className="relative bg-gradient-to-br from-orange-500/15 to-orange-500/5 backdrop-blur rounded-2xl border-2 border-orange-500/30 p-8 hover:border-orange-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 flex flex-col justify-between h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500/30 to-orange-500/10 rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap size={32} className="text-orange-400" />
                  </div>
                  <h3 className="font-black text-white text-xl mb-2">Authentic Martial Arts Skills</h3>
                  <p className="text-gray-400 text-sm">With on-screen potential and years of training</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-purple-500/15 to-purple-500/5 backdrop-blur rounded-2xl border-2 border-purple-500/30 p-6 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-xl p-3 w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Heart size={24} className="text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">Real Acting Ability</h3>
                  <p className="text-gray-400 text-sm">Convey emotion and character</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-orange-500/15 to-orange-500/5 backdrop-blur rounded-2xl border-2 border-orange-500/30 p-6 hover:border-orange-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500/30 to-orange-500/10 rounded-xl p-3 w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Award size={24} className="text-orange-400" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">Physically Prepared</h3>
                  <p className="text-gray-400 text-sm">Fit and learn choreography</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-purple-500/15 to-purple-500/5 backdrop-blur rounded-2xl border-2 border-purple-500/30 p-6 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-xl p-3 w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={24} className="text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">Professional On Set</h3>
                  <p className="text-gray-400 text-sm">Reliable and fast-paced</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="sm:col-span-2 group">
              <div className="relative bg-gradient-to-br from-orange-500/15 to-orange-500/5 backdrop-blur rounded-2xl border-2 border-orange-500/30 p-6 hover:border-orange-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500/30 to-orange-500/10 rounded-xl p-3 w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Shield size={24} className="text-orange-400" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">Committed to Authentic Action</h3>
                  <p className="text-gray-400 text-sm">Focused on long-term growth in film</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Form Section */}
      <div id="waitlist-form" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800/40 to-gray-900/60">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl border-2 border-gray-700/50 p-12 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div className="relative">
              <h2 className="text-3xl font-black text-white mb-2 text-center">Join the Casting Waitlist</h2>
              <p className="text-gray-400 text-center mb-8">Be notified the moment casting calls open for our next projects</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Specialty / What You Do</label>
                  <input
                    type="text"
                    placeholder="e.g., Martial Artist, Stunt Performer, Actor"
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Tell us about yourself (optional)</label>
                  <textarea
                    placeholder="Your experience, skills, or why you're interested in FFM casting..."
                    rows={4}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/40"
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
      </div>

      {/* 5) SOCIAL / FOLLOW SECTION */}
      <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-t border-gray-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gray-300 text-sm">
                Follow <span className="text-orange-400 font-bold">David Kurzhal (Viking Samurai)</span> for behind-the-scenes updates and casting announcements.
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
                <span className="text-lg font-bold">f</span>
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
