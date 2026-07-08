import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import CreatorFocusedHero from '../components/CreatorFocusedHero'
import Footer from '../components/Footer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'

const CreatorsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title={pageSEO.creators.title}
        description={pageSEO.creators.description}
        keywords={pageSEO.creators.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'For Creators', url: 'https://fansfollow.me/creators' }
          ])
        ]}
      />
      {/* Hero Section */}
      <CreatorFocusedHero />

      {/* How It Works Section */}
      <section className="py-4 sm:py-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title and Subtitle */}
          <div className="text-center mb-3 sm:mb-6">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-3">
              How it works
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get started in three simple steps and turn your fitness, nutrition, martial arts or combat sports expertise into paid content and fan relationships.
            </p>
          </div>

          {/* Stat Badges */}
          <div className="grid md:grid-cols-3 gap-3 mb-3 sm:mb-5">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-3 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 transform hover:-translate-y-2 shadow-xl flex flex-col justify-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-16 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm whitespace-nowrap">24-48h</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-white mb-0.5 text-center">Start Earning</h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">Most creators see first earnings</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-3 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-2 shadow-xl flex flex-col justify-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-16 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm whitespace-nowrap">80%+</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-white mb-0.5 text-center">You Keep</h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">Industry-leading revenue share</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-3 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 transform hover:-translate-y-2 shadow-xl flex flex-col justify-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-16 h-14 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm whitespace-nowrap">21+</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-white mb-0.5 text-center">Revenue Streams</h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed px-2">More ways to earn than any platform</p>
            </div>
          </div>

          {/* Numbered Steps */}
          <div className="grid md:grid-cols-3 gap-5 mb-4 sm:mb-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-gray-900 z-10">
                1
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-5 pt-10 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl h-full">
                <h3 className="text-xl font-bold text-white mb-2">Sign Up & Create Your Profile</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Create your professional creator profile in under 5 minutes with links, photos and your offer types.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-gray-900 z-10">
                2
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-5 pt-10 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl h-full">
                <h3 className="text-xl font-bold text-white mb-2">Launch Your Offers</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Add paid chats, video sessions, programs, meal plans or products using simple templates.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-gray-900 z-10">
                3
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-5 pt-10 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl h-full">
                <h3 className="text-xl font-bold text-white mb-2">Grow Your Community</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Share your link, use QR codes at events and convert fans into long-term clients on one platform.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center -mb-20 sm:mb-0">
            <button
              onClick={() => navigate('/signup')}
              className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Now
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </section>

{/* Final CTA */}
      <section className="py-0 sm:py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('/background-1718534992.jpeg')`
          }}
        ></div>

        {/* Animated gradient overlays */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '20s', animationDelay: '5s'}}></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-2 sm:mb-6 leading-tight drop-shadow-2xl">
            Ready to start earning?
          </h2>

          <p className="text-2xl text-gray-200 mb-4 sm:mb-12 drop-shadow-xl">
            Join thousands of creators already making money on FansFollow
          </p>

          <button
            onClick={() => navigate('/signup')}
            className="relative inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-110 hover:-translate-y-2 group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            <span className="relative z-10">Create Your Profile Now</span>
            <ArrowRight size={20} className="relative z-10" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CreatorsPage