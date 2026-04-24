import React, { useState } from 'react'
import { ArrowLeft, Mail, Phone, MessageCircle, Book, Users, HelpCircle, Search, ChevronDown, ChevronUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SupportHero from '../components/SupportHero'
import ContactForm from '../components/ContactForm'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'
import Footer from '../components/Footer'

const SupportPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const navigate = useNavigate()

  const supportOptions = [
    {
      icon: Book,
      title: 'Help Center',
      description: 'Browse our comprehensive guides',
      action: 'Browse Guides',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I create my creator profile?',
          answer: 'Creating your profile is simple! Sign up with your email, verify your identity, upload a profile photo, write a bio describing your expertise, and set up your payment preferences. The entire process takes less than 10 minutes.'
        },
        {
          question: 'What content can I create on FansFollow?',
          answer: 'You can create any fitness, nutrition, martial arts, fitness modeling, or combat sports content including workout videos, meal plans, training guides, nutrition advice, technique tutorials, lifestyle content, and personal coaching content.'
        },
        {
          question: 'How quickly can I start earning money?',
          answer: 'You can start earning immediately after your profile is approved. Many creators see their first earnings within 24-48 hours of going live.'
        }
      ]
    },
    {
      title: 'Revenue & Payments',
      faqs: [
        {
          question: 'What percentage of earnings do I keep?',
          answer: 'You keep 80%+ of all earnings - the highest rate in the industry. We only take 20% to cover platform costs, payment processing, and platform development.'
        },
        {
          question: 'How and when do I get paid?',
          answer: 'Payments are processed every 5 days. You can choose to receive payments via bank transfer, PayPal, or cryptocurrency. All payments are secure and tracked.'
        },
        {
          question: 'What are the different ways I can earn money?',
          answer: 'FansFollow offers 21+ revenue streams including subscriptions, tips, pay-per-view content, personal chats, phone calls, video sessions, digital products, custom programs, and our built-in shop feature.'
        }
      ]
    },
    {
      title: 'Personal Connections',
      faqs: [
        {
          question: 'How do personal chats and calls work?',
          answer: 'You can offer paid text chats, phone calls, and video sessions with your fans. Set your own rates and availability. All communications are secure and encrypted for your privacy.'
        },
        {
          question: 'Can I set my own rates for personal interactions?',
          answer: 'Absolutely! You have complete control over your pricing for all services including per-message rates, per-minute call rates, and session pricing for video hangouts.'
        },
        {
          question: 'Is it safe to interact personally with fans?',
          answer: 'Yes, all personal interactions are conducted through our secure platform with built-in safety features, reporting systems, and active moderation support.'
        }
      ]
    },
    {
      title: 'Technical Support',
      faqs: [
        {
          question: 'What if I have technical issues with uploads?',
          answer: 'Our technical support team is available to help with any upload issues, platform bugs, or technical questions. Contact us via email or live chat for assistance.'
        },
        {
          question: 'How do I optimize my content for better engagement?',
          answer: 'We provide detailed analytics and best practice guides to help you optimize your content. Our creator success team also offers personalized advice for growing your audience.'
        },
        {
          question: 'Can I integrate with other platforms?',
          answer: 'Yes, we offer integration tools to help you cross-promote your FansFollow content on other social media platforms while driving traffic back to your profile.'
        }
      ]
    }
  ]

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title={pageSEO.support.title}
        description={pageSEO.support.description}
        keywords={pageSEO.support.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'Support', url: 'https://fansfollow.me/support' }
          ])
        ]}
      />
      {/* Hero Section */}
      <SupportHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Contact Form Section */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-3xl p-8 border-2 border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Still Need Help?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is standing by to help you succeed on FansFollow.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-blue-500/30">
                <Mail size={24} className="text-blue-400 mx-auto mb-2 drop-shadow-lg" />
                <div className="text-white font-bold">Email Support</div>
                <div className="text-gray-300 text-sm">support@fansfollow.me</div>
              </div>

              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border-2 border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-green-500/30">
                <Phone size={24} className="text-green-400 mx-auto mb-2 drop-shadow-lg" />
                <div className="text-white font-bold">Phone Support</div>
                <div className="text-gray-300 text-sm">Email for availability</div>
              </div>

              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border-2 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-purple-500/30">
                <Users size={24} className="text-purple-400 mx-auto mb-2 drop-shadow-lg" />
                <div className="text-white font-bold">Creator Community</div>
                <div className="text-gray-300 text-sm">Join our Discord</div>
              </div>
            </div>
            
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-block bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 min-h-[56px]"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SupportPage