// Instructs Next.js to render this component on the client side (needed for interactive calculator)
'use client';

// Import the main SleepCalculator component (core calculator UI)
import SleepCalculator from '../components/SleepCalculator';

/**
 * WidgetClient component
 * - Renders the SleepCalculator in "widget" mode with attribution enabled.
 * - Used in the embeddable widget page.
 */
export default function WidgetPage() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: '2rem 1rem', // ⬅️ Horizontal padding on mobile
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '410px', // ⬅️ Match the width in the embed code
        }}
      >
        <SleepCalculator/>
      </div>
    </div>
  );
}
