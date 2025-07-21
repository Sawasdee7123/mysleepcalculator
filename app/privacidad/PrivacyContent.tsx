'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import ReturnButton from '@/app/components/ReturnButton';

// Structured data (Schema.org) for SEO
const privacyPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Política de Privacidad",
  "url": "https://calculadoraciclosdesueno.com/privacidad",
  "description": "Lee la política de privacidad de Calculadora de Sueño para conocer cómo protegemos tus datos personales y tu información mientras usas nuestra herramienta gratuita.",
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

export default function PrivacyContent() {
  return (
    <Fragment>
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPageSchema) }}
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
          Política de Privacidad
        </h1>

        <p style={paragraphStyle}>
          En <strong>Calculadora de Sueño</strong> respetamos tu privacidad y nos comprometemos a proteger tu información personal.
          Esta política explica cómo recopilamos, usamos y protegemos tus datos cuando visitas y utilizas nuestra herramienta gratuita.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>1. Información que Recopilamos</h2>
        <p style={paragraphStyle}>
          No solicitamos ni almacenamos información personal identificable. Sin embargo, como la mayoría de sitios web, podemos recopilar datos anónimos como tu dirección IP, tipo de navegador, idioma y las páginas que visitas, únicamente para fines estadísticos y de mejora del servicio.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>2. Cookies y Tecnologías Similares</h2>
        <p style={paragraphStyle}>
          Utilizamos cookies propias y de terceros (por ejemplo, Google Analytics, Google AdSense) para analizar el tráfico, mostrar publicidad personalizada y mejorar tu experiencia de usuario.
          Las cookies son pequeños archivos que se almacenan en tu dispositivo y nos permiten reconocerte en futuras visitas. Puedes controlar o eliminar las cookies en cualquier momento a través de la configuración de tu navegador.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>3. Publicidad de Terceros (Google AdSense y Otros)</h2>
        <p style={paragraphStyle}>
          Este sitio web puede mostrar anuncios proporcionados por Google AdSense u otras redes publicitarias.
          Estos proveedores pueden utilizar cookies y tecnologías similares para mostrar anuncios personalizados basados en tus intereses y visitas previas a este y otros sitios web.
          <br /><br />
          Google utiliza la cookie de DART para permitir la publicación de anuncios a nuestros usuarios basados en su visita a nuestro sitio y otros sitios en Internet.
          Puedes obtener más información sobre cómo Google utiliza los datos aquí: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#f4d35e', textDecoration: 'underline' }}>Política de privacidad de Google</a>.
          <br /><br />
          Si prefieres desactivar la publicidad personalizada de Google, puedes hacerlo en: <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" style={{ color: '#f4d35e', textDecoration: 'underline' }}>Configuración de anuncios</a>.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>4. Derechos de los Usuarios (GDPR / Europa)</h2>
        <p style={paragraphStyle}>
          Si resides en la Unión Europea, tienes derecho a acceder, rectificar, eliminar u oponerte al uso de tus datos personales.
          Para ejercer estos derechos, escríbenos a <a href="mailto:info@calculadoraciclosdesueno.com" style={{ color: '#f4d35e', textDecoration: 'underline' }}>info@calculadoraciclosdesueno.com</a>.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>5. Retención de Datos</h2>
        <p style={paragraphStyle}>
          Los datos recogidos de forma anónima (por ejemplo, para análisis estadístico) se conservan sólo durante el tiempo necesario para los fines descritos y no se usan para identificarte personalmente.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>6. Enlaces a Terceros</h2>
        <p style={paragraphStyle}>
          Nuestro sitio puede contener enlaces a páginas externas. No nos responsabilizamos por las prácticas de privacidad o el contenido de dichos sitios. Te recomendamos leer las políticas de privacidad de cada sitio que visites.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>7. Seguridad</h2>
        <p style={paragraphStyle}>
          Implementamos medidas razonables para proteger la información del usuario y prevenir accesos no autorizados.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>8. Privacidad de los Menores</h2>
        <p style={paragraphStyle}>
          Este sitio no está dirigido a menores de 16 años y no recopilamos conscientemente información personal de menores de 16 años. Si crees que un menor nos ha proporcionado datos personales, contáctanos y los eliminaremos de inmediato.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>9. Cambios en la Política</h2>
        <p style={paragraphStyle}>
          Nos reservamos el derecho de actualizar esta política en cualquier momento. Cualquier cambio será publicado en esta página, con fecha de actualización. Última actualización: julio 2025.
        </p>

        <h2 style={{ ...paragraphStyle, fontWeight: 600, marginTop: '1.8rem' }}>10. Contacto</h2>
        <p style={paragraphStyle}>
          Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través del correo electrónico: <a href="mailto:info@calculadoraciclosdesueno.com" style={{ color: '#f4d35e', textDecoration: 'underline' }}>info@calculadoraciclosdesueno.com</a>
        </p>

        <ReturnButton />
      </main>
    </Fragment>
  );
}
