import React from 'react';

export default function PricingToggle({ isAnnual, onToggle }) {
  const containerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'var(--social-bg)',
    padding: '0.35rem',
    borderRadius: '30px',
    border: '1px solid var(--border)',
    position: 'relative',
    margin: '1.5rem auto 3rem auto',
  };

  const buttonStyle = (active) => ({
    padding: '0.6rem 1.5rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: active ? '#6366f1' : 'transparent',
    color: active ? '#ffffff' : 'var(--text)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1,
  });

  const badgeStyle = {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    color: '#10b981',
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '0.25rem 0.5rem',
    borderRadius: '10px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={containerStyle}>
        <button 
          style={buttonStyle(!isAnnual)} 
          onClick={() => onToggle(false)}
        >
          Monthly
        </button>
        <button 
          style={buttonStyle(isAnnual)} 
          onClick={() => onToggle(true)}
        >
          Annually
        </button>
      </div>
      <span style={badgeStyle}>
        🎉 Save 20%
      </span>
    </div>
  );
}
