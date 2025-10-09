// NO 'use client'
import { LanguageRouteMap } from './LanguageRouteMap';

const SITE_EN = 'https://mysleepcalculator.net';
const SITE_ES = 'https://calculadoraciclosdesueno.com';
const SITE_PL = 'https://kalkulatorsnu.com';

/**
 * Build <alternates> for a given EN path that exists in LanguageRouteMap.en.
 * Example: alternatesForEnPath('/about')
 */
export function alternatesForEnPath(enPath: string) {
  const esPath = LanguageRouteMap.es[enPath];
  const plPath = LanguageRouteMap.pl?.[enPath]; // optional

  if (!esPath) {
    throw new Error(`Missing ES mapping for EN path "${enPath}" in LanguageRouteMap.`);
  }

  const languages: Record<string, string> = {
    en: `${SITE_EN}${enPath}`,
    es: `${SITE_ES}${esPath}`,
    'x-default': `${SITE_EN}${enPath}`,
  };
  if (plPath) languages.pl = `${SITE_PL}${plPath}`;

  return {
    canonical: `${SITE_EN}${enPath}`,
    languages,
  };
}

/**
 * Build <alternates> for a given ES path that exists in LanguageRouteMap.es.
 * Example: alternatesForEsPath('/incluir-calculadora-sueno-en-mi-web')
 */
export function alternatesForEsPath(esPath: string) {
  // Find EN key that maps to this ES path
  const enPath = Object.keys(LanguageRouteMap.en).find(
    (key) => LanguageRouteMap.es[key] === esPath
  );

  if (!enPath) {
    throw new Error(`Could not resolve EN key for ES path "${esPath}". Check LanguageRouteMap.`);
  }

  const esMapped = LanguageRouteMap.es[enPath];
  const plPath = LanguageRouteMap.pl?.[enPath];

  const languages: Record<string, string> = {
    en: `${SITE_EN}${enPath}`,
    es: `${SITE_ES}${esMapped}`,
    'x-default': `${SITE_ES}${esMapped}`,
  };
  if (plPath) languages.pl = `${SITE_PL}${plPath}`;

  return {
    canonical: `${SITE_ES}${esMapped}`,
    languages,
  };
}

/**
 * Build <alternates> for a given PL path that exists in LanguageRouteMap.pl.
 * Example: alternatesForPlPath('/naucz-sie-lepiej-spac')
 */
export function alternatesForPlPath(plPath: string) {
  // Find EN key that maps to this PL path
  const enPath = Object.keys(LanguageRouteMap.en).find(
    (key) => LanguageRouteMap.pl[key] === plPath
  );

  if (!enPath) {
    throw new Error(`Could not resolve EN key for PL path "${plPath}". Check LanguageRouteMap.`);
  }

  const esPath = LanguageRouteMap.es[enPath];
  const plMapped = LanguageRouteMap.pl[enPath];

  const languages: Record<string, string> = {
    en: `${SITE_EN}${enPath}`,
    es: `${SITE_ES}${esPath}`,
    pl: `${SITE_PL}${plMapped}`,
    'x-default': `${SITE_PL}${plMapped}`,
  };

  return {
    canonical: `${SITE_PL}${plMapped}`,
    languages,
  };
}
