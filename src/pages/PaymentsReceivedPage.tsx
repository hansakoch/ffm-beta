import React, { useState } from 'react'
import SettingsLayout from '../components/SettingsLayout'
import { DollarSign, ChevronLeft, ChevronRight } from 'lucide-react'

interface Payment {
  id: number
  date: string
  amount: number
  type: string
  paidBy: string
  earnings: number
  status: 'SUCCESS' | 'PENDING' | 'FAILED'
}

const PaymentsReceivedPage: React.FC = () => {
  const [filterType, setFilterType] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const payments: Payment[] = [
    { id: 1786, date: 'Feb 02 2025', amount: 5.00, type: 'Tip', paidBy: '@user123', earnings: 3.75, status: 'SUCCESS' },
    { id: 1729, date: 'Nov 06 2024', amount: 5.00, type: 'Tip', paidBy: '@user456', earnings: 3.75, status: 'SUCCESS' },
    { id: 1728, date: 'Nov 06 2024', amount: 5.00, type: 'Tip', paidBy: '@user789', earnings: 3.75, status: 'SUCCESS' },
    { id: 1700, date: 'Oct 15 2024', amount: 10.00, type: 'Subscription', paidBy: '@user321', earnings: 7.50, status: 'SUCCESS' },
    { id: 1685, date: 'Oct 10 2024', amount: 15.00, type: 'Tip', paidBy: '@user654', earnings: 11.25, status: 'SUCCESS' },
    { id: 1650, date: 'Sep 20 2024', amount: 5.00, type: 'Tip', paidBy: '@user987', earnings: 3.75, status: 'SUCCESS' },
    { id: 1620, date: 'Sep 10 2024', amount: 10.00, type: 'Subscription', paidBy: '@user111', earnings: 7.50, status: 'SUCCESS' },
    { id: 1590, date: 'Aug 25 2024', amount: 20.00, type: 'Tip', paidBy: '@user222', earnings: 15.00, status: 'SUCCESS' },
  ]

  const totalPages = Math.ceil(payments.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPayments = payments.slice(startIndex, endIndex)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SUCCESS':
        return 'bg-green-600 text-white'
      case 'PENDING':
        return 'bg-yellow-600 text-white'
      case 'FAILED':
        return 'bg-red-600 text-white'
      default:
        return 'bg-[#334155] text-[#e2e8f0]'
    }
  }

  return (
    <SettingsLayout>
      <div className="max-w-6xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <DollarSign size={28} className="text-[#e2e8f0]" />
                <h1 className="text-3xl font-bold text-[#e2e8f0]">Payments</h1>
              </div>
              <p className="text-[#9ca3af]">History of all payments received</p>
            </div>
            <div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">Payments received</option>
                <option value="tips">Tips</option>
                <option value="subscriptions">Subscriptions</option>
                <option value="messages">Messages</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1e293b] border border-[#334155] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0f172a] border-b border-[#334155]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Paid by
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Earnings
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#334155]">
                {currentPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-[#334155]/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#e2e8f0]">
                      #{payment.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e2e8f0]">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#e2e8f0]">
                      £{payment.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e2e8f0]">
                      {payment.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#e2e8f0]">
                      {payment.paidBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-400">
                      £{payment.earnings.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-[#9ca3af]">
            Showing {startIndex + 1} to {Math.min(endIndex, payments.length)} of {payments.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] hover:bg-[#334155] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-[#f97316] to-[#9333ea] text-white'
                    : 'bg-[#1e293b] border border-[#334155] text-[#e2e8f0] hover:bg-[#334155]'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 bg-[#1e293b] border border-[#334155] rounded-lg text-[#e2e8f0] hover:bg-[#334155] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <p className="text-sm text-[#9ca3af] mb-1">Total Earnings</p>
            <p className="text-2xl font-bold text-green-400">
              £{payments.reduce((sum, p) => sum + p.earnings, 0).toFixed(2)}
            </p>
          </div>
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <p className="text-sm text-[#9ca3af] mb-1">Total Payments</p>
            <p className="text-2xl font-bold text-[#e2e8f0]">{payments.length}</p>
          </div>
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-6">
            <p className="text-sm text-[#9ca3af] mb-1">Average Payment</p>
            <p className="text-2xl font-bold text-[#e2e8f0]">
              £{(payments.reduce((sum, p) => sum + p.amount, 0) / payments.length).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </SettingsLayout>
  )
}

export default PaymentsReceivedPage
