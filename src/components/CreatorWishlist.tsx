import React, { useState } from 'react'
import { 
  Gift, 
  Plus, 
  ExternalLink, 
  Heart, 
  Star, 
  ShoppingBag,
  Edit,
  Trash2,
  Copy,
  Check
} from 'lucide-react'

interface WishlistItem {
  id: string
  title: string
  description: string
  price: string
  imageUrl: string
  amazonLink: string
  category: string
  priority: 'low' | 'medium' | 'high'
  isPurchased: boolean
  purchasedBy?: string
  purchaseDate?: string
  notes?: string
}

interface CreatorWishlistProps {
  creatorId: string
  isOwner?: boolean
  creatorName: string
}

const CreatorWishlist: React.FC<CreatorWishlistProps> = ({ 
  creatorId, 
  isOwner = false, 
  creatorName 
}) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: '1',
      title: 'Optimum Nutrition Whey Protein',
      description: 'Gold Standard 100% Whey Protein Powder - 5lb',
      price: '£45.99',
      imageUrl: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
      amazonLink: 'https://amazon.co.uk/dp/B000QSNYGI',
      category: 'Supplements',
      priority: 'high',
      isPurchased: false
    },
    {
      id: '2',
      title: 'Premium Yoga Mat',
      description: 'High-quality non-slip yoga mat for fitness and training',
      category: 'Equipment',
      price: '£89.99',
      imageUrl: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400',
      amazonLink: 'https://amazon.co.uk/dp/B08YOGA123',
      priority: 'high',
      isPurchased: false,
      notes: 'Need a high-quality mat for my morning stretching routine and yoga videos'
    },
    {
      id: '3',
      title: 'Meal Prep Containers Set',
      description: 'BPA-free meal prep containers for weekly nutrition planning',
      category: 'Nutrition',
      price: '£34.99',
      imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      amazonLink: 'https://amazon.co.uk/dp/B07MEAL123',
      priority: 'medium',
      isPurchased: false,
      notes: 'Perfect for my weekly meal prep content and personal nutrition goals'
    },
    {
      id: '4',
      title: 'Professional Ring Light',
      description: '18-inch LED ring light with tripod for content creation',
      category: 'Equipment',
      price: '£129.99',
      imageUrl: 'https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=400',
      amazonLink: 'https://amazon.co.uk/dp/B08LIGHT99',
      priority: 'high',
      isPurchased: true,
      purchasedBy: 'Sarah K.',
      purchaseDate: '1 week ago',
      notes: 'Essential for creating high-quality workout videos with perfect lighting'
    },
    {
      id: '5',
      title: 'Wireless Microphone System',
      description: 'Professional wireless lavalier microphone for video recording',
      category: 'Equipment',
      price: '£199.99',
      imageUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=400',
      amazonLink: 'https://amazon.co.uk/dp/B08MIC789',
      priority: 'medium',
      isPurchased: false,
      notes: 'Need crystal clear audio for my training videos and live streams'
    }
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [copiedLink, setCopiedLink] = useState<string | null>(null)

  const handleCopyLink = (link: string, itemId: string) => {
    navigator.clipboard.writeText(link)
    setCopiedLink(itemId)
    setTimeout(() => setCopiedLink(null), 2000)
  }

  const handlePurchaseGift = (itemId: string) => {
    // In real app, this would integrate with payment system
    console.log('Purchasing gift:', itemId)
    // For demo, mark as purchased
    setWishlistItems(prev => 
      prev.map(item => 
        item.id === itemId 
          ? { ...item, isPurchased: true, purchasedBy: 'You', purchaseDate: 'Just now' }
          : item
      )
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20'
      case 'medium': return 'text-yellow-400 bg-yellow-500/20'
      case 'low': return 'text-green-400 bg-green-500/20'
      default: return 'text-gray-400 bg-gray-500/20'
    }
  }

  const unpurchasedItems = wishlistItems.filter(item => !item.isPurchased)
  const purchasedItems = wishlistItems.filter(item => item.isPurchased)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
            <Gift className="mr-3 text-purple-400" />
            {isOwner ? 'My Wishlist' : `${creatorName}'s Wishlist`}
          </h2>
          <p className="text-gray-300">
            {isOwner 
              ? 'Add items you need for your fitness journey - fans love supporting creators!'
              : 'Support your favorite creator by purchasing items from their wishlist'
            }
          </p>
        </div>
        
        {isOwner && (
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Add Item</span>
          </button>
        )}
      </div>

      {/* Wishlist Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-purple-400 mb-2">{wishlistItems.length}</div>
          <div className="text-gray-300">Total Items</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-green-400 mb-2">{purchasedItems.length}</div>
          <div className="text-gray-300">Gifts Received</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-orange-400 mb-2">{unpurchasedItems.length}</div>
          <div className="text-gray-300">Still Needed</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-blue-400 mb-2">
            £{wishlistItems.reduce((sum, item) => sum + parseFloat(item.price.replace('£', '')), 0).toFixed(2)}
          </div>
          <div className="text-gray-300">Total Value</div>
        </div>
      </div>

      {/* Unpurchased Items */}
      {unpurchasedItems.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Available Items</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unpurchasedItems.map((item) => (
              <div key={item.id} className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                {/* Item Image */}
                <div className="aspect-square relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Priority Badge */}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold ${getPriorityColor(item.priority)}`}>
                    {item.priority.toUpperCase()}
                  </div>
                  
                  {/* Category */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {item.category}
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-6">
                  <h4 className="text-white font-bold text-lg mb-2 line-clamp-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{item.description}</p>
                  
                  {item.notes && (
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 mb-4">
                      <p className="text-purple-200 text-sm italic">"{item.notes}"</p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-green-400 font-bold text-xl">{item.price}</div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleCopyLink(item.amazonLink, item.id)}
                        className="p-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        {copiedLink === item.id ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-gray-400" />
                        )}
                      </button>
                      <a
                        href={item.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} className="text-gray-400" />
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    {!isOwner && (
                      <button
                        onClick={() => handlePurchaseGift(item.id)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Gift size={18} />
                        <span>Buy as Gift</span>
                      </button>
                    )}
                    
                    <a
                      href={item.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-orange-500/30"
                    >
                      <ShoppingBag size={16} />
                      <span>View on Amazon</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Purchased Items */}
      {purchasedItems.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Gifts Received ❤️</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchasedItems.map((item) => (
              <div key={item.id} className="bg-gray-800/50 rounded-2xl border border-green-500/30 overflow-hidden">
                {/* Item Image with Purchased Overlay */}
                <div className="aspect-square relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-75"
                  />
                  
                  <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                      <Heart size={16} className="fill-current" />
                      <span>GIFT RECEIVED</span>
                    </div>
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-6">
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-sm mb-1">
                      Gift from {item.purchasedBy}
                    </div>
                    <div className="text-green-300 text-sm">{item.purchaseDate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddModal && (
        <AddWishlistItemModal 
          onClose={() => setShowAddModal(false)}
          onAdd={(newItem) => {
            setWishlistItems(prev => [...prev, { ...newItem, id: Date.now().toString() }])
            setShowAddModal(false)
          }}
        />
      )}
    </div>
  )
}

// Add Wishlist Item Modal
const AddWishlistItemModal: React.FC<{
  onClose: () => void
  onAdd: (item: Omit<WishlistItem, 'id' | 'isPurchased'>) => void
}> = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
    amazonLink: '',
    category: 'Supplements',
    priority: 'medium' as 'low' | 'medium' | 'high',
    notes: ''
  })

  const categories = ['Supplements', 'Equipment', 'Apparel', 'Books', 'Accessories', 'Other']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(formData)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Add Wishlist Item</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Item Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 text-white"
              placeholder="e.g., Optimum Nutrition Whey Protein"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 text-white resize-none"
              rows={3}
              placeholder="Brief description of the item..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Price
              </label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="£29.99"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Amazon Link
            </label>
            <input
              type="url"
              value={formData.amazonLink}
              onChange={(e) => setFormData(prev => ({ ...prev, amazonLink: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 text-white"
              placeholder="https://amazon.co.uk/dp/..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 text-white"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Priority
            </label>
            <div className="flex space-x-4">
              {(['low', 'medium', 'high'] as const).map((priority) => (
                <label key={priority} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={formData.priority === priority}
                    onChange={() => setFormData(prev => ({ ...prev, priority }))}
                    className="text-purple-500 focus:ring-purple-500"
                  />
                  <span className="text-gray-300 capitalize">{priority}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Personal Note (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 text-white resize-none"
              rows={2}
              placeholder="Why you need this item..."
            />
          </div>

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
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300"
            >
              Add to Wishlist
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatorWishlist