// Import the CalculatorInstructions component, which renders the embed instructions and FAQ
import CalculatorInstructions from './CalculatorInstructions';

// Static metadata for SEO (page title, meta description, canonical link)
export const metadata = {
  title: 'Cómo añadir la Calculadora de Sueño a tu página web',
  description: 'Instrucciones rápidas y sencillas para incluir la Calculadora de Ciclos de Sueño gratis en tu web o blog mediante un simple código.',
  alternates: {
    canonical: 'https://calculadoraciclosdesueno.com/incluir-calculadora-sueno-en-mi-web',
  },
};

// Page component for /incluir-calculadora-sueno-en-mi-web, renders the instructions and FAQ
export default function AddCalculatorPage() {
  return <CalculatorInstructions />;
}
