// Import the WidgetClient component (the actual calculator widget UI)
import WidgetClient from './WidgetClient';

// Static metadata for SEO and search engine control (prevents indexing, sets canonical, etc.)
export const metadata = {
  title: 'Calculadora de Sueño - Widget',
  description: 'Calculadora embebible para ayudarte a planificar tus ciclos de sueño.',
  robots: {
    index: false,   // Don't index this widget page
    follow: true,   // Allow following links
    nocache: true,  // Prevent caching
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,       // Don't index images
      'max-video-preview': -1,  // No video preview
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://calculadoraciclosdesueno.com/', // Canonical points to main site
  },
};

// Page component for the embeddable widget (centers the WidgetClient on the page)
export default function WidgetPage() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: '2rem 1rem', // ✅ Horizontal spacing on mobile
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '390px', // ✅ Prevent overflow on small screens
        }}
      >
        <WidgetClient />
      </div>
    </div>
  );
}
