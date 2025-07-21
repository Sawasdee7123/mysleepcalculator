// Import the main content component for the Contact page
import ContactContent from './ContactContent';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Learn page
export const metadata: Metadata = {
  title: 'Contacta con Nosotros | Calculadora de Sueño',
  description: '¿Tienes preguntas o sugerencias? Ponte en contacto con el equipo de Calculadora de Sueño.',

  openGraph: {
    title: 'Contacta con Nosotros | Calculadora de Sueño',
    description: '¿Tienes preguntas o sugerencias? Ponte en contacto con el equipo de Calculadora de Sueño.',
    url: 'https://calculadoraciclosdesueno.com/contacto',
    images: [
      {
        url: 'https://calculadoraciclosdesueno.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Sueño',
      },
    ],
    siteName: 'Calculadora de Sueño',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contacta con Nosotros | Calculadora de Sueño',
    description: '¿Tienes preguntas o sugerencias? Ponte en contacto con el equipo de Calculadora de Sueño.',
    images: ['https://calculadoraciclosdesueno.com/og-image.png'],
  },

  alternates: {
    canonical: 'https://calculadoraciclosdesueno.com/contacto',
  },
};

// Page component for /contacto, renders the ContactContent component
export default function ContactPage() {
  return <ContactContent />;
}
