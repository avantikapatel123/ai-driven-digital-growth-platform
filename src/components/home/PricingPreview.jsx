import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, HelpCircle } from 'lucide-react';

export default function PricingPreview() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const sectionStyle = {
    padding: 'var(--section-padding-y) var(--section-padding-x)',
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
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  };

  const cardStyle = (index, isPopular) => ({
    backgroundColor: 'var(--bg)',
    border: isPopular 
      ? '2px solid var(--accent)' 
      : hoveredCard === index 
        ? '1px solid var(--accent-border)' 
        : '1px solid var(--border)',
    borderRadius: '20px',
    padding: '3rem 2.2rem 2.5rem 2.2rem',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    transform: hoveredCard === index ? 'translateY(-8px)' : 'none',
    boxShadow: isPopular 
      ? '0 10px 30px rgba(99, 102, 241, 0.15)' 
      : hoveredCard === index 
        ? 'var(--shadow)' 
        : 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
  });

  const popularBadgeStyle = {
    position: 'absolute',
    top: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    padding: '0.35rem 1rem',
    fontSize: '0.75rem',
    fontWeight: '750',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
  };

  const tierNameStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-h)',
    marginBottom: '0.5rem',
  };

  const priceContainerStyle = {
    display: 'flex',
    alignItems: 'baseline',
    margin: '1.5rem 0',
  };

  const priceStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--text-h)',
  };

  const pricePeriodStyle = {
    fontSize: '0.9rem',
    color: 'var(--text)',
    marginLeft: '0.35rem',
  };

  const featuresListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    textAlign: 'left',
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontSize: '0.9rem',
    color: 'var(--text)',
  };

  const btnStyle = (isPopular) => ({
    backgroundColor: isPopular ? '#6366f1' : 'transparent',
    color: isPopular ? '#ffffff' : 'var(--text-h)',
    border: isPopular ? 'none' : '1px solid var(--border)',
    padding: '0.8rem 1.5rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.2s ease',
  });

  const tiers = [
    {
      name: 'Free Starter',
      price: '$0',
      period: 'forever',
      features: [
        'Mock industry templates',
        'Basic landing page audit',
        'Limited competitor check',
        'Email customer support',
      ],
      isPopular: false,
    },
    {
      name: 'Pro Optimizer',
      price: '$29',
      period: 'per month',
      features: [
        'Custom Gemini API key integration',
        'Unlimited AI pain-point reviews',
        'Deep competitor benchmarking',
        'AI chatbot consultation',
        'Export CSV/PDF reports',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise Scale',
      price: 'Custom',
      period: '',
      features: [
        'Dedicated server-side API allocation',
        'Custom models & prompt training',
        'Team access (up to 20 users)',
        'Personal support manager',
      ],
      isPopular: false,
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Simple, Transparent Plans</h2>
        <p style={subtitleStyle}>
          Access premium mock data for free, or connect your own API key for ultimate growth diagnostics.
        </p>
      </div>

      <div style={gridStyle}>
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            style={cardStyle(idx, tier.isPopular)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => navigate('/pricing')}
          >
            {tier.isPopular && <div style={popularBadgeStyle}>Most Popular</div>}
            
            <div>
              <h3 style={tierNameStyle}>{tier.name}</h3>
              <div style={priceContainerStyle}>
                <span style={priceStyle}>{tier.price}</span>
                {tier.period && <span style={pricePeriodStyle}>/{tier.period}</span>}
              </div>
              
              <ul style={featuresListStyle}>
                {tier.features.map((feat, fidx) => (
                  <li key={fidx} style={featureItemStyle}>
                    <Check size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button style={btnStyle(tier.isPopular)}>
              {tier.price === 'Custom' ? 'Contact Us' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
