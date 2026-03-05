import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { Lock, Monitor, AlertTriangle } from 'lucide-react'

interface LoginSession {
  id: string
  device: string
  browser: string
  ip: string
  location: string
  timestamp: string
  isActive: boolean
}

const PrivacySecurityPage: React.FC = () => {
  const [loginSessions] = useState<LoginSession[]>([
    {
      id: '1',
      device: 'MacBook Pro',
      browser: 'Chrome 120',
      ip: '192.168.1.100',
      location: 'London, UK',
      timestamp: 'Active now',
      isActive: true
    },
    {
      id: '2',
      device: 'iPhone 14',
      browser: 'Safari',
      ip: '192.168.1.101',
      location: 'London, UK',
      timestamp: '2 hours ago',
      isActive: false
    }
  ])

  const [privacySettings, setPrivacySettings] = useState({
    hideProfile: false,
    hideLastSeen: false,
    activeStatus: true,
    hideSubscriberCount: false,
    hideCountry: false,
    showBirthdate: false,
    onlySubscribersMessage: true,
    nonSubscribersTip: true,
    nonSubscribersTipAmount: '5',
    showProfileVisits: true,
    profileVisitsCount: '3.6k',
    unregisteredCanSee: true,
    twoFactorAuth: false
  })

  const handleToggle = (key: string) => {
    setPrivacySettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
  }

  const handleInputChange = (key: string, value: string) => {
    setPrivacySettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Saving privacy settings...', privacySettings)
  }

  const handleCloseAllSessions = () => {
    console.log('Closing all sessions...')
  }

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Deleting account...')
    }
  }

  return (
    <SettingsLayout>
      <div className="max-w-3xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Lock size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Privacy and Security</h1>
          </div>
          <p className="text-[#9ca3af]">Set your privacy</p>
        </div>

        <form onSubmit={handleSaveChanges} className="space-y-8">
          {/* Login Sessions */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">Login Sessions</h3>
            <p className="text-sm text-[#9ca3af] mb-4">Last login record was from</p>

            <div className="space-y-4 mb-4">
              {loginSessions.map((session) => (
                <div key={session.id} className="bg-[#0f172a] border border-[#334155] rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <Monitor size={24} className="text-[#9ca3af] mt-1" />
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-bold text-[#e2e8f0]">{session.device}</h4>
                          {session.isActive && (
                            <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-bold rounded">
                              Active now
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#9ca3af]">{session.browser}</p>
                        <p className="text-sm text-[#9ca3af]">IP: {session.ip}</p>
                        <p className="text-sm text-[#9ca3af]">{session.location}</p>
                        {!session.isActive && (
                          <p className="text-xs text-[#9ca3af] mt-1">{session.timestamp}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleCloseAllSessions}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Close all sessions
            </button>
          </div>

          {/* Privacy Settings */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">Privacy Settings</h3>

            <div className="space-y-4">
              {/* Hide Profile */}
              <div className="flex items-center justify-between py-3 border-b border-[#334155]">
                <div>
                  <p className="text-[#e2e8f0] font-medium">Hide profile</p>
                  <p className="text-sm text-[#9ca3af]">Search, page explore, explore creators</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle('hideProfile')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    privacySettings.hideProfile ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.hideProfile ? 'translate-x-7' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Hide Last Seen */}
              <div className="flex items-center justify-between py-3 border-b border-[#334155]">
                <p className="text-[#e2e8f0] font-medium">Hide last seen</p>
                <button
                  type="button"
                  onClick={() => handleToggle('hideLastSeen')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    privacySettings.hideLastSeen ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.hideLastSeen ? 'translate-x-7' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Active Status */}
              <div className="flex items-center justify-between py-3 border-b border-[#334155]">
                <div>
                  <p className="text-[#e2e8f0] font-medium">Active Status (Online)</p>
                  <p className="text-sm text-green-400">ON</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle('activeStatus')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    privacySettings.activeStatus ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.activeStatus ? 'translate-x-7' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Hide Subscriber Count */}
              <div className="flex items-center justify-between py-3 border-b border-[#334155]">
                <p className="text-[#e2e8f0] font-medium">Hide number of subscribers</p>
                <button
                  type="button"
                  onClick={() => handleToggle('hideSubscriberCount')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    privacySettings.hideSubscriberCount ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.hideSubscriberCount ? 'translate-x-7' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Hide Country */}
              <div className="flex items-center justify-between py-3 border-b border-[#334155]">
                <p className="text-[#e2e8f0] font-medium">Hide my country</p>
                <button
                  type="button"
                  onClick={() => handleToggle('hideCountry')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    privacySettings.hideCountry ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.hideCountry ? 'translate-x-7' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Show Birthdate */}
              <div className="flex items-center justify-between py-3 border-b border-[#334155]">
                <p className="text-[#e2e8f0] font-medium">Show my birthdate</p>
                <button
                  type="button"
                  onClick={() => handleToggle('showBirthdate')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    privacySettings.showBirthdate ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.showBirthdate ? 'translate-x-7' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Only Subscribers Can Message */}
              <div className="flex items-center justify-between py-3 border-b border-[#334155]">
                <div>
                  <p className="text-[#e2e8f0] font-medium">Only Subscribers Can Message Me</p>
                  <p className="text-sm text-green-400">ON</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle('onlySubscribersMessage')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    privacySettings.onlySubscribersMessage ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.onlySubscribersMessage ? 'translate-x-7' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Non-subscribers Message with Tip */}
              <div className="py-3 border-b border-[#334155]">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[#e2e8f0] font-medium">Non-subscribers can message with a Tip</p>
                    <p className="text-sm text-green-400">ON</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggle('nonSubscribersTip')}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      privacySettings.nonSubscribersTip ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        privacySettings.nonSubscribersTip ? 'translate-x-7' : ''
                      }`}
                    />
                  </button>
                </div>
                {privacySettings.nonSubscribersTip && (
                  <div className="flex items-center space-x-2">
                    <span className="text-[#e2e8f0]">£</span>
                    <input
                      type="text"
                      value={privacySettings.nonSubscribersTipAmount}
                      onChange={(e) => handleInputChange('nonSubscribersTipAmount', e.target.value)}
                      className="w-32 px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                )}
              </div>

              {/* Profile Visits */}
              <div className="py-3 border-b border-[#334155]">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[#e2e8f0] font-medium">Profile Visits: {privacySettings.profileVisitsCount}</p>
                    <p className="text-sm text-[#9ca3af]">Show On Profile</p>
                    <p className="text-sm text-green-400">ON</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggle('showProfileVisits')}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      privacySettings.showProfileVisits ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        privacySettings.showProfileVisits ? 'translate-x-7' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Unregistered Can See Posts */}
              <div className="flex items-center justify-between py-3 border-b border-[#334155]">
                <div>
                  <p className="text-[#e2e8f0] font-medium">Unregistered people can see my posts</p>
                  <p className="text-sm text-green-400">ON</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle('unregisteredCanSee')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    privacySettings.unregisteredCanSee ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.unregisteredCanSee ? 'translate-x-7' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">Security</h3>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-[#e2e8f0] font-medium">Two-Step Authentication</p>
                <p className="text-sm text-[#9ca3af]">Add an extra layer of security to your account</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('twoFactorAuth')}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  privacySettings.twoFactorAuth ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    privacySettings.twoFactorAuth ? 'translate-x-7' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Save changes
          </button>

          {/* Delete Account */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
            <div className="flex items-start space-x-3 mb-4">
              <AlertTriangle size={24} className="text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">Delete Account</h3>
                <p className="text-sm text-[#e2e8f0] mb-1">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <p className="text-sm text-[#9ca3af]">
                  All your data, posts, and subscriptions will be permanently deleted.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleDeleteAccount}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Delete account
            </button>
          </div>
        </form>
      </div>
    </SettingsLayout>
  )
}

export default PrivacySecurityPage
