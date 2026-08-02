import React from 'react';
import Card from '../common/Card';
import PlanFeature from './PlanFeature';
import UpgradeButton from './UpgradeButton';

export default function PricingCard({
  name,
  price,
  period = 'mo',
  description,
  features = [],
  isPopular = false,
  btnText = 'Choose Plan',
  onSelect
}) {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
    border: isPopular ? '2px solid #6366f1' : '1px solid var(--border)',
    transform: isPopular ? 'scale(1.02)' : 'none',
    zIndex: isPopular ? 2 : 1,
  };

  const badgeStyle = {
    position: 'absolute',
    top: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '0.3rem 1rem',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)',
  };

  const planNameStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-h)',
    margin: '0.5rem 0 0.25rem 0',
  };

  const priceContainerStyle = {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.2rem',
    margin: '1rem 0 0.5rem 0',
  };

  const priceStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--text-h)',
  };

  const periodStyle = {
    fontSize: '0.9rem',
    color: 'var(--text)',
  };

  const descStyle = {
    fontSize: '0.85rem',
    color: 'var(--text)',
    lineHeight: '1.4',
    marginBottom: '1.5rem',
    textAlign: 'left',
  };

  const featuresContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    textAlign: 'left',
    flexGrow: 1,
  };

  return (
    <Card 
      style={cardStyle}
      className={isPopular ? 'popular-pricing-card' : ''}
    >
      {isPopular && <div style={badgeStyle}>Most Popular</div>}

      <div>
        <h3 style={planNameStyle}>{name}</h3>
        
        <div style={priceContainerStyle}>
          <span style={priceStyle}>${price}</span>
          <span style={periodStyle}>/{period}</span>
        </div>

        <p style={descStyle}>{description}</p>
        
        <div style={{ borderTop: '1px solid var(--border)', margin: '1rem 0' }} />

        <div style={featuresContainerStyle}>
          {features.map((feat, index) => (
            <PlanFeature key={index} text={feat.text} included={feat.included} />
          ))}
        </div>
      </div>

      <UpgradeButton 
        text={btnText} 
        isPopular={isPopular} 
        onClick={onSelect}
      />
    </Card>
  );
}
