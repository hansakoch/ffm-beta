import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import GroupCoachingSystem from '../components/GroupCoachingSystem'
import SEOOptimizer from '../components/SEOOptimizer'
import { pageSEO, organizationSchema, createBreadcrumbSchema } from '../config/seo'
import Footer from '../components/Footer'

const GroupCoachingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <SEOOptimizer
        title={pageSEO.groupCoaching.title}
        description={pageSEO.groupCoaching.description}
        keywords={pageSEO.groupCoaching.keywords}
        ogImage="/Artboard-1-transparent.png"
        structuredData={[
          organizationSchema,
          createBreadcrumbSchema([
            { name: 'Home', url: 'https://fansfollow.me' },
            { name: 'Group Coaching', url: 'https://fansfollow.me/group-coaching' }
          ])
        ]}
      />
      
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-orange-400 hover:text-orange-300 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Dashboard
          </button>
        </div>
      </div>

      <GroupCoachingSystem userType="creator" userId="current-user-id" />

      <Footer />
    </div>
  )
}

export default GroupCoachingPage