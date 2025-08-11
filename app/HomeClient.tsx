'use client';

import styles from './page.module.css';
import SleepCalculator from './components/SleepCalculator';

export default function HomeClient() {
  return (
    <main
      className="main-style"
      aria-label="Sleep Calculator Home Page"
      style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1 className={styles.title}>Calculate Your Sleep Cycles to Wake Up Refreshed</h1>
      <p className={styles.description}>
        Find out the best time to sleep or wake up to complete healthy sleep cycles.
        Our sleep calculator helps improve your rest and overall well-being.
      </p>
      <SleepCalculator />
    </main>
  );
}
