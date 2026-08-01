import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart2, ShieldAlert, Users, MessageSquareCode } from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const sectionStyle = {
    padding: '5rem 2.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
    borderTop: '1px solid var(--border)',
  };

  const headerStyle = {
    textAlign: 'center',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  };

  const cardStyle = (index) => ({
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: hoveredCard === index ? 'var(--shadow)' : 'none',
    transform: hoveredCard === index ? 'translateY(-6px)' : 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
  });

  const iconContainerStyle = (colorBg, colorText) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '52px',
    height: '52px',
    borderRadius: '14px',
    backgroundColor: colorBg,
    color: colorText,
    marginBottom: '1.5rem',
  });

  const serviceTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'var(--text-h)',
    marginBottom: '0.75rem',
  };

  const serviceTextStyle = {
    fontSize: '0.92rem',
    color: 'var(--text)',
    lineHeight: '1.65',
    marginBottom: '2rem',
  };

  const actionLinkStyle = (index) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: hoveredCard === index ? 'var(--accent)' : 'var(--text-h)',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease',
  });

  const servicesList = [
    {
      icon: <ShieldAlert size={26} />,
      title: 'Business Pain-Point Analysis',
      desc: 'Enter your business details, URL, and operational bottlenecks. Our AI audits the data and pinpoints conversion blockers, security leaks, and customer churn issues.',
      path: '/business-analysis',
      colorBg: 'rgba(99, 102, 241, 0.1)',
      colorText: '#6366f1',
    },
    {
      icon: <BarChart2 size={26} />,
      title: 'Competitor Benchmarking',
      desc: 'Analyze and map your website features, conversion flows, and copywriting against key competitors to build a strategy to outperform them in search and sales.',
      path: '/competitor-analysis',
      colorBg: 'rgba(168, 85, 247, 0.1)',
      colorText: '#a855f7',
    },
    {
      icon: <Users size={26} />,
      title: 'Referral & AI Assistant',
      desc: 'Boost user acquisition using our viral referral tracker, and let our interactive chatbot assist you with real-time digital marketing queries.',
      path: '/referral',
      colorBg: 'rgba(16, 185, 129, 0.1)',
      colorText: '#10b981',
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Smart AI Suite for Growth</h2>
        <p style={subtitleStyle}>
          Comprehensive tools designed to diagnose weaknesses, monitor your competition, and drive viral community expansion.
        </p>
      </div>

      <div style={gridStyle}>
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            style={cardStyle(idx)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => navigate(service.path)}
          >
            <div>
              <div style={iconContainerStyle(service.colorBg, service.colorText)}>
                {service.icon}
              </div>
              <h3 style={serviceTitleStyle}>{service.title}</h3>
              <p style={serviceTextStyle}>{service.desc}</p>
            </div>
            
            <div style={actionLinkStyle(idx)}>
              <span>Launch Tool</span>
              <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
