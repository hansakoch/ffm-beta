import React, { useState } from 'react'
import { DollarSign, Users, Crown, Star, CheckCircle, Globe, MessageCircle, Phone, Video, Gift, Lock, Heart, TrendingUp, Zap, Calendar, FileText, Camera, Mic, Award, Target, ShoppingBag, Percent, BookOpen, UserCheck, Headphones, Clock } from 'lucide-react'

const RevenueStreams = () => {
  const [activeTab, setActiveTab] = useState("content-monetization")

  const contentMonetization = [
    {
      id: "paid-subscriptions",
      title: "Paid Subscriptions",
      icon: <Users className="h-8 w-8" />,
      description: "Monthly recurring revenue from exclusive content access",
      details: [
        "Set monthly rates ($5-$100+)",
        "Exclusive workout videos and nutrition content",
        "Behind-the-scenes access and personal updates",
        "Subscriber-only live streams and Q&As",
        "Build predictable recurring income"
      ],
      earnings: "$500-5,000/month",
      difficulty: "Easy"
    },
    {
      id: "profile-tips",
      title: "Profile Section Tips",
      icon: <Heart className="h-8 w-8" />,
      description: "Allow tips directly on your profile for fan appreciation",
      details: [
        "Enable tip jar on your main profile",
        "Custom tip amounts from $1-$500+",
        "Thank fans personally for larger tips",
        "Build loyalty through appreciation and recognition",
        "No content required - just fan appreciation"
      ],
      earnings: "$200-1,500/month",
      difficulty: "Easy"
    },
    {
      id: "post-tips",
      title: "Individual Post Tips",
      icon: <FileText className="h-8 w-8" />,
      description: "Enable tips on every single post you make",
      details: [
        "Tips enabled on all posts automatically",
        "Fans can tip on workout videos, progress pics, advice",
        "Build engagement through tip appreciation",
        "Turn every post into a potential revenue source",
        "Encourage fan interaction and support"
      ],
      earnings: "$300-2,000/month",
      difficulty: "Easy"
    },
    {
      id: "live-tips-gifts",
      title: "Live Show Tips & Gifts",
      icon: <Gift className="h-8 w-8" />,
      description: "Real-time monetization during live streams",
      details: [
        "Real-time tips during live workouts and Q&As",
        "Virtual gifts and special donations",
        "Tip goals and interactive challenges",
        "Thank supporters live for immediate connection",
        "Build community through live interaction"
      ],
      earnings: "$400-3,000/month",
      difficulty: "Easy"
    }
  ]

  const contentCreation = [
    {
      id: "subscriber-live-paid-tickets",
      title: "Subscriber Live + Paid Tickets",
      icon: <Video className="h-8 w-8" />,
      description: "Free for subscribers, paid tickets for non-subscribers",
      details: [
        "Free access for monthly subscribers",
        "Charge $5-$50+ for non-subscriber tickets",
        "Exclusive live training sessions and workshops",
        "Build subscriber value while monetizing non-subscribers",
        "Create urgency with limited-time live events"
      ],
      earnings: "$600-4,000/month",
      difficulty: "Medium"
    },
    {
      id: "message-content-sales",
      title: "Content Sales Through Messages",
      icon: <MessageCircle className="h-8 w-8" />,
      description: "Sell exclusive content directly through personal messages",
      details: [
        "Send exclusive photos and videos via messages",
        "Charge $2-$50+ for premium message content",
        "Behind-the-scenes content and personal updates",
        "Custom content requests from individual fans",
        "Build personal connections while monetizing"
      ],
      earnings: "$500-3,000/month",
      difficulty: "Medium"
    },
    {
      id: "multi-photo-posts",
      title: "Professional Multi-Photo Posts",
      icon: <Camera className="h-8 w-8" />,
      description: "Post 1, 3, or 5 photos to look more professional",
      details: [
        "Create professional-looking photo sets",
        "Workout progress transformations (before/during/after)",
        "Step-by-step exercise demonstrations",
        "Meal prep and nutrition photo guides",
        "Charge premium for high-quality photo content"
      ],
      earnings: "$300-1,500/month",
      difficulty: "Easy"
    },
    {
      id: "shorts-content",
      title: "Shorts (Quick Videos)",
      icon: <Video className="h-8 w-8" />,
      description: "Short-form vertical videos for quick engagement",
      details: [
        "15-60 second workout demonstrations and tips",
        "Quick nutrition advice and meal prep clips",
        "Before/after transformation reveals",
        "Exercise form corrections and technique tips",
        "Motivational quotes and daily inspiration",
        "Enable tips on all shorts content",
        "Charge for exclusive shorts collections"
      ],
      earnings: "$300-2,000/month",
      difficulty: "Easy"
    }
  ]

  const digitalProducts = [
    {
      id: "training-programs",
      title: "Custom Training Programs",
      icon: <Target className="h-8 w-8" />,
      description: "Sell personalized workout plans and coaching programs",
      details: [
        "Complete 4-24 week training programs ($50-$500+)",
        "Custom workout plans and exercise libraries",
        "Personalized nutrition and meal planning guides",
        "Progress tracking and milestone achievements",
        "Video demonstrations and form corrections",
        "One-time purchase with lifetime access",
        "Build authority while generating passive income"
      ],
      earnings: "$1,500-8,000/month",
      difficulty: "Medium"
    },
    {
      id: "stories-content",
      title: "Stories (24-Hour Content)",
      icon: <Clock className="h-8 w-8" />,
      description: "Temporary content that disappears after 24 hours",
      details: [
        "Behind-the-scenes daily life and training",
        "Real-time workout updates and progress",
        "Meal prep and nutrition throughout the day",
        "Personal moments and authentic connections",
        "Exclusive stories for subscribers only",
        "Story highlights for permanent collections",
        "Interactive polls and Q&A in stories"
      ],
      earnings: "$200-1,200/month",
      difficulty: "Easy"
    },
    {
      id: "live-podcasts",
      title: "Live Podcasts",
      icon: <Headphones className="h-8 w-8" />,
      description: "Create and monetize live podcast content",
      details: [
        "Host live fitness and nutrition podcasts",
        "Charge for premium podcast access",
        "Interactive Q&A during live recordings",
        "Build authority and thought leadership",
        "Monetize through tips and exclusive access"
      ],
      earnings: "$400-2,500/month",
      difficulty: "Medium"
    },
    {
      id: "digital-courses",
      title: "Digital Courses & Masterclasses",
      icon: <BookOpen className="h-8 w-8" />,
      description: "Comprehensive training courses and educational content",
      details: [
        "Complete fitness transformation courses ($100-$1,000+)",
        "Custom meal plans and nutrition programs ($50-$300)",
        "Personalized training programs and workout plans",
        "Supplement guides and recommendation courses",
        "Equipment selection and home gym setup guides",
        "Technique masterclasses and form correction videos",
        "Build authority while generating passive income"
      ],
      earnings: "$2,500-20,000/month",
      difficulty: "Hard"
    }
  ]

  const personalConnections = [
    {
      id: "paid-text-chats",
      title: "Paid Text Chats to Non-Subscribers",
      icon: <MessageCircle className="h-8 w-8" />,
      description: "Charge non-subscribers for personal text conversations",
      details: [
        "Per character pricing ($0.01-$0.50 per character)",
        "Per message pricing ($1-$10 per message)",
        "Monthly unlimited messaging ($50-$500/month)",
        "Build genuine friendships with biggest fans",
        "Exclusive behind-the-scenes access and personal stories"
      ],
      earnings: "$800-4,000/month",
      difficulty: "Medium"
    },
    {
      id: "personal-phone-calls",
      title: "Personal Phone Calls",
      icon: <Phone className="h-8 w-8" />,
      description: "Voice conversations with fans who become friends",
      details: [
        "Set per-minute rates ($2-$20/minute)",
        "Personal coaching and life advice sessions",
        "Motivational calls and check-ins",
        "Secure, encrypted voice communications",
        "Build deeper connections through voice"
      ],
      earnings: "$1,200-6,000/month",
      difficulty: "Medium"
    },
    {
      id: "video-hangouts",
      title: "Video Hangouts",
      icon: <Video className="h-8 w-8" />,
      description: "Face-to-face time building genuine relationships",
      details: [
        "Charge $25-$200+ per video session",
        "Personal training form checks and guidance",
        "Life coaching and motivational sessions",
        "Exclusive behind-the-scenes virtual hangouts",
        "Create meaningful face-to-face connections"
      ],
      earnings: "$1,500-8,000/month",
      difficulty: "Medium"
    },
    {
      id: "wishlist-creation",
      title: "Wishlist Creation & Receiving",
      icon: <Gift className="h-8 w-8" />,
      description: "Create wishlists for fans to purchase gifts for you",
      details: [
        "Create wishlists of workout gear, supplements, equipment",
        "Fans can purchase gifts directly for you",
        "Thank fans personally for gifts received",
        "Build deeper connections through gift giving",
        "Receive practical items for your fitness journey"
      ],
      earnings: "$200-2,000/month",
      difficulty: "Easy"
    }
  ]

  const premiumServices = [
    {
      id: "built-in-shop",
      title: "Built-in Shop for Products",
      icon: <ShoppingBag className="h-8 w-8" />,
      description: "Sell physical and digital products directly on platform",
      details: [
        "Physical products: supplements, training equipment, gym gear",
        "Digital products: fitness plans, meal plans, workout guides",
        "Personal cameos and custom video messages",
        "Branded merchandise and signed collectibles",
        "Training equipment recommendations with affiliate links",
        "Complete gym equipment sales and consultation",
        "Integrated payment processing and fulfillment"
      ],
      earnings: "$2,000-25,000/month",
      difficulty: "Medium"
    },
    {
      id: "custom-programs",
      title: "Custom Training Programs",
      icon: <FileText className="h-8 w-8" />,
      description: "Personalized fitness and nutrition plans",
      details: [
        "Charge $50-$500+ for custom workout plans",
        "Personalized meal plans and nutrition guidance",
        "Progress tracking and plan adjustments",
        "Exclusive access to your proven methods",
        "One-on-one program development"
      ],
      earnings: "$1,500-12,000/month",
      difficulty: "Hard"
    },
    {
      id: "group-coaching",
      title: "Group Coaching Programs",
      icon: <Users className="h-8 w-8" />,
      description: "Small group training and coaching sessions",
      details: [
        "Small group video calls (3-10 people)",
        "Charge $25-$100+ per person per session",
        "Group challenges and accountability programs",
        "Community building and peer support",
        "Scale your expertise to multiple clients"
      ],
      earnings: "$800-6,000/month",
      difficulty: "Medium"
    }
  ]

  const advancedMonetization = [
    {
      id: "referral-program",
      title: "5% Referral Program",
      icon: <Percent className="h-8 w-8" />,
      description: "Earn 5% commission on all referred creator transactions forever",
      details: [
        "Get unique referral link when you become a creator",
        "Earn 5% commission on subscriptions, tips, and PPV content",
        "No limits on how many referrals you can have",
        "Help other creators succeed while earning",
        "Build passive income that grows over time",
        "Commission paid as long as referrals remain active"
      ],
      earnings: "$500-5,000+/month",
      difficulty: "Easy"
    },
    {
      id: "featured-categories",
      title: "Featured & Most Active Categories",
      icon: <Award className="h-8 w-8" />,
      description: "Rewards for creators who put in time and effort",
      details: [
        "Get featured placement for consistent activity",
        "Boost visibility and attract more subscribers",
        "Recognition for top performers in each category",
        "Increased earnings through better exposure",
        "Motivation system for active creators"
      ],
      earnings: "$300-2,000/month",
      difficulty: "Medium"
    },
    {
      id: "fast-payouts",
      title: "5-Day Fast Payouts",
      icon: <Zap className="h-8 w-8" />,
      description: "Get paid quickly with our 5-day payout system",
      details: [
        "Receive earnings every 5 days instead of monthly",
        "Improved cash flow for creators",
        "Faster access to your hard-earned money",
        "Better financial planning and budgeting",
        "Industry-leading payout speed"
      ],
      earnings: "Faster access to all earnings",
      difficulty: "Easy"
    }
  ]

  const tabs = [
    {
      id: "content-monetization",
      name: "Content",
      icon: <DollarSign className="h-5 w-5" />,
      description: "4 ways to monetize your content",
      features: contentMonetization,
      gradient: "from-orange-500 to-orange-700",
      totalStreams: 4
    },
    {
      id: "content-creation",
      name: "Creation",
      icon: <Camera className="h-5 w-5" />,
      description: "4 content creation formats",
      features: contentCreation,
      gradient: "from-purple-500 to-purple-600",
      totalStreams: 4
    },
    {
      id: "digital-products",
      name: "Digital",
      icon: <BookOpen className="h-5 w-5" />,
      description: "3 digital product offerings",
      features: digitalProducts,
      gradient: "from-gray-400 to-gray-500",
      totalStreams: 3
    },
    {
      id: "personal-connections",
      name: "Personal",
      icon: <MessageCircle className="h-5 w-5" />,
      description: "4 ways to build friendships with fans",
      features: personalConnections,
      gradient: "from-purple-600 to-purple-700",
      totalStreams: 4
    },
    {
      id: "premium-services",
      name: "Premium",
      icon: <Crown className="h-5 w-5" />,
      description: "3 high-value service offerings",
      features: premiumServices,
      gradient: "from-orange-400 to-orange-600",
      totalStreams: 3
    },
    {
      id: "platform-features",
      name: "Platform",
      icon: <Star className="h-5 w-5" />,
      description: "3 platform advantages",
      features: advancedMonetization,
      gradient: "from-gray-500 to-gray-600",
      totalStreams: 3
    }
  ]

  const getActiveTab = () => {
    return tabs.find(tab => tab.id === activeTab)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <section id="revenue-streams" className="py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full border border-orange-500/30 mb-6 shadow-lg">
            <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-semibold">21 REVENUE STREAMS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            More Revenue Streams Than Any Platform
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium mb-12">
            From content to coaching, calls to courses - we've built 21 different ways for you to monetize your expertise.
            No other platform offers this many revenue streams.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-3xl">21</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Revenue Streams</h3>
              <p className="text-gray-300">More ways to earn than any other platform</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-3xl">80%+</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You Keep</h3>
              <p className="text-gray-300">Industry-leading revenue share</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-400/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-3xl">∞</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Earning Potential</h3>
              <p className="text-gray-300">No limits on your success</p>
            </div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="mb-16">
          <div className="flex justify-center overflow-x-auto pb-4">
            <div className="inline-flex bg-gray-800/60 backdrop-blur-md rounded-3xl p-2 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-3 rounded-2xl font-bold transition-all duration-500 flex flex-col items-center space-y-1 min-w-[100px] ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-xl transform scale-110`
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className={`${activeTab === tab.id ? 'text-white' : 'text-gray-400'}`}>
                  {tab.icon}
                </span>
                <div className="text-center">
                  <div className="font-black text-sm">{tab.name}</div>
                  <div className={`text-xs ${activeTab === tab.id ? 'text-white/80' : 'text-gray-400'}`}>
                    {tab.description}
                  </div>
                </div>
              </button>
            ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className={`inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r ${getActiveTab()?.gradient} text-white font-bold text-lg shadow-xl animate-pulse`} style={{animationDuration: '3s'}}>
            {getActiveTab()?.icon}
            <span className="ml-2">{getActiveTab()?.name}: {getActiveTab()?.description}</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`gap-6 mb-20 revenue-grid ${
          getActiveTab()?.totalStreams === 4
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' // 4 items: clean 2x2 on mobile, 1x4 on desktop
            : getActiveTab()?.totalStreams === 3
            ? 'grid grid-cols-1 md:grid-cols-3' // 3 items: clean 1x3
            : 'grid grid-cols-1 md:grid-cols-2' // Default fallback
        }`}>
          {getActiveTab()?.features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`bg-gray-900/80 border border-gray-700/50 rounded-2xl backdrop-blur-md hover:border-gray-600/50 transition-all duration-500 h-full hover:transform hover:scale-105 flex flex-col ${
                getActiveTab()?.totalStreams === 4
                  ? 'p-6 shadow-lg hover:shadow-xl' // Consistent padding for 4-item layouts
                  : 'p-7 shadow-lg hover:shadow-xl' // Larger padding for 3-item layouts
              }`}
              style={{
                boxShadow: `
                  0 20px 40px rgba(0, 0, 0, 0.4),
                  0 0 0 1px rgba(255, 255, 255, 0.05),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `
              }}
            >
              <div className="flex flex-col items-center text-center mb-4 flex-grow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r ${getActiveTab()?.gradient} mb-4 shadow-xl`}>
                  {feature.icon} 
                </div>
                <div className="flex-1">
                  <h3 className={`font-black text-white mb-2 ${
                    getActiveTab()?.totalStreams === 4
                      ? 'text-lg' // Consistent for 4-item layouts
                      : 'text-xl' // Larger for 3-item layouts
                  }`}>{feature.title}</h3>
                  <p className={`text-gray-300 font-medium mb-3 ${
                    getActiveTab()?.totalStreams === 4
                      ? 'text-sm' // Consistent for 4-item layouts
                      : 'text-base' // Larger for 3-item layouts
                  }`}>{feature.description}</p>
                  
                  {/* Earnings & Difficulty */}
                  <div className="flex items-center justify-center mb-4 space-x-2">
                    <div className={`bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full font-bold ${
                      getActiveTab()?.totalStreams === 4
                        ? 'text-xs shadow-inner' // Consistent for 4-item layouts
                        : 'text-sm shadow-inner' // Larger for 3-item layouts
                    }`}>
                      {feature.earnings}
                    </div>
                    {feature.comingSoon && (
                      <div className={`bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full font-bold animate-pulse ${
                        getActiveTab()?.totalStreams === 4
                          ? 'text-xs shadow-inner' // Consistent for 4-item layouts
                          : 'text-sm shadow-inner' // Larger for 3-item layouts
                      }`}>
                        COMING SOON
                      </div>
                    )}
                    {feature.difficulty && (
                      <div className={`px-2 py-1 rounded-full font-bold ${getDifficultyColor(feature.difficulty)} ${
                        getActiveTab()?.totalStreams === 4
                          ? 'text-xs shadow-inner' // Consistent for 4-item layouts
                          : 'text-sm shadow-inner' // Larger for 3-item layouts
                      }`}>
                        {feature.difficulty}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 flex-1">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <CheckCircle className={`text-orange-400 mr-2 flex-shrink-0 mt-0.5 ${
                      getActiveTab()?.totalStreams === 4
                        ? 'h-4 w-4' // Consistent icons for 4-item layouts
                        : 'h-4 w-4' // Consistent icons for 3-item layouts
                    }`} />
                    <span className={`text-gray-300 font-medium ${
                      getActiveTab()?.totalStreams === 4
                        ? 'text-sm' // Consistent for 4-item layouts
                        : 'text-sm' // Consistent for 3-item layouts
                    }`}>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Revenue Potential Calculator */}
        <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl p-8 max-w-5xl mx-auto border-2 border-orange-500/40 backdrop-blur-md shadow-2xl mb-16 hover:shadow-3xl transition-shadow duration-300">
          <h3 className="text-4xl font-black mb-6 text-center">
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Total Revenue Potential
            </span>
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <div className="text-center pt-2 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors duration-300">
              <div className="text-xl font-black text-white mb-1">$5K-20K</div>
              <div className="text-orange-300 font-bold mb-1 text-sm">Small Creator</div>
              <div className="text-gray-300 text-xs">1K-5K followers</div>
            </div>
            
            <div className="text-center relative pt-12 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 shadow-lg">
                <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">COMMON</span>
              </div>
              <div className="text-xl font-black text-white mb-1">$20K-75K</div>
              <div className="text-orange-300 font-bold mb-1 text-sm">Growing Creator</div>
              <div className="text-gray-300 text-xs">5K-50K followers</div>
            </div>
            
            <div className="text-center pt-2 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors duration-300">
              <div className="text-xl font-black text-white mb-1">$50K-200K+</div>
              <div className="text-orange-300 font-bold mb-1 text-sm">Established Creator</div>
              <div className="text-gray-300 text-xs">100K+ followers</div>
            </div>
            
            <div className="text-center relative pt-12 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 shadow-lg">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">CELEBRITY</span>
              </div>
              <div className="text-xl font-black text-white mb-1">$150K-20M+</div>
              <div className="text-orange-300 font-bold mb-1 text-sm">Celebrity/Influencer</div>
              <div className="text-gray-300 text-xs">1M+ followers</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-base text-gray-300 font-medium leading-relaxed">
              Shop feature alone: $5K-50K+ monthly from supplements & equipment sales. 
              Combined with all 21 streams, top creators earn $150K-20M+ monthly. 
              Our revenue streams maximize celebrity earning potential.
            </p>
          </div>
        </div>

        {/* Platform Advantage */}


        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-4">
            <button className="relative overflow-hidden font-bold py-4 px-8 rounded-2xl transition-all duration-500 text-white shadow-2xl hover:shadow-3xl"
              onClick={() => window.location.href = '/signup'}
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #a855f7 60%, #9333ea 100%)',
                backgroundSize: '200% 200%',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0 10px 25px rgba(249, 115, 22, 0.4),
                  0 0 40px rgba(168, 85, 247, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `,
                animation: 'gradientShift 3s ease infinite'
              }} 
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full hover:translate-x-0 transition-transform duration-700"></span>
              Activate All 21 Revenue Streams
            </button>
            <button className="relative border-2 border-gray-500 text-gray-300 hover:bg-gray-700/50 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 shadow-lg"
              style={{
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              Download Complete Revenue Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RevenueStreams