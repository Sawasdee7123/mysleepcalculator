// Instructs Next.js to render this page on the client side (enables interactive calculator)
'use client';

import styles from './page.module.css'; // Import CSS module for scoped styles
import SleepCalculator from "./components/SleepCalculator"; // Import the main SleepCalculator component

/**
 * Home component (main landing page)
 * - Shows intro text and renders the interactive SleepCalculator
 * - Styled with page.module.css for responsive layout
 */
export default function Home() {
  return (
    <main className="main-style" aria-label="Página principal de la Calculadora de Sueño" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Main SEO-friendly H1 */}
      <h1 className={styles.title}>
        Calcula tus ciclos de sueño para despertar renovado
      </h1>

      {/* Intro Paragraph */}
      <p className={styles.description}>
        Descubre a qué hora debes dormir o despertar para completar ciclos de sueño saludables.
        Nuestra calculadora de sueño te ayuda a mejorar tu descanso y bienestar.
      </p>

      {/* Sleep Calculator goes here */}
      <SleepCalculator />
    </main>
  );
}
