// Import the main content component for the Contact page
import ContactContent from './ContactContent';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical URL for the Learn page
export const metadata: Metadata = {
  title: 'Contact Us | Sleep Calculator',
  description: 'Have questions or suggestions? Get in touch with the Sleep Calculator team.',

  openGraph: {
    title: 'Contact Us | Sleep Calculator',
    description: 'Have questions or suggestions? Get in touch with the Sleep Calculator team.',
    url: 'https://mysleepcalculator.net/contact',
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
    title: 'Contact Us | Sleep Calculator',
    description: 'Have questions or suggestions? Get in touch with the Sleep Calculator team.',
    images: ['https://mysleepcalculator.net/og-image.png'],
  },

  alternates: {
    canonical: 'https://mysleepcalculator.net/contact',
    languages: {
      en: 'https://mysleepcalculator.net/contact',
      es: 'https://calculadoraciclosdesueno.com/contacto',
    },
  },
};

// Page component for /contact, renders the ContactContent component
export default function ContactPage() {
  return <ContactContent />;
}
