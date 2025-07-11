// Instructs Next.js to render this component on the client side (needed for interactivity and dynamic styling)
'use client';

// Import the Next.js Link component for internal navigation
import Link from 'next/link';

// Footer component with navigation links, copyright notice, and responsive styles
export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        padding: '2rem 1rem 1.5rem 1rem',
        marginTop: '4rem',
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderTop: '1px solid rgba(244, 211, 94, 0.2)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        textAlign: 'center',
        color: '#fff',
      }}
    >

      {/* Navigation Links */}
      <nav
        aria-label="Enlaces del sitio"
        style={{
          marginBottom: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2.0rem',
        }}
      >

        {/* Home Link */}
        <Link
          href="/"
          style={{
            color: '#f4d35e',
            textDecoration: 'none',
            fontWeight: 600,
            whiteSpace: 'nowrap', // Prevents line-break in link text
          }}
        >
          Calculadora de Sueño
        </Link>

        {/* Learn Link */}
        <Link
          href="/como-dormir-mejor"
          style={{
            color: '#f4d35e',
            textDecoration: 'none',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          Cómo Dormir Mejor
        </Link>

        {/* Embed Link */}
        <Link
          href="/incluir-calculadora-sueno-en-mi-web"
          style={{
            color: '#f4d35e',
            textDecoration: 'none',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          Añadir Calculadora en tu Web
        </Link>
      </nav>

      {/* Copyright */}
      <small style={{ opacity: 0.8, fontSize: '0.95rem' }}>
        © 2025 Calculadora de Sueño
      </small>

      {/* Responsive Styles for mobile: stack nav links vertically and reduce spacing */}
      <style jsx>{`
        @media (max-width: 600px) {
          nav {
            flex-direction: column;
            align-items: center;
            gap: 0.3rem; /* closer spacing on mobile */
          }
        }
      `}</style>
    </footer>
  );
}
