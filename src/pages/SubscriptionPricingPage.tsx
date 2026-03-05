import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { CreditCard } from 'lucide-react'

interface PricingTier {
  period: string
  price: string
  enabled: boolean
  required?: boolean
}

const SubscriptionPricingPage: React.FC = () => {
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([
    { period: 'Weekly', price: '0.00', enabled: false },
    { period: 'Monthly', price: '0.00', enabled: true, required: true },
    { period: '3 months', price: '0.00', enabled: false },
    { period: '6 months', price: '0.00', enabled: false },
    { period: '12 months', price: '0.00', enabled: false }
  ])

  const [freeSubscription, setFreeSubscription] = useState(false)

  const handlePriceChange = (index: number, value: string) => {
    const newTiers = [...pricingTiers]
    newTiers[index].price = value
    setPricingTiers(newTiers)
  }

  const handleToggle = (index: number) => {
    if (pricingTiers[index].required) return
    const newTiers = [...pricingTiers]
    newTiers[index].enabled = !newTiers[index].enabled
    setPricingTiers(newTiers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Saving pricing...', { pricingTiers, freeSubscription })
  }

  return (
    <SettingsLayout>
      <div className="max-w-3xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <CreditCard size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Subscription price</h1>
          </div>
          <p className="text-[#9ca3af]">Set up your subscription</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pricing Tiers */}
          {pricingTiers.map((tier, index) => (
            <div key={tier.period} className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#e2e8f0]">{tier.period}</h3>
                  {tier.required && (
                    <span className="text-xs text-[#9ca3af]">Required</span>
                  )}
                </div>
                {!tier.required && (
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className={`relative w-14 h-7 rounded-full transition-colors ${
                      tier.enabled ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                        tier.enabled ? 'translate-x-7' : ''
                      }`}
                    />
                  </button>
                )}
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e2e8f0] font-bold">
                  £
                </span>
                <input
                  type="text"
                  value={tier.price}
                  onChange={(e) => handlePriceChange(index, e.target.value)}
                  disabled={!tier.enabled}
                  placeholder="0.00"
                  className={`w-full pl-10 pr-4 py-3 border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    tier.enabled ? 'bg-[#0f172a]' : 'bg-[#334155] cursor-not-allowed'
                  }`}
                />
              </div>

              {tier.enabled && (
                <div className="mt-3">
                  <p className="text-xs text-[#9ca3af]">
                    Status: <span className="text-green-400 font-medium">Active</span>
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Free Subscription Toggle */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#e2e8f0] mb-1">Free Subscription</h3>
                <p className="text-sm text-[#9ca3af]">
                  Allow users to subscribe to your content for free
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFreeSubscription(!freeSubscription)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  freeSubscription ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    freeSubscription ? 'translate-x-7' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-400">
              <strong>Note:</strong> Monthly subscription is required. All other subscription periods are optional.
              Setting competitive pricing can help attract and retain more subscribers.
            </p>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Save changes
          </button>
        </form>
      </div>
    </SettingsLayout>
  )
}

export default SubscriptionPricingPage
