import React, { useState } from 'react'
import { Star, Users, MessageCircle, Phone, Video, Clapperboard, Camera, Film, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import CelebrityHero from '../components/CelebrityHero'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'
import Footer from '../components/Footer'

const CelebrityPage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('released')

  // Complete filmography for David Kurzhal (Viking Samurai)
  const releasedMovies = [
    {
      id: 'last-kumite',
      title: 'The Last Kumite',
      year: '2024',
      role: 'Marcus Gantz',
      image: '/lastkumite.jpeg'
    },
    {
      id: 'bloodstorm',
      title: 'Bloodstorm',
      year: '2025',
      role: 'Bennet (Lead Role)',
      image: '/bloodstorm.jpeg'
    },
    {
      id: 'elite-target',
      title: 'Elite Target',
      year: '2025',
      role: 'Alpha Commando',
      image: '/elitetarget.png'
    }
  ]

  const inProductionMovies = [
    {
      id: 'order-dragon',
      title: 'Order of the Dragon',
      year: 'In Post-Production',
      role: 'Jean Pierre (Co-starring Steven Seagal)',
      image: '/1000011998 copy.jpg'
    },
    {
      id: 'hard-redemption',
      title: 'Hard Redemption',
      year: 'In Post-Production',
      role: 'Solomon',
      image: '/1000011998 copy copy.jpg'
    },
    {
      id: 'warrior-island',
      title: 'Warrior Island',
      year: 'In Post-Production',
      role: 'Viking Samurai',
      image: '/1000011998 copy copy copy.jpg'
    }
  ]

  const upcomingMovies = [
    {
      id: 'guardian-peacemaker',
      title: 'Guardian Peacemaker',
      year: 'In Pre-Production',
      role: 'General Garroz',
      image: '/WhatsApp Image 2025-06-27 at 09.13.34_0853d715.jpg'
    },
    {
      id: 'warrior-island-2',
      title: 'Warrior Island: Darker Days',
      year: 'In Pre-Production',
      role: 'Viking Samurai',
      image: '/WhatsApp Image 2025-06-27 at 09.13.34_0853d715 copy.jpg'
    },
    {
      id: 'magnetic-fighters',
      title: 'The Magnetic Fighters',
      year: 'Upcoming (2026)',
      role: 'Samurai Hayate',
      image: '/1000011998.jpg'
    }
  ]

  const movies = activeTab === 'released' ? releasedMovies : activeTab === 'production' ? inProductionMovies : upcomingMovies

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title={pageSEO.celebrities.title}
        description={pageSEO.celebrities.description}
        keywords={pageSEO.celebrities.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'Celebrity Creators', url: 'https://fansfollow.me/celebrities' }
          ])
        ]}
      />
      
      {/* Hero Section */}
      <CelebrityHero />

      {/* FFM Founder Accolades Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 pointer-events-none"></div>
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Star className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-semibold">FFM FOUNDER'S ACCOLADES</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            David Kurzhal - The Viking Samurai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <Film className="w-10 h-10 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Lead Actor</h3>
              <p className="text-gray-300 text-sm">8+ Feature Films</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <Camera className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Martial Arts Expert</h3>
              <p className="text-gray-300 text-sm">Viking Samurai</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <Clapperboard className="w-10 h-10 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Stunt Performer</h3>
              <p className="text-gray-300 text-sm">Action Choreographer</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <Video className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">YouTuber</h3>
              <p className="text-gray-300 text-sm">Interviewing Action Legends</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <Users className="w-10 h-10 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Celebrity Boxer</h3>
              <p className="text-gray-300 text-sm">Fought Sugar Shane Mosley</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <Heart className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Interviewed Legends</h3>
              <p className="text-gray-300 text-sm">Scott Adkins, Don Wilson, Michael Jai White</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Films Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 pointer-events-none"></div>
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Film className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 font-semibold">NOW SHOWING: FFM FOUNDER'S FEATURED FILMS</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            From Martial Arts Champion to Hollywood Action Star
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            David Kurzhal's complete filmography - from released blockbusters to upcoming projects.
            Now we're creating opportunities for FFM creators to star in martial arts films.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('released')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'released'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              Released
            </button>
            <button
              onClick={() => setActiveTab('production')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'production'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              In Post-Production
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              In Pre-Production / Upcoming
            </button>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Movie Image */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={movie.image}
                  alt={`${movie.title} - ${movie.role} - Action Film featuring David Kurzhal (${movie.year})`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  width="400"
                  height="256"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Movie Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{movie.title}</h3>
                <p className="text-orange-400 font-semibold mb-3">{movie.year}</p>
                <p className="text-gray-300 text-lg">Role: <span className="text-purple-300 font-semibold">{movie.role}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Celebrity Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 pointer-events-none"></div>
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/10 shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 transition-all duration-500 hover:scale-[1.01] relative z-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">Why Celebrities Love FansFollow</h3>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-orange-500/30 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <Users size={32} className="text-white drop-shadow-lg" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Real Connections</h4>
                <p className="text-gray-300">Build genuine friendships with fans who become part of your inner circle</p>
              </div>

              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-purple-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-orange-500/30 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <Star size={32} className="text-white drop-shadow-lg" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Premium Benefits</h4>
                <p className="text-gray-300">Keep 80%+ of earnings with VIP rates available. Earn FFM Reward tokens and negotiate custom terms.</p>
              </div>

              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-orange-500/30 hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <MessageCircle size={32} className="text-white drop-shadow-lg" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Your Schedule</h4>
                <p className="text-gray-300">Set your own rates, availability, and interaction preferences</p>
              </div>
            </div>

            <button
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span className="relative z-10">Apply for Celebrity Status</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CelebrityPage