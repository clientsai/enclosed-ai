// Monitoring and observability configuration
export const MONITORING_CONFIG = {
  // Sentry configuration
  sentry: {
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development',
    release: process.env.SENTRY_RELEASE || process.env.NEXT_PUBLIC_SENTRY_RELEASE,

    // Sample rates for different environments
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    replaysOnErrorSampleRate: 1.0,
    profilesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

    // Performance monitoring
    enableTracing: true,
    enableProfiling: true,
    enableReplay: true,
  },

  // Analytics configuration
  analytics: {
    posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    posthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    posthogApiKey: process.env.POSTHOG_PROJECT_API_KEY,
    enableInDev: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_IN_DEV === 'true',
    disableSessionRecording: process.env.NEXT_PUBLIC_POSTHOG_DISABLE_SESSION_RECORDING === 'true',

    // Google Analytics
    gaId: process.env.NEXT_PUBLIC_GA_ID,
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    enableConsole: process.env.NODE_ENV === 'development',
    enableFile: process.env.NODE_ENV === 'production',
    maxFileSize: '20m',
    maxFiles: '14d',
    auditLogRetention: '30d',
  },

  // Redis configuration
  redis: {
    url: process.env.REDIS_URL,
    enabled: !!process.env.REDIS_URL,
    retryDelayOnFailover: 100,
    maxRetriesPerRequest: 1,
  },

  // Rate limiting configuration
  rateLimiting: {
    enabled: true,

    // Default rate limit
    default: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 100,
    },

    // Authentication endpoints
    auth: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 5,
    },

    // Strict rate limiting for sensitive endpoints
    strict: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 10,
    },

    // API rate limiting
    api: {
      windowMs: 1 * 60 * 1000, // 1 minute
      maxRequests: 60,
    },
  },

  // Health checks configuration
  healthChecks: {
    timeout: 5000, // 5 seconds
    enabled: {
      database: true,
      redis: true,
      stripe: true,
      openai: true,
      lob: true,
      sendgrid: true,
      filesystem: true,
      memory: true,
    },

    // Memory usage alert threshold
    memoryThreshold: 90, // percent

    // Response time thresholds
    responseTimeThresholds: {
      good: 200,
      degraded: 1000,
      poor: 5000,
    },
  },

  // Performance monitoring
  performance: {
    enableWebVitals: true,
    enableCustomMetrics: true,
    enableResourceTiming: true,
    enableNavigationTiming: true,

    // Thresholds for alerting
    thresholds: {
      LCP: 2500, // Largest Contentful Paint
      FID: 100,  // First Input Delay
      CLS: 0.1,  // Cumulative Layout Shift
      FCP: 1800, // First Contentful Paint
      TTFB: 800, // Time to First Byte
    },
  },

  // Error tracking
  errorTracking: {
    enableBoundaries: true,
    enableAutoCapture: true,
    enableUserFeedback: true,

    // Filters for common non-critical errors
    ignoreErrors: [
      'Non-Error promise rejection captured',
      'ResizeObserver loop limit exceeded',
      'Script error',
      'Network request failed',
    ],

    // Context to include with errors
    includeContext: {
      user: true,
      browser: true,
      device: true,
      network: true,
    },
  },

  // Application configuration
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Enclosed.AI',
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    environment: process.env.NODE_ENV || 'development',
  },
};

// Feature flags for monitoring
export const MONITORING_FEATURES = {
  enableSentry: !!MONITORING_CONFIG.sentry.dsn,
  enableAnalytics: !!MONITORING_CONFIG.analytics.posthogKey,
  enableRedis: MONITORING_CONFIG.redis.enabled,
  enableRateLimiting: MONITORING_CONFIG.rateLimiting.enabled,
  enableHealthChecks: true,
  enablePerformanceMonitoring: MONITORING_CONFIG.performance.enableWebVitals,
  enableErrorBoundaries: MONITORING_CONFIG.errorTracking.enableBoundaries,
};

// Environment-specific overrides
if (process.env.NODE_ENV === 'development') {
  // More verbose logging in development
  MONITORING_CONFIG.logging.level = 'debug';

  // Reduce noise in development
  MONITORING_CONFIG.rateLimiting.default.maxRequests = 1000;
  MONITORING_CONFIG.rateLimiting.auth.maxRequests = 50;
  MONITORING_CONFIG.rateLimiting.strict.maxRequests = 100;
}

if (process.env.NODE_ENV === 'production') {
  // Production-specific optimizations
  MONITORING_CONFIG.performance.enableCustomMetrics = true;
  MONITORING_CONFIG.analytics.enableInDev = false;
}

export default MONITORING_CONFIG;