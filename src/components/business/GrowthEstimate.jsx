import React from 'react';
import { ArrowUpRight, ArrowDown, TrendingUp, DollarSign, Calendar } from 'lucide-react';

export default function GrowthEstimate({ projections = {} }) {
  const defaults = {
    conversionCurrent: '1.8%',
    conversionTarget: '3.4%',
    conversionLift: '+88%',
    trafficGain: '+45%',
    revenueLift: '$3,800',
    timeline: '30 - 60 Days',
    ...projections
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    textAlign: 'left',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.25rem',
  };

  const cardStyle = {
    backgroundColor: 'var(--social-bg)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '1.25rem',
  };

  const metricTitleStyle = {
    fontSize: '0.8rem',
    color: 'var(--text)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
  };

  const numbersStyle = {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
    margin: '0.5rem 0',
  };

  const mainNumberStyle = {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: 'var(--text-h)',
  };

  const comparisonStyle = {
    fontSize: '0.85rem',
    color: 'var(--text)',
  };

  const liftPillStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2px',
    padding: '0.15rem 0.5rem',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    color: '#10b981',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: '700',
  };

  const estimateNotesStyle = {
    backgroundColor: 'var(--accent-bg)',
    border: '1px solid var(--accent-border)',
    padding: '1rem 1.25rem',
    borderRadius: '10px',
    fontSize: '0.85rem',
    color: 'var(--text)',
    lineHeight: '1.5',
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-h)', margin: '0 0 0.25rem 0' }}>
          Projected Growth Projections
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: 0 }}>
          Estimated lift calculations based on standard CRO audits and industry baseline conversions.
        </p>
      </div>

      <div style={gridStyle}>
        {/* Metric 1: Conversion */}
        <div style={cardStyle}>
          <div style={metricTitleStyle}>
            <TrendingUp size={14} style={{ color: 'var(--accent)' }} />
            <span>Conversion Rate</span>
          </div>
          <div style={numbersStyle}>
            <span style={mainNumberStyle}>{defaults.conversionTarget}</span>
            <span style={liftPillStyle}>
              <ArrowUpRight size={12} /> {defaults.conversionLift}
            </span>
          </div>
          <div style={comparisonStyle}>
            Current Baseline: {defaults.conversionCurrent}
          </div>
        </div>

        {/* Metric 2: Revenue */}
        <div style={cardStyle}>
          <div style={metricTitleStyle}>
            <DollarSign size={14} style={{ color: '#10b981' }} />
            <span>Monthly Revenue Lift</span>
          </div>
          <div style={numbersStyle}>
            <span style={mainNumberStyle}>+{defaults.revenueLift}</span>
            <span style={liftPillStyle}>Pro Est.</span>
          </div>
          <div style={comparisonStyle}>
            Based on baseline organic traffic
          </div>
        </div>

        {/* Metric 3: Traffic */}
        <div style={cardStyle}>
          <div style={metricTitleStyle}>
            <TrendingUp size={14} style={{ color: '#3b82f6' }} />
            <span>SEO Traffic Lift</span>
          </div>
          <div style={numbersStyle}>
            <span style={mainNumberStyle}>{defaults.trafficGain}</span>
            <span style={liftPillStyle}>
              <ArrowUpRight size={12} /> Organic
            </span>
          </div>
          <div style={comparisonStyle}>
            Within first 90 days
          </div>
        </div>
      </div>

      <div style={estimateNotesStyle}>
        <Calendar size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
        <span>
          <strong>Estimated Roadmap Duration: {defaults.timeline}</strong>. Fully executing all recommended fixes (high priority first) usually yields stable conversions within 4 weeks of deployment.
        </span>
      </div>
    </div>
  );
}
