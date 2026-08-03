import React from 'react';
import { MessageSquareCode } from 'lucide-react';

export default function WhatsAppButton({ 
  phone = '15550192834', 
  text = 'Hi GrowthPulse, I\'d like to learn more about the AI digital growth tools.', 
  floating = false 
}) {
  const encodedText = encodeURIComponent(text);
  const waUrl = `https://wa.me/${phone}?text=${encodedText}`;

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    backgroundColor: '#25D366',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '0.85rem 1.75rem',
    fontSize: '0.95rem',
    fontWeight: '700',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.25)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ...(floating && {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 1000,
      borderRadius: '50px',
      padding: '1rem 1.5rem',
      boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
    })
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
    e.currentTarget.style.boxShadow = floating 
      ? '0 12px 28px rgba(37, 211, 102, 0.45)' 
      : '0 8px 24px rgba(37, 211, 102, 0.35)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = floating 
      ? '0 8px 24px rgba(37, 211, 102, 0.35)' 
      : '0 6px 20px rgba(37, 211, 102, 0.25)';
  };

  return (
    <a 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MessageSquareCode size={20} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
