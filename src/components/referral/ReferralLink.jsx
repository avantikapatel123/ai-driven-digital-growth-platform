import React from 'react';
import CopyButton from './CopyButton';

export default function ReferralLink({ code = 'REF-8291-PULSE' }) {
  const referralUrl = `https://growthpulse.ai/signup?ref=${code}`;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    textAlign: 'left',
    width: '100%',
  };

  const labelStyle = {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--text-h)',
  };

  const linkRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    width: '100%',
  };

  const linkBoxStyle = {
    flexGrow: 1,
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--social-bg)',
    fontFamily: 'var(--mono)',
    fontSize: '0.9rem',
    color: 'var(--text-h)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: '200px',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <span style={labelStyle}>Share Your Unique Referral Link</span>
      <div style={linkRowStyle}>
        <div style={linkBoxStyle}>
          {referralUrl}
        </div>
        <CopyButton text={referralUrl} />
      </div>
    </div>
  );
}
