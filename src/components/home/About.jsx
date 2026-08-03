import React, { useState } from 'react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const sectionStyle = {
    padding: 'var(--section-padding-y) var(--section-padding-x)',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    borderTop: '1px solid var(--border)',
  };

  const headerStyle = {
    maxWidth: '700px',
    margin: '0 auto 4rem auto',
  };

  const titleStyle = {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: 'var(--text-h)',
    marginBottom: '1rem',
  };

  const subtitleStyle = {
    fontSize: '1.05rem',
    color: 'var(--text)',
    lineHeight: '1.6',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  };

  const cardStyle = (index) => ({
    backgroundColor: 'var(--bg)',
    border: hoveredCard === index ? '1px solid var(--accent)' : '1px solid var(--border)',
    borderRadius: '16px',
    padding: '2rem 1.5rem',
    textAlign: 'left',
    boxShadow: hoveredCard === index ? 'var(--shadow)' : 'none',
    transform: hoveredCard === index ? 'translateY(-5px)' : 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'default',
  });

  const iconContainerStyle = (colorBg, colorText) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: colorBg,
    color: colorText,
    marginBottom: '1.5rem',
  });

  const cardTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'var(--text-h)',
    marginBottom: '0.75rem',
  };

  const cardTextStyle = {
    fontSize: '0.9rem',
    color: 'var(--text)',
    lineHeight: '1.6',
  };

  const pillars = [
    {
      icon: <Target size={24} />,
      title: 'Our Mission',
      desc: 'To democratize access to enterprise-grade growth strategies, enabling small and medium businesses to make data-driven marketing choices powered by AI.',
      colorBg: 'rgba(99, 102, 241, 0.1)',
      colorText: '#6366f1',
    },
    {
      icon: <Eye size={24} />,
      title: 'Our Vision',
      desc: 'Creating an automated, all-in-one strategic advisor that removes guesswork from digital marketing, conversion rate optimization, and competitor analysis.',
      colorBg: 'rgba(168, 85, 247, 0.1)',
      colorText: '#a855f7',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Privacy First',
      desc: 'We prioritize security. Your API keys are saved locally in your browser storage and never touch our servers, protecting your proprietary strategies.',
      colorBg: 'rgba(16, 185, 129, 0.1)',
      colorText: '#10b981',
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>About GrowthPulse AI</h2>
        <p style={subtitleStyle}>
          We combine cutting-edge Large Language Models with analytical algorithms to audit, assess, and recommend actionable digital marketing strategies in real time.
        </p>
      </div>

      <div style={gridStyle}>
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            style={cardStyle(idx)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={iconContainerStyle(pillar.colorBg, pillar.colorText)}>
              {pillar.icon}
            </div>
            <h3 style={cardTitleStyle}>{pillar.title}</h3>
            <p style={cardTextStyle}>{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
