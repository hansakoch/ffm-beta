import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { CreditCard, Lock, Plus } from 'lucide-react'

const MyCardsPage: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <SettingsLayout>
      <div className="max-w-3xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <CreditCard size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">My cards</h1>
          </div>
          <p className="text-[#9ca3af]">Cards available in your account</p>
        </div>

        {/* Empty State */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-[#334155] rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard size={48} className="text-[#9ca3af]" />
            </div>
            <h2 className="text-xl font-bold text-[#e2e8f0] mb-2">
              No Payment Cards Added
            </h2>
            <p className="text-[#9ca3af] mb-6">
              You don't have any payment card added
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Add</span>
            </button>
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
          <div className="flex items-start space-x-3">
            <Lock size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-400">
              <strong>Security Notice:</strong> Your private card number will never touch our servers.
              All payment information is securely processed through our PCI-compliant payment providers.
            </p>
          </div>
        </div>

        {/* Add Card Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1e293b] border border-[#334155] rounded-lg max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#e2e8f0]">Add New Card</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-[#9ca3af] hover:text-[#e2e8f0] transition-colors"
                >
                  ✕
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mt-4">
                  <div className="flex items-start space-x-2">
                    <Lock size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-400">
                      Your card information is encrypted and stored securely
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 bg-[#334155] hover:bg-[#475569] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault()
                      console.log('Adding card...')
                      setShowAddModal(false)
                    }}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Add Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-[#1e293b] border border-[#334155] rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#e2e8f0] mb-4">Why Add a Card?</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Quick Payments:</span> Make instant payments for subscriptions and tips
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Auto-Renewal:</span> Never miss your favorite creator's content
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm">✓</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                <span className="font-bold text-[#e2e8f0]">Secure Storage:</span> Your card details are encrypted and never stored on our servers
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default MyCardsPage
