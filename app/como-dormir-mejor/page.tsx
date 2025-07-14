// Import the main content component for the Learn page
import LearnContent from './LearnContent';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Learn page
export const metadata: Metadata = {
  title: 'Cómo Dormir Mejor: Consejos, Ciclos y Guía Completa | Calculadora de Sueño',
  description: 'Descubre cómo mejorar tu descanso con esta guía completa: consejos, higiene del sueño, ciclos de sueño y recomendaciones por edad.',

  openGraph: {
    title: 'Cómo Dormir Mejor: Consejos, Ciclos y Guía Completa | Calculadora de Sueño',
    description: 'Descubre cómo mejorar tu descanso con esta guía completa: consejos, higiene del sueño, ciclos de sueño y recomendaciones por edad.',
    url: 'https://calculadoraciclosdesueno.com/como-dormir-mejor',
    images: [
      {
        url: 'https://calculadoraciclosdesueno.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Sueño',
      },
    ],
    siteName: 'Calculadora de Sueño',
    type: 'article', // You can also use 'website' but 'article' is often more accurate for guides
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cómo Dormir Mejor: Consejos, Ciclos y Guía Completa | Calculadora de Sueño',
    description: 'Descubre cómo mejorar tu descanso con esta guía completa: consejos, higiene del sueño, ciclos de sueño y recomendaciones por edad.',
    images: ['https://calculadoraciclosdesueno.com/og-image.png'],
  },

  alternates: {
    canonical: 'https://calculadoraciclosdesueno.com/como-dormir-mejor',
  },
};

// Page component for /como-dormir-mejor, renders the LearnContent component
export default function LearnPage() {
  return <LearnContent />;
}
