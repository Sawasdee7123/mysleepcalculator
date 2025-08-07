'use client';

import { Fragment } from 'react';
import ReturnButton from '@/app/components/ReturnButton';

// Structured data (Schema.org) for SEO
const termsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms and Conditions",
  "url": "https://mysleepcalculator.net/terms-and-conditions",
  "description": "Read the terms and conditions for using the Sleep Calculator. Understand your rights, responsibilities, and the rules for using our free tool.",
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

export default function TermsContent() {
  return (
    <Fragment>
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsPageSchema) }}
      />

      <main className="main-style" aria-label="Terms and Conditions of the Sleep Calculator">
        <h1>
          Terms and Conditions
        </h1>

        <p>
          Welcome to the <strong>Sleep Calculator</strong>. By accessing and using this website, you agree to comply with the following terms and conditions. If you do not agree with any part of these terms, please do not use our site.
        </p>

        <h2>1. Use of the Website</h2>
        <p>
          The content on this website is for general informational purposes only. The tool is intended to help users estimate optimal sleep schedules but is not a substitute for professional medical advice.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          All intellectual property rights to the content, text, graphics, logos, and software belong to My Sleep Calculator or its licensors. Reproduction, distribution, or modification without express permission is prohibited.
        </p>

        <h2>3. Limitation of Liability</h2>
        <p>
          The Sleep Calculator is not responsible for any decisions made by users based on the information provided on this site. The use of the tool and its information is entirely at the user’s own risk.
        </p>

        <h2>4. Third-Party Advertising and External Links</h2>
        <p>
          This website may display third-party advertisements (such as Google AdSense) and contain links to external websites. My Sleep Calculator does not control and is not responsible for the content or privacy practices of those sites or services.
        </p>

        <h2>5. Changes to the Terms</h2>
        <p>
          We reserve the right to modify these terms and conditions at any time. Any changes will be posted on this page and will be considered accepted by continued use of the site.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These terms are governed by the laws of Singapore. Any disputes related to the website will be resolved before the competent courts of Singapore.
        </p>

        <h2>7. Contact</h2>
        <p>
          If you have questions about these terms and conditions, you can contact us at: <a href="mailto:info@mysleepcalculator.net" className="email-link" aria-label="Send email to info@mysleepcalculator.net">info@mysleepcalculator.net</a>
        </p>

        <ReturnButton />
      </main>
    </Fragment>
  );
}
