import React from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { ShieldOff } from 'lucide-react'

const RestrictedUsersPage: React.FC = () => {
  return (
    <SettingsLayout>
      <div className="max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <ShieldOff size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Restricted users</h1>
          </div>
          <p className="text-[#9ca3af]">Users you have restricted</p>
        </div>

        {/* Empty State */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg py-16">
          <div className="text-center">
            <div className="w-32 h-32 bg-[#334155] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-7xl">⛔</span>
            </div>
            <h2 className="text-2xl font-bold text-[#e2e8f0] mb-2">
              No results have been found
            </h2>
            <p className="text-[#9ca3af]">
              You haven't restricted any users yet
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">About Restricted Users</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Block Interactions:</span> Restricted users cannot view your profile, subscribe, or interact with your content
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">No Notifications:</span> They won't be notified that you've restricted them
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Easy Management:</span> You can unrestrict users at any time from this page
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">How to Restrict:</span> Visit a user's profile and select "Restrict User" from the menu options
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default RestrictedUsersPage
