import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import { AuthProvider } from './context/AuthContext'
import SEOOptimizer from './components/SEOOptimizer'
import AuthGuard from './components/AuthGuard'

// Pages
import HomePage from './pages/HomePage'
import CelebrityPage from './pages/CelebrityPage'
import CreatorsPage from './pages/CreatorsPage'
import FansPage from './pages/FansPage'
import LoginPage from './pages/LoginPage'
import SupportPage from './pages/SupportPage'
import BusinessPage from './pages/BusinessPage'
import SignupPage from './pages/SignupPage'
import CastingPage from './pages/CastingPage'
import DashboardPage from './pages/DashboardPage'
import ProfileEditPage from './pages/ProfileEditPage'
import MessagingSystem from './components/MessagingSystem'
import PurchasedContent from './components/PurchasedContent'
import CreatorDashboard from './pages/CreatorDashboard'
import AdminPanelPage from './pages/AdminPanelPage'
import ExploreCreators from './components/ExploreCreators'
import SubscriptionManager from './components/SubscriptionManager'
import ProfilePage from './pages/ProfilePage'
import ExploreCreatorsPage from './pages/ExploreCreatorsPage'
import CreatorStatusPage from './pages/CreatorStatusPage'
import LiveStreamsPage from './pages/LiveStreamsPage'
import GroupCoachingPage from './pages/GroupCoachingPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CookiesPage from './pages/CookiesPage'
import FAQPage from './pages/FAQPage'
import ReferralsPage from './pages/ReferralsPage'
import NotFoundPage from './pages/NotFoundPage'
import UserDashboardPage from './pages/UserDashboardPage'
import CreatorProfilePageNew from './pages/CreatorProfilePageNew'
import CreatorDashboardNew from './pages/CreatorDashboardNew'
import NotificationsPage from './pages/NotificationsPage'
import MessagesPage from './pages/MessagesPage'
import ProfileSettingsPage from './pages/ProfileSettingsPage'
import SubscriptionPricingPage from './pages/SubscriptionPricingPage'
import PrivacySecurityPage from './pages/PrivacySecurityPage'
import PasswordPage from './pages/PasswordPage'
import VerifyAccountPage from './pages/VerifyAccountPage'
import WalletPage from './pages/WalletPage'
import WithdrawalsPage from './pages/WithdrawalsPage'
import PaymentsReceivedPage from './pages/PaymentsReceivedPage'
import PayoutMethodPage from './pages/PayoutMethodPage'
import MyCardsPage from './pages/MyCardsPage'
import MySubscribersPage from './pages/MySubscribersPage'
import MySubscriptionsPage from './pages/MySubscriptionsPage'
import BookmarksPage from './pages/BookmarksPage'
import PurchasedPage from './pages/PurchasedPage'
import PromotedPage from './pages/PromotedPage'
import MyStoriesPage from './pages/MyStoriesPage'
import ReferralsSettingsPage from './pages/ReferralsSettingsPage'
import BlockCountriesPage from './pages/BlockCountriesPage'
import RestrictedUsersPage from './pages/RestrictedUsersPage'
import ExplorePage from './pages/ExplorePage'
import LivePage from './pages/LivePage'
import ShopPage from './pages/ShopPage'
import MyProductsPage from './pages/MyProductsPage'
import SalesPage from './pages/SalesPage'
import PurchasedItemsPage from './pages/PurchasedItemsPage'
import PostsPage from './pages/PostsPage'
import LikesPage from './pages/LikesPage'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-[#0b0f1a] overflow-x-hidden">
          <SEOOptimizer />
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/celebrities" element={<CelebrityPage />} />
            <Route path="/creators" element={<CreatorsPage />} />
            <Route path="/fans" element={<FansPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/casting" element={<CastingPage />} />  
            
            {/* Auth pages - no auth required */}
            <Route path="/login" element={
              <AuthGuard requireAuth={false} redirectTo="/dashboard">
                <LoginPage />
              </AuthGuard>
            } />
            <Route path="/signup" element={
              <AuthGuard requireAuth={false} redirectTo="/dashboard">
                <SignupPage />
              </AuthGuard>
            } />
            
            {/* Protected routes - auth required */}
            <Route path="/dashboard" element={
              <AuthGuard>
                <DashboardPage />
              </AuthGuard>
            } />
            <Route path="/feed" element={
              <AuthGuard>
                <UserDashboardPage />
              </AuthGuard>
            } />
            <Route path="/creator-dashboard" element={
              <AuthGuard>
                <CreatorDashboardNew />
              </AuthGuard>
            } />
            <Route path="/creator-profile" element={
              <AuthGuard>
                <CreatorProfilePageNew />
              </AuthGuard>
            } />
            <Route path="/profile/edit" element={
              <AuthGuard>
                <ProfileEditPage />
              </AuthGuard>
            } />
            <Route path="/messages" element={
              <AuthGuard>
                <MessagesPage />
              </AuthGuard>
            } />
            <Route path="/notifications" element={
              <AuthGuard>
                <NotificationsPage />
              </AuthGuard>
            } />
            <Route path="/purchased" element={
              <AuthGuard>
                <PurchasedContent />
              </AuthGuard>
            } />
            <Route path="/explore-creators" element={<ExploreCreatorsPage />} />
            <Route path="/explore" element={
              <AuthGuard>
                <ExplorePage />
              </AuthGuard>
            } />
            <Route path="/live" element={
              <AuthGuard>
                <LivePage />
              </AuthGuard>
            } />
            <Route path="/live-streams" element={<LiveStreamsPage />} />
            <Route path="/shop" element={
              <AuthGuard>
                <ShopPage />
              </AuthGuard>
            } />
            <Route path="/group-coaching" element={
              <AuthGuard>
                <GroupCoachingPage />
              </AuthGuard>
            } />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/referrals" element={
              <AuthGuard>
                <ReferralsPage />
              </AuthGuard>
            } />

            {/* Quick access routes that redirect to settings */}
            <Route path="/settings" element={
              <AuthGuard>
                <ProfileSettingsPage />
              </AuthGuard>
            } />
            <Route path="/posts" element={
              <AuthGuard>
                <PostsPage />
              </AuthGuard>
            } />
            <Route path="/subscribers" element={
              <AuthGuard>
                <MySubscribersPage />
              </AuthGuard>
            } />
            <Route path="/likes" element={
              <AuthGuard>
                <LikesPage />
              </AuthGuard>
            } />

            {/* Settings routes */}
            <Route path="/settings/profile" element={
              <AuthGuard>
                <ProfileSettingsPage />
              </AuthGuard>
            } />
            <Route path="/settings/subscription-pricing" element={
              <AuthGuard>
                <SubscriptionPricingPage />
              </AuthGuard>
            } />
            <Route path="/settings/privacy" element={
              <AuthGuard>
                <PrivacySecurityPage />
              </AuthGuard>
            } />
            <Route path="/settings/password" element={
              <AuthGuard>
                <PasswordPage />
              </AuthGuard>
            } />
            <Route path="/settings/verify" element={
              <AuthGuard>
                <VerifyAccountPage />
              </AuthGuard>
            } />

            {/* Financial settings routes */}
            <Route path="/settings/wallet" element={
              <AuthGuard>
                <WalletPage />
              </AuthGuard>
            } />
            <Route path="/settings/withdrawals" element={
              <AuthGuard>
                <WithdrawalsPage />
              </AuthGuard>
            } />
            <Route path="/settings/payments-received" element={
              <AuthGuard>
                <PaymentsReceivedPage />
              </AuthGuard>
            } />
            <Route path="/settings/payout" element={
              <AuthGuard>
                <PayoutMethodPage />
              </AuthGuard>
            } />
            <Route path="/settings/cards" element={
              <AuthGuard>
                <MyCardsPage />
              </AuthGuard>
            } />

            {/* Content management routes */}
            <Route path="/settings/subscribers" element={
              <AuthGuard>
                <MySubscribersPage />
              </AuthGuard>
            } />
            <Route path="/settings/my-subscriptions" element={
              <AuthGuard>
                <MySubscriptionsPage />
              </AuthGuard>
            } />
            <Route path="/settings/stories" element={
              <AuthGuard>
                <MyStoriesPage />
              </AuthGuard>
            } />
            <Route path="/settings/referrals" element={
              <AuthGuard>
                <ReferralsSettingsPage />
              </AuthGuard>
            } />
            <Route path="/settings/block-countries" element={
              <AuthGuard>
                <BlockCountriesPage />
              </AuthGuard>
            } />
            <Route path="/settings/restricted-users" element={
              <AuthGuard>
                <RestrictedUsersPage />
              </AuthGuard>
            } />
            <Route path="/settings/products" element={
              <AuthGuard>
                <MyProductsPage />
              </AuthGuard>
            } />
            <Route path="/settings/sales" element={
              <AuthGuard>
                <SalesPage />
              </AuthGuard>
            } />
            <Route path="/settings/purchased-items" element={
              <AuthGuard>
                <PurchasedItemsPage />
              </AuthGuard>
            } />

            {/* Main layout content pages */}
            <Route path="/bookmarks" element={
              <AuthGuard>
                <BookmarksPage />
              </AuthGuard>
            } />
            <Route path="/purchased" element={
              <AuthGuard>
                <PurchasedPage />
              </AuthGuard>
            } />
            <Route path="/promoted" element={
              <AuthGuard>
                <PromotedPage />
              </AuthGuard>
            } />

            <Route path="/panel/admin" element={
              <AuthGuard>
                <AdminPanelPage />
              </AuthGuard>
            } />
            <Route path="/panel/admin/creator-status" element={
              <AuthGuard>
                <CreatorStatusPage />
              </AuthGuard>
            } />
            <Route path="/subscriptions" element={
              <AuthGuard>
                <SubscriptionManager />
              </AuthGuard>
            } />
            <Route path="/profile/:username" element={
              <ProfilePage />
            } />

            {/* Root-level username routes — must be last before 404 */}
            <Route path="/:username" element={<ProfilePage />} />

            {/* 404 Catch-all route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App