import React, { useEffect, useState } from 'react'
import { UserPlus, Upload, TrendingUp, ArrowRight, CheckCircle, Star, Zap, Crown } from 'lucide-react'
import { Link } from 'react-router-dom'

const EnhancedHowItWorksHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up & Create Profile',
      description: 'Join FansFollow.me and create your professional creator profile in under 5 minutes.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Upload,
      title: 'Create Outstanding Content',
      description: 'Share training videos, meal plans, offer paid consultations, and exclusive content.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Build Your Community',
      description: 'Build relationships through personalized calls and chats. Offer premium coaching at your own rates.',
      gradient: 'from-purple-600 to-orange-600'
    }
  ]

  return (
    <section className="relative pt-20 pb-16 overflow-hidden min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(15, 23, 42, 0.6)), url('https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1920')`
          }}
        ></div>
        
        {/* Animated gradient overlays */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDuration: '20s', animationDelay: '5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full border-2 border-purple-500/40 mb-6 shadow-2xl hover:scale-105 transition-all duration-300">
            <Star className="w-5 h-5 text-purple-400 mr-2 animate-pulse" />
            <span className="text-purple-300 font-bold">3 SIMPLE STEPS TO SUCCESS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            How It Works
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text drop-shadow-lg">
              Start Earning Today
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
            Get started in just three simple steps and begin earning from your fitness, nutrition, martial arts, 
            or combat sports expertise. Most creators start earning within 24-48 hours.
          </p>

          {/* Success Stats - Compact */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-5 border-2 border-gray-700/50 shadow-2xl hover:shadow-green-500/40 hover:border-green-500/60 transition-all duration-500 hover:scale-110 hover:-translate-y-3 group">
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-1 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">24-48h</div>
              <div className="text-white font-bold">Start Earning</div>
              <div className="text-gray-300 text-sm">Most creators see first earnings</div>
            </div>

            <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-5 border-2 border-gray-700/50 shadow-2xl hover:shadow-orange-500/40 hover:border-orange-500/60 transition-all duration-500 hover:scale-110 hover:-translate-y-3 group">
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text mb-1 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">80%+</div>
              <div className="text-white font-bold">You Keep</div>
              <div className="text-gray-300 text-sm">Industry-leading revenue share</div>
            </div>

            <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-5 border-2 border-gray-700/50 shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/60 transition-all duration-500 hover:scale-110 hover:-translate-y-3 group">
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text mb-1 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">21+</div>
              <div className="text-white font-bold">Revenue Streams</div>
              <div className="text-gray-300 text-sm">More ways to earn than any platform</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/signup"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '/signup'
              }}
              className="bg-gradient-to-r from-purple-500 to-orange-600 hover:from-purple-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 flex items-center justify-center space-x-2 group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400/20 to-orange-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <Crown size={20} className="relative z-10" />
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>

            <Link
              to="/creators"
              className="bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl hover:scale-110 hover:-translate-y-2 hover:shadow-white/30 group"
            >
              <Zap size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>See All Features</span>
            </Link>
          </div>
        </div>

        {/* Compact Steps Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white text-lg z-10 shadow-2xl shadow-orange-500/60 hover:scale-125 hover:rotate-12 transition-all duration-300">
                {index + 1}
              </div>

              <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border-2 border-gray-700/50 hover:border-orange-500/60 hover:shadow-orange-500/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 h-full group">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <step.icon size={32} className="text-white drop-shadow-lg" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {step.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-center text-sm">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <ArrowRight size={24} className="text-orange-400 animate-pulse" style={{animationDuration: '2s'}} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnhancedHowItWorksHero