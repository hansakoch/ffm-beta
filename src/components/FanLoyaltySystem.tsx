import React, { useState, useEffect } from 'react'
import { Crown, Siren as Fire, Star, Gift, Trophy, Zap, Heart, Target, Award, Gem, Shield, Sparkles, Calendar, TrendingUp, Users } from 'lucide-react'

interface FanLoyaltySystemProps {
  fanData: {
    id: string
    name: string
    avatar: string
    tier: 'Bronze' | 'Silver' | 'Gold' | 'VIP' | 'Legendary'
    points: number
    streaks: {
      daily: number
      weekly: number
      monthly: number
    }
    achievements: string[]
    totalSpent: number
    joinDate: string
    monthlySpending: number
    favoriteContentType: string
    totalMessages: number
    totalCalls: number
  }
  creatorName: string
}

const FanLoyaltySystem: React.FC<FanLoyaltySystemProps> = ({ fanData, creatorName }) => {
  const [showRewards, setShowRewards] = useState(false)
  const [claimedReward, setClaimedReward] = useState<string | null>(null)

  const tierInfo = {
    Bronze: { 
      color: 'from-amber-600 to-amber-700', 
      textColor: 'text-amber-400',
      icon: Shield,
      minSpent: 0,
      benefits: ['Basic fan badge', 'Access to public content', 'Standard response time']
    },
    Silver: { 
      color: 'from-gray-400 to-gray-500', 
      textColor: 'text-gray-300',
      icon: Star,
      minSpent: 50,
      benefits: ['Silver badge', '5% discount on calls', 'Priority responses', 'Monthly exclusive content']
    },
    Gold: { 
      color: 'from-yellow-400 to-yellow-600', 
      textColor: 'text-yellow-400',
      icon: Crown,
      minSpent: 200,
      benefits: ['Gold badge', '10% discount on all services', 'Weekly exclusive content', 'Priority support']
    },
    VIP: { 
      color: 'from-purple-500 to-purple-700', 
      textColor: 'text-purple-400',
      icon: Gem,
      minSpent: 500,
      benefits: ['VIP badge', '15% discount on all services', 'Monthly free call', 'Behind-scenes access', 'Direct creator line']
    },
    Legendary: { 
      color: 'from-orange-500 to-red-600', 
      textColor: 'text-orange-400',
      icon: Trophy,
      minSpent: 1000,
      benefits: ['Legendary status', '20% discount on everything', 'Weekly free calls', 'Personal friendship tier', 'Exclusive events access']
    }
  }

  const currentTier = tierInfo[fanData.tier]
  const nextTierKey = Object.keys(tierInfo)[Object.keys(tierInfo).indexOf(fanData.tier) + 1] as keyof typeof tierInfo
  const nextTier = nextTierKey ? tierInfo[nextTierKey] : null

  const achievements = [
    { id: 'first_tip', name: 'First Supporter', description: 'Sent your first tip', icon: '💰', unlocked: fanData.achievements.includes('first_tip') },
    { id: 'week_streak', name: 'Loyal Fan', description: '7-day message streak', icon: '🔥', unlocked: fanData.achievements.includes('week_streak') },
    { id: 'big_spender', name: 'Big Supporter', description: 'Spent over £100', icon: '💎', unlocked: fanData.achievements.includes('big_spender') },
    { id: 'early_bird', name: 'Day One Fan', description: 'Subscribed in first month', icon: '🌟', unlocked: fanData.achievements.includes('early_bird') },
    { id: 'call_master', name: 'Voice Connection', description: 'Had 5+ phone calls', icon: '📞', unlocked: fanData.achievements.includes('call_master') },
    { id: 'video_friend', name: 'Face to Face', description: 'Had 3+ video sessions', icon: '🎥', unlocked: fanData.achievements.includes('video_friend') },
    { id: 'monthly_supporter', name: 'Monthly Champion', description: 'Supported for 6+ months', icon: '🏆', unlocked: fanData.achievements.includes('monthly_supporter') },
    { id: 'super_fan', name: 'Super Fan', description: 'Top 1% of all fans', icon: '⭐', unlocked: fanData.achievements.includes('super_fan') },
    { id: 'content_lover', name: 'Content Connoisseur', description: 'Purchased 20+ pieces of content', icon: '🎬', unlocked: fanData.achievements.includes('content_lover') },
    { id: 'social_butterfly', name: 'Social Butterfly', description: 'Shared 10+ posts', icon: '🦋', unlocked: fanData.achievements.includes('social_butterfly') }
  ]

  const streakRewards = [
    { days: 3, reward: '£2 credit', claimed: fanData.streaks.daily >= 3 },
    { days: 7, reward: '£5 credit', claimed: fanData.streaks.daily >= 7 },
    { days: 14, reward: '£10 credit + exclusive photo', claimed: fanData.streaks.daily >= 14 },
    { days: 30, reward: '£20 credit + free call', claimed: fanData.streaks.daily >= 30 }
  ]

  const monthlyMilestones = [
    { months: 1, reward: 'Bronze Badge', unlocked: true },
    { months: 3, reward: 'Silver Badge + 5% Discount', unlocked: true },
    { months: 6, reward: 'Gold Badge + 10% Discount', unlocked: false },
    { months: 12, reward: 'VIP Status + 15% Discount', unlocked: false },
    { months: 24, reward: 'Legendary Status + 20% Discount', unlocked: false }
  ]

  const progressToNextTier = nextTier 
    ? ((fanData.totalSpent - currentTier.minSpent) / (nextTier.minSpent - currentTier.minSpent)) * 100
    : 100

  return (
    <div className="space-y-6">
      {/* Fan Tier Status */}
      <div className={`bg-gradient-to-r ${currentTier.color} rounded-2xl p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
          <currentTier.icon size={128} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <currentTier.icon size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{fanData.tier} Fan</h2>
              <p className="text-white/80">Supporting {creatorName}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-sm text-white/80">Total Spent</div>
              <div className="text-xl font-bold">£{fanData.totalSpent}</div>
            </div>
            <div>
              <div className="text-sm text-white/80">Loyalty Points</div>
              <div className="text-xl font-bold">{fanData.points}</div>
            </div>
          </div>

          {nextTier && (
            <div>
              <div className="flex justify-between text-sm text-white/80 mb-2">
                <span>Progress to {nextTierKey}</span>
                <span>£{fanData.totalSpent} / £{nextTier.minSpent}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-white rounded-full h-3 transition-all duration-500"
                  style={{ width: `${Math.min(progressToNextTier, 100)}%` }}
                ></div>
              </div>
              <div className="text-sm text-white/80 mt-2">
                £{nextTier.minSpent - fanData.totalSpent} more to unlock {nextTierKey} benefits
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fan Statistics */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <TrendingUp className="mr-2 text-blue-400" />
          Your Fan Statistics
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">£{fanData.monthlySpending}</div>
            <div className="text-gray-300 text-sm">Monthly Spending</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{fanData.totalMessages}</div>
            <div className="text-gray-300 text-sm">Messages Sent</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{fanData.totalCalls}</div>
            <div className="text-gray-300 text-sm">Calls Made</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{fanData.favoriteContentType}</div>
            <div className="text-gray-300 text-sm">Favorite Content</div>
          </div>
        </div>
      </div>

      {/* Current Streaks */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Fire className="mr-2 text-orange-400" />
          Active Streaks
        </h3>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{fanData.streaks.daily}</div>
            <div className="text-gray-300 text-sm">Daily Messages</div>
            <div className="text-orange-300 text-xs">🔥 On fire!</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{fanData.streaks.weekly}</div>
            <div className="text-gray-300 text-sm">Weekly Support</div>
            <div className="text-blue-300 text-xs">💪 Consistent!</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{fanData.streaks.monthly}</div>
            <div className="text-gray-300 text-sm">Monthly Active</div>
            <div className="text-purple-300 text-xs">👑 Loyal!</div>
          </div>
        </div>
      </div>

      {/* Monthly Milestones */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Calendar className="mr-2 text-green-400" />
          Monthly Milestones
        </h3>
        
        <div className="space-y-3">
          {monthlyMilestones.map((milestone, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-3 rounded-xl ${
                milestone.unlocked 
                  ? 'bg-green-500/20 border border-green-500/30' 
                  : 'bg-gray-700/30 border border-gray-600/30'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  milestone.unlocked ? 'bg-green-500' : 'bg-gray-600'
                }`}>
                  {milestone.unlocked ? '✓' : milestone.months}
                </div>
                <div>
                  <div className="text-white font-semibold">{milestone.months} Month{milestone.months > 1 ? 's' : ''}</div>
                  <div className="text-gray-300 text-sm">{milestone.reward}</div>
                </div>
              </div>
              {milestone.unlocked && (
                <div className="text-green-400 font-bold text-sm">UNLOCKED!</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Trophy className="mr-2 text-purple-400" />
          Achievements
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={`p-4 rounded-xl border ${
                achievement.unlocked 
                  ? 'bg-purple-500/20 border-purple-500/30' 
                  : 'bg-gray-700/30 border-gray-600/30 opacity-50'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-white font-bold text-sm">{achievement.name}</div>
                <div className="text-gray-300 text-xs">{achievement.description}</div>
                {achievement.unlocked && (
                  <div className="mt-2 text-purple-400 text-xs font-bold">UNLOCKED!</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tier Benefits */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Sparkles className="mr-2 text-blue-400" />
          Your {fanData.tier} Benefits
        </h3>
        
        <div className="space-y-2">
          {currentTier.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        {nextTier && (
          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h4 className="text-blue-300 font-bold mb-2">Unlock {nextTierKey} Benefits:</h4>
            <div className="space-y-1">
              {nextTier.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-blue-200 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reward Claim Modal */}
      {claimedReward && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-3xl max-w-md w-full p-6 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">Reward Claimed!</h3>
            <p className="text-gray-300 mb-6">You've earned: {claimedReward}</p>
            <button 
              onClick={() => setClaimedReward(null)}
              className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-3 px-8 rounded-xl"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FanLoyaltySystem