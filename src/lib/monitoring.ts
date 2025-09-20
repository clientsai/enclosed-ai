import { NextRequest, NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { log } from './logger';
import Redis from 'ioredis';

// Redis client for rate limiting and metrics
let redis: Redis | null = null;

if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL, {
    enableReadyCheck: false,
    maxRetriesPerRequest: 1,
  });

  redis.on('error', (error) => {
    log.error('Redis connection error', { error: error.message });
  });

  redis.on('connect', () => {
    log.info('Redis connected successfully');
  });
}

// Rate limiting configuration
interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (req: NextRequest) => string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

// Rate limiting middleware
export class RateLimiter {
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  async isAllowed(req: NextRequest): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
    if (!redis) {
      log.warn('Rate limiting disabled: Redis not configured');
      return { allowed: true, remaining: 999, resetTime: Date.now() + this.config.windowMs };
    }

    const key = this.config.keyGenerator ? this.config.keyGenerator(req) : this.getDefaultKey(req);
    const window = Math.floor(Date.now() / this.config.windowMs);
    const redisKey = `rate_limit:${key}:${window}`;

    try {
      const current = await redis.incr(redisKey);

      if (current === 1) {
        await redis.expire(redisKey, Math.ceil(this.config.windowMs / 1000));
      }

      const remaining = Math.max(0, this.config.maxRequests - current);
      const resetTime = (window + 1) * this.config.windowMs;

      return {
        allowed: current <= this.config.maxRequests,
        remaining,
        resetTime
      };
    } catch (error) {
      log.error('Rate limiting error', { error: error instanceof Error ? error.message : String(error), key });
      // Fail open - allow request if Redis is down
      return { allowed: true, remaining: 999, resetTime: Date.now() + this.config.windowMs };
    }
  }

  private getDefaultKey(req: NextRequest): string {
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
    return `ip:${ip}`;
  }
}

// Performance monitoring utilities
export class PerformanceMonitor {
  private startTime: number;
  private operation: string;
  private metadata: any;

  constructor(operation: string, metadata?: any) {
    this.operation = operation;
    this.metadata = metadata || {};
    this.startTime = performance.now();
  }

  end(additionalData?: any): number {
    const duration = performance.now() - this.startTime;

    log.performance(this.operation, duration, {
      ...this.metadata,
      ...additionalData
    });

    // Send to Sentry as a transaction
    Sentry.startSpan({
      name: this.operation,
      op: 'function'
    }, () => {
      // Span automatically ends
    });

    return duration;
  }

  static async measure<T>(
    operation: string,
    fn: () => Promise<T>,
    metadata?: any
  ): Promise<T> {
    const monitor = new PerformanceMonitor(operation, metadata);

    try {
      const result = await fn();
      monitor.end({ success: true });
      return result;
    } catch (error) {
      monitor.end({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      throw error;
    }
  }
}

// API monitoring middleware
export function createApiMonitoringMiddleware() {
  return async (req: NextRequest) => {
    const startTime = Date.now();
    const method = req.method;
    const url = req.url;
    const userAgent = req.headers.get('user-agent') || 'unknown';
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

    // Extract user ID from authorization header or session
    let userId: string | undefined;
    try {
      const authHeader = req.headers.get('authorization');
      if (authHeader) {
        // Extract user ID from JWT or session
        // This would depend on your auth implementation
        userId = 'extracted-from-auth'; // Placeholder
      }
    } catch (error) {
      // Ignore auth extraction errors
    }

    // Create Sentry transaction
    return Sentry.withScope(async (scope) => {
      scope.setTag('api_endpoint', url);
      scope.setTag('http_method', method);
      scope.setContext('request', {
        url,
        method,
        userAgent,
        ip
      });

      if (userId) {
        scope.setUser({ id: userId });
      }

      // Create Sentry span instead of transaction
      const span = Sentry.startSpan({
        name: `${method} ${url}`,
        op: 'http.server'
      }, () => {});

      try {
        // Continue to next middleware/handler
        const response = NextResponse.next();

        const duration = Date.now() - startTime;
        const statusCode = response.status;

        // Log API call
        log.apiLog(method, url, statusCode, duration, userId);

        // Add Sentry context
        Sentry.setContext('response', {
          status: statusCode,
          size: response.headers.get('content-length') || '0'
        });

        // Track metrics in Redis
        if (redis) {
          try {
            const metricsKey = `api_metrics:${method}:${new URL(url).pathname}`;
            await redis.hincrby(metricsKey, 'total_requests', 1);
            await redis.hincrby(metricsKey, `status_${statusCode}`, 1);
            await redis.hincrby(metricsKey, 'total_duration', duration);
            await redis.expire(metricsKey, 86400); // 24 hours
          } catch (error) {
            log.error('Failed to update API metrics', { error: error instanceof Error ? error.message : String(error) });
          }
        }

        return response;
      } catch (error) {
        const duration = Date.now() - startTime;

        log.error('API request failed', {
          method,
          url,
          duration,
          error: error instanceof Error ? error.message : 'Unknown error',
          userId
        });

        Sentry.captureException(error);

        throw error;
      }
    });
  };
}

// Health check utilities
export class HealthChecker {
  private checks: Map<string, () => Promise<boolean>> = new Map();

  addCheck(name: string, checkFn: () => Promise<boolean>) {
    this.checks.set(name, checkFn);
  }

  async runChecks(): Promise<{ status: 'healthy' | 'unhealthy'; checks: Record<string, boolean> }> {
    const results: Record<string, boolean> = {};
    let allHealthy = true;

    for (const [name, checkFn] of this.checks) {
      try {
        const result = await Promise.race([
          checkFn(),
          new Promise<boolean>((_, reject) =>
            setTimeout(() => reject(new Error('Health check timeout')), 5000)
          )
        ]);

        results[name] = result;
        if (!result) allHealthy = false;
      } catch (error) {
        results[name] = false;
        allHealthy = false;
        log.error(`Health check failed: ${name}`, {
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return {
      status: allHealthy ? 'healthy' : 'unhealthy',
      checks: results
    };
  }
}

// System metrics collection
export class MetricsCollector {
  static async getSystemMetrics() {
    const metrics = {
      timestamp: new Date().toISOString(),
      memory: process.memoryUsage(),
      uptime: process.uptime(),
      cpu: process.cpuUsage(),
      version: process.version,
      platform: process.platform,
      arch: process.arch
    };

    // Store metrics in Redis for aggregation
    if (redis) {
      try {
        const key = `system_metrics:${Date.now()}`;
        await redis.setex(key, 3600, JSON.stringify(metrics)); // Store for 1 hour
      } catch (error) {
        log.error('Failed to store system metrics', {
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return metrics;
  }

  static async getDatabaseMetrics() {
    // This would integrate with your database monitoring
    // For Supabase, you might track connection pool stats
    return {
      connections: 'monitoring-placeholder',
      queryTime: 'monitoring-placeholder',
      slowQueries: 'monitoring-placeholder'
    };
  }

  static async getRedisMetrics() {
    if (!redis) return null;

    try {
      const info = await redis.info();
      const memory = await redis.info('memory');
      const stats = await redis.info('stats');

      return {
        connected: true,
        memory_usage: memory.match(/used_memory_human:(.+)/)?.[1] || 'unknown',
        total_commands: stats.match(/total_commands_processed:(\d+)/)?.[1] || '0',
        connected_clients: info.match(/connected_clients:(\d+)/)?.[1] || '0'
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      log.error('Failed to get Redis metrics', { error: errorMessage });
      return { connected: false, error: errorMessage };
    }
  }
}

// Error boundary for API routes
export function withErrorBoundary<T extends (...args: any[]) => any>(
  handler: T,
  context?: string
): T {
  return (async (...args) => {
    try {
      return await handler(...args);
    } catch (error) {
      const errorId = Sentry.captureException(error);

      log.error(`Error in ${context || 'API handler'}`, {
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        errorId
      });

      // Return appropriate error response
      if (args[1] && typeof args[1].status === 'function') {
        return args[1].status(500).json({
          error: 'Internal server error',
          errorId,
          message: process.env.NODE_ENV === 'development'
            ? (error instanceof Error ? error.message : 'Unknown error')
            : 'An unexpected error occurred'
        });
      }

      throw error;
    }
  }) as T;
}

// Export singleton instances
export const healthChecker = new HealthChecker();

// Default rate limiters
export const defaultRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100
});

export const strictRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 10
});

export const authRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5,
  keyGenerator: (req) => {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    return `auth:${ip}`;
  }
});