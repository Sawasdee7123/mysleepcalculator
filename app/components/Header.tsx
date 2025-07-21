'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../page.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Calculadora' },
  { href: '/como-dormir-mejor', label: 'Cómo Dormir Mejor' },
  { href: '/incluir-calculadora-sueno-en-mi-web', label: 'Añadir la Calculadora en tu Web' },
  { href: '/about', label: 'Sobre Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      {/* Centered logo and title */}
      <div className={styles.brandContainer}>
        <Link href="/" className={styles.logoLink} aria-label="Ir a la página principal">
          <Image
            src="/logo.png"
            alt="Logo de la Calculadora de Sueño"
            width={96}
            height={96}
            priority
            className={styles.logo}
          />
          {/* Use h1 for SEO and branding, keep your original class */}
          <h1 className={styles.title}>Calculadora de Sueño</h1>
        </Link>
      </div>
      {/* Centered nav bar */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger for mobile */}
        <button
          className={styles.mobileMenuButton}
          aria-label="Menú"
          onClick={() => setMobileOpen(o => !o)}
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
        {mobileOpen && (
          <ul className={styles.mobileNavLinks}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
