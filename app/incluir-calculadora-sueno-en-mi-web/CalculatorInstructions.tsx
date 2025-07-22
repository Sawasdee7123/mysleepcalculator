// Instructs Next.js to render this component on the client side (enables interactivity)
'use client';

// Import React hooks for component state and grouping elements without extra DOM nodes
import { useRef, useState, Fragment } from 'react';

// SEO: HowTo structured data (shows step-by-step guide in Google results)
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo añadir la Calculadora de Sueño a tu página web",
  "description": "Guía paso a paso para incluir la Calculadora de Sueño gratis en cualquier web o blog.",
  "image": "https://calculadoraciclosdesueno.com/og-image.png",
  "totalTime": "PT2M",
  "supply": [
    { "@type": "HowToSupply", "name": "Código HTML del widget" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Editor de páginas web" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Copia el código del widget",
      "text": "Copia el código HTML proporcionado en esta página."
    },
    {
      "@type": "HowToStep",
      "name": "Pega el código en tu web",
      "text": "Inserta el código copiado en la sección deseada de tu sitio web o blog."
    },
    {
      "@type": "HowToStep",
      "name": "Guarda y revisa",
      "text": "Guarda los cambios y verifica que la calculadora se muestra correctamente en móvil y escritorio."
    },
    {
      "@type": "HowToStep",
      "name": "Contacta si tienes dudas",
      "text": "Si tienes dudas, contacta en info@calculadoraciclosdesueno.com."
    }
  ]
};

// SEO: FAQ structured data (for enhanced Google rich results)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿La calculadora es gratis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, puedes añadirla libremente a tu web y ofrecerla a tus lectores."
      }
    },
    {
      "@type": "Question",
      "name": "¿Funciona en móviles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el widget es completamente adaptable y se muestra bien en cualquier pantalla."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo asegurarme de que es segura para mis usuarios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La calculadora no recopila datos personales ni requiere registro. Es solo una herramienta de ayuda, rápida y segura para el usuario."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué tipo de webs puedo incluir la calculadora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En cualquier web, blog, portal educativo, sitio de salud o bienestar."
      }
    }
  ]
};

/**
 * CalculatorInstructions component
 * - Renders step-by-step guide and FAQ for embedding the Sleep Calculator widget
 * - Provides "copy code" button for easy widget integration
 * - Injects Schema.org HowTo and FAQ structured data for SEO
 * - Handles clipboard interaction and fallback for older browsers
 */
export default function CalculatorInstructions() {
  // The HTML code for embedding the calculator widget (shown and copied by user)
  const codeString = `<div style="max-width:410px; width:100%; background:#0c0c0c; border-radius:28px; margin:0 auto;">
  <div style="position:relative; width:100%; padding-top:136.5%;">
    <iframe
      src="https://calculadoraciclosdesueno.com/widget"
      title="Calculadora de Sueño"
      aria-label="Calculadora de Sueño"
      loading="lazy"
      style="position:absolute; top:0; left:0; width:100%; height:100%; border-radius:28px; background:#0c0c0c;"
      allowfullscreen
    ></iframe>
  </div>
</div>
<p style="text-align:center; font-size:0.98rem; margin-top:0.6em;">
  <span style="color:#454553;">Calculadora por</span>
  <a href="https://calculadoraciclosdesueno.com/" target="_blank" rel="noopener noreferrer"
     style="color:#3578e5; text-decoration:underline; font-weight:500;">
    calculadoraciclosdesueno.com
  </a>
</p>`;

  // State for showing the "Copied!" popup message
  const [copied, setCopied] = useState(false);

  // Handles copying the code to clipboard, with fallback if API is not supported
  const handleCopy = async () => {
    if (navigator?.clipboard) {
      try {
        await navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch (error) {
        window.prompt('Copia manualmente el código:', codeString);
      }
    } else {
      window.prompt('Copia manualmente el código:', codeString);
    }
  };

  return (
    <Fragment>

      {/* Inject HowTo Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Inject FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="main-style" aria-label="Instrucciones para añadir la Calculadora de Sueño a cualquir página web">

        {/* Title and Intro */}
        <h1>
          Cómo añadir la Calculadora de Sueño a tu página web
        </h1>

        <p>
          ¿Quieres incluir nuestra Calculadora de Sueño en tu sitio web, blog o página de salud? Es muy fácil: sigue estos pasos para añadir la calculadora interactiva, totalmente gratis y sin registros.
        </p>

        {/* Quick Instructions Heading */}
        <h2>
          Instrucciones rápidas
        </h2>

        {/* Step 1: Copy the code */}
        <ol>
          <li>
            Copia el siguiente código y pégalo donde quieras mostrar la calculadora en tu web.
          </li>
        </ol>

        {/* --- COPY BUTTON above CODE BLOCK --- */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '-2.7rem', marginRight: '0.6rem', zIndex: 1, position: 'relative' }}>
          <button
            onClick={handleCopy}
            aria-label="Copiar el código HTML para insertar el widget"
            style={{
              background: '#f4d35e',
              color: '#181a30',
              border: 'none',
              borderRadius: '8px',
              padding: '0.55em 1.25em',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '1.03rem',
              boxShadow: copied ? '0 0 8px #f4d35e' : undefined,
              transition: 'background 0.18s'
            }}
          >
            {copied ? '¡Copiado!' : 'Copiar código'}
          </button>
        </div>

        {/* Code block with widget embed code */}
        <div style={{
          background: '#23243a',
          color: '#f4d35e',
          borderRadius: '18px',
          padding: '2.2rem 2.1rem 1.4rem 2.1rem',
          margin: '1.5rem 0 1.4rem 0',
          fontSize: '1rem',
          fontFamily: 'Menlo, monospace',
          boxShadow: '0 2px 18px 0 #0005',
          overflowX: 'auto',
          position: 'relative',
        }}>
          <pre
            style={{
              margin: 0,
              fontSize: '1.06rem',
              lineHeight: 1.55,
              background: 'none',
              color: '#f4d35e',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {codeString}
          </pre>
        </div>

        {/* Steps 2-4: Paste, check, contact */}
        <ol start={2}>
          <li>
            Pega el código en tu página, post, sección lateral o donde desees mostrar la calculadora.
            Si usas WordPress, Blogger u otra plataforma, utiliza un bloque de tipo HTML personalizado o “Custom HTML” para pegar el código.
          </li>
          <li>
            Guarda los cambios y revisa que la calculadora se muestre correctamente, tanto en móvil como en ordenador.
          </li>
          <li>
            Si tienes dudas o necesitas ayuda personalizada, contáctanos en:{' '}
            <a
              href="mailto:info@calculadoraciclosdesueno.com"
              className="email-link"
              aria-label="Enviar correo a info@calculadoraciclosdesueno.com"
            >
              info@calculadoraciclosdesueno.com
            </a>
          </li>
        </ol>

        {/* FAQ Section */}
        <h2>
          Preguntas Frecuentes (FAQ)
        </h2>

        {/* Each FAQ as a details/summary for easy mobile reading */}
        <details className="faq-details">
          <summary className="faq-summary">¿La calculadora es gratis?</summary>
          <p>
            Sí, puedes añadirla libremente a tu web y ofrecerla a tus lectores.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-summary">¿Funciona en móviles?</summary>
          <p>
            Sí, el widget es completamente adaptable y se muestra bien en cualquier pantalla.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-summary">¿Cómo puedo asegurarme de que es segura para mis usuarios?</summary>
          <p>
            La calculadora no recopila datos personales ni requiere registro. Es solo una herramienta de ayuda, rápida y segura para el usuario.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-summary">¿En qué tipo de webs puedo incluir la calculadora?</summary>
          <p>
            En cualquier web, blog, portal educativo, sitio de salud o bienestar.
          </p>
        </details>

        {/* Final note */}
        <div className="page-note">
          ¿Tienes una comunidad, blog o página web de salud y bienestar? Añadir la Calculadora de Sueño es una forma sencilla de ofrecer más valor a tus usuarios. ¡Sin registros ni pagos!
        </div>
      </main>
    </Fragment>
  );
}
