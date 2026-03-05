import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { Ban, X } from 'lucide-react'

const BlockCountriesPage: React.FC = () => {
  const [blockedCountries, setBlockedCountries] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
    'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
    'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei',
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde',
    'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia',
    'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
    'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India',
    'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
    'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
    'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar',
    'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
    'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique',
    'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria',
    'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru',
    'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis',
    'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
    'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
    'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo',
    'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
    'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ]

  const filteredCountries = countries.filter(
    country =>
      country.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !blockedCountries.includes(country)
  )

  const addCountry = (country: string) => {
    setBlockedCountries([...blockedCountries, country])
    setSearchTerm('')
    setShowDropdown(false)
  }

  const removeCountry = (country: string) => {
    setBlockedCountries(blockedCountries.filter(c => c !== country))
  }

  const handleSave = () => {
    alert('Changes saved successfully!')
  }

  return (
    <SettingsLayout>
      <div className="max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Ban size={28} className="text-[#e2e8f0]" />
            <h1 className="text-3xl font-bold text-[#e2e8f0]">Block Countries</h1>
          </div>
          <p className="text-[#9ca3af]">
            Select the countries in which you do not want your profile to be displayed,
            they will not be able to see your profile in any section of the site.
          </p>
        </div>

        {/* Country Selection */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6 mb-6">
          <label className="block text-sm font-bold text-[#9ca3af] mb-3">
            Block Countries
          </label>

          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setShowDropdown(true)
              }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search for a country..."
              className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-3 text-[#e2e8f0] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Dropdown */}
            {showDropdown && searchTerm && filteredCountries.length > 0 && (
              <div className="absolute z-50 w-full mt-2 bg-[#1e293b] border border-[#334155] rounded-lg shadow-2xl max-h-60 overflow-y-auto">
                {filteredCountries.slice(0, 10).map((country) => (
                  <button
                    key={country}
                    onClick={() => addCountry(country)}
                    className="w-full text-left px-4 py-3 text-[#e2e8f0] hover:bg-[#334155] transition-colors border-b border-[#334155] last:border-b-0"
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Selected Countries */}
          {blockedCountries.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-bold text-[#9ca3af] mb-3">
                Blocked Countries ({blockedCountries.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {blockedCountries.map((country) => (
                  <div
                    key={country}
                    className="flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-lg px-3 py-2"
                  >
                    <span className="text-sm text-[#e2e8f0]">{country}</span>
                    <button
                      onClick={() => removeCountry(country)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Save changes
        </button>

        {/* Info Box */}
        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-[#e2e8f0] mb-3">Important Information</h3>
          <ul className="space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 text-xs">!</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                Users from blocked countries will not be able to view your profile, content, or subscribe to you
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 text-xs">!</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                Your profile will be completely hidden from search results and recommendations for users in these countries
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 text-xs">!</span>
              </div>
              <p className="text-sm text-[#9ca3af]">
                Existing subscribers from blocked countries will maintain their subscriptions unless you cancel them manually
              </p>
            </li>
          </ul>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default BlockCountriesPage
