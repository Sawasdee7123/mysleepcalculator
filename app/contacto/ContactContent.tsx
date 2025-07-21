// Instructs Next.js to render this component on the client side.
'use client';

// Import Next.js Link for navigation and Fragment for grouping multiple elements.
import Link from 'next/link';
import { Fragment } from 'react';

// Import the ReturnButton
import ReturnButton from '@/app/components/ReturnButton';

// Structured data for SEO: FAQPage schema (Schema.org)
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto",
  "url": "https://calculadoraciclosdesueno.com/contacto",
  "about": "Página de contacto del proyecto Calculadora de Sueño",
  "mainEntity": {
    "@type": "Organization",
    "name": "Calculadora de Sueño",
    "url": "https://calculadoraciclosdesueno.com/",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@calculadoraciclosdesueno.com",
      "contactType": "Customer Support",
      "availableLanguage": ["es", "en"]
    }
  }
};

/**
 * Main content for the Contact page.
 * - Provides a way for users to reach out via email.
 * - Displays contact instructions and reassurance.
 * - Injects Schema.org ContactPage structured data.
 * - Matches visual style and layout of all static pages.
 */
export default function ContactContent() {
  return (
    <Fragment>

      {/* Inject Article schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', color: '#f9f9f9' }}>
        <h1 style={headingStyle}>Ponte en Contacto</h1>

        <p style={paragraphStyle}>
          ¿Tienes dudas, comentarios o sugerencias? Estaremos encantados de escucharte.
        </p>

        <p style={paragraphStyle}>
          Puedes escribirnos directamente a:{' '}
          <a
            href="mailto:info@calculadoraciclosdesueno.com"
            style={emailStyle}
          >
            info@calculadoraciclosdesueno.com
          </a>
        </p>

        <p style={paragraphStyle}>
          Normalmente respondemos en menos de 48 horas.
        </p>

        <ReturnButton />
      </main>
    </Fragment>
  );
}

// Styles
const headingStyle = {
  fontSize: '2.4rem',
  marginBottom: '1.2rem',
  color: '#f4d35e',
  textShadow: '0 1px 6px rgba(244, 211, 94, 0.25)',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: 1.6,
  marginTop: '0.8rem',
};

const emailStyle = {
  color: '#ffe082',
  fontWeight: 600,
  textDecoration: 'underline',
};
