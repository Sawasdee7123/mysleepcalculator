// app/about/page.tsx

import AboutContent from './AboutContent';
import type { Metadata } from 'next';

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
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
