// Instructs Next.js to render this component and all code below on the client side.
'use client';

// Import Next.js Script component for embedding external JS (Google Analytics)
import Script from 'next/script';

// Extend the global Window interface to optionally include the gtag function
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Utility function to track custom events with Google Analytics (if loaded)
// Falls back to console logging for debugging if gtag isn't ready
export function trackEvent(category: string, action: string, label?: string) {
  // Only run in browser environment and if gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  } else {
    // Fallback: log event to console for debugging during development
    console.log('[Debug] Analytics event:', { category, action, label });
  }
}

// Analytics component that injects Google Analytics scripts into the app
export default function Analytics() {
  return (
    <>
      {/* Load the Google Analytics gtag.js library after the page becomes interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2E5EPY5LC5"
        strategy="afterInteractive"
      />
      {/* Inline script: initialize GA dataLayer and gtag config after interactive */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2E5EPY5LC5');
        `}
      </Script>
    </>
  );
}
