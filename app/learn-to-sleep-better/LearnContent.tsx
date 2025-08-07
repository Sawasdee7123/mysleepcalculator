// Instructs Next.js to render this component on the client side.
'use client';

// Import Next.js Link for navigation and Fragment for grouping multiple elements.
import Link from 'next/link';
import { Fragment } from 'react';

// Import the Returnbutton
import ReturnButton from '@/app/components/ReturnButton';

// Structured data for SEO: Article schema (Schema.org) describing the page content.
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Learn to Sleep Better, Wake Up Refreshed",
  "description": "Discover tips, benefits, and scientific insights to improve your rest. Learn how sleep cycles work, how many hours you need based on your age, and how to use the sleep calculator.",
  "inLanguage": "en",
  "author": {
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
  },
  "datePublished": "2025-07-08",
  "image": "https://mysleepcalculator.net/og-image.png",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://mysleepcalculator.net/learn-to-sleep-better"
  }
};

// Structured data for SEO: FAQPage schema (Schema.org) containing common sleep questions and answers.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "en",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best time to go to bed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Between 10:00 PM and 11:30 PM. This helps align your deep sleep with the darkest hours of the night and your natural body clock."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I wake up during a cycle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You may feel groggy, irritable, or disoriented. This is because you interrupted a deep sleep phase, such as NREM or REM."
      }
    },
    {
      "@type": "Question",
      "name": "Is sleeping more always better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Sleeping more than 9 hours can be counterproductive if the quality isn’t good. Consistency is also key."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to fall asleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On average, it takes 10 to 20 minutes. If it takes much longer, or if you fall asleep instantly, it may signal sleep deprivation."
      }
    },
    {
      "@type": "Question",
      "name": "How can I know how many hours I need to sleep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Try during a vacation: go to bed at the same time every day and wake up naturally. The average sleep duration will reflect your natural need."
      }
    }
  ]
};

/**
 * Main content for the Learn page.
 * - Injects Article and FAQ structured data for SEO.
 * - Displays educational content about sleep, cycles, and tips.
 * - Uses reusable ReturnButton for navigation.
 */
export default function LearnContent() {
  return (
    <Fragment>

      {/* Inject Article schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Inject FAQ schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="main-style" aria-label="Educational content about sleep">
        <h1>
          Learn to Sleep Better, Wake Up Refreshed
        </h1>

        <p>
          Tired of waking up groggy even after many hours of sleep? The key isn’t just how long you sleep, but when you wake up.
          Our Sleep Calculator helps you find the ideal time to go to bed or wake up, ensuring deeper, more restorative rest.
        </p>

        <ReturnButton />

        <h2>How Does the Sleep Calculator Work?</h2>
        <p>
          You can use the calculator in two ways:
        </p>
        <ul>
          <li><strong>Know what time you need to wake up?</strong> We’ll show you when to go to bed to complete 5 or 6 full cycles.</li>
          <li><strong>Going to bed now?</strong> We’ll tell you the best wake-up times to avoid interrupting a sleep cycle.</li>
        </ul>
        <p>
          Remember: most people take about 15 minutes to fall asleep. Be sure to factor that in!
        </p>

        <h2>Benefits of Quality Sleep</h2>
        <ul>
          <li>Improves focus, memory, and productivity.</li>
          <li>Lowers risk of heart disease and stroke.</li>
          <li>Boosts the immune system.</li>
          <li>Regulates appetite hormones and supports healthy weight.</li>
          <li>Reduces anxiety, stress, and depression.</li>
          <li>Enhances physical performance and muscle recovery.</li>
          <li>Decreases risk of conditions like type 2 diabetes and high blood pressure.</li>
        </ul>

        <ReturnButton />

        <h2>What Are Sleep Cycles?</h2>
        <p>
          While you sleep, your body goes through ~90-minute cycles, repeating 4 to 6 times per night. Each cycle includes different phases:
        </p>
        <ul>
          <li><strong>Stage 1 (NREM):</strong> Light transition from wakefulness to sleep.</li>
          <li><strong>Stage 2 (NREM):</strong> Light sleep; heart rate and body temperature drop.</li>
          <li><strong>Stage 3 (NREM):</strong> Deep, restorative sleep. Growth hormone is released.</li>
          <li><strong>REM Sleep:</strong> Brain activity increases, vivid dreams occur, memory consolidates.</li>
        </ul>

        <h2>How Many Cycles Should You Sleep?</h2>
        <p>
          Ideally, aim for 5 to 6 full cycles each night, around 7.5 to 9 hours of sleep.
          Sleeping less or interrupting a cycle can leave you feeling more tired upon waking.
        </p>

        <h2>How Many Hours of Sleep Do I Need by Age?</h2>
        <ul>
          <li><strong>0–3 months:</strong> 14–17 hours</li>
          <li><strong>4–11 months:</strong> 12–15 hours</li>
          <li><strong>1–2 years:</strong> 11–14 hours</li>
          <li><strong>3–5 years:</strong> 10–13 hours</li>
          <li><strong>6–13 years:</strong> 9–11 hours</li>
          <li><strong>14–17 years:</strong> 8–10 hours</li>
          <li><strong>18–64 years:</strong> 7–9 hours</li>
          <li><strong>65+ years:</strong> 7–8 hours</li>
        </ul>

        <h2>Tips to Improve Sleep Hygiene</h2>
        <ul>
          <li>Stick to a consistent sleep schedule, even on weekends.</li>
          <li>Create a relaxing bedtime routine: read, meditate, or take a warm bath.</li>
          <li>Avoid screens 30–60 minutes before bed.</li>
          <li>Keep your room dark, quiet, and cool (ideally 18–21°C).</li>
          <li>Invest in a quality mattress and proper pillows.</li>
          <li>Avoid caffeine, alcohol, and heavy meals before bed.</li>
          <li>Exercise regularly, but avoid intense workouts at night.</li>
          <li>
            Use tools like our{' '}
            <Link href="/" className="cta-link">
              Sleep Calculator
            </Link>{' '}
            to better plan your rest.
          </li>
        </ul>

        <h2>Preguntas Frecuentes (FAQ)</h2>

        <details className="faq-details">
          <summary className="faq-summary">What is the best time to go to bed?</summary>
          <p>
            Between 10:00 PM and 11:30 PM. This helps align your deep sleep with the darkest hours of the night and your natural body clock.
          </p>
        </details>

        <details className="faq-details">
          <summary className="faq-summary">What happens if I wake up during a cycle?</summary>
          <p>
            You may feel groggy, irritable, or disoriented. This is because you interrupted a deep sleep phase, such as NREM or REM.
          </p>
        </details>

        <details className="faq-details">
          <summary className="faq-summary">Is sleeping more always better?</summary>
          <p>
            Not necessarily. Sleeping more than 9 hours can be counterproductive if the quality isn’t good. Consistency is also key.
          </p>
        </details>

        <details className="faq-details">
          <summary className="faq-summary">How long does it take to fall asleep?</summary>
          <p>
            On average, it takes 10 to 20 minutes. If it takes much longer, or if you fall asleep instantly, it may signal sleep deprivation.
          </p>
        </details>

        <details className="faq-details">
          <summary className="faq-summary">How can I know how many hours I need to sleep?</summary>
          <p>
            Try during a vacation: go to bed at the same time every day and wake up naturally. The average sleep duration will reflect your natural need.
          </p>
        </details>

        <ReturnButton />
      </main>
    </Fragment>
  );
}
