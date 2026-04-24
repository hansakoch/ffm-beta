import React, { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  FileText,
  Edit,
  Wallet,
  Users,
  ImageIcon,
  CheckCircle,
  CreditCard,
  UserCheck,
  Lock,
  Key,
  Globe,
  UserX,
  DollarSign,
  Package,
  ShoppingBag,
  Menu,
  X
} from 'lucide-react'

interface SettingsLayoutProps {
  children: ReactNode
}

interface NavItem {
  path: string
  label: string
  icon: React.ElementType
}

interface NavSection {
  title: string
  items: NavItem[]
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navSections: NavSection[] = [
    {
      title: 'ACCOUNT',
      items: [
        { path: '/feed', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/creator-profile', label: 'My page', icon: FileText },
        { path: '/settings/profile', label: 'Edit my page', icon: Edit },
        { path: '/settings/wallet', label: 'Wallet', icon: Wallet },
        { path: '/referrals', label: 'Referrals', icon: Users },
        { path: '/settings/stories', label: 'My stories', icon: ImageIcon },
        { path: '/settings/verify', label: 'Verified account!', icon: CheckCircle }
      ]
    },
    {
      title: 'SUBSCRIPTION',
      items: [
        { path: '/settings/subscription-pricing', label: 'Subscription price', icon: CreditCard },
        { path: '/settings/subscribers', label: 'My subscribers', icon: UserCheck },
        { path: '/subscriptions', label: 'My subscriptions', icon: Users }
      ]
    },
    {
      title: 'PRIVACY AND SECURITY',
      items: [
        { path: '/settings/privacy', label: 'Privacy and Security', icon: Lock },
        { path: '/settings/password', label: 'Password', icon: Key },
        { path: '/settings/block-countries', label: 'Block Countries', icon: Globe },
        { path: '/settings/restricted-users', label: 'Restricted users', icon: UserX }
      ]
    },
    {
      title: 'PAYMENTS',
      items: [
        { path: '/settings/payments', label: 'Payments', icon: DollarSign },
        { path: '/settings/payments-received', label: 'Payments received', icon: DollarSign },
        { path: '/settings/cards', label: 'My cards', icon: CreditCard },
        { path: '/settings/payout', label: 'Payout method', icon: Wallet },
        { path: '/settings/withdrawals', label: 'Withdrawals', icon: DollarSign }
      ]
    },
    {
      title: 'SHOP',
      items: [
        { path: '/shop', label: 'Shop', icon: ShoppingBag },
        { path: '/settings/products', label: 'My Products', icon: Package },
        { path: '/settings/sales', label: 'Sales', icon: DollarSign },
        { path: '/settings/purchased-items', label: 'Purchased Items', icon: ShoppingBag }
      ]
    }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-[#0f172a] pt-[72px]">
      {/* HEADER */}
      <header className="sticky top-[72px] z-40 bg-[#1e293b] border-b border-[#334155]">
        <div className="max-w-full px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link to="/feed" className="flex items-center hover:opacity-80 transition-opacity min-h-[48px] min-w-[50px] z-50 relative">
                <img
                  src="/artboard_1_copy.png"
                  alt="FansFollowMe"
                  className="h-8 sm:h-10 w-auto hidden sm:block"
                />
                <img
                  src="/celebhero.png"
                  alt="FFM"
                  className="h-8 w-auto sm:hidden"
                />
              </Link>
              <h1 className="text-lg sm:text-xl font-bold text-[#e2e8f0] hidden md:block">Settings</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-[#334155] rounded-lg transition-colors min-w-[44px] min-h-[44px]"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-[#e2e8f0]" />
                ) : (
                  <Menu size={24} className="text-[#e2e8f0]" />
                )}
              </button>
              <Link
                to="/feed"
                className="bg-gradient-to-r from-[#f97316] to-[#9333ea] hover:opacity-90 text-white font-bold px-4 sm:px-5 py-2 rounded-lg transition-opacity text-sm sm:text-base min-h-[44px] flex items-center"
              >
                <span className="hidden sm:inline">Back to Dashboard</span>
                <span className="sm:hidden">Back</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* LEFT SIDEBAR */}
        <aside
          className={`
            fixed md:sticky top-[72px] left-0 md:top-[72px] h-[calc(100vh-72px)] md:h-[calc(100vh-73px-72px)] w-[280px] sm:w-[300px] bg-[#1e293b] border-r border-[#334155] overflow-y-auto z-30
            transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0 pt-0' : '-translate-x-full md:translate-x-0 md:pt-0'}
          `}
        >
          <nav className="p-4 sm:p-6">
            {navSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="text-xs font-bold text-[#9ca3af] mb-3 tracking-wider">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const active = isActive(item.path)
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                          flex items-center space-x-3 px-4 py-3 rounded-lg transition-all min-h-[44px]
                          ${
                            active
                              ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white font-bold'
                              : 'text-[#e2e8f0] hover:bg-[#334155]'
                          }
                        `}
                      >
                        <Icon size={18} />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-5xl w-full">
          {children}
        </main>
      </div>
    </div>
  )
}

export default SettingsLayout
