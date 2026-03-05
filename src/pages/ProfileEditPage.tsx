import React, { useState } from 'react'
import { 
  ArrowLeft, 
  User, 
  Wallet, 
  Users, 
  UserPlus, 
  Shield, 
  Lock, 
  CreditCard, 
  ShoppingBag,
  Eye,
  EyeOff,
  Save,
  Camera,
  Globe
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const ProfileEditPage = () => {
  const [activeSection, setActiveSection] = useState('edit-profile')
  const [showPassword, setShowPassword] = useState(false)
  const [showUsernameInsteadOfName, setShowUsernameInsteadOfName] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)
  const navigate = useNavigate()
  
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    username: 'johndoe123',
    profession: 'Fitness Enthusiast',
    language: 'English',
    birthDate: '06/15/1955',
    gender: 'Not specified',
    company: '',
    country: 'United Kingdom',
    city: 'London',
    address: '123 Main Street',
    postalCode: 'SW1A 1AA'
  })

  const menuSections = [
    {
      title: 'Account',
      items: [
        { id: 'my-profile', label: 'My Profile', icon: User },
        { id: 'edit-profile', label: 'Edit Profile', icon: User },
        { id: 'wallet', label: 'Wallet', icon: Wallet },
        { id: 'referrals', label: 'Referrals', icon: Users },
        { id: 'be-creator', label: 'Be a creator!', icon: UserPlus, special: true }
      ]
    },
    {
      title: 'Subscription',
      items: [
        { id: 'subscription-price', label: 'Subscription price', icon: DollarSign },
        { id: 'my-subscribers', label: 'My subscribers', icon: Users },
        { id: 'my-subscriptions', label: 'My subscriptions', icon: Users }
      ]
    },
    {
      title: 'Privacy and Security',
      items: [
        { id: 'privacy', label: 'Privacy and Security', icon: Shield },
        { id: 'password', label: 'Password', icon: Lock },
        { id: 'block-countries', label: 'Block Countries', icon: Globe },
        { id: 'restricted', label: 'Restricted users', icon: Shield }
      ]
    },
    {
      title: 'Payments',
      items: [
        { id: 'payments', label: 'Payments', icon: CreditCard },
        { id: 'payments-received', label: 'Payments received', icon: CreditCard },
        { id: 'payout', label: 'Payout method', icon: Wallet },
        { id: 'withdrawals', label: 'Withdrawals', icon: Wallet }
      ]
    },
    {
      title: 'Shop',
      items: [
        { id: 'sales', label: 'Sales', icon: ShoppingBag },
        { id: 'products', label: 'Products', icon: ShoppingBag }
      ]
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSaveProfile = async () => {
    try {
      setIsSaving(true)
      setSaveMessage(null)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Success message
      setSaveMessage({
        type: 'success',
        text: 'Profile updated successfully!'
      })
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setSaveMessage(null)
      }, 3000)
    } catch (error) {
      setSaveMessage({
        type: 'error',
        text: 'Failed to update profile. Please try again.'
      })
    } finally {
      setIsSaving(false)
    }
  }

  const renderContent = () => {
    switch(activeSection) {
      case 'edit-profile':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Edit Profile</h2>
              <p className="text-gray-300">Tell us something about you.</p>
            </div>

            {/* Profile Form */}
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl text-white font-bold relative group cursor-pointer">
                  JD
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-purple-700 transition-all">
                    Change Photo
                  </button>
                  <p className="text-gray-400 text-sm mt-1">JPG, PNG or GIF. Max size 5MB</p>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={profileData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username <span className="text-red-400">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-600 bg-gray-700/30 text-gray-400 text-sm">
                    fansfollow.me/
                  </span>
                  <input
                    type="text"
                    value={profileData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-r-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Show Username Toggle */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="showUsername"
                  checked={showUsernameInsteadOfName}
                  onChange={(e) => setShowUsernameInsteadOfName(e.target.checked)}
                  className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                />
                <label htmlFor="showUsername" className="text-gray-300">
                  Show username instead of your Full name
                </label>
              </div>

              {/* Profession */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Profession/Occupation
                </label>
                <input
                  type="text"
                  value={profileData.profession}
                  onChange={(e) => handleInputChange('profession', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="e.g., Personal Trainer, Nutritionist"
                />
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Language
                </label>
                <select
                  value={profileData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Italian">Italian</option>
                </select>
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Birth Date
                </label>
                <input
                  type="text"
                  value={profileData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="MM/DD/YYYY"
                />
                <p className="text-gray-400 text-sm mt-1">Valid formats: 07/08/2007 -- (Can be edited only once)</p>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Gender
                </label>
                <select
                  value={profileData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                >
                  <option value="Not specified">Not specified</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              {/* Billing Information Section */}
              <div className="border-t border-gray-700/50 pt-6">
                <h3 className="text-lg font-bold text-white mb-4">Billing Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={profileData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Country
                    </label>
                    <select
                      value={profileData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    >
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Spain">Spain</option>
                      <option value="Italy">Italy</option>
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={profileData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Postal/ZIP
                    </label>
                    <input
                      type="text"
                      value={profileData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={profileData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-8">
                <button 
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-purple-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                  <Save size={20} />
                  <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                </button>
              </div>
              
              {/* Save Message */}
              {saveMessage && (
                <div className={`mt-4 p-3 rounded-lg animate-pulse ${
                  saveMessage.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {saveMessage.text}
                </div>
              )}
            </div>
          </div>
        )

      case 'my-profile':
        return (
          <div className="space-y-8">
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-2">My Profile</h2>
              <p className="text-gray-300">View your profile information</p>
            </div>

            <div className="bg-gray-700/30 rounded-xl p-6">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl text-white font-bold">
                  JD
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{profileData.fullName}</h3>
                  <p className="text-gray-300">@{profileData.username}</p>
                  <p className="text-gray-400">{profileData.profession}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Personal Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Language</span>
                      <span className="text-white">{profileData.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Birth Date</span>
                      <span className="text-white">{profileData.birthDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Gender</span>
                      <span className="text-white">{profileData.gender}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Location</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Country</span>
                      <span className="text-white">{profileData.country}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">City</span>
                      <span className="text-white">{profileData.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Postal Code</span>
                      <span className="text-white">{profileData.postalCode}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'password':
        return (
          <div className="space-y-8">
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Change Password</h2>
              <p className="text-gray-300">Update your account password</p>
            </div>

            <div className="max-w-md space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 pr-12"
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Confirm new password"
                />
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                Update Password
              </button>
            </div>
          </div>
        )

      case 'wallet':
        return (
          <div className="space-y-8">
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Wallet</h2>
              <p className="text-gray-300">Manage your account balance and transactions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Account Balance</h3>
                <div className="text-3xl font-black text-orange-400 mb-2">£0.00</div>
                <p className="text-gray-300 text-sm mb-4">Available for spending</p>
                <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-purple-700 transition-all">
                  Add Funds
                </button>
              </div>

              <div className="bg-gray-700/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Wallet Balance</h3>
                <div className="text-3xl font-black text-purple-400 mb-2">£0.01</div>
                <p className="text-gray-300 text-sm mb-4">Pending transactions</p>
                <button className="bg-gradient-to-r from-purple-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-orange-700 transition-all">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-8">
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {menuSections.flatMap(s => s.items).find(item => item.id === activeSection)?.label || 'Section'}
              </h2>
              <p className="text-gray-300">This section is under development</p>
            </div>
            <div className="bg-gray-700/30 rounded-xl p-8 text-center">
              <p className="text-gray-400">Content for this section will be available soon.</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/dashboard" 
            className="flex items-center text-orange-400 hover:text-orange-300"
            onClick={(e) => {
              e.preventDefault()
              navigate('/dashboard')
            }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar Menu */}
        <div className="w-80 bg-gray-800/30 backdrop-blur-lg border-r border-gray-700/50 min-h-screen">
          <div className="p-6">
            <nav className="space-y-6">
              {menuSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                            : item.special
                            ? 'text-orange-400 hover:text-orange-300 hover:bg-orange-500/10'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEditPage