// Instructs Next.js to render this component on the client side (needed for interactive calculator)
'use client';

// Import the main SleepCalculator component (core calculator UI)
import SleepCalculator from '../components/SleepCalculator';

/**
 * WidgetClient component
 * - Renders the SleepCalculator in "widget" mode with attribution enabled.
 * - Used in the embeddable widget page.
 */
export default function WidgetClient() {
  return <SleepCalculator showAttribution />;
}
