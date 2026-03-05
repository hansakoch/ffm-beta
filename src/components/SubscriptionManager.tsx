import React, { useState } from 'react'
import { Users, Calendar, CreditCard, MoreHorizontal, Star, AlertCircle } from 'lucide-react'

interface Subscription {
  id: string
  creator: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  subscriptionDate: string
  interval: 'Monthly' | 'Yearly'
  endDate: string
  status: 'ACTIVE' | 'CANCELLED' | 'EXPIRED'
  price: string
  nextBilling?: string
  autoRenew: boolean
}

const SubscriptionManager = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: '1',
      creator: {
        name: 'Justice Jimmy Millar',
        username: 'justice_jimmy',
        avatar: 'JM',
        verified: true
      },
      subscriptionDate: 'May 30, 2024',
      interval: 'Monthly',
      endDate: 'Aug 02, 2025',
      status: 'ACTIVE',
      price: '£19.99',
      nextBilling: 'Aug 02, 2024',
      autoRenew: true
    }
  ])

  const handleCancelSubscription = (subscriptionId: string) => {
    setSubscriptions(prev => 
      prev.map(sub => 
        sub.id === subscriptionId 
          ? { ...sub, status: 'CANCELLED' as const, autoRenew: false }
          : sub
      )
    )
  }

  const handleRenewSubscription = (subscriptionId: string) => {
    setSubscriptions(prev => 
      prev.map(sub => 
        sub.id === subscriptionId 
          ? { ...sub, status: 'ACTIVE' as const, autoRenew: true }
          : sub
      )
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3 mb-4">
            <Users size={24} className="text-blue-400" />
            <h1 className="text-2xl font-bold text-white">My subscriptions</h1>
          </div>
          <p className="text-gray-300">Users you have subscribed to your content</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Subscription Table */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-700/50 bg-gray-700/30">
            <div className="grid grid-cols-6 gap-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">
              <div>Subscribed</div>
              <div>Date</div>
              <div>Interval</div>
              <div>Ends at</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-700/50">
            {subscriptions.map((subscription) => (
              <div key={subscription.id} className="px-6 py-4 hover:bg-gray-700/20 transition-colors">
                <div className="grid grid-cols-6 gap-4 items-center">
                  {/* Creator Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {subscription.creator.avatar}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold">{subscription.creator.name}</span>
                        {subscription.creator.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <div className="text-gray-400 text-sm">@{subscription.creator.username}</div>
                    </div>
                  </div>

                  {/* Subscription Date */}
                  <div className="text-gray-300">{subscription.subscriptionDate}</div>

                  {/* Interval */}
                  <div className="text-gray-300">{subscription.interval}</div>

                  {/* End Date */}
                  <div className="text-gray-300">{subscription.endDate}</div>

                  {/* Status */}
                  <div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      subscription.status === 'ACTIVE' 
                        ? 'bg-green-500/20 text-green-400' 
                        : subscription.status === 'CANCELLED'
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {subscription.status}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <SubscriptionActions 
                      subscription={subscription}
                      onCancel={() => handleCancelSubscription(subscription.id)}
                      onRenew={() => handleRenewSubscription(subscription.id)}
                    />
                  </div>
                </div>

                {/* Additional Info */}
                {subscription.status === 'ACTIVE' && subscription.nextBilling && (
                  <div className="mt-3 ml-13 text-sm text-gray-400">
                    Next billing: {subscription.nextBilling} • {subscription.price}
                    {subscription.autoRenew && (
                      <span className="ml-2 text-green-400">• Auto-renew enabled</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Management Info */}
        <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-blue-300 font-semibold mb-2">Subscription Management</h3>
              <div className="text-blue-200 text-sm space-y-1">
                <p>• You can cancel your subscriptions at any time</p>
                <p>• Cancelled subscriptions remain active until the end of the billing period</p>
                <p>• You'll continue to have access to subscriber content until expiration</p>
                <p>• Refunds are processed according to our refund policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <div className="text-2xl font-bold text-white mb-2">{subscriptions.length}</div>
            <div className="text-gray-300">Total Subscriptions</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <div className="text-2xl font-bold text-green-400 mb-2">
              {subscriptions.filter(s => s.status === 'ACTIVE').length}
            </div>
            <div className="text-gray-300">Active Subscriptions</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <div className="text-2xl font-bold text-orange-400 mb-2">
              £{subscriptions.reduce((total, sub) => {
                if (sub.status === 'ACTIVE') {
                  return total + parseFloat(sub.price.replace('£', ''))
                }
                return total
              }, 0).toFixed(2)}
            </div>
            <div className="text-gray-300">Monthly Spending</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Subscription Actions Component
const SubscriptionActions: React.FC<{
  subscription: Subscription
  onCancel: () => void
  onRenew: () => void
}> = ({ subscription, onCancel, onRenew }) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
      >
        <MoreHorizontal size={16} />
      </button>

      {showDropdown && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-xl shadow-xl border border-gray-700 z-10">
          <div className="py-2">
            <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 transition-colors flex items-center space-x-2">
              <Users size={16} />
              <span>View Profile</span>
            </button>
            
            <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 transition-colors flex items-center space-x-2">
              <CreditCard size={16} />
              <span>Billing History</span>
            </button>
            
            <div className="border-t border-gray-700 my-1"></div>
            
            {subscription.status === 'ACTIVE' ? (
              <button 
                onClick={() => {
                  onCancel()
                  setShowDropdown(false)
                }}
                className="w-full px-4 py-2 text-left text-red-400 hover:bg-gray-700/50 transition-colors flex items-center space-x-2"
              >
                <span>❌</span>
                <span>Cancel Subscription</span>
              </button>
            ) : (
              <button 
                onClick={() => {
                  onRenew()
                  setShowDropdown(false)
                }}
                className="w-full px-4 py-2 text-left text-green-400 hover:bg-gray-700/50 transition-colors flex items-center space-x-2"
              >
                <span>🔄</span>
                <span>Renew Subscription</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SubscriptionManager