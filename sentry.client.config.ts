import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Performance Monitoring
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  // Session Replay
  replaysSessionSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
  replaysOnErrorSampleRate: 1.0,

  // Enable profiling
  profilesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  // Configure integrations
  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
    Sentry.browserProfilingIntegration(),
  ],

  // Release tracking
  release: process.env.NEXT_PUBLIC_SENTRY_RELEASE,
  environment: process.env.NODE_ENV,

  // Error filtering
  beforeSend(event, hint) {
    // Filter out development errors
    if (process.env.NODE_ENV === "development") {
      console.log("Sentry Event:", event);
    }

    // Filter out specific errors
    if (event.exception) {
      const error = hint.originalException;
      if (error && typeof error === "object" && "message" in error) {
        const message = (error as Error).message;

        // Filter out common non-critical errors
        if (
          message.includes("Non-Error promise rejection captured") ||
          message.includes("ResizeObserver loop limit exceeded") ||
          message.includes("Script error")
        ) {
          return null;
        }
      }
    }

    return event;
  },

  // Set user context
  initialScope: {
    tags: {
      component: "frontend",
    },
  },
});