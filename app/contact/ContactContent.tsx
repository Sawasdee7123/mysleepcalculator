// Instructs Next.js to render this component on the client side.
'use client';

// Import Next.js Link for navigation and Fragment for grouping multiple elements.
import Link from 'next/link';
import { Fragment } from 'react';

// Structured data for SEO: FAQPage schema (Schema.org)
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact",
  "url": "https://mysleepcalculator.net/contact",
  "about": "Contact page for the Sleep Calculator project",
  "inLanguage": "en",
  "mainEntity": {
    "@type": "Organization",
    "name": "Sleep Calculator",
    "url": "https://mysleepcalculator.net/",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@mysleepcalculator.net",
      "contactType": "Customer Support",
      "availableLanguage": ["es", "en"]
    }
  }
};

/**
 * Main content for the Contact page.
 * - Provides a way for users to reach out via email.
 * - Displays contact instructions and reassurance.
 * - Injects Schema.org ContactPage structured data.
 * - Matches visual style and layout of all static pages.
 */
export default function ContactContent() {
  return (
    <Fragment>

      {/* Inject Article schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className="main-style" aria-label="Contact page for the Sleep Calculator">
        <h1>Get in Touch</h1>

        <p>
          Have questions, feedback, or suggestions? We'd love to hear from you.
        </p>

        <p>
          You can email us directly at:{' '}
          <a
            href="mailto:info@mysleepcalculator.net"
            className="email-link"
            aria-label="Send email to info@mysleepcalculator.net"
          >
            info@mysleepcalculator.net
          </a>
        </p>

        <p>
          We usually respond within 48 hours.
        </p>
      </main>

    </Fragment>
  );
}
