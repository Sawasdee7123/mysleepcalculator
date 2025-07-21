// Import global CSS (applies to the whole app)
import './styles/globals.css';
// Import Google Fonts utilities from Next.js (for consistent typography)
import { Inter, Playfair_Display } from 'next/font/google';
// Import TypeScript type for page metadata (for type checking)
import type { Metadata } from 'next';
// Import Next.js Script component (to inject JSON-LD and any custom scripts)
import Script from 'next/script';
// Main app-level layout wrappers
import AppBody from './AppBody';
import Header from './components/Header';
import LayoutShell from './components/LayoutShell';

// Configure Inter font for all Latin characters and assign CSS variable
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Configure Playfair Display font for site title/headings and assign CSS variable
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700'],
});

// Static metadata for SEO and browser tab
export const metadata: Metadata = {
  title: 'Calculadora de Sueño | Descubre tu Hora Ideal para Dormir y Despertar',
  description: 'Usa nuestra Calculadora de Ciclos de Sueño para saber a qué hora dormir y despertar. Mejora tu descanso y bienestar con horarios de sueño personalizados.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  openGraph: {
    // Open Graph data for social link previews
    title: 'Calculadora de Sueño | Descubre tu Hora Ideal para Dormir y Despertar',
    description: 'Usa nuestra Calculadora de Ciclos de Sueño para saber a qué hora dormir y despertar. Mejora tu descanso y bienestar con horarios de sueño personalizados.',
    url: 'https://calculadoraciclosdesueno.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Sueño',
      },
    ],
    siteName: 'Calculadora de Sueño',
    type: 'website',
  },

  twitter: {
    // Twitter Card meta for Twitter link previews
    card: 'summary_large_image',
    title: 'Calculadora de Sueño | Descubre tu Hora Ideal para Dormir y Despertar',
    description: 'Usa nuestra Calculadora de Ciclos de Sueño para saber a qué hora dormir y despertar. Mejora tu descanso y bienestar con horarios de sueño personalizados.',
    images: ['/og-image.png'],
  },

  alternates: {
    canonical: 'https://calculadoraciclosdesueno.com/',
  },
};

/**
 * RootLayout component
 * - The main global layout for all pages.
 * - Sets up global HTML/head, fonts, schema.org data, background, and main layout structure.
 * - Wraps all content in AppBody and LayoutShell for consistent layout and UI.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Favicon link */}
        <link rel="icon" href="/favicon.ico" />

        {/* Schema.org structured data for SEO */}
        <Script id="jsonld-webpage" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Calculadora de Sueño",
            "url": "https://calculadoraciclosdesueno.com",
            "description": "Usa nuestra Calculadora de Ciclos de Sueño para saber a qué hora dormir y despertar.",
            "image": "https://calculadoraciclosdesueno.com/og-image.png",
            "inLanguage": "es"
          })}
        </Script>

        <Script id="jsonld-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Calculadora de Sueño",
            "url": "https://calculadoraciclosdesueno.com",
            "logo": "https://calculadoraciclosdesueno.com/logo.png"
          })}
        </Script>

      </head>

      <body
        className={`${inter.variable} ${playfair.variable}`}
        style={{
          backgroundColor: '#0a1128',
          minHeight: '100vh',
          margin: 0,
          position: 'relative',
          zIndex: 0,
        }}
      >

        {/* AppBody adds analytics, background, and footer (see AppBody.tsx) */}
        <AppBody>
          {/* LayoutShell adds header and main navigation (see LayoutShell.tsx) */}
          <LayoutShell>{children}</LayoutShell>
        </AppBody>
      </body>
    </html>
  );
}
