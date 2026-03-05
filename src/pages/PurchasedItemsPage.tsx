import React from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { ShoppingBag, Package, Download } from 'lucide-react'

const PurchasedItemsPage = () => {
  const purchasedItems: any[] = []

  return (
    <SettingsLayout>
      <div>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#e2e8f0] mb-2">Purchased Items</h1>
          <p className="text-[#9ca3af]">
            View and manage your purchased products and digital content
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <ShoppingBag size={20} className="text-blue-400" />
              <span className="text-[#9ca3af] text-sm">Total Purchases</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">0</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Package size={20} className="text-purple-400" />
              <span className="text-[#9ca3af] text-sm">Physical Items</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">0</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Download size={20} className="text-green-400" />
              <span className="text-[#9ca3af] text-sm">Digital Items</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">0</p>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#334155] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={40} className="text-[#9ca3af]" />
            </div>
            <h3 className="text-2xl font-bold text-[#e2e8f0] mb-3">
              No results have been found
            </h3>
            <p className="text-[#9ca3af] mb-6 max-w-md mx-auto">
              You haven't purchased any items yet. Browse the shop to discover exclusive merchandise and digital content from your favorite creators.
            </p>
            <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-opacity">
              Browse Shop
            </button>
          </div>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default PurchasedItemsPage
