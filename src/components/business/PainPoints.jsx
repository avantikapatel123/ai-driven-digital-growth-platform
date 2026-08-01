import React from 'react';
import { AlertCircle, AlertTriangle, Info, MapPin } from 'lucide-react';

export default function PainPoints({ points = [] }) {
  const defaultPoints = [
    {
      title: 'Checkout Friction and Form Abandonment',
      severity: 'high',
      location: 'Checkout Page (/checkout)',
      desc: 'Users are dropping off during input forms. Excessively long verification steps and lack of visual security badges are discouraging users from final checkout.',
    },
    {
      title: 'Vague Value Proposition above the Fold',
      severity: 'medium',
      location: 'Homepage Hero section',
      desc: 'The headline is too generic and fails to explain what the product does in under 5 seconds. This causes high bounce rates for inbound cold traffic.',
    },
    {
      title: 'Missing Referral Loops',
      severity: 'low',
      location: 'Post-purchase page & dashboard',
      desc: 'There is no viral growth mechanism. Customer satisfaction is high, but there is no structured incentive or AI chatbot to prompt them to invite friends.',
    }
  ];

  const actualPoints = points.length > 0 ? points : defaultPoints;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'left',
  };

  const cardStyle = (severity) => {
    const borders = {
      high: '1px solid rgba(239, 68, 68, 0.3)',
      medium: '1px solid rgba(245, 158, 11, 0.3)',
      low: '1px solid rgba(59, 130, 246, 0.3)',
    };
    return {
      backgroundColor: 'var(--bg)',
      border: borders[severity] || '1px solid var(--border)',
      borderRadius: '12px',
      padding: '1.25rem 1.5rem',
      position: 'relative',
    };
  };

  const badgeStyle = (severity) => {
    const bgColors = {
      high: 'rgba(239, 68, 68, 0.1)',
      medium: 'rgba(245, 158, 11, 0.1)',
      low: 'rgba(59, 130, 246, 0.1)',
    };
    const textColors = {
      high: '#ef4444',
      medium: '#f59e0b',
      low: '#3b82f6',
    };
    return {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      padding: '0.25rem 0.6rem',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '700',
      color: textColors[severity] || '#6b7280',
      backgroundColor: bgColors[severity] || 'var(--border)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    };
  };

  const getIcon = (severity) => {
    if (severity === 'high') return <AlertCircle size={16} />;
    if (severity === 'medium') return <AlertTriangle size={16} />;
    return <Info size={16} />;
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-h)',
    margin: 0,
  };

  const locationStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontSize: '0.8rem',
    color: 'var(--text)',
    marginTop: '0.5rem',
  };

  const descStyle = {
    fontSize: '0.9rem',
    color: 'var(--text)',
    lineHeight: '1.5',
    marginTop: '0.75rem',
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-h)', margin: '0 0 0.5rem 0' }}>
        Identified Conversion Leaks & Pain Points
      </h3>
      {actualPoints.map((pt, idx) => (
        <div key={idx} style={cardStyle(pt.severity)}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h4 style={titleStyle}>{pt.title}</h4>
            <div style={badgeStyle(pt.severity)}>
              {getIcon(pt.severity)}
              <span>{pt.severity} Priority</span>
            </div>
          </div>
          
          <div style={locationStyle}>
            <MapPin size={14} style={{ color: 'var(--accent)' }} />
            <span>Target Area: <strong>{pt.location}</strong></span>
          </div>

          <p style={descStyle}>{pt.desc}</p>
        </div>
      ))}
    </div>
  );
}
