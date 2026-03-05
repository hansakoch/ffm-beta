import React from 'react'
import { ArrowLeft, Star, Camera, Video, Clipboard, CheckCircle, Film, Bell } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'
import Footer from '../components/Footer'

const CastingPage = () => {
  const navigate = useNavigate()

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
      
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 border-b border-orange-500/30">
        <div 
          className="w-full px-4 sm:px-6 lg:px-8 py-16 relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/" 
              className="flex items-center text-orange-400 hover:text-orange-300 mb-4 relative z-10"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
              }}
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6">
                <Star className="w-5 h-5 text-orange-300 mr-2" />
                <span className="text-orange-300 font-semibold">FFM STUDIOS PRESENTS</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Martial Arts Movie Casting
              </h1>
              
              <p className="text-xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed">
                Our founder's experience in films like "The Last Kumite," "Bloodstorm," "Elite Target," and "Order of the Dragon" helps us create opportunities for FFM creators who might not otherwise get cast in martial arts films.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* About FFM Studios */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 pointer-events-none rounded-3xl"></div>
          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Film className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold">ABOUT FFM STUDIOS</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">FFM Studios - Creating Opportunities</h2>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl border-2 border-gray-700/50 p-8 relative z-10 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-[1.01]">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              FFM founder <span className="text-orange-400 font-semibold">David Kurzhal (Viking Samurai)</span> has starred in <span className="text-purple-400 font-semibold">The Last Kumite</span>, <span className="text-purple-400 font-semibold">Bloodstorm</span>, <span className="text-purple-400 font-semibold">Elite Target</span>, and <span className="text-purple-400 font-semibold">Order of the Dragon</span> with Steven Seagal. Now co-directing films, he's creating casting opportunities for talented creators and martial artists who wouldn't normally get these chances in film. Join FFM, build your audience, and get discovered for film roles.
            </p>

            <div className="bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-orange-500/20 rounded-xl border-2 border-orange-500/40 p-8 mt-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02]">
              <p className="text-center text-2xl md:text-3xl font-bold leading-relaxed bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Our mission is to discover and cast talented creators—martial artists, fighters, actors, and performers—in authentic action films.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5 pointer-events-none rounded-3xl"></div>
          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full border border-purple-500/30 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Bell className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-semibold">CASTING CALLS</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Casting Calls Opening Soon</h2>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl border-2 border-gray-700/50 p-8 relative z-10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.01]">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              We're currently in pre-production on multiple martial arts film projects. Casting calls will be announced here when available.
            </p>

            <div className="text-center mb-8">
              <p className="text-white text-xl font-semibold mb-6">Want to be notified when casting opens?</p>
              <button
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span className="relative z-10 flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Join Casting Waitlist
                </span>
              </button>
            </div>

            <div className="text-center pt-6 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm">
                Follow <span className="text-orange-400 font-semibold">David Kurzhal (Viking Samurai)</span> on social media for behind-the-scenes updates and casting announcements.
              </p>
            </div>
          </div>
        </div>

        {/* What We're Looking For Section */}
        <div className="mt-20 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-orange-500/10 rounded-3xl p-8 border-2 border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-[1.01] backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-3xl pointer-events-none"></div>
          <div className="text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">What We're Looking For</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
              FFM Studios is looking for talented martial artists, actors, and stunt performers for upcoming martial arts films.
              When casting calls open, we'll be seeking performers who bring authenticity and professionalism to action cinema.
            </p>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border-2 border-gray-700/50 max-w-2xl mx-auto shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">Ideal Candidate Qualities</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Authentic martial arts skills with on-screen potential</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Acting ability that can convey emotion and character</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Physical fitness and ability to perform or learn choreography</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Professionalism and ability to work in a fast-paced film environment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-green-400 mr-4 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">Dedication to bringing authentic action to the big screen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CastingPage