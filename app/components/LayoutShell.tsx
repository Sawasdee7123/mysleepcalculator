// Instructs Next.js to render this component on the client side (allows use of hooks like usePathname)
'use client';

// Import the usePathname hook to access the current route path
import { usePathname } from 'next/navigation';
// Import the Header and Footer components for site layout
import Header from './Header';
import Footer from './Footer';
import CookieConsentBanner from './CookieConsentBanner';

/**
 * LayoutShell component
 * - Wraps page content with Header and Footer for consistent site layout.
 * - Hides Header and Footer on the "/widget" route for a cleaner, embeddable calculator.
 * - Displays the children components passed to it (actual page content).
 */
export default function LayoutShell({ children }: { children: React.ReactNode }) {
  // Get the current path using the Next.js router hook
  const pathname = usePathname();

  // Determine if Header should be hidden (on "/widget" page)
  const hideHeader = pathname === '/widget';

  // Determine if CookieConsentBanner should be hidden (on "/widget" page)
  const hideCookieBanner = pathname === '/widget';

  return (
    <>
      {/* Only show Header & CookieConsentBanner if not on the widget route */}
      {!hideHeader && <Header />}
      {!hideCookieBanner && <CookieConsentBanner />}
      {/* Render the main page content */}
      {children}
    </>
  );
}
