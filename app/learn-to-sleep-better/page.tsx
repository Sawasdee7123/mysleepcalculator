// Import the main content component for the Learn page
import LearnContent from './LearnContent';

import { alternatesForEnPath } from '../components/hreflang';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Learn page
export const metadata: Metadata = {
  alternates: alternatesForEnPath('/embed-sleep-calculator'),
  title: 'Learn to Sleep Better: Tips, Cycles & Complete Guide | Sleep Calculator',
  description: 'Improve your rest with our complete guide: sleep hygiene, sleep cycles, age-based sleep needs, and expert tips for deeper sleep.',

  openGraph: {
    title: 'Learn to Sleep Better: Tips, Cycles & Complete Guide | Sleep Calculator',
    description: 'Improve your rest with our complete guide: sleep hygiene, sleep cycles, age-based sleep needs, and expert tips for deeper sleep.',
    url: 'https://mysleepcalculator.net/learn-to-sleep-better',
    images: [
      {
        url: 'https://mysleepcalculator.net/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sleep Calculator',
      },
    ],
    siteName: 'Sleep Calculator',
    type: 'article', // You can also use 'website' but 'article' is often more accurate for guides
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Learn to Sleep Better: Tips, Cycles & Complete Guide | Sleep Calculator',
    description: 'Improve your rest with our complete guide: sleep hygiene, sleep cycles, age-based sleep needs, and expert tips for deeper sleep.',
    images: ['https://mysleepcalculator.net/og-image.png'],
  },
};

// Page component for /como-dormir-mejor, renders the LearnContent component
export default function LearnPage() {
  return <LearnContent />;
}
