import React from 'react'
import { ArrowLeft, Briefcase, Users, TrendingUp, ExternalLink, Phone, FileText, CheckCircle2, Zap } from 'lucide-react'
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
            className="flex items-center text-orange-400 hover:text-orange-300 transition-colors font-semibold"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div
        className="relative min-h-[90vh] flex items-center justify-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(15, 23, 42, 0.6)), url('https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 animate-pulse">
            <Briefcase className="w-5 h-5 text-orange-300 mr-2" />
            <span className="text-orange-300 font-semibold text-sm tracking-wide">BUSINESS PARTNERSHIPS</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Grow with the fitness creator economy
          </h1>

          <p className="text-lg lg:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with FansFollow to reach high-intent audiences across fitness, combat sports and film through a premium creator platform built for long-term value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact-form')}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-orange-500/40 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone size={20} />
              Schedule Partnership Call
            </button>
            <button
              onClick={() => scrollToSection('opportunities')}
              className="bg-transparent border-2 border-orange-400/50 hover:border-orange-400 text-orange-300 hover:text-orange-200 font-bold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <FileText size={20} />
              Explore Models
            </button>
          </div>
        </div>
      </div>

      {/* WHY PARTNER SECTION */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why partner with FansFollow</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              FansFollow connects fitness, combat-sports and film talent with paying fans through a safe, professional platform built for long-term careers. We combine filmmaking, martial arts and digital platform expertise to create sustainable opportunities for creators, brands and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/30">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Creator-Centric</h3>
              <p className="text-gray-300 leading-relaxed">Creators keep more of what they earn and participate in the value they create</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-purple-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/30">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Long-Term Value</h3>
              <p className="text-gray-300 leading-relaxed">Built for sustainable careers, not quick hits. Real opportunities in film and beyond</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/30">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Brand Safety</h3>
              <p className="text-gray-300 leading-relaxed">Professional vetting and moderation ensure brand-safe partnerships</p>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERSHIP MODELS SECTION */}
      <div id="opportunities" className="pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Partnership models</h2>
            <p className="text-gray-300 text-lg">Choose the opportunity that aligns with your business goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Strategic Partnerships */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-orange-500/15 to-orange-500/5 backdrop-blur rounded-2xl border-2 border-orange-500/30 p-8 h-full overflow-hidden transition-all duration-300 hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500/30 to-orange-500/10 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users size={32} className="text-orange-400" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">Strategic Partnerships</h3>

                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    Reach new audiences and build revenue with fitness brands, gyms, studios and media companies.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">Audience expansion</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">Revenue sharing models</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">Co-marketing support</span>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollToSection('contact-form')}
                    className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
                  >
                    Discuss Partnership
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - Franchise Rights */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-purple-500/15 to-purple-500/5 backdrop-blur rounded-2xl border-2 border-purple-500/30 p-8 h-full overflow-hidden transition-all duration-300 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp size={32} className="text-purple-400" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">Regional Franchise</h3>

                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    Gain exclusive regional rights to grow FansFollow in your territory with full platform support.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">Exclusive territory rights</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">Full platform technology</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">Training & ongoing support</span>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollToSection('contact-form')}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
                  >
                    Enquire about Franchise
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - Investment / Acquisition */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-blue-500/15 to-blue-500/5 backdrop-blur rounded-2xl border-2 border-blue-500/30 p-8 h-full overflow-hidden transition-all duration-300 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={32} className="text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">Investment & M&A</h3>

                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    Strategic acquisitions and partnerships for investors and platform owners.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">Platform acquisitions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">Strategic investments</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">Equity opportunities</span>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollToSection('contact-form')}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
                  >
                    Talk to Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT INFRASTRUCTURE SECTION */}
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800/40 to-gray-900/60">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl border-2 border-orange-500/30 p-12 overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6">
                <span className="text-orange-300 font-semibold text-sm">PAYMENT INFRASTRUCTURE</span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">FFM Token – Creator Economics Reimagined</h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                FFM Token is the payment infrastructure powering FansFollow, designed to reduce fees and reward creators for their contributions to the ecosystem.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-200 font-semibold text-sm mb-1">Lower Fees</p>
                    <p className="text-gray-400 text-xs">Reduced processing costs vs traditional platforms</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-200 font-semibold text-sm mb-1">Rewards System</p>
                    <p className="text-gray-400 text-xs">Earn based on activity and engagement</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-200 font-semibold text-sm mb-1">Creator Ownership</p>
                    <p className="text-gray-400 text-xs">Long-term stake in the ecosystem</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-700/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-200 font-semibold text-sm mb-1">Transparent</p>
                    <p className="text-gray-400 text-xs">Full documentation and real-time tracking</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-700/50">
                <a
                  href="https://ffmtoken.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 transition-colors px-4 py-2 rounded-lg hover:bg-orange-500/10 duration-300"
                >
                  Visit FFM Token
                  <ExternalLink size={16} />
                </a>
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 transition-colors px-4 py-2 rounded-lg hover:bg-orange-500/10 duration-300"
                >
                  View Documentation
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Common questions</h2>
            <p className="text-gray-300 text-lg">Everything you need to know about partnering with FansFollow</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What types of partnerships does FansFollow offer?",
                a: "We work with fitness brands, gyms, studios, media companies, and regional operators. Each partnership is customized to fit your business goals and market position."
              },
              {
                q: "How do franchise rights work?",
                a: "Franchise operators gain exclusive regional rights to grow FansFollow in their territory, with full platform technology, marketing support, training, and ongoing technical assistance."
              },
              {
                q: "Are you open to acquisitions or investments?",
                a: "Yes. We explore strategic acquisitions of complementary fitness, wellness and creator platforms, and welcome inquiries from investors interested in FansFollow's growth."
              },
              {
                q: "What is the FFM Token?",
                a: "FFM Token is our payment infrastructure designed to reduce transaction fees and reward creators. We can discuss how it integrates with partnership models during your call."
              }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur rounded-xl border border-gray-700/50 p-6 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{item.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div id="contact-form" className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800/40 to-gray-900/60">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl border-2 border-gray-700/50 p-12 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-2 text-center">Ready to partner?</h2>
              <p className="text-gray-400 text-center mb-8">Tell us about your business and let's explore how we can grow together.</p>

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
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="Your company name"
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
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Type of Opportunity</label>
                  <select className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
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
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/40"
                >
                  Schedule Partnership Call
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BusinessPage
