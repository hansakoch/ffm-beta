import React, { useState } from 'react'
import { ArrowLeft, Users, DollarSign, Share, Copy, ExternalLink, TrendingUp, Target, Award, Percent, Link as LinkIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'
import Footer from '../components/Footer'

const ReferralsPage = () => {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://fansfollow.me/ref/your-username'

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const promotionTips = [
    {
      title: 'Social Media Promotion',
      description: 'Share your referral link on all your social media platforms',
      tips: ['Instagram stories with swipe-up links', 'Twitter posts with call-to-action', 'YouTube video descriptions', 'Facebook posts in relevant groups']
    },
    {
      title: 'Content Integration',
      description: 'Naturally integrate referrals into your content',
      tips: ['Mention FansFollow in workout videos', 'Show earnings in success stories', 'Create "How I monetize" content', 'Behind-the-scenes platform tours']
    },
    {
      title: 'Email & Direct Outreach',
      description: 'Personal outreach often converts better',
      tips: ['Email to fellow creators you know', 'Direct messages to potential creators', 'Group chats and communities', 'Fitness/martial arts forums']
    },
    {
      title: 'Incentive Programs',
      description: 'Offer additional value to your referrals',
      tips: ['Free coaching session for signups', 'Exclusive content for referrals', 'Mentorship for new creators', 'Collaboration opportunities']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title={pageSEO.referrals.title}
        description={pageSEO.referrals.description}
        keywords={pageSEO.referrals.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'Referrals', url: 'https://fansfollow.me/referrals' }
          ])
        ]}
      />
      
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/creator-dashboard')}
            className="flex items-center text-orange-400 hover:text-orange-300 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Dashboard
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-6">
            <Percent className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-300 font-semibold">5% REFERRAL PROGRAM</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Earn 5% Commission Forever
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Referrals are a powerful way to earn extra income on FansFollow.me. By inviting your friends, family, 
            and followers to join our platform, you can earn a 5% commission on their transactions forever.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Get Your Link</h3>
              <p className="text-gray-300">Log in to your account and get your unique referral link from the referral panel.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Share & Promote</h3>
              <p className="text-gray-300">Share your link via social media, email, or any method you choose to reach potential creators.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Earn Forever</h3>
              <p className="text-gray-300">Earn 5% commission on all their transactions as long as they remain active on the platform.</p>
            </div>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your Referral Link</h2>
          
          <div className="bg-gray-700/30 rounded-xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <LinkIcon size={24} className="text-blue-400" />
              <span className="text-white font-semibold">Share this link to start earning:</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-gray-600/50 rounded-lg px-4 py-3 font-mono text-gray-300 text-sm">
                {referralLink}
              </div>
              <button
                onClick={copyReferralLink}
                className={`px-4 py-3 rounded-lg font-bold transition-all duration-300 flex items-center space-x-2 ${
                  copied 
                    ? 'bg-green-600 text-white' 
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {copied ? (
                  <>
                    <span>✓</span>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Earning Potential */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Unlimited Earning Potential</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5 Referrals</div>
              <div className="text-white font-semibold mb-1">Earning £50/month each</div>
              <div className="text-green-300">= £12.50/month for you</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">20 Referrals</div>
              <div className="text-white font-semibold mb-1">Earning £100/month each</div>
              <div className="text-blue-300">= £100/month for you</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50 Referrals</div>
              <div className="text-white font-semibold mb-1">Earning £200/month each</div>
              <div className="text-purple-300">= £500/month for you</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="bg-white/10 rounded-xl p-4 max-w-md mx-auto">
              <p className="text-yellow-300 font-bold">No limits on referrals or earnings!</p>
              <p className="text-gray-300 text-sm">The more people you refer, the more money you make.</p>
            </div>
          </div>
        </div>

        {/* Promotion Tips */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Maximize Your Earnings</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {promotionTips.map((tip, index) => (
              <div key={index} className="bg-gray-700/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-300 mb-4">{tip.description}</p>
                <div className="space-y-2">
                  {tip.tips.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-2xl p-8 border border-orange-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Earning?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              At FansFollow.me, we believe in rewarding our creators for their hard work and dedication. 
              That's why we offer a generous referral program to help you earn even more money and build a stronger community.
            </p>
            <button 
              onClick={() => navigate('/creator-dashboard')}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Your Referral Link
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ReferralsPage