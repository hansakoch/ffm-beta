import React from 'react'
import { ArrowRight, MessageCircle, Video, Gift, Dumbbell, Apple, ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const FansPage = () => {
  const navigate = useNavigate()

  const fanBenefits = [
    {
      title: 'Private Chats',
      description: 'Message creators directly and get personal replies.',
      icon: MessageCircle
    },
    {
      title: 'Exclusive Videos & Streams',
      description: 'Unlock members‑only videos and live events.',
      icon: Video
    },
    {
      title: 'Tips & Support',
      description: 'Tip your favourite athletes and show extra support.',
      icon: Gift
    },
    {
      title: 'Training Programs',
      description: 'Access structured plans from trusted coaches.',
      icon: Dumbbell
    },
    {
      title: 'Meal Plans',
      description: 'Get nutrition plans tailored by fitness experts.',
      icon: Apple
    },
    {
      title: 'Merch & Products',
      description: 'Buy branded gear, supplements and digital downloads.',
      icon: ShoppingBag
    }
  ]

  const whyFansLove = [
    {
      title: 'Closer access',
      description: 'Go beyond social media with real conversations and interactions.'
    },
    {
      title: 'All your favourites in one place',
      description: 'Follow multiple fitness and combat sports creators on a single platform.'
    },
    {
      title: 'Safe & secure',
      description: 'Protected payments and private communication with creators.'
    },
    {
      title: 'Global access',
      description: 'Support creators from any country with card or crypto payments.'
    },
    {
      title: 'Easy to use',
      description: 'Simple mobile-friendly experience for chats, content and calls.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden min-h-screen flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.3) 100%), url('/powerful-back-workout-intense-fitness-training-gym-free-photo.jpg')`
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl pt-20">
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Discover and connect with your favourite fitness creators
            </h1>

            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
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

      {/* Two Column Section: Ways to Connect + Why Fans Love */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Ways to Connect */}
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">For Fans</p>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-8">Ways to connect with creators</h2>

              <div className="grid md:grid-cols-3 gap-4">
                {fanBenefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-orange-400 mb-3" />
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column - Why Fans Love */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/40">
                <h2 className="text-2xl font-bold text-white mb-8">Why fans love FansFollowMe</h2>

                <ul className="space-y-5">
                  {whyFansLove.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-orange-400 font-bold text-lg mt-1 flex-shrink-0">•</span>
                      <div>
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                        <p className="text-gray-300 text-xs leading-relaxed mt-1">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 pb-2 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
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
                  Sign up for free and choose your interests so we can recommend creators.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl border-4 border-gray-900 z-10">
                2
              </div>
              <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 pt-12 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Follow and unlock content</h3>
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
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-8 relative overflow-hidden border-t-2 border-t-transparent bg-clip-padding" style={{backgroundImage: `linear-gradient(rgba(10, 15, 30, 1), rgba(10, 15, 30, 1)), linear-gradient(135deg, rgba(249, 115, 22, 0.3) 0%, rgba(147, 51, 234, 0.3) 100%)`, backgroundClip: `padding-box, border-box`, backgroundOrigin: `padding-box, border-box`}}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('/powerful-back-workout-intense-fitness-training-gym-free-photo.jpg')`
          }}
        ></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDuration: '20s', animationDelay: '5s'}}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight drop-shadow-2xl">
            Ready to support your favourite creators?
          </h2>

          <p className="text-base md:text-lg text-gray-200 mb-6 drop-shadow-xl max-w-2xl">
            Create your free fan account today and start connecting with fighters, coaches and fitness creators worldwide.
          </p>

          <button
            onClick={() => navigate('/signup')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            <span className="relative z-10">Sign Up as Fan – It's Free</span>
            <ArrowRight size={20} className="relative z-10" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FansPage
