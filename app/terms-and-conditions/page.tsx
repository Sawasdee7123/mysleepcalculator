// Import the main content component for the Terms & Conditions page
import TermsContent from './TermsContent';

import { alternatesForEnPath } from '../components/hreflang';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Terms page
export const metadata: Metadata = {
  alternates: alternatesForEnPath('/terms-and-conditions'),
  title: 'Terms and Conditions | Sleep Calculator',
  description: 'Read the terms and conditions for using the Sleep Calculator. Understand your rights, responsibilities, and the rules for using our free tool.',

  openGraph: {
    title: 'Terms and Conditions | Sleep Calculator',
    description: 'Read the terms and conditions for using the Sleep Calculator. Understand your rights, responsibilities, and the rules for using our free tool.',
    url: 'https://mysleepcalculator.net/terms-and-conditions',
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
    title: 'Terms and Conditions | Sleep Calculator',
    description: 'Read the terms and conditions for using the Sleep Calculator. Understand your rights, responsibilities, and the rules for using our free tool.',
    images: ['https://mysleepcalculator.net/og-image.png'],
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
