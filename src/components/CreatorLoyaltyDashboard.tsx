import React, { useState } from 'react'
import { 
  Users, 
  Crown, 
  TrendingUp, 
  Gift, 
  Star, 
  Target,
  Award,
  Zap,
  Heart,
  DollarSign,
  Calendar,
  MessageCircle,
  Phone,
  Video
} from 'lucide-react'

const CreatorLoyaltyDashboard = () => {
  const [selectedTier, setSelectedTier] = useState('all')

  // Mock fan data with loyalty metrics
  const fanStats = {
    total: 1234,
    byTier: {
      Bronze: 856,
      Silver: 234,
      Gold: 98,
      VIP: 34,
      Legendary: 12
    },
    averageSpending: {
      Bronze: 15,
      Silver: 45,
      Gold: 120,
      VIP: 280,
      Legendary: 650
    },
    monthlyGrowth: {
      Bronze: 12,
      Silver: 8,
      Gold: 15,
      VIP: 25,
      Legendary: 40
    }
  }

  const loyaltyInsights = [
    {
      title: 'VIP Fans Drive 67% of Revenue',
      description: 'Your top-tier fans are your biggest supporters',
      action: 'Create exclusive VIP content',
      impact: '+£340/month',
      priority: 'high'
    },
    {
      title: '23 Fans Close to Gold Tier',
      description: 'Silver fans need £50 more to upgrade',
      action: 'Offer upgrade incentive package',
      impact: '+£180/month',
      priority: 'medium'
    },
    {
      title: 'Daily Streaks Increase Spending 3x',
      description: 'Fans with 7+ day streaks spend much more',
      action: 'Encourage daily interactions',
      impact: '+£220/month',
      priority: 'high'
    },
    {
      title: 'Video Content Gets VIP Fans',
      description: '89% of VIP fans discovered you through videos',
      action: 'Create more video content',
      impact: '+£150/month',
      priority: 'medium'
    }
  ]

  const topFans = [
    { 
      name: 'Alex M.', 
      tier: 'Legendary', 
      spent: 1240, 
      streak: 45, 
      avatar: 'AM',
      monthlySpending: 180,
      favoriteActivity: 'Video Calls',
      joinDate: '6 months ago'
    },
    { 
      name: 'Sarah K.', 
      tier: 'VIP', 
      spent: 680, 
      streak: 23, 
      avatar: 'SK',
      monthlySpending: 120,
      favoriteActivity: 'Messages',
      joinDate: '4 months ago'
    },
    { 
      name: 'Mike R.', 
      tier: 'VIP', 
      spent: 520, 
      streak: 31, 
      avatar: 'MR',
      monthlySpending: 95,
      favoriteActivity: 'Phone Calls',
      joinDate: '3 months ago'
    },
    { 
      name: 'Emma L.', 
      tier: 'Gold', 
      spent: 340, 
      streak: 12, 
      avatar: 'EL',
      monthlySpending: 75,
      favoriteActivity: 'Content',
      joinDate: '2 months ago'
    },
    { 
      name: 'David T.', 
      tier: 'Gold', 
      spent: 290, 
      streak: 18, 
      avatar: 'DT',
      monthlySpending: 60,
      favoriteActivity: 'Tips',
      joinDate: '5 months ago'
    }
  ]

  const tierColors = {
    Bronze: 'from-amber-600 to-amber-700',
    Silver: 'from-gray-400 to-gray-500',
    Gold: 'from-yellow-400 to-yellow-600',
    VIP: 'from-purple-500 to-purple-700',
    Legendary: 'from-orange-500 to-red-600'
  }

  const tierIcons = {
    Bronze: Star,
    Silver: Star,
    Gold: Crown,
    VIP: Crown,
    Legendary: Trophy
  }

  const rewardPrograms = [
    {
      title: 'Daily Streak Rewards',
      description: 'Reward fans for consecutive daily interactions',
      rewards: ['3 days: £2 credit', '7 days: £5 credit', '30 days: Free call'],
      active: true
    },
    {
      title: 'Spending Milestones',
      description: 'Automatic tier upgrades based on total spending',
      rewards: ['£50: Silver', '£200: Gold', '£500: VIP', '£1000: Legendary'],
      active: true
    },
    {
      title: 'Referral Bonuses',
      description: 'Reward fans for bringing new subscribers',
      rewards: ['New sub: £10 credit', '5 refs: VIP upgrade', '10 refs: Free month'],
      active: false
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Fan Loyalty Dashboard</h2>
        <p className="text-gray-300">Track your most loyal supporters and optimize fan engagement</p>
      </div>

      {/* Fan Tier Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {Object.entries(fanStats.byTier).map(([tier, count]) => {
          const TierIcon = tierIcons[tier as keyof typeof tierIcons]
          return (
            <div 
              key={tier}
              className={`bg-gradient-to-br ${tierColors[tier as keyof typeof tierColors]} rounded-2xl p-4 text-white cursor-pointer transform hover:scale-105 transition-all duration-300`}
              onClick={() => setSelectedTier(tier.toLowerCase())}
            >
              <div className="text-center">
                <TierIcon size={24} className="mx-auto mb-2" />
                <div className="text-2xl font-bold">{count}</div>
                <div className="text-sm opacity-90">{tier} Fans</div>
                <div className="text-xs opacity-75 mt-1">
                  Avg: £{fanStats.averageSpending[tier as keyof typeof fanStats.averageSpending]}/mo
                </div>
                <div className="text-xs opacity-75">
                  +{fanStats.monthlyGrowth[tier as keyof typeof fanStats.monthlyGrowth]}% growth
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Revenue by Tier */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <DollarSign className="mr-2 text-green-400" />
          Revenue by Fan Tier
        </h3>
        
        <div className="space-y-4">
          {Object.entries(fanStats.byTier).map(([tier, count]) => {
            const avgSpending = fanStats.averageSpending[tier as keyof typeof fanStats.averageSpending]
            const totalRevenue = count * avgSpending
            const percentage = (totalRevenue / Object.entries(fanStats.byTier).reduce((sum, [t, c]) => 
              sum + (c * fanStats.averageSpending[t as keyof typeof fanStats.averageSpending]), 0)) * 100
            
            return (
              <div key={tier} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${tierColors[tier as keyof typeof tierColors]}`}></div>
                  <span className="text-white font-semibold">{tier}</span>
                  <span className="text-gray-400">({count} fans)</span>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold">£{totalRevenue.toLocaleString()}/mo</div>
                  <div className="text-gray-400 text-sm">{percentage.toFixed(1)}% of revenue</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Loyalty Insights */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Target className="mr-2 text-orange-400" />
          Loyalty Optimization Opportunities
        </h3>
        
        <div className="space-y-4">
          {loyaltyInsights.map((insight, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl border ${
                insight.priority === 'high' 
                  ? 'bg-orange-500/10 border-orange-500/30' 
                  : 'bg-blue-500/10 border-blue-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">{insight.title}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    insight.priority === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {insight.priority.toUpperCase()}
                  </span>
                  <span className="text-green-400 font-bold">{insight.impact}</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-2">{insight.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">💡 {insight.action}</span>
                <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-1 px-3 rounded-lg text-sm hover:from-orange-600 hover:to-purple-700 transition-all">
                  Implement
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Fans */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Crown className="mr-2 text-yellow-400" />
          Your Most Loyal Fans
        </h3>
        
        <div className="space-y-4">
          {topFans.map((fan, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {fan.avatar}
                  </div>
                  <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r ${tierColors[fan.tier as keyof typeof tierColors]} flex items-center justify-center`}>
                    <Crown size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-white font-semibold">{fan.name}</div>
                  <div className="text-gray-400 text-sm">{fan.tier} Fan • {fan.joinDate}</div>
                  <div className="text-gray-500 text-xs">Loves: {fan.favoriteActivity}</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-green-400 font-bold">£{fan.spent}</div>
                <div className="text-blue-400 text-sm">£{fan.monthlySpending}/month</div>
                <div className="text-orange-400 text-sm flex items-center">
                  <Zap size={12} className="mr-1" />
                  {fan.streak} day streak
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all">
                Message
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Reward Programs */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Gift className="mr-2 text-purple-400" />
          Loyalty Reward Programs
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {rewardPrograms.map((program, index) => (
            <div key={index} className={`p-4 rounded-xl border ${
              program.active 
                ? 'bg-green-500/10 border-green-500/30' 
                : 'bg-gray-700/30 border-gray-600/30'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-bold">{program.title}</h4>
                <div className={`w-3 h-3 rounded-full ${
                  program.active ? 'bg-green-400' : 'bg-gray-500'
                }`}></div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{program.description}</p>
              <div className="space-y-1">
                {program.rewards.map((reward, idx) => (
                  <div key={idx} className="text-xs text-gray-400">• {reward}</div>
                ))}
              </div>
              <button className={`mt-3 w-full py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                program.active 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}>
                {program.active ? 'Disable' : 'Enable'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-6">Fan Engagement Actions</h3>
        
        <div className="grid md:grid-cols-4 gap-4">
          <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
            <Gift size={20} />
            <span>Send Rewards</span>
          </button>
          <button className="bg-gray-700/50 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
            <Star size={20} />
            <span>Create Challenge</span>
          </button>
          <button className="bg-gray-700/50 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
            <Heart size={20} />
            <span>Thank Top Fans</span>
          </button>
          <button className="bg-gray-700/50 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
            <MessageCircle size={20} />
            <span>Broadcast Message</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatorLoyaltyDashboard