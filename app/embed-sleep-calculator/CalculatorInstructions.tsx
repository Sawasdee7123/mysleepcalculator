// Instructs Next.js to render this component on the client side (enables interactivity)
'use client';

// Import React hooks for component state and grouping elements without extra DOM nodes
import { useRef, useState, Fragment } from 'react';

// SEO: HowTo structured data (shows step-by-step guide in Google results)
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Add the Sleep Calculator to Your Website",
  "description": "Step-by-step guide to embed the free Sleep Calculator on any website or blog.",
  "inLanguage": "en",
  "image": "https://mysleepcalculator.net/og-image.png",
  "totalTime": "PT2M",
  "supply": [
    { "@type": "HowToSupply", "name": "HTML widget code" }
  ],
  "tool": [
    { "@type": "HowToTool", "name": "Website editor" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Copy the widget code",
      "text": "Copy the HTML code provided on this page."
    },
    {
      "@type": "HowToStep",
      "name": "Paste the code on your site",
      "text": "Paste the copied code into the desired section of your website or blog."
    },
    {
      "@type": "HowToStep",
      "name": "Save and check",
      "text": "Save your changes and verify the calculator displays correctly on both mobile and desktop."
    },
    {
      "@type": "HowToStep",
      "name": "Contact if needed",
      "text": "If you have questions, contact info@mysleepcalculator.net"
    }
  ]
};

// SEO: FAQ structured data (for enhanced Google rich results)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "en",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the calculator free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can freely embed it on your site and offer it to your visitors."
      }
    },
    {
      "@type": "Question",
      "name": "Does it work on mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the widget is fully responsive and works on all screen sizes."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe for my users?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The calculator collects no personal data and requires no login. It's a simple, safe tool for users."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of websites can include the calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any site, blog, educational portal, or health & wellness website can embed it."
      }
    }
  ]
};

/**
 * CalculatorInstructions component
 * - Renders step-by-step guide and FAQ for embedding the Sleep Calculator widget
 * - Provides "copy code" button for easy widget integration
 * - Injects Schema.org HowTo and FAQ structured data for SEO
 * - Handles clipboard interaction and fallback for older browsers
 */
export default function CalculatorInstructions() {
  const codeString = `<div style="max-width:410px; width:100%; background:#0c0c0c; border-radius:28px; margin:0 auto;">
  <div style="position:relative; width:100%; padding-top:136.5%;">
    <iframe
      src="https://mysleepcalculator.net/widget"
      title="Sleep Calculator"
      aria-label="Sleep Calculator"
      loading="lazy"
      style="position:absolute; top:0; left:0; width:100%; height:100%; border-radius:28px; background:#0c0c0c;"
      allowfullscreen
    ></iframe>
  </div>
</div>
<p style="text-align:center; font-size:0.98rem; margin-top:0.6em;">
  <span style="color:#454553;">Calculator by</span>
  <a href="https://mysleepcalculator.net/" target="_blank" rel="noopener noreferrer"
     style="color:#3578e5; text-decoration:underline; font-weight:500;">
    mysleepcalculator.net
  </a>
</p>`;

  // State for showing the "Copied!" popup message
  const [copied, setCopied] = useState(false);

  // Handles copying the code to clipboard, with fallback if API is not supported
  const handleCopy = async () => {
    if (navigator?.clipboard) {
      try {
        await navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch (error) {
        window.prompt('Copy the code manually:', codeString);
      }
    } else {
      window.prompt('Copy the code manually:', codeString);
    }
  };

  return (
    <Fragment>

      {/* Inject HowTo Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Inject FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="main-style" aria-label="Instructions for embedding the Sleep Calculator on any website">

        {/* Title and Intro */}
        <h1>
          How to Add the Sleep Calculator to Your Website
        </h1>

        <p>
          Want to embed our Sleep Calculator on your site, blog, or health page? It’s super easy, just follow these steps to add the interactive tool for free, no signup required.
        </p>

        {/* Quick Instructions Heading */}
        <h2>
          Quick Instructions
        </h2>

        {/* Step 1: Copy the code */}
        <ol>
          <li>
            Copy the following code and paste it where you want the calculator to appear.
          </li>
        </ol>

        {/* --- COPY BUTTON above CODE BLOCK --- */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '-2.7rem', marginRight: '0.6rem', zIndex: 1, position: 'relative' }}>
          <button
            onClick={handleCopy}
            aria-label="Copy the HTML code to embed the widget"
            style={{
              background: '#f4d35e',
              color: '#181a30',
              border: 'none',
              borderRadius: '8px',
              padding: '0.55em 1.25em',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '1.03rem',
              boxShadow: copied ? '0 0 8px #f4d35e' : undefined,
              transition: 'background 0.18s'
            }}
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>

        {/* Code block with widget embed code */}
        <div style={{
          background: '#23243a',
          color: '#f4d35e',
          borderRadius: '18px',
          padding: '2.2rem 2.1rem 1.4rem 2.1rem',
          margin: '1.5rem 0 1.4rem 0',
          fontSize: '1rem',
          fontFamily: 'Menlo, monospace',
          boxShadow: '0 2px 18px 0 #0005',
          overflowX: 'auto',
          position: 'relative',
        }}>
          <pre
            style={{
              margin: 0,
              fontSize: '1.06rem',
              lineHeight: 1.55,
              background: 'none',
              color: '#f4d35e',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {codeString}
          </pre>
        </div>

        {/* Steps 2-4: Paste, check, contact */}
        <ol start={2}>
          <li>
            Paste the code into your page, post, sidebar, or wherever you want it to show up.
            On WordPress, Blogger, etc., use a “Custom HTML” block.
          </li>
          <li>
            Save your changes and make sure the calculator displays correctly on both desktop and mobile.
          </li>
          <li>
            If you need help, feel free to email us at:{' '}
            <a
              href="mailto:info@mysleepcalculator.net"
              className="email-link"
              aria-label="Send email to info@mysleepcalculator.net"
            >
              info@mysleepcalculator.net
            </a>
          </li>
        </ol>

        {/* Preview Section */}
        <h2 style={{ marginTop: '2.4rem' }}>Preview</h2>
        <p>
          This is what the calculator will look like on your site:
        </p>
        <div style={{
          maxWidth: '410px',
          width: '100%',
          background: '#0c0c0c',
          borderRadius: '28px',
          margin: '0 auto'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            paddingTop: '136.5%'
          }}>
            <iframe
              src="https://mysleepcalculator.net/widget"
              title="Sleep Calculator"
              aria-label="Sleep Calculator"
              loading="lazy"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '28px',
                background: '#0c0c0c'
              }}
              allowFullScreen
            />
          </div>
        </div>
        <p style={{
          textAlign: 'center',
          fontSize: '0.98rem',
          marginTop: '0.6em'
        }}>
          <span style={{ color: '#454553' }}>Calculator by</span>{' '}
          {' '}
          <a
            href="https://mysleepcalculator.net/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#3578e5',
              textDecoration: 'underline',
              fontWeight: 500
            }}
          >
            mysleepcalculator.net
          </a>
        </p>

        {/* FAQ Section */}
        <h2>
          Frequently Asked Questions (FAQ)
        </h2>

        {/* Each FAQ as a details/summary for easy mobile reading */}
        <details className="faq-details">
          <summary className="faq-summary">Is the calculator free?</summary>
          <p>
            Yes, you can freely embed it on your site and offer it to your visitors.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-summary">Does it work on mobile?</summary>
          <p>
            Yes, the widget is fully responsive and works on all screen sizes.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-summary">Is it safe for my users?</summary>
          <p>
            The calculator collects no personal data and requires no login. It's a simple, safe tool for users.
          </p>
        </details>
        <details className="faq-details">
          <summary className="faq-summary">What kind of websites can include the calculator?</summary>
          <p>
            Any site, blog, educational portal, or health & wellness website can embed it.
          </p>
        </details>

        {/* Final note */}
        <div className="page-note">
          Do you run a blog or wellness website? Adding the Sleep Calculator is a simple way to give your users more value, no signups or payments required.
        </div>
      </main>
    </Fragment>
  );
}
