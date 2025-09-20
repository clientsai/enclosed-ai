'use client';

// Client-side logging utility that doesn't import server-only modules
// This provides a safe logging interface for client components

interface LogMeta {
  [key: string]: any;
}

class ClientLogger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  error(message: string, meta?: LogMeta, userId?: string) {
    console.error(`[ERROR] ${message}`, meta);

    // In a real application, you might send this to a client-side error service
    // For now, we'll just log to console
  }

  warn(message: string, meta?: LogMeta, userId?: string) {
    console.warn(`[WARN] ${message}`, meta);
  }

  info(message: string, meta?: LogMeta) {
    if (this.isDevelopment) {
      console.info(`[INFO] ${message}`, meta);
    }
  }

  debug(message: string, meta?: LogMeta) {
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, meta);
    }
  }

  // Client-side audit logging (just console for now)
  audit(action: string, userId: string, meta?: LogMeta) {
    if (this.isDevelopment) {
      console.log(`[AUDIT] ${action}`, { userId, ...meta });
    }
  }

  // Performance logging
  performance(operation: string, duration: number, meta?: LogMeta) {
    if (this.isDevelopment) {
      console.log(`[PERFORMANCE] ${operation} took ${duration}ms`, meta);
    }
  }
}

// Export singleton logger instance for client-side use
export const log = new ClientLogger();

// Re-export types for consistency
export type { LogMeta };