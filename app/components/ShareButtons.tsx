// Instructs Next.js to render this component on the client side (enables interactivity, state, effects, etc.)
'use client';

// React hook for local component state (for showing the "copied" message)
import { useState } from 'react';
// Social network icons from react-icons library
import { FaWhatsapp, FaTelegramPlane, FaFacebookF, FaLink } from 'react-icons/fa';
import { SiX } from 'react-icons/si';  // Twitter X logo
import { ReactNode } from 'react';
// Custom analytics event tracker for Google Analytics
import { trackEvent } from './Analytics';

// The URL to share (your site homepage)
const SHARE_URL = 'https://mysleepcalculator.net';
// Pre-encoded values for including in share links
const encodedUrl = encodeURIComponent(SHARE_URL);
const encodedText = encodeURIComponent('Calculate your sleep cycles here!');

/**
 * ShareButtons component
 * - Displays share buttons for WhatsApp, Telegram, X (Twitter), Facebook, and a Copy Link button
 * - Tracks share clicks with Google Analytics
 * - Shows a popup notification when the link is copied
 */
export default function ShareButtons() {
  // State to show/hide the "link copied" popup message
  const [copied, setCopied] = useState(false);

  // Copies the share URL to the clipboard and shows a temporary popup message
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback: prompt user to manually copy if clipboard API fails
      window.prompt(
        'Could not copy automatically. Please copy the link manually:',
        SHARE_URL
      );
    }
  };


  return (
    <div style={{ marginTop: '1rem', textAlign: 'center', position: 'relative' }}>
      <p style={{ marginBottom: '0.8rem', fontWeight: 'bold', fontSize: '1rem' }}>
        Help others sleep better by sharing:
      </p>

      {/* Social and copy buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>

        {/* WhatsApp */}
        <ShareLink
          href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          icon={<FaWhatsapp />}
          hoverColor="#25D366"
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp"
          onClick={() => trackEvent('share', 'share_click', 'WhatsApp')}
        />

        {/* Telegram */}
        <ShareLink
          href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          icon={<FaTelegramPlane />}
          hoverColor="#0088cc"
          title="Share on Telegram"
          aria-label="Share on Telegram"
          onClick={() => trackEvent('share', 'share_click', 'Telegram')}
        />

        {/* X (Twitter) */}
        <ShareLink
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          icon={<SiX />}
          hoverColor="#000000"
          title="Share on X"
          aria-label="Share on X"
          onClick={() => trackEvent('share', 'share_click', 'X')}
        />

        {/* Facebook */}
        <ShareLink
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          icon={<FaFacebookF />}
          hoverColor="#3b5998"
          title="Share on Facebook"
          aria-label="Share on Facebook"
          onClick={() => trackEvent('share', 'share_click', 'Facebook')}
        />

        {/* Copy Link */}
        <button
          title="Copy link"
          aria-label="Copy link"
          onClick={() => {
            handleCopy();
            trackEvent('share', 'share_click', 'CopyLink');
          }}
          style={{
            ...buttonStyle,
            backgroundColor: '#f4d35e',
            color: '#1a1a1a',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#aaa06b')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f4d35e')}
        >
          <FaLink />
        </button>
      </div>

      {/* Popup message when link is copied */}
      {copied && (
        <div style={popupStyle} role="status" aria-live="polite">
          Link copied!
        </div>
      )}
    </div>
  );
}

/**
 * ShareLink component
 * - Renders a styled anchor link for a social share button
 * - Changes background color on hover
 * - Triggers click analytics
 */
function ShareLink({
  href,
  icon,
  hoverColor,
  title,
  onClick,
  target = '_blank',
  rel = 'noopener noreferrer',
  'aria-label': ariaLabel
}: {
  href: string;
  icon: ReactNode;
  hoverColor: string;
  title: string;
  onClick: () => void;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        ...buttonStyle,
        backgroundColor: '#f4d35e',
        color: '#1a1a1a',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f4d35e')}
    >
      {icon}
    </a>
  );
}


// Common button style for all share buttons
const buttonStyle = {
  padding: '0.6rem',
  borderRadius: '999px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s, transform 0.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Style for the "link copied" popup notification
const popupStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  marginTop: '0.6rem',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#272740',
  color: '#f4d35e',
  padding: '0.5rem 1rem',
  borderRadius: '12px',
  fontSize: '0.9rem',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  opacity: 1,
  transition: 'opacity 0.3s',
};
