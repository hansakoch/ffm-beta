import React from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { Plus, Package, Edit, Trash2 } from 'lucide-react'

const MyProductsPage = () => {
  const products = [
    {
      id: '001',
      name: 'FFM Premium Baseball Cap',
      type: 'Physical',
      price: '£25.00',
      sales: 234,
      date: '2024-12-15',
      status: 'Active',
      image: '/ffm-gold-flat-png.png'
    },
    {
      id: '002',
      name: 'FFM Classic T-Shirt',
      type: 'Physical',
      price: '£19.99',
      sales: 456,
      date: '2024-12-10',
      status: 'Active',
      image: '/ffm-blue-flat-png.png'
    },
    {
      id: '003',
      name: 'FFM Elite Hoodie',
      type: 'Physical',
      price: '£45.00',
      sales: 189,
      date: '2024-12-05',
      status: 'Active',
      image: '/ffm-silver-flat-png.png'
    },
    {
      id: '004',
      name: 'Exclusive Training Program',
      type: 'Digital',
      price: '£99.00',
      sales: 78,
      date: '2024-11-28',
      status: 'Active',
      image: null
    }
  ]

  return (
    <SettingsLayout>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#e2e8f0] mb-2">My Products</h1>
            <p className="text-[#9ca3af]">
              Manage your merchandise and digital products
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-opacity flex items-center space-x-2">
            <Plus size={20} />
            <span>Add New</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Package size={20} className="text-blue-400" />
              <span className="text-[#9ca3af] text-sm">Total Products</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">{products.length}</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-[#9ca3af] text-sm">Total Sales</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">
              {products.reduce((sum, p) => sum + p.sales, 0)}
            </p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-[#9ca3af] text-sm">Revenue</span>
            </div>
            <p className="text-3xl font-bold text-green-400">£18,432</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-[#9ca3af] text-sm">Active Products</span>
            </div>
            <p className="text-3xl font-bold text-[#e2e8f0]">
              {products.filter(p => p.status === 'Active').length}
            </p>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0f172a] border-b border-[#334155]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Sales
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#334155]">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-[#0f172a] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#0f172a] rounded-lg flex items-center justify-center overflow-hidden">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain p-1"
                            />
                          ) : (
                            <Package size={20} className="text-[#9ca3af]" />
                          )}
                        </div>
                        <span className="font-semibold text-[#e2e8f0]">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#9ca3af]">{product.id}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.type === 'Physical'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {product.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-[#e2e8f0]">{product.price}</td>
                    <td className="px-6 py-4 text-[#e2e8f0]">{product.sales}</td>
                    <td className="px-6 py-4 text-[#9ca3af]">{product.date}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-[#334155] rounded-lg transition-colors">
                          <Edit size={16} className="text-blue-400" />
                        </button>
                        <button className="p-2 hover:bg-[#334155] rounded-lg transition-colors">
                          <Trash2 size={16} className="text-red-400" />
                        </button>
                      </div>
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

export default MyProductsPage
