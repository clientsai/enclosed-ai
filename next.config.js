const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable typed routes for better type safety
  typedRoutes: true,

  // Add strict TypeScript checking
  typescript: {
    // This will fail the build if there are TypeScript errors
    ignoreBuildErrors: false,
  },

  eslint: {
    // Temporarily ignore ESLint during builds - fix these warnings later
    ignoreDuringBuilds: true,
    // Only check specific directories to avoid checking node_modules
    dirs: ['src'],
  },

  // Add security headers
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Enable source maps for better error tracking
  productionBrowserSourceMaps: true,
};

// Sentry configuration
const sentryWebpackPluginOptions = {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // Additional configuration options
  silent: true, // Suppresses all logs
  release: process.env.SENTRY_RELEASE,
  deploy: {
    env: process.env.NODE_ENV,
  },

  // Upload source maps to Sentry
  widenClientFileUpload: true,
  hideSourceMaps: true,

  // Disable plugins if not configured to avoid build errors
  disableServerWebpackPlugin: !process.env.SENTRY_DSN,
  disableClientWebpackPlugin: !process.env.SENTRY_DSN,
};

// Make sure adding Sentry options is the last code to run before exporting
module.exports = process.env.SENTRY_DSN
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
  : nextConfig;