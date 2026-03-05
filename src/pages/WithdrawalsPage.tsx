import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { DollarSign, AlertCircle, Clock } from 'lucide-react'

const WithdrawalsPage: React.FC = () => {
  const balance = 146.25
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amountValue = parseFloat(amount) || 0
    if (amountValue < 50 || amountValue > 500) {
      alert('Amount must be between £50 and £500')
      return
    }
    if (amountValue > balance) {
      alert('Insufficient balance')
      return
    }
    console.log('Making withdrawal...', { amount: amountValue })
  }

  return (
    <SettingsLayout>
      <div className="max-w-3xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <DollarSign size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Withdrawals</h1>
          </div>
          <p className="text-[#9ca3af]">History withdrawals</p>
        </div>

        {/* Warning Banner */}
        <div className="bg-[#fbbf24] rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <AlertCircle size={24} className="text-[#78350f] flex-shrink-0 mt-0.5" />
            <p className="text-[#78350f] font-medium">
              Please select a Payout method
            </p>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm mb-1">Available Balance</p>
              <h2 className="text-3xl font-bold text-white">£{balance.toFixed(2)} GBP</h2>
            </div>
            <DollarSign size={48} className="text-white opacity-50" />
          </div>
        </div>

        {/* Withdrawal Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Input */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Amount
            </label>
            <div className="relative mb-3">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e2e8f0] font-bold text-lg">
                £
              </span>
              <input
                type="number"
                min="50"
                max="500"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full pl-10 pr-4 py-4 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] text-lg placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <p className="text-sm text-[#9ca3af]">
              Amount minimum withdrawal <span className="font-bold text-[#e2e8f0]">£50 GBP</span> - (Maximum) <span className="font-bold text-[#e2e8f0]">£500 GBP</span>
            </p>
          </div>

          {/* Processing Time Info */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Clock size={24} className="text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#e2e8f0] mb-2">Processing Time</h3>
                <p className="text-sm text-[#9ca3af]">
                  * Your payment would be available in <span className="font-bold text-[#e2e8f0]">5 business day(s)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-400">
              <strong>Important:</strong> Make sure you have selected a payout method before making a withdrawal.
              Processing times may vary depending on your selected payment method.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Make withdrawal
          </button>
        </form>

        {/* Withdrawal History Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-[#e2e8f0] mb-4">Withdrawal History</h2>
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <div className="text-center py-8">
              <DollarSign size={48} className="mx-auto mb-4 text-[#9ca3af]" />
              <p className="text-[#9ca3af]">No withdrawal history available</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default WithdrawalsPage
