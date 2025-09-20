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
    // This will fail the build if there are ESLint errors
    ignoreDuringBuilds: false,
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
};

module.exports = nextConfig;