export interface PageSEO {
  title: string
  description: string
  keywords?: string[]
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: 'FansFollow - Creator Platform for Fitness & Sports',
    description: 'Join the #1 platform for fitness creators, martial artists & athletes. Monetize content with subscriptions, tips, coaching & more. Start earning today.',
    keywords: ['creator platform', 'fitness creators', 'martial arts', 'content monetization', 'fitness coaching', 'athlete platform']
  },

  creators: {
    title: 'Become a Creator - FansFollow',
    description: 'Start earning as a fitness or sports creator. Get 21+ revenue streams, crypto payments, and global reach. Join thousands of successful creators today.',
    keywords: ['become creator', 'fitness creator', 'content creator', 'monetize fitness', 'creator earnings']
  },

  celebrities: {
    title: 'Celebrity Creators - FansFollow',
    description: 'Join elite athletes and celebrities earning on FansFollow. Premium features, verified status, and dedicated support for high-profile creators.',
    keywords: ['celebrity creators', 'athlete platform', 'verified creators', 'celebrity endorsements', 'elite athletes']
  },

  casting: {
    title: 'Creator Casting & Opportunities - FansFollow',
    description: 'Discover casting calls and opportunities for fitness creators. Get featured, collaborate with brands, and grow your audience on FansFollow.',
    keywords: ['creator casting', 'brand deals', 'creator opportunities', 'fitness casting', 'content collaboration']
  },

  business: {
    title: 'Business Solutions - FansFollow',
    description: 'Partner with FansFollow for business growth. Access top fitness creators, run campaigns, and reach millions of engaged fans worldwide.',
    keywords: ['business partnership', 'brand collaboration', 'creator marketing', 'fitness marketing', 'influencer platform']
  },

  support: {
    title: 'Help & Support - FansFollow',
    description: 'Get help with your FansFollow account. Find answers to common questions, contact support, and access creator resources.',
    keywords: ['support', 'help center', 'contact support', 'creator help', 'faq']
  },

  login: {
    title: 'Login - FansFollow',
    description: 'Login to your FansFollow account. Access your dashboard, manage content, connect with fans, and track your earnings.',
    keywords: ['login', 'sign in', 'account access', 'creator login', 'fan login']
  },

  signup: {
    title: 'Sign Up - FansFollow',
    description: 'Create your free FansFollow account. Start monetizing your fitness content in minutes. Join thousands of creators earning worldwide.',
    keywords: ['sign up', 'create account', 'join fansfollow', 'register', 'become creator']
  },

  explore: {
    title: 'Explore Creators - FansFollow',
    description: 'Discover top fitness creators, martial artists, and athletes. Browse exclusive content, training programs, and coaching from verified creators.',
    keywords: ['explore creators', 'find creators', 'fitness content', 'training programs', 'coaching']
  },

  dashboard: {
    title: 'Dashboard - FansFollow',
    description: 'Manage your FansFollow account. View analytics, track earnings, upload content, and engage with your fans all in one place.',
    keywords: ['creator dashboard', 'analytics', 'earnings', 'content management', 'fan engagement']
  },

  profile: {
    title: 'Profile Settings - FansFollow',
    description: 'Update your FansFollow profile. Edit your bio, upload photos, set subscription prices, and customize your creator page.',
    keywords: ['profile settings', 'edit profile', 'creator profile', 'account settings', 'customization']
  },

  messages: {
    title: 'Messages - FansFollow',
    description: 'Connect with fans through direct messaging. Offer paid chats, video calls, and exclusive communication on FansFollow.',
    keywords: ['messages', 'direct messaging', 'fan communication', 'paid chats', 'creator messaging']
  },

  notifications: {
    title: 'Notifications - FansFollow',
    description: 'Stay updated with your FansFollow notifications. Track new subscribers, tips, messages, and engagement from your fans.',
    keywords: ['notifications', 'alerts', 'updates', 'fan activity', 'engagement tracking']
  },

  wallet: {
    title: 'Wallet - FansFollow',
    description: 'Manage your earnings on FansFollow. View balance, track payments, withdraw funds, and accept crypto payments securely.',
    keywords: ['wallet', 'earnings', 'payments', 'withdrawals', 'crypto payments']
  },

  liveStreams: {
    title: 'Live Streams - FansFollow',
    description: 'Watch and host live fitness streams. Real-time workouts, Q&A sessions, and exclusive live content from top creators.',
    keywords: ['live streams', 'live workouts', 'fitness streaming', 'live training', 'real-time coaching']
  },

  groupCoaching: {
    title: 'Group Coaching - FansFollow',
    description: 'Join group coaching programs from expert trainers. Get personalized workouts, nutrition plans, and community support.',
    keywords: ['group coaching', 'fitness programs', 'training plans', 'coaching groups', 'fitness community']
  },

  subscriptions: {
    title: 'Subscription Pricing - FansFollow',
    description: 'Set your subscription prices and offer tiered memberships. Flexible pricing options to maximize your creator earnings.',
    keywords: ['subscription pricing', 'membership tiers', 'pricing strategy', 'subscription plans', 'creator pricing']
  },

  referrals: {
    title: 'Referral Program - FansFollow',
    description: 'Earn extra income by referring creators and fans. Get commission on every referral and grow your network on FansFollow.',
    keywords: ['referral program', 'earn commissions', 'refer creators', 'affiliate earnings', 'referral income']
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FansFollow",
  "alternateName": "FansFollow.me",
  "url": "https://fansfollow.me",
  "logo": "https://fansfollow.me/Artboard-1-transparent.png",
  "description": "Global platform connecting fitness creators, martial artists, and athletes with their fans",
  "sameAs": [
    "https://twitter.com/fansfollowme",
    "https://facebook.com/fansfollowme",
    "https://instagram.com/fansfollowme"
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "FansFollow",
  "url": "https://fansfollow.me",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://fansfollow.me/explore?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})
