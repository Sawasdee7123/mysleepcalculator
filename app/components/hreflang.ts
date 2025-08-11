// NO 'use client'
import { LanguageRouteMap } from './LanguageRouteMap';

const SITE_EN = 'https://mysleepcalculator.net';
const SITE_ES = 'https://calculadoraciclosdesueno.com';

/**
 * Build <alternates> for a given EN path that exists in LanguageRouteMap.en.
 * Example: alternatesForEnPath('/about')
 */
export function alternatesForEnPath(enPath: string) {
  const esPath = LanguageRouteMap.es[enPath];
  if (!esPath) {
    throw new Error(
      `Missing ES mapping for EN path "${enPath}" in LanguageRouteMap.`
    );
  }
  return {
    canonical: `${SITE_EN}${enPath}`,
    languages: {
      en: `${SITE_EN}${enPath}`,
      es: `${SITE_ES}${esPath}`,
      'x-default': `${SITE_EN}${enPath}`,
    },
  };
}
