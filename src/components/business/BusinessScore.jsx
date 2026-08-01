import React from 'react';
import { Target, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function BusinessScore({ score = 72, categories = {} }) {
 
  const defaultCategories = {
    seo: 65,
    ux: 78,
    copy: 60,
    retention: 85,
    ...categories
  };

  const getScoreColor = (val) => {
    if (val >= 80) return '#10b981';
    if (val >= 50) return '#f59e0b'; 
    return '#ef4444'; // Red
  };

  const overallColor = getScoreColor(score);

  const containerStyle = {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '1.5rem',
  };

  const leftColStyle = {
    flex: '1 1 200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rightColStyle = {
    flex: '2 2 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
  };


  const circleSize = 140;
  const strokeWidth = 12;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const scoreTextContainerStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const ratingLabel = () => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Moderate';
    return 'Critical Action';
  };

  return (
    <div style={containerStyle}>
      {/* Circle Ring Gauge */}
      <div style={leftColStyle}>
        <div style={{ position: 'relative', width: circleSize, height: circleSize, display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
          <svg width={circleSize} height={circleSize} style={{ transform: 'rotate(-90deg)' }}>
            {/* Background ring */}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="transparent"
              stroke="var(--border)"
              strokeWidth={strokeWidth}
            />
            {/* Foreground progress */}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="transparent"
              stroke={overallColor}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
          </svg>
          <div style={scoreTextContainerStyle}>
            <span style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--text-h)' }}>{score}</span>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: overallColor, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {ratingLabel()}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Breakdown */}
      <div style={rightColStyle}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-h)', margin: '0 0 0.5rem 0', textAlign: 'left' }}>
          Category Diagnostics Breakdown
        </h3>

        {/* Category: SEO */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
            <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>SEO & Search Visibility</span>
            <span style={{ fontWeight: '700', color: getScoreColor(defaultCategories.seo) }}>{defaultCategories.seo}%</span>
          </div>
          <div style={{ height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${defaultCategories.seo}%`, backgroundColor: getScoreColor(defaultCategories.seo), borderRadius: '4px', transition: 'width 1s ease' }} />
          </div>
        </div>

        {/* Category: UX */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
            <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>User Experience & Flow</span>
            <span style={{ fontWeight: '700', color: getScoreColor(defaultCategories.ux) }}>{defaultCategories.ux}%</span>
          </div>
          <div style={{ height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${defaultCategories.ux}%`, backgroundColor: getScoreColor(defaultCategories.ux), borderRadius: '4px', transition: 'width 1s ease' }} />
          </div>
        </div>

        {/* Category: Copy */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
            <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>Copywriting & Messaging</span>
            <span style={{ fontWeight: '700', color: getScoreColor(defaultCategories.copy) }}>{defaultCategories.copy}%</span>
          </div>
          <div style={{ height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${defaultCategories.copy}%`, backgroundColor: getScoreColor(defaultCategories.copy), borderRadius: '4px', transition: 'width 1s ease' }} />
          </div>
        </div>

        {/* Category: Retention */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
            <span style={{ fontWeight: '600', color: 'var(--text-h)' }}>Customer Retention & Referral</span>
            <span style={{ fontWeight: '700', color: getScoreColor(defaultCategories.retention) }}>{defaultCategories.retention}%</span>
          </div>
          <div style={{ height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${defaultCategories.retention}%`, backgroundColor: getScoreColor(defaultCategories.retention), borderRadius: '4px', transition: 'width 1s ease' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
