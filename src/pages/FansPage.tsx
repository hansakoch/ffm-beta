import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import FanFocusedHero from '../components/FanFocusedHero'
import Footer from '../components/Footer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'

const FansPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title="For Fans - FansFollowMe"
        description="Discover and connect with your favourite fitness creators. Get closer access through chats, exclusive content, calls and video sessions."
        keywords="fitness creators, coaches, bodybuilders, exclusive content, fitness community"
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'For Fans', url: 'https://fansfollow.me/fans' }
          ])
        ]}
      />
      {/* Hero Section */}
      <FanFocusedHero />

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title and Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              How it works for fans
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join in minutes and start following your favourite fitness and combat sports creators.
            </p>
          </div>

          {/* Numbered Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-gray-900 z-10">
                1
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 pt-12 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Create your fan account</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sign up for free and set your interests so we can recommend creators.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-gray-900 z-10">
                2
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 pt-12 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Follow and support creators</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Subscribe, tip and unlock content from the creators you love.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-gray-900 z-10">
                3
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 pt-12 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Get closer access</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Join chats, calls and video sessions to build real connections.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
      <section className="py-16 relative overflow-hidden">
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
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Ready to discover your favourite creators?
          </h2>

          <p className="text-2xl text-gray-200 mb-12 drop-shadow-xl">
            Join thousands of fans already supporting creators on FansFollowMe
          </p>

          <button
            onClick={() => navigate('/signup')}
            className="relative inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-110 hover:-translate-y-2 group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            <span className="relative z-10">Sign Up as Fan Now</span>
            <ArrowRight size={20} className="relative z-10" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FansPage
