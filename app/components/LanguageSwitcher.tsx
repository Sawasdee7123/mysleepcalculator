'use client';

import { usePathname } from 'next/navigation';
import { translatePath } from './LanguageRouteMap';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/LanguageSwitcher.module.css';
import Link from 'next/link';
import { useMemo } from 'react';

type LanguageCode = 'en' | 'es' | 'pl';

const LANGUAGES: {
  code: LanguageCode;
  label: string;
  name: string;
  flag: string;
  domain: string;
}[] = [
  {
    code: 'en',
    label: 'EN',
    name: 'English',
    flag: '/flags/gb.svg',
    domain: 'https://mysleepcalculator.net',
  },
  {
    code: 'es',
    label: 'ES',
    name: 'Español',
    flag: '/flags/es.svg',
    domain: 'https://calculadoraciclosdesueno.com',
  },
  {
    code: 'pl',
    label: 'PL',
    name: 'Polski',
    flag: '/flags/pl.svg',
    domain: 'https://kalkulatorsnu.com',
  },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = window.location.hostname;
    if (host.includes('calculadoraciclosdesueno.com')) setCurrentLang('es');
    else if (host.includes('kalkulatorsnu.com')) setCurrentLang('pl');
    else setCurrentLang('en'); // default to English
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const currentLangData = useMemo(
    () => LANGUAGES.find(l => l.code === currentLang)!,
    [currentLang]
  );
  if (!currentLangData) return null;

  const handleSelect = (langCode: LanguageCode) => {
    if (langCode === currentLang) return;

    const targetLang = LANGUAGES.find(l => l.code === langCode)!;
    const translatedPath = translatePath(currentLang, langCode, pathname) || '/';
    window.location.href = `${targetLang.domain}${translatedPath}`;
  };

  return (
    <div className={styles.languageSwitcher} ref={switcherRef}>
      <button
        className={styles.langButton}
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Switch current language (${currentLangData.name})`}
      >
        <img
          src={currentLangData.flag}
          alt={currentLangData.label}
          width={18}
          height={12}
          loading="lazy"
        />
        <span>{currentLangData.label}</span>
        <span style={{ fontSize: '0.7rem' }}>▾</span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown} role="listbox" aria-label="Language selector">
          {LANGUAGES.map(lang => (
            <li
              key={lang.code}
              className={styles.dropdownItem}
              role="option"
              aria-selected={lang.code === currentLang}
              onClick={() => {
                setIsOpen(false);
                handleSelect(lang.code);
              }}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                width={18}
                height={12}
                loading="lazy"
              />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
