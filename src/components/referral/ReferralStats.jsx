import React from 'react';
import { Users, UserCheck, DollarSign, Clock } from 'lucide-react';
import Card from '../common/Card';

export default function ReferralStats({ stats = {} }) {
  const {
    totalInvites = 24,
    successfulConversions = 8,
    totalEarnings = 320,
    pendingCommission = 80
  } = stats;

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    width: '100%',
  };

  const statCardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem',
    textAlign: 'left',
  };

  const iconWrapperStyle = (color) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.75rem',
    height: '2.75rem',
    borderRadius: '12px',
    backgroundColor: `${color}15`,
    color: color,
    flexShrink: 0,
  });

  const valueStyle = {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-h)',
    margin: 0,
    lineHeight: '1.2',
  };

  const labelStyle = {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--text)',
    margin: 0,
    marginTop: '0.2rem',
  };

  return (
    <div style={gridStyle}>
      {/* Stat 1: Total Invites */}
      <Card style={statCardStyle}>
        <div style={iconWrapperStyle('#6366f1')}>
          <Users size={22} />
        </div>
        <div>
          <h4 style={valueStyle}>{totalInvites}</h4>
          <p style={labelStyle}>Total Invites Sent</p>
        </div>
      </Card>

      {/* Stat 2: Successful Referrals */}
      <Card style={statCardStyle}>
        <div style={iconWrapperStyle('#10b981')}>
          <UserCheck size={22} />
        </div>
        <div>
          <h4 style={valueStyle}>{successfulConversions}</h4>
          <p style={labelStyle}>Successful Referrals</p>
        </div>
      </Card>

      {/* Stat 3: Total Earnings */}
      <Card style={statCardStyle}>
        <div style={iconWrapperStyle('#a855f7')}>
          <DollarSign size={22} />
        </div>
        <div>
          <h4 style={valueStyle}>${totalEarnings}</h4>
          <p style={labelStyle}>Total Earned</p>
        </div>
      </Card>

      {/* Stat 4: Pending commission */}
      <Card style={statCardStyle}>
        <div style={iconWrapperStyle('#f59e0b')}>
          <Clock size={22} />
        </div>
        <div>
          <h4 style={valueStyle}>${pendingCommission}</h4>
          <p style={labelStyle}>Pending Commissions</p>
        </div>
      </Card>
    </div>
  );
}
