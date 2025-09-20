'use client';

import React from 'react';
import { PostHog } from 'posthog-js';

let posthog: PostHog | null = null;

// Initialize PostHog
export function initializeAnalytics() {
  if (typeof window === 'undefined') return null;

  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    console.warn('PostHog key not found. Analytics will be disabled.');
    return null;
  }

  if (!posthog) {
    const { PostHog } = require('posthog-js');

    posthog = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false, // We'll handle this manually
      capture_pageleave: true,
      debug: process.env.NODE_ENV === 'development',

      // Privacy settings
      respect_dnt: true,
      opt_out_capturing_by_default: false,

      // Performance settings
      batch_size: 10,
      request_timeout_ms: 10000,

      // Session recording (optional)
      disable_session_recording: process.env.NEXT_PUBLIC_POSTHOG_DISABLE_SESSION_RECORDING === 'true',

      // Feature flags
      bootstrap: {
        featureFlags: {},
        featureFlagPayloads: {}
      },

      // Custom properties to include with all events
      property_blacklist: ['$lib_version', '$referrer'],

      loaded: (posthog: any) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('PostHog initialized successfully');
        }
      }
    });

    // Add global event properties
    posthog?.register({
      app_version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      environment: process.env.NODE_ENV,
      platform: 'web'
    });

    // Make it available globally for Web Vitals
    if (typeof window !== 'undefined') {
      (window as any).posthog = posthog;
    }
  }

  return posthog;
}

// Analytics wrapper with type safety
class Analytics {
  private posthog: PostHog | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.posthog = initializeAnalytics();
    }
  }

  // Page view tracking
  capturePageView(path?: string, properties?: Record<string, any>) {
    if (!this.posthog) return;

    this.posthog.capture('$pageview', {
      $current_url: path || window.location.href,
      ...properties
    });
  }

  // Custom event tracking
  capture(event: string, properties?: Record<string, any>) {
    if (!this.posthog) return;

    this.posthog.capture(event, properties);
  }

  // User identification
  identify(userId: string, properties?: Record<string, any>) {
    if (!this.posthog) return;

    this.posthog.identify(userId, properties);
  }

  // User properties
  setPersonProperties(properties: Record<string, any>) {
    if (!this.posthog) return;

    this.posthog.setPersonProperties(properties);
  }

  // Group analytics (for organizations/teams)
  group(groupType: string, groupKey: string, properties?: Record<string, any>) {
    if (!this.posthog) return;

    this.posthog.group(groupType, groupKey, properties);
  }

  // Feature flag evaluation
  isFeatureEnabled(flag: string, defaultValue = false): boolean {
    if (!this.posthog) return defaultValue;

    return this.posthog.isFeatureEnabled(flag) ?? defaultValue;
  }

  // Get feature flag variant
  getFeatureFlagVariant(flag: string): string | boolean | undefined {
    if (!this.posthog) return undefined;

    return this.posthog.getFeatureFlag(flag);
  }

  // Reset user (logout)
  reset() {
    if (!this.posthog) return;

    this.posthog.reset();
  }

  // Opt out of tracking
  optOut() {
    if (!this.posthog) return;

    this.posthog.opt_out_capturing();
  }

  // Opt in to tracking
  optIn() {
    if (!this.posthog) return;

    this.posthog.opt_in_capturing();
  }

  // Business-specific event tracking
  trackSignup(method: string, properties?: Record<string, any>) {
    this.capture('user_signed_up', {
      signup_method: method,
      ...properties
    });
  }

  trackLogin(method: string, properties?: Record<string, any>) {
    this.capture('user_logged_in', {
      login_method: method,
      ...properties
    });
  }

  trackSubscription(plan: string, price: number, currency = 'USD', properties?: Record<string, any>) {
    this.capture('subscription_created', {
      plan_name: plan,
      price,
      currency,
      ...properties
    });
  }

  trackCampaignCreated(campaignType: string, properties?: Record<string, any>) {
    this.capture('campaign_created', {
      campaign_type: campaignType,
      ...properties
    });
  }

  trackCampaignSent(campaignId: string, recipientCount: number, properties?: Record<string, any>) {
    this.capture('campaign_sent', {
      campaign_id: campaignId,
      recipient_count: recipientCount,
      ...properties
    });
  }

  trackFormSubmission(formName: string, properties?: Record<string, any>) {
    this.capture('form_submitted', {
      form_name: formName,
      ...properties
    });
  }

  trackError(error: string, context?: Record<string, any>) {
    this.capture('error_occurred', {
      error_message: error,
      ...context
    });
  }

  trackPerformance(metric: string, value: number, properties?: Record<string, any>) {
    this.capture('performance_metric', {
      metric_name: metric,
      metric_value: value,
      ...properties
    });
  }

  // E-commerce tracking
  trackPurchase(orderId: string, value: number, currency = 'USD', items?: any[], properties?: Record<string, any>) {
    this.capture('purchase_completed', {
      order_id: orderId,
      value,
      currency,
      items,
      ...properties
    });
  }

  trackAddToCart(productId: string, productName: string, price: number, properties?: Record<string, any>) {
    this.capture('add_to_cart', {
      product_id: productId,
      product_name: productName,
      price,
      ...properties
    });
  }

  // Funnel tracking
  trackFunnelStep(funnelName: string, step: string, properties?: Record<string, any>) {
    this.capture('funnel_step', {
      funnel_name: funnelName,
      step_name: step,
      ...properties
    });
  }

  // A/B Testing utilities
  trackExperimentView(experimentName: string, variant: string, properties?: Record<string, any>) {
    this.capture('experiment_viewed', {
      experiment_name: experimentName,
      variant,
      ...properties
    });
  }
}

// Note: Server-side analytics moved to @/lib/analytics-server

// Export singleton instances
export const analytics = new Analytics();

// React hook for analytics
export function useAnalytics() {
  return analytics;
}

// Utility for tracking page views in Next.js App Router
export function trackPageView(path: string, properties?: Record<string, any>) {
  analytics.capturePageView(path, properties);
}

// Higher-order component for automatic page view tracking
export function withAnalytics<T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  eventName?: string
) {
  return function AnalyticsWrapper(props: T) {
    React.useEffect(() => {
      if (eventName) {
        analytics.capture(eventName);
      }
    }, []);

    return React.createElement(Component, props);
  };
}

// Hook for feature flags
export function useFeatureFlag(flag: string, defaultValue = false) {
  const [isEnabled, setIsEnabled] = React.useState(defaultValue);

  React.useEffect(() => {
    const checkFlag = () => {
      const enabled = analytics.isFeatureEnabled(flag, defaultValue);
      setIsEnabled(enabled);
    };

    checkFlag();

    // Re-check when PostHog loads
    const interval = setInterval(checkFlag, 1000);
    setTimeout(() => clearInterval(interval), 5000); // Stop checking after 5 seconds

    return () => clearInterval(interval);
  }, [flag, defaultValue]);

  return isEnabled;
}

// Environment-based conditional tracking
export const shouldTrack = process.env.NODE_ENV === 'production' ||
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_IN_DEV === 'true';

export default analytics;