const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs'); 
const { createGzip } = require('zlib');
const { pipeline } = require('stream');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable compression
app.use(compression());

// Serve static files with cache control
app.use(express.static('dist', {
  maxAge: '1y',
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0');
    } else if (path.includes('assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Generate gzipped versions of assets
app.get('*.js', (req, res, next) => {
  const filePath = path.join(__dirname, 'dist', req.url);
  const gzipPath = `${filePath}.gz`;
  
  // Check if gzipped version exists
  if (fs.existsSync(gzipPath)) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    return res.sendFile(gzipPath);
  }
  
  // Create gzipped version if it doesn't exist
  if (fs.existsSync(filePath)) {
    const gzip = createGzip();
    const source = fs.createReadStream(filePath);
    const destination = fs.createWriteStream(gzipPath);
    
    pipeline(source, gzip, destination, (err) => {
      if (err) {
        console.error('Gzip compression failed:', err);
        return next();
      }
      
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Type', 'application/javascript');
      res.sendFile(gzipPath);
    });
  } else {
    next();
  }
});

// Same for CSS files
app.get('*.css', (req, res, next) => {
  const filePath = path.join(__dirname, 'dist', req.url);
  const gzipPath = `${filePath}.gz`;
  
  if (fs.existsSync(gzipPath)) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    return res.sendFile(gzipPath);
  }
  
  if (fs.existsSync(filePath)) {
    const gzip = createGzip();
    const source = fs.createReadStream(filePath);
    const destination = fs.createWriteStream(gzipPath);
    
    pipeline(source, gzip, destination, (err) => {
      if (err) {
        console.error('Gzip compression failed:', err);
        return next();
      }
      
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Type', 'text/css');
      res.sendFile(gzipPath);
    });
  } else {
    next();
  }
});

// Add security headers
app.use((req, res, next) => {
  // Content Security Policy
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://images.pexels.com https://*.netlify.app; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-src 'self'; object-src 'none'"
  );
  
  // Other security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  next();
});

// Serve sitemap.xml with proper content type
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'dist', 'sitemap.xml'));
});

// Serve robots.txt with proper content type
app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'dist', 'robots.txt'));
});

// Serve news sitemap with proper content type
app.get('/news-sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'dist', 'news-sitemap.xml'));
});

// Serve video sitemap with proper content type
app.get('/video-sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'dist', 'video-sitemap.xml'));
});

// Serve image sitemap with proper content type
app.get('/image-sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'dist', 'image-sitemap.xml'));
});

// Serve .well-known files
app.get('/.well-known/security.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'dist', '.well-known', 'security.txt'));
});

app.get('/.well-known/humans.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'dist', '.well-known', 'humans.txt'));
});

// Add JSON-LD endpoint for dynamic structured data
app.get('/api/structured-data/:page', (req, res) => {
  const page = req.params.page;
  let structuredData = {};
  
  switch(page) {
    case 'home':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "FansFollow - #1 Global Fitness & Martial Arts Platform",
        "url": "https://fansfollow.me/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://fansfollow.me/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
      break;
    case 'creators':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "For Creators | FansFollow - #1 Global Fitness & Martial Arts Platform",
        "description": "Join thousands of fitness trainers, nutritionists, martial artists, and combat sports athletes already earning with 21+ revenue streams."
      };
      break;
    default:
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FansFollow - #1 Global Fitness & Martial Arts Platform"
      };
  }
  
  res.setHeader('Content-Type', 'application/ld+json');
  res.send(JSON.stringify(structuredData));
});

// Handle all routes for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});