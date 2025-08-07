'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/LanguagePrompt.module.css';
import { usePathname } from 'next/navigation';

const LANGUAGES = [
  {
    code: 'en',
    label: 'English',
    domain: 'https://mysleepcalculator.net',
  },
  {
    code: 'es',
    label: 'Español',
    domain: 'https://calculadoraciclosdesueno.com',
  },
];

const getSiteLangFromHost = (host: string): string => {
  const matched = LANGUAGES.find(lang => host.includes(new URL(lang.domain).hostname));
  return matched?.code ?? 'en';
};

export default function LanguagePrompt() {
  const pathname = usePathname();
  const [showPrompt, setShowPrompt] = useState(false);
  const [userLang, setUserLang] = useState('en');

  useEffect(() => {
    const siteLang = getSiteLangFromHost(window.location.hostname);
    const browserLang = navigator.language.slice(0, 2) as 'en' | 'es';
    const savedLang = localStorage.getItem('preferredLang');
    const manuallySwitched = localStorage.getItem('manualLangSwitch');

    setUserLang(browserLang === 'es' ? 'es' : 'en');

    if (manuallySwitched) return;
    if (savedLang === siteLang) return;
    if (browserLang !== siteLang) setShowPrompt(true);
  }, []);

  const handleSelect = (langCode: string) => {
    const lang = LANGUAGES.find(l => l.code === langCode);
    if (!lang) return;

    localStorage.setItem('preferredLang', langCode);
    localStorage.setItem('manualLangSwitch', 'true');
    window.location.replace(`${lang.domain}${pathname}`);
  };

  const dismissPrompt = () => {
    localStorage.setItem('manualLangSwitch', 'true');
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  const messages = {
    en: 'Choose your preferred language:',
    es: 'Elige tu idioma preferido:',
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div
          className={styles.closeIcon}
          onClick={dismissPrompt}
          role="button"
          aria-label="Cerrar el selector de idioma"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') dismissPrompt();
          }}
        >
          &times;
        </div>
        <p className={styles.title}>
          {messages[userLang as keyof typeof messages] || messages.en}
        </p>
        <div className={styles.langButtons}>
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={styles.langButton}
              aria-label={`Cambiar a ${lang.label}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
