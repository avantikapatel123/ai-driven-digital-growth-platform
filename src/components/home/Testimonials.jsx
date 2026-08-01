import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  };

  const cardStyle = (index) => ({
    backgroundColor: 'var(--bg)',
    border: hoveredCard === index ? '1px solid var(--accent)' : '1px solid var(--border)',
    borderRadius: '18px',
    padding: '2rem',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    transform: hoveredCard === index ? 'translateY(-5px)' : 'none',
    boxShadow: hoveredCard === index ? 'var(--shadow)' : 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'default',
  });

  const quoteIconStyle = {
    position: 'absolute',
    top: '1.5rem',
    right: '2rem',
    color: 'var(--accent-bg)',
    opacity: 0.8,
  };

  const ratingStyle = {
    display: 'flex',
    gap: '0.2rem',
    marginBottom: '1rem',
  };

  const reviewTextStyle = {
    fontSize: '0.92rem',
    color: 'var(--text)',
    lineHeight: '1.6',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
  };

  const userContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  };

  const avatarStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    color: 'var(--accent)',
    fontSize: '0.95rem',
    border: '1px solid var(--accent-border)',
  };

  const nameStyle = {
    fontWeight: '650',
    color: 'var(--text-h)',
    fontSize: '0.95rem',
    margin: 0,
  };

  const roleStyle = {
    fontSize: '0.75rem',
    color: 'var(--text)',
    margin: 0,
  };

  const list = [
    {
      name: 'Sarah Jenkins',
      role: 'Founder, E-shop Direct',
      review: "The business pain-point audit found a conversion bottleneck in our checkout flow that was costing us thousands weekly. Swapping our copy as recommended by Gemini grew sales by 18% in just 10 days.",
      initials: 'SJ',
    },
    {
      name: 'Devon Carter',
      role: 'Growth Lead, SaaSify',
      review: "Competitor Benchmarking alone is worth every penny. We mapped out our features against our primary competitor and spotted exactly where we were lagging in customer onboarding.",
      initials: 'DC',
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director, EduFlow',
      review: "Using the referral tracker dashboard, we created a viral loop that doubled our sign-ups within a single month. The AI chatbot helper saved us hours of marketing research.",
      initials: 'PS',
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>What Founders Say</h2>
        <p style={subtitleStyle}>
          Discover how modern builders are utilizing automated growth audits to supercharge their conversion rates.
        </p>
      </div>

      <div style={gridStyle}>
        {list.map((item, idx) => (
          <div
            key={idx}
            style={cardStyle(idx)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Quote size={32} style={quoteIconStyle} />
            <div>
              <div style={ratingStyle}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p style={reviewTextStyle}>"{item.review}"</p>
            </div>
            
            <div style={userContainerStyle}>
              <div style={avatarStyle}>{item.initials}</div>
              <div>
                <h4 style={nameStyle}>{item.name}</h4>
                <p style={roleStyle}>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
