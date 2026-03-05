import React, { useState, useEffect } from 'react'
import { 
  Users, 
  Video, 
  Calendar, 
  Clock, 
  DollarSign, 
  Star, 
  Target,
  Plus,
  Settings,
  Play,
  Pause,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  MessageCircle,
  Hand,
  Award,
  Crown
} from 'lucide-react'

interface GroupSession {
  id: string
  title: string
  description: string
  creator: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  maxParticipants: number
  currentParticipants: number
  pricePerPerson: number
  duration: number // minutes
  scheduledTime: string
  category: string
  status: 'scheduled' | 'live' | 'completed'
  participants: {
    id: string
    name: string
    avatar: string
    tier: string
    joinedAt?: string
  }[]
  earnings: number
  tags: string[]
}

interface GroupCoachingSystemProps {
  userType: 'creator' | 'fan'
  userId: string
}

const GroupCoachingSystem: React.FC<GroupCoachingSystemProps> = ({ userType, userId }) => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedSession, setSelectedSession] = useState<GroupSession | null>(null)

  // Mock data - in real app this would come from API
  const groupSessions: GroupSession[] = [
    {
      id: '1',
      title: 'Advanced Deadlift Technique Masterclass',
      description: 'Learn proper deadlift form, common mistakes, and advanced variations. Interactive Q&A included.',
      creator: {
        name: 'Marcus "The Beast" Johnson',
        username: 'marcus_beast',
        avatar: 'MJ',
        verified: true
      },
      maxParticipants: 8,
      currentParticipants: 6,
      pricePerPerson: 15,
      duration: 60,
      scheduledTime: '2024-01-20T15:00:00Z',
      category: 'Strength Training',
      status: 'scheduled',
      participants: [
        { id: '1', name: 'Alex M.', avatar: 'AM', tier: 'VIP' },
        { id: '2', name: 'Sarah K.', avatar: 'SK', tier: 'Gold' },
        { id: '3', name: 'Mike R.', avatar: 'MR', tier: 'Silver' },
        { id: '4', name: 'Emma L.', avatar: 'EL', tier: 'Gold' },
        { id: '5', name: 'David T.', avatar: 'DT', tier: 'Bronze' },
        { id: '6', name: 'Lisa W.', avatar: 'LW', tier: 'VIP' }
      ],
      earnings: 90,
      tags: ['Deadlift', 'Form', 'Strength']
    },
    {
      id: '2',
      title: 'Nutrition Q&A: Meal Planning for Athletes',
      description: 'Interactive session covering meal timing, macros, and supplements for peak performance.',
      creator: {
        name: 'Dr. Luna Chen',
        username: 'dr_luna',
        avatar: 'LC',
        verified: true
      },
      maxParticipants: 12,
      currentParticipants: 9,
      pricePerPerson: 12,
      duration: 45,
      scheduledTime: '2024-01-21T18:00:00Z',
      category: 'Nutrition',
      status: 'scheduled',
      participants: [
        { id: '7', name: 'Tom H.', avatar: 'TH', tier: 'Gold' },
        { id: '8', name: 'Nina P.', avatar: 'NP', tier: 'Silver' },
        { id: '9', name: 'Jake S.', avatar: 'JS', tier: 'VIP' }
      ],
      earnings: 108,
      tags: ['Nutrition', 'Meal Prep', 'Q&A']
    },
    {
      id: '3',
      title: 'Boxing Fundamentals Workshop',
      description: 'Learn basic boxing stance, footwork, and punch combinations in this hands-on group session.',
      creator: {
        name: 'Sarah "Iron" Rodriguez',
        username: 'sarah_iron',
        avatar: 'SR',
        verified: true
      },
      maxParticipants: 6,
      currentParticipants: 4,
      pricePerPerson: 20,
      duration: 90,
      scheduledTime: '2024-01-22T16:00:00Z',
      category: 'Boxing',
      status: 'live',
      participants: [
        { id: '10', name: 'Carlos R.', avatar: 'CR', tier: 'Legendary', joinedAt: '16:02' },
        { id: '11', name: 'Maya K.', avatar: 'MK', tier: 'VIP', joinedAt: '16:01' },
        { id: '12', name: 'Ryan T.', avatar: 'RT', tier: 'Gold', joinedAt: '16:00' },
        { id: '13', name: 'Zoe M.', avatar: 'ZM', tier: 'Silver', joinedAt: '16:03' }
      ],
      earnings: 80,
      tags: ['Boxing', 'Fundamentals', 'Workshop']
    }
  ]

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const getTierColor = (tier: string) => {
    const colors = {
      Bronze: 'text-amber-400',
      Silver: 'text-gray-300',
      Gold: 'text-yellow-400',
      VIP: 'text-purple-400',
      Legendary: 'text-orange-400'
    }
    return colors[tier as keyof typeof colors] || 'text-gray-400'
  }

  const renderCreatorView = () => (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Group Coaching Sessions</h2>
          <p className="text-gray-300">Host multiple fans in one session - maximize your earnings!</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Create Session</span>
        </button>
      </div>

      {/* Revenue Summary */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-green-400 mb-2">£{groupSessions.reduce((sum, s) => sum + s.earnings, 0)}</div>
          <div className="text-gray-300">Total Earnings</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-blue-400 mb-2">{groupSessions.length}</div>
          <div className="text-gray-300">Total Sessions</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-purple-400 mb-2">{groupSessions.reduce((sum, s) => sum + s.currentParticipants, 0)}</div>
          <div className="text-gray-300">Total Participants</div>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
          <div className="text-2xl font-bold text-orange-400 mb-2">£{Math.round(groupSessions.reduce((sum, s) => sum + s.earnings, 0) / groupSessions.length)}</div>
          <div className="text-gray-300">Avg per Session</div>
        </div>
      </div>

      {/* Sessions List */}
      <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex space-x-1">
            {['upcoming', 'live', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {groupSessions
              .filter(session => session.status === activeTab || (activeTab === 'upcoming' && session.status === 'scheduled'))
              .map((session) => (
                <div key={session.id} className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{session.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          session.status === 'live' ? 'bg-red-500/20 text-red-400 animate-pulse' :
                          session.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {session.status === 'live' ? '🔴 LIVE' : 
                           session.status === 'scheduled' ? '📅 SCHEDULED' : '✅ COMPLETED'}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">{session.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{formatTime(session.scheduledTime)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{session.duration} min</span>
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          <span>{session.currentParticipants}/{session.maxParticipants}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign size={14} className="mr-1" />
                          <span>£{session.pricePerPerson}/person</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-xl">£{session.earnings}</div>
                      <div className="text-gray-400 text-sm">earned</div>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Participants:</h4>
                    <div className="flex flex-wrap gap-2">
                      {session.participants.map((participant) => (
                        <div key={participant.id} className="flex items-center space-x-2 bg-gray-600/30 rounded-lg px-3 py-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {participant.avatar}
                          </div>
                          <span className="text-white text-sm">{participant.name}</span>
                          <span className={`text-xs font-semibold ${getTierColor(participant.tier)}`}>
                            {participant.tier}
                          </span>
                          {participant.joinedAt && (
                            <span className="text-gray-400 text-xs">({participant.joinedAt})</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    {session.status === 'scheduled' && (
                      <>
                        <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:from-orange-600 hover:to-purple-700 transition-all">
                          Edit Session
                        </button>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all">
                          Start Early
                        </button>
                      </>
                    )}
                    {session.status === 'live' && (
                      <button 
                        onClick={() => setSelectedSession(session)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center space-x-2"
                      >
                        <Video size={16} />
                        <span>Join Live Session</span>
                      </button>
                    )}
                    {session.status === 'completed' && (
                      <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-all">
                        View Recording
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderFanView = () => (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Group Coaching Sessions</h2>
        <p className="text-gray-300">Join small group sessions with your favorite creators!</p>
      </div>

      {/* Available Sessions */}
      <div className="grid md:grid-cols-2 gap-6">
        {groupSessions
          .filter(session => session.status === 'scheduled' && session.currentParticipants < session.maxParticipants)
          .map((session) => (
            <div key={session.id} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {session.creator.avatar}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold">{session.creator.name}</span>
                    {session.creator.verified && (
                      <Star size={16} className="text-yellow-400 fill-current" />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">@{session.creator.username}</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{session.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{session.description}</p>

              <div className="space-y-2 text-sm text-gray-400 mb-4">
                <div className="flex items-center justify-between">
                  <span>When:</span>
                  <span className="text-white">{formatTime(session.scheduledTime)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Duration:</span>
                  <span className="text-white">{session.duration} minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Spots:</span>
                  <span className="text-white">{session.currentParticipants}/{session.maxParticipants}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Price:</span>
                  <span className="text-green-400 font-bold">£{session.pricePerPerson}</span>
                </div>
              </div>

              <div className="flex space-x-2 mb-4">
                {session.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300">
                Join Session - £{session.pricePerPerson}
              </button>
            </div>
          ))}
      </div>

      {/* My Sessions */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4">My Upcoming Sessions</h3>
        <div className="space-y-3">
          {groupSessions
            .filter(session => session.participants.some(p => p.id === userId))
            .map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                <div>
                  <h4 className="text-white font-semibold">{session.title}</h4>
                  <p className="text-gray-300 text-sm">with {session.creator.name}</p>
                  <p className="text-gray-400 text-xs">{formatTime(session.scheduledTime)}</p>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold">£{session.pricePerPerson}</div>
                  {session.status === 'live' && (
                    <button className="mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg text-sm">
                      Join Now
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {userType === 'creator' ? renderCreatorView() : renderFanView()}
      </div>

      {/* Create Session Modal */}
      {showCreateModal && (
        <CreateSessionModal onClose={() => setShowCreateModal(false)} />
      )}

      {/* Live Session Interface */}
      {selectedSession && (
        <LiveSessionInterface 
          session={selectedSession} 
          onClose={() => setSelectedSession(null)} 
        />
      )}
    </div>
  )
}

// Create Session Modal Component
const CreateSessionModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    maxParticipants: 6,
    pricePerPerson: 25,
    duration: 60,
    scheduledTime: '',
    category: 'Fitness Training'
  })

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Create Group Session</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Session Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              placeholder="e.g., Advanced Deadlift Masterclass"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white resize-none"
              rows={3}
              placeholder="Describe what participants will learn..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Max Participants</label>
              <select
                value={formData.maxParticipants}
                onChange={(e) => setFormData(prev => ({ ...prev, maxParticipants: parseInt(e.target.value) }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              >
                {[4, 6, 8, 10, 12, 15].map(num => (
                  <option key={num} value={num}>{num} people</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price per Person</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-600 bg-gray-700/30 text-gray-400">£</span>
                <input
                  type="number"
                  value={formData.pricePerPerson}
                  onChange={(e) => setFormData(prev => ({ ...prev, pricePerPerson: parseInt(e.target.value) }))}
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-r-xl focus:ring-2 focus:ring-orange-500 text-white"
                  min="5"
                  step="5"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              >
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>1 hour</option>
                <option value={90}>1.5 hours</option>
                <option value={120}>2 hours</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
              >
                <option value="Fitness Training">Fitness Training</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Martial Arts">Martial Arts</option>
                <option value="Boxing">Boxing</option>
                <option value="Bodybuilding">Bodybuilding</option>
                <option value="Yoga">Yoga</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Scheduled Time</label>
            <input
              type="datetime-local"
              value={formData.scheduledTime}
              onChange={(e) => setFormData(prev => ({ ...prev, scheduledTime: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 text-white"
            />
          </div>

          {/* Revenue Calculation */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <h4 className="text-green-400 font-bold mb-2">Revenue Calculation</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Price per person:</span>
                <span className="text-white">£{formData.pricePerPerson}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Max participants:</span>
                <span className="text-white">{formData.maxParticipants}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-gray-300">Max earnings:</span>
                <span className="text-green-400">£{formData.pricePerPerson * formData.maxParticipants}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">You keep (80%+):</span>
                <span className="text-green-300">£{Math.round(formData.pricePerPerson * formData.maxParticipants * 0.8)}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300"
            >
              Create Session
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Live Session Interface Component
const LiveSessionInterface: React.FC<{ 
  session: GroupSession
  onClose: () => void 
}> = ({ session, onClose }) => {
  const [isMuted, setIsMuted] = useState(true)
  const [isCameraOff, setIsCameraOff] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [raisedHand, setRaisedHand] = useState(false)

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900/90 backdrop-blur-lg border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold">{session.title}</h3>
            <p className="text-gray-300 text-sm">with {session.creator.name}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-red-400">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-bold">LIVE</span>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Main Video Area */}
        <div className="flex-1 bg-gray-900 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl mb-4">
                {session.creator.avatar}
              </div>
              <h4 className="text-white font-bold text-xl">{session.creator.name}</h4>
              <p className="text-gray-300">Leading the session</p>
            </div>
          </div>

          {/* Participant Grid */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="grid grid-cols-6 gap-2">
              {session.participants.slice(0, 6).map((participant) => (
                <div key={participant.id} className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center text-white font-bold border-2 border-gray-500">
                    {participant.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h4 className="text-white font-bold">Session Chat</h4>
            <p className="text-gray-400 text-sm">{session.participants.length} participants</p>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="text-center text-gray-400 text-sm">Session started</div>
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  MJ
                </div>
                <div>
                  <div className="text-white text-sm">Marcus Johnson</div>
                  <div className="text-gray-300 text-sm">Welcome everyone! Let's start with proper form basics.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg">
                <MessageCircle size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-900/90 backdrop-blur-lg border-t border-gray-700 p-4">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-3 rounded-full transition-all ${
              isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-700'
            }`}
          >
            {isMuted ? <MicOff size={20} className="text-white" /> : <Mic size={20} className="text-white" />}
          </button>

          <button
            onClick={() => setIsCameraOff(!isCameraOff)}
            className={`p-3 rounded-full transition-all ${
              isCameraOff ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-700'
            }`}
          >
            {isCameraOff ? <CameraOff size={20} className="text-white" /> : <Camera size={20} className="text-white" />}
          </button>

          <button
            onClick={() => setRaisedHand(!raisedHand)}
            className={`p-3 rounded-full transition-all ${
              raisedHand ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-600 hover:bg-gray-700'
            }`}
          >
            <Hand size={20} className="text-white" />
          </button>

          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            Leave Session
          </button>
        </div>
      </div>
    </div>
  )
}

export default GroupCoachingSystem