// Instructs Next.js to render this component on the client side.
'use client';

// Import Next.js Link for navigation and Fragment for grouping multiple elements.
import Link from 'next/link';
import { Fragment } from 'react';

// Structured data for SEO: FAQPage schema (Schema.org)
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto",
  "url": "https://calculadoraciclosdesueno.com/contacto",
  "about": "Página de contacto del proyecto Calculadora de Sueño",
  "inLanguage": "es",
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

      <main className="main-style" aria-label="Página de contacto de la Calculadora de Sueño">
        <h1>Ponte en Contacto</h1>

        <p>
          ¿Tienes dudas, comentarios o sugerencias? Estaremos encantados de escucharte.
        </p>

        <p>
          Puedes escribirnos directamente a:{' '}
          <a
            href="mailto:info@calculadoraciclosdesueno.com"
            className="email-link"
            aria-label="Enviar correo a info@calculadoraciclosdesueno.com"
          >
            info@calculadoraciclosdesueno.com
          </a>
        </p>

        <p>
          Normalmente respondemos en menos de 48 horas.
        </p>
      </main>

    </Fragment>
  );
}
