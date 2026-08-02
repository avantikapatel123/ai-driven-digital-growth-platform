import React from 'react';
import Button from '../common/Button';

export default function UpgradeButton({ onClick, isPopular = false, text = 'Get Started' }) {
  const customStyle = {
    marginTop: '1.5rem',
    py: '0.8rem',
  };

  return (
    <Button
      variant={isPopular ? 'primary' : 'secondary'}
      onClick={onClick}
      style={customStyle}
    >
      {text}
    </Button>
  );
}
