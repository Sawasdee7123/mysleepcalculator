'use client';

import { Fragment } from 'react';
import ReturnButton from '@/app/components/ReturnButton';

// Structured data (Schema.org) for SEO
const termsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Términos y Condiciones",
  "url": "https://calculadoraciclosdesueno.com/terminos",
  "description": "Lee los términos y condiciones de uso de la Calculadora de Sueño. Conoce tus derechos, responsabilidades y las condiciones para utilizar nuestra herramienta gratuita.",
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

const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: 1.6,
  marginTop: '0.8rem',
};

export default function TermsContent() {
  return (
    <Fragment>
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsPageSchema) }}
      />

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', color: '#f9f9f9' }}>
        <h1
          style={{
            fontSize: '2.4rem',
            marginBottom: '1.2rem',
            color: '#f4d35e',
            textShadow: '0 1px 6px rgba(244, 211, 94, 0.25)',
          }}
        >
          Términos y Condiciones
        </h1>

        <p style={paragraphStyle}>
          Bienvenido a <strong>Calculadora de Sueño</strong>. Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones de uso. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestro sitio.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>1. Uso del Sitio</h2>
        <p style={paragraphStyle}>
          El contenido de este sitio web es únicamente informativo y de carácter general. La herramienta está destinada a ayudar a los usuarios a estimar horarios de sueño óptimos, pero no sustituye el consejo médico profesional.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>2. Propiedad Intelectual</h2>
        <p style={paragraphStyle}>
          Todos los derechos de propiedad intelectual del contenido, textos, gráficos, logotipos y software pertenecen a Calculadora de Sueño o a sus licenciantes. Queda prohibida la reproducción, distribución o modificación sin permiso expreso.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>3. Limitación de Responsabilidad</h2>
        <p style={paragraphStyle}>
          Calculadora de Sueño no se hace responsable por decisiones tomadas por los usuarios basadas en la información proporcionada en este sitio. El uso de la herramienta y la información es bajo responsabilidad exclusiva del usuario.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>4. Publicidad y Enlaces Externos</h2>
        <p style={paragraphStyle}>
          Este sitio puede mostrar anuncios de terceros (como Google AdSense) y contener enlaces a sitios externos. Calculadora de Sueño no controla ni se responsabiliza por el contenido o prácticas de privacidad de dichos sitios o servicios.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>5. Modificaciones de los Términos</h2>
        <p style={paragraphStyle}>
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán publicados en esta página y se considerarán aceptados por el uso continuado del sitio.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>6. Legislación Aplicable</h2>
        <p style={paragraphStyle}>
          Estos términos se rigen por la legislación vigente en España. Cualquier disputa que surja en relación con el sitio web será resuelta ante los tribunales competentes de España.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>7. Contacto</h2>
        <p style={paragraphStyle}>
          Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos en: <a href="mailto:info@calculadoraciclosdesueno.com" style={{ color: '#f4d35e', textDecoration: 'underline' }}>info@calculadoraciclosdesueno.com</a>
        </p>

        <ReturnButton />
      </main>
    </Fragment>
  );
}
