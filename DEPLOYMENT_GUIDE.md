# FansFollow Platform - Production Deployment Guide

## 🚀 Production Infrastructure

### Server Requirements
- **CPU**: 8+ cores (16+ recommended)
- **RAM**: 32GB minimum (64GB recommended)
- **Storage**: 1TB SSD minimum
- **Bandwidth**: 1Gbps connection
- **OS**: Ubuntu 22.04 LTS

### Technology Stack
- **Web Server**: Nginx with PHP-FPM
- **Database**: MySQL 8.0 or PostgreSQL 14+
- **Cache**: Redis 7.0+
- **Queue**: Laravel Horizon with Redis
- **Search**: Elasticsearch (optional)
- **CDN**: CloudFlare or AWS CloudFront

## 🔧 Laravel Production Setup

### Environment Configuration
```bash
# .env.production
APP_NAME="FansFollow"
APP_ENV=production
APP_KEY=base64:your-32-character-key
APP_DEBUG=false
APP_URL=https://fansfollow.me

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=fansfollow_prod
DB_USERNAME=fansfollow_user
DB_PASSWORD=secure_password

CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=redis_password
REDIS_PORT=6379

# Payment Gateways
STRIPE_KEY=pk_live_your_stripe_key
STRIPE_SECRET=sk_live_your_stripe_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_secret

# Crypto Payment Processor
CRYPTO_API_KEY=your_crypto_processor_key
CRYPTO_WEBHOOK_SECRET=your_webhook_secret

# File Storage
FILESYSTEM_DISK=s3
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=fansfollow-media

# Email
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailgun.org
MAIL_PORT=587
MAIL_USERNAME=your_mailgun_username
MAIL_PASSWORD=your_mailgun_password

# Broadcasting
BROADCAST_DRIVER=pusher
PUSHER_APP_ID=your_pusher_app_id
PUSHER_APP_KEY=your_pusher_key
PUSHER_APP_SECRET=your_pusher_secret
PUSHER_APP_CLUSTER=mt1

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
FACEBOOK_PIXEL_ID=your_pixel_id
```

### Nginx Configuration
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name fansfollow.me www.fansfollow.me;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name fansfollow.me www.fansfollow.me;
    root /var/www/fansfollow/public;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/fansfollow.me/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/fansfollow.me/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # File Upload Limits
    client_max_body_size 100M;

    index index.php;

    charset utf-8;

    # Handle Laravel routes
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # PHP-FPM Configuration
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_hide_header X-Powered-By;
    }

    # Static Assets Caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Security
    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

### PHP-FPM Configuration
```ini
; /etc/php/8.2/fpm/pool.d/fansfollow.conf
[fansfollow]
user = www-data
group = www-data
listen = /var/run/php/php8.2-fpm.sock
listen.owner = www-data
listen.group = www-data
pm = dynamic
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 35
pm.process_idle_timeout = 10s
pm.max_requests = 500

; PHP settings
php_admin_value[upload_max_filesize] = 100M
php_admin_value[post_max_size] = 100M
php_admin_value[max_execution_time] = 300
php_admin_value[memory_limit] = 512M
```

## 📊 Database Optimization

### MySQL Configuration
```sql
-- /etc/mysql/mysql.conf.d/mysqld.cnf
[mysqld]
innodb_buffer_pool_size = 16G
innodb_log_file_size = 1G
innodb_flush_log_at_trx_commit = 2
innodb_flush_method = O_DIRECT
max_connections = 500
query_cache_size = 256M
query_cache_type = 1
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2
```

### Database Indexes
```sql
-- Performance Indexes
CREATE INDEX idx_posts_creator_visibility ON posts(creator_id, visibility);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX idx_messages_conversation_created ON messages(conversation_id, created_at DESC);
CREATE INDEX idx_payments_recipient_status ON payments(recipient_id, status);
CREATE INDEX idx_subscriptions_creator_status ON subscriptions(creator_id, status);
```

## 🔄 Queue Configuration

### Laravel Horizon Setup
```php
// config/horizon.php
'environments' => [
    'production' => [
        'supervisor-1' => [
            'connection' => 'redis',
            'queue' => ['default', 'emails', 'payments'],
            'balance' => 'auto',
            'processes' => 10,
            'tries' => 3,
            'timeout' => 60,
        ],
    ],
],
```

### Supervisor Configuration
```ini
; /etc/supervisor/conf.d/horizon.conf
[program:horizon]
process_name=%(program_name)s
command=php /var/www/fansfollow/artisan horizon
autostart=true
autorestart=true
user=www-data
redirect_stderr=true
stdout_logfile=/var/www/fansfollow/storage/logs/horizon.log
stopwaitsecs=3600
```

## 🔐 Security Configuration

### Laravel Security
```php
// config/app.php
'debug' => false,
'env' => 'production',

// config/session.php
'secure' => true,
'http_only' => true,
'same_site' => 'strict',

// config/cors.php
'allowed_origins' => ['https://fansfollow.me'],
'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE'],
'allowed_headers' => ['Content-Type', 'Authorization'],
```

### Rate Limiting
```php
// app/Http/Kernel.php
protected $middlewareGroups = [
    'api' => [
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];

protected $routeMiddleware = [
    'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
];

// routes/api.php
Route::middleware(['auth:sanctum', 'throttle:60,1'])->group(function () {
    // API routes
});
```

## 📈 Monitoring & Analytics

### Application Monitoring
```bash
# Install monitoring tools
composer require spatie/laravel-ray
composer require barryvdh/laravel-debugbar --dev
composer require laravel/telescope --dev
```

### Log Configuration
```php
// config/logging.php
'channels' => [
    'production' => [
        'driver' => 'daily',
        'path' => storage_path('logs/laravel.log'),
        'level' => 'error',
        'days' => 30,
    ],
    'payments' => [
        'driver' => 'daily',
        'path' => storage_path('logs/payments.log'),
        'level' => 'info',
        'days' => 90,
    ],
],
```

## 🚀 Deployment Script

### Automated Deployment
```bash
#!/bin/bash
# deploy.sh

set -e

echo "🚀 Starting FansFollow deployment..."

# Pull latest code
git pull origin main

# Install dependencies
composer install --no-dev --optimize-autoloader
npm ci
npm run build

# Database migrations
php artisan migrate --force

# Clear and cache config
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Restart services
sudo supervisorctl restart horizon
sudo systemctl reload nginx
sudo systemctl reload php8.2-fpm

# Clear application cache
php artisan cache:clear
php artisan queue:restart

echo "✅ Deployment completed successfully!"
```

## 📊 Performance Optimization

### Laravel Optimizations
```bash
# Production optimizations
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# OPcache configuration
opcache.enable=1
opcache.memory_consumption=512
opcache.max_accelerated_files=65407
opcache.validate_timestamps=0
```

### CDN Configuration
```php
// config/filesystems.php
'cloudfront' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
    'url' => env('AWS_URL'),
    'endpoint' => env('AWS_ENDPOINT'),
    'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
    'throw' => false,
],
```

## 🔄 Backup Strategy

### Database Backups
```bash
#!/bin/bash
# backup.sh

BACKUP_DIR="/var/backups/fansfollow"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p $BACKUP_DIR

# Database backup
mysqldump -u root -p fansfollow_prod > $BACKUP_DIR/db_backup_$DATE.sql

# Compress backup
gzip $BACKUP_DIR/db_backup_$DATE.sql

# Upload to S3
aws s3 cp $BACKUP_DIR/db_backup_$DATE.sql.gz s3://fansfollow-backups/

# Clean old backups (keep 30 days)
find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete
```

## 🎯 Go-Live Checklist

### Pre-Launch
- [ ] SSL certificates installed and configured
- [ ] Database migrations run successfully
- [ ] Payment gateways tested (Stripe, PayPal, Crypto)
- [ ] Email delivery configured and tested
- [ ] File uploads working with S3/CDN
- [ ] Real-time messaging functional
- [ ] Mobile responsiveness verified
- [ ] Performance testing completed
- [ ] Security audit passed
- [ ] Backup systems operational

### Launch Day
- [ ] DNS records updated
- [ ] Monitoring alerts configured
- [ ] Support team briefed
- [ ] Social media accounts ready
- [ ] Press release prepared
- [ ] Creator onboarding process tested

### Post-Launch
- [ ] Monitor error logs
- [ ] Track performance metrics
- [ ] Monitor payment processing
- [ ] User feedback collection
- [ ] Creator support available
- [ ] Scale infrastructure as needed

This deployment guide ensures your FansFollow platform launches successfully with enterprise-grade reliability and performance.