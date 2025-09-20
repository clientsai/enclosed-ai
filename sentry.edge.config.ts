import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // Performance Monitoring
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  // Release tracking
  release: process.env.SENTRY_RELEASE,
  environment: process.env.NODE_ENV,

  // Error filtering for edge runtime
  beforeSend(event, hint) {
    // Add edge context
    event.tags = {
      ...event.tags,
      component: "edge",
    };

    return event;
  },

  // Set initial scope
  initialScope: {
    tags: {
      component: "edge",
    },
  },
});