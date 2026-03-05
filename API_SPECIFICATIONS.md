# FansFollow API Specifications

## 🔗 Core API Endpoints

### Authentication
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
GET  /api/auth/user
```

### User Management
```
GET    /api/users/{id}
PUT    /api/users/{id}
POST   /api/users/{id}/follow
DELETE /api/users/{id}/follow
GET    /api/users/{id}/followers
GET    /api/users/{id}/following
```

### Creator Features
```
GET    /api/creator/dashboard
GET    /api/creator/analytics
PUT    /api/creator/settings
GET    /api/creator/earnings
GET    /api/creator/subscribers
POST   /api/creator/posts
PUT    /api/creator/posts/{id}
DELETE /api/creator/posts/{id}
```

### Content Management
```
GET    /api/posts
POST   /api/posts
GET    /api/posts/{id}
PUT    /api/posts/{id}
DELETE /api/posts/{id}
POST   /api/posts/{id}/like
POST   /api/posts/{id}/tip
POST   /api/posts/{id}/purchase
```

### Messaging System
```
GET    /api/conversations
POST   /api/conversations
GET    /api/conversations/{id}/messages
POST   /api/conversations/{id}/messages
PUT    /api/messages/{id}/read
```

### Subscriptions
```
POST   /api/subscriptions
GET    /api/subscriptions
PUT    /api/subscriptions/{id}
DELETE /api/subscriptions/{id}
```

### Payments
```
POST   /api/payments/process
GET    /api/payments/history
POST   /api/payments/crypto
GET    /api/payments/methods
```

### Live Streaming
```
POST   /api/streams/start
PUT    /api/streams/{id}/end
GET    /api/streams/active
POST   /api/streams/{id}/tip
```

## 📊 Response Formats

### Standard Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully",
  "meta": {
    "timestamp": "2025-01-22T10:30:00Z",
    "version": "1.0"
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The given data was invalid",
    "details": {
      "email": ["The email field is required"]
    }
  },
  "meta": {
    "timestamp": "2025-01-22T10:30:00Z"
  }
}
```

## 🔐 Authentication

### JWT Token Structure
```json
{
  "user_id": 123,
  "email": "user@example.com",
  "role": "creator",
  "is_verified": true,
  "exp": 1642694400
}
```

### Required Headers
```
Authorization: Bearer {jwt_token}
Content-Type: application/json
Accept: application/json
```

## 💰 Payment Integration

### Supported Payment Methods
- **Credit/Debit Cards** (Stripe)
- **PayPal**
- **Cryptocurrency**: BTC, ETH, USDT, SOL
- **Bank Transfers** (regional)

### Payment Webhook Endpoints
```
POST /api/webhooks/stripe
POST /api/webhooks/paypal
POST /api/webhooks/crypto
```

## 🔄 Real-time Features

### WebSocket Events
```javascript
// Message events
'message.sent'
'message.read'
'typing.start'
'typing.stop'

// Live stream events
'stream.started'
'stream.ended'
'tip.received'
'viewer.joined'

// Notification events
'notification.new'
'subscription.new'
'earning.new'
```

## 📱 Mobile API Considerations

### Mobile-Specific Endpoints
```
POST /api/mobile/push-token
GET  /api/mobile/notifications
POST /api/mobile/upload
GET  /api/mobile/offline-content
```

### File Upload Handling
- **Maximum file size**: 100MB for videos, 10MB for images
- **Supported formats**: MP4, MOV, JPG, PNG, GIF
- **Compression**: Automatic optimization
- **CDN Integration**: Automatic distribution

## 🌍 Internationalization

### Localization Endpoints
```
GET /api/localization/{locale}
GET /api/currencies
GET /api/timezones
```

### Supported Locales
- en (English)
- es (Spanish)
- fr (French)
- de (German)
- it (Italian)
- pt (Portuguese)
- ru (Russian)
- ja (Japanese)
- zh (Chinese)
- ar (Arabic)

## 📈 Analytics Endpoints

### Creator Analytics
```
GET /api/analytics/earnings?period=month
GET /api/analytics/subscribers?period=week
GET /api/analytics/content-performance
GET /api/analytics/fan-demographics
```

### Platform Analytics (Admin)
```
GET /api/admin/analytics/overview
GET /api/admin/analytics/revenue
GET /api/admin/analytics/users
GET /api/admin/analytics/content
```

## 🔍 Search & Discovery

### Search Endpoints
```
GET /api/search/creators?q={query}
GET /api/search/content?q={query}
GET /api/search/suggestions?q={query}
```

### Filtering Options
```
?category=fitness
?price_min=10&price_max=50
?verified=true
?online=true
?sort=popularity
```

## 🛡️ Security Measures

### Rate Limiting
- **Authentication**: 5 attempts per minute
- **API Calls**: 100 requests per minute per user
- **File Uploads**: 10 uploads per hour
- **Messages**: 60 messages per hour

### Content Moderation
```
POST /api/content/report
GET  /api/content/moderation-queue
PUT  /api/content/{id}/moderate
```

## 📊 Webhook Events

### Creator Events
```json
{
  "event": "subscription.created",
  "data": {
    "subscription_id": 123,
    "creator_id": 456,
    "fan_id": 789,
    "amount": 19.99
  }
}
```

### Payment Events
```json
{
  "event": "payment.completed",
  "data": {
    "payment_id": "pay_123",
    "amount": 25.00,
    "currency": "USD",
    "type": "tip"
  }
}
```

This API specification covers all the endpoints needed to implement the complete FansFollow platform with all 21 revenue streams.