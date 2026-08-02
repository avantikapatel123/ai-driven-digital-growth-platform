import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Failed to copy to clipboard, trying fallback', err);
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    backgroundColor: copied ? '#10b981' : '#6366f1',
    color: '#ffffff',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: copied ? '0 4px 12px rgba(16, 185, 129, 0.25)' : '0 4px 12px rgba(99, 102, 241, 0.25)',
    transition: 'all 0.2s ease',
  };

  return (
    <button style={buttonStyle} onClick={handleCopy}>
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span>{copied ? 'Copied!' : 'Copy Link'}</span>
    </button>
  );
}
