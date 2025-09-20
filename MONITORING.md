# Monitoring and Observability

This document outlines the comprehensive monitoring and observability setup for Enclosed.AI, including error tracking, performance monitoring, analytics, logging, and health checks.

## 🏗️ Architecture Overview

The monitoring system consists of several integrated components:

- **Error Tracking**: Sentry for error reporting and performance monitoring
- **Analytics**: PostHog for user behavior and business analytics
- **Logging**: Winston for structured server-side logging
- **Performance**: Web Vitals and custom performance metrics
- **Health Checks**: Comprehensive system health monitoring
- **Rate Limiting**: Redis-based request throttling
- **Middleware**: Request/response monitoring and security

## 📦 Installed Dependencies

```json
{
  "@sentry/nextjs": "^10.12.0",
  "@sentry/profiling-node": "^10.12.0",
  "winston": "^3.17.0",
  "winston-daily-rotate-file": "^5.0.0",
  "posthog-js": "^1.266.2",
  "posthog-node": "^5.8.5",
  "ioredis": "^5.7.0",
  "express-rate-limit": "^8.1.0",
  "next-rate-limit": "^0.0.3",
  "web-vitals": "^5.1.0"
}
```

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure the following variables:

```bash
# Sentry Configuration
SENTRY_DSN=https://your_sentry_dsn@sentry.io/your_project_id
NEXT_PUBLIC_SENTRY_DSN=https://your_sentry_dsn@sentry.io/your_project_id
SENTRY_RELEASE=1.0.0
NEXT_PUBLIC_SENTRY_RELEASE=1.0.0
SENTRY_AUTH_TOKEN=your_sentry_auth_token
SENTRY_ORG=your_sentry_org
SENTRY_PROJECT=your_sentry_project

# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=phc_your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
POSTHOG_PROJECT_API_KEY=your_posthog_project_api_key
POSTHOG_HOST=https://app.posthog.com
NEXT_PUBLIC_POSTHOG_DISABLE_SESSION_RECORDING=false
NEXT_PUBLIC_ENABLE_ANALYTICS_IN_DEV=false

# Redis (optional, for rate limiting)
REDIS_URL=redis://localhost:6379

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_VERSION=1.0.0
LOG_LEVEL=info
```

### Setup

Run the monitoring setup script:

```bash
npm run monitoring:setup
```

This script will:
- Verify environment configuration
- Create necessary directories
- Set up logging infrastructure
- Configure monitoring scripts

## 🚨 Error Tracking with Sentry

### Configuration Files

- `sentry.client.config.ts` - Client-side error tracking
- `sentry.server.config.ts` - Server-side error tracking
- `sentry.edge.config.ts` - Edge runtime error tracking

### Features

- **Automatic Error Capture**: Unhandled errors and promise rejections
- **Performance Monitoring**: API response times and Web Vitals
- **Session Replay**: User interaction recordings (configurable)
- **Release Tracking**: Deploy and version tracking
- **User Context**: User information attached to errors
- **Source Maps**: Uploaded for better debugging

### Error Boundaries

```tsx
import { PageErrorBoundary, ComponentErrorBoundary } from '@/components/ErrorBoundary';

// Page-level error boundary
<PageErrorBoundary>
  <YourPage />
</PageErrorBoundary>

// Component-level error boundary
<ComponentErrorBoundary componentName="UserProfile">
  <UserProfile />
</ComponentErrorBoundary>
```

## 📊 Analytics with PostHog

### Client-Side Usage

```tsx
import { analytics } from '@/lib/analytics';

// Track events
analytics.capture('button_clicked', { button_name: 'signup' });

// Track page views
analytics.capturePageView('/dashboard');

// Identify users
analytics.identify('user_123', {
  email: 'user@example.com',
  plan: 'pro'
});

// Feature flags
const isNewFeatureEnabled = analytics.isFeatureEnabled('new_feature');
```

### Server-Side Usage

```tsx
import { serverAnalytics } from '@/lib/analytics';

// Track server-side events
serverAnalytics.capture('user_123', 'api_call', {
  endpoint: '/api/campaigns',
  method: 'POST'
});
```

### Business Events

The analytics system includes pre-built tracking for:

- User signup and login
- Subscription events
- Campaign creation and sending
- Form submissions
- E-commerce transactions
- Performance metrics

## 📝 Structured Logging

### Logger Usage

```tsx
import { log, createScopedLogger } from '@/lib/logger';

// Basic logging
log.info('User logged in', { userId: '123' });
log.error('Database connection failed', { error: error.message });

// Performance logging
log.performance('database_query', 150, { query: 'SELECT * FROM users' });

// Audit logging
log.audit('user_created', 'admin_123', {
  targetUserId: 'user_456',
  ipAddress: req.ip
});

// API logging
log.apiLog('POST', '/api/users', 201, 150, 'user_123');

// Scoped logger
const dbLogger = createScopedLogger('database');
dbLogger.info('Connection established');
```

### Log Files

When running in production, logs are written to:

- `logs/combined-YYYY-MM-DD.log` - All logs
- `logs/error-YYYY-MM-DD.log` - Error logs only
- `logs/audit-YYYY-MM-DD.log` - Audit logs only

### Viewing Logs

```bash
# View live logs
npm run logs:view

# View error logs
npm run logs:error

# View audit logs
npm run logs:audit
```

## 🏥 Health Checks

### Available Endpoints

#### Basic Health Check
```
GET /api/health
```

Returns basic application health status and checks for:
- Database connectivity
- Redis connectivity
- External service availability
- Memory usage
- File system access

#### Detailed Health Check
```
GET /api/health/detailed
```

Returns comprehensive system metrics including:
- System memory and CPU usage
- Database statistics
- Redis metrics
- Application configuration
- Environment status

#### Status Page
```
GET /api/status
```

Returns public status page data with:
- Overall system status
- Individual service statuses
- Response times
- Incident history

### Usage

```bash
# Quick health check
npm run health:check

# Detailed health information
npm run health:detailed

# View monitoring dashboard
npm run monitoring:dashboard
```

## ⚡ Performance Monitoring

### Web Vitals

Automatically tracks:
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)
- **FCP** (First Contentful Paint)
- **TTFB** (Time to First Byte)

### Custom Performance Tracking

```tsx
import { usePerformanceTracking } from '@/components/WebVitals';
import { PerformanceMonitor } from '@/lib/monitoring';

// Component-level tracking
const { measureAsync } = usePerformanceTracking();

const result = await measureAsync('api_call', async () => {
  return await fetch('/api/data');
});

// Server-side tracking
const monitor = new PerformanceMonitor('database_query');
const result = await performDatabaseQuery();
monitor.end({ recordCount: result.length });
```

## 🛡️ Rate Limiting

### Middleware

The application includes rate limiting middleware that:
- Protects against brute force attacks
- Prevents API abuse
- Includes different limits for different endpoints

### Rate Limits

- **Default**: 100 requests per 15 minutes
- **Authentication**: 5 requests per 15 minutes
- **Sensitive APIs**: 10 requests per 15 minutes

### Configuration

Rate limiting requires Redis. Configure `REDIS_URL` in your environment variables.

## 🔧 API Monitoring

### Monitored API Example

```tsx
import { withErrorBoundary, PerformanceMonitor } from '@/lib/monitoring';
import { log } from '@/lib/logger';

async function handler(request: NextRequest) {
  const monitor = new PerformanceMonitor('api_call');

  try {
    // Your API logic here
    const result = await processRequest(request);

    monitor.end({ success: true });
    log.info('API call successful', { endpoint: request.url });

    return NextResponse.json(result);
  } catch (error) {
    monitor.end({ success: false, error: error.message });
    log.error('API call failed', { error: error.message });
    throw error;
  }
}

export const GET = withErrorBoundary(handler, 'my-api-endpoint');
```

## 📱 Testing Monitoring

### Run Tests

```bash
# Test all monitoring endpoints
npm run monitoring:test

# Test specific endpoint
curl http://localhost:3000/api/health
```

### Monitoring Dashboard

```bash
npm run monitoring:dashboard
```

This provides a real-time overview of:
- Application status
- Health check results
- System metrics
- Service statuses

## 🚀 Production Deployment

### Build Configuration

The monitoring system is configured for production with:

1. **Source Maps**: Uploaded to Sentry for better error debugging
2. **Log Rotation**: Daily log files with automatic cleanup
3. **Performance Sampling**: Reduced sampling rates for production
4. **Error Filtering**: Common non-critical errors filtered out

### Environment-Specific Settings

- **Development**: Full logging, no sampling, detailed errors
- **Production**: Error sampling, log rotation, filtered errors

### Deployment Checklist

- [ ] Configure all environment variables
- [ ] Set up Sentry project and upload source maps
- [ ] Configure PostHog project
- [ ] Set up Redis instance (if using rate limiting)
- [ ] Configure log aggregation service
- [ ] Set up alerting rules
- [ ] Test all monitoring endpoints

## 🔍 Troubleshooting

### Common Issues

1. **Sentry not receiving errors**
   - Check `SENTRY_DSN` configuration
   - Verify source maps are uploaded
   - Check network connectivity

2. **PostHog not tracking events**
   - Verify `NEXT_PUBLIC_POSTHOG_KEY`
   - Check browser console for errors
   - Ensure proper initialization

3. **Rate limiting not working**
   - Check Redis connectivity
   - Verify `REDIS_URL` configuration
   - Check middleware configuration

4. **Health checks failing**
   - Verify external service credentials
   - Check network connectivity
   - Review timeout settings

### Debug Mode

Enable debug mode in development:

```bash
NEXT_PUBLIC_ENABLE_ANALYTICS_IN_DEV=true
LOG_LEVEL=debug
```

## 📈 Monitoring Best Practices

1. **Error Handling**: Always use structured error handling with context
2. **Performance**: Track critical user journeys and API endpoints
3. **Alerting**: Set up alerts for critical errors and performance degradation
4. **Privacy**: Respect user privacy in analytics and error tracking
5. **Testing**: Regularly test monitoring endpoints and verify data collection

## 🔗 External Services

- [Sentry Documentation](https://docs.sentry.io/)
- [PostHog Documentation](https://posthog.com/docs)
- [Winston Documentation](https://github.com/winstonjs/winston)
- [Web Vitals Documentation](https://web.dev/vitals/)

---

For questions or issues with the monitoring setup, please refer to this documentation or check the application logs for troubleshooting information.