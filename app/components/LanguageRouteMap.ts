type LanguageCode = 'en' | 'es' | 'pl';

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
  pl: {
    '/': '/',
    '/about': '/about', // change to '/o-nas' only if your folder is renamed
    '/contact': '/kontakt',
    '/learn-to-sleep-better': '/naucz-sie-lepiej-spac',
    '/embed-sleep-calculator': '/dodaj-kalkulator-snu',
    '/privacy-policy': '/polityka-prywatnosci',
    '/terms-and-conditions': '/regulamin',
  },
};

// Helper to translate paths between languages
export function translatePath(
  fromLang: LanguageCode,
  toLang: LanguageCode,
  currentPath: string
): string {
  if (fromLang === toLang) return currentPath;

  // Reverse-map to EN first if needed
  let englishPath = currentPath;

  if (fromLang !== 'en') {
    const match = Object.entries(LanguageRouteMap[fromLang]).find(
      ([enPath, localizedPath]) => localizedPath === currentPath
    );
    englishPath = match?.[0] || '/';
  }

  // Then map EN -> target language
  return LanguageRouteMap[toLang][englishPath] || '/';
}
