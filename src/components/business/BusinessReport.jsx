import React, { useState } from 'react';
import { ArrowLeft, Award, HelpCircle, FileText, ChevronRight, Zap, RefreshCw } from 'lucide-react';
import Card from '../common/Card';
import BusinessScore from './BusinessScore';
import PainPoints from './PainPoints';
import Recommendations from './Recommendations';
import GrowthEstimate from './GrowthEstimate';

export default function BusinessReport({ report, onReset }) {
  const [activeTab, setActiveTab] = useState('overview');

  
  const data = report || {
    name: 'Apex Shop',
    industry: 'ecommerce',
    url: 'https://apexshop.com',
    score: 68,
    categories: { seo: 55, ux: 75, copy: 62, retention: 80 },
    painPoints: [],
    recommendations: [],
    projections: {}
  };

  const containerStyle = {
    maxWidth: '900px',
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

  const nameTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: 'var(--text-h)',
    margin: '0 0 0.35rem 0',
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

  return (
    <div style={containerStyle}>
      {/* Back button */}
      <div style={{ textAlign: 'left' }}>
        <button 
          style={buttonStyle} 
          onClick={onReset}
        >
          <ArrowLeft size={16} />
          <span>New Analysis</span>
        </button>
      </div>

      <Card>
        {/* Header Block */}
        <div style={headerCardStyle}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={nameTitleStyle}>{data.name}</h2>
            <div style={metaStyle}>
              <span>Url: <a href={data.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>{data.url}</a></span>
              <span>•</span>
              <span style={{ textTransform: 'capitalize' }}>Industry: <strong>{data.industry}</strong></span>
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
          <button style={tabStyle('overview')} onClick={() => setActiveTab('overview')}>Overview Score</button>
          <button style={tabStyle('painpoints')} onClick={() => setActiveTab('painpoints')}>Pain Points</button>
          <button style={tabStyle('recommendations')} onClick={() => setActiveTab('recommendations')}>Recommendations</button>
          <button style={tabStyle('growth')} onClick={() => setActiveTab('growth')}>Growth Projections</button>
        </div>

        {/* Dynamic Tab Body */}
        <div style={{ padding: '2rem 0 1rem 0' }}>
          {activeTab === 'overview' && (
            <BusinessScore score={data.score} categories={data.categories} />
          )}

          {activeTab === 'painpoints' && (
            <PainPoints points={data.painPoints} />
          )}

          {activeTab === 'recommendations' && (
            <Recommendations items={data.recommendations} />
          )}

          {activeTab === 'growth' && (
            <GrowthEstimate projections={data.projections} />
          )}
        </div>
      </Card>
    </div>
  );
}
