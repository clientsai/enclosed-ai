import { NextRequest, NextResponse } from 'next/server';
import { defaultRateLimiter, authRateLimiter, strictRateLimiter } from '@/lib/monitoring';

export async function middleware(request: NextRequest) {
  const startTime = Date.now();
  const { pathname } = request.nextUrl;

  // Skip monitoring for static assets and internal Next.js routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') && !pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  console.log(`[Middleware] ${request.method} ${pathname}`);

  // Apply rate limiting based on route
  let rateLimiter = defaultRateLimiter;

  if (pathname.startsWith('/api/auth')) {
    rateLimiter = authRateLimiter;
  } else if (
    pathname.startsWith('/api/stripe') ||
    pathname.startsWith('/api/campaigns')
  ) {
    rateLimiter = strictRateLimiter;
  }

  // Check rate limit
  try {
    const rateLimit = await rateLimiter.isAllowed(request);

    if (!rateLimit.allowed) {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
      console.warn(`[Middleware] Rate limit exceeded for ${ip} on ${pathname}`);

      return NextResponse.json(
        {
          error: 'Too many requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000)
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimiter['config'].maxRequests.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString(),
            'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString()
          }
        }
      );
    }

    // Add rate limit headers to successful responses
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', rateLimiter['config'].maxRequests.toString());
    response.headers.set('X-RateLimit-Remaining', rateLimit.remaining.toString());
    response.headers.set('X-RateLimit-Reset', new Date(rateLimit.resetTime).toISOString());

    // Add security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    // Add CORS headers for API routes
    if (pathname.startsWith('/api/')) {
      const origin = request.headers.get('origin');
      const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
        process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        'https://enclosed.ai',
        'https://www.enclosed.ai'
      ];

      if (origin && allowedOrigins.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-Key');
        response.headers.set('Access-Control-Max-Age', '86400');
      }
    }

    // Add timing header
    const duration = Date.now() - startTime;
    response.headers.set('X-Response-Time', `${duration}ms`);

    return response;
  } catch (error) {
    console.error('[Middleware] Error in rate limiting:', error);
    // Fail open - allow request if rate limiting fails
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};