import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  BarChart3, 
  Users, 
  FileText, 
  DollarSign, 
  Settings, 
  Bell, 
  Globe,
  ChevronDown,
  ChevronUp,
  Wrench,
  CreditCard,
  ShoppingBag,
  Tag,
  Layers,
  HardDrive,
  List,
  ArrowRight
} from 'lucide-react'

const AdminPanel = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [expandedSettings, setExpandedSettings] = useState<string[]>(['general', 'countries'])

  const toggleExpand = (section: string) => {
    if (expandedSettings.includes(section)) {
      setExpandedSettings(expandedSettings.filter(item => item !== section))
    } else {
      setExpandedSettings([...expandedSettings, section])
    }
  }

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { 
      id: 'general-settings', 
      label: 'General Settings', 
      icon: Settings,
      hasSubmenu: true,
      submenu: [
        { id: 'general', label: 'General' },
        { id: 'limits', label: 'Limits' }
      ]
    },
    { id: 'announcements', label: 'Announcements', icon: Bell },
    { id: 'maintenance', label: 'Maintenance mode', icon: Wrench },
    { id: 'billing', label: 'Billing Information', icon: CreditCard },
    { id: 'tax-rates', label: 'Tax Rates', icon: DollarSign },
    { 
      id: 'countries', 
      label: 'Countries / States', 
      icon: Globe,
      hasSubmenu: true,
      submenu: [
        { id: 'countries', label: 'Countries' },
        { id: 'states', label: 'States' }
      ]
    },
    { id: 'email-settings', label: 'Email settings', icon: Settings },
    { id: 'live-streaming', label: 'Live Streaming', icon: BarChart3 },
    { id: 'push-notifications', label: 'Push Notifications', icon: Bell },
    { 
      id: 'stories', 
      label: 'Stories', 
      icon: FileText,
      hasSubmenu: true,
      submenu: []
    },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'products', label: 'Products', icon: Tag },
    { id: 'shop-categories', label: 'Shop Categories', icon: List },
    { id: 'sales', label: 'Sales', icon: DollarSign },
    { id: 'storage', label: 'Storage', icon: HardDrive }
  ]

  const dashboardStats = [
    { 
      id: 'subscriptions',
      icon: <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <Users className="h-6 w-6 text-green-600" />
      </div>,
      value: '1,685',
      label: 'Subscriptions',
      link: 'View all'
    },
    { 
      id: 'earnings',
      icon: <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <DollarSign className="h-6 w-6 text-green-600" />
      </div>,
      value: '£13,420.26',
      label: 'Earnings Net (Admin)',
      link: 'general.see_all_transactions'
    },
    { 
      id: 'members',
      icon: <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <Users className="h-6 w-6 text-green-600" />
      </div>,
      value: '7,697',
      label: 'Members',
      link: 'View all'
    },
    { 
      id: 'posts',
      icon: <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <FileText className="h-6 w-6 text-green-600" />
      </div>,
      value: '566',
      label: 'Posts',
      link: 'View all'
    }
  ]

  const revenueStats = [
    { label: 'Revenue today', value: '£0.00', change: '0%', direction: 'neutral' },
    { label: 'Revenue this week', value: '£0.00', change: '100.00%', direction: 'down' },
    { label: 'Revenue this month', value: '£12.00', change: '1,999.58%', direction: 'down' }
  ]

  const latestMembers = [
    { name: 'Erik fields', username: '@erik7949', date: 'Jun 29, 2025', status: 'Pending', avatar: null },
    { name: 'Michael Kennedy', username: '@michael7948', date: 'Jun 19, 2025', status: 'Active', avatar: 'M' },
    { name: 'Dave vuong', username: '@dave7947', date: 'Jun 15, 2025', status: 'Active', avatar: null },
    { name: 'Jessi Beck', username: '@jessi7946', date: 'Jun 05, 2025', status: 'Active', avatar: 'J' }
  ]

  const recentSubscriptions = [
    { subscriber: 'Date Doctor', subscribed_to: 'When Choco Smiles', date: 'Jul 02, 2025', avatar: null },
    { subscriber: 'Skywalker', subscribed_to: 'Kittykatz', date: 'Jun 05, 2025', avatar: 'S' },
    { subscriber: 'Jessi Beck', subscribed_to: 'Cassandra Alston', date: 'Jun 05, 2025', avatar: 'J' },
    { subscriber: 'Thomas Dumont', subscribed_to: 'Cassandra Alston', date: 'Jun 04, 2025', avatar: null }
  ]

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard <span className="text-sm text-gray-500 font-normal ml-2">v4.7</span></h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{stat.value}</div>
            <div className="text-gray-500 text-sm mb-4">{stat.label}</div>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center group">
              {stat.link} <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        ))}
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {revenueStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-gray-500 text-sm mb-2">{stat.label}</div>
            <div className={`flex items-center ${
              stat.direction === 'down' ? 'text-red-500' : 
              stat.direction === 'up' ? 'text-green-500' : 
              'text-gray-500'
            }`}>
              {stat.direction === 'down' && <span>↓</span>}
              {stat.direction === 'up' && <span>↑</span>}
              <span className="ml-1">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Earnings Chart */}
      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Earnings</h2>
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>This month</option>
            <option>Last month</option>
            <option>Last 3 months</option>
          </select>
        </div>
        
        <div className="h-64 w-full bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
          <div className="text-gray-400">Earnings chart would appear here</div>
        </div>
      </div>

      {/* Members and Subscriptions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Members */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <div className="flex items-center mb-6">
            <Users className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Latest Members</h2>
            <Link to="/panel/admin/creator-status" className="ml-4 text-blue-600 hover:text-blue-800 text-sm flex items-center">
              <Star className="h-4 w-4 mr-1" />
              Manage Creator Status
            </Link>
          </div>
          
          <div className="space-y-4">
            {latestMembers.map((member, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    member.avatar ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}>
                    {member.avatar || (
                      <span className="text-gray-400">
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">{member.name}</div>
                    <div className="text-gray-500 text-sm">{member.username} / {member.date}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {member.status}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center group">
              View All Members <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Recent Subscriptions */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <div className="flex items-center mb-6">
            <Users className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Recent subscriptions</h2>
          </div>
          
          <div className="space-y-4">
            {recentSubscriptions.map((sub, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    sub.avatar ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}>
                    {sub.avatar || (
                      <span className="text-gray-400">
                        {sub.subscriber.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">
                      <span className="text-blue-600">{sub.subscriber}</span> subscribed to <span className="text-blue-600">{sub.subscribed_to}</span>
                    </div>
                    <div className="text-gray-500 text-sm">{sub.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center group">
              View all <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Subscriptions and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subscriptions of the month */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <div className="flex items-center mb-6">
            <Users className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Subscriptions of the month</h2>
          </div>
          
          <div className="h-64 w-full bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
            <div className="text-gray-400">Subscription chart would appear here</div>
          </div>
        </div>

        {/* Members countries */}
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <div className="flex items-center mb-6">
            <Globe className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Members countries</h2>
          </div>
          
          <div className="h-64 w-full bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
            <div className="text-gray-400">World map with member distribution would appear here</div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4">
        © FansFollow.me v4.7 - 2025
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white h-screen sticky top-0 overflow-y-auto">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <img 
              src="/Artboard 1 copy copy copy copy copy copy.png" 
              alt="FansFollow.me" 
              className="h-10 w-auto"
            />
          </div>
        </div>

        <div className="p-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (item.hasSubmenu) {
                      toggleExpand(item.id)
                    } else {
                      setActiveMenu(item.id)
                    }
                  }}
                  className={`flex items-center justify-between w-full px-4 py-3 text-sm rounded-lg transition-colors ${
                    activeMenu === item.id
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.label}</span>
                  </div>
                  {item.hasSubmenu && (
                    expandedSettings.includes(item.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )
                  )}
                </button>

                {/* Submenu */}
                {item.hasSubmenu && expandedSettings.includes(item.id) && (
                  <div className="ml-12 mt-1 space-y-1">
                    {item.submenu.map((subitem) => (
                      <button
                        key={subitem.id}
                        onClick={() => setActiveMenu(subitem.id)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                          activeMenu === subitem.id
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        }`}
                      >
                        {subitem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="p-8">
          {activeMenu === 'dashboard' && renderDashboard()}
          {activeMenu !== 'dashboard' && (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-500">
                Content for {activeMenu} would appear here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel