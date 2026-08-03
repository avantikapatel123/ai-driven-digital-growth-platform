import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function ContactCTA() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const containerStyle = {
    padding: 'var(--section-padding-y) var(--section-padding-x)',
    maxWidth: '1200px',
    margin: '0 auto',
    borderTop: '1px solid var(--border)',
  };

  const bannerStyle = {
    background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)',
    border: '1px solid rgba(99, 102, 241, 0.25)',
    borderRadius: '24px',
    padding: 'var(--page-padding-y) var(--page-padding-x)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: hovered 
      ? '0 20px 40px rgba(99, 102, 241, 0.15), 0 0 30px rgba(168, 85, 247, 0.1)' 
      : '0 10px 30px rgba(0,0,0,0.15)',
    transform: hovered ? 'translateY(-3px)' : 'none',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const glowStyle = {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 60%)',
    pointerEvents: 'none',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '650px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.2',
    marginBottom: '1.25rem',
    letterSpacing: '-0.8px',
  };

  const textStyle = {
    fontSize: '1.1rem',
    color: '#cbd5e1',
    lineHeight: '1.65',
    marginBottom: '2.5rem',
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    backgroundColor: '#ffffff',
    color: '#1e1b4b',
    border: 'none',
    padding: '0.9rem 2rem',
    fontSize: '1rem',
    fontWeight: '700',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transform: hovered ? 'scale(1.02)' : 'scale(1)',
    transition: 'all 0.3s ease',
  };

  const decoratorStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#a855f7',
    top: '2rem',
    right: '2.5rem',
    opacity: '0.65',
  };

  return (
    <div style={containerStyle}>
      <div 
        style={bannerStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={glowStyle}></div>
        
        <div style={decoratorStyle}>
          <Sparkles size={16} />
          <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Always Online</span>
        </div>

        <div style={contentStyle}>
          <h2 style={titleStyle}>Ready to Supercharge Your Digital Growth?</h2>
          <p style={textStyle}>
            Get a tailored analysis of your product flows, or ask us about custom integrations to suit your scale. Our support specialists and AI developers are here to help.
          </p>
          <button 
            style={buttonStyle}
            onClick={() => navigate('/contact')}
          >
            <MessageSquare size={18} />
            Contact Our Team
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
