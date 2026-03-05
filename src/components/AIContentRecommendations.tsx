import React, { useState, useEffect } from 'react'
import { Brain, Target, TrendingUp, Zap, Star, Eye, Heart, MessageCircle, Play, Bookmark } from 'lucide-react'

interface ContentRecommendation {
  id: string
  type: 'creator' | 'post' | 'live' | 'product'
  title: string
  description: string
  creator?: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  thumbnail: string
  confidence: number
  reason: string
  category: string
  engagement: {
    views: number
    likes: number
    comments: number
  }
  price?: string
  isLive?: boolean
}

interface AIContentRecommendationsProps {
  userId: string
  userPreferences: {
    categories: string[]
    followedCreators: string[]
    interactionHistory: string[]
    spendingPattern: 'low' | 'medium' | 'high'
    timeOfDay: string
  }
}

const AIContentRecommendations: React.FC<AIContentRecommendationsProps> = ({ 
  userId, 
  userPreferences 
}) => {
  const [recommendations, setRecommendations] = useState<ContentRecommendation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [aiInsights, setAiInsights] = useState<string[]>([])

  useEffect(() => {
    const generateRecommendations = () => {
      const mockRecommendations: ContentRecommendation[] = [
        {
          id: '1',
          type: 'creator',
          title: 'Marcus "The Beast" Johnson',
          description: 'UFC fighter with similar training style to your favorites',
          creator: {
            name: 'Marcus Johnson',
            username: 'marcus_beast',
            avatar: 'MJ',
            verified: true
          },
          thumbnail: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
          confidence: 94,
          reason: 'AI detected you love UFC content and strength training',
          category: 'UFC/MMA',
          engagement: { views: 12400, likes: 890, comments: 156 }
        },
        {
          id: '2',
          type: 'post',
          title: 'Advanced Deadlift Technique',
          description: 'Perfect form breakdown you\'ll love based on your viewing history',
          creator: {
            name: 'Jake Thompson',
            username: 'jake_thunder',
            avatar: 'JT',
            verified: true
          },
          thumbnail: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
          confidence: 89,
          reason: 'You watched 3 similar deadlift videos this week',
          category: 'Strength Training',
          engagement: { views: 5600, likes: 234, comments: 45 },
          price: '£9.99'
        },
        {
          id: '3',
          type: 'live',
          title: 'Live Boxing Training Session',
          description: 'Real-time coaching session starting in 10 minutes',
          creator: {
            name: 'Sarah Rodriguez',
            username: 'sarah_iron',
            avatar: 'SR',
            verified: true
          },
          thumbnail: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=400',
          confidence: 92,
          reason: 'AI knows you\'re most active at this time and love boxing',
          category: 'Boxing',
          engagement: { views: 234, likes: 67, comments: 23 },
          isLive: true
        }
      ]

      setRecommendations(mockRecommendations)
      setAiInsights([
        'You engage 3x more with strength training content in the evening',
        'UFC fighters are your highest-tipped creator category',
        'You prefer video content over text posts (87% vs 13%)',
        'Boxing content gets your highest engagement rate'
      ])
      setIsLoading(false)
    }

    // Simulate AI processing time
    setTimeout(generateRecommendations, 1500)
  }, [userId, userPreferences])

  if (isLoading) {
    return (
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center animate-pulse">
            <Brain size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">AI is analyzing your preferences...</h3>
            <p className="text-gray-300">Creating personalized recommendations</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-20 bg-gray-700/30 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* AI Insights */}
      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
            <Brain size={32} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">AI Insights About You</h2>
            <p className="text-purple-300">Powered by advanced machine learning</p>
          </div>
        </div>

        <div className="space-y-2">
          {aiInsights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Zap size={16} className="text-purple-400 mt-1 flex-shrink-0" />
              <span className="text-purple-200 text-sm">{insight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Target size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">AI Recommendations</h3>
              <p className="text-gray-300">Personalized just for you</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-green-400 font-bold">94% Match</div>
            <div className="text-gray-400 text-sm">Confidence</div>
          </div>
        </div>

        <div className="space-y-4">
          {recommendations.map((item) => (
            <div key={item.id} className="bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  
                  {item.isLive && (
                    <div className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                      LIVE
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-white font-bold">{item.title}</h4>
                    {item.creator?.verified && (
                      <Star size={14} className="text-yellow-400 fill-current" />
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      item.type === 'live' ? 'bg-red-500/20 text-red-400' :
                      item.type === 'creator' ? 'bg-blue-500/20 text-blue-400' :
                      item.type === 'post' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {item.type.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-2">
                    <span className="flex items-center">
                      <Eye size={12} className="mr-1" />
                      {item.engagement.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Heart size={12} className="mr-1" />
                      {item.engagement.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle size={12} className="mr-1" />
                      {item.engagement.comments}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Brain size={14} className="text-purple-400" />
                      <span className="text-purple-300 text-sm">{item.reason}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        item.confidence >= 90 ? 'bg-green-400' :
                        item.confidence >= 80 ? 'bg-yellow-400' :
                        'bg-orange-400'
                      }`}></div>
                      <span className="text-gray-400 text-sm">{item.confidence}% match</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  {item.price && (
                    <div className="text-green-400 font-bold mb-2">{item.price}</div>
                  )}
                  <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                    {item.type === 'creator' ? 'Follow' :
                     item.type === 'live' ? 'Join Live' :
                     item.type === 'post' ? 'View' : 'Check Out'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AIContentRecommendations