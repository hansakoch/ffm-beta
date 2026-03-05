import React, { useState, useEffect } from 'react'
import { Crown, Siren as Fire, Star, Gift, Zap, Target } from 'lucide-react'

interface FanProgressWidgetProps {
  fanData: {
    tier: 'Bronze' | 'Silver' | 'Gold' | 'VIP' | 'Legendary'
    points: number
    dailyStreak: number
    totalSpent: number
    nextTierProgress: number
    monthlySpending?: number
    totalInteractions?: number
  }
  creatorName: string
  compact?: boolean
}

const FanProgressWidget: React.FC<FanProgressWidgetProps> = ({ 
  fanData, 
  creatorName, 
  compact = false 
}) => {
  const [showCelebration, setShowCelebration] = useState(false)

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
    Legendary: Crown
  }

  const TierIcon = tierIcons[fanData.tier]

  // Simulate streak milestone celebration
  useEffect(() => {
    if (fanData.dailyStreak > 0 && fanData.dailyStreak % 7 === 0) {
      setShowCelebration(true)
      setTimeout(() => setShowCelebration(false), 3000)
    }
  }, [fanData.dailyStreak])

  if (compact) {
    return (
      <div className={`bg-gradient-to-r ${tierColors[fanData.tier]} rounded-xl p-3 text-white relative overflow-hidden`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TierIcon size={20} />
            <span className="font-bold text-sm">{fanData.tier}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center">
              <Fire size={14} className="mr-1" />
              <span>{fanData.dailyStreak}</span>
            </div>
            <div className="flex items-center">
              <Zap size={14} className="mr-1" />
              <span>{fanData.points}</span>
              {fanData.monthlySpending && (
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">£{fanData.monthlySpending}</div>
                  <div className="text-gray-400 text-sm">This Month</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 relative">
      {/* Celebration Animation */}
      {showCelebration && (
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center z-10 animate-pulse">
          <div className="text-center">
            <div className="text-4xl mb-2">🎉</div>
            <div className="text-white font-bold">Streak Milestone!</div>
            <div className="text-yellow-400">{fanData.dailyStreak} days strong!</div>
          {fanData.totalInteractions && (
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{fanData.totalInteractions}</div>
              <div className="text-gray-400 text-sm">Interactions</div>
            </div>
          )}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Your Fan Status</h3>
        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${tierColors[fanData.tier]} text-white font-bold text-sm flex items-center space-x-1`}>
          <TierIcon size={16} />
          <span>{fanData.tier}</span>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Fire className="text-orange-400" size={24} />
          </div>
          <div className="text-xl font-bold text-white">{fanData.dailyStreak}</div>
          <div className="text-gray-400 text-sm">Day Streak</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Zap className="text-yellow-400" size={24} />
          </div>
          <div className="text-xl font-bold text-white">{fanData.points}</div>
          <div className="text-gray-400 text-sm">Points</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Gift className="text-purple-400" size={24} />
          </div>
          <div className="text-xl font-bold text-white">£{fanData.totalSpent}</div>
          <div className="text-gray-400 text-sm">Supported</div>
        </div>
      </div>

      {/* Next Tier Progress */}
      {fanData.tier !== 'Legendary' && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress to next tier</span>
            <span>{fanData.nextTierProgress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className={`bg-gradient-to-r ${tierColors[fanData.tier]} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${fanData.nextTierProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
          Send Message
        </button>
        <button className="bg-gray-700/50 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
          Send Tip
        </button>
      </div>

      {/* Streak Motivation */}
      {fanData.dailyStreak > 0 && (
        <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
          <div className="text-orange-400 font-bold text-sm mb-1">
            🔥 {fanData.dailyStreak} day streak with {creatorName}!
          </div>
          <div className="text-gray-300 text-xs">
            Keep it going! Next milestone at {Math.ceil(fanData.dailyStreak / 7) * 7} days
          </div>
        </div>
      )}
    </div>
  )
}

export default FanProgressWidget