import React, { useState } from 'react'
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  CreditCard,
  Gift,
  Eye,
  ChevronDown
} from 'lucide-react'
import DashboardLayout from '../components/DashboardLayout'

const CreatorDashboardNew: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('January')

  const statCards = [
    {
      title: 'Earnings Net',
      value: '£146.25',
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      title: 'Balance',
      value: '£146.25',
      icon: CreditCard,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      link: 'Make withdrawal',
      linkColor: 'text-blue-400'
    },
    {
      title: 'Subscriptions active',
      value: '9',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
    {
      title: 'Net earnings from subscriptions',
      value: '£0.00',
      icon: Users,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20'
    },
    {
      title: 'Net earnings from tips',
      value: '£146.25',
      icon: Gift,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20'
    },
    {
      title: 'Net earnings from Pay Per View',
      value: '£0.00',
      icon: Eye,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20'
    }
  ]

  const revenueCards = [
    {
      title: 'Revenue today',
      value: '£0.00',
      change: '0%',
      isPositive: true
    },
    {
      title: 'Revenue this week',
      value: '£0.00',
      change: '0%',
      isPositive: true
    },
    {
      title: 'Revenue this month',
      value: '£0.00',
      change: '0%',
      isPositive: true
    }
  ]

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  // Mock chart data
  const chartData = [
    { day: 1, value: 20 },
    { day: 5, value: 45 },
    { day: 10, value: 35 },
    { day: 15, value: 70 },
    { day: 20, value: 55 },
    { day: 25, value: 80 },
    { day: 30, value: 65 }
  ]

  return (
    <DashboardLayout>
      {/* FULL WIDTH CENTER CONTENT */}
      <main className="flex-1 px-6 py-6">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#e2e8f0] mb-2">Dashboard</h1>
          <p className="text-[#9ca3af]">Statistics and balance of your account</p>
        </div>

        {/* 6 Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div key={index} className="bg-[#1e293b] rounded-lg border border-[#334155] p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon size={24} className={card.color} />
                  </div>
                </div>
                <h3 className="text-[#9ca3af] text-sm font-medium mb-2">{card.title}</h3>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold text-[#e2e8f0]">{card.value}</span>
                  {card.link && (
                    <button className={`text-sm ${card.linkColor} hover:underline`}>
                      {card.link} →
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* 3 Revenue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {revenueCards.map((card, index) => (
            <div key={index} className="bg-[#1e293b] rounded-lg border border-[#334155] p-6">
              <h3 className="text-[#9ca3af] text-sm font-medium mb-3">{card.title}</h3>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-[#e2e8f0]">{card.value}</span>
                <div className={`flex items-center space-x-1 ${card.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {card.isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="text-sm font-medium">{card.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Earnings Chart */}
        <div className="bg-[#1e293b] rounded-lg border border-[#334155] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#e2e8f0]">Earnings</h2>
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="appearance-none bg-[#334155] text-[#e2e8f0] px-4 py-2 pr-10 rounded-lg border border-[#334155] focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none" />
            </div>
          </div>

          {/* Simple Line Chart */}
          <div className="relative h-64">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm text-[#9ca3af] pr-4">
              <span>£100</span>
              <span>£75</span>
              <span>£50</span>
              <span>£25</span>
              <span>£0</span>
            </div>

            {/* Chart area */}
            <div className="ml-12 h-full relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-t border-[#334155]" />
                ))}
              </div>

              {/* Chart line */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Area under curve */}
                <path
                  d={`M 0 ${256 - (chartData[0].value * 2.56)} ${chartData.map((point, i) =>
                    `L ${(i / (chartData.length - 1)) * 100}% ${256 - (point.value * 2.56)}`
                  ).join(' ')} L 100% 256 L 0 256 Z`}
                  fill="url(#areaGradient)"
                />

                {/* Line */}
                <path
                  d={`M 0 ${256 - (chartData[0].value * 2.56)} ${chartData.map((point, i) =>
                    `L ${(i / (chartData.length - 1)) * 100}% ${256 - (point.value * 2.56)}`
                  ).join(' ')}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points */}
                {chartData.map((point, i) => (
                  <circle
                    key={i}
                    cx={`${(i / (chartData.length - 1)) * 100}%`}
                    cy={256 - (point.value * 2.56)}
                    r="4"
                    fill="#9333ea"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-12 right-0 flex justify-between text-sm text-[#9ca3af] mt-4 pt-4 border-t border-[#334155]">
              <span>1</span>
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>20</span>
              <span>25</span>
              <span>30</span>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  )
}

export default CreatorDashboardNew
