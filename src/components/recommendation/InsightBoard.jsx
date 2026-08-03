import React from 'react';
import Card from '../common/Card';
import SuggestionList from './SuggestionList';
import { Sparkles, TrendingUp, HelpCircle, Activity } from 'lucide-react';

export default function InsightBoard({ recommendations = [], onComplete }) {
  const implementedCount = recommendations.filter(item => item.completed).length;
  const totalCount = recommendations.length;

  const headerCardStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
    border: '1px solid rgba(99, 102, 241, 0.25)',
    borderRadius: '16px',
    textAlign: 'left',
    flexWrap: 'wrap',
    gap: '1.5rem',
  };

  const metricGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    margin: '2rem 0',
  };

  const metricCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    padding: '1.25rem',
    textAlign: 'left',
  };



  const trendHeaderStyle = {
    fontSize: '0.9rem',
    fontWeight: '800',
    color: 'var(--text-h)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  };

  const trendItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    borderBottom: '1px solid var(--border)',
    paddingBottom: '1rem',
    marginBottom: '1rem',
    textAlign: 'left',
  };

  const trends = [
    {
      title: 'Google SGE Overhaul',
      desc: 'AI search engine results are prioritizing bulleted quick answers. Optimize your landing pages for direct Q&A formats.'
    },
    {
      title: 'WhatsApp Channel Growth',
      desc: 'CTRs on WhatsApp notifications are averaging 45%, compared to only 2% on emails. Prioritize WhatsApp integrations.'
    },
    {
      title: 'Dark Mode Engagement',
      desc: 'Users dwell 30% longer on websites supporting custom dark interfaces. Keep glassmorphic headers active.'
    }
  ];

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header Block */}
      <div style={headerCardStyle}>
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Sparkles size={20} color="#a855f7" />
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Continuous AI Diagnostics
            </span>
          </div>
          <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-h)' }}>
            AI Growth Engine
          </h2>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.92rem', color: 'var(--text)', lineHeight: '1.5' }}>
            Our background AI model continuously analyzes your business answers, competitor scores, and market movements to surface growth opportunities.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', padding: '1rem 1.5rem', borderRadius: '12px' }}>
          <Activity size={24} style={{ color: '#10b981' }} />
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text)', display: 'block' }}>Engine Status</span>
            <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-h)' }}>Active & Monitoring</span>
          </div>
        </div>
      </div>

      {/* KPI Counters */}
      <div style={metricGridStyle}>
        <Card style={metricCardStyle}>
          <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-h)' }}>
            {totalCount}
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text)' }}>
            Active Suggestions
          </span>
        </Card>

        <Card style={metricCardStyle}>
          <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#10b981' }}>
            {implementedCount}
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text)' }}>
            Completed Tactics
          </span>
        </Card>

        <Card style={metricCardStyle}>
          <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#6366f1' }}>
            +22.5%
          </span>
          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text)' }}>
            Est. Conversion Lift
          </span>
        </Card>
      </div>

      {/* Main Board Grid */}
      <div className="insight-board-layout">
        
        {/* Left Column: Recommendations */}
        <div>
          <SuggestionList 
            recommendations={recommendations} 
            onComplete={onComplete} 
          />
        </div>

        {/* Right Column: Trending Insights */}
        <div>
          <Card style={{ padding: '1.5rem' }}>
            <h4 style={trendHeaderStyle}>
              <TrendingUp size={16} style={{ color: '#6366f1' }} />
              Market Trend Feed
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {trends.map((t, idx) => (
                <div key={idx} style={trendItemStyle}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-h)' }}>
                    {t.title}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text)', lineHeight: '1.4' }}>
                    {t.desc}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text)', fontSize: '0.75rem', marginTop: '0.5rem', cursor: 'pointer' }}>
              <HelpCircle size={14} />
              <span>How are trends calculated?</span>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
