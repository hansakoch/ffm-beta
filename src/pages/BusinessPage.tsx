import React, { useState } from 'react'
import { ArrowLeft, ExternalLink, Coins, Users, HeartHandshake as Handshake, Building, Globe, Crown, CheckCircle, ArrowRight, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'

const BusinessPage = () => {
  const navigate = useNavigate()
  const [activePartnership, setActivePartnership] = useState('fitness-brands')

  const partnershipTypes = [
    {
      id: 'fitness-brands',
      title: 'Fitness Brand Integration',
      icon: Building,
      description: 'Partner with supplement companies, equipment manufacturers, and fitness brands',
      benefits: [
        'Co-branded creator programs',
        'Exclusive product launches',
        'Higher commission rates (40-60%)',
        'Brand ambassador opportunities',
        'Product placement in content'
      ],
      examples: [
        'Supplement brand integrations',
        'Equipment manufacturer partnerships',
        'Fitness apparel collaborations',
        'Sports nutrition programs'
      ],
      revenue: 'Revenue varies by partnership scope'
    },
    {
      id: 'gym-chains',
      title: 'Gym & Studio Partnerships',
      icon: Users,
      description: 'White-label solutions for gym chains and fitness studios',
      benefits: [
        'Custom branded platforms',
        'Trainer monetization tools',
        'Member engagement features',
        'Revenue sharing models',
        'Franchise opportunities'
      ],
      examples: [
        'National gym chain partnerships',
        'Boutique studio integrations',
        'Regional fitness networks',
        'Martial arts school systems'
      ],
      revenue: 'Revenue varies by territory'
    },
    {
      id: 'media-companies',
      title: 'Media & Content Partnerships',
      icon: Globe,
      description: 'Collaborate with fitness media companies and content networks',
      benefits: [
        'Content distribution deals',
        'Cross-platform promotion',
        'Exclusive creator access',
        'Production partnerships',
        'Licensing opportunities'
      ],
      examples: [
        'Fitness media integrations',
        'Magazine partnership opportunities',
        'Combat sports content deals',
        'Health publication features'
      ],
      revenue: 'Revenue varies by partnership type'
    }
  ]

  const franchiseModel = {
    investment: 'Contact for details',
    territories: [
      { region: 'North America', status: 'Contact us', potential: 'Details on request' },
      { region: 'Europe', status: 'Contact us', potential: 'Details on request' },
      { region: 'Asia Pacific', status: 'Contact us', potential: 'Details on request' },
      { region: 'Latin America', status: 'Contact us', potential: 'Details on request' },
      { region: 'Middle East', status: 'Contact us', potential: 'Details on request' },
      { region: 'Africa', status: 'Contact us', potential: 'Details on request' }
    ],
    benefits: [
      'Exclusive regional rights',
      'Complete platform technology',
      'Marketing and branding support',
      'Training and onboarding',
      'Ongoing technical support',
      'Revenue sharing model'
    ]
  }

  const acquisitionStrategy = {
    timeline: 'Multi-year strategy',
    priorities: [
      'User base expansion',
      'Technology enhancement',
      'Geographic expansion',
      'Revenue diversification',
      'Market consolidation'
    ],
    criteria: [
      'Strategic fit with fitness/wellness focus',
      'Proven revenue model',
      'Strong user engagement',
      'Complementary technology',
      'Experienced team'
    ]
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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 border-b border-orange-500/30">
        <div
          className="w-full px-4 sm:px-6 lg:px-8 py-20 relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('/1000011998 copy.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%'
          }}
        >
          <div className="max-w-7xl mx-auto">
            <button
              className="flex items-center text-orange-400 hover:text-orange-300 mb-6 relative z-10"
              onClick={() => navigate('/')}
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 relative z-10 text-center">
              Business Opportunities with FansFollow
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed relative z-10">
              Partner with us, invest in FFM tokens, acquire regional franchise rights, or explore acquisition opportunities
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1: FFM TOKEN ECOSYSTEM */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-lg">
              <Coins className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold">FFM TOKEN ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              What Are FFM Tokens?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mb-6 shadow-2xl shadow-gray-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
                <Coins size={32} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">FFM Token</h3>
              <p className="text-gray-300 text-lg mb-4">
                The main payment system that powers FansFollow.me. It reduces fees and increases your profits.
              </p>
              <div className="bg-gray-700/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-white font-bold">Key Benefits:</div>
                <ul className="text-gray-300 mt-2 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Reduces fees from 20-25% to just 5-8%
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    You save £15-20 for every £100 you earn
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    Gives you ownership in the payment system
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border-2 border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-yellow-500/30 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-2xl shadow-yellow-500/40 hover:scale-110 hover:rotate-3 transition-all duration-300">
                <Star size={32} className="text-white drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">FFM-Reward Tokens</h3>
              <p className="text-gray-300 text-lg mb-4">
                Digital rewards you earn that convert to FFM ownership. Think of them as "creator points" that become real value.
              </p>
              <div className="bg-gray-700/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-white font-bold">How You Earn Them:</div>
                <p className="text-gray-300 mt-2">
                  Creators earn reward tokens through platform activity which convert to FFM tokens
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-500/40 hover:scale-110 transition-all duration-300 text-white font-bold text-2xl">
                  1
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4">Create Content → Earn FFM-Reward tokens</h4>
                <p className="text-gray-300 text-center">
                  Create content, engage with fans, and build your community to earn digital rewards
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border-2 border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-yellow-500/30 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-yellow-500/40 hover:scale-110 transition-all duration-300 text-white font-bold text-2xl">
                  2
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4">FFM-Rewards Convert → Become FFM tokens</h4>
                <p className="text-gray-300 text-center">
                  Convert your earned reward tokens to FFM tokens (100 FFMR = 10 FFM)
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-500/40 hover:scale-110 transition-all duration-300 text-white font-bold text-2xl">
                  3
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4">You're Now a Stakeholder</h4>
                <p className="text-gray-300 text-center">
                  As the platform grows, your tokens grow in value. You're now a part-owner!
                </p>
              </div>
            </div>
          </div>

          {/* Why Invest */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Why Should Creators Invest?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border-2 border-gray-700/50 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-green-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <span className="text-5xl">💰</span>
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4">Keep More Money</h4>
                <div className="space-y-4">
                  <p className="text-gray-300">Other platforms take 20-25% fees</p>
                  <p className="text-gray-300">FFM Token payment system cuts fees to 5-8%</p>
                  <p className="text-green-400 font-bold text-center text-lg">
                    You save £15-20 for every £100 you earn
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border-2 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-purple-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <span className="text-5xl">👑</span>
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4">Actually Own Something</h4>
                <div className="space-y-4">
                  <p className="text-gray-300">Other platforms: You're just a user</p>
                  <p className="text-gray-300">FansFollow.me: You become a part-owner of the payment system</p>
                  <p className="text-purple-400 font-bold text-center text-lg">
                    Your success = platform success = your tokens worth more
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-orange-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <span className="text-5xl">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-4">Get In Early</h4>
                <div className="space-y-4">
                  <p className="text-gray-300">Pre-sale price: £0.025 per FFM token</p>
                  <p className="text-gray-300">When we launch: £0.075 per token</p>
                  <p className="text-orange-400 font-bold text-center text-lg">
                    Early creators get 3x more tokens for same money
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Example */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Simple Investment Example</h3>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border-2 border-gray-700/50 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-6 border-2 border-green-500/30 shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105">
                  <h4 className="text-xl font-bold text-white text-center mb-4">Invest £500 now</h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">= 20,000 FFM tokens</div>
                    <div className="text-gray-300">Pre-sale price: £0.025/token</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-xl p-6 border-2 border-red-500/30 shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105">
                  <h4 className="text-xl font-bold text-white text-center mb-4">Same £500 after launch</h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">= 6,667 FFM tokens</div>
                    <div className="text-gray-300">Launch price: £0.075/token</div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="text-2xl font-bold text-white mb-2">Smart creators invest early</div>
                <div className="text-gray-300">Get 3x more tokens for the same investment</div>
              </div>
            </div>
          </div>

          {/* Token Presale */}
          <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl p-8 border-2 border-orange-500/40 max-w-4xl mx-auto shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Token Presale - August 5, 2025</h3>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 hover:scale-110 shadow-lg">
                  <div className="text-lg font-bold text-white">£0.025</div>
                  <div className="text-xs text-orange-300">Tier 1</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 hover:scale-110 shadow-lg">
                  <div className="text-lg font-bold text-white">£0.035</div>
                  <div className="text-xs text-purple-300">Tier 2</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 hover:scale-110 shadow-lg">
                  <div className="text-lg font-bold text-white">£0.045</div>
                  <div className="text-xs text-orange-300">Tier 3</div>
                </div>
                <div className="text-center bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 hover:scale-110 shadow-lg">
                  <div className="text-lg font-bold text-white">£0.055</div>
                  <div className="text-xs text-purple-300">Tier 4</div>
                </div>
              </div>

              <div className="text-green-400 text-lg font-medium mb-8">Listing at £0.075</div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ffmtoken.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60"
                >
                  <span>Join Token Presale</span>
                  <ExternalLink size={18} />
                </a>

                <a
                  href="https://ffmtoken.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white hover:bg-white/20 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:scale-110 hover:-translate-y-2"
                >
                  <span>Visit FFM Token Website</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PARTNERSHIP OPPORTUNITIES */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border-2 border-green-500/40 mb-6 shadow-lg">
              <Handshake className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-semibold">PARTNERSHIP OPPORTUNITIES</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Strategic Business Partnerships
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join forces with FansFollow to expand into new markets, integrate with existing platforms,
              and create new revenue opportunities for fitness and wellness businesses worldwide.
            </p>
          </div>

          {/* Partnership Types */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Partnership Programs</h3>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {partnershipTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActivePartnership(type.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activePartnership === type.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/40 scale-105'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:scale-105 shadow-lg'
                  }`}
                >
                  <type.icon size={20} />
                  <span>{type.title}</span>
                </button>
              ))}
            </div>

            {partnershipTypes.map((type) => (
              activePartnership === type.id && (
                <div key={type.id} className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">{type.title}</h4>
                    <p className="text-gray-300 mb-6">{type.description}</p>

                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-3">Key Benefits</h5>
                      <div className="space-y-2">
                        {type.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle size={16} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-500/10 border-2 border-green-500/40 rounded-xl p-4 shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                      <div className="text-green-400 font-bold text-lg">{type.revenue}</div>
                      <div className="text-green-300 text-sm">Revenue Potential</div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Partnership Examples</h5>
                    <div className="space-y-3">
                      {type.examples.map((example, index) => (
                        <div key={index} className="bg-gray-700/40 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                          <div className="text-white font-semibold">{example}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: GLOBAL FRANCHISE OPPORTUNITIES */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border-2 border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Global Franchise Opportunities</h3>
              <p className="text-gray-300">Bring FansFollow to your region with exclusive territorial rights</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Investment Details</h4>
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-xl">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{franchiseModel.investment}</div>
                  <div className="text-gray-300">Initial Investment Range</div>
                </div>

                <div className="space-y-3">
                  {franchiseModel.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Crown size={16} className="text-purple-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4">Available Territories</h4>
                <div className="space-y-3">
                  {franchiseModel.territories.map((territory, index) => (
                    <div key={index} className="bg-gray-700/40 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-purple-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-white font-semibold">{territory.region}</div>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold">
                          {territory.status}
                        </span>
                      </div>
                      <div className="text-gray-400 text-sm">{territory.potential}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60">
                Apply for Franchise Rights
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC ACQUISITIONS */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border-2 border-red-500/40 mb-6 shadow-lg">
              <Building className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-300 font-semibold">ACQUISITION STRATEGY</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Strategic Acquisitions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate growth through strategic acquisitions of complementary platforms,
              technology companies, and creator-focused businesses.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-2 drop-shadow-lg">{acquisitionStrategy.timeline}</div>
                <div className="text-gray-300">Strategic Timeline</div>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-purple-500/30">
                <div className="text-3xl font-bold text-purple-400 mb-2 drop-shadow-lg">Global Scale</div>
                <div className="text-gray-300">Expansion Goals</div>
              </div>
            </div>
          </div>

          {/* Acquisition Overview */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                We're seeking strategic acquisitions of complementary fitness, wellness, and creator platforms to accelerate growth.
                If you own a platform that aligns with our vision, contact us to explore opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50 text-center shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Partner?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join the FansFollow ecosystem and help us revolutionize the creator economy.
              Multiple partnership models available to fit your business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-green-500/40 hover:scale-110 hover:-translate-y-2">
                <span>Schedule Partnership Call</span>
                <ArrowRight size={20} />
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:scale-110 hover:-translate-y-2">
                Download Partnership Deck
              </button>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50 text-center shadow-2xl hover:shadow-red-500/20 transition-all duration-500 mt-8">
            <h3 className="text-3xl font-bold text-white mb-4">Interested in Being Acquired?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              If you own a fitness, wellness, or creator platform that aligns with our strategy,
              we'd love to explore acquisition opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-red-500/40 hover:scale-110 hover:-translate-y-2">
                <span>Submit Acquisition Proposal</span>
                <ArrowRight size={20} />
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:scale-110 hover:-translate-y-2">
                Download Acquisition Criteria
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BusinessPage
