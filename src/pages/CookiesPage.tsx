import React from 'react'
import { ArrowLeft, Cookie, Settings, BarChart3, Target, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'

const CookiesPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer 
        title="Cookie Policy | FansFollow - How We Use Cookies"
        description="Learn about FansFollow's cookie usage, including essential, analytics, and preference cookies. Manage your cookie settings for the best platform experience."
        keywords={[
          "cookie policy", 
          "cookies", 
          "website cookies", 
          "privacy settings", 
          "data tracking"
        ]}
        ogImage="/website-header-3000-1500 original.png"
      />
      
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-orange-400 hover:text-orange-300 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 mb-6">
            <Cookie className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-300 font-semibold">COOKIE POLICY</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            How We Use Cookies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At FansFollow.me, we use cookies and similar technologies to improve your browsing experience 
            and to personalize the content and advertisements that you see on our website.
          </p>
          <div className="text-gray-400 text-sm mt-4">
            Last updated: January 22, 2025
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700/50 space-y-8">
          
          {/* Introduction */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Cookie size={24} className="text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Introduction</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                At FansFollow.me, we use cookies and similar technologies to improve your browsing experience 
                and to personalize the content and advertisements that you see on our website. This Cookies Policy 
                explains what cookies are, how we use them, and how you can control them.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <p className="text-yellow-200">
                  🍪 By using FansFollow.me, you acknowledge that you have read and understand this Cookies Policy and agree to be bound by it.
                </p>
              </div>
            </div>
          </section>

          {/* What Are Cookies */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Settings size={24} className="text-blue-400" />
              <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                Cookies are small text files that are stored on your device when you visit a website. They are used to 
                remember your preferences and to track your browsing activity. Cookies help us remember your preferences, 
                keep you logged in, and provide a better user experience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2">Session Cookies</h3>
                  <p className="text-blue-200 text-sm">
                    Temporary cookies that are deleted when you close your browser. Used for essential site functionality.
                  </p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                  <h3 className="text-white font-semibold mb-2">Persistent Cookies</h3>
                  <p className="text-purple-200 text-sm">
                    Remain on your device until they expire or you delete them. Used to remember your preferences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 size={24} className="text-green-400" />
              <h2 className="text-2xl font-bold text-white">How We Use Cookies</h2>
            </div>
            
            <div className="text-gray-300 mb-4">
              <p>We use cookies to:</p>
            </div>

            <div className="space-y-4">
              {/* Essential Cookies */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield size={20} className="text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Essential Cookies</h3>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">REQUIRED</span>
                </div>
                <p className="text-gray-300 mb-3">
                  These cookies are necessary for the website to function and cannot be switched off.
                </p>
                <div className="space-y-2 text-sm">
                  <div>• Authentication and login sessions</div>
                  <div>• Security and fraud prevention</div>
                  <div>• Payment processing</div>
                  <div>• Site functionality and navigation</div>
                </div>
              </div>

              {/* Performance Cookies */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <BarChart3 size={20} className="text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Performance & Analytics Cookies</h3>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold">OPTIONAL</span>
                </div>
                <p className="text-gray-300 mb-3">
                  Help us understand how visitors use our site to improve performance and analyze website usage.
                </p>
                <div className="space-y-2 text-sm">
                  <div>• Track how our website is used and identify errors</div>
                  <div>• Collect information about pages visited and actions taken</div>
                  <div>• Performance monitoring and optimization</div>
                  <div>• Usage statistics (anonymized)</div>
                </div>
              </div>

              {/* Personalization Cookies */}
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Target size={20} className="text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Personalization Cookies</h3>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold">OPTIONAL</span>
                </div>
                <p className="text-gray-300 mb-3">
                  Remember your preferences and personalize your experience on the platform.
                </p>
                <div className="space-y-2 text-sm">
                  <div>• Remember your preferences and settings</div>
                  <div>• Show you content that we believe will be of interest to you</div>
                  <div>• Language and region settings</div>
                  <div>• Content recommendations</div>
                </div>
              </div>

              {/* Advertising Cookies */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Target size={20} className="text-orange-400" />
                  <h3 className="text-lg font-semibold text-white">Advertising Cookies</h3>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold">OPTIONAL</span>
                </div>
                <p className="text-gray-300 mb-3">
                  Used to deliver advertisements that are relevant to you and your interests.
                </p>
                <div className="space-y-2 text-sm">
                  <div>• Deliver targeted advertisements</div>
                  <div>• Measure advertising effectiveness</div>
                  <div>• Prevent showing the same ad repeatedly</div>
                  <div>• Build advertising profiles based on interests</div>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Target size={24} className="text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Third-Party Cookies</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                We may also use third-party cookies, which are cookies set by other websites. These cookies may be used to 
                deliver advertisements that are relevant to you and your interests, or to analyze website usage.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <div className="text-white font-semibold mb-2">Analytics Partners</div>
                  <div className="text-sm text-gray-400">Google Analytics for usage insights and performance monitoring</div>
                </div>
                <div className="bg-gray-700/30 rounded-xl p-4">
                  <div className="text-white font-semibold mb-2">Payment Processors</div>
                  <div className="text-sm text-gray-400">Stripe and crypto payment services for secure transactions</div>
                </div>
              </div>
            </div>
          </section>

          {/* Controlling Cookies */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Settings size={24} className="text-orange-400" />
              <h2 className="text-2xl font-bold text-white">Controlling Cookies</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                You can control the use of cookies on our website by adjusting the settings on your browser. 
                You can also delete cookies that have already been set on your device. However, please be aware 
                that disabling cookies may affect your ability to use certain features of our website.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                <p>Most browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete cookies that have already been set.</p>
              </div>
              
              {/* Cookie Preference Center */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-4">Cookie Preference Center</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Essential Cookies</div>
                      <div className="text-gray-400 text-sm">Required for site functionality</div>
                    </div>
                    <div className="bg-green-600 rounded-full px-3 py-1 text-white text-sm">Always Active</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Analytics Cookies</div>
                      <div className="text-gray-400 text-sm">Help improve our platform</div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 rounded-full px-3 py-1 text-white text-sm transition-colors">
                      Enable
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Personalization Cookies</div>
                      <div className="text-gray-400 text-sm">Personalize your experience</div>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 rounded-full px-3 py-1 text-white text-sm transition-colors">
                      Enable
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Advertising Cookies</div>
                      <div className="text-gray-400 text-sm">Relevant ads and content</div>
                    </div>
                    <button className="bg-orange-600 hover:bg-orange-700 rounded-full px-3 py-1 text-white text-sm transition-colors">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UK Law Compliance */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield size={24} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Compliance with UK Law</h2>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <p className="text-gray-300">
                We comply with the UK Privacy and Electronic Communications Regulations (PECR) that requires us to 
                gain your consent before placing certain types of cookies on your device. We also comply with GDPR 
                and other international privacy regulations for our global user base.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <div className="text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-2">Changes to This Policy</h3>
              <p className="mb-4">
                We may make changes to this Policy from time to time. We will notify you of any changes by posting the new 
                Policy on the Services and updating the "Last updated" date at the top of this Policy. Your continued use 
                of the Services after any changes to this Policy constitutes your acceptance of the new Policy.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Questions About Cookies?</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions or concerns about this Policy, please contact us:
              </p>
              <div className="text-blue-200">
                <div>Email: privacy@fansfollow.me</div>
                <div>Support: support@fansfollow.me</div>
                <div>Contact Form: Available via the contact page</div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CookiesPage