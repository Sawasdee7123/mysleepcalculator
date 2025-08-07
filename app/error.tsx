// Instructs Next.js to render this component on the client side (needed for hooks and error boundary interactivity)
'use client';

import Link from 'next/link';       // Internal navigation for the "go home" button
import { useEffect } from 'react';  // React hook for side effects (used here to log errors)

/**
 * GlobalError component
 * - Displays a friendly full-page error message for unhandled errors.
 * - Provides buttons to retry the action or return to homepage.
 * - Logs the error to the console for debugging.
 * - Customizes styles to match brand/UI.
 */
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  // Log error to console for debugging (runs whenever the error changes)
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="main-style"
      aria-label="Global error page"
      role="alert"
    >

      {/* Main error headline */}
      <h1>Something went wrong!</h1>
      {/* Friendly explanation */}
      <p>
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      {/* Action buttons: retry or return home */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* Retry button calls the reset handler provided by Next.js */}
        <button
          onClick={() => reset()}
          aria-label="Retry the action"
          style={{
            padding: '1rem 2rem',
            borderRadius: '12px',
            background: 'linear-gradient(90deg, #f4d35e 90%, #fff3b8 100%)',
            color: '#181a30',
            fontWeight: '700',
            fontSize: '1.1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 18px 0 #f4d35e33',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Retry
        </button>

        {/* Link back to homepage */}
        <Link
          href="/"
          aria-label="Return to the homepage"
          style={{
            padding: '1rem 2rem',
            borderRadius: '12px',
            background: 'linear-gradient(90deg, #f4d35e 90%, #fff3b8 100%)',
            color: '#181a30',
            fontWeight: '700',
            fontSize: '1.1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 18px 0 #f4d35e33',
          }}
        >
          ← Return to homepage
        </Link>
      </div>
    </main>
  );
}
