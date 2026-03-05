import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { CreditCard, Wallet, Building, Info } from 'lucide-react'

type PayoutMethod = 'paypal' | 'bank' | null

const PayoutMethodPage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<PayoutMethod>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedMethod) {
      alert('Please select a payout method')
      return
    }
    console.log('Setting payout method...', selectedMethod)
  }

  return (
    <SettingsLayout>
      <div className="max-w-3xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <CreditCard size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Payout method</h1>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-[#9ca3af]">Default payout method:</p>
            <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">
              None
            </span>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-[#6366f1] rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <Info size={24} className="text-white flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium mb-2">
                Select the payment method you want to receive your earnings.
              </p>
              <p className="text-blue-100 text-sm">
                * Your payment would be available in <span className="font-bold">5 business day(s)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Payment Methods */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">Select Payout Method</h3>
            <div className="space-y-4">
              {/* PayPal */}
              <label className="flex items-start space-x-4 p-5 bg-[#0f172a] border-2 border-[#334155] rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                <input
                  type="radio"
                  name="payoutMethod"
                  value="paypal"
                  checked={selectedMethod === 'paypal'}
                  onChange={(e) => setSelectedMethod(e.target.value as PayoutMethod)}
                  className="mt-1.5 w-5 h-5"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Wallet size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#e2e8f0] text-lg">PayPal</h4>
                      <p className="text-sm text-[#9ca3af]">Fast and secure payments</p>
                    </div>
                  </div>
                  <p className="text-sm text-yellow-400 font-medium">
                    * Some processor fees may apply
                  </p>
                </div>
              </label>

              {/* Bank Transfer */}
              <label className="flex items-start space-x-4 p-5 bg-[#0f172a] border-2 border-[#334155] rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                <input
                  type="radio"
                  name="payoutMethod"
                  value="bank"
                  checked={selectedMethod === 'bank'}
                  onChange={(e) => setSelectedMethod(e.target.value as PayoutMethod)}
                  className="mt-1.5 w-5 h-5"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Building size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#e2e8f0] text-lg">Bank Transfer</h4>
                      <p className="text-sm text-[#9ca3af]">Direct deposit to your bank account</p>
                    </div>
                  </div>
                  <p className="text-sm text-yellow-400 font-medium">
                    * Some processor fees may apply
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Additional Info */}
          {selectedMethod === 'paypal' && (
            <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">PayPal Account Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                    PayPal Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'bank' && (
            <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">Bank Account Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    placeholder="Bank of England"
                    className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      placeholder="12345678"
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                      Sort Code
                    </label>
                    <input
                      type="text"
                      placeholder="12-34-56"
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-400">
              <strong>Note:</strong> Make sure all your payment details are correct.
              Incorrect information may result in delayed or failed payments.
              Payment processing fees are deducted from your earnings.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedMethod}
          >
            Save payout method
          </button>
        </form>
      </div>
    </SettingsLayout>
  )
}

export default PayoutMethodPage
