import { NextRequest, NextResponse } from 'next/server';
import { MetricsCollector } from '@/lib/monitoring';
import { log } from '@/lib/logger';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export async function GET(request: NextRequest) {
  const startTime = Date.now();

  try {
    // Collect comprehensive system information
    const systemMetrics = await MetricsCollector.getSystemMetrics();
    const redisMetrics = await MetricsCollector.getRedisMetrics();

    // Database statistics
    let databaseStats: any = {};
    try {
      const supabase = await createServerSupabaseClient();

      // Get table counts (adjust tables based on your schema)
      const tables = ['users', 'campaigns', 'leads'];
      const counts: any = {};

      for (const table of tables) {
        try {
          const { count, error } = await supabase
            .from(table)
            .select('*', { count: 'exact', head: true });

          if (!error) {
            counts[table] = count;
          }
        } catch (error) {
          counts[table] = 'error';
        }
      }

      databaseStats = {
        connected: true,
        table_counts: counts
      };
    } catch (error) {
      databaseStats = {
        connected: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }

    // Application-specific metrics
    const appMetrics = {
      node_version: process.version,
      platform: process.platform,
      architecture: process.arch,
      environment: process.env.NODE_ENV,
      timezone: process.env.TZ || 'UTC',
      uptime_seconds: Math.floor(process.uptime()),
      startup_time: new Date(Date.now() - process.uptime() * 1000).toISOString()
    };

    // Environment configuration check
    const envConfig = {
      has_stripe: !!process.env.STRIPE_SECRET_KEY,
      has_openai: !!process.env.OPENAI_API_KEY,
      has_sendgrid: !!process.env.SENDGRID_API_KEY,
      has_lob: !!process.env.LOB_API_KEY,
      has_redis: !!process.env.REDIS_URL,
      has_sentry: !!process.env.SENTRY_DSN,
      has_posthog: !!process.env.NEXT_PUBLIC_POSTHOG_KEY
    };

    const duration = Date.now() - startTime;

    const response = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      system: systemMetrics,
      database: databaseStats,
      redis: redisMetrics,
      application: appMetrics,
      environment: envConfig,
      health_check_info: {
        endpoint: '/api/health/detailed',
        description: 'Comprehensive health and metrics endpoint',
        last_check: new Date().toISOString()
      }
    };

    log.info('Detailed health check completed', {
      duration,
      database_connected: databaseStats?.connected || false,
      redis_connected: redisMetrics?.connected || false
    });

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

  } catch (error) {
    const duration = Date.now() - startTime;

    log.error('Detailed health check failed', {
      error: error instanceof Error ? error.message : 'Unknown error',
      duration
    });

    return NextResponse.json({
      status: 'error',
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      error: error instanceof Error ? error.message : 'Detailed health check failed',
      system: await MetricsCollector.getSystemMetrics().catch(() => ({}))
    }, { status: 500 });
  }
}