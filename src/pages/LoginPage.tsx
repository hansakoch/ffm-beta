import React, { useState } from 'react'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const navigate = useNavigate()
  const { login, loading } = useAuth()
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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

      await login(formData.email, formData.password)

      setSuccessMessage('Login successful! Redirecting to dashboard...')
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    } catch (err: any) {
      setError(err.message || 'Failed to sign in. Please try again.')
      console.error('Login error:', err)
    }
  }


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
          className="flex items-center text-orange-400 hover:text-orange-300 mb-6 transition-all duration-300 hover:scale-105 hover:-translate-x-1"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-gray-700/40 shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white mb-2 drop-shadow-lg">Login to continue</h1>
            <p className="text-gray-300">Welcome back to FansFollow</p>
            {error && (
              <div className="mt-4 bg-red-500/20 text-red-400 p-3 rounded-lg border-2 border-red-500/30 shadow-lg shadow-red-500/20">
                {error}
              </div>
            )}
            {successMessage && (
              <div className="mt-4 bg-green-500/20 text-green-400 p-3 rounded-lg animate-pulse border-2 border-green-500/30 shadow-lg shadow-green-500/20">
                {successMessage}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 shadow-lg hover:border-orange-500/50 transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 pr-12 shadow-lg hover:border-orange-500/50 transition-all duration-300"
                  placeholder="Your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-300">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-orange-400 hover:text-orange-300 font-semibold transition-all duration-300 hover:drop-shadow-lg">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage