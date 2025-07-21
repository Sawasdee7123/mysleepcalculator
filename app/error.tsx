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
    <main className="main-style">

      {/* Main error headline */}
      <h1>¡Algo salió mal!</h1>
      {/* Friendly explanation */}
      <p>
        Ocurrió un error inesperado. Por favor intenta nuevamente o vuelve a la página principal.
      </p>
      {/* Action buttons: retry or return home */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* Retry button calls the reset handler provided by Next.js */}
        <button
          onClick={() => reset()}
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
          Reintentar
        </button>

        {/* Link back to homepage */}
        <Link
          href="/"
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
          ← Volver a la página principal
        </Link>
      </div>
    </main>
  );
}
