import React, { useState, useEffect } from 'react'
import { 
  DollarSign, 
  Users, 
  Eye, 
  Heart, 
  TrendingUp, 
  Calendar, 
  MessageCircle,
  ArrowUp,
  ArrowDown,
  Clock, 
  Target, 
  Award,
  Star
} from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeDirection?: 'up' | 'down' | 'neutral'
  icon: React.ElementType
  color: string
  loading?: boolean
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  changeDirection = 'neutral',
  icon: Icon, 
  color,
  loading = false
}) => {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center`}>
          <Icon size={24} className={color} />
        </div>
        {change && (
          <span className={`text-sm font-semibold ${
            changeDirection === 'up' ? 'text-green-400' : 
            changeDirection === 'down' ? 'text-red-400' : 
            'text-gray-400'
          } flex items-center`}>
            {changeDirection === 'up' && <ArrowUp size={14} className="mr-1" />}
            {changeDirection === 'down' && <ArrowDown size={14} className="mr-1" />}
            {change}
          </span>
        )}
      </div>
      
      {loading ? (
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded mb-1"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
        </div>
      ) : (
        <>
          <div className="text-2xl font-bold text-white mb-1">{value}</div>
          <div className="text-gray-400 text-sm">{title}</div>
        </>
      )}
    </div>
  )
}

interface CreatorDashboardStatsProps {
  timeframe?: 'today' | 'week' | 'month' | 'year' | 'all'
  loading?: boolean
}

const CreatorDashboardStats: React.FC<CreatorDashboardStatsProps> = ({ 
  timeframe = 'month',
  loading = false
}) => {
  // In a real app, these would be fetched from an API based on the timeframe
  const [stats, setStats] = useState({
    earnings: '£2,847',
    earningsChange: '+12%',
    earningsDirection: 'up' as const,
    
    subscribers: '1,234',
    subscribersChange: '+8%',
    subscribersDirection: 'up' as const,
    
    views: '45.2K',
    viewsChange: '+15%',
    viewsDirection: 'up' as const,
    
    engagement: '8.4%',
    engagementChange: '+3%',
    engagementDirection: 'up' as const,
    
    messages: '156',
    messagesChange: '+22%',
    messagesDirection: 'up' as const,
    
    newFollowers: '342',
    newFollowersChange: '+18%',
    newFollowersDirection: 'up' as const,
    
    contentViews: '12.4K',
    contentViewsChange: '+9%',
    contentViewsDirection: 'up' as const,
    
    tipAmount: '£456',
    tipAmountChange: '+31%',
    tipAmountDirection: 'up' as const,
    
    // New analytics metrics
    avgResponseTime: '1.2h',
    responseTimeChange: '-15%',
    responseTimeDirection: 'up' as const,
    
    fanRating: '4.9/5',
    ratingChange: '+0.1',
    ratingDirection: 'up' as const,
    
    conversionRate: '12.4%',
    conversionChange: '+2.1%',
    conversionDirection: 'up' as const,
    
    retentionRate: '92%',
    retentionChange: '+5%',
    retentionDirection: 'up' as const
  })
  
  useEffect(() => {
    // Simulate API call to fetch stats based on timeframe
    const fetchStats = async () => {
      // In a real app, you would fetch data from your API here
      console.log(`Fetching stats for timeframe: ${timeframe}`)
      
      // Simulate loading
      setTimeout(() => {
        // Update stats based on timeframe (mock data)
        if (timeframe === 'today') {
          setStats({
            earnings: '£94',
            earningsChange: '+5%',
            earningsDirection: 'up',
            
            subscribers: '12',
            subscribersChange: '+2%',
            subscribersDirection: 'up',
            
            views: '1.2K',
            viewsChange: '+8%',
            viewsDirection: 'up',
            
            engagement: '9.1%',
            engagementChange: '+1.2%',
            engagementDirection: 'up',
            
            messages: '23',
            messagesChange: '+15%',
            messagesDirection: 'up',
            
            newFollowers: '18',
            newFollowersChange: '+10%',
            newFollowersDirection: 'up',
            
            contentViews: '876',
            contentViewsChange: '+7%',
            contentViewsDirection: 'up',
            
            tipAmount: '£32',
            tipAmountChange: '+25%',
            tipAmountDirection: 'up',
            
            avgResponseTime: '45min',
            responseTimeChange: '-8%',
            responseTimeDirection: 'up',
            
            fanRating: '4.8/5',
            ratingChange: '+0.2',
            ratingDirection: 'up',
            
            conversionRate: '15.2%',
            conversionChange: '+3.1%',
            conversionDirection: 'up',
            
            retentionRate: '89%',
            retentionChange: '+2%',
            retentionDirection: 'up'
          })
        } else if (timeframe === 'week') {
          setStats({
            earnings: '£645',
            earningsChange: '+8%',
            earningsDirection: 'up',
            
            subscribers: '78',
            subscribersChange: '+5%',
            subscribersDirection: 'up',
            
            views: '8.7K',
            viewsChange: '+12%',
            viewsDirection: 'up',
            
            engagement: '8.7%',
            engagementChange: '+2.1%',
            engagementDirection: 'up',
            
            messages: '87',
            messagesChange: '+18%',
            messagesDirection: 'up',
            
            newFollowers: '124',
            newFollowersChange: '+15%',
            newFollowersDirection: 'up',
            
            contentViews: '5.2K',
            contentViewsChange: '+8%',
            contentViewsDirection: 'up',
            
            tipAmount: '£187',
            tipAmountChange: '+28%',
            tipAmountDirection: 'up',
            
            avgResponseTime: '1.8h',
            responseTimeChange: '-12%',
            responseTimeDirection: 'up',
            
            fanRating: '4.9/5',
            ratingChange: '+0.1',
            ratingDirection: 'up',
            
            conversionRate: '11.8%',
            conversionChange: '+1.9%',
            conversionDirection: 'up',
            
            retentionRate: '91%',
            retentionChange: '+4%',
            retentionDirection: 'up'
          })
        } else {
          // Default to month
          setStats({
            earnings: '£2,847',
            earningsChange: '+12%',
            earningsDirection: 'up',
            
            subscribers: '1,234',
            subscribersChange: '+8%',
            subscribersDirection: 'up',
            
            views: '45.2K',
            viewsChange: '+15%',
            viewsDirection: 'up',
            
            engagement: '8.4%',
            engagementChange: '+3%',
            engagementDirection: 'up',
            
            messages: '156',
            messagesChange: '+22%',
            messagesDirection: 'up',
            
            newFollowers: '342',
            newFollowersChange: '+18%',
            newFollowersDirection: 'up',
            
            contentViews: '12.4K',
            contentViewsChange: '+9%',
            contentViewsDirection: 'up',
            
            tipAmount: '£456',
            tipAmountChange: '+31%',
            tipAmountDirection: 'up',
            
            avgResponseTime: '1.2h',
            responseTimeChange: '-15%',
            responseTimeDirection: 'up',
            
            fanRating: '4.9/5',
            ratingChange: '+0.1',
            ratingDirection: 'up',
            
            conversionRate: '12.4%',
            conversionChange: '+2.1%',
            conversionDirection: 'up',
            
            retentionRate: '92%',
            retentionChange: '+5%',
            retentionDirection: 'up'
          })
        }
      }, 500)
    }
    
    fetchStats()
  }, [timeframe])

  return (
    <div className="space-y-8">
      {/* Primary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Earnings"
          value={stats.earnings}
          change={stats.earningsChange}
          changeDirection={stats.earningsDirection}
          icon={DollarSign}
          color="text-green-400"
          loading={loading}
        />
        
        <StatCard
          title="Subscribers"
          value={stats.subscribers}
          change={stats.subscribersChange}
          changeDirection={stats.subscribersDirection}
          icon={Users}
          color="text-blue-400"
          loading={loading}
        />
        
        <StatCard
          title="Total Views"
          value={stats.views}
          change={stats.viewsChange}
          changeDirection={stats.viewsDirection}
          icon={Eye}
          color="text-purple-400"
          loading={loading}
        />
        
        <StatCard
          title="Engagement Rate"
          value={stats.engagement}
          change={stats.engagementChange}
          changeDirection={stats.engagementDirection}
          icon={Heart}
          color="text-pink-400"
          loading={loading}
        />
      </div>
      
      {/* Secondary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Messages"
          value={stats.messages}
          change={stats.messagesChange}
          changeDirection={stats.messagesDirection}
          icon={MessageCircle}
          color="text-blue-400"
          loading={loading}
        />
        
        <StatCard
          title="New Followers"
          value={stats.newFollowers}
          change={stats.newFollowersChange}
          changeDirection={stats.newFollowersDirection}
          icon={Users}
          color="text-orange-400"
          loading={loading}
        />
        
        <StatCard
          title="Content Views"
          value={stats.contentViews}
          change={stats.contentViewsChange}
          changeDirection={stats.contentViewsDirection}
          icon={TrendingUp}
          color="text-cyan-400"
          loading={loading}
        />
        
        <StatCard
          title="Tip Amount"
          value={stats.tipAmount}
          change={stats.tipAmountChange}
          changeDirection={stats.tipAmountDirection}
          icon={DollarSign}
          color="text-yellow-400"
          loading={loading}
        />
        
        <StatCard
          title="Avg Response Time"
          value={stats.avgResponseTime}
          change={stats.responseTimeChange}
          changeDirection={stats.responseTimeDirection}
          icon={Clock}
          color="text-blue-400"
          loading={loading}
        />
        
        <StatCard
          title="Fan Rating"
          value={stats.fanRating}
          change={stats.ratingChange}
          changeDirection={stats.ratingDirection}
          icon={Star}
          color="text-yellow-400"
          loading={loading}
        />
        
        <StatCard
          title="Conversion Rate"
          value={stats.conversionRate}
          change={stats.conversionChange}
          changeDirection={stats.conversionDirection}
          icon={Target}
          color="text-purple-400"
          loading={loading}
        />
        
        <StatCard
          title="Retention Rate"
          value={stats.retentionRate}
          change={stats.retentionChange}
          changeDirection={stats.retentionDirection}
          icon={Award}
          color="text-orange-400"
          loading={loading}
        />
      </div>
    </div>
  )
}

export default CreatorDashboardStats