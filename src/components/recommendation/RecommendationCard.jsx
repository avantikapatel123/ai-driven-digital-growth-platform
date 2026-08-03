import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, Clock, Zap } from 'lucide-react';
import Card from '../common/Card';

export default function RecommendationCard({ recommendation, onComplete }) {
  const [completed, setCompleted] = useState(false);

  const {
    id,
    title = 'Optimize Mobile Layout Navigation',
    description = 'Simplify your sidebar menu to a 3-tap layout. Reducing navigation friction boosts mobile conversion by up to 18%.',
    category = 'User Experience',
    priority = 'High',
    impact = '+18% Conversions',
    effort = '3 hours',
    actionText = 'View Implementation Guide'
  } = recommendation || {};

  const handleCompleteClick = (e) => {
    e.stopPropagation();
    setCompleted(prev => !prev);
    if (onComplete) onComplete(id);
  };

  const getPriorityColor = (lvl) => {
    const val = lvl.toLowerCase();
    if (val === 'high') return { bg: 'rgba(239, 68, 68, 0.1)', text: '#ef4444' };
    if (val === 'medium') return { bg: 'rgba(245, 158, 11, 0.1)', text: '#f59e0b' };
    return { bg: 'rgba(99, 102, 241, 0.1)', text: '#6366f1' };
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    textAlign: 'left',
    position: 'relative',
    opacity: completed ? 0.6 : 1,
    transition: 'all 0.3s ease',
    border: completed ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border)',
    backgroundColor: completed ? 'rgba(16, 185, 129, 0.02)' : 'var(--bg)',
  };

  const badgeRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const categoryStyle = {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#6366f1',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const pcolor = getPriorityColor(priority);
  const priorityStyle = {
    fontSize: '0.7rem',
    fontWeight: '800',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    backgroundColor: pcolor.bg,
    color: pcolor.text,
    textTransform: 'uppercase',
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: completed ? 'var(--text)' : 'var(--text-h)',
    margin: 0,
    textDecoration: completed ? 'line-through' : 'none',
  };

  const descStyle = {
    fontSize: '0.85rem',
    color: 'var(--text)',
    lineHeight: '1.5',
    margin: 0,
  };

  const metaRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '0.8rem',
    color: 'var(--text)',
    borderTop: '1px solid var(--border)',
    paddingTop: '0.75rem',
    marginTop: '0.25rem',
    flexWrap: 'wrap',
  };

  const actionRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5rem',
  };

  const checkButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: completed ? '#10b981' : 'var(--text)',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '0.25rem 0.5rem',
    borderRadius: '6px',
    transition: 'all 0.2s',
  };

  return (
    <Card 
      style={containerStyle}
      onMouseEnter={(e) => {
        if (!completed) e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        if (!completed) e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={badgeRowStyle}>
        <span style={categoryStyle}>{category}</span>
        <span style={priorityStyle}>{priority} Priority</span>
      </div>

      <h4 style={titleStyle}>{title}</h4>
      <p style={descStyle}>{description}</p>

      <div style={metaRowStyle}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#10b981', fontWeight: '700' }}>
          <Zap size={14} />
          {impact}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Clock size={14} />
          {effort}
        </span>
      </div>

      <div style={actionRowStyle}>
        <button 
          style={checkButtonStyle}
          onClick={handleCompleteClick}
          onMouseEnter={(e) => {
            if (!completed) e.currentTarget.style.color = '#10b981';
          }}
          onMouseLeave={(e) => {
            if (!completed) e.currentTarget.style.color = 'var(--text)';
          }}
        >
          <CheckCircle size={16} fill={completed ? '#10b981' : 'transparent'} color={completed ? '#ffffff' : 'currentColor'} />
          <span>{completed ? 'Implemented' : 'Mark as Done'}</span>
        </button>

        {!completed && (
          <span style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.1rem', cursor: 'pointer' }}>
            <span>{actionText}</span>
            <ArrowUpRight size={14} />
          </span>
        )}
      </div>
    </Card>
  );
}
