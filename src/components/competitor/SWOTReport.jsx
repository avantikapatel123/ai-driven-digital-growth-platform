import React, { useState } from 'react';
import { ArrowLeft, FileText, Shield, AlertTriangle, Lightbulb, Flame, Award, CheckSquare, Target } from 'lucide-react';
import Card from '../common/Card';
import CompetitorScore from './CompetitorScore';
import StrengthCard from './StrengthCard';
import WeaknessCard from './WeaknessCard';
import OpportunityCard from './OpportunityCard';
import ThreatCard from './ThreatCard';
import ActionPlan from './ActionPlan';

export default function SWOTReport({ report, onReset }) {
  const [activeTab, setActiveTab] = useState('overview');

  const data = report || {
    name: 'My Business',
    url: 'https://mybiz.com',
    competitorName: 'Competitor Brand',
    competitorUrl: 'https://compbrand.com',
    yourScore: 72,
    competitorScore: 65,
    yourCategories: {},
    competitorCategories: {},
    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: [],
    actions: []
  };

  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  };

  const headerCardStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    borderBottom: '1px solid var(--border)',
    paddingBottom: '1.5rem',
  };

  const titleRowStyle = {
    textAlign: 'left',
  };

  const nameTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: 'var(--text-h)',
    margin: '0 0 0.5rem 0',
  };

  const metaStyle = {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.85rem',
    color: 'var(--text)',
    flexWrap: 'wrap',
  };

  const tabContainerStyle = {
    display: 'flex',
    borderBottom: '1px solid var(--border)',
    gap: '1.5rem',
    overflowX: 'auto',
  };

  const tabStyle = (id) => ({
    padding: '0.85rem 0.25rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: activeTab === id ? 'var(--accent)' : 'var(--text)',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: activeTab === id ? '3px solid var(--accent)' : '3px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  });

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'transparent',
    color: 'var(--text)',
    border: '1px solid var(--border)',
    padding: '0.6rem 1.2rem',
    borderRadius: '10px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const swotGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
    gap: '1.5rem',
    padding: '1rem 0',
  };

  return (
    <div style={containerStyle}>
      {/* Back Button */}
      <div style={{ textAlign: 'left' }}>
        <button style={buttonStyle} onClick={onReset}>
          <ArrowLeft size={16} />
          <span>New Competitor Analysis</span>
        </button>
      </div>

      <Card>
        {/* Header Block */}
        <div style={headerCardStyle}>
          <div style={titleRowStyle}>
            <h2 style={nameTitleStyle}>
              {data.name} <span style={{ color: 'var(--text)', fontWeight: '400', fontSize: '1.2rem' }}>vs.</span> {data.competitorName}
            </h2>
            <div style={metaStyle}>
              <span>You: <a href={data.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>{data.url}</a></span>
              <span>•</span>
              <span>Them: <a href={data.competitorUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', textDecoration: 'none' }}>{data.competitorUrl}</a></span>
            </div>
          </div>
          
          <button 
            style={{ ...buttonStyle, backgroundColor: 'var(--accent-bg)', color: 'var(--accent)', borderColor: 'var(--accent-border)' }}
            onClick={() => window.print()}
          >
            <FileText size={16} />
            <span>Print Report</span>
          </button>
        </div>

        {/* Tab Selection */}
        <div style={tabContainerStyle}>
          <button style={tabStyle('overview')} onClick={() => setActiveTab('overview')}>Benchmark Score</button>
          <button style={tabStyle('swot')} onClick={() => setActiveTab('swot')}>SWOT Grid</button>
          <button style={tabStyle('actions')} onClick={() => setActiveTab('actions')}>Action Plan</button>
        </div>

        {/* Tab Content */}
        <div style={{ padding: '2rem 0 1rem 0' }}>
          {activeTab === 'overview' && (
            <CompetitorScore 
              yourScore={data.yourScore} 
              competitorScore={data.competitorScore} 
              yourCategories={data.yourCategories}
              competitorCategories={data.competitorCategories}
            />
          )}

          {activeTab === 'swot' && (
            <div style={swotGridStyle}>
              <StrengthCard items={data.strengths} />
              <WeaknessCard items={data.weaknesses} />
              <OpportunityCard items={data.opportunities} />
              <ThreatCard items={data.threats} />
            </div>
          )}

          {activeTab === 'actions' && (
            <ActionPlan actions={data.actions} />
          )}
        </div>
      </Card>
    </div>
  );
}
