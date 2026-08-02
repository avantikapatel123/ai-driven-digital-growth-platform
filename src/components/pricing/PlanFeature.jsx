import React from 'react';
import { Check, X } from 'lucide-react';

export default function PlanFeature({ text, included = true }) {
  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.92rem',
    color: included ? 'var(--text-h)' : 'var(--text)',
    textDecoration: included ? 'none' : 'line-through',
    opacity: included ? 1 : 0.5,
    margin: '0.6rem 0',
  };

  const iconStyle = {
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: '50%',
    backgroundColor: included ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.05)',
    color: included ? '#10b981' : '#ef4444',
  };

  return (
    <div style={rowStyle}>
      <span style={iconStyle}>
        {included ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
      </span>
      <span>{text}</span>
    </div>
  );
}
