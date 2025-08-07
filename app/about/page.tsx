// Import the main content component for the Learn page
import AboutContent from './AboutContent';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Learn page
export const metadata: Metadata = {
  title: 'About Us | Sleep Calculator',
  description: 'Meet the team behind the Sleep Calculator. Learn why we created this free tool and how it can help you improve your sleep.',

  openGraph: {
    title: 'About Us | Sleep Calculator',
    description: 'Meet the team behind the Sleep Calculator. Learn why we created this free tool and how it can help you improve your sleep.',
    url: 'https://mysleepcalculator.net/about',
    images: [
      {
        url: 'https://mysleepcalculator.net/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sleep Calculator',
      },
    ],
    siteName: 'Sleep Calculator',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Sleep Calculator',
    description: 'Meet the team behind the Sleep Calculator. Learn why we created this free tool and how it can help you improve your sleep.',
    images: ['https://mysleepcalculator.net/og-image.png'],
  },

  alternates: {
    canonical: 'https://mysleepcalculator.net/about',
    languages: {
      en: 'https://mysleepcalculator.net/about',
      es: 'https://calculadoraciclosdesueno.com/about',
    },
  },
};

// Page component for /about, renders the AboutContent component
export default function AboutPage() {
  return <AboutContent />;
}
