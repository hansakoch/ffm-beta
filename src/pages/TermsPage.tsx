import React from 'react'
import { ArrowLeft, FileText, Scale, Shield, Users, DollarSign, AlertTriangle, Globe, Eye, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'

const TermsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer 
        title="Terms of Service | FansFollow - Platform Rules & Creator Guidelines"
        description="Read FansFollow's Terms of Service covering platform usage, creator guidelines, payment terms, and user responsibilities for our global fitness and martial arts platform."
        keywords={[
          "terms of service", 
          "platform rules", 
          "creator guidelines", 
          "user agreement", 
          "platform terms"
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
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6">
            <Scale className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-semibold">TERMS OF SERVICE</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Platform Terms & Conditions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to FansFollow! These terms govern your use of our platform and outline the rights and 
            responsibilities of creators, fans, and our community.
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
              <FileText size={24} className="text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Introduction</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                Welcome to FansFollow.me (the "Site" or "Platform"). By using the Site, you agree to be bound by these 
                Terms of Service (the "Terms") and our Privacy Policy. If you do not agree to these Terms or the Privacy Policy, 
                you may not use the Site.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-200">
                  By using FansFollow.me, you acknowledge that you have read, understood, and agree to be bound by these 
                  Terms of Service. These terms are designed to protect the rights of FansFollow.me, its users, and other 
                  third-party service providers.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Usage */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Users size={24} className="text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Platform Usage</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Eligibility</h3>
                <p>You must be at least 18 years old to use FansFollow. By creating an account, you confirm you meet this requirement.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Account Responsibility</h3>
                <p>You're responsible for maintaining the security of your account and all activities that occur under your account. You agree to provide accurate information and keep your account details up to date.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Acceptable Use</h3>
                <p>Use FansFollow for its intended purpose: connecting creators with fans through content and personal interactions in fitness, nutrition, martial arts, and combat sports.</p>
              </div>
            </div>
          </section>

          {/* User Content */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText size={24} className="text-orange-400" />
              <h2 className="text-2xl font-bold text-white">User Content & Intellectual Property</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Content Licensing</h3>
                <p>The Site allows users to post, upload, or otherwise submit content (the "User Content"). By submitting User Content, you grant FansFollow.me a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display the User Content throughout the world in any media.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Intellectual Property Protection</h3>
                <p>The Site, including all content, text, images, logos, and trademarks, is owned by FansFollow.me and is protected by copyright, trademark, and other intellectual property laws. You may not use any content or materials on the Site for any commercial purpose without the express written consent of FansFollow.me.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Content Ownership</h3>
                <p>You retain ownership of your original content but grant us the necessary rights to operate the platform and distribute your content to your fans as intended.</p>
              </div>
            </div>
          </section>

          {/* Creator Guidelines */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield size={24} className="text-orange-400" />
              <h2 className="text-2xl font-bold text-white">Creator Guidelines</h2>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Content Standards</h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>Create original, high-quality content related to fitness, nutrition, martial arts, or combat sports</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>Respect intellectual property rights and don't copy others' content</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>Provide accurate information about your qualifications and expertise</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Creator Responsibilities</h3>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>Respond to fans in a timely and professional manner</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>Honor your stated response times and availability</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>Provide value in your paid interactions and content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Conduct */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle size={24} className="text-red-400" />
              <h2 className="text-2xl font-bold text-white">User Conduct & Prohibited Activities</h2>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <p className="text-gray-300 mb-4">You agree not to use the Site to:</p>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p>Upload, post, or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p>Harm minors in any way</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p>Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p>Upload or transmit content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p>Transmit unsolicited advertising, promotional materials, "junk mail," "spam," "chain letters," or "pyramid schemes"</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p>Upload material containing software viruses or any code designed to interrupt, destroy, or limit functionality</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p>Interfere with or disrupt the Site, servers, or networks connected to the Site</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p>Violate any applicable local, state, national, or international law</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p>Attempt to circumvent platform fees or payment systems</p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <DollarSign size={24} className="text-green-400" />
              <h2 className="text-2xl font-bold text-white">Payment & Revenue Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Revenue Share</h3>
                <p>Creators keep 80%+ of all earnings. FansFollow retains 20% to cover platform costs, payment processing, and development.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Payment Processing</h3>
                <p>Payments are processed every 5 days. We support traditional payment methods and cryptocurrency (BTC, ETH, USDT, SOL) for global accessibility.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Taxes</h3>
                <p>You're responsible for all applicable taxes on your earnings. We provide earnings reports to help with tax filing.</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <p className="text-green-200">
                  💰 <strong>Global Payments:</strong> Accept payments from fans worldwide without banking restrictions using crypto options.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Security */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield size={24} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Platform Security & Safety</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Content Moderation</h3>
                <p>We review content to ensure it meets our community standards and is appropriate for our fitness and martial arts focused platform.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Reporting System</h3>
                <p>Users can report inappropriate content or behavior. We investigate all reports promptly and take appropriate action.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Termination Rights</h3>
                <p>FansFollow.me reserves the right to terminate your access to the Site at any time, without notice, for any reason, including but not limited to, violation of these Terms of Service.</p>
              </div>
            </div>
          </section>

          {/* Third-Party Links */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Globe size={24} className="text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Third-Party Links & Services</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                The Site may contain links to third-party websites or services. FansFollow.me is not responsible for the content or services provided by these third-party websites and makes no representations or warranties regarding the accuracy or completeness of the information provided by these websites. Your use of any third-party website is subject to the terms and conditions of that website.
              </p>
            </div>
          </section>

          {/* Disclaimer & Limitation of Liability */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle size={24} className="text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Disclaimer & Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Disclaimer</h3>
                <p>The Site and User Content are provided "as is" and FansFollow.me makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the User Content. You expressly agree that your use of the Site is at your sole risk.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Limitation of Liability</h3>
                <p>FansFollow.me shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Site or the User Content.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Indemnification</h3>
                <p>You agree to indemnify and hold FansFollow.me, its officers, directors, employees, agents, and third-party service providers harmless from and against any claims, actions, or demands, including reasonable legal and accounting fees, arising out of or related to your use of the Site or User Content, or your violation of these Terms.</p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale size={24} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Governing Law</h2>
            </div>
            <div className="text-gray-300">
              <p>These Terms shall be governed by and construed in accordance with the laws of [jurisdiction], without giving effect to any principles of conflicts of law. Any legal action or proceeding relating to these Terms shall be brought exclusively in the courts of [jurisdiction].</p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <div className="text-center bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Changes to These Terms</h3>
              <p className="text-gray-300">
                FansFollow.me reserves the right to make changes to these Terms at any time. Your continued use of the Site following any changes to these Terms constitutes your acceptance of the new Terms. We'll notify you of significant changes via email or platform notification.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="text-orange-200">
                <div>Email: legal@fansfollow.me</div>
                <div>Support: support@fansfollow.me</div>
                <div>Contact Form: Available on our website</div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsPage