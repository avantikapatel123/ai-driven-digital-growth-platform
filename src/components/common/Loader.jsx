import React from 'react';

export default function Loader({ size = 'medium', message = 'Loading insights...' }) {
  const getDimensions = () => {
    if (size === 'small') return '24px';
    if (size === 'large') return '64px';
    return '40px';
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    gap: '1rem',
    width: '100%',
  };

  const spinnerStyle = {
    width: getDimensions(),
    height: getDimensions(),
    border: '3px solid var(--border)',
    borderTop: '3px solid var(--accent)',
    borderRadius: '50%',
    animation: 'spin 1s cubic-bezier(0.55, 0.15, 0.45, 0.85) infinite',
  };

  const textStyle = {
    fontSize: size === 'small' ? '0.8rem' : '0.95rem',
    fontWeight: '600',
    color: 'var(--text)',
    letterSpacing: '0.02em',
  };

  return (
    <div style={containerStyle}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
      <div style={spinnerStyle} />
      {message && <span style={textStyle}>{message}</span>}
    </div>
  );
}
