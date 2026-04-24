import React, { useState } from 'react'
import { ArrowLeft, Eye, EyeOff, CheckCircle, AlertCircle, Star } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { signup, loading } = useAuth()
  
  // Check for creator referral parameters
  const creatorId = searchParams.get('creator')
  const discountCode = searchParams.get('code')
  const discountPercent = searchParams.get('discount')
  
  // Mock creator data for referral signup
  const creatorData = creatorId ? {
    'marcus_beast': {
      name: 'Marcus "The Beast" Johnson',
      avatar: 'MJ',
      verified: true,
      subscriptionPrice: 19.99,
      discountedPrice: discountPercent ? (19.99 * (1 - parseInt(discountPercent) / 100)) : 19.99
    },
    'jake_thunder': {
      name: 'Jake "Thunder" Thompson', 
      avatar: 'JT',
      verified: true,
      subscriptionPrice: 24.99,
      discountedPrice: discountPercent ? (24.99 * (1 - parseInt(discountPercent) / 100)) : 24.99
    },
    'dr_luna': {
      name: 'Dr. Luna Chen',
      avatar: 'LC', 
      verified: true,
      subscriptionPrice: 14.99,
      discountedPrice: discountPercent ? (14.99 * (1 - parseInt(discountPercent) / 100)) : 14.99
    }
  }[creatorId] : null
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    username: '',
    userType: 'fan', // 'fan' or 'creator'
    agreeTerms: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (loading) return

    try {
      setError(null)
      setSuccessMessage(null)

      if (formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters long')
      }

      if (formData.username.length < 3) {
        throw new Error('Username must be at least 3 characters long')
      }

      await signup(formData.email, formData.password, {
        full_name: formData.fullName,
        username: formData.username,
        user_type: formData.userType
      })

      setSuccessMessage('Account created successfully! Redirecting to dashboard...')

      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    } catch (err: any) {
      setError(err.message || 'Failed to sign up. Please try again.')
      console.error('Signup error:', err)
    }
  }

  const renderStep1 = () => (
    <>
      {/* User Type Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-3">
          I want to join as:
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, userType: 'fan' }))}
            className={`p-4 md:p-5 rounded-xl border transition-all min-h-[100px] md:min-h-[120px] flex flex-col items-center justify-center ${
              formData.userType === 'fan'
                ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                : 'border-gray-600 text-gray-300 hover:border-gray-500'
            }`}
          >
            <div className="text-3xl md:text-4xl mb-2">👤</div>
            <div className="font-bold text-base md:text-lg">Fan</div>
            <div className="text-xs md:text-sm opacity-75 text-center">Connect with creators</div>
          </button>

          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, userType: 'creator' }))}
            className={`p-4 md:p-5 rounded-xl border transition-all min-h-[100px] md:min-h-[120px] flex flex-col items-center justify-center ${
              formData.userType === 'creator'
                ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                : 'border-gray-600 text-gray-300 hover:border-gray-500'
            }`}
          >
            <div className="text-3xl md:text-4xl mb-2">⭐</div>
            <div className="font-bold text-base md:text-lg">Creator</div>
            <div className="text-xs md:text-sm opacity-75 text-center">Start earning money</div>
          </button>
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full px-4 py-3 min-h-[44px] bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
          placeholder="Your full name"
          required
        />
      </div>

      {/* Username */}
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-600 bg-gray-700/30 text-gray-400 text-sm">
            @
          </span>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="flex-1 px-4 py-3 min-h-[44px] bg-gray-700/50 border border-gray-600 rounded-r-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Choose a username"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 min-h-[44px] bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
          placeholder="Your email address"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 min-h-[44px] bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 pr-12"
            placeholder="Create a password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="mt-2 text-sm text-gray-400">
          Password must be at least 6 characters long
        </div>
      </div>

      {/* Terms Agreement */}
      <div className="flex items-start space-x-3 min-h-[44px]">
        <input
          type="checkbox"
          id="agreeTerms"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleInputChange}
          className="w-5 h-5 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer mt-1"
          required
        />
        <label htmlFor="agreeTerms" className="text-base text-gray-300 cursor-pointer">
          I agree to the <a href="#" className="text-orange-400 hover:text-orange-300">Terms of Service</a> and <a href="#" className="text-orange-400 hover:text-orange-300">Privacy Policy</a>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || !formData.agreeTerms}
        className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 md:py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl min-h-[44px] flex items-center justify-center"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
            <span>Creating account...</span>
          </div>
        ) : (
          `Create ${formData.userType === 'creator' ? 'Creator' : 'Fan'} Account`
        )}
      </button>
    </>
  )


  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Premium Fitness Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(15, 23, 42, 0.5)), url('/ffmherobackground.jpg')`
          }}
        ></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-md w-full mx-4 relative z-10">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-orange-400 hover:text-orange-300 mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-gray-700/40 shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
          <div className="text-center mb-8">
            {/* Creator Referral Header */}
            {creatorData && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {creatorData.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-bold">{creatorData.name}</span>
                      {creatorData.verified && (
                        <Star size={16} className="text-yellow-400 fill-current" />
                      )}
                    </div>
                    <div className="text-green-400 text-sm">invited you to join!</div>
                  </div>
                </div>
                
                {discountCode && discountPercent && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-lg">🎉 EXCLUSIVE {discountPercent}% OFF!</div>
                    <div className="text-white">
                      <span className="line-through text-gray-400">£{creatorData.subscriptionPrice}</span>
                      <span className="ml-2 font-bold text-xl">£{creatorData.discountedPrice.toFixed(2)}/month</span>
                    </div>
                    <div className="text-green-300 text-sm">Code: {discountCode}</div>
                  </div>
                )}
              </div>
            )}
            
            <h1 className="text-3xl font-black text-white mb-2">
              {step === 1 ? (creatorData ? 'Create Account & Subscribe' : 'Create your account') : 'Almost there!'}
            </h1>
            {step === 1 && (
              <p className="text-gray-300">
                {creatorData 
                  ? 'No account needed - we\'ll create one for you!' 
                  : 'Join the #1 global fitness & martial arts platform'
                }
              </p>
            )}
            {error && (
              <div className="mt-4 bg-red-500/20 text-red-400 p-3 rounded-lg animate-pulse">
                {error}
              </div>
            )}
            {successMessage && (
              <div className="mt-4 bg-green-500/20 text-green-400 p-3 rounded-lg animate-pulse">
                {successMessage}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStep1()}
          </form>

          {/* Sign In Link */}
          {step === 1 && (
            <div className="text-center mt-6">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-orange-400 hover:text-orange-300 font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignupPage