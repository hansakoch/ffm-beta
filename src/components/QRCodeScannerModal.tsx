import React, { useState, useRef } from 'react'
import { X, Camera, CameraOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface QRCodeScannerModalProps {
  isOpen: boolean
  onClose: () => void
}

const QRCodeScannerModal: React.FC<QRCodeScannerModalProps> = ({ isOpen, onClose }) => {
  const [isScanning, setIsScanning] = useState(false)
  const [manualCode, setManualCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt')
  const videoRef = useRef<HTMLVideoElement>(null)
  const navigate = useNavigate()

  const mockCreators: { [key: string]: any } = {
    'BEAST2024': {
      id: 'marcus_beast',
      name: 'Marcus "The Beast" Johnson',
      discountCode: 'BEAST2024',
      discountPercent: 25
    },
    'WORKOUT50': {
      id: 'jake_thunder',
      name: 'Jake "Thunder" Thompson',
      discountCode: 'WORKOUT50',
      discountPercent: 50
    },
    'NUTRITION30': {
      id: 'dr_luna',
      name: 'Dr. Luna Chen',
      discountCode: 'NUTRITION30',
      discountPercent: 30
    }
  }

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
        setIsScanning(true)
        setCameraPermission('granted')
        setError(null)
      }
    } catch (err) {
      console.error('Camera access denied:', err)
      setCameraPermission('denied')
      setError('Camera access is required to scan QR codes. Please enable camera permissions.')
    }
  }

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach(track => track.stop())
      videoRef.current.srcObject = null
    }
    setIsScanning(false)
  }

  const handleCodeSubmit = (code?: string) => {
    const codeToProcess = code || manualCode.toUpperCase()

    if (!codeToProcess) {
      setError('Please enter a creator code')
      return
    }

    const creator = mockCreators[codeToProcess]
    if (creator) {
      stopCamera()
      onClose()
      const signupUrl = `/signup?creator=${creator.id}&code=${creator.discountCode}&discount=${creator.discountPercent}`
      navigate(signupUrl)
    } else {
      setError('Invalid creator code. Try BEAST2024, WORKOUT50, or NUTRITION30')
    }
  }

  const handleClose = () => {
    stopCamera()
    setManualCode('')
    setError(null)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl border-2 border-gray-700/50 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/80 hover:bg-gray-700 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <X size={24} />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border-2 border-blue-500/40 mb-4 shadow-lg">
              <Camera className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-semibold text-sm">QR CODE SCANNER</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              Scan Creator Code
            </h2>
            <p className="text-gray-300 text-sm">
              Scan a creator's QR code for instant access with exclusive discounts
            </p>
          </div>

          {/* Camera Scanner */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-700/50 mb-4 shadow-xl">
            <div className="aspect-square bg-black rounded-xl overflow-hidden relative mb-4">
              {isScanning ? (
                <>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    playsInline
                    muted
                  />

                  {/* Scanner Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 border-4 border-orange-500 rounded-xl relative">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-orange-400"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-orange-400"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-orange-400"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-orange-400"></div>

                      {/* Scanning Line */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Camera size={48} className="text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-400 text-sm">Camera not active</p>
                    {cameraPermission === 'denied' && (
                      <p className="text-red-400 text-xs mt-2 px-4">
                        Camera access denied. Please enable camera permissions.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {!isScanning ? (
              <button
                onClick={startCamera}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:scale-105"
              >
                <Camera size={20} />
                <span>Start Camera</span>
              </button>
            ) : (
              <button
                onClick={stopCamera}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:scale-105"
              >
                <CameraOff size={20} />
                <span>Stop Camera</span>
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-900 text-gray-400">Or enter code manually</span>
            </div>
          </div>

          {/* Manual Code Entry */}
          <div className="mb-4">
            <input
              type="text"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value.toUpperCase())}
              placeholder="Enter creator code (e.g., BEAST2024)"
              className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg mb-3"
              onKeyPress={(e) => e.key === 'Enter' && handleCodeSubmit()}
            />
            <button
              onClick={() => handleCodeSubmit()}
              disabled={!manualCode.trim()}
              className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
            >
              Submit
            </button>
          </div>

          {/* Test Codes */}
          <div className="text-center">
            <p className="text-gray-400 text-xs mb-2">Try these test codes:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.keys(mockCreators).map((code) => (
                <button
                  key={code}
                  onClick={() => {
                    setManualCode(code)
                    handleCodeSubmit(code)
                  }}
                  className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="mt-4 bg-red-500/20 text-red-400 p-3 rounded-lg text-center border-2 border-red-500/30 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QRCodeScannerModal
