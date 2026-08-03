import React, { useState } from 'react';
import { Sparkles, ArrowRight, Play, TrendingUp, Shield, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(false);

  // Styling Constants using CSS variables for theme flexibility
  const heroSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 'var(--section-padding-y) var(--section-padding-x)',
    gap: '3rem',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '80vh',
    flexWrap: 'wrap',
  };

  const textContainerStyle = {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--accent-bg)',
    border: '1px solid var(--accent-border)',
    borderRadius: '9999px',
    color: 'var(--accent)',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 8vw, 3.5rem)',
    fontWeight: '800',
    lineHeight: '1.15',
    color: 'var(--text-h)',
    margin: '0 0 1.5rem 0',
    letterSpacing: '-1.5px',
  };

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle = {
    fontSize: '1.15rem',
    lineHeight: '1.7',
    color: 'var(--text)',
    maxWidth: '540px',
    margin: '0 0 2.5rem 0',
  };

  const btnContainerStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  };

  const primaryBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    border: 'none',
    padding: '0.85rem 1.8rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: hoveredBtn === 'primary' 
      ? '0 10px 20px rgba(99, 102, 241, 0.4)' 
      : '0 4px 12px rgba(99, 102, 241, 0.25)',
    transform: hoveredBtn === 'primary' ? 'translateY(-2px)' : 'translateY(0)',
    transition: 'all 0.2s ease',
  };

  const secondaryBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'transparent',
    color: 'var(--text-h)',
    border: '1px solid var(--border)',
    padding: '0.85rem 1.8rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '10px',
    cursor: 'pointer',
    transform: hoveredBtn === 'secondary' ? 'translateY(-2px)' : 'translateY(0)',
    backgroundColor: hoveredBtn === 'secondary' ? 'var(--social-bg)' : 'transparent',
    transition: 'all 0.2s ease',
  };

  const visualContainerStyle = {
    flex: '1 1 450px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const glowBgStyle = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.05) 70%, transparent 100%)',
    filter: 'blur(30px)',
    zIndex: -1,
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '450px',
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: hoveredCard 
      ? 'var(--shadow), 0 0 25px rgba(99, 102, 241, 0.15)' 
      : 'var(--shadow)',
    transform: hoveredCard ? 'translateY(-5px)' : 'none',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
    overflow: 'hidden',
  };

  const metricsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginTop: '1.5rem',
  };

  const metricItemStyle = {
    backgroundColor: 'var(--social-bg)',
    border: '1px solid var(--border)',
    padding: '1rem',
    borderRadius: '12px',
    textAlign: 'left',
  };

  return (
    <section style={heroSectionStyle}>
      {/* Text Info */}
      <div style={textContainerStyle}>
        <div style={badgeStyle}>
          <Sparkles size={14} />
          Powered by Gemini AI 1.5 Pro
        </div>
        <h1 style={titleStyle}>
          Scale Your Business with <br />
          <span style={gradientTextStyle}>AI-Powered Intelligence</span>
        </h1>
        <p style={subtitleStyle}>
          Analyze business growth opportunities, identify competitive gaps, and create automated strategic roadmaps with the most advanced AI digital advisor.
        </p>
        <div style={btnContainerStyle}>
          <button 
            style={primaryBtnStyle}
            onMouseEnter={() => setHoveredBtn('primary')}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={() => navigate('/business-analysis')}
          >
            Get Free Analysis
            <ArrowRight size={18} />
          </button>
          <button 
            style={secondaryBtnStyle}
            onMouseEnter={() => setHoveredBtn('secondary')}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={() => navigate('/referral')}
          >
            <Play size={16} />
            Chat with AI Bot
          </button>
        </div>
      </div>

      {/* Hero Visual Card (Mock Dashboard) */}
      <div 
        style={visualContainerStyle}
        onMouseEnter={() => setHoveredCard(true)}
        onMouseLeave={() => setHoveredCard(false)}
      >
        <div style={glowBgStyle}></div>
        <div style={cardStyle}>
          {/* Top Panel */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ padding: '0.5rem', backgroundColor: 'var(--accent-bg)', borderRadius: '10px', color: 'var(--accent)' }}>
                <Cpu size={20} />
              </div>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--text-h)', fontSize: '0.95rem' }}>Growth Engine</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text)' }}>Active Diagnostics</div>
              </div>
            </div>
            <div style={{ padding: '0.25rem 0.6rem', backgroundColor: '#10b981', color: '#fff', borderRadius: '5px', fontSize: '0.75rem', fontWeight: '600' }}>
              Optimized
            </div>
          </div>

          {/* Metric graph visualization */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text)' }}>Weekly Conversion Rate</span>
              <span style={{ color: '#10b981', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <TrendingUp size={14} /> +24.8%
              </span>
            </div>
            <div style={{ height: '8px', width: '100%', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '78%', background: 'linear-gradient(90deg, #6366f1, #a855f7)', borderRadius: '4px' }}></div>
            </div>
          </div>

          {/* Cards Grid */}
          <div style={metricsGridStyle}>
            <div style={metricItemStyle}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text)', marginBottom: '0.25rem' }}>Pain Points Solved</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-h)' }}>18 / 20</div>
            </div>
            <div style={metricItemStyle}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text)', marginBottom: '0.25rem' }}>Competitor Gap Index</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--accent)' }}>9.4/10</div>
            </div>
          </div>

          {/* Bottom Security Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', color: 'var(--text)', fontSize: '0.75rem', justifyContent: 'center' }}>
            <Shield size={14} style={{ color: '#10b981' }} />
            <span>100% Client-Side API Encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
}
