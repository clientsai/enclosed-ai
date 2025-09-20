import { NextRequest, NextResponse } from 'next/server';
import { withErrorBoundary, PerformanceMonitor } from '@/lib/monitoring';
import { log } from '@/lib/logger';
import { serverAnalytics } from '@/lib/analytics-server';
import * as Sentry from '@sentry/nextjs';

async function handler(request: NextRequest) {
  const monitor = new PerformanceMonitor('example_api_call', {
    method: request.method,
    url: request.url
  });

  try {
    // Log the API call
    log.info('Example API endpoint called', {
      method: request.method,
      url: request.url,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
    });

    // Simulate some work
    await new Promise(resolve => setTimeout(resolve, Math.random() * 100));

    // Example of custom metrics
    Sentry.setMeasurement('api_call_count', 1, 'none');
    Sentry.addBreadcrumb({
      message: 'API call processed successfully',
      category: 'api',
      level: 'info'
    });

    // Track analytics event
    const userId = request.headers.get('x-user-id'); // Example user ID from auth
    if (userId) {
      serverAnalytics.capture(userId, 'api_call', {
        endpoint: '/api/example-monitored',
        method: request.method
      });
    }

    const response = {
      success: true,
      message: 'This is an example monitored API endpoint',
      timestamp: new Date().toISOString(),
      monitoring: {
        performance: true,
        logging: true,
        analytics: true,
        errorTracking: true
      }
    };

    // End performance monitoring
    const duration = monitor.end({ success: true });

    log.info('Example API call completed successfully', {
      duration,
      response: response
    });

    return NextResponse.json(response);

  } catch (error) {
    // End performance monitoring with error
    monitor.end({ success: false, error: error instanceof Error ? error.message : 'Unknown error' });

    // Log error
    log.error('Example API call failed', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });

    throw error; // Re-throw to be handled by error boundary
  }
}

// Export with error boundary wrapper
export const GET = withErrorBoundary(handler, 'example-monitored-api');
export const POST = withErrorBoundary(handler, 'example-monitored-api');