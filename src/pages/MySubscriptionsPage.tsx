import React from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { RefreshCw } from 'lucide-react'

interface Subscription {
  id: number
  name: string
  avatar: string
  date: string
  interval: string
  endsAt: string
  status: 'ACTIVE' | 'INACTIVE'
  pinned: boolean
}

const MySubscriptionsPage: React.FC = () => {
  const subscriptions: Subscription[] = [
    { id: 1, name: 'Justice Jimmy Millar', avatar: 'https://i.pravatar.cc/150?img=33', date: 'May 30 2024', interval: 'Monthly', endsAt: 'Feb 02 2026', status: 'ACTIVE', pinned: true },
  ]

  const getStatusColor = (status: string) => {
    return status === 'ACTIVE' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
  }

  return (
    <SettingsLayout>
      <div className="max-w-6xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <RefreshCw size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">My subscriptions</h1>
          </div>
          <p className="text-[#9ca3af]">Users you have subscribed to your content</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <p className="text-sm text-[#9ca3af] mb-1">Total Subscriptions</p>
            <p className="text-3xl font-bold text-[#e2e8f0]">{subscriptions.length}</p>
          </div>
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <p className="text-sm text-[#9ca3af] mb-1">Active Subscriptions</p>
            <p className="text-3xl font-bold text-green-400">
              {subscriptions.filter(s => s.status === 'ACTIVE').length}
            </p>
          </div>
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <p className="text-sm text-[#9ca3af] mb-1">Monthly Cost</p>
            <p className="text-3xl font-bold text-[#e2e8f0]">£10.00</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0f172a] border-b border-[#334155]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Subscribed
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Interval
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Ends at
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#334155]">
                {subscriptions.map((subscription) => (
                  <tr key={subscription.id} className="hover:bg-[#0f172a] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img
                          src={subscription.avatar}
                          alt={subscription.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-[#e2e8f0]">{subscription.name}</span>
                          {subscription.pinned && <span className="text-lg">📌</span>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e2e8f0]">
                      {subscription.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e2e8f0]">
                      {subscription.interval}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e2e8f0]">
                      {subscription.endsAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(subscription.status)}`}>
                        {subscription.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <p className="text-sm text-blue-400">
            <strong>Note:</strong> Your subscriptions will automatically renew unless cancelled before the end date.
            You can manage or cancel any subscription at any time.
          </p>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default MySubscriptionsPage
