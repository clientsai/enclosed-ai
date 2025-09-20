import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // Performance Monitoring
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  // Enable profiling for server-side
  profilesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  // Release tracking
  release: process.env.SENTRY_RELEASE,
  environment: process.env.NODE_ENV,

  // Configure integrations for Node.js
  integrations: [
    // Sentry.nodeProfilingIntegration(), // Commented out as it may not be available in this version
  ],

  // Error filtering
  beforeSend(event, hint) {
    // Filter out development errors
    if (process.env.NODE_ENV === "development") {
      console.log("Sentry Server Event:", event);
    }

    // Add server context
    if (event.request) {
      event.tags = {
        ...event.tags,
        component: "backend",
        route: event.request.url,
      };
    }

    return event;
  },

  // Set initial scope
  initialScope: {
    tags: {
      component: "backend",
    },
  },
});