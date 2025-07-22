import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
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
  const pathname = usePathname();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    function handleKeyDown(e) {
      if (mobileOpen && e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className={styles.headerWrapper}>
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
          <span className={styles.title}>Calculadora de Sueño</span>
        </Link>
      </div>
      <nav className={styles.navbar} aria-label="Navegación principal">
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(link => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
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
          <>
            <ul className={styles.mobileNavLinks} role="menu">
              {NAV_LINKS.map(link => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      className={`${styles.mobileNavLink} ${isActive ? styles.activeNavLink : ''}`}
                      role="menuitem"
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}
