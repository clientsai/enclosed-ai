// SERVER-ONLY MODULE - Do not import in client components
// Use @/lib/analytics for client-side analytics

let serverClient: any = null;

// Server-side analytics for API routes
class ServerAnalytics {
  private client: any = null;

  constructor() {
    if (process.env.POSTHOG_PROJECT_API_KEY && typeof window === 'undefined') {
      try {
        const { PostHog } = require('posthog-node');

        this.client = new PostHog(process.env.POSTHOG_PROJECT_API_KEY, {
          host: process.env.POSTHOG_HOST || 'https://app.posthog.com',
        });
      } catch (error) {
        console.warn('Failed to initialize PostHog server client:', error);
      }
    }
  }

  capture(distinctId: string, event: string, properties?: Record<string, any>) {
    if (!this.client) return;

    this.client.capture({
      distinctId,
      event,
      properties: {
        server_side: true,
        timestamp: new Date(),
        ...properties
      }
    });
  }

  identify(distinctId: string, properties?: Record<string, any>) {
    if (!this.client) return;

    this.client.identify({
      distinctId,
      properties
    });
  }

  shutdown() {
    if (!this.client) return;

    return this.client.shutdown();
  }
}

// Export singleton instance
export const serverAnalytics = new ServerAnalytics();

// Utility functions for common server-side tracking
export function trackServerEvent(distinctId: string, event: string, properties?: Record<string, any>) {
  serverAnalytics.capture(distinctId, event, properties);
}

export function identifyServerUser(distinctId: string, properties?: Record<string, any>) {
  serverAnalytics.identify(distinctId, properties);
}