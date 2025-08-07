// Instructs Next.js to render this component on the client side.
'use client';

// Import Next.js Link for navigation and Fragment for grouping multiple elements.
import Link from 'next/link';
import { Fragment } from 'react';

// Import the ReturnButton
import ReturnButton from '@/app/components/ReturnButton';

// Structured data (Schema.org) for SEO
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Us",
  "url": "https://mysleepcalculator.net/about",
  "description": "Meet the team behind the Sleep Calculator. Learn why we created this free tool and how it can help you improve your sleep.",
  "inLanguage": "en",
  "mainEntity": {
    "@type": "WebSite",
    "name": "Sleep Calculator",
    "url": "https://mysleepcalculator.net/",
    "inLanguage": "en",
    "creator": {
      "@type": "Person",
      "name": "Sleep Calculator Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sleep Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mysleepcalculator.net/logo.png"
      }
    }
  }
};

/**
 * Main content for the About page.
 * - Explains the origin and purpose of the Sleep Calculator tool.
 * - Highlights its benefits and creator's motivation.
 * - Injects structured data using Schema.org AboutPage + Person.
 * - Matches layout and style with other content pages.
 * - Includes a ReturnButton linking back to the home calculator.
 */
export default function AboutContent() {
  return (
    <Fragment>

      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <main className="main-style" aria-label="About Us Content">
        <h1>
          About Us
        </h1>

        <p>
          The <strong>Sleep Calculator</strong> was created with a simple goal:
          helping you wake up feeling refreshed. Often, it's not about sleeping more hours,
          it's about waking up at the right point in your sleep cycle.
        </p>

        <p>
          This tool is for anyone who wants to improve their rest; students, professionals,
          parents, or anyone looking to optimize their sleep routine in a quick and free way.
        </p>

        <p>
          This project was developed by an independent entrepreneur passionate about wellness and technology.
          Our mission is to offer practical, no-cost tools that can truly improve your day-to-day life.
        </p>

        <p>
          The calculator is based on average human sleep cycle data (~90 minutes per cycle).
          While everyone is different, this tool provides a great foundation to plan your sleep schedule.
        </p>

        <p>
          Try it out and start improving your rest today.{' '}
        </p>

        <ReturnButton />

      </main>
    </Fragment>
  );
}

