// NO 'use client'
import { LanguageRouteMap } from './LanguageRouteMap';

type Lang = 'en' | 'es' | 'pl';

const SITE = {
  en: 'https://mysleepcalculator.net',
  es: 'https://calculadoraciclosdesueno.com',
  pl: 'https://kalkulatorsnu.com',
} as const;

/** Public helpers used by pages */
export function alternatesForEnPath(enPath: string) {
  return buildAlternates('en', enPath);
}
export function alternatesForEsPath(esPath: string) {
  const enPath = resolveEnKey('es', esPath);
  return buildAlternates('es', enPath);
}
export function alternatesForPlPath(plPath: string) {
  const enPath = resolveEnKey('pl', plPath);
  return buildAlternates('pl', enPath);
}

/** Core builder — always emit en, es, pl + a consistent x-default (EN) */
function buildAlternates(origin: Lang, enPath: string) {
  const esPath = LanguageRouteMap.es[enPath];
  const plPath = LanguageRouteMap.pl[enPath];

  if (!esPath) throw new Error(`Missing ES mapping for EN path "${enPath}".`);
  if (!plPath) throw new Error(`Missing PL mapping for EN path "${enPath}".`);

  const canonicalPath =
    origin === 'en' ? enPath : origin === 'es' ? esPath : plPath;

  return {
    canonical: `${SITE[origin]}${canonicalPath}`,
    languages: {
      en: `${SITE.en}${enPath}`,
      es: `${SITE.es}${esPath}`,
      pl: `${SITE.pl}${plPath}`,
      'x-default': `${SITE.en}${enPath}`, // consistent everywhere
    },
  };
}

/** Find the EN key (object key) by a localized path */
function resolveEnKey(lang: Exclude<Lang, 'en'>, localizedPath: string): string {
  const pair = Object.entries(LanguageRouteMap[lang]).find(
    ([, loc]) => loc === localizedPath
  );
  if (!pair) {
    throw new Error(
      `Could not resolve EN key for ${lang.toUpperCase()} path "${localizedPath}". Check LanguageRouteMap.`
    );
  }
  return pair[0]; // EN key
}
