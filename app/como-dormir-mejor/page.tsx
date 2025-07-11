// Import the main content component for the Learn page
import LearnContent from './LearnContent';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, and canonical URL for the Learn page
export const metadata: Metadata = {
  title: 'Cómo Dormir Mejor: Consejos, Ciclos y Guía Completa | Calculadora de Sueño',
  description: 'Descubre cómo mejorar tu descanso con esta guía completa: consejos, higiene del sueño, ciclos de sueño y recomendaciones por edad.',
  alternates: {
    canonical: 'https://calculadoraciclosdesueno.com/como-dormir-mejor',
  },
};

// Page component for /como-dormir-mejor, renders the LearnContent component
export default function LearnPage() {
  return <LearnContent />;
}
