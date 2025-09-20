'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { analytics, initializeAnalytics } from '@/lib/analytics';

interface AnalyticsContextType {
  isInitialized: boolean;
  analytics: typeof analytics;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  isInitialized: false,
  analytics
});

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize analytics only on client side
    if (typeof window !== 'undefined') {
      try {
        initializeAnalytics();
        setIsInitialized(true);

        // Track initial page view
        analytics.capturePageView(window.location.pathname, {
          initial_load: true,
          referrer: document.referrer || undefined,
          timestamp: new Date().toISOString()
        });

        console.log('Analytics initialized successfully');
      } catch (error) {
        console.error('Failed to initialize analytics:', error);
      }
    }
  }, []);

  return (
    <AnalyticsContext.Provider value={{ isInitialized, analytics }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalyticsContext() {
  return useContext(AnalyticsContext);
}

// HOC for pages that need analytics tracking
export function withPageTracking<T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  pageName: string
) {
  return function PageTrackingWrapper(props: T) {
    const { isInitialized, analytics } = useAnalyticsContext();

    useEffect(() => {
      if (isInitialized) {
        analytics.capturePageView(window.location.pathname, {
          page_name: pageName,
          timestamp: new Date().toISOString()
        });
      }
    }, [isInitialized]);

    return <Component {...props} />;
  };
}