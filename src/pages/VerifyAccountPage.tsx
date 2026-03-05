import React from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { CheckCircle, Shield, Star, Award } from 'lucide-react'

const VerifyAccountPage: React.FC = () => {
  return (
    <SettingsLayout>
      <div className="max-w-3xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <CheckCircle size={28} className="text-green-400" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Verify Account</h1>
          </div>
          <p className="text-[#9ca3af]">Verified account!</p>
        </div>

        {/* Success Banner */}
        <div className="bg-green-600 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3">
            <CheckCircle size={32} className="text-white flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Your account is verified!</h2>
              <p className="text-green-100">
                Congratulations! Your account has been successfully verified.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-[#e2e8f0] mb-4">Verification Benefits</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield size={20} className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold text-[#e2e8f0] mb-1">Enhanced Credibility</h4>
                <p className="text-sm text-[#9ca3af]">
                  The verified badge builds trust with your audience and shows you're a legitimate creator.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Star size={20} className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold text-[#e2e8f0] mb-1">Increased Visibility</h4>
                <p className="text-sm text-[#9ca3af]">
                  Verified accounts get priority placement in search results and recommendations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Award size={20} className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold text-[#e2e8f0] mb-1">Premium Features</h4>
                <p className="text-sm text-[#9ca3af]">
                  Access exclusive features and tools available only to verified creators.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Badge Preview */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">Your Verification Badge</h3>
          <div className="flex items-center space-x-4 p-4 bg-[#0f172a] rounded-lg border border-[#334155]">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">JD</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="text-lg font-bold text-[#e2e8f0]">John Doe</h4>
                <CheckCircle size={20} className="text-green-400 fill-green-400" />
              </div>
              <p className="text-sm text-[#9ca3af]">@johndoe</p>
              <p className="text-sm text-[#9ca3af]">Fitness coach and content creator</p>
            </div>
          </div>
          <p className="text-xs text-[#9ca3af] mt-4">
            This verified badge will appear next to your name across the platform.
          </p>
        </div>

        {/* Info Section */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
          <p className="text-sm text-blue-400">
            <strong>Note:</strong> Keep your account information up to date to maintain your verified status.
            Violating community guidelines may result in removal of your verification badge.
          </p>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default VerifyAccountPage
