import React, { useState, useRef } from 'react'
import { QrCode, Download, Copy, Share, BarChart3, Settings, Plus, Eye, Trash2, Edit } from 'lucide-react'

interface QRCode {
  id: string
  name: string
  code: string
  discount: number
  scans: number
  conversions: number
  revenue: number
  createdAt: string
  isActive: boolean
}

const QRCodeGenerator = () => {
  const [qrCodes, setQrCodes] = useState<QRCode[]>([
    {
      id: '1',
      name: 'Gym Workout Special',
      code: 'BEAST2024',
      discount: 25,
      scans: 156,
      conversions: 23,
      revenue: 344.77,
      createdAt: '2024-01-15',
      isActive: true
    },
    {
      id: '2',
      name: 'New Member Discount',
      code: 'WORKOUT50',
      discount: 50,
      scans: 89,
      conversions: 12,
      revenue: 149.88,
      createdAt: '2024-01-20',
      isActive: true
    }
  ])

  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedQR, setSelectedQR] = useState<QRCode | null>(null)
  const qrRef = useRef<HTMLDivElement>(null)

  const generateQRCode = (code: string) => {
    // In a real app, this would generate an actual QR code
    // For now, we'll create a simple visual representation
    const size = 200
    const url = `https://fansfollow.me/scan?code=${code}`
    
    return (
      <div 
        ref={qrRef}
        className="w-48 h-48 bg-white rounded-xl p-4 flex items-center justify-center border-4 border-gray-800"
      >
        <div className="text-center">
          <QrCode size={120} className="text-gray-800 mx-auto mb-2" />
          <div className="text-gray-800 font-bold text-xs">{code}</div>
        </div>
      </div>
    )
  }

  const downloadQR = (qrCode: QRCode) => {
    // In a real app, this would generate and download the actual QR code image
    console.log('Downloading QR code:', qrCode.code)
    
    // Simulate download
    const link = document.createElement('a')
    link.download = `${qrCode.code}-qr-code.png`
    link.href = '#' // Would be actual image data URL
    link.click()
  }

  const copyQRLink = (qrCode: QRCode) => {
    const url = `https://fansfollow.me/scan?code=${qrCode.code}`
    navigator.clipboard.writeText(url)
    
    // Show feedback
    const button = document.querySelector(`[data-qr-id="${qrCode.id}"]`)
    if (button) {
      const originalText = button.textContent
      button.textContent = 'Copied!'
      setTimeout(() => {
        button.textContent = originalText
      }, 2000)
    }
  }

  const shareQR = (qrCode: QRCode) => {
    if (navigator.share) {
      navigator.share({
        title: `Join my exclusive content with code ${qrCode.code}`,
        text: `Get ${qrCode.discount}% off my subscription!`,
        url: `https://fansfollow.me/scan?code=${qrCode.code}`
      })
    } else {
      copyQRLink(qrCode)
    }
  }

  const totalScans = qrCodes.reduce((sum, qr) => sum + qr.scans, 0)
  const totalConversions = qrCodes.reduce((sum, qr) => sum + qr.conversions, 0)
  const totalRevenue = qrCodes.reduce((sum, qr) => sum + qr.revenue, 0)
  const conversionRate = totalScans > 0 ? (totalConversions / totalScans) * 100 : 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Quick Join QR Codes</h2>
          <p className="text-gray-300">Create QR codes for instant fan access with exclusive discounts</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Create QR Code</span>
        </button>
      </div>

      {/* Analytics Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-blue-400 mb-2">{totalScans}</div>
          <div className="text-gray-300">Total Scans</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-green-400 mb-2">{totalConversions}</div>
          <div className="text-gray-300">Conversions</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-purple-400 mb-2">{conversionRate.toFixed(1)}%</div>
          <div className="text-gray-300">Conversion Rate</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-orange-400 mb-2">£{totalRevenue.toFixed(2)}</div>
          <div className="text-gray-300">Revenue Generated</div>
        </div>
      </div>

      {/* QR Codes List */}
      <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <h3 className="text-xl font-bold text-white">Your QR Codes</h3>
        </div>

        <div className="p-6">
          {qrCodes.length === 0 ? (
            <div className="text-center py-12">
              <QrCode size={64} className="text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">No QR codes yet</h4>
              <p className="text-gray-400 mb-6">Create your first QR code to start converting fans instantly</p>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl"
              >
                Create Your First QR Code
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {qrCodes.map((qrCode) => (
                <div key={qrCode.id} className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-xl font-bold text-white">{qrCode.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          qrCode.isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {qrCode.isActive ? 'ACTIVE' : 'INACTIVE'}
                        </span>
                      </div>
                      <div className="text-gray-300 mb-2">
                        Code: <span className="font-mono text-orange-400">{qrCode.code}</span>
                      </div>
                      <div className="text-gray-300">
                        Discount: <span className="text-green-400 font-bold">{qrCode.discount}% off</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-xl">£{qrCode.revenue.toFixed(2)}</div>
                      <div className="text-gray-400 text-sm">revenue</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-600/20 rounded-lg">
                    <div className="text-center">
                      <div className="text-blue-400 font-bold">{qrCode.scans}</div>
                      <div className="text-gray-400 text-sm">Scans</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-bold">{qrCode.conversions}</div>
                      <div className="text-gray-400 text-sm">Conversions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-bold">
                        {qrCode.scans > 0 ? ((qrCode.conversions / qrCode.scans) * 100).toFixed(1) : 0}%
                      </div>
                      <div className="text-gray-400 text-sm">Rate</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedQR(qrCode)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center space-x-2"
                    >
                      <Eye size={16} />
                      <span>View QR</span>
                    </button>
                    <button
                      onClick={() => downloadQR(qrCode)}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center space-x-2"
                    >
                      <Download size={16} />
                      <span>Download</span>
                    </button>
                    <button
                      data-qr-id={qrCode.id}
                      onClick={() => copyQRLink(qrCode)}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center space-x-2"
                    >
                      <Copy size={16} />
                      <span>Copy Link</span>
                    </button>
                    <button
                      onClick={() => shareQR(qrCode)}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center space-x-2"
                    >
                      <Share size={16} />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Create QR Modal */}
      {showCreateModal && (
        <CreateQRModal 
          onClose={() => setShowCreateModal(false)}
          onSave={(newQR) => {
            setQrCodes(prev => [...prev, { ...newQR, id: Date.now().toString() }])
            setShowCreateModal(false)
          }}
        />
      )}

      {/* QR Preview Modal */}
      {selectedQR && (
        <QRPreviewModal 
          qrCode={selectedQR}
          onClose={() => setSelectedQR(null)}
          onDownload={() => downloadQR(selectedQR)}
          onShare={() => shareQR(selectedQR)}
        />
      )}
    </div>
  )
}

// Create QR Modal Component
const CreateQRModal: React.FC<{
  onClose: () => void
  onSave: (qrCode: Omit<QRCode, 'id'>) => void
}> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    discount: 25
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newQR: Omit<QRCode, 'id'> = {
      name: formData.name,
      code: formData.code.toUpperCase(),
      discount: formData.discount,
      scans: 0,
      conversions: 0,
      revenue: 0,
      createdAt: new Date().toISOString().split('T')[0],
      isActive: true
    }
    
    onSave(newQR)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Create QR Code</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Campaign Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              placeholder="e.g., Gym Workout Special"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Code (will be uppercase)
            </label>
            <input
              type="text"
              value={formData.code}
              onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value.toUpperCase() }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white font-mono"
              placeholder="e.g., BEAST2024"
              maxLength={12}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Discount Percentage
            </label>
            <select
              value={formData.discount}
              onChange={(e) => setFormData(prev => ({ ...prev, discount: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
            >
              <option value={10}>10% off</option>
              <option value={15}>15% off</option>
              <option value={20}>20% off</option>
              <option value={25}>25% off</option>
              <option value={30}>30% off</option>
              <option value={40}>40% off</option>
              <option value={50}>50% off</option>
            </select>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <h4 className="text-blue-300 font-bold mb-2">How it works:</h4>
            <div className="text-blue-200 text-sm space-y-1">
              <div>1. Fans scan your QR code with any phone camera</div>
              <div>2. They're taken to signup with your discount applied</div>
              <div>3. One-step account creation + subscription</div>
              <div>4. Instant access to your content!</div>
            </div>
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
              className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300"
            >
              Create QR Code
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// QR Preview Modal Component
const QRPreviewModal: React.FC<{
  qrCode: QRCode
  onClose: () => void
  onDownload: () => void
  onShare: () => void
}> = ({ qrCode, onClose, onDownload, onShare }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">{qrCode.name}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <div className="text-center mb-6">
          {/* QR Code Display */}
          <div className="bg-white rounded-xl p-6 inline-block mb-4">
            <QrCode size={160} className="text-gray-800" />
            <div className="text-gray-800 font-bold text-sm mt-2">{qrCode.code}</div>
          </div>
          
          <div className="text-gray-300 mb-2">
            <span className="text-green-400 font-bold">{qrCode.discount}% OFF</span> for new subscribers
          </div>
          <div className="text-gray-400 text-sm">
            Link: fansfollow.me/scan?code={qrCode.code}
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onDownload}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>Download QR Code</span>
          </button>
          
          <button
            onClick={onShare}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center space-x-2"
          >
            <Share size={20} />
            <span>Share QR Code</span>
          </button>
        </div>

        <div className="mt-6 bg-gray-700/30 rounded-xl p-4">
          <h4 className="text-white font-semibold mb-2">Usage Tips:</h4>
          <div className="text-gray-300 text-sm space-y-1">
            <div>• Print and display at your gym or studio</div>
            <div>• Share on social media stories</div>
            <div>• Include in email signatures</div>
            <div>• Use at events and workshops</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRCodeGenerator