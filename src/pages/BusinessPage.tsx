import React from 'react'
import { ArrowLeft, Briefcase, Users, TrendingUp, ExternalLink, Phone, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'

const BusinessPage = () => {
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
        title={pageSEO.business.title}
        description={pageSEO.business.description}
        keywords={pageSEO.business.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'Business', url: 'https://fansfollow.me/business' }
          ])
        ]}
      />

      {/* Header Navigation */}
      <div className="bg-gray-900/50 border-b border-gray-700/50 sticky top-0 z-40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            className="flex items-center text-orange-400 hover:text-orange-300 transition-colors"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div
        className="relative min-h-[80vh] flex items-center justify-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(15, 23, 42, 0.6)), url('https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Business Opportunities with FansFollow
          </h1>

          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with us to grow the FansFollow ecosystem across fitness, combat sports and film.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact-form')}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-orange-500/40 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Schedule Partnership Call
            </button>
            <a
              href="#"
              className="bg-transparent border-2 border-orange-400/50 hover:border-orange-400 text-orange-300 hover:text-orange-200 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Download Partnership Deck
            </a>
          </div>
        </div>
      </div>

      {/* THREE-COLUMN SUMMARY CARDS */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800/60 backdrop-blur rounded-2xl border-2 border-gray-700/50 p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-lg p-3 w-fit mb-4">
                <Users size={28} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Strategic Partnerships</h3>
              <p className="text-gray-300 text-base mb-8 leading-relaxed">
                For fitness brands, gyms, studios and media companies that want to reach our audience and build new revenue together.
              </p>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Discuss a partnership
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800/60 backdrop-blur rounded-2xl border-2 border-gray-700/50 p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-lg p-3 w-fit mb-4">
                <TrendingUp size={28} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Regional Franchise Rights</h3>
              <p className="text-gray-300 text-base mb-8 leading-relaxed">
                For experienced operators interested in exclusive regional rights to grow FansFollow in their market.
              </p>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Enquire about franchise rights
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800/60 backdrop-blur rounded-2xl border-2 border-gray-700/50 p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-lg p-3 w-fit mb-4">
                <Briefcase size={28} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Platform Acquisition / Investment</h3>
              <p className="text-gray-300 text-base mb-8 leading-relaxed">
                For owners of fitness, wellness or creator platforms, and for investors exploring strategic deals with FansFollow.
              </p>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Talk to our team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FFM TOKEN SECTION - COMPRESSED */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/60 backdrop-blur rounded-2xl border-2 border-gray-700/50 p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">FFM Token – Our Payment Infrastructure</h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              FFM Token is the payment system that powers FansFollow. It is designed to reduce transaction fees and reward active creators on the platform.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Lower payment processing fees for creators compared with typical platforms</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Reward mechanisms for creators based on activity and engagement</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Built to support long-term creator ownership in the FansFollow ecosystem</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://ffmtoken.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 transition-colors"
              >
                Visit FFM Token Website
                <ExternalLink size={16} />
              </a>
              <a
                href="#"
                className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 transition-colors"
              >
                View token documentation
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="py-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-y border-gray-700/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Common Questions</h2>

          <div className="space-y-6">
            <div className="bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-2">What types of partnerships does FansFollow offer?</h3>
              <p className="text-gray-400 leading-relaxed">We work with fitness brands, gyms, studios, media companies, and regional operators. Each partnership is customized to fit your business goals and market position.</p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-2">How do franchise rights work?</h3>
              <p className="text-gray-400 leading-relaxed">Franchise operators gain exclusive regional rights to grow FansFollow in their territory, with full platform technology, marketing support, training, and ongoing technical assistance.</p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-2">Are you open to acquisitions or investments?</h3>
              <p className="text-gray-400 leading-relaxed">Yes. We explore strategic acquisitions of complementary fitness, wellness and creator platforms, and welcome inquiries from investors interested in FansFollow's growth.</p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur rounded-xl border border-gray-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-2">What is the FFM Token?</h3>
              <p className="text-gray-400 leading-relaxed">FFM Token is our payment infrastructure designed to reduce transaction fees and reward creators. We can discuss how it integrates with partnership models during your call.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div id="contact-form" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl border-2 border-gray-700/50 p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Ready to explore a business opportunity with FansFollow?</h2>
            <p className="text-gray-400 text-center mb-8">Tell us whether you're interested in partnerships, franchise rights or strategic deals, and our team will get in touch.</p>

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
                <label className="block text-sm font-semibold text-gray-300 mb-2">Company / Organization</label>
                <input
                  type="text"
                  placeholder="Your company name"
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
                <label className="block text-sm font-semibold text-gray-300 mb-2">Type of Opportunity</label>
                <select className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="">Select an option</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="franchise">Regional Franchise Rights</option>
                  <option value="acquisition">Acquisition / Investment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your business and what you're interested in..."
                  rows={4}
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/40"
              >
                Schedule Partnership Call
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BusinessPage
