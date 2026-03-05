import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SEOOptimizer from '../components/SEOOptimizer'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      category: 'Getting Started',
      question: 'How much does it cost to join as a creator?',
      answer: 'Free to join. We only earn when you earn (20% platform fee). No monthly fees, no hidden costs.'
    },
    {
      category: 'Getting Started',
      question: 'How much does it cost for fans?',
      answer: 'Free to create an account. Fans only pay for premium content, subscriptions, or services they choose to purchase from creators.'
    },
    {
      category: 'Getting Started',
      question: 'Do I need a large following to start earning?',
      answer: 'No. Creators with 1K-5K followers earn $5K-20K/month. Followers can also earn through our referral program. Quality engagement matters more than follower count.'
    },
    {
      category: 'Payments & Earnings',
      question: 'How do I get paid?',
      answer: 'Bank transfer, PayPal, or crypto (BTC, ETH, USDT, SOL). Payouts processed within 5 business days.'
    },
    {
      category: 'Payments & Earnings',
      question: "What's the revenue split?",
      answer: 'Creators keep 80%+ of earnings. VIP creators with large followings can negotiate custom rates even higher.'
    },
    {
      category: 'Payments & Earnings',
      question: 'What are the revenue streams?',
      answer: '17+ options including subscriptions, tips, PPV content, phone calls, text coaching, video consultations, digital products, and more.'
    },
    {
      category: 'Payments & Earnings',
      question: 'How often do I get paid?',
      answer: 'Withdraw earnings anytime (minimum $50). Payouts processed within 5 business days.'
    },
    {
      category: 'Platform Features',
      question: 'Can I use this alongside other platforms?',
      answer: "Absolutely! We don't require exclusivity. Many creators use FansFollow plus Instagram, YouTube, Patreon, etc."
    },
    {
      category: 'Platform Features',
      question: 'What countries are supported?',
      answer: 'We support creators and fans worldwide. Crypto payments work globally without banking restrictions.'
    },
    {
      category: 'Platform Features',
      question: 'Is my content safe and secure?',
      answer: 'Yes. Encrypted communications, secure payment processing, and you control who sees your content.'
    },
    {
      category: 'Platform Features',
      question: 'What kind of content can I post?',
      answer: 'Fitness, nutrition, bodybuilding, martial arts, combat sports, training programs, coaching content, and related topics.'
    },
    {
      category: 'Platform Features',
      question: 'Can I offer private coaching or consultations?',
      answer: 'Yes! Paid phone calls, text coaching, video sessions, and personalized training programs are core features.'
    },
    {
      category: 'Technical',
      question: 'Is there a mobile app?',
      answer: 'iOS and Android apps are in development and launching soon. Currently use the mobile-responsive website.'
    }
  ]

  const categories = Array.from(new Set(faqs.map(faq => faq.category)))

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title="FAQ - FansFollow | Frequently Asked Questions"
        description="Common questions about FansFollow - creator earnings, payments, global support, and platform features."
        keywords={[
          "FansFollow FAQ",
          "creator earnings",
          "payments",
          "crypto payments",
          "platform features",
          "fitness creators"
        ]}
      />
      <Header />

        <main className="flex-grow pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about FansFollow - creator earnings, payments, and platform features.
              </p>
            </div>

            {categories.map((category, categoryIndex) => (
              <div key={category} className="mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-purple-600 rounded-full mr-3"></span>
                  {category}
                </h2>

                <div className="space-y-3">
                  {faqs
                    .filter(faq => faq.category === category)
                    .map((faq, index) => {
                      const globalIndex = faqs.findIndex(f => f === faq)
                      const isOpen = openIndex === globalIndex

                      return (
                        <div
                          key={globalIndex}
                          className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-200 rounded-xl"
                          >
                            <span className="text-base sm:text-lg font-semibold text-white pr-4">
                              {faq.question}
                            </span>
                            <div className="flex-shrink-0">
                              {isOpen ? (
                                <ChevronUp size={24} className="text-orange-400" />
                              ) : (
                                <ChevronDown size={24} className="text-gray-400" />
                              )}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-4">
                              <div className="pt-2 border-t border-white/10">
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-3">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                </div>
              </div>
            ))}

            <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Our support team is here to help. Reach out anytime.
              </p>
              <a
                href="/support"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Contact Support
              </a>
            </div>
          </div>
        </main>

      <Footer />
    </div>
  )
}

export default FAQPage
