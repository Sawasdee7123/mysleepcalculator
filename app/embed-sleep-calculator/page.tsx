// Import the CalculatorInstructions component, which renders the embed instructions and FAQ
import CalculatorInstructions from './CalculatorInstructions';

import { alternatesForEnPath } from '../components/hreflang';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical link
export const metadata = {
  alternates: alternatesForEnPath('/embed-sleep-calculator'),
  title: 'How to Add the Sleep Calculator to Your Website',
  description: 'Quick and easy instructions to embed the free Sleep Calculator on your website or blog using a simple HTML code.',

  openGraph: {
    title: 'How to Add the Sleep Calculator to Your Website',
    description: 'Quick and easy instructions to embed the free Sleep Calculator on your website or blog using a simple HTML code.',
    url: 'https://mysleepcalculator.net/embed-sleep-calculator',
    images: [
      {
        url: 'https://mysleepcalculator.net/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sleep Calculator',
      },
    ],
    siteName: 'Sleep Calculator',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'How to Add the Sleep Calculator to Your Website',
    description: 'Quick and easy instructions to embed the free Sleep Calculator on your website or blog using a simple HTML code.',
    images: ['https://mysleepcalculator.net/og-image.png'],
  },
};

// Page component for /embed-sleep-calculator, renders the instructions and FAQ
export default function AddCalculatorPage() {
  return <CalculatorInstructions />;
}
