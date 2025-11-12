'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/LanguagePrompt.module.css';
import { usePathname } from 'next/navigation';

const LANGUAGES = [
  { code: 'en', label: 'English',  domain: 'https://mysleepcalculator.net' },
  { code: 'es', label: 'Español',  domain: 'https://calculadoraciclosdesueno.com' },
  { code: 'pl', label: 'Polski',   domain: 'https://kalkulatorsnu.com' },
] as const;

type LangCode = typeof LANGUAGES[number]['code'];

const getSiteLangFromHost = (host: string): LangCode => {
  const matched = LANGUAGES.find(lang => host.includes(new URL(lang.domain).hostname));
  return (matched?.code ?? 'en');
};

/** ---------- NEW: suppression helper ---------- */
function shouldSuppressPrompt(pathname: string): boolean {
  try {
    const params = new URLSearchParams(window.location.search);
    const isIframe = window.self !== window.top;                  // embedded (extension or other)
    const fromChromeExt = params.get('utm_source') === 'chrome_ext';
    const noLangPrompt = params.has('no_lang_prompt');            // manual kill switch
    const isWidget = pathname.startsWith('/widget');              // your widget route
    return isIframe || fromChromeExt || noLangPrompt || isWidget;
  } catch {
    return false;
  }
}
/** --------------------------------------------- */

export default function LanguagePrompt() {
  const pathname = usePathname();

  /** ---------- NEW: short-circuit early ---------- */
  if (typeof window !== 'undefined' && shouldSuppressPrompt(pathname)) {
    return null;
  }
  /** --------------------------------------------- */

  const [showPrompt, setShowPrompt] = useState(false);
  const [userLang, setUserLang] = useState<LangCode>('en');

  useEffect(() => {
    // If something external changes and the guard should apply later, double-check once.
    if (shouldSuppressPrompt(pathname)) {
      setShowPrompt(false);
      return;
    }

    const siteLang = getSiteLangFromHost(window.location.hostname);

    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const browserLang: LangCode = (navLang === 'es' ? 'es' : navLang === 'pl' ? 'pl' : 'en');

    const savedLang = localStorage.getItem('preferredLang') as LangCode | null;
    const manuallySwitched = localStorage.getItem('manualLangSwitch');

    setUserLang(browserLang);

    if (manuallySwitched) return;
    if (savedLang === siteLang) return;
    if (browserLang !== siteLang) setShowPrompt(true);
  }, [pathname]);

  const handleSelect = (langCode: LangCode) => {
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
    en: {
      title: 'Choose your preferred language:',
      closeLabel: 'Close language selector',
      buttonLabel: (lang: string) => `Switch to ${lang}`,
    },
    es: {
      title: 'Elige tu idioma preferido:',
      closeLabel: 'Cerrar el selector de idioma',
      buttonLabel: (lang: string) => `Cambiar a ${lang}`,
    },
    pl: {
      title: 'Wybierz preferowany język:',
      closeLabel: 'Zamknij selektor języka',
      buttonLabel: (lang: string) => `Przełącz na: ${lang}`,
    },
  } as const;

  const { title, closeLabel, buttonLabel } = messages[userLang];

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={title}>
      <div className={styles.popup}>
        <div
          className={styles.closeIcon}
          onClick={dismissPrompt}
          role="button"
          aria-label={closeLabel}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') dismissPrompt();
          }}
        >
          &times;
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.langButtons}>
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={styles.langButton}
              aria-label={buttonLabel(lang.label)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
