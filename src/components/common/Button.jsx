import React from 'react';

export default function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  disabled = false, 
  loading = false,
  style = {}
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    borderRadius: '10px',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    transition: 'all 0.2s ease',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  };

  const variants = {
    primary: {
      backgroundColor: '#6366f1',
      color: '#ffffff',
      border: 'none',
      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--text-h)',
      border: '1px solid var(--border)',
    },
    danger: {
      backgroundColor: '#ef4444',
      color: '#ffffff',
      border: 'none',
    }
  };

  const buttonStyle = {
    ...baseStyle,
    ...variants[variant],
    ...style
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={buttonStyle}
    >
      {loading ? (
        <span style={{ display: 'inline-block', width: '1rem', height: '1rem', border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      ) : null}
      {children}
    </button>
  );
}
