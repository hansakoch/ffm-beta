import React, { useState, useEffect } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { Wallet, CreditCard, Building } from 'lucide-react'

type PaymentMethod = 'paypal' | 'card' | 'bank'

const WalletPage: React.FC = () => {
  const balance = 23.20
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('paypal')
  const [transactionFee, setTransactionFee] = useState(0)
  const [total, setTotal] = useState(0)

  const calculateFees = () => {
    const amountValue = parseFloat(amount) || 0
    let fee = 0

    if (paymentMethod === 'paypal') {
      fee = (amountValue * 0.054) + 0.45
    } else if (paymentMethod === 'card') {
      fee = amountValue * 0.029
    }

    setTransactionFee(fee)
    setTotal(amountValue + fee)
  }

  useEffect(() => {
    calculateFees()
  }, [amount, paymentMethod])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amountValue = parseFloat(amount) || 0
    if (amountValue < 10 || amountValue > 5000) {
      alert('Amount must be between £10 and £5000')
      return
    }
    console.log('Adding funds...', { amount: amountValue, paymentMethod, transactionFee, total })
  }

  return (
    <SettingsLayout>
      <div className="max-w-3xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Wallet size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Wallet</h1>
          </div>
          <p className="text-[#9ca3af]">
            Add funds to your wallet to use for subscriptions, tips, and more
          </p>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm mb-1">Available Balance</p>
              <h2 className="text-3xl font-bold text-white">£{balance.toFixed(2)} GBP</h2>
              <p className="text-blue-100 text-sm mt-1">Funds available in your account</p>
            </div>
            <Wallet size={48} className="text-white opacity-50" />
          </div>
        </div>

        {/* Add Funds Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Input */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <label className="block text-sm font-medium text-[#e2e8f0] mb-3">
              Amount (Minimum £10 - Maximum £5000)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e2e8f0] font-bold text-lg">
                £
              </span>
              <input
                type="number"
                min="10"
                max="5000"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full pl-10 pr-4 py-4 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] text-lg placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Fee Display */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#9ca3af]">Amount</span>
                <span className="text-[#e2e8f0] font-bold">
                  £{parseFloat(amount) || 0}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#9ca3af]">Transaction Fee</span>
                <span className="text-[#e2e8f0] font-bold">
                  £{transactionFee.toFixed(2)}
                </span>
              </div>
              <div className="border-t border-[#334155] pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#e2e8f0] font-bold text-lg">Total</span>
                  <span className="text-[#e2e8f0] font-bold text-lg">
                    £{total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">Payment Method</h3>
            <div className="space-y-4">
              {/* PayPal */}
              <label className="flex items-start space-x-3 p-4 bg-[#0f172a] border border-[#334155] rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <Wallet size={20} className="text-[#e2e8f0]" />
                    <span className="font-bold text-[#e2e8f0]">PayPal</span>
                  </div>
                  <p className="text-sm text-[#9ca3af]">Fee: 5.4% + £0.45</p>
                </div>
              </label>

              {/* Stripe Card */}
              <label className="flex items-start space-x-3 p-4 bg-[#0f172a] border border-[#334155] rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <CreditCard size={20} className="text-[#e2e8f0]" />
                    <span className="font-bold text-[#e2e8f0]">Debit / Credit Card</span>
                  </div>
                  <p className="text-sm text-[#9ca3af]">Stripe - Fee: 2.9%</p>
                </div>
              </label>

              {/* Bank Transfer */}
              <label className="flex items-start space-x-3 p-4 bg-[#0f172a] border border-[#334155] rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <Building size={20} className="text-[#e2e8f0]" />
                    <span className="font-bold text-[#e2e8f0]">Bank Transfer</span>
                  </div>
                  <p className="text-sm text-[#9ca3af]">No processing fee</p>
                </div>
              </label>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-400">
              <strong>Note:</strong> Funds will be available immediately after successful payment.
              All transactions are processed securely.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Add funds
          </button>
        </form>
      </div>
    </SettingsLayout>
  )
}

export default WalletPage
