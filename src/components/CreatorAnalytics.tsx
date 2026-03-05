import React, { useState, useEffect } from 'react'
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Eye, 
  MessageCircle,
  Phone,
  Video,
  Gift,
  Calendar,
  Target,
  Award,
  Zap,
  BarChart3,
  PieChart,
  ArrowUp,
  ArrowDown,
  Clock,
  Heart,
  Star,
  Crown,
  Globe,
  Lock
} from 'lucide-react'

const CreatorAnalytics = () => {
  const [timeframe, setTimeframe] = useState('month')
  const [activeMetric, setActiveMetric] = useState('earnings')

  // Comprehensive analytics data
  const analyticsData = {
    earnings: {
      total: 2847,
      change: '+12%',
      breakdown: {
        subscriptions: 1420,
        tips: 567,
        messages: 340,
        calls: 280,
        videos: 240
      },
      trend: [1200, 1350, 1500, 1680, 1890, 2100, 2400, 2650, 2847]
    },
    subscribers: {
      total: 1234,
      change: '+8%',
      breakdown: {
        new: 98,
        retained: 1136,
        churned: 45
      },
      trend: [980, 1020, 1080, 1120, 1150, 1180, 1200, 1220, 1234]
    },
    engagement: {
      views: 45200,
      likes: 3400,
      comments: 890,
      shares: 234,
      avgEngagement: 8.4,
      trend: [6.2, 6.8, 7.1, 7.5, 7.8, 8.0, 8.2, 8.3, 8.4]
    },
    content: {
      posts: 156,
      videos: 89,
      images: 67,
      avgViews: 290,
      topPerforming: [
        { title: 'Advanced Deadlift Technique', views: 2341, earnings: 78.90 },
        { title: 'UFC Training Secrets', views: 1890, earnings: 65.40 },
        { title: 'Nutrition for Athletes', views: 1567, earnings: 52.30 }
      ]
    },
    messaging: {
      totalMessages: 2340,
      avgResponseTime: '1.2 hours',
      messageRevenue: 340,
      callRevenue: 520,
      topFans: [
        { name: 'Alex M.', spent: 245, messages: 89 },
        { name: 'Sarah K.', spent: 189, messages: 67 },
        { name: 'Mike R.', spent: 156, messages: 45 }
      ]
    }
  }

  const optimizationTips = [
    {
      title: 'Your video content gets 3x more engagement!',
      tip: 'Create more video content - it performs much better than images',
      potential: '+£280/month',
      priority: 'high',
      metric: 'engagement'
    },
    {
      title: 'VIP subscribers spend 5x more on messages',
      tip: 'Create VIP-only messaging rates to increase revenue',
      potential: '+£450/month',
      priority: 'high',
      metric: 'messaging'
    },
    {
      title: 'Your response time is excellent!',
      tip: 'Promote your quick response time to attract more fans',
      potential: '+£120/month',
      priority: 'medium',
      metric: 'messaging'
    },
    {
      title: 'Weekend posts get 40% more engagement',
      tip: 'Schedule more content for Saturday and Sunday',
      potential: '+£180/month',
      priority: 'medium',
      metric: 'content'
    }
  ]

  const renderEarningsChart = () => (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
      <h3 className="text-xl font-bold text-white mb-4">Earnings Breakdown</h3>
      
      {/* Revenue Sources */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {Object.entries(analyticsData.earnings.breakdown).map(([source, amount]) => (
          <div key={source} className="text-center">
            <div className="text-lg font-bold text-green-400">£{amount}</div>
            <div className="text-gray-300 text-sm capitalize">{source}</div>
          </div>
        ))}
      </div>
      
      {/* Simple Trend Chart */}
      <div className="h-32 bg-gray-700/30 rounded-xl p-4 flex items-end space-x-2">
        {analyticsData.earnings.trend.map((value, index) => (
          <div 
            key={index}
            className="bg-gradient-to-t from-green-500 to-green-400 rounded-t flex-1"
            style={{ height: `${(value / Math.max(...analyticsData.earnings.trend)) * 100}%` }}
          />
        ))}
      </div>
    </div>
  )

  const renderSubscriberAnalytics = () => (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
      <h3 className="text-xl font-bold text-white mb-4">Subscriber Analytics</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center bg-green-500/10 rounded-xl p-4">
          <div className="text-2xl font-bold text-green-400">{analyticsData.subscribers.breakdown.new}</div>
          <div className="text-green-300 text-sm">New This Month</div>
        </div>
        <div className="text-center bg-blue-500/10 rounded-xl p-4">
          <div className="text-2xl font-bold text-blue-400">{analyticsData.subscribers.breakdown.retained}</div>
          <div className="text-blue-300 text-sm">Retained</div>
        </div>
        <div className="text-center bg-red-500/10 rounded-xl p-4">
          <div className="text-2xl font-bold text-red-400">{analyticsData.subscribers.breakdown.churned}</div>
          <div className="text-red-300 text-sm">Churned</div>
        </div>
      </div>
      
      <div className="bg-gray-700/30 rounded-xl p-4">
        <div className="text-white font-semibold mb-2">Retention Rate</div>
        <div className="w-full bg-gray-600 rounded-full h-3">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{ width: '92%' }}></div>
        </div>
        <div className="text-green-400 text-sm mt-1">92% - Excellent!</div>
      </div>
    </div>
  )

  const renderContentPerformance = () => (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
      <h3 className="text-xl font-bold text-white mb-4">Top Performing Content</h3>
      
      <div className="space-y-4">
        {analyticsData.content.topPerforming.map((post, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <div className="text-white font-semibold">{post.title}</div>
                <div className="text-gray-400 text-sm">{post.views} views</div>
              </div>
            </div>
            <div className="text-green-400 font-bold">£{post.earnings}</div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderMessagingInsights = () => (
    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
      <h3 className="text-xl font-bold text-white mb-4">Messaging Insights</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{analyticsData.messaging.totalMessages}</div>
          <div className="text-gray-300 text-sm">Total Messages</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">£{analyticsData.messaging.messageRevenue}</div>
          <div className="text-gray-300 text-sm">Message Revenue</div>
        </div>
      </div>
      
      <div className="bg-blue-500/10 rounded-xl p-4 mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Clock size={16} className="text-blue-400" />
          <span className="text-white font-semibold">Average Response Time</span>
        </div>
        <div className="text-blue-400 font-bold">{analyticsData.messaging.avgResponseTime}</div>
        <div className="text-blue-300 text-sm">Faster than 85% of creators</div>
      </div>
      
      <div>
        <h4 className="text-white font-semibold mb-3">Top Messaging Fans</h4>
        <div className="space-y-2">
          {analyticsData.messaging.topFans.map((fan, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  {fan.name.charAt(0)}
                </div>
                <span className="text-white">{fan.name}</span>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-bold">£{fan.spent}</div>
                <div className="text-gray-400 text-xs">{fan.messages} messages</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Analytics Dashboard</h2>
          <p className="text-gray-300">Comprehensive insights to grow your creator business</p>
        </div>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-orange-500"
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
          <option value="year">This Year</option>
          <option value="all">All Time</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { 
            id: 'earnings',
            title: 'Total Earnings', 
            value: `£${analyticsData.earnings.total.toLocaleString()}`, 
            change: analyticsData.earnings.change, 
            icon: DollarSign, 
            color: 'text-green-400',
            active: activeMetric === 'earnings'
          },
          { 
            id: 'subscribers',
            title: 'Subscribers', 
            value: analyticsData.subscribers.total.toLocaleString(), 
            change: analyticsData.subscribers.change, 
            icon: Users, 
            color: 'text-blue-400',
            active: activeMetric === 'subscribers'
          },
          { 
            id: 'engagement',
            title: 'Engagement Rate', 
            value: `${analyticsData.engagement.avgEngagement}%`, 
            change: '+0.4%', 
            icon: Heart, 
            color: 'text-pink-400',
            active: activeMetric === 'engagement'
          },
          { 
            id: 'content',
            title: 'Content Views', 
            value: `${(analyticsData.engagement.views / 1000).toFixed(1)}K`, 
            change: '+15%', 
            icon: Eye, 
            color: 'text-purple-400',
            active: activeMetric === 'content'
          }
        ].map((stat, index) => (
          <div 
            key={index} 
            className={`bg-gray-800/50 rounded-2xl p-6 border transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
              stat.active ? 'border-orange-500/50 bg-orange-500/10' : 'border-gray-700/50 hover:border-gray-600/50'
            }`}
            onClick={() => setActiveMetric(stat.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                stat.active 
                  ? 'bg-gradient-to-br from-orange-500 to-purple-600' 
                  : 'bg-gray-700/50'
              }`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <span className="text-sm font-semibold flex items-center text-green-400">
                <ArrowUp size={14} className="mr-1" />
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className={`text-sm ${stat.active ? 'text-orange-300' : 'text-gray-400'}`}>{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Dynamic Content Based on Selected Metric */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {activeMetric === 'earnings' && renderEarningsChart()}
        {activeMetric === 'subscribers' && renderSubscriberAnalytics()}
        {activeMetric === 'engagement' && renderContentPerformance()}
        {activeMetric === 'content' && renderContentPerformance()}
        
        {/* Always show messaging insights */}
        {renderMessagingInsights()}
      </div>

      {/* Optimization Tips */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-6">💡 Optimization Recommendations</h3>
        <div className="space-y-4">
          {optimizationTips.map((tip, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-xl border ${
                tip.priority === 'high' 
                  ? 'bg-orange-500/10 border-orange-500/30' 
                  : 'bg-blue-500/10 border-blue-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">{tip.title}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    tip.priority === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {tip.priority.toUpperCase()}
                  </span>
                  <span className="text-green-400 font-bold">{tip.potential}</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-2">{tip.tip}</p>
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-1 px-3 rounded-lg text-sm hover:from-orange-600 hover:to-purple-700 transition-all">
                Implement
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-bold text-white mb-6">Performance Insights</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Top 15%</div>
            <div className="text-green-400 font-semibold">Earnings Rank</div>
            <div className="text-gray-300 text-sm">Among all creators</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock size={32} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">1.2h</div>
            <div className="text-blue-400 font-semibold">Avg Response</div>
            <div className="text-gray-300 text-sm">Faster than 85%</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star size={32} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-purple-400 font-semibold">Fan Rating</div>
            <div className="text-gray-300 text-sm">567 reviews</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorAnalytics