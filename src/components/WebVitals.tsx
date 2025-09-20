'use client';

import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import * as Sentry from '@sentry/nextjs';

interface WebVitalsProps {
  analyticsId?: string;
  debug?: boolean;
}

// Web Vitals thresholds (good, needs improvement, poor)
const VITALS_THRESHOLDS = {
  CLS: [0.1, 0.25],
  INP: [200, 500], // Interaction to Next Paint replaces FID
  FCP: [1800, 3000],
  LCP: [2500, 4000],
  TTFB: [800, 1800]
};

function getVitalRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = VITALS_THRESHOLDS[name as keyof typeof VITALS_THRESHOLDS];
  if (!thresholds) return 'good';

  if (value <= thresholds[0]) return 'good';
  if (value <= thresholds[1]) return 'needs-improvement';
  return 'poor';
}

function sendToAnalytics(metric: any, analyticsId?: string, debug?: boolean) {
  const rating = getVitalRating(metric.name, metric.value);

  // Send to Sentry
  Sentry.addBreadcrumb({
    message: `Web Vital: ${metric.name}`,
    category: 'web-vitals',
    level: rating === 'poor' ? 'error' : rating === 'needs-improvement' ? 'warning' : 'info',
    data: {
      name: metric.name,
      value: metric.value,
      rating,
      id: metric.id,
      navigationType: metric.navigationType
    }
  });

  // Send performance data to Sentry
  Sentry.setMeasurement(metric.name, metric.value, 'millisecond');

  // Log to console in debug mode
  if (debug) {
    console.log('Web Vital:', {
      name: metric.name,
      value: metric.value,
      rating,
      id: metric.id
    });
  }

  // Send to PostHog if available
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture('web_vital', {
      name: metric.name,
      value: metric.value,
      rating,
      id: metric.id,
      navigationType: metric.navigationType
    });
  }

  // Send to Google Analytics if ID provided
  if (analyticsId && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      custom_parameter_1: metric.value,
      custom_parameter_2: rating,
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true
    });
  }
}

export default function WebVitals({ analyticsId, debug = false }: WebVitalsProps) {
  useEffect(() => {
    // Collect and send all Web Vitals
    onCLS((metric) => sendToAnalytics(metric, analyticsId, debug));
    onINP((metric) => sendToAnalytics(metric, analyticsId, debug)); // Updated from onFID to onINP
    onFCP((metric) => sendToAnalytics(metric, analyticsId, debug));
    onLCP((metric) => sendToAnalytics(metric, analyticsId, debug));
    onTTFB((metric) => sendToAnalytics(metric, analyticsId, debug));

    // Collect additional performance metrics
    if ('navigation' in performance && 'getEntriesByType' in performance) {
      // Navigation timing
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const navigation = navigationEntries[0];

        const metrics = {
          dns_lookup: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp_connect: navigation.connectEnd - navigation.connectStart,
          tls_handshake: navigation.secureConnectionStart > 0
            ? navigation.connectEnd - navigation.secureConnectionStart
            : 0,
          request_time: navigation.responseStart - navigation.requestStart,
          response_time: navigation.responseEnd - navigation.responseStart,
          dom_processing: navigation.domComplete - navigation.domContentLoadedEventStart,
          load_complete: navigation.loadEventEnd - navigation.loadEventStart
        };

        // Send custom metrics to Sentry
        Object.entries(metrics).forEach(([name, value]) => {
          if (value > 0) {
            Sentry.setMeasurement(`custom.${name}`, value, 'millisecond');
          }
        });

        if (debug) {
          console.log('Navigation Timing:', metrics);
        }
      }
    }

    // Resource timing for slow resources
    if ('getEntriesByType' in performance) {
      const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const slowResources = resourceEntries.filter(entry => entry.duration > 1000); // > 1 second

      slowResources.forEach(resource => {
        Sentry.addBreadcrumb({
          message: `Slow Resource: ${resource.name}`,
          category: 'performance',
          level: 'warning',
          data: {
            name: resource.name,
            duration: resource.duration,
            size: resource.transferSize,
            type: resource.initiatorType
          }
        });

        if (debug) {
          console.warn('Slow Resource:', {
            name: resource.name,
            duration: resource.duration,
            size: resource.transferSize
          });
        }
      });
    }

    // Memory usage (Chrome only)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      Sentry.setContext('memory', {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit
      });
    }

    // Device and connection info
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      Sentry.setContext('connection', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      });
    }

    // Visibility change tracking
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Send any buffered analytics when page becomes hidden
        if (typeof window !== 'undefined' && (window as any).posthog) {
          (window as any).posthog.capture('page_hidden');
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [analyticsId, debug]);

  return null;
}

// Hook for manual performance tracking
export function usePerformanceTracking() {
  const trackEvent = (name: string, startTime: number, metadata?: Record<string, any>) => {
    const duration = performance.now() - startTime;

    Sentry.addBreadcrumb({
      message: `Custom Performance: ${name}`,
      category: 'performance',
      level: 'info',
      data: {
        name,
        duration,
        ...metadata
      }
    });

    Sentry.setMeasurement(`custom.${name}`, duration, 'millisecond');

    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('custom_performance', {
        name,
        duration,
        ...metadata
      });
    }
  };

  const measureAsync = async function<T>(
    name: string,
    fn: () => Promise<T>,
    metadata?: Record<string, any>
  ): Promise<T> {
    const startTime = performance.now();

    try {
      const result = await fn();
      trackEvent(name, startTime, { success: true, ...metadata });
      return result;
    } catch (error) {
      trackEvent(name, startTime, {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        ...metadata
      });
      throw error;
    }
  }

  return { trackEvent, measureAsync };
}