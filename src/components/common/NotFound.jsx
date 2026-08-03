import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Button from './Button';

export default function NotFound() {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '65vh',
    padding: '2rem',
    textAlign: 'center',
    gap: '1.25rem',
  };

  const iconStyle = {
    color: '#ef4444',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    padding: '1rem',
    borderRadius: '50%',
    display: 'inline-flex',
    marginBottom: '0.5rem',
    boxShadow: '0 8px 24px rgba(239, 68, 68, 0.15)',
  };

  const h1Style = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--text-h)',
    margin: 0,
  };

  const pStyle = {
    fontSize: '1rem',
    color: 'var(--text)',
    maxWidth: '450px',
    margin: 0,
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <div style={iconStyle}>
        <AlertTriangle size={48} />
      </div>
      <h1 style={h1Style}>404 - Page Not Found</h1>
      <p style={pStyle}>
        The page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>
      <Button 
        variant="primary" 
        onClick={() => navigate('/')}
        style={{ marginTop: '1rem', width: 'auto', minWidth: '180px' }}
      >
        Go to Home Page
      </Button>
    </div>
  );
}
