import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { Edit, Upload } from 'lucide-react'

const ProfileSettingsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    username: 'johndoe',
    showUsername: true,
    email: 'john@example.com',
    bio: 'Fitness coach and content creator',
    language: 'en',
    gender: 'male',
    birthdate: '1990-01-01',
    country: 'United Kingdom',
    city: 'London',
    website1: '',
    website2: '',
    wishlistLink: '',
    categories: 'Fitness, Health, Wellness',
    story: '',
    socialProfiles: {
      facebook: '',
      twitter: '',
      instagram: '',
      youtube: '',
      pinterest: '',
      snapchat: '',
      telegram: '',
      discord: '',
      reddit: '',
      spotify: '',
      tiktok: '',
      twitch: ''
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleToggle = (field: string) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field as keyof typeof prev] }))
  }

  const handleSocialChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialProfiles: { ...prev.socialProfiles, [platform]: value }
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Saving profile...', formData)
  }

  const socialPlatforms = [
    { key: 'facebook', label: 'Facebook', color: '#1877F2' },
    { key: 'twitter', label: 'Twitter', color: '#1DA1F2' },
    { key: 'instagram', label: 'Instagram', color: '#E4405F' },
    { key: 'youtube', label: 'YouTube', color: '#FF0000' },
    { key: 'pinterest', label: 'Pinterest', color: '#E60023' },
    { key: 'snapchat', label: 'Snapchat', color: '#FFFC00' },
    { key: 'telegram', label: 'Telegram', color: '#0088CC' },
    { key: 'discord', label: 'Discord', color: '#5865F2' },
    { key: 'reddit', label: 'Reddit', color: '#FF4500' },
    { key: 'spotify', label: 'Spotify', color: '#1DB954' },
    { key: 'tiktok', label: 'TikTok', color: '#000000' },
    { key: 'twitch', label: 'Twitch', color: '#9146FF' }
  ]

  return (
    <SettingsLayout>
      <div className="max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Edit size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Edit my page</h1>
          </div>
          <p className="text-[#9ca3af]">Tell us something about you</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Username
            </label>
            <div className="flex items-center bg-[#1e293b] border border-[#334155] rounded-lg overflow-hidden">
              <span className="px-4 text-[#9ca3af] bg-[#0f172a] border-r border-[#334155]">
                fansfollow.me/
              </span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 bg-transparent text-[#e2e8f0] focus:outline-none"
              />
            </div>
          </div>

          {/* Show Username Toggle */}
          <div className="flex items-center justify-between p-4 bg-[#1e293b] border border-[#334155] rounded-lg">
            <span className="text-[#e2e8f0]">Show username</span>
            <button
              type="button"
              onClick={() => handleToggle('showUsername')}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                formData.showUsername ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea]' : 'bg-[#334155]'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  formData.showUsername ? 'translate-x-7' : ''
                }`}
              />
            </button>
          </div>

          {/* Email (disabled) */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-3 bg-[#334155] border border-[#334155] rounded-lg text-[#9ca3af] cursor-not-allowed"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Bio / Role
            </label>
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Language and Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                Language
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          {/* Birthdate */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Birthdate
            </label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-[#9ca3af] mt-1">Note: Can be edited only once</p>
          </div>

          {/* Country and City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Website Links */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Website Link 1
            </label>
            <input
              type="url"
              name="website1"
              value={formData.website1}
              onChange={handleInputChange}
              placeholder="https://example.com"
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Website Link 2
            </label>
            <input
              type="url"
              name="website2"
              value={formData.website2}
              onChange={handleInputChange}
              placeholder="https://example.com"
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Wishlist Link */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Wishlist Link
            </label>
            <input
              type="url"
              name="wishlistLink"
              value={formData.wishlistLink}
              onChange={handleInputChange}
              placeholder="https://amazon.com/wishlist/..."
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Categories
            </label>
            <input
              type="text"
              name="categories"
              value={formData.categories}
              onChange={handleInputChange}
              placeholder="Fitness, Health, Wellness"
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Social Profiles */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-4">
              Social Profiles
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialPlatforms.map((platform) => (
                <div key={platform.key}>
                  <label className="block text-xs text-[#9ca3af] mb-1">
                    {platform.label}
                  </label>
                  <input
                    type="url"
                    value={formData.socialProfiles[platform.key as keyof typeof formData.socialProfiles]}
                    onChange={(e) => handleSocialChange(platform.key, e.target.value)}
                    placeholder={`https://${platform.key}.com/username`}
                    className="w-full px-4 py-2 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Story */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Tell us about your story
            </label>
            <textarea
              name="story"
              value={formData.story}
              onChange={handleInputChange}
              maxLength={3000}
              rows={6}
              placeholder="Share your story with your fans..."
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
            <p className="text-xs text-[#9ca3af] mt-1">
              {formData.story.length} / 3000 characters
            </p>
          </div>

          {/* Intro Video */}
          <div>
            <label className="block text-sm font-medium text-[#e2e8f0] mb-2">
              Add Intro Video
            </label>
            <div className="border-2 border-dashed border-[#334155] rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
              <Upload size={48} className="mx-auto mb-4 text-[#9ca3af]" />
              <p className="text-[#e2e8f0] mb-1">Click to upload or drag and drop</p>
              <p className="text-sm text-[#9ca3af]">MP4, MOV or AVI (max. 100MB)</p>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Save changes
          </button>
        </form>
      </div>
    </SettingsLayout>
  )
}

export default ProfileSettingsPage
