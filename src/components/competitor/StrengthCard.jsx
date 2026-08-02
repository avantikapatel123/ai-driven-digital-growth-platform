import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function StrengthCard({ items = [] }) {
  const cardStyle = {
    backgroundColor: 'rgba(16, 185, 129, 0.05)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    borderRadius: '14px',
    padding: '1.5rem',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    height: '100%',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#10b981',
    fontWeight: '700',
    fontSize: '1.1rem',
    margin: 0,
  };

  const listStyle = {
    paddingLeft: '1.25rem',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  };

  const itemStyle = {
    color: 'var(--text)',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  };

  return (
    <div style={cardStyle}>
      <h3 style={headerStyle}>
        <ShieldCheck size={20} />
        Strengths (Competitor Advantages)
      </h3>
      {items.length === 0 ? (
        <p style={{ color: 'var(--text)', fontSize: '0.9rem', fontStyle: 'italic' }}>No strengths identified.</p>
      ) : (
        <ul style={listStyle}>
          {items.map((item, index) => (
            <li key={index} style={itemStyle}>
              {typeof item === 'string' ? item : (
                <>
                  <strong style={{ color: 'var(--text-h)' }}>{item.title}: </strong>
                  {item.desc}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
