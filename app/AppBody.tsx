'use client';

// Hook for accessing current path (to conditionally show/hide background/footer)
import { usePathname } from 'next/navigation';
import StarBackground from './components/StarBackground';   // Animated starry background component
import Footer from './components/Footer';   // Footer component
import dynamic from 'next/dynamic';
const Analytics = dynamic(() => import('./components/Analytics'), { ssr: false }); // Google Analytics injection/tracking

/**
 * AppBody component
 * - Adds global elements: Analytics, star background, and footer (unless in /widget)
 * - Wraps all app content (children)
 * - Hides star background and footer on widget pages for cleaner embeds
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();     // Get the current route path
  const isWidget = pathname.startsWith('/widget');   // Check if the current page is the widget route (or any subroute)

  return (
    <>
      {/* Google Analytics - always loaded */}
      <Analytics />
      {/* Star background only if NOT widget */}
      {!isWidget && <StarBackground />}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Main content area */}
        <main style={{ flex: '1 0 auto' }}>
          {children}
        </main>
        {/* Footer only if NOT widget */}
        {!isWidget && <Footer />}
      </div>
    </>
  );
}
