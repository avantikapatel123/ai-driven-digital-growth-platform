import React, { useState } from 'react';
import { Zap, Shield, Sparkles, Layout, Download, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const sectionStyle = {
    padding: 'var(--section-padding-y) var(--section-padding-x)',
    maxWidth: '1200px',
    margin: '0 auto',
    borderTop: '1px solid var(--border)',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    flexWrap: 'wrap',
  };

  const leftColStyle = {
    flex: '1 1 450px',
    textAlign: 'left',
  };

  const rightColStyle = {
    flex: '1 1 450px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.4rem 0.8rem',
    backgroundColor: 'var(--accent-bg)',
    color: 'var(--accent)',
    borderRadius: '8px',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
  };

  const titleStyle = {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: 'var(--text-h)',
    lineHeight: '1.25',
    marginBottom: '1.5rem',
  };

  const descStyle = {
    fontSize: '1.05rem',
    color: 'var(--text)',
    lineHeight: '1.6',
    marginBottom: '2rem',
  };

  const checkListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const checkItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: 'var(--text-h)',
    fontWeight: '500',
    fontSize: '0.95rem',
  };

  const featureCardStyle = (index) => ({
    backgroundColor: 'var(--bg)',
    border: hoveredIdx === index ? '1px solid var(--accent)' : '1px solid var(--border)',
    borderRadius: '16px',
    padding: '1.5rem',
    textAlign: 'left',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: hoveredIdx === index ? 'var(--shadow)' : 'none',
  });

  const featureIconStyle = (colorBg, colorText) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: colorBg,
    color: colorText,
    marginBottom: '1rem',
  });

  const featureTitleStyle = {
    fontSize: '1.05rem',
    fontWeight: '650',
    color: 'var(--text-h)',
    marginBottom: '0.5rem',
  };

  const featureDescStyle = {
    fontSize: '0.85rem',
    color: 'var(--text)',
    lineHeight: '1.5',
  };

  const featuresList = [
    {
      icon: <Shield size={20} />,
      title: 'Zero Server Storage',
      desc: 'We store your API keys locally in indexedDB/localStorage. They are never uploaded or saved.',
      colorBg: 'rgba(16, 185, 129, 0.1)',
      colorText: '#10b981',
    },
    {
      icon: <Zap size={20} />,
      title: 'Vite Speed Engine',
      desc: 'Lightning-fast client rendering with Vite, providing immediate state updates.',
      colorBg: 'rgba(99, 102, 241, 0.1)',
      colorText: '#6366f1',
    },
    {
      icon: <Sparkles size={20} />,
      title: 'Smart Fallbacks',
      desc: 'No API key? Test it with our preloaded mock databases matching real industry profiles.',
      colorBg: 'rgba(168, 85, 247, 0.1)',
      colorText: '#a855f7',
    },
    {
      icon: <Layout size={20} />,
      title: 'Glassmorphism UI',
      desc: 'Sleek dark-mode aesthetic designed for comfort and modern developer/founder styling.',
      colorBg: 'rgba(239, 68, 68, 0.1)',
      colorText: '#ef4444',
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Left column */}
        <div style={leftColStyle}>
          <div style={badgeStyle}>
            <CheckCircle2 size={14} />
            Why Choose GrowthPulse
          </div>
          <h2 style={titleStyle}>The Powerhouse of Business Diagnostics</h2>
          <p style={descStyle}>
            We built GrowthPulse to be the most secure, immediate, and comprehensive digital consultant. We bypass complex databases, giving you client-level power in a single click.
          </p>

          <ul style={checkListStyle}>
            <li style={checkItemStyle}>
              <CheckCircle2 size={18} style={{ color: '#10b981' }} />
              <span>Interactive chatbot for marketing assistance</span>
            </li>
            <li style={checkItemStyle}>
              <CheckCircle2 size={18} style={{ color: '#10b981' }} />
              <span>Full CSV and PDF downloadable summaries</span>
            </li>
            <li style={checkItemStyle}>
              <CheckCircle2 size={18} style={{ color: '#10b981' }} />
              <span>Competitor scoring against industry benchmarks</span>
            </li>
          </ul>
        </div>

        {/* Right column */}
        <div style={rightColStyle}>
          {featuresList.map((feat, idx) => (
            <div
              key={idx}
              style={featureCardStyle(idx)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div style={featureIconStyle(feat.colorBg, feat.colorText)}>
                {feat.icon}
              </div>
              <h3 style={featureTitleStyle}>{feat.title}</h3>
              <p style={featureDescStyle}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
