import React from 'react';
import { CheckSquare, ArrowUpRight } from 'lucide-react';

export default function ActionPlan({ actions = [] }) {
  const getBadgeColor = (val, type) => {
    const value = val.toLowerCase();
    if (type === 'impact') {
      if (value === 'high') return { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' };
      if (value === 'medium') return { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' };
      return { bg: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' };
    }
    if (type === 'difficulty' || type === 'effort') {
      if (value === 'easy') return { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' };
      if (value === 'medium') return { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' };
      return { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' };
    }
    // Default fallback
    return { bg: 'var(--border)', color: 'var(--text)' };
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '1rem',
  };

  const cardStyle = {
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '1.25rem',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    backgroundColor: 'var(--bg)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-h)',
    margin: 0,
  };

  const badgeRowStyle = {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  };

  const badgeStyle = (val, type) => {
    const { bg, color } = getBadgeColor(val, type);
    return {
      padding: '0.25rem 0.6rem',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      backgroundColor: bg,
      color: color,
    };
  };

  const descStyle = {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: 'var(--text)',
    margin: 0,
  };

  const stepStyle = {
    fontSize: '0.85rem',
    color: '#6366f1',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    marginTop: '0.25rem',
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
        <CheckSquare size={22} style={{ color: '#6366f1' }} />
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-h)' }}>
          Tactical Action Plan
        </h3>
      </div>

      {actions.length === 0 ? (
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', fontStyle: 'italic', textAlign: 'center' }}>
          No action plan generated. Try submitting the analysis.
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {actions.map((item, index) => (
            <div 
              key={index} 
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
              }}
            >
              <div style={cardHeaderStyle}>
                <h4 style={titleStyle}>{item.title}</h4>
                <div style={badgeRowStyle}>
                  <span style={badgeStyle(item.impact, 'impact')}>Impact: {item.impact}</span>
                  <span style={badgeStyle(item.difficulty, 'difficulty')}>Effort: {item.difficulty}</span>
                  {item.time && (
                    <span style={{ 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: '6px', 
                      fontSize: '0.75rem', 
                      fontWeight: '600', 
                      backgroundColor: 'var(--social-bg)', 
                      color: 'var(--text)' 
                    }}>
                      🕒 {item.time}
                    </span>
                  )}
                </div>
              </div>
              <p style={descStyle}>{item.action}</p>
              {item.focus && (
                <div style={stepStyle}>
                  <span>Focus Area: {item.focus}</span>
                  <ArrowUpRight size={14} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
