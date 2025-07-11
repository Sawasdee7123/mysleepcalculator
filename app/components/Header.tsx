// Instructs Next.js to render this component on the client side (for interactivity)
'use client';

import Link from 'next/link'; // Import Next.js Link component for internal navigation (no full page reload)
import Image from 'next/image'; // Import Next.js Image component for optimized images (automatic resizing, lazy loading, etc.)
import styles from '../page.module.css'; // Import CSS module for component-specific styles

// Header component: displays the logo and site title, both clickable and linking to the homepage
export default function Header() {
  return (
    // Apply custom header styling and horizontally center content
    <div className={styles.header} style={{ justifyContent: 'center' }}>

      {/* Entire header is a link to the homepage for easy navigation */}
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}
        aria-label="Ir a la página principal"
      >

        {/* Logo image (optimized for web with next/image) */}
        <Image
          src="/logo.png"
          alt="Logo de la Calculadora de Sueño"
          width={96}
          height={96}
          priority
          className={styles.logo}
        />

        {/* Main site title, styled with CSS module */}
        <h1 className={styles.title}>Calculadora de Sueño</h1>
      </Link>
    </div>
  );
}
