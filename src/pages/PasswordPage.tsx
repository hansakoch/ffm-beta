import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { Key, Eye, EyeOff } from 'lucide-react'

const PasswordPage: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Updating password...')
  }

  return (
    <SettingsLayout>
      <div className="max-w-2xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Key size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Password</h1>
          </div>
          <p className="text-[#9ca3af]">Update your password</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Old Password */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Old Password
            </label>
            <div className="relative">
              <input
                type={showOldPassword ? 'text' : 'password'}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter your old password"
                className="w-full px-4 py-3 pr-12 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#e2e8f0] transition-colors"
              >
                {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="w-full px-4 py-3 pr-12 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#e2e8f0] transition-colors"
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-xs text-[#9ca3af] mt-2">
              Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters
            </p>
          </div>

          {/* Password Strength Indicator (optional) */}
          {newPassword && (
            <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
              <p className="text-sm font-medium text-[#e2e8f0] mb-2">Password Strength</p>
              <div className="flex space-x-2 mb-2">
                <div className={`h-2 flex-1 rounded ${newPassword.length >= 8 ? 'bg-green-500' : 'bg-[#334155]'}`}></div>
                <div className={`h-2 flex-1 rounded ${/[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) ? 'bg-green-500' : 'bg-[#334155]'}`}></div>
                <div className={`h-2 flex-1 rounded ${/[0-9]/.test(newPassword) ? 'bg-green-500' : 'bg-[#334155]'}`}></div>
                <div className={`h-2 flex-1 rounded ${/[^A-Za-z0-9]/.test(newPassword) ? 'bg-green-500' : 'bg-[#334155]'}`}></div>
              </div>
              <div className="space-y-1 text-xs">
                <p className={newPassword.length >= 8 ? 'text-green-400' : 'text-[#9ca3af]'}>
                  {newPassword.length >= 8 ? '✓' : '○'} At least 8 characters
                </p>
                <p className={/[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) ? 'text-green-400' : 'text-[#9ca3af]'}>
                  {/[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) ? '✓' : '○'} Uppercase and lowercase letters
                </p>
                <p className={/[0-9]/.test(newPassword) ? 'text-green-400' : 'text-[#9ca3af]'}>
                  {/[0-9]/.test(newPassword) ? '✓' : '○'} At least one number
                </p>
                <p className={/[^A-Za-z0-9]/.test(newPassword) ? 'text-green-400' : 'text-[#9ca3af]'}>
                  {/[^A-Za-z0-9]/.test(newPassword) ? '✓' : '○'} At least one special character
                </p>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-400">
              <strong>Security Tip:</strong> Use a strong, unique password that you don't use for any other accounts.
              Consider using a password manager to generate and store secure passwords.
            </p>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!oldPassword || !newPassword}
          >
            Save changes
          </button>
        </form>
      </div>
    </SettingsLayout>
  )
}

export default PasswordPage
