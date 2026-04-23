import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import { organizationSchema, createBreadcrumbSchema } from '../config/seo'

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
      <section className="relative pt-24 pb-16 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Discover and connect with your favourite fitness creators
            </h1>

            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Find fighters, coaches, bodybuilders and fitness influencers in one place and get closer access through chats, exclusive content, calls and video sessions.
            </p>

            <button
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span>Sign Up as Fan – It's Free</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FansPage
