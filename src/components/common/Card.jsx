import React from 'react';

export default function Card({ children, style = {}, className = '' }) {
  const cardStyle = {
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: 'var(--shadow)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxSizing: 'border-box',
    width: '100%',
    ...style
  };

  return (
    <div className={className} style={cardStyle}>
      {children}
    </div>
  );
}
