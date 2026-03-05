import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import ExploreCreators from '../components/ExploreCreators'
import { ShoppingBag } from 'lucide-react'

const PurchasedPage: React.FC = () => {
  return (
    <DashboardLayout>
      {/* CENTER CONTENT */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Empty State */}
          <div className="bg-[#1e293b] border border-[#334155] rounded-lg py-16">
            <div className="text-center">
              <div className="w-32 h-32 bg-[#334155] rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={64} className="text-[#9ca3af]" />
              </div>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-2">
                You have not purchased any content
              </h2>
              <p className="text-[#9ca3af]">
                Explore creators and purchase exclusive content
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-80 h-[calc(100vh-65px)] sticky top-[65px] border-l border-[#334155] bg-[#1e293b] overflow-y-auto p-6">
        <ExploreCreators />
      </aside>
    </DashboardLayout>
  )
}

export default PurchasedPage
