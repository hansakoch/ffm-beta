import React from 'react'
import { ArrowLeft, Briefcase, Users, TrendingUp, ExternalLink, Phone, FileText, CheckCircle2 } from 'lucide-react'
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
    <div className="min-h-screen bg-white">
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
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            className="flex items-center text-orange-600 hover:text-orange-700 transition-colors font-semibold"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div
        className="relative min-h-[85vh] flex items-center justify-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full border border-orange-200 mb-8">
            <span className="text-orange-700 font-semibold text-sm tracking-wide">BUSINESS PARTNERSHIPS</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Grow with the fitness creator economy
          </h1>

          <p className="text-lg lg:text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with FansFollow to reach high-intent audiences across fitness, combat sports and film through a premium creator platform built for long-term value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact-form')}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone size={20} />
              Schedule Partnership Call
            </button>
            <button
              onClick={() => scrollToSection('opportunities')}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <FileText size={20} />
              Explore Models
            </button>
          </div>
        </div>
      </div>

      {/* WHY PARTNER SECTION */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Why Partner with FansFollow</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              FansFollow connects fitness, combat-sports and film talent with paying fans through a safe, professional platform built for long-term careers. We combine filmmaking, martial arts and digital platform expertise to create sustainable opportunities for creators, brands and partners who value brand safety, reputation and real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-lg mb-4">
                <Users className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Creator-Centric</h3>
              <p className="text-gray-600">Creators keep more of what they earn and participate in the value they create</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-lg mb-4">
                <TrendingUp className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Value</h3>
              <p className="text-gray-600">Built for sustainable careers, not quick hits. Real opportunities in film and beyond</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-lg mb-4">
                <Briefcase className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Safety</h3>
              <p className="text-gray-600">Professional vetting and moderation ensure brand-safe partnerships</p>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERSHIP MODELS SECTION */}
      <div id="opportunities" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Partnership Models</h2>
            <p className="text-lg text-gray-600">Choose the opportunity that aligns with your business goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Strategic Partnerships */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-6">
                <Users className="text-orange-600" size={24} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3">Strategic Partnerships</h3>
              <p className="text-gray-600 mb-6">
                Reach new audiences and build revenue with fitness brands, gyms, studios and media companies.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Audience expansion</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Revenue sharing models</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Co-marketing support</span>
                </li>
              </ul>

              <button
                onClick={() => scrollToSection('contact-form')}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Discuss Partnership
              </button>
            </div>

            {/* Card 2 - Franchise Rights */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <TrendingUp className="text-blue-600" size={24} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3">Regional Franchise</h3>
              <p className="text-gray-600 mb-6">
                Gain exclusive regional rights to grow FansFollow in your territory with full platform support.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Exclusive territory rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Full platform technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Training & ongoing support</span>
                </li>
              </ul>

              <button
                onClick={() => scrollToSection('contact-form')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Enquire about Franchise
              </button>
            </div>

            {/* Card 3 - Investment / Acquisition */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-6">
                <Briefcase className="text-purple-600" size={24} />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3">Investment & M&A</h3>
              <p className="text-gray-600 mb-6">
                Strategic acquisitions and partnerships for investors and platform owners.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Platform acquisitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Strategic investments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Equity opportunities</span>
                </li>
              </ul>

              <button
                onClick={() => scrollToSection('contact-form')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT INFRASTRUCTURE SECTION */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Payment Infrastructure</h2>
            <p className="text-lg text-gray-600">FFM Token powers sustainable creator economics</p>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12">
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="flex gap-4">
                <div className="w-1 bg-orange-600 flex-shrink-0 rounded-full"></div>
                <div>
                  <p className="text-gray-900 font-bold mb-1">Lower Fees</p>
                  <p className="text-gray-600 text-sm">Reduced processing costs vs traditional platforms</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-orange-600 flex-shrink-0 rounded-full"></div>
                <div>
                  <p className="text-gray-900 font-bold mb-1">Rewards System</p>
                  <p className="text-gray-600 text-sm">Earn based on activity and engagement</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-orange-600 flex-shrink-0 rounded-full"></div>
                <div>
                  <p className="text-gray-900 font-bold mb-1">Creator Ownership</p>
                  <p className="text-gray-600 text-sm">Long-term stake in the ecosystem</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-orange-600 flex-shrink-0 rounded-full"></div>
                <div>
                  <p className="text-gray-900 font-bold mb-1">Transparent</p>
                  <p className="text-gray-600 text-sm">Full documentation and real-time tracking</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-300">
              <a
                href="https://ffmtoken.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-2 transition-colors"
              >
                Visit FFM Token
                <ExternalLink size={16} />
              </a>
              <a
                href="#"
                className="text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-2 transition-colors"
              >
                View Documentation
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Common Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about partnering with FansFollow</p>
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
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div id="contact-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Ready to Partner?</h2>
            <p className="text-gray-600 text-center mb-10">Tell us about your business and let's explore how we can grow together.</p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Company / Organization</label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Type of Opportunity</label>
                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all">
                  <option value="">Select an option</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="franchise">Regional Franchise Rights</option>
                  <option value="acquisition">Acquisition / Investment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your business and what you're interested in..."
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
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
