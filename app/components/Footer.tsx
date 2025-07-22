'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        padding: '1.2rem 0 0.9rem 0',
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderTop: '1px solid rgba(244, 211, 94, 0.2)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        color: '#fff',
        fontSize: '1rem',
      }}
    >
      <nav aria-label="Pie de página">
        <div className="footer-columns">
          <div className="footer-col">
            <div className="footer-title">Web</div>
            <Link href="/" style={footerLink}>Calculadora</Link>
            <Link href="/como-dormir-mejor" style={footerLink}>Cómo Dormir Mejor</Link>
            <Link href="/incluir-calculadora-sueno-en-mi-web" style={footerLink}>Añadir la Calculadora</Link>
            <Link href="/about" style={footerLink}>Sobre Nosotros</Link>
          </div>
          <div className="footer-col">
            <div className="footer-title">Legal</div>
            <Link href="/privacidad" style={footerLink}>Privacidad</Link>
            <Link href="/terminos" style={footerLink}>Términos y Condiciones</Link>
            <Link href="/contacto" style={footerLink}>Contacto</Link>
          </div>
        </div>
      </nav>
      <small style={{
        opacity: 0.7,
        fontSize: '0.93rem',
        display: 'block',
        textAlign: 'center',
        marginTop: '0.7rem'
      }}>
        © 2025 Calculadora de Sueño
      </small>
      <style jsx>{`
        .footer-columns {
          display: flex;
          justify-content: center;
          gap: 2.3rem;
          max-width: 400px;
          margin: 0 auto;
          padding: 0;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.18rem;
          min-width: 140px;
        }
        .footer-title {
          font-size: 1.02rem;
          font-weight: 700;
          color: #ffe082;
          margin-bottom: 0.25rem;
          margin-top: 0.04rem;
          letter-spacing: 0.2px;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        @media (max-width: 700px) {
          .footer-columns {
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
          .footer-col {
            align-items: center;
            min-width: unset;
          }
          .footer-title {
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
}

const footerLink = {
  color: '#f4d35e',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  marginBottom: '0.13rem',
  transition: 'color 0.15s',
};
