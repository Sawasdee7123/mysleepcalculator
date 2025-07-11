// Instructs Next.js to render this component on the client side (for useEffect and direct DOM manipulation)
'use client';

// Import React's useEffect hook for running side effects after render
import { useEffect } from 'react';

/**
 * StarBackground component
 * - Dynamically creates twinkling stars in the background when mounted.
 * - Cleans up stars when the component is unmounted.
 * - Uses direct DOM manipulation (document.body) for maximum flexibility.
 */
export default function StarBackground() {
  useEffect(() => {
    // Decide how many stars to create (between 50 and 80)
    const starCount = Math.floor(50 + Math.random() * 31);
    const body = document.body;

    // Remove any existing stars to prevent duplicates
    document.querySelectorAll('.random-star').forEach(star => star.remove());

    // Create new stars and add to the DOM
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'random-star';
      star.style.position = 'fixed'; // Stay fixed relative to viewport

      // Randomize star size (1px to 3px)
      const size = 1 + Math.random() * 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.borderRadius = '50%';
      star.style.backgroundColor = 'white';

      // Randomize position anywhere on screen
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;

      // Vary opacity for realism
      star.style.opacity = `${0.2 + Math.random() * 0.8}`;

      // Animate "twinkle" effect with custom CSS animation
      const duration = 2 + Math.random() * 4;
      star.style.animation = `sparkle ${duration}s infinite alternate`;
      star.style.animationDelay = `${Math.random() * duration}s`;

      // Prevent mouse interactions
      star.style.pointerEvents = 'none';
      // Ensure stars are always behind everything else
      star.style.zIndex = '-1';

      // Add star to the <body>
      body.appendChild(star);
    }

    // Cleanup: remove stars when component is unmounted or re-mounted
    return () => {
      document.querySelectorAll('.random-star').forEach(star => star.remove());
    };
  }, []); // Run only once after mount

  // No visual component to render (all handled via DOM)
  return null;
}
