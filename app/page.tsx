import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { alternatesForEnPath } from './components/hreflang';

export const generateMetadata = (): Metadata => ({
  alternates: alternatesForEnPath('/'),
});

export default function Page() {
  return <HomeClient />;
}
