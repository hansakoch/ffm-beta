import React, { useState } from 'react'
import { 
  Edit, 
  Trash2, 
  Plus, 
  Search, 
  ChevronLeft, 
  Award, 
  Star, 
  CheckCircle, 
  X
} from 'lucide-react'
import { Link } from 'react-router-dom'

const CreatorStatusPage = () => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const creatorStatuses = [
    {
      id: 2,
      title: 'Featured',
      count: 13,
      icon: '🏆',
      status: 'On',
      color: 'green'
    },
    {
      id: 3,
      title: 'Celebrity',
      count: 10,
      icon: '⭐',
      status: 'On',
      color: 'green'
    }
  ]

  const filteredStatuses = creatorStatuses.filter(status => 
    status.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/panel/admin" className="text-orange-400 hover:text-orange-300">
                <ChevronLeft size={20} />
              </Link>
              <h1 className="text-2xl font-bold text-white">Creator Status</h1>
            </div>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Plus size={18} />
              <span>Add New</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search creator statuses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Status Table */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 p-6 border-b border-gray-700/50 bg-gray-700/30">
            <div className="text-sm font-semibold text-gray-300 uppercase">ID</div>
            <div className="text-sm font-semibold text-gray-300 uppercase">Title</div>
            <div className="text-sm font-semibold text-gray-300 uppercase">Icon</div>
            <div className="text-sm font-semibold text-gray-300 uppercase">Status</div>
            <div className="text-sm font-semibold text-gray-300 uppercase">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-700/50">
            {filteredStatuses.map((status) => (
              <div key={status.id} className="grid grid-cols-5 gap-4 p-6 items-center">
                <div className="text-white">{status.id}</div>
                <div className="text-white font-medium">
                  {status.title} ({status.count})
                </div>
                <div className="text-2xl">{status.icon}</div>
                <div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-${status.color}-500/20 text-${status.color}-400`}>
                    {status.status}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-full transition-colors">
                    <Edit size={18} />
                  </button>
                  <button className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-full transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredStatuses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No creator statuses found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or add a new creator status
            </p>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Add New Status
            </button>
          </div>
        )}
      </div>

      {/* Add Status Modal */}
      {showAddModal && (
        <AddStatusModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  )
}

// Add Status Modal Component
const AddStatusModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    icon: '🏆',
    status: 'On'
  })

  const icons = ['🏆', '⭐', '👑', '🥇', '🔥', '💎', '✅', '🌟', '🎖️', '🏅']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Add Creator Status</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Status Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="e.g., Featured, Celebrity, VIP"
              required
            />
          </div>

          {/* Icon Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Icon
            </label>
            <div className="grid grid-cols-5 gap-3 mb-3">
              {icons.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, icon }))}
                  className={`w-12 h-12 text-2xl flex items-center justify-center rounded-xl transition-all ${
                    formData.icon === icon 
                      ? 'bg-gradient-to-br from-orange-500 to-purple-600 text-white' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Status
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={formData.status === 'On'}
                  onChange={() => setFormData(prev => ({ ...prev, status: 'On' }))}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-300">On</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={formData.status === 'Off'}
                  onChange={() => setFormData(prev => ({ ...prev, status: 'Off' }))}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-300">Off</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
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
              Add Status
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatorStatusPage