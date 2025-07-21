// Instructs Next.js to render this component on the client side.
'use client';

// Import Next.js Link for navigation and Fragment for grouping multiple elements.
import Link from 'next/link';
import { Fragment } from 'react';

// Import the ReturnButton
import ReturnButton from '@/app/components/ReturnButton';

// Structured data for SEO: Article schema (Schema.org) describing the page content.
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Aprende a Dormir Mejor, Despierta Renovado",
  "description": "Descubre consejos, beneficios y claves científicas para mejorar tu descanso. Aprende cómo funcionan los ciclos de sueño, cuántas horas necesitas según tu edad y cómo usar la calculadora de sueño.",
  "author": {
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
  },
  "datePublished": "2024-07-08",
  "image": "https://calculadoraciclosdesueno.com/og-image.png",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://calculadoraciclosdesueno.com/como-dormir-mejor"
  }
};

// Structured data for SEO: FAQPage schema (Schema.org) containing common sleep questions and answers.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuál es la mejor hora para acostarse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre las 22:00h y las 23:30h. Esto permite que tu sueño profundo coincida con las horas de mayor oscuridad y se alinee con tu reloj biológico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si me despierto en medio de un ciclo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes sentirte aturdido, irritable o desorientado. Esto se debe a que interrumpiste una fase profunda del sueño, como el sueño NREM o REM."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dormir más siempre es mejor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No necesariamente. Dormir más de 9 horas puede ser contraproducente si no va acompañado de buena calidad del sueño. La regularidad también es clave."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tardo en dormirme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En promedio, una persona tarda entre 10 y 20 minutos. Si tardas mucho más o te duermes de inmediato, podría indicar falta de sueño acumulado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo saber cuántas horas debo dormir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Haz la prueba durante unas vacaciones: acuéstate a la misma hora todos los días y despiértate sin alarma. El promedio de horas que duermas será tu necesidad natural."
      }
    }
  ]
};

/**
 * Main content for the Learn page.
 * - Injects Article and FAQ structured data for SEO.
 * - Displays educational content about sleep, cycles, and tips.
 * - Uses reusable ReturnButton for navigation.
 */
export default function LearnContent() {
  return (
    <Fragment>

      {/* Inject Article schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Inject FAQ schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
          Aprende a Dormir Mejor, Despierta Renovado
        </h1>

        <p style={paragraphStyle}>
          ¿Cansado de despertar sin energía aunque duermas muchas horas? La clave no está solo en cuánto duermes,
          sino en cuándo te despiertas. Nuestra calculadora de ciclos de sueño te ayuda a identificar el momento ideal
          para acostarte o despertarte, asegurando un descanso profundo y reparador.
        </p>

        <ReturnButton />

        <h2 style={sectionStyle}>¿Cómo Funciona la Calculadora de Sueño?</h2>
        <p style={paragraphStyle}>
          Puedes usar la calculadora de dos maneras:
        </p>
        <ul style={listStyle}>
          <li><strong>¿Sabes a qué hora debes despertarte?</strong> Te mostramos a qué hora acostarte para completar 5 o 6 ciclos.</li>
          <li><strong>¿Vas a dormir ahora?</strong> Calculamos las mejores horas para despertarte sin interrumpir un ciclo.</li>
        </ul>
        <p style={paragraphStyle}>
          Recuerda que la mayoría de las personas tardan unos 15 minutos en quedarse dormidas. ¡Tenlo en cuenta!
        </p>

        <h2 style={sectionStyle}>Beneficios de un Sueño de Calidad</h2>
        <ul style={listStyle}>
          <li>Mejora la concentración, la memoria y la productividad.</li>
          <li>Reduce el riesgo de enfermedades cardíacas y accidentes cerebrovasculares.</li>
          <li>Fortalece el sistema inmunológico.</li>
          <li>Regula las hormonas del apetito y ayuda a controlar el peso.</li>
          <li>Reduce la ansiedad, el estrés y la depresión.</li>
          <li>Mejora el rendimiento físico y la recuperación muscular.</li>
          <li>Disminuye el riesgo de enfermedades como diabetes tipo 2 e hipertensión.</li>
        </ul>

        <ReturnButton />

        <h2 style={sectionStyle}>¿Qué son los Ciclos de Sueño?</h2>
        <p style={paragraphStyle}>
          Mientras duermes, tu cuerpo atraviesa ciclos de aproximadamente 90 minutos, que se repiten de 4 a 6 veces por noche. Cada ciclo incluye distintas fases:
        </p>
        <ul style={listStyle}>
          <li><strong>Fase 1 (NREM):</strong> Transición breve entre la vigilia y el sueño.</li>
          <li><strong>Fase 2 (NREM):</strong> Sueño ligero; disminuyen el ritmo cardíaco y la temperatura corporal.</li>
          <li><strong>Fase 3 (NREM):</strong> Sueño profundo y reparador. Se libera la hormona del crecimiento.</li>
          <li><strong>Fase REM:</strong> Alta actividad cerebral. Aquí ocurren los sueños más vívidos y se consolida la memoria.</li>
        </ul>

        <h2 style={sectionStyle}>¿Cuántos Ciclos Necesitamos Dormir?</h2>
        <p style={paragraphStyle}>
          Lo ideal es dormir entre 5 y 6 ciclos completos cada noche, lo que equivale a unas 7,5 a 9 horas de sueño. Dormir menos o interrumpir un ciclo puede hacerte sentir más cansado al despertar.
        </p>

        <h2 style={sectionStyle}>¿Cuántas Horas de Sueño Necesito Según Mi Edad?</h2>
        <ul style={listStyle}>
          <li><strong>0–3 meses:</strong> 14–17 horas</li>
          <li><strong>4–11 meses:</strong> 12–15 horas</li>
          <li><strong>1–2 años:</strong> 11–14 horas</li>
          <li><strong>3–5 años:</strong> 10–13 horas</li>
          <li><strong>6–13 años:</strong> 9–11 horas</li>
          <li><strong>14–17 años:</strong> 8–10 horas</li>
          <li><strong>18–64 años:</strong> 7–9 horas</li>
          <li><strong>+65 años:</strong> 7–8 horas</li>
        </ul>

        <h2 style={sectionStyle}>Consejos para Mejorar tu Higiene del Sueño</h2>
        <ul style={listStyle}>
          <li>Establece un horario regular para acostarte y despertarte, incluso fines de semana.</li>
          <li>Crea una rutina relajante: lee, medita o date un baño tibio antes de dormir.</li>
          <li>Evita pantallas al menos 30-60 minutos antes de acostarte.</li>
          <li>Mantén la habitación oscura, silenciosa y a una temperatura ideal (18-21°C).</li>
          <li>Invierte en un buen colchón y almohadas adecuadas a tu postura.</li>
          <li>Evita cafeína, alcohol y comidas pesadas antes de dormir.</li>
          <li>Realiza ejercicio diario, pero evita actividades intensas por la noche.</li>
          <li>
            Usa herramientas como nuestra{' '}
            <Link href="/" style={{ color: '#f4d35e', fontWeight: 600 }}>
              Calculadora de Sueño
            </Link>{' '}
            para planificar mejor tu descanso.
          </li>
        </ul>

        <h2 style={sectionStyle}>Preguntas Frecuentes (FAQ)</h2>

        <details style={{ marginTop: '1rem' }}>
          <summary style={summaryStyle}>¿Cuál es la mejor hora para acostarse?</summary>
          <p style={paragraphStyle}>
            Entre las 22:00h y las 23:30h. Esto permite que tu sueño profundo coincida con las horas de mayor oscuridad y se alinee con tu reloj biológico.
          </p>
        </details>

        <details style={{ marginTop: '1rem' }}>
          <summary style={summaryStyle}>¿Qué pasa si me despierto en medio de un ciclo?</summary>
          <p style={paragraphStyle}>
            Puedes sentirte aturdido, irritable o desorientado. Esto se debe a que interrumpiste una fase profunda del sueño, como el sueño NREM o REM.
          </p>
        </details>

        <details style={{ marginTop: '1rem' }}>
          <summary style={summaryStyle}>¿Dormir más siempre es mejor?</summary>
          <p style={paragraphStyle}>
            No necesariamente. Dormir más de 9 horas puede ser contraproducente si no va acompañado de buena calidad del sueño. La regularidad también es clave.
          </p>
        </details>

        <details style={{ marginTop: '1rem' }}>
          <summary style={summaryStyle}>¿Cuánto tardo en dormirme?</summary>
          <p style={paragraphStyle}>
            En promedio, una persona tarda entre 10 y 20 minutos. Si tardas mucho más o te duermes de inmediato, podría indicar falta de sueño acumulado.
          </p>
        </details>

        <details style={{ marginTop: '1rem' }}>
          <summary style={summaryStyle}>¿Cómo saber cuántas horas debo dormir?</summary>
          <p style={paragraphStyle}>
            Haz la prueba durante unas vacaciones: acuéstate a la misma hora todos los días y despiértate sin alarma. El promedio de horas que duermas será tu necesidad natural.
          </p>
        </details>

        <ReturnButton />
      </main>
    </Fragment>
  );
}

// Section heading style
const sectionStyle = {
  marginTop: '2rem',
  fontSize: '1.9rem',
  color: '#ffe082',
  textShadow: '0 1px 4px rgba(255, 224, 130, 0.2)',
};

// Paragraph style
const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: 1.6,
  marginTop: '0.8rem',
};

// List style for bullet points
const listStyle = {
  marginLeft: '1.5rem',
  fontSize: '1.1rem',
  lineHeight: 1.6,
};

// Summary style for FAQ dropdowns
const summaryStyle = {
  cursor: 'pointer',
  color: '#f4d35e',
  fontSize: '1.3rem',
  marginBottom: '0.5rem',
};
