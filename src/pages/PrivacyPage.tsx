import React from 'react'
import { ArrowLeft, Shield, Eye, Lock, Globe, Users, Database, Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'

const PrivacyPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer 
        title="Privacy Policy | FansFollow - Your Data Protection & Privacy Rights"
        description="Learn how FansFollow protects your personal data, privacy rights, and information security. GDPR compliant privacy policy for creators and fans worldwide."
        keywords={[
          "privacy policy", 
          "data protection", 
          "GDPR compliance", 
          "user privacy", 
          "data security"
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
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">
            <Shield className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-semibold">PRIVACY POLICY</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Your Privacy & Data Protection
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At FansFollow.me, we are committed to protecting your privacy and personal information. 
            This Privacy Policy explains how we collect, use, and disclose your personal information when you use our Services.
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
              <Shield size={24} className="text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Introduction</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                At FansFollow.me, we are committed to protecting your privacy and personal information. This Privacy Policy 
                (the "Policy") explains how we collect, use, and disclose your personal information when you use our website 
                and services (the "Services"). By using the Services, you consent to the collection, use, and disclosure of 
                your personal information as described in this Policy.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-200">
                  🛡️ By using FansFollow.me, you acknowledge that you have read and understand this Privacy Policy and agree to be bound by it.
                </p>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Database size={24} className="text-orange-400" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="mb-4">We may collect the following types of personal information:</p>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Information You Provide to Us</h3>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>When you create an account, we collect your name, email address, username, and other contact information</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>Profile information you choose to provide (bio, website, categories)</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>Content you create, messages you send, and interactions you have on our platform</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p>If you contact us for customer support, we collect information about your account and the issue you are experiencing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Information We Collect Automatically</h3>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>Information about your device and browser, such as IP address, browser type, and operating system</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>Information about your usage of the Services, such as the pages you visit and the actions you take</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p>Log data including access times, pages viewed, and referring website addresses</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Information from Third-Party Services</h3>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                  <p>We may collect information about you from other online services, such as social media platforms, if you choose to connect your account to those services.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Users size={24} className="text-green-400" />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p><strong>To provide and improve the Services:</strong> We use the information we collect to provide and improve the features and functionality of the Services</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p><strong>To communicate with you:</strong> We may use your contact information to send you important notices and updates about the Services, such as changes to our terms of service</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p><strong>To personalize your experience:</strong> We may use the information we collect to personalize your experience on the Services, such as showing you content that we believe will be of interest to you</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p><strong>For research and analytics:</strong> We may use the information we collect to conduct research and analysis to improve the Services</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p><strong>To process payments and transactions securely</strong></p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p><strong>To protect against fraud and ensure platform security</strong></p>
                </div>
              </div>
            </div>
          </section>

          {/* Disclosure of Information */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Eye size={24} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Disclosure of Information</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="mb-4">We may disclose your personal information to the following parties:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Service Providers</h3>
                  <p>We may share your information with third-party service providers who assist us in providing the Services, such as hosting providers, payment processors, and analytics companies.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Law Enforcement and Government Agencies</h3>
                  <p>We may disclose your information to law enforcement and government agencies in response to a legal request or to protect the rights and safety of the Services or its users.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Business Transfers</h3>
                  <p>In the event that we sell or transfer all or a portion of our business or assets, we may disclose your personal information as part of that transaction.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Database size={24} className="text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Data Retention</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                We will retain your personal information for as long as your account is active or as needed to provide the Services. 
                We will also retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <p className="text-yellow-200">
                  📅 You can request deletion of your account and data at any time through your account settings or by contacting us.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock size={24} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                We take the security of your personal information seriously and have implemented measures to protect your information 
                from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage 
                is 100% secure, and we cannot guarantee the security of your personal information.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield size={16} className="text-purple-400" />
                    <span className="text-white font-semibold">SSL Encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield size={16} className="text-purple-400" />
                    <span className="text-white font-semibold">Secure Data Centers</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield size={16} className="text-purple-400" />
                    <span className="text-white font-semibold">Regular Security Audits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield size={16} className="text-purple-400" />
                    <span className="text-white font-semibold">Access Controls</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Eye size={24} className="text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p className="mb-4">Under GDPR and other privacy laws, you have the right to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Eye size={16} className="text-blue-400" />
                    <span>Access your personal data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye size={16} className="text-blue-400" />
                    <span>Correct inaccurate data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye size={16} className="text-blue-400" />
                    <span>Delete your account and data</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Eye size={16} className="text-blue-400" />
                    <span>Export your data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye size={16} className="text-blue-400" />
                    <span>Opt out of marketing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye size={16} className="text-blue-400" />
                    <span>Restrict data processing</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* International Transfers */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Globe size={24} className="text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">International Data Transfers</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                As a global platform serving creators and fans worldwide, we may transfer your data internationally. 
                We ensure all transfers comply with applicable privacy laws and implement appropriate safeguards.
              </p>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                <p className="text-cyan-200">
                  🌍 We serve users in 180+ countries and ensure your data is protected regardless of location.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Bell size={24} className="text-orange-400" />
              <h2 className="text-2xl font-bold text-white">Changes to This Policy</h2>
            </div>
            <div className="text-gray-300">
              <p className="mb-4">
                We may make changes to this Policy from time to time. We will notify you of any changes by posting the new Policy 
                on the Services and updating the "Last updated" date at the top of this Policy. Your continued use of the Services 
                after any changes to this Policy constitutes your acceptance of the new Policy.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions or concerns about this Policy, please contact us:
              </p>
              <div className="space-y-2 text-orange-200">
                <div>Email: privacy@fansfollow.me</div>
                <div>Support: support@fansfollow.me</div>
                <div>Contact Form: Available via the contact page</div>
                <div>Response time: Within 72 hours</div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPage