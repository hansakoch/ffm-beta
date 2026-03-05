import React from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { DollarSign, TrendingUp, Package, Calendar } from 'lucide-react'

const SalesPage = () => {
  const sales: any[] = []

  return (
    <SettingsLayout>
      <div>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#e2e8f0] mb-2">Sales</h1>
          <p className="text-[#9ca3af]">
            Track your product sales and revenue
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <DollarSign size={20} className="text-green-400" />
              <span className="text-[#9ca3af] text-sm">Total Revenue</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">£0.00</p>
            <p className="text-xs text-[#9ca3af] mt-1">All time</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <TrendingUp size={20} className="text-blue-400" />
              <span className="text-[#9ca3af] text-sm">This Month</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">£0.00</p>
            <p className="text-xs text-[#9ca3af] mt-1">0 sales</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Package size={20} className="text-purple-400" />
              <span className="text-[#9ca3af] text-sm">Total Orders</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">0</p>
            <p className="text-xs text-[#9ca3af] mt-1">All time</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Calendar size={20} className="text-orange-400" />
              <span className="text-[#9ca3af] text-sm">Avg. Order Value</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">£0.00</p>
            <p className="text-xs text-[#9ca3af] mt-1">No data</p>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#334155] rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign size={40} className="text-[#9ca3af]" />
            </div>
            <h3 className="text-2xl font-bold text-[#e2e8f0] mb-3">
              No results have been found
            </h3>
            <p className="text-[#9ca3af] mb-6 max-w-md mx-auto">
              You haven't made any sales yet. Create products and start promoting them to your followers to see sales data here.
            </p>
            <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-opacity">
              Create Your First Product
            </button>
          </div>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default SalesPage
