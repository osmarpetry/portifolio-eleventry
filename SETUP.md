# Setup Guide for Personal Blog

This document outlines the setup process after transferring configurations from the osmarpetry-notion project.

## 🔧 Environment Variables

For GitHub Actions deployment, you'll need to set the following secrets in your GitHub repository:

### Required for Deployment
- `NETLIFY_AUTH_TOKEN` - Your Netlify authentication token
- `NETLIFY_SITE_ID` - Your Netlify site ID

### Already Configured
- **Google Analytics**: `G-3STVN66PY5`
- **Sentry DSN**: `https://6fd370e37c8640968f1239d4cc47ce6c@o431471.ingest.sentry.io/4504650712285184`

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🧪 Testing

```bash
npm run test:simple
npm run test:cypress  # Full end-to-end testing
```

## 📊 Analytics & Monitoring

### Google Analytics
- **Tracking ID**: G-3STVN66PY5
- Automatically tracks page views and user interactions

### Sentry Error Tracking
- **Environment**: Automatically detects production vs development
- **Release**: personal-blog@1.1.0
- Captures client-side JavaScript errors

### Lighthouse CI
- Runs automatically on main branch pushes
- Monitors performance, accessibility, best practices, and SEO
- Results available in GitHub Actions

## 🚀 Deployment

The site automatically deploys to Netlify when you push to the main branch. The GitHub Actions workflow will:

1. Build the site
2. Run tests
3. Deploy to production
4. Run Lighthouse performance audit

## 📁 Project Structure

- `src/layouts/` - Nunjucks templates
- `content/articles/` - Markdown articles
- `content/resume.md` - Resume content
- `public/` - Static assets
- `_site/` - Generated site (after build)

## 🔗 Transferred Configurations

This project now includes:
- ✅ Google Analytics (G-3STVN66PY5)
- ✅ Sentry error tracking
- ✅ GitHub Actions CI/CD pipeline
- ✅ Lighthouse performance monitoring
- ✅ Automated Netlify deployment
- ✅ Complete favicon setup with web app manifest

## 🎨 Favicon & Branding

### Favicon Files
- `favicon.ico` - Legacy browser support
- `favicon.svg` - Modern scalable icon
- `favicon.png` - 32x32 PNG fallback
- `favicon-128x128.png` - Medium resolution
- `favicon-192x192.png` - High resolution / Apple touch icon

### Web App Manifest
- **Name**: "Osmar Petry - Personal Blog"
- **Theme Color**: #0645ad (primary blue)
- **Background**: #ffffff (white)
- **Display**: minimal-ui for better mobile experience
- **PWA Ready**: Configured for Progressive Web App features
