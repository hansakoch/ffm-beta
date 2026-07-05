import React, { useState } from 'react'
import { ArrowLeft, Star, Users, Eye, Heart, MessageCircle, Phone, Video, Gift, Share, Flag, MoreHorizontal, Calendar, MapPin, Link as LinkIcon, Crown, Globe, Lock } from 'lucide-react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const ProfilePage = () => {
  const { username } = useParams()
  const [activeTab, setActiveTab] = useState('posts')
  const [isFollowing, setIsFollowing] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const navigate = useNavigate()

  const profiles: Record<string, any> = {
    HansKoch: {
      id: '2',
      name: 'Hans Koch',
      username: 'HansKoch',
      avatar: 'HK',
      avatarBg: 'from-orange-500 to-red-600',
      avatarPhoto: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      verified: true,
      isCreator: true,
      bio: 'Professional Kickboxing Champion 🥋 | 15+ years in combat sports | Elite strength & conditioning coach helping fighters and athletes reach their peak — whether you\'re stepping into the ring for the first time or training for a world title.',
      location: 'Hamburg, Germany',
      website: 'https://hanskoch.fit',
      joinDate: 'March 2024',
      followers: 47300,
      following: 112,
      posts: 189,
      subscriptionPrice: '£14.99',
      isSubscribed: false,
      personalChatRate: '£4/message',
      phoneCallRate: '£12/minute',
      videoCallRate: '£40/session',
      responseTime: '< 3 hours',
      categories: ['Kickboxing', 'Strength & Conditioning', 'Fight Prep'],
      stats: {
        totalEarnings: '£28,750',
        monthlySubscribers: 843,
        averageRating: 4.8,
        totalReviews: 312
      }
    }
  }

  const defaultProfile = {
    id: '1',
    name: 'Marcus "The Beast" Johnson',
    username: 'marcus_beast',
    avatar: 'MJ',
    avatarBg: 'from-blue-500 to-purple-600',
    avatarPhoto: null,
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
    responseTime: '< 2 hours',
    categories: ['UFC/MMA', 'Personal Training', 'Nutrition'],
    stats: {
      totalEarnings: '£45,230',
      monthlySubscribers: 1234,
      averageRating: 4.9,
      totalReviews: 567
    }
  }

  const profile = (username && profiles[username]) ? profiles[username] : defaultProfile

  const postsByProfile: Record<string, any[]> = {
    HansKoch: [
      {
        id: '1',
        type: 'video',
        title: 'Low Kick Masterclass — Technique Breakdown',
        thumbnail: '🦵',
        visibility: 'subscribers',
        price: null,
        views: 3421,
        likes: 214,
        comments: 47,
        timestamp: '1 day ago',
        isPinned: true
      },
      {
        id: '2',
        type: 'image',
        title: 'Morning Conditioning Routine (Open Access)',
        thumbnail: '🏃',
        visibility: 'public',
        price: null,
        views: 5812,
        likes: 389,
        comments: 73,
        timestamp: '3 days ago',
        isPinned: false
      },
      {
        id: '3',
        type: 'text',
        title: 'Full 8-Week Fight Camp Training Plan',
        thumbnail: '📋',
        visibility: 'ppv',
        price: '£7.99',
        views: 1204,
        likes: 98,
        comments: 19,
        timestamp: '1 week ago',
        isPinned: false
      }
    ]
  }

  const reviewsByProfile: Record<string, any[]> = {
    HansKoch: [
      {
        id: '1',
        author: 'Tim B.',
        rating: 5,
        comment: 'Hans completely changed my footwork in 4 weeks of coaching calls. Absolute wealth of knowledge — and he actually replies himself, not some assistant.',
        date: '3 weeks ago',
        verified: true
      },
      {
        id: '2',
        author: 'Laura W.',
        rating: 5,
        comment: 'Best kickboxing content on any platform. His training plans are detailed, progressive, and actually work. Worth every penny.',
        date: '1 month ago',
        verified: true
      },
      {
        id: '3',
        author: 'Markus S.',
        rating: 4,
        comment: 'Great coach, very responsive. The group coaching sessions are fantastic value. Would love more nutrition content.',
        date: '2 months ago',
        verified: true
      }
    ]
  }

  const defaultPosts = [
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
      isPinned: true
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
      isPinned: false
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
      isPinned: false
    }
  ]

  const defaultReviews = [
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
    }
  ]

  const posts = (username && postsByProfile[username]) ? postsByProfile[username] : defaultPosts
  const reviews = (username && reviewsByProfile[username]) ? reviewsByProfile[username] : defaultReviews

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

  const renderPosts = () => (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
              {post.thumbnail}
            </div>
            
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
                    {post.visibility === 'public' ? 'Public' : 
                     post.visibility === 'subscribers' ? 'Subscribers' : 
                     `PPV ${post.price}`}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400 mb-3">
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
              
              {post.visibility === 'ppv' && !profile.isSubscribed && (
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all">
                  Unlock for {post.price}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderReviews = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Reviews & Ratings</h3>
          <div className="flex items-center space-x-2">
            <Star size={20} className="text-yellow-400 fill-current" />
            <span className="text-white font-bold">{profile.stats.averageRating}</span>
            <span className="text-gray-400">({profile.stats.totalReviews} reviews)</span>
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
      </div>
    </div>
  )

  const renderAbout = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
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
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <h3 className="text-xl font-bold text-white mb-4">Creator Stats</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{profile.stats.totalEarnings}</div>
              <div className="text-gray-400 text-sm">Total Earnings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{profile.stats.monthlySubscribers}</div>
              <div className="text-gray-400 text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{profile.stats.averageRating}</div>
              <div className="text-gray-400 text-sm">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{profile.stats.totalReviews}</div>
              <div className="text-gray-400 text-sm">Reviews</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-orange-400 hover:text-orange-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Avatar */}
            <div className="relative">
              {profile.avatarPhoto ? (
                <img
                  src={profile.avatarPhoto}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-gray-700"
                />
              ) : (
                <div className={`w-32 h-32 bg-gradient-to-br ${profile.avatarBg || 'from-blue-500 to-purple-600'} rounded-full flex items-center justify-center text-4xl text-white font-bold shadow-xl`}>
                  {profile.avatar}
                </div>
              )}
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
            <div className="flex flex-col space-y-3">
              {profile.isCreator && !profile.isSubscribed && (
                <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
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
              ...(profile.isCreator ? [{ id: 'reviews', label: 'Reviews', count: profile.stats.totalReviews }] : [])
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

      <Footer />
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

export default ProfilePage