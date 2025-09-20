import { NextRequest, NextResponse } from 'next/server';
import { healthChecker, MetricsCollector } from '@/lib/monitoring';
import { log } from '@/lib/logger';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import Redis from 'ioredis';
import Stripe from 'stripe';

// Initialize health checks
const initializeHealthChecks = () => {
  // Database health check
  healthChecker.addCheck('database', async () => {
    try {
      const supabase = await createServerSupabaseClient();
      const { data, error } = await supabase
        .from('users')
        .select('count')
        .limit(1)
        .single();

      return !error;
    } catch (error) {
      log.error('Database health check failed', {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      return false;
    }
  });

  // Redis health check
  healthChecker.addCheck('redis', async () => {
    if (!process.env.REDIS_URL) return true; // Skip if not configured

    try {
      const redis = new Redis(process.env.REDIS_URL, {
        connectTimeout: 3000,
        lazyConnect: true,
        maxRetriesPerRequest: 1
      });

      await redis.ping();
      await redis.disconnect();
      return true;
    } catch (error) {
      log.error('Redis health check failed', {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      return false;
    }
  });

  // Stripe health check
  healthChecker.addCheck('stripe', async () => {
    if (!process.env.STRIPE_SECRET_KEY) return true; // Skip if not configured

    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      await stripe.balance.retrieve();
      return true;
    } catch (error) {
      log.error('Stripe health check failed', { error: error instanceof Error ? error.message : String(error) });
      return false;
    }
  });

  // External API health checks
  healthChecker.addCheck('openai', async () => {
    if (!process.env.OPENAI_API_KEY) return true; // Skip if not configured

    try {
      const response = await fetch('https://api.openai.com/v1/models', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });

      return response.ok;
    } catch (error) {
      log.error('OpenAI health check failed', { error: error instanceof Error ? error.message : String(error) });
      return false;
    }
  });

  // Lob health check
  healthChecker.addCheck('lob', async () => {
    if (!process.env.LOB_API_KEY) return true; // Skip if not configured

    try {
      const response = await fetch('https://api.lob.com/v1/addresses', {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${Buffer.from(process.env.LOB_API_KEY + ':').toString('base64')}`,
          'Content-Type': 'application/json'
        },
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });

      return response.ok;
    } catch (error) {
      log.error('Lob health check failed', { error: error instanceof Error ? error.message : String(error) });
      return false;
    }
  });

  // SendGrid health check
  healthChecker.addCheck('sendgrid', async () => {
    if (!process.env.SENDGRID_API_KEY) return true; // Skip if not configured

    try {
      const response = await fetch('https://api.sendgrid.com/v3/user/account', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });

      return response.ok;
    } catch (error) {
      log.error('SendGrid health check failed', { error: error instanceof Error ? error.message : String(error) });
      return false;
    }
  });

  // File system health check
  healthChecker.addCheck('filesystem', async () => {
    try {
      const fs = require('fs').promises;
      const testFile = '/tmp/health-check-test';

      await fs.writeFile(testFile, 'test');
      await fs.readFile(testFile);
      await fs.unlink(testFile);

      return true;
    } catch (error) {
      log.error('Filesystem health check failed', { error: error instanceof Error ? error.message : String(error) });
      return false;
    }
  });

  // Memory health check
  healthChecker.addCheck('memory', async () => {
    try {
      const memUsage = process.memoryUsage();
      const heapUsedPercent = (memUsage.heapUsed / memUsage.heapTotal) * 100;

      // Alert if heap usage is above 90%
      if (heapUsedPercent > 90) {
        log.warn('High memory usage detected', {
          heapUsedPercent,
          memUsage
        });
        return false;
      }

      return true;
    } catch (error) {
      log.error('Memory health check failed', { error: error instanceof Error ? error.message : String(error) });
      return false;
    }
  });
};

// Initialize health checks once
let healthChecksInitialized = false;
if (!healthChecksInitialized) {
  initializeHealthChecks();
  healthChecksInitialized = true;
}

export async function GET(request: NextRequest) {
  const startTime = Date.now();

  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const includeMetrics = searchParams.get('metrics') === 'true';
    const includeSystem = searchParams.get('system') === 'true';

    // Run health checks
    const healthResults = await healthChecker.runChecks();

    // Collect metrics if requested
    let metrics = {};
    if (includeMetrics) {
      metrics = {
        system: includeSystem ? await MetricsCollector.getSystemMetrics() : undefined,
        database: await MetricsCollector.getDatabaseMetrics(),
        redis: await MetricsCollector.getRedisMetrics(),
      };
    }

    const duration = Date.now() - startTime;

    // Log health check
    log.info('Health check completed', {
      status: healthResults.status,
      duration,
      checks: healthResults.checks,
      includeMetrics,
      includeSystem
    });

    // Determine response status
    const statusCode = healthResults.status === 'healthy' ? 200 : 503;

    const response = {
      status: healthResults.status,
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV,
      uptime: process.uptime(),
      checks: healthResults.checks,
      ...(includeMetrics && { metrics })
    };

    return NextResponse.json(response, { status: statusCode });

  } catch (error) {
    const duration = Date.now() - startTime;

    log.error('Health check failed', {
      error: error instanceof Error ? error.message : 'Unknown error',
      duration
    });

    return NextResponse.json({
      status: 'error',
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      error: error instanceof Error ? error.message : 'Health check failed',
      checks: {}
    }, { status: 500 });
  }
}

// Simple liveness probe (for Kubernetes)
export async function HEAD(request: NextRequest) {
  try {
    // Basic check - just ensure the process is running
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    return new NextResponse(null, { status: 500 });
  }
}