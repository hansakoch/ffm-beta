import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { Users, Copy, FileText, DollarSign } from 'lucide-react'

const ReferralsSettingsPage: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://fansfollow.me?ref=4020'

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <SettingsLayout>
      <div className="max-w-6xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Users size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Referrals</h1>
          </div>
          <p className="text-[#9ca3af] mb-2">
            Welcome to your referral panel. Share your link and earn between 5% - 6.5% of your referrals,
            be it a Subscription, Tip or a PPV!
          </p>
          <p className="text-sm text-[#9ca3af]">
            * You will earn between 5% - 6.5% percent for each transaction of your referral
          </p>
        </div>

        {/* Referral Link */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6 mb-8">
          <label className="block text-sm font-bold text-[#9ca3af] mb-3">
            Your referral link is:
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 text-[#e2e8f0] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={copyReferralLink}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center space-x-2 ${
                copied
                  ? 'bg-green-600 text-white'
                  : 'bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white'
              }`}
            >
              {copied ? (
                <>
                  <span>✓</span>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <span className="text-lg">📋</span>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#e2e8f0]">0</p>
                <p className="text-sm text-[#9ca3af]">Total registered users</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">📜</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#e2e8f0]">0</p>
                <p className="text-sm text-[#9ca3af]">Total transactions</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#e2e8f0]">£0.00</p>
                <p className="text-sm text-[#9ca3af]">Total Earnings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-[#334155] bg-[#0f172a]">
            <h2 className="text-xl font-bold text-[#e2e8f0]">Transactions</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0f172a] border-b border-[#334155]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Earnings
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="px-6 py-16 text-center">
                    <div className="text-[#9ca3af]">
                      <FileText size={48} className="mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">No transactions yet</p>
                      <p className="text-sm mt-2">
                        Share your referral link to start earning commissions
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">How Referrals Work</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">1</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Share your link:</span> Copy your unique referral link and share it on social media, email, or directly with creators
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">2</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">They sign up:</span> When someone creates an account using your link, they become your referral
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">3</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">You earn:</span> Receive 5%-6.5% commission on all their transactions including subscriptions, tips, and PPV content
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">4</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Track earnings:</span> Monitor your referral stats and earnings in this dashboard
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default ReferralsSettingsPage
