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
import LayoutShell from './components/LayoutShell';

import LanguagePrompt from './components/LanguagePrompt';


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
  metadataBase: new URL('https://mysleepcalculator.net'),       // important
  title: 'Sleep Calculator | Find Your Ideal Time to Sleep and Wake Up',
  description: 'Use our Sleep Calculator to discover the best times to go to bed and wake up. Improve your sleep and well-being with personalized sleep timing.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  openGraph: {
    // Open Graph data for social link previews
    title: 'Sleep Calculator | Find Your Ideal Time to Sleep and Wake Up',
    description: 'Use our Sleep Calculator to discover the best times to go to bed and wake up. Improve your sleep and well-being with personalized sleep timing.',
    url: 'https://mysleepcalculator.net',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sleep Calculator',
      },
    ],
    siteName: 'Sleep Calculator',
    type: 'website',
  },

  twitter: {
    // Twitter Card meta for Twitter link previews
    card: 'summary_large_image',
    title: 'Sleep Calculator | Find Your Ideal Time to Sleep and Wake Up',
    description: 'Use our Sleep Calculator to discover the best times to go to bed and wake up. Improve your sleep and well-being with personalized sleep timing.',
    images: ['/og-image.png'],
  },

  // NOTE: no "alternates" here; pages will set their own hreflang

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
    <html lang="en">
      <head>
        {/* Favicon link */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google AdSense verification (static script tag for crawler) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2545431483160187"
          crossOrigin="anonymous"
        ></script>

        {/* Schema.org structured data for SEO */}
        <Script id="jsonld-webpage" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sleep Calculator",
            "alternateName": "Calculadora de Sueño",
            "url": "https://mysleepcalculator.net",
            "description": "Use our Sleep Calculator to discover the best times to go to bed and wake up.",
            "image": "https://mysleepcalculator.net/og-image.png",
            "inLanguage": "en"
          })}
        </Script>

        <Script id="jsonld-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sleep Calculator",
            "url": "https://mysleepcalculator.net",
            "logo": "https://mysleepcalculator.net/logo.png",
            "alternateName": "Calculadora de Sueño",
            "sameAs": [
              "https://mysleepcalculator.net",
              "https://calculadoraciclosdesueno.com"
            ]
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

        <LanguagePrompt />

        {/* AppBody adds analytics, background, and footer (see AppBody.tsx) */}
        <AppBody>
          {/* LayoutShell adds header and main navigation (see LayoutShell.tsx) */}
          <LayoutShell>{children}</LayoutShell>
        </AppBody>
      </body>
    </html>
  );
}
