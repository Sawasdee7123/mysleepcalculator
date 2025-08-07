// Import the main content component for the Learn page
import AboutContent from './AboutContent';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Learn page
export const metadata: Metadata = {
  title: 'Sobre Nosotros | Calculadora de Sueño',
  description: 'Conoce al equipo detrás de la Calculadora de Sueño. Descubre por qué creamos esta herramienta gratuita y cómo puede ayudarte a mejorar tu descanso.',

  openGraph: {
    title: 'Sobre Nosotros | Calculadora de Sueño',
    description: 'Conoce al equipo detrás de la Calculadora de Sueño. Descubre por qué creamos esta herramienta gratuita y cómo puede ayudarte a mejorar tu descanso.',
    url: 'https://calculadoraciclosdesueno.com/about',
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
    title: 'Sobre Nosotros | Calculadora de Sueño',
    description: 'Conoce al equipo detrás de la Calculadora de Sueño. Descubre por qué creamos esta herramienta gratuita y cómo puede ayudarte a mejorar tu descanso.',
    images: ['https://calculadoraciclosdesueno.com/og-image.png'],
  },

  alternates: {
    canonical: 'https://calculadoraciclosdesueno.com/about',
    languages: {
      es: 'https://calculadoraciclosdesueno.com/about',
      en: 'https://mysleepcalculator.net/about',
    },
  },
};

// Page component for /about, renders the AboutContent component
export default function AboutPage() {
  return <AboutContent />;
}
