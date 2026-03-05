import React, { useState } from 'react'
import { 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  Star, 
  Plus,
  Edit,
  Eye,
  BarChart3,
  Target,
  Award,
  Zap,
  Link,
  Copy,
  ExternalLink
} from 'lucide-react'

interface AffiliateProduct {
  id: string
  name: string
  brand: string
  category: string
  price: number
  commission: number
  commissionRate: number
  description: string
  image: string
  affiliateLink: string
  clicks: number
  conversions: number
  earnings: number
  rating: number
  inStock: boolean
  featured: boolean
}

const AffiliateMarketingSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<AffiliateProduct | null>(null)

  // Mock affiliate products data
  const affiliateProducts: AffiliateProduct[] = [
    {
      id: '1',
      name: 'Whey Protein Isolate',
      brand: 'Optimum Nutrition',
      category: 'Supplements',
      price: 45.99,
      commission: 9.20,
      commissionRate: 20,
      description: 'Premium whey protein for muscle building and recovery',
      image: '🥤',
      affiliateLink: 'https://affiliate.link/protein-powder',
      clicks: 234,
      conversions: 23,
      earnings: 211.60,
      rating: 4.8,
      inStock: true,
      featured: true
    },
    {
      id: '2', 
      name: 'Premium Creatine Monohydrate',
      brand: 'Optimum Nutrition',
      category: 'Supplements',
      price: 24.99,
      commission: 7.50,
      commissionRate: 30,
      description: 'Pure creatine for strength and power gains',
      image: '💊',
      affiliateLink: 'https://affiliate.link/creatine',
      clicks: 189,
      conversions: 34,
      earnings: 255.00,
      rating: 4.7,
      inStock: true,
      featured: true
    },
    {
      id: '3',
      name: 'Resistance Bands Set',
      brand: 'Bodylastics',
      category: 'Equipment',
      price: 39.99,
      commission: 12.00,
      commissionRate: 30,
      description: 'Complete resistance training system',
      image: '🏋️',
      affiliateLink: 'https://affiliate.link/bands',
      clicks: 145,
      conversions: 18,
      earnings: 216.00,
      rating: 4.8,
      inStock: true,
      featured: false
    },
    {
      id: '4',
      name: 'Meal Prep Containers',
      brand: 'Prep Naturals',
      category: 'Nutrition',
      price: 19.99,
      commission: 8.00,
      commissionRate: 40,
      description: 'BPA-free meal prep container set',
      image: '🥗',
      affiliateLink: 'https://affiliate.link/containers',
      clicks: 234,
      conversions: 45,
      earnings: 360.00,
      rating: 4.6,
      inStock: true,
      featured: true
    }
  ]

  const totalEarnings = affiliateProducts.reduce((sum, product) => sum + product.earnings, 0)
  const totalClicks = affiliateProducts.reduce((sum, product) => sum + product.clicks, 0)
  const totalConversions = affiliateProducts.reduce((sum, product) => sum + product.conversions, 0)
  const conversionRate = totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0

  const categories = [
    { name: 'Supplements', count: 15, earnings: 1680, icon: '💊' },
    { name: 'Equipment', count: 12, earnings: 1240, icon: '🏋️' },
    { name: 'Nutrition', count: 8, earnings: 890, icon: '🥗' },
    { name: 'Apparel', count: 6, earnings: 560, icon: '👕' },
    { name: 'Books/Courses', count: 4, earnings: 340, icon: '📚' }
  ]

  const optimizationTips = [
    {
      title: 'Your supplement recommendations convert 5x better!',
      tip: 'Create more supplement review videos and comparison posts',
      potential: '+£280/month',
      priority: 'high'
    },
    {
      title: 'Meal prep content drives 40% more affiliate sales',
      tip: 'Show your actual meal prep using recommended products',
      potential: '+£180/month',
      priority: 'medium'
    },
    {
      title: 'Equipment demos in workout videos convert 8x better',
      tip: 'Naturally showcase equipment during training videos',
      potential: '+£320/month',
      priority: 'high'
    },
    {
      title: 'Bundle recommendations increase average order value 60%',
      tip: 'Recommend product combinations (protein + creatine + shaker)',
      potential: '+£150/month',
      priority: 'medium'
    }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Revenue Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-green-400 mb-2">£{totalEarnings.toFixed(2)}</div>
          <div className="text-gray-300">Total Earnings</div>
          <div className="text-green-400 text-sm">+23% this month</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-blue-400 mb-2">{totalClicks}</div>
          <div className="text-gray-300">Total Clicks</div>
          <div className="text-blue-400 text-sm">156 this week</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-purple-400 mb-2">{totalConversions}</div>
          <div className="text-gray-300">Conversions</div>
          <div className="text-purple-400 text-sm">12 this week</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-orange-400 mb-2">{conversionRate.toFixed(1)}%</div>
          <div className="text-gray-300">Conversion Rate</div>
          <div className="text-orange-400 text-sm">Above average</div>
        </div>
      </div>

      {/* Optimization Tips */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4">💡 Affiliate Optimization Tips</h3>
        <div className="space-y-3">
          {optimizationTips.map((tip, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl border ${
                tip.priority === 'high' 
                  ? 'bg-orange-500/10 border-orange-500/30' 
                  : 'bg-blue-500/10 border-blue-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">{tip.title}</h4>
                <span className="text-green-400 font-bold">{tip.potential}</span>
              </div>
              <p className="text-gray-300 text-sm">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Categories */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4">Top Performing Categories</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-700/30 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h4 className="text-white font-bold">{category.name}</h4>
              <div className="text-gray-400 text-sm">{category.count} products</div>
              <div className="text-green-400 font-bold">£{category.earnings}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderProducts = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">My Affiliate Products</h3>
          <p className="text-gray-300">Products you recommend to earn commissions</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Add Product</span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {affiliateProducts.map((product) => (
          <div key={product.id} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all">
            {/* Product Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                  {product.image}
                </div>
                <div>
                  <h4 className="text-white font-bold">{product.name}</h4>
                  <p className="text-gray-400 text-sm">{product.brand}</p>
                </div>
              </div>
              {product.featured && (
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold">
                  FEATURED
                </span>
              )}
            </div>

            {/* Product Details */}
            <p className="text-gray-300 text-sm mb-4">{product.description}</p>

            {/* Pricing */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-white font-bold">£{product.price}</div>
                <div className="text-gray-400 text-sm">Product Price</div>
              </div>
              <div>
                <div className="text-green-400 font-bold">£{product.commission}</div>
                <div className="text-gray-400 text-sm">Your Commission</div>
              </div>
            </div>

            {/* Performance */}
            <div className="grid grid-cols-3 gap-2 mb-4 text-center">
              <div>
                <div className="text-blue-400 font-bold">{product.clicks}</div>
                <div className="text-gray-400 text-xs">Clicks</div>
              </div>
              <div>
                <div className="text-purple-400 font-bold">{product.conversions}</div>
                <div className="text-gray-400 text-xs">Sales</div>
              </div>
              <div>
                <div className="text-green-400 font-bold">£{product.earnings}</div>
                <div className="text-gray-400 text-xs">Earned</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg transition-all text-sm flex items-center justify-center space-x-1">
                <Link size={14} />
                <span>Get Link</span>
              </button>
              <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-3 rounded-lg transition-all text-sm flex items-center justify-center space-x-1">
                <BarChart3 size={14} />
                <span>Stats</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Affiliate Marketing</h2>
          <p className="text-gray-300">Earn commissions by recommending products to your fans</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              activeTab === 'products'
                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
            }`}
          >
            My Products
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'dashboard' ? renderDashboard() : renderProducts()}

      {/* Add Product Modal */}
      {showAddModal && (
        <AddProductModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  )
}

// Add Product Modal Component
const AddProductModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: 'Supplements',
    price: '',
    commissionRate: '20',
    description: '',
    affiliateLink: ''
  })

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-2xl w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Add Affiliate Product</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Product Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="e.g., Whey Protein Isolate"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Brand</label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="e.g., Optimum Nutrition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white resize-none"
              rows={3}
              placeholder="Why you recommend this product..."
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              >
                <option value="Supplements">Supplements</option>
                <option value="Equipment">Equipment</option>
                <option value="Apparel">Apparel</option>
                <option value="Nutrition">Nutrition</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-600 bg-gray-700/30 text-gray-400">£</span>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-r-xl focus:ring-2 focus:ring-orange-500 text-white"
                  placeholder="29.99"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Commission %</label>
              <div className="flex">
                <input
                  type="number"
                  value={formData.commissionRate}
                  onChange={(e) => setFormData(prev => ({ ...prev, commissionRate: e.target.value }))}
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-l-xl focus:ring-2 focus:ring-orange-500 text-white"
                  placeholder="20"
                />
                <span className="inline-flex items-center px-3 rounded-r-xl border border-l-0 border-gray-600 bg-gray-700/30 text-gray-400">%</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Affiliate Link</label>
            <input
              type="url"
              value={formData.affiliateLink}
              onChange={(e) => setFormData(prev => ({ ...prev, affiliateLink: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              placeholder="https://affiliate.link/product"
            />
          </div>

          {/* Commission Calculator */}
          {formData.price && formData.commissionRate && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
              <h4 className="text-green-400 font-bold mb-2">Commission Calculator</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Product price:</span>
                  <span className="text-white">£{formData.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Commission rate:</span>
                  <span className="text-white">{formData.commissionRate}%</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-gray-300">You earn per sale:</span>
                  <span className="text-green-400">£{(parseFloat(formData.price) * parseFloat(formData.commissionRate) / 100).toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AffiliateMarketingSystem