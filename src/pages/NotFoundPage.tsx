import React from 'react'
import { Home, Search, Users, HelpCircle, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const quickLinks = [
    { icon: Home, label: 'Homepage', href: '/', description: 'Return to the main page' },
    { icon: Users, label: 'Explore Creators', href: '/explore', description: 'Browse fitness and martial arts creators' },
    { icon: HelpCircle, label: 'Support', href: '/support', description: 'Get help from our team' },
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8">
              <h1 className="text-9xl sm:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 animate-pulse-slow">
                404
              </h1>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track!
              </p>
            </div>

            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for creators or content..."
                  className="w-full pl-14 pr-4 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300 text-lg min-h-[56px]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 min-h-[44px]"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <link.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {link.description}
                    </p>
                  </div>
                  <ArrowRight className="text-gray-600 group-hover:text-orange-500 transition-colors" size={20} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[56px]"
            >
              Get Started with FansFollow
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFoundPage
