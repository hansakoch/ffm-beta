import React from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { Users } from 'lucide-react'

interface Subscriber {
  id: number
  name: string
  avatar: string
  date: string
  interval: string
  endsAt: string
  status: 'ACTIVE' | 'INACTIVE'
  pinned: boolean
}

const MySubscribersPage: React.FC = () => {
  const subscribers: Subscriber[] = [
    { id: 1, name: 'Date Doctor', avatar: 'https://i.pravatar.cc/150?img=1', date: 'Dec 11 2025', interval: 'Not applicable', endsAt: 'Free Subscription', status: 'ACTIVE', pinned: true },
    { id: 2, name: 'Jessica', avatar: 'https://i.pravatar.cc/150?img=5', date: 'Aug 14 2025', interval: 'Not applicable', endsAt: 'Free Subscription', status: 'ACTIVE', pinned: true },
    { id: 3, name: 'lezzieM', avatar: 'https://i.pravatar.cc/150?img=8', date: 'May 09 2025', interval: 'Not applicable', endsAt: 'Free Subscription', status: 'ACTIVE', pinned: true },
    { id: 4, name: 'Johnmark', avatar: 'https://i.pravatar.cc/150?img=12', date: 'Sep 27 2024', interval: 'Not applicable', endsAt: 'Free Subscription', status: 'ACTIVE', pinned: true },
    { id: 5, name: 'Kamakazi Krew', avatar: 'https://i.pravatar.cc/150?img=15', date: 'Jul 13 2024', interval: 'Not applicable', endsAt: 'Free Subscription', status: 'ACTIVE', pinned: true },
    { id: 6, name: 'Shaun Greig', avatar: 'https://i.pravatar.cc/150?img=20', date: 'May 17 2024', interval: 'Not applicable', endsAt: 'Free Subscription', status: 'ACTIVE', pinned: true },
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
            <Users size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">My subscribers</h1>
          </div>
          <p className="text-[#9ca3af]">Users who have subscribed to your content</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <p className="text-sm text-[#9ca3af] mb-1">Total Subscribers</p>
            <p className="text-3xl font-bold text-[#e2e8f0]">{subscribers.length}</p>
          </div>
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <p className="text-sm text-[#9ca3af] mb-1">Active Subscribers</p>
            <p className="text-3xl font-bold text-green-400">
              {subscribers.filter(s => s.status === 'ACTIVE').length}
            </p>
          </div>
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <p className="text-sm text-[#9ca3af] mb-1">Free Subscribers</p>
            <p className="text-3xl font-bold text-[#e2e8f0]">{subscribers.length}</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0f172a] border-b border-[#334155]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Subscriber
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
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-[#0f172a] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <img
                          src={subscriber.avatar}
                          alt={subscriber.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-[#e2e8f0]">{subscriber.name}</span>
                          {subscriber.pinned && <span className="text-lg">📌</span>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e2e8f0]">
                      {subscriber.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#9ca3af]">
                      {subscriber.interval}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e2e8f0]">
                      {subscriber.endsAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(subscriber.status)}`}>
                        {subscriber.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default MySubscribersPage
