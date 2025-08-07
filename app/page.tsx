// Instructs Next.js to render this page on the client side (enables interactive calculator)
'use client';

import styles from './page.module.css'; // Import CSS module for scoped styles
import SleepCalculator from "./components/SleepCalculator"; // Import the main SleepCalculator component

/**
 * Home component (main landing page)
 * - Shows intro text and renders the interactive SleepCalculator
 * - Styled with page.module.css for responsive layout
 */
export default function Home() {
  return (
    <main
      className="main-style"
      aria-label="Sleep Calculator Home Page"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
        }}
    >
      {/* Main SEO-friendly H1 */}
      <h1 className={styles.title}>
        Calculate Your Sleep Cycles to Wake Up Refreshed
      </h1>

      {/* Intro Paragraph */}
      <p className={styles.description}>
        Find out the best time to sleep or wake up to complete healthy sleep cycles.
        Our sleep calculator helps improve your rest and overall well-being.
      </p>

      {/* Sleep Calculator goes here */}
      <SleepCalculator />
    </main>
  );
}
