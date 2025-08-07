// Import the main content component for the Privacy Policy page
import PrivacyContent from './PrivacyContent';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Privacy Policy page
export const metadata: Metadata = {
  title: 'Política de Privacidad | Calculadora de Sueño',
  description: 'Lee la política de privacidad de Calculadora de Sueño para conocer cómo protegemos tus datos personales y tu información mientras usas nuestra herramienta gratuita.',

  openGraph: {
    title: 'Política de Privacidad | Calculadora de Sueño',
    description: 'Lee la política de privacidad de Calculadora de Sueño para conocer cómo protegemos tus datos personales y tu información mientras usas nuestra herramienta gratuita.',
    url: 'https://calculadoraciclosdesueno.com/privacidad',
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
    title: 'Política de Privacidad | Calculadora de Sueño',
    description: 'Lee la política de privacidad de Calculadora de Sueño para conocer cómo protegemos tus datos personales y tu información mientras usas nuestra herramienta gratuita.',
    images: ['https://calculadoraciclosdesueno.com/og-image.png'],
  },

  alternates: {
    canonical: 'https://calculadoraciclosdesueno.com/privacidad',
    languages: {
      es: 'https://calculadoraciclosdesueno.com/privacidad',
      en: 'https://mysleepcalculator.net/privacy-policy',
    },
  },
};

// Page component for /privacy, renders the PrivacyContent component
export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
