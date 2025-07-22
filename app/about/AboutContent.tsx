// Instructs Next.js to render this component on the client side.
'use client';

// Import Next.js Link for navigation and Fragment for grouping multiple elements.
import Link from 'next/link';
import { Fragment } from 'react';

// Import the ReturnButton
import ReturnButton from '@/app/components/ReturnButton';

// Structured data (Schema.org) for SEO
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Sobre Nosotros",
  "url": "https://calculadoraciclosdesueno.com/about",
  "description": "Conoce al equipo detrás de la Calculadora de Sueño. Descubre por qué creamos esta herramienta gratuita y cómo puede ayudarte a mejorar tu descanso.",
  "mainEntity": {
    "@type": "WebSite",
    "name": "Calculadora de Sueño",
    "url": "https://calculadoraciclosdesueno.com/",
    "inLanguage": "es",
    "creator": {
      "@type": "Person",
      "name": "Equipo de Calculadora de Sueño"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calculadora de Sueño",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calculadoraciclosdesueno.com/logo.png"
      }
    }
  }
};

/**
 * Main content for the About page.
 * - Explains the origin and purpose of the Sleep Calculator tool.
 * - Highlights its benefits and creator's motivation.
 * - Injects structured data using Schema.org AboutPage + Person.
 * - Matches layout and style with other content pages.
 * - Includes a ReturnButton linking back to the home calculator.
 */
export default function AboutContent() {
  return (
    <Fragment>

      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <main className="main-style" aria-label="Contenido Sobre Nosotros">
        <h1>
          Sobre Nosotros
        </h1>

        <p>
          La <strong>Calculadora de Sueño</strong> fue creada con un propósito simple:
          ayudarte a despertar sintiéndote renovado. Muchas veces, no es cuestión de dormir más horas,
          sino de despertar en el momento adecuado del ciclo de sueño.
        </p>

        <p>
          Esta herramienta es para cualquier persona que quiera mejorar su descanso, desde estudiantes hasta profesionales,
          padres o simplemente quienes desean optimizar su rutina de sueño de forma fácil y gratuita.
        </p>

        <p>
          Este proyecto fue desarrollado por un emprendedor independiente apasionado por el bienestar y la tecnología.
          Nuestra misión es ofrecer herramientas prácticas, sin coste, que realmente puedan mejorar tu día a día.
        </p>

        <p>
          La calculadora se basa en datos promedio del ciclo de sueño humano (~90 minutos por ciclo).
          Aunque cada persona es diferente, esta herramienta ofrece una excelente base para planificar tus horarios de sueño.
        </p>

        <p>
          Pruébala y empieza a transformar tu descanso desde hoy.{' '}
        </p>

        <ReturnButton />

      </main>
    </Fragment>
  );
}

