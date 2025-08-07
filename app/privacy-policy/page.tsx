// Import the main content component for the Privacy Policy page
import PrivacyContent from './PrivacyContent';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Privacy Policy page
export const metadata: Metadata = {
  title: 'Privacy Policy | Sleep Calculator',
  description: 'Read the privacy policy of the Sleep Calculator to learn how we protect your personal data and information while using our free tool.',

  openGraph: {
    title: 'Privacy Policy | Sleep Calculator',
    description: 'Read the privacy policy of the Sleep Calculator to learn how we protect your personal data and information while using our free tool.',
    url: 'https://mysleepcalculator.net/privacy-policy',
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
    title: 'Privacy Policy | Sleep Calculator',
    description: 'Read the privacy policy of the Sleep Calculator to learn how we protect your personal data and information while using our free tool.',
    images: ['https://mysleepcalculator.net/og-image.png'],
  },

  alternates: {
    canonical: 'https://mysleepcalculator.net/privacy-policy',
    languages: {
      en: 'https://mysleepcalculator.net/privacy-policy',
      es: 'https://calculadoraciclosdesueno.com/privacidad',
    },
  },
};

// Page component for /privacy, renders the PrivacyContent component
export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
