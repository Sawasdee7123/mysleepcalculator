'use client';

import { useEffect, useState } from 'react';

const COOKIE_NAME = 'cookie_consent';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  // Show banner if not accepted
  useEffect(() => {
    const consent = typeof window !== 'undefined' ? localStorage.getItem(COOKIE_NAME) : null;
    setVisible(!consent);
  }, []);

  // Accept cookies
  const handleAccept = () => {
    localStorage.setItem(COOKIE_NAME, 'accepted');
    setVisible(false);
  };

  // Decline cookies (still sets flag, disables tracking)
  const handleDecline = () => {
    localStorage.setItem(COOKIE_NAME, 'declined');
    setVisible(false);
    // TODO: Disable analytics/ads if you implement this logic
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,
      background: 'rgba(30, 30, 30, 0.95)',
      color: '#f4d35e',
      padding: '1.2rem 1rem 1.2rem 1rem',
      boxShadow: '0 -4px 24px 0 rgba(0,0,0,0.17)',
      textAlign: 'center',
    }}>
      <span style={{ fontSize: '1rem', color: '#fff', marginRight: '0.7rem' }}>
        Utilizamos cookies propias y de terceros para analizar el tráfico y mostrar publicidad relevante. Puedes aceptar o rechazar el uso de cookies no esenciales.
        Consulta nuestra{' '}
        <a href="/privacidad" style={{ color: '#f4d35e', textDecoration: 'underline' }}>
          Política de Privacidad
        </a>.
      </span>
      <button
        onClick={handleAccept}
        style={{
          margin: '0 0.5rem',
          padding: '0.5rem 1.1rem',
          background: '#f4d35e',
          color: '#1e1e1e',
          border: 'none',
          borderRadius: '1.4rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(244,211,94,0.18)'
        }}
      >
        Aceptar
      </button>
      <button
        onClick={handleDecline}
        style={{
          margin: '0 0.5rem',
          padding: '0.5rem 1.1rem',
          background: 'transparent',
          color: '#f4d35e',
          border: '1px solid #f4d35e',
          borderRadius: '1.4rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Rechazar
      </button>
    </div>
  );
}
