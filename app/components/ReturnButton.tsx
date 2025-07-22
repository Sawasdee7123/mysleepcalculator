'use client';

import Link from 'next/link';

/**
 * A reusable button that links back to the main Sleep Calculator page.
 */
export default function ReturnButton() {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Link
        href="/"
        aria-label="Volver a la Calculadora de Sueño"
        style={{
          padding: '0.8rem 2rem',
          borderRadius: '12px',
          background: 'linear-gradient(90deg, #f4d35e 90%, #fff3b8 100%)',
          color: '#181a30',
          fontWeight: '700',
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 4px 18px 0 #f4d35e33',
        }}
      >
        ← Volver a la Calculadora
      </Link>
    </div>
  );
}
