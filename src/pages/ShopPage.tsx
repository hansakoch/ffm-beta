import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { ShoppingBag, Plus, Filter } from 'lucide-react'

const ShopPage = () => {
  const [sortBy, setSortBy] = useState('popular')

  const products = [
    {
      id: 1,
      name: 'FFM Premium Baseball Cap',
      price: '£25.00',
      image: '/ffm-gold-flat-png.png',
      creator: 'FansFollow Official',
      sales: 234,
      rating: 4.8
    },
    {
      id: 2,
      name: 'FFM Classic T-Shirt',
      price: '£19.99',
      image: '/ffm-blue-flat-png.png',
      creator: 'FansFollow Official',
      sales: 456,
      rating: 4.9
    },
    {
      id: 3,
      name: 'FFM Elite Hoodie',
      price: '£45.00',
      image: '/ffm-silver-flat-png.png',
      creator: 'FansFollow Official',
      sales: 189,
      rating: 4.7
    },
    {
      id: 4,
      name: 'FFM Snapback Cap - Black',
      price: '£22.00',
      image: '/slanted-ffm-black-.png',
      creator: 'FansFollow Official',
      sales: 312,
      rating: 4.8
    },
    {
      id: 5,
      name: 'FFM Performance Tee',
      price: '£28.00',
      image: '/3d-logo-png.png',
      creator: 'FansFollow Official',
      sales: 267,
      rating: 4.9
    },
    {
      id: 6,
      name: 'FFM Premium Cap - Blue',
      price: '£25.00',
      image: '/slanted-ffm-blue.png',
      creator: 'FansFollow Official',
      sales: 198,
      rating: 4.6
    }
  ]

  return (
    <DashboardLayout>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 px-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <ShoppingBag size={28} className="text-purple-500" />
                <h1 className="text-3xl font-bold text-[#e2e8f0]">
                  Shop - Explore products from our creators
                </h1>
              </div>
              <button className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-6 py-3 rounded-lg transition-opacity flex items-center space-x-2">
                <Plus size={20} />
                <span>Add New</span>
              </button>
            </div>
            <p className="text-[#9ca3af]">
              Browse exclusive merchandise and products from your favorite creators
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex items-center justify-between mb-6 bg-[#1e293b] rounded-xl border border-[#334155] p-4">
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-[#9ca3af]" />
              <button className="px-4 py-2 bg-[#334155] text-[#e2e8f0] rounded-lg hover:bg-[#475569] transition-colors">
                All Categories
              </button>
              <button className="px-4 py-2 text-[#9ca3af] hover:text-[#e2e8f0] transition-colors">
                Apparel
              </button>
              <button className="px-4 py-2 text-[#9ca3af] hover:text-[#e2e8f0] transition-colors">
                Accessories
              </button>
              <button className="px-4 py-2 text-[#9ca3af] hover:text-[#e2e8f0] transition-colors">
                Digital Products
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#9ca3af] text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#334155] text-[#e2e8f0] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden hover:border-purple-500 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="relative bg-[#0f172a] h-64 flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#e2e8f0] mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#9ca3af] mb-3">{product.creator}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold text-[#f97316]">{product.price}</div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-semibold text-[#e2e8f0]">
                        {product.rating}
                      </span>
                      <span className="text-sm text-[#9ca3af]">
                        ({product.sales} sold)
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold py-3 rounded-lg transition-opacity">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}

export default ShopPage
