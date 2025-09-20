// SERVER-ONLY MODULE - Do not import in client components
// Use @/lib/logger-client for client-side logging

import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import * as Sentry from '@sentry/nextjs';

// Custom log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Log colors for console output
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

// Custom format for logs
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

// Transports for different environments
const transports: any[] = [
  // Console transport for development
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }),
];

// Add file transports for production
if (process.env.NODE_ENV === 'production') {
  transports.push(
    // Error logs
    new DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      handleExceptions: true,
      json: true,
      maxSize: '20m',
      maxFiles: '14d'
    }),

    // Combined logs
    new DailyRotateFile({
      filename: 'logs/combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      json: true,
      maxSize: '20m',
      maxFiles: '14d'
    }),

    // Audit logs for important actions
    new DailyRotateFile({
      filename: 'logs/audit-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'info',
      json: true,
      maxSize: '20m',
      maxFiles: '30d'
    })
  );
}

// Create logger instance
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  levels,
  format,
  transports,
  exitOnError: false,
});

// Custom logging methods with Sentry integration
class Logger {
  private winston: winston.Logger;

  constructor(winstonLogger: winston.Logger) {
    this.winston = winstonLogger;
  }

  error(message: string, meta?: any, userId?: string) {
    this.winston.error(message, meta);

    // Send to Sentry
    Sentry.withScope((scope) => {
      if (userId) {
        scope.setUser({ id: userId });
      }
      if (meta) {
        scope.setContext('metadata', meta);
      }
      scope.setLevel('error');
      Sentry.captureMessage(message);
    });
  }

  warn(message: string, meta?: any, userId?: string) {
    this.winston.warn(message, meta);

    // Send to Sentry for production warnings
    if (process.env.NODE_ENV === 'production') {
      Sentry.withScope((scope) => {
        if (userId) {
          scope.setUser({ id: userId });
        }
        if (meta) {
          scope.setContext('metadata', meta);
        }
        scope.setLevel('warning');
        Sentry.captureMessage(message);
      });
    }
  }

  info(message: string, meta?: any) {
    this.winston.info(message, meta);
  }

  http(message: string, meta?: any) {
    this.winston.http(message, meta);
  }

  debug(message: string, meta?: any) {
    this.winston.debug(message, meta);
  }

  // Audit logging for important business actions
  audit(action: string, userId: string, meta?: any) {
    const auditLog = {
      action,
      userId,
      timestamp: new Date().toISOString(),
      ...meta
    };

    this.winston.info(`AUDIT: ${action}`, auditLog);

    // Send audit events to Sentry with user context
    Sentry.withScope((scope) => {
      scope.setUser({ id: userId });
      scope.setContext('audit', auditLog);
      scope.setTag('type', 'audit');
      Sentry.addBreadcrumb({
        message: `Audit: ${action}`,
        category: 'audit',
        level: 'info',
        data: meta
      });
    });
  }

  // Performance logging
  performance(operation: string, duration: number, meta?: any) {
    const perfLog = {
      operation,
      duration,
      timestamp: new Date().toISOString(),
      ...meta
    };

    this.winston.info(`PERFORMANCE: ${operation} took ${duration}ms`, perfLog);

    // Send performance data to Sentry
    Sentry.addBreadcrumb({
      message: `Performance: ${operation}`,
      category: 'performance',
      level: 'info',
      data: perfLog
    });
  }

  // API request/response logging
  apiLog(method: string, url: string, statusCode: number, duration: number, userId?: string) {
    const apiLog = {
      method,
      url,
      statusCode,
      duration,
      userId,
      timestamp: new Date().toISOString()
    };

    const level = statusCode >= 400 ? 'error' : statusCode >= 300 ? 'warn' : 'http';
    this.winston[level](`API ${method} ${url} ${statusCode} - ${duration}ms`, apiLog);

    // Send API errors to Sentry
    if (statusCode >= 400) {
      Sentry.withScope((scope) => {
        if (userId) {
          scope.setUser({ id: userId });
        }
        scope.setContext('api', apiLog);
        scope.setTag('api_error', true);
        Sentry.captureMessage(`API Error: ${method} ${url} ${statusCode}`);
      });
    }
  }
}

// Export singleton logger instance
export const log = new Logger(logger);

// Export types for TypeScript
export interface LogMeta {
  [key: string]: any;
}

export interface AuditMeta extends LogMeta {
  resource?: string;
  resourceId?: string;
  changes?: any;
  ipAddress?: string;
  userAgent?: string;
}

// Utility to measure execution time
export function measureTime<T>(
  operation: string,
  fn: () => Promise<T>,
  meta?: any
): Promise<T> {
  const start = Date.now();

  return fn().then(
    (result) => {
      const duration = Date.now() - start;
      log.performance(operation, duration, { success: true, ...meta });
      return result;
    },
    (error) => {
      const duration = Date.now() - start;
      log.performance(operation, duration, { success: false, error: error.message, ...meta });
      throw error;
    }
  );
}

// Utility to create scoped loggers
export function createScopedLogger(scope: string) {
  return {
    error: (message: string, meta?: any, userId?: string) =>
      log.error(`[${scope}] ${message}`, meta, userId),
    warn: (message: string, meta?: any, userId?: string) =>
      log.warn(`[${scope}] ${message}`, meta, userId),
    info: (message: string, meta?: any) =>
      log.info(`[${scope}] ${message}`, meta),
    debug: (message: string, meta?: any) =>
      log.debug(`[${scope}] ${message}`, meta),
    audit: (action: string, userId: string, meta?: any) =>
      log.audit(`${scope}:${action}`, userId, meta),
    performance: (operation: string, duration: number, meta?: any) =>
      log.performance(`${scope}:${operation}`, duration, meta),
  };
}