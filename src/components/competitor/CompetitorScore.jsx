import React from 'react';

export default function CompetitorScore({ 
  yourScore = 72, 
  competitorScore = 65, 
  yourCategories = {}, 
  competitorCategories = {} 
}) {
  const defaultYourCategories = {
    seo: 65,
    ux: 78,
    copy: 60,
    pricingValue: 85,
    ...yourCategories
  };

  const defaultCompetitorCategories = {
    seo: 72,
    ux: 60,
    copy: 75,
    pricingValue: 55,
    ...competitorCategories
  };

  const getScoreColor = (val, isCompetitor = false) => {
    if (val >= 80) return '#10b981'; // Green
    if (val >= 50) return '#f59e0b'; // Orange
    return '#ef4444'; // Red
  };

  const circleSize = 120;
  const strokeWidth = 10;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  const renderGauge = (title, score, color) => {
    const strokeDashoffset = circumference - (score / 100) * circumference;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flex: '1 1 120px' }}>
        <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-h)' }}>{title}</h4>
        <div style={{ position: 'relative', width: circleSize, height: circleSize, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={circleSize} height={circleSize} style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="transparent"
              stroke="var(--border)"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
          </svg>
          <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-h)' }}>{score}</span>
            <span style={{ fontSize: '0.65rem', fontWeight: '700', color: color, textTransform: 'uppercase' }}>
              {score >= 80 ? 'Strong' : score >= 60 ? 'Moderate' : 'Weak'}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const comparisonData = [
    { label: 'SEO & Search Position', key: 'seo' },
    { label: 'User Experience (UX)', key: 'ux' },
    { label: 'Messaging & Copywriting', key: 'copy' },
    { label: 'Pricing & Value Perception', key: 'pricingValue' },
  ];

  const diff = yourScore - competitorScore;
  const isAhead = diff >= 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
      
      {/* Benchmark Callout */}
      <div style={{ 
        padding: '1.25rem', 
        borderRadius: '12px', 
        backgroundColor: isAhead ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
        border: `1px solid ${isAhead ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
        textAlign: 'left'
      }}>
        <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-h)' }}>
          {isAhead ? '🚀 You hold the competitive edge!' : '⚠️ Competitor holds the edge.'}
        </h3>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)' }}>
          Your overall index score is <strong style={{ color: 'var(--text-h)' }}>{yourScore}</strong> compared to their <strong style={{ color: 'var(--text-h)' }}>{competitorScore}</strong>. 
          You are {isAhead ? <span style={{ color: '#10b981', fontWeight: '700' }}>ahead by +{diff} points</span> : <span style={{ color: '#ef4444', fontWeight: '700' }}>behind by {diff} points</span>}.
        </p>
      </div>

      {/* Side by side Circular Gauges */}
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-around', flexWrap: 'wrap', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
        {renderGauge('Your Business Score', yourScore, getScoreColor(yourScore))}
        {renderGauge('Competitor Score', competitorScore, getScoreColor(competitorScore))}
      </div>

      {/* Metric breakdown comparison */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left' }}>
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-h)' }}>
          Detailed Comparison Breakdown
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {comparisonData.map((item, idx) => {
            const yourVal = defaultYourCategories[item.key] || 0;
            const compVal = defaultCompetitorCategories[item.key] || 0;

            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-h)' }}>{item.label}</span>
                
                {/* Your Bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '40px', fontSize: '0.75rem', color: 'var(--text)', fontWeight: '600' }}>You</span>
                  <div style={{ flexGrow: 1, height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${yourVal}%`, backgroundColor: '#6366f1', borderRadius: '4px', transition: 'width 1s ease' }} />
                  </div>
                  <span style={{ width: '35px', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-h)', textAlign: 'right' }}>{yourVal}%</span>
                </div>

                {/* Competitor Bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '40px', fontSize: '0.75rem', color: 'var(--text)', fontWeight: '600' }}>Them</span>
                  <div style={{ flexGrow: 1, height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${compVal}%`, backgroundColor: '#9ca3af', borderRadius: '4px', transition: 'width 1s ease' }} />
                  </div>
                  <span style={{ width: '35px', fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-h)', textAlign: 'right' }}>{compVal}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
