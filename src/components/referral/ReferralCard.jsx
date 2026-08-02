import React from 'react';
import Card from '../common/Card';

export default function ReferralCard({ title, subtitle, children, style = {} }) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    textAlign: 'left',
    height: '100%',
    ...style
  };

  const headerStyle = {
    marginBottom: '1rem',
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-h)',
    margin: 0,
  };

  const subtitleStyle = {
    fontSize: '0.8rem',
    color: 'var(--text)',
    margin: '0.25rem 0 0 0',
  };

  return (
    <Card style={containerStyle}>
      {(title || subtitle) && (
        <div style={headerStyle}>
          {title && <h3 style={titleStyle}>{title}</h3>}
          {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        </div>
      )}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </Card>
  );
}
