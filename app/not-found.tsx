// Next.js Link for navigation back to the homepage
import Link from 'next/link';
// Type definition for static page metadata
import { Metadata } from 'next';

// Static metadata for SEO and browser tab
export const metadata: Metadata = {
  title: 'Página no encontrada - Calculadora de Sueño',
  description: 'La página que buscas no existe. Vuelve a la página principal de la Calculadora de Sueño.',
};

/**
 * NotFoundPage component
 * - Custom 404 page for missing routes
 * - Shows friendly message and "return home" button
 * - Injects JSON-LD structured data for SEO
 */
export default function NotFoundPage() {
  return (
    <main
      aria-label="Página no encontrada"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#0a1128',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Página no encontrada",
            "description": "Página 404 personalizada de Calculadora de Sueño",
            "url": "https://calculadoraciclosdesueno.com/404",
            "inLanguage": "es",
          }),
        }}
      />

      {/* Big 404 headline */}
      <h1>404</h1>
      {/* User-friendly message */}
      <p>
        Oops... No hemos podido encontrar la página que buscas.
      </p>
      {/* Button to go back to homepage */}
      <Link
        href="/"
        aria-label="Volver a la página principal"
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
    </main>
  );
}
