import React from 'react';

export default function SectionTitle({ title, subtitle, align = 'center', badge }) {
  const containerStyle = {
    textAlign: align,
    marginBottom: '2.5rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: align === 'center' ? 'center' : 'flex-start',
    gap: '0.5rem',
  };

  const badgeStyle = {
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#6366f1',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    marginBottom: '0.25rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--text-h)',
    margin: 0,
    letterSpacing: '-0.5px',
    lineHeight: '1.2',
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: 'var(--text)',
    maxWidth: '600px',
    margin: 0,
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      {badge && <span style={badgeStyle}>{badge}</span>}
      <h2 style={titleStyle}>{title}</h2>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
    </div>
  );
}
