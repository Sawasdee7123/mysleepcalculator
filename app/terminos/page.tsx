// Import the main content component for the Terms & Conditions page
import TermsContent from './TermsContent';
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Terms page
export const metadata: Metadata = {
  title: 'Términos y Condiciones | Calculadora de Sueño',
  description: 'Lee los términos y condiciones de uso de la Calculadora de Sueño. Conoce tus derechos, responsabilidades y las condiciones para utilizar nuestra herramienta gratuita.',

  openGraph: {
    title: 'Términos y Condiciones | Calculadora de Sueño',
    description: 'Lee los términos y condiciones de uso de la Calculadora de Sueño. Conoce tus derechos, responsabilidades y las condiciones para utilizar nuestra herramienta gratuita.',
    url: 'https://calculadoraciclosdesueno.com/terminos',
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
    title: 'Términos y Condiciones | Calculadora de Sueño',
    description: 'Lee los términos y condiciones de uso de la Calculadora de Sueño. Conoce tus derechos, responsabilidades y las condiciones para utilizar nuestra herramienta gratuita.',
    images: ['https://calculadoraciclosdesueno.com/og-image.png'],
  },

  alternates: {
    canonical: 'https://calculadoraciclosdesueno.com/terminos',
    languages: {
      es: 'https://calculadoraciclosdesueno.com/terminos',
      en: 'https://mysleepcalculator.net/terms-and-conditions',
    },
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
