'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import ReturnButton from '@/app/components/ReturnButton';

// Structured data (Schema.org) for SEO
const privacyPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "url": "https://mysleepcalculator.net/privacy-policy",
  "description": "Read the privacy policy of the Sleep Calculator to learn how we protect your personal data and information while using our free tool.",
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

export default function PrivacyContent() {
  return (
    <Fragment>
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPageSchema) }}
      />

      <main className="main-style" aria-label="Privacy Policy of the Sleep Calculator">
        <h1>
          Privacy Policy
        </h1>

        <p>
          At the <strong>Sleep Calculator</strong>, we respect your privacy and are committed to protecting your personal information.
          This policy explains how we collect, use, and safeguard your data when you visit and use our free tool.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We do not request or store personally identifiable information. However, like most websites, we may collect anonymous data such as your IP address, browser type, language, and the pages you visit solely for statistical purposes and service improvement.
        </p>

        <h2>2. Cookies and Similar Technologies</h2>
        <p>
          We use our own cookies and third-party cookies (e.g., Google Analytics, Google AdSense) to analyze traffic, display personalized advertising, and enhance your user experience.
          Cookies are small files stored on your device that allow us to recognize you during future visits. You can control or delete cookies at any time through your browser settings.
        </p>

        <h2>3. Third-Party Advertising (Google AdSense and Others)</h2>
        <p>
          This website may display ads provided by Google AdSense or other ad networks.
          These providers may use cookies and similar technologies to show personalized ads based on your interests and previous visits to this and other websites.
          <br /><br />
          Google uses the DART cookie to serve ads based on your visit to our site and others on the internet.
          Learn more about how Google uses your data here:{' '}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="cta-link" aria-label="Google Privacy Policy (opens in new tab)">
            Google Privacy Policy
          </a>.
          <br /><br />
          If you prefer to disable personalized advertising from Google, you can do so at:{' '}
          <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" className="cta-link" aria-label="Google Ads Settings (opens in new tab)">
            Ads Settings
          </a>.
        </p>

        <h2>4. User Rights (GDPR / Europe)</h2>
        <p>
          If you reside in the European Union, you have the right to access, rectify, delete, or object to the use of your personal data.
          To exercise these rights, email us at{' '}
          <a href="mailto:info@mysleepcalculator.net" className="email-link" aria-label="Send email to info@mysleepcalculator.net">
            info@mysleepcalculator.net
          </a>.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          Anonymous data (e.g., for statistical analysis) is retained only as long as necessary for the stated purposes and is not used to identify you personally.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our site may contain links to external pages. We are not responsible for the privacy practices or content of those sites.
          We recommend reading the privacy policies of every site you visit.
        </p>

        <h2>7. Security</h2>
        <p>
          We implement reasonable measures to protect user information and prevent unauthorized access.
        </p>

        <h2>8. Children’s Privacy</h2>
        <p>
          This site is not intended for children under 16, and we do not knowingly collect personal data from anyone under 16.
          If you believe a minor has provided us with personal information, contact us and we will delete it immediately.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We reserve the right to update this policy at any time. Any changes will be posted on this page along with the update date. Last update: July 2025.
        </p>

        <h2>10. Contact</h2>
        <p>
          If you have questions about this privacy policy, feel free to contact us via email:{' '}
          <a href="mailto:info@mysleepcalculator.net" className="email-link">
            info@mysleepcalculator.net
          </a>
        </p>

        <ReturnButton />
      </main>
    </Fragment>
  );
}
