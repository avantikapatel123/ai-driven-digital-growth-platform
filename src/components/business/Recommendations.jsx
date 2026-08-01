import React from 'react';
import { Lightbulb, CheckSquare, Zap, Gauge } from 'lucide-react';

export default function Recommendations({ items = [] }) {
  const defaultItems = [
    {
      title: 'Simplify Checkout Form Inputs',
      impact: 'High',
      difficulty: 'Easy',
      time: '3 hours',
      action: 'Reduce form fields from 9 to 4. Integrate Google autofills for address, and add standard SSL security trust badges next to the Pay button.',
    },
    {
      title: 'Rewrite Hero Headline using Benefit-Driven Copy',
      impact: 'High',
      difficulty: 'Medium',
      time: '1 day',
      action: 'Change the current headline to explicitly mention the primary outcome: e.g. "Optimize your digital campaigns & double conversion rates in 30 days, backed by AI."',
    },
    {
      title: 'Add post-checkout sharing rewards',
      impact: 'Medium',
      difficulty: 'Easy',
      time: '2 hours',
      action: 'Offer a 10% coupon code immediately after purchases on a popup, coupled with an active share button for direct customer referrals.',
    }
  ];

  const actualItems = items.length > 0 ? items : defaultItems;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'left',
  };

  const cardStyle = {
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '1.5rem',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '1rem',
    borderBottom: '1px solid var(--border)',
    paddingBottom: '0.75rem',
    marginBottom: '1rem',
  };

  const badgeGroupStyle = {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  };

  const badgeStyle = (type, value) => {
    let color = '#6b7280';
    let bgColor = 'var(--social-bg)';
    
    if (type === 'impact') {
      if (value === 'High') { color = '#10b981'; bgColor = 'rgba(16, 185, 129, 0.1)'; }
      else { color = '#3b82f6'; bgColor = 'rgba(59, 130, 246, 0.1)'; }
    } else if (type === 'difficulty') {
      if (value === 'Easy') { color = '#10b981'; bgColor = 'rgba(16, 185, 129, 0.1)'; }
      else if (value === 'Medium') { color = '#f59e0b'; bgColor = 'rgba(245, 158, 11, 0.1)'; }
      else { color = '#ef4444'; bgColor = 'rgba(239, 68, 68, 0.1)'; }
    }

    return {
      padding: '0.25rem 0.5rem',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '700',
      color,
      backgroundColor: bgColor,
    };
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-h)', margin: '0 0 0.5rem 0' }}>
        Strategic Growth Recommendations
      </h3>

      {actualItems.map((item, idx) => (
        <div key={idx} style={cardStyle}>
          <div style={headerStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lightbulb size={18} style={{ color: '#f59e0b' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: '750', color: 'var(--text-h)', margin: 0 }}>
                {item.title}
              </h4>
            </div>
            
            <div style={badgeGroupStyle}>
              <span style={badgeStyle('impact', item.impact)}>Impact: {item.impact}</span>
              <span style={badgeStyle('difficulty', item.difficulty)}>Difficulty: {item.difficulty}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text)', alignSelf: 'center' }}>Time: {item.time}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
            <CheckSquare size={16} style={{ color: 'var(--accent)', marginTop: '0.2rem', flexShrink: 0 }} />
            <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>
              <strong>Action Item:</strong> {item.action}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
