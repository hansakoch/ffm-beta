import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  Phone, 
  Video, 
  Gift, 
  Share, 
  Flag, 
  MoreHorizontal, 
  Calendar, 
  MapPin, 
  Link as LinkIcon, 
  Crown, 
  Globe, 
  Lock,
  CheckCircle,
  Clock
} from 'lucide-react'
import { Link } from 'react-router-dom'

// This would come from your API in a real app
const mockProfile = {
  id: '1',
  name: 'Marcus "The Beast" Johnson',
  username: 'marcus_beast',
  avatar: 'MJ',
  verified: true,
  isCreator: true,
  bio: 'UFC Heavyweight Champion 🥊 | Personal Training & Nutrition Coaching | Building champions inside and outside the octagon',
  location: 'Las Vegas, NV',
  website: 'https://marcusbeast.com',
  joinDate: 'January 2023',
  followers: 125000,
  following: 89,
  posts: 234,
  subscriptionPrice: '£19.99',
  isSubscribed: false,
  personalChatRate: '£5/message',
  phoneCallRate: '£15/minute',
  videoCallRate: '£50/session',
  groupCallRate: '£25/person/session',
  maxGroupSize: 8,
  responseTime: '< 2 hours',
  categories: ['UFC/MMA', 'Personal Training', 'Nutrition'],
  stats: {
    totalEarnings: '£45,230',
    monthlySubscribers: 1234,
    averageRating: 4.9,
    totalReviews: 567
  }
}

const CreatorProfilePage = () => {
  const { username } = useParams()
  const [activeTab, setActiveTab] = useState('posts')
  const [isFollowing, setIsFollowing] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showSubscribeModal, setShowSubscribeModal] = useState(false)
  const navigate = useNavigate()
  
  // Mock profile data - in a real app this would come from API based on username
  const [profile, setProfile] = useState(mockProfile)
  
  // Enhanced verification and achievement system
  const verificationBadges = [
    { id: 'identity', name: 'Identity Verified', icon: '✅', verified: true, description: 'Government ID verified' },
    { id: 'fitness', name: 'Certified Trainer', icon: '🏋️', verified: true, description: 'NASM/ACE certified' },
    { id: 'nutrition', name: 'Nutrition Expert', icon: '🥗', verified: true, description: 'Registered dietitian' },
    { id: 'ufc', name: 'Professional Fighter', icon: '🥊', verified: true, description: 'UFC/Professional record' },
    { id: 'movie', name: 'Movie Actor', icon: '🎬', verified: true, description: 'Featured in films' }
  ]
  
  const achievements = [
    { id: 'quick', name: 'Quick Responder', icon: '⚡', unlocked: true, description: 'Responds within 2 hours', rarity: 'common' },
    { id: 'rated', name: 'Top Rated', icon: '⭐', unlocked: true, description: '4.8+ star rating', rarity: 'rare' },
    { id: 'loyal', name: 'Fan Favorite', icon: '❤️', unlocked: true, description: '90%+ subscriber retention', rarity: 'epic' },
    { id: 'earner', name: 'High Earner', icon: '💎', unlocked: true, description: '£50K+ monthly earnings', rarity: 'legendary' },
    { id: 'mentor', name: 'Life Changer', icon: '🌟', unlocked: false, description: '100+ success stories', rarity: 'legendary' }
  ]
  
  const creatorTier = {
    current: 'Elite Creator',
    level: 4,
    nextTier: 'Legendary Creator',
    progress: 85,
    benefits: ['Priority support', 'Featured placement', 'Custom badges', 'Revenue boost']
  }

  useEffect(() => {
    // In a real app, you would fetch profile data based on username
    if (username) {
      console.log(`Loading profile for: ${username}`)
      // For demo purposes, we'll use the mock profile
      // In production, you'd fetch: fetchProfile(username)
    }
  }, [username])

  const posts = [
    {
      id: '1',
      type: 'video',
      title: 'Advanced Deadlift Technique',
      thumbnail: '🏋️',
      visibility: 'subscribers',
      price: null,
      views: 1234,
      likes: 89,
      comments: 23,
      timestamp: '2 hours ago',
      isPinned: true,
      content: 'Check out my latest deadlift technique video. Perfect for advanced lifters looking to improve their form and prevent injuries.'
    },
    {
      id: '2',
      type: 'image',
      title: 'Training Camp Behind the Scenes',
      thumbnail: '📸',
      visibility: 'public',
      price: null,
      views: 2341,
      likes: 156,
      comments: 45,
      timestamp: '1 day ago',
      isPinned: false,
      content: 'Behind the scenes from today\'s training camp. Getting ready for the big fight next month!'
    },
    {
      id: '3',
      type: 'text',
      title: 'Nutrition Tips for Muscle Growth',
      thumbnail: '📝',
      visibility: 'ppv',
      price: '£9.99',
      views: 856,
      likes: 67,
      comments: 12,
      timestamp: '3 days ago',
      isPinned: false,
      content: 'I\'ve put together my top nutrition tips for maximum muscle growth. This is the exact protocol I follow during bulking season.'
    }
  ]

  const reviews = [
    {
      id: '1',
      author: 'Alex M.',
      rating: 5,
      comment: 'Marcus actually texts me back personally! We talk about training, life, everything. He\'s become a real friend.',
      date: '2 weeks ago',
      verified: true
    },
    {
      id: '2',
      author: 'Sarah K.',
      rating: 5,
      comment: 'Best investment I\'ve made. His personal coaching calls have transformed my training.',
      date: '1 month ago',
      verified: true
    },
    {
      id: '3',
      author: 'Mike T.',
      rating: 4,
      comment: 'Great content and personal advice. The only reason it\'s not 5 stars is because sometimes he takes a day to respond, but the quality is worth it.',
      date: '2 months ago',
      verified: true
    }
  ]

  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case 'public':
        return <Globe size={14} className="text-green-400" />
      case 'subscribers':
        return <Users size={14} className="text-blue-400" />
      case 'ppv':
        return <Crown size={14} className="text-purple-400" />
      default:
        return null
    }
  }

  const getVisibilityLabel = (visibility: string, price?: string | null) => {
    switch (visibility) {
      case 'public':
        return 'Public'
      case 'subscribers':
        return 'Subscribers Only'
      case 'ppv':
        return `PPV ${price}`
      default:
        return ''
    }
  }

  const renderPosts = () => (
    <div className="space-y-6">
      {/* Content Collections */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Content Collections</h3>
          <button className="text-orange-400 hover:text-orange-300 text-sm font-semibold">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { 
              id: 'training-series', 
              title: 'UFC Training Series', 
              count: 12, 
              thumbnail: '🥊', 
              price: '£29.99',
              type: 'series'
            },
            { 
              id: 'nutrition-guide', 
              title: 'Complete Nutrition Guide', 
              count: 8, 
              thumbnail: '🥗', 
              price: '£19.99',
              type: 'collection'
            },
            { 
              id: 'behind-scenes', 
              title: 'Behind the Scenes', 
              count: 25, 
              thumbnail: '🎬', 
              price: 'VIP Only',
              type: 'exclusive'
            }
          ].map((collection) => (
            <div key={collection.id} className="bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-colors cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center text-3xl mb-3">
                {collection.thumbnail}
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">{collection.title}</h4>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">{collection.count} items</span>
                <span className={`font-bold ${
                  collection.type === 'exclusive' ? 'text-purple-400' : 'text-green-400'
                }`}>
                  {collection.price}
                </span>
              </div>
              {collection.type === 'series' && (
                <div className="mt-2 bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-semibold">
                  SERIES
                </div>
              )}
              {collection.type === 'exclusive' && (
                <div className="mt-2 bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs font-semibold">
                  VIP ONLY
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Story Highlights */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Story Highlights</h3>
          <button className="text-orange-400 hover:text-orange-300 text-sm font-semibold">
            Add Highlight
          </button>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {[
            { id: 'training', title: 'Training', count: 15, color: 'from-red-500 to-orange-500' },
            { id: 'nutrition', title: 'Nutrition', count: 8, color: 'from-green-500 to-emerald-500' },
            { id: 'lifestyle', title: 'Lifestyle', count: 22, color: 'from-blue-500 to-purple-500' },
            { id: 'fights', title: 'Fight Prep', count: 6, color: 'from-yellow-500 to-red-500' }
          ].map((highlight) => (
            <div key={highlight.id} className="flex-shrink-0 text-center cursor-pointer group">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${highlight.color} p-0.5 group-hover:scale-110 transition-transform`}>
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {highlight.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="text-white text-xs font-medium mt-2">{highlight.title}</div>
              <div className="text-gray-400 text-xs">{highlight.count} stories</div>
            </div>
          ))}
        </div>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-lg font-bold text-white">{post.title}</h3>
                {post.isPinned && (
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">
                    📌 Pinned
                  </span>
                )}
                <div className="flex items-center space-x-1">
                  {getVisibilityIcon(post.visibility)}
                  <span className="text-gray-400 text-sm">
                    {getVisibilityLabel(post.visibility, post.price)}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{post.content}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <Eye size={14} className="mr-1" />
                  {post.views}
                </span>
                <span className="flex items-center">
                  <Heart size={14} className="mr-1" />
                  {post.likes}
                </span>
                <span className="flex items-center">
                  <MessageCircle size={14} className="mr-1" />
                  {post.comments}
                </span>
                <span>{post.timestamp}</span>
              </div>
            </div>
            
            <div className="ml-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                {post.thumbnail}
              </div>
            </div>
          </div>
          
          {post.visibility === 'ppv' && !profile.isSubscribed && (
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2">
                <Crown size={16} />
                <span>Unlock for {post.price}</span>
              </button>
            </div>
          )}
        </div>
      ))}
      
      <div className="text-center">
        <button className="bg-gray-700/50 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
          Load More Posts
        </button>
      </div>
    </div>
  )

  const renderReviews = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Reviews & Ratings</h3>
          <div className="flex items-center space-x-2">
            <Star size={20} className="text-yellow-400 fill-current" />
            <span className="text-white font-bold">{profile.stats?.averageRating}</span>
            <span className="text-gray-400">({profile.stats?.totalReviews} reviews)</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-700/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">{review.author}</span>
                  {review.verified && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-2">{review.comment}</p>
              <span className="text-gray-400 text-sm">{review.date}</span>
            </div>
          ))}
        </div>
        
        {profile.isSubscribed && (
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full">
              Write a Review
            </button>
          </div>
        )}
      </div>
    </div>
  )

  const renderAbout = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4">About</h3>
        <p className="text-gray-300 leading-relaxed mb-6">{profile.bio}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-300">{profile.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-300">Joined {profile.joinDate}</span>
              </div>
              <div className="flex items-center">
                <LinkIcon size={16} className="text-gray-400 mr-2" />
                <a href={profile.website} className="text-orange-400 hover:text-orange-300">
                  {profile.website}
                </a>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-300">Responds {profile.responseTime}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {profile.categories.map((category, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {profile.isCreator && (
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
          <h3 className="text-xl font-bold text-white mb-4">Creator Stats</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.stats?.totalEarnings && (
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{profile.stats.totalEarnings}</div>
                <div className="text-gray-400 text-sm">Total Earnings</div>
              </div>
            )}
            {profile.stats?.monthlySubscribers && (
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{profile.stats.monthlySubscribers}</div>
                <div className="text-gray-400 text-sm">Subscribers</div>
              </div>
            )}
            {profile.stats?.averageRating && (
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{profile.stats.averageRating}</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            )}
            {profile.stats?.totalReviews && (
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{profile.stats.totalReviews}</div>
                <div className="text-gray-400 text-sm">Reviews</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Custom Packages */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Custom Packages</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-xl p-4 relative">
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
              BEST VALUE
            </div>
            <h4 className="text-white font-bold mb-2">🏆 Champion Package</h4>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl font-bold text-orange-400">£150</span>
              <span className="text-gray-400 line-through text-sm">£200</span>
              <span className="text-green-400 text-sm font-semibold">Save £50</span>
            </div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 1-hour video consultation</li>
              <li>• Custom 4-week training program</li>
              <li>• Personalized meal plan</li>
              <li>• Weekly progress check-ins</li>
            </ul>
          </div>
          
          <div className="bg-gray-700/30 border border-gray-600/50 rounded-xl p-4">
            <h4 className="text-white font-bold mb-2">💪 Starter Package</h4>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl font-bold text-blue-400">£75</span>
              <span className="text-gray-400 line-through text-sm">£95</span>
              <span className="text-green-400 text-sm font-semibold">Save £20</span>
            </div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 30-minute video call</li>
              <li>• 2-week training program</li>
              <li>• Basic nutrition guidelines</li>
              <li>• One follow-up message</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recurring Coaching Subscriptions */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Ongoing Coaching Programs</h3>
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-3 py-1">
            <span className="text-green-400 font-semibold text-sm">RECURRING INCOME</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 relative">
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-bold">
              MOST POPULAR
            </div>
            <h4 className="text-white font-bold mb-2">🏋️ Elite Training</h4>
            <div className="text-2xl font-bold text-green-400 mb-2">£199/month</div>
            <ul className="text-gray-300 text-sm space-y-1 mb-4">
              <li>• Weekly 1-hour video calls</li>
              <li>• Custom training programs</li>
              <li>• Daily check-ins via chat</li>
              <li>• Nutrition plan updates</li>
              <li>• Priority message responses</li>
            </ul>
            <div className="text-green-400 text-xs font-semibold">12 active clients</div>
          </div>
          
          <div className="bg-gray-700/30 border border-gray-600/50 rounded-xl p-4">
            <h4 className="text-white font-bold mb-2">💪 Personal Coach</h4>
            <div className="text-2xl font-bold text-blue-400 mb-2">£99/month</div>
            <ul className="text-gray-300 text-sm space-y-1 mb-4">
              <li>• Bi-weekly video calls</li>
              <li>• Monthly program updates</li>
              <li>• Weekly progress reviews</li>
              <li>• Basic nutrition guidance</li>
            </ul>
            <div className="text-blue-400 text-xs font-semibold">8 active clients</div>
          </div>
          
          <div className="bg-gray-700/30 border border-gray-600/50 rounded-xl p-4">
            <h4 className="text-white font-bold mb-2">🥗 Nutrition Only</h4>
            <div className="text-2xl font-bold text-purple-400 mb-2">£49/month</div>
            <ul className="text-gray-300 text-sm space-y-1 mb-4">
              <li>• Monthly meal plan updates</li>
              <li>• Weekly nutrition check-ins</li>
              <li>• Supplement recommendations</li>
              <li>• Recipe suggestions</li>
            </ul>
            <div className="text-purple-400 text-xs font-semibold">15 active clients</div>
          </div>
        </div>
        
        <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-green-400 font-bold">Monthly Recurring Revenue</div>
              <div className="text-gray-300 text-sm">From ongoing coaching programs</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-400">£4,173/month</div>
              <div className="text-green-300 text-sm">35 active coaching clients</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subscription Benefits */}
      {profile.isCreator && !profile.isSubscribed && (
        <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl p-6 border border-orange-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Subscription Benefits</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <CheckCircle size={18} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Exclusive training videos and tutorials</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={18} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Behind-the-scenes content and personal updates</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={18} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Priority responses to your messages</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={18} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Discounted rates on personal coaching</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={18} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Monthly Q&A sessions and live streams</span>
            </div>
          </div>
          
          <button 
            onClick={() => setShowSubscribeModal(true)}
            className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Subscribe for {profile.subscriptionPrice}/month
          </button>
        </div>
      )}
      
      {/* Exclusive Content Tiers */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Exclusive Content Access</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div>
                <div className="text-green-400 font-bold">Basic Access</div>
                <div className="text-green-300 text-sm">Free followers</div>
              </div>
            </div>
            <ul className="text-green-200 text-sm space-y-1">
              <li>• Public posts and videos</li>
              <li>• Basic workout tips</li>
              <li>• General nutrition advice</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <div className="text-blue-400 font-bold">Subscriber Access</div>
                <div className="text-blue-300 text-sm">{profile.subscriptionPrice}/month</div>
              </div>
            </div>
            <ul className="text-blue-200 text-sm space-y-1">
              <li>• Exclusive training videos</li>
              <li>• Behind-the-scenes content</li>
              <li>• Personal updates</li>
              <li>• Priority message responses</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div>
                <div className="text-purple-400 font-bold">VIP Access</div>
                <div className="text-purple-300 text-sm">Gold fans only</div>
              </div>
            </div>
            <ul className="text-purple-200 text-sm space-y-1">
              <li>• Ultra-exclusive content</li>
              <li>• Personal life glimpses</li>
              <li>• Early access to everything</li>
              <li>• Direct line to creator</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Content Calendar Preview */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Upcoming Content</h3>
          <div className="text-gray-400 text-sm">This week</div>
        </div>
        
        <div className="space-y-3">
          {[
            { day: 'Monday', content: 'Chest & Triceps Workout', type: 'Video', access: 'Subscribers' },
            { day: 'Wednesday', content: 'Meal Prep Tutorial', type: 'Video', access: 'Public' },
            { day: 'Friday', content: 'Fight Analysis Breakdown', type: 'Live Stream', access: 'VIP' },
            { day: 'Sunday', content: 'Personal Q&A Session', type: 'Live', access: 'Gold Fans' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div>
                  <div className="text-white font-medium">{item.content}</div>
                  <div className="text-gray-400 text-sm">{item.day} • {item.type}</div>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                item.access === 'Public' ? 'bg-green-500/20 text-green-400' :
                item.access === 'Subscribers' ? 'bg-blue-500/20 text-blue-400' :
                item.access === 'VIP' ? 'bg-purple-500/20 text-purple-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {item.access}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Verification & Achievements Section */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Verification & Achievements</h3>
        
        {/* Creator Tier */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl">
                👑
              </div>
              <div>
                <div className="text-white font-bold">{creatorTier.current}</div>
                <div className="text-purple-300 text-sm">Level {creatorTier.level}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-purple-300 text-sm">Next: {creatorTier.nextTier}</div>
              <div className="text-white font-bold">{creatorTier.progress}%</div>
            </div>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${creatorTier.progress}%` }}
            ></div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {creatorTier.benefits.map((benefit, index) => (
              <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                {benefit}
              </span>
            ))}
          </div>
        </div>
        
        {/* Verification Badges */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Professional Verification</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {verificationBadges.map((badge) => (
              <div key={badge.id} className={`p-3 rounded-xl border ${
                badge.verified 
                  ? 'bg-green-500/20 border-green-500/30' 
                  : 'bg-gray-700/30 border-gray-600/50'
              }`}>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-lg">{badge.icon}</span>
                  <span className={`text-sm font-semibold ${
                    badge.verified ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    {badge.name}
                  </span>
                </div>
                <div className="text-xs text-gray-400">{badge.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievement Badges */}
        <div>
          <h4 className="text-white font-semibold mb-3">Achievement Badges</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`p-3 rounded-xl border relative ${
                achievement.unlocked 
                  ? achievement.rarity === 'legendary' ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30' :
                    achievement.rarity === 'epic' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30' :
                    achievement.rarity === 'rare' ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30' :
                    'bg-green-500/20 border-green-500/30'
                  : 'bg-gray-700/30 border-gray-600/50 opacity-50'
              }`}>
                {achievement.rarity === 'legendary' && achievement.unlocked && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✨</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-lg">{achievement.icon}</span>
                  <span className={`text-sm font-semibold ${
                    achievement.unlocked 
                      ? achievement.rarity === 'legendary' ? 'text-yellow-400' :
                        achievement.rarity === 'epic' ? 'text-purple-400' :
                        achievement.rarity === 'rare' ? 'text-blue-400' :
                        'text-green-400'
                      : 'text-gray-400'
                  }`}>
                    {achievement.name}
                  </span>
                </div>
                <div className="text-xs text-gray-400">{achievement.description}</div>
                
                {achievement.rarity !== 'common' && (
                  <div className={`mt-2 text-xs font-bold ${
                    achievement.rarity === 'legendary' ? 'text-yellow-400' :
                    achievement.rarity === 'epic' ? 'text-purple-400' :
                    'text-blue-400'
                  }`}>
                    {achievement.rarity.toUpperCase()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

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
            Back
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl text-white font-bold shadow-xl">
                {profile.avatar}
              </div>
              {profile.verified && (
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center border-4 border-gray-800">
                  <Star size={20} className="text-white fill-current" />
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
                {profile.isCreator && (
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">
                    Creator
                  </span>
                )}
              </div>
              
              <div className="text-gray-300 text-lg mb-4">@{profile.username}</div>
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{profile.posts}</div>
                  <div className="text-gray-400 text-sm">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{profile.followers.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{profile.following}</div>
                  <div className="text-gray-400 text-sm">Following</div>
                </div>
              </div>

              {profile.isCreator && (
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-500/20 rounded-lg p-3 text-center">
                    <div className="text-green-400 font-bold">{profile.subscriptionPrice}</div>
                    <div className="text-green-300 text-sm">Monthly</div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Responds {profile.responseTime}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3 lg:w-auto w-full">
              {profile.isCreator && !profile.isSubscribed && (
                <button 
                  onClick={() => setShowSubscribeModal(true)}
                  className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Subscribe {profile.subscriptionPrice}
                </button>
              )}
              
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={`font-bold py-3 px-6 rounded-xl transition-all duration-300 ${
                  isFollowing 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
              
              {profile.isCreator && (
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Contact
                </button>
              )}
              
              <div className="flex space-x-2">
                <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors">
                  <Share size={20} className="text-gray-300" />
                </button>
                <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors">
                  <MoreHorizontal size={20} className="text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 mb-8">
          <div className="flex space-x-1 p-2">
            {[
              { id: 'posts', label: 'Posts', count: profile.posts },
              { id: 'about', label: 'About' },
              ...(profile.isCreator ? [{ id: 'reviews', label: 'Reviews', count: profile.stats?.totalReviews }] : [])
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 text-sm opacity-75">({tab.count})</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'posts' && renderPosts()}
          {activeTab === 'about' && renderAbout()}
          {activeTab === 'reviews' && renderReviews()}
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <ContactModal 
          profile={profile}
          onClose={() => setShowContactModal(false)}
        />
      )}
      
      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <SubscribeModal
          profile={profile}
          onClose={() => setShowSubscribeModal(false)}
        />
      )}
    </div>
  )
}

// Contact Modal Component
const ContactModal: React.FC<{
  profile: any
  onClose: () => void
}> = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-md w-full p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Contact {profile.name}</h3>
          <p className="text-gray-300">Choose how you'd like to connect</p>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl border border-blue-500/30 transition-colors">
            <div className="flex items-center space-x-3">
              <MessageCircle size={24} className="text-blue-400" />
              <div className="text-left">
                <div className="text-white font-semibold">Personal Messages</div>
                <div className="text-blue-400 text-sm">{profile.personalChatRate}</div>
              </div>
            </div>
            <div className="bg-blue-500/30 px-2 py-1 rounded text-xs text-blue-300">
              Most Popular
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-green-500/20 hover:bg-green-500/30 rounded-xl border border-green-500/30 transition-colors">
            <div className="flex items-center space-x-3">
              <Phone size={24} className="text-green-400" />
              <div className="text-left">
                <div className="text-white font-semibold">Phone Call</div>
                <div className="text-green-400 text-sm">{profile.phoneCallRate}</div>
              </div>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl border border-purple-500/30 transition-colors">
            <div className="flex items-center space-x-3">
              <Video size={24} className="text-purple-400" />
              <div className="text-left">
                <div className="text-white font-semibold">Video Session</div>
                <div className="text-purple-400 text-sm">{profile.videoCallRate}</div>
              </div>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-xl border border-cyan-500/30 transition-colors">
            <div className="flex items-center space-x-3">
              <Users size={24} className="text-cyan-400" />
              <div className="text-left">
                <div className="text-white font-semibold">Group Session</div>
                <div className="text-cyan-400 text-sm">{profile.groupCallRate}</div>
                <div className="text-gray-400 text-xs">Max {profile.maxGroupSize} people</div>
              </div>
            </div>
            <div className="bg-cyan-500/30 px-2 py-1 rounded text-xs text-cyan-300">
              POPULAR
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-xl border border-yellow-500/30 transition-colors">
            <div className="flex items-center space-x-3">
              <Gift size={24} className="text-yellow-400" />
              <div className="text-left">
                <div className="text-white font-semibold">Send a Tip</div>
                <div className="text-yellow-400 text-sm">Show appreciation</div>
              </div>
            </div>
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-3 px-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

// Subscribe Modal Component
const SubscribeModal: React.FC<{
  profile: any
  onClose: () => void
}> = ({ profile, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState('monthly')
  
  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: profile.subscriptionPrice,
      description: 'Billed monthly',
      popular: true
    },
    {
      id: 'quarterly',
      name: '3 Months',
      price: `£${(parseFloat(profile.subscriptionPrice.replace('£', '')) * 3 * 0.9).toFixed(2)}`,
      description: 'Save 10%',
      popular: false
    },
    {
      id: 'yearly',
      name: 'Yearly',
      price: `£${(parseFloat(profile.subscriptionPrice.replace('£', '')) * 12 * 0.7).toFixed(2)}`,
      description: 'Save 30%',
      popular: false
    }
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-md w-full p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            {profile.avatar}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Subscribe to {profile.name}</h3>
          <p className="text-gray-300">Get exclusive content and personal interactions</p>
        </div>

        <div className="space-y-4 mb-6">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full flex items-center justify-between p-4 rounded-xl border transition-colors ${
                selectedPlan === plan.id
                  ? 'bg-gradient-to-r from-orange-500/20 to-purple-500/20 border-orange-500/50'
                  : 'bg-gray-700/30 border-gray-600/50 hover:bg-gray-700/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === plan.id
                    ? 'border-orange-500 bg-orange-500/20'
                    : 'border-gray-500'
                }`}>
                  {selectedPlan === plan.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                  )}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{plan.name}</div>
                  <div className="text-gray-400 text-sm">{plan.description}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-white font-bold">{plan.price}</div>
                {plan.popular && (
                  <div className="bg-orange-500/30 px-2 py-1 rounded text-xs text-orange-300">
                    POPULAR
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gray-700/30 rounded-xl p-4 mb-6">
          <h4 className="text-white font-semibold mb-3">Subscription Benefits</h4>
          <div className="space-y-2">
            <div className="flex items-start">
              <CheckCircle size={16} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Exclusive training videos and tutorials</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={16} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Behind-the-scenes content and personal updates</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={16} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Priority responses to your messages</span>
            </div>
            <div className="flex items-start">
              <CheckCircle size={16} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Discounted rates on personal coaching</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-colors"
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatorProfilePage