# Frontend Components for Laravel Integration

## 🎨 Vue.js Components (Recommended)

### Creator Dashboard Component
```vue
<template>
  <div class="creator-dashboard">
    <!-- Stats Cards -->
    <div class="grid grid-cols-4 gap-6 mb-8">
      <StatsCard 
        v-for="stat in stats" 
        :key="stat.label"
        :title="stat.label"
        :value="stat.value"
        :change="stat.change"
        :icon="stat.icon"
      />
    </div>

    <!-- Revenue Chart -->
    <div class="bg-white rounded-xl p-6 mb-8">
      <h3 class="text-xl font-bold mb-4">Revenue Overview</h3>
      <RevenueChart :data="revenueData" />
    </div>

    <!-- Recent Posts -->
    <div class="bg-white rounded-xl p-6">
      <h3 class="text-xl font-bold mb-4">Recent Posts</h3>
      <PostList :posts="recentPosts" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCreatorStore } from '@/stores/creator'

const creatorStore = useCreatorStore()
const stats = ref([])
const revenueData = ref([])
const recentPosts = ref([])

onMounted(async () => {
  await creatorStore.fetchDashboardData()
  stats.value = creatorStore.stats
  revenueData.value = creatorStore.revenueData
  recentPosts.value = creatorStore.recentPosts
})
</script>
```

### Messaging Component
```vue
<template>
  <div class="messaging-system h-screen flex">
    <!-- Conversations List -->
    <div class="w-80 bg-gray-50 border-r">
      <ConversationList 
        :conversations="conversations"
        :active-conversation="activeConversation"
        @select="selectConversation"
      />
    </div>

    <!-- Chat Area -->
    <div class="flex-1 flex flex-col">
      <ChatHeader :conversation="activeConversation" />
      <MessageList :messages="messages" />
      <MessageInput 
        :pricing="messagePricing"
        @send="sendMessage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMessagingStore } from '@/stores/messaging'

const messagingStore = useMessagingStore()
const conversations = ref([])
const activeConversation = ref(null)
const messages = ref([])

const sendMessage = async (content, type = 'text') => {
  await messagingStore.sendMessage(activeConversation.value.id, content, type)
  messages.value = messagingStore.messages
}
</script>
```

### Content Creator Component
```vue
<template>
  <div class="content-creator bg-white rounded-xl p-6">
    <form @submit.prevent="publishPost">
      <!-- Content Input -->
      <textarea
        v-model="postContent"
        placeholder="Share your expertise..."
        class="w-full p-4 border rounded-lg mb-4"
        rows="4"
      />

      <!-- Media Upload -->
      <MediaUploader 
        @upload="handleMediaUpload"
        :files="uploadedFiles"
      />

      <!-- Monetization Options -->
      <div class="grid grid-cols-3 gap-4 mb-4">
        <label class="flex items-center">
          <input 
            type="radio" 
            v-model="visibility" 
            value="public"
            class="mr-2"
          />
          Public (Free)
        </label>
        <label class="flex items-center">
          <input 
            type="radio" 
            v-model="visibility" 
            value="subscribers"
            class="mr-2"
          />
          Subscribers Only
        </label>
        <label class="flex items-center">
          <input 
            type="radio" 
            v-model="visibility" 
            value="ppv"
            class="mr-2"
          />
          Pay-Per-View
        </label>
      </div>

      <!-- PPV Price Input -->
      <div v-if="visibility === 'ppv'" class="mb-4">
        <label class="block text-sm font-medium mb-2">Price (£)</label>
        <input
          type="number"
          v-model="price"
          step="0.01"
          min="0.01"
          class="w-full p-3 border rounded-lg"
        />
      </div>

      <!-- Tip Goal -->
      <TipGoalSetter 
        v-model:goal="tipGoal"
        v-model:description="tipGoalDescription"
      />

      <!-- Publish Button -->
      <button
        type="submit"
        :disabled="!postContent.trim()"
        class="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg"
      >
        Publish Post
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePostStore } from '@/stores/posts'

const postStore = usePostStore()
const postContent = ref('')
const visibility = ref('public')
const price = ref(0)
const uploadedFiles = ref([])
const tipGoal = ref(0)
const tipGoalDescription = ref('')

const publishPost = async () => {
  const postData = {
    content: postContent.value,
    visibility: visibility.value,
    price: visibility.value === 'ppv' ? price.value : null,
    media_urls: uploadedFiles.value,
    tip_goal: tipGoal.value || null,
    tip_goal_description: tipGoalDescription.value || null
  }

  await postStore.createPost(postData)
  
  // Reset form
  postContent.value = ''
  uploadedFiles.value = []
  tipGoal.value = 0
  tipGoalDescription.value = ''
}
</script>
```

## 🏪 Pinia Stores (State Management)

### Creator Store
```javascript
// stores/creator.js
import { defineStore } from 'pinia'
import { api } from '@/services/api'

export const useCreatorStore = defineStore('creator', {
  state: () => ({
    stats: {},
    revenueData: [],
    recentPosts: [],
    settings: {},
    earnings: []
  }),

  actions: {
    async fetchDashboardData() {
      try {
        const response = await api.get('/creator/dashboard')
        this.stats = response.data.stats
        this.revenueData = response.data.revenue_data
        this.recentPosts = response.data.recent_posts
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error)
      }
    },

    async updateSettings(settings) {
      try {
        await api.put('/creator/settings', settings)
        this.settings = { ...this.settings, ...settings }
      } catch (error) {
        console.error('Failed to update settings:', error)
      }
    },

    async fetchEarnings(period = 'month') {
      try {
        const response = await api.get(`/creator/earnings?period=${period}`)
        this.earnings = response.data
      } catch (error) {
        console.error('Failed to fetch earnings:', error)
      }
    }
  }
})
```

### Messaging Store
```javascript
// stores/messaging.js
import { defineStore } from 'pinia'
import { api } from '@/services/api'

export const useMessagingStore = defineStore('messaging', {
  state: () => ({
    conversations: [],
    messages: [],
    activeConversation: null,
    typing: false
  }),

  actions: {
    async fetchConversations() {
      try {
        const response = await api.get('/conversations')
        this.conversations = response.data
      } catch (error) {
        console.error('Failed to fetch conversations:', error)
      }
    },

    async sendMessage(conversationId, content, type = 'text') {
      try {
        const response = await api.post(`/conversations/${conversationId}/messages`, {
          content,
          message_type: type
        })
        this.messages.push(response.data)
      } catch (error) {
        console.error('Failed to send message:', error)
      }
    },

    async markAsRead(messageId) {
      try {
        await api.put(`/messages/${messageId}/read`)
        const message = this.messages.find(m => m.id === messageId)
        if (message) message.is_read = true
      } catch (error) {
        console.error('Failed to mark as read:', error)
      }
    }
  }
})
```

## 🔌 API Service

### API Client Setup
```javascript
// services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export { api }
```

## 🎨 Tailwind CSS Classes

### Component Styling
```css
/* Custom component classes */
.creator-card {
  @apply bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300;
}

.stats-card {
  @apply bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200;
}

.message-bubble {
  @apply bg-blue-500 text-white p-3 rounded-lg max-w-xs;
}

.revenue-stream-card {
  @apply bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100;
}

.btn-primary {
  @apply bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300;
}

.btn-secondary {
  @apply bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300;
}
```

## 📱 Mobile Responsive Design

### Responsive Breakpoints
```css
/* Mobile First Approach */
.mobile-nav {
  @apply block md:hidden;
}

.desktop-nav {
  @apply hidden md:flex;
}

.responsive-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6;
}

.mobile-padding {
  @apply px-4 sm:px-6 lg:px-8;
}
```

This frontend structure provides everything needed to build the complete FansFollow interface with all 21 revenue streams and features.