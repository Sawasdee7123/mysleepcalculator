type LanguageCode = 'en' | 'es';

export const LanguageRouteMap: Record<LanguageCode, Record<string, string>> = {
  en: {
    '/': '/',
    '/about': '/about',
    '/contact': '/contact',
    '/learn-to-sleep-better': '/learn-to-sleep-better',
    '/embed-sleep-calculator': '/embed-sleep-calculator',
    '/privacy-policy': '/privacy-policy',
    '/terms-and-conditions': '/terms-and-conditions',
  },
  es: {
    '/': '/',
    '/about': '/about',
    '/contact': '/contacto',
    '/learn-to-sleep-better': '/como-dormir-mejor',
    '/embed-sleep-calculator': '/incluir-calculadora-sueno-en-mi-web',
    '/privacy-policy': '/privacidad',
    '/terms-and-conditions': '/terminos',
  },
};

// Helper to translate paths between languages
export function translatePath(
  fromLang: LanguageCode,
  toLang: LanguageCode,
  currentPath: string
): string {
  if (fromLang === toLang) return currentPath;

  // If current language is not English, try to reverse-map to English first
  let englishPath = currentPath;

  if (fromLang !== 'en') {
    const match = Object.entries(LanguageRouteMap[fromLang]).find(
      ([enPath, localizedPath]) => localizedPath === currentPath
    );
    englishPath = match?.[0] || '/';
  }

  // Now use that English path to get the translation
  return LanguageRouteMap[toLang][englishPath] || '/';
}
