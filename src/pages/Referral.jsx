import React from 'react';
import ReferralStats from '../components/referral/ReferralStats';
import ReferralCard from '../components/referral/ReferralCard';
import ReferralLink from '../components/referral/ReferralLink';
import Earnings from '../components/referral/Earnings';
import { Gift, Share2, Award, Zap, HelpCircle } from 'lucide-react';

export default function Referral() {
  const stats = {
    totalInvites: 36,
    successfulConversions: 11,
    totalEarnings: 390,
    pendingCommission: 120
  };

  const steps = [
    {
      icon: <Share2 size={24} color="#6366f1" />,
      title: '1. Share Your Link',
      desc: 'Send your referral link to other business owners, agencies, or startups.'
    },
    {
      icon: <Zap size={24} color="#10b981" />,
      title: '2. They Subscribe',
      desc: 'When your friend registers and chooses a paid Starter, Pro, or Enterprise tier.'
    },
    {
      icon: <Award size={24} color="#a855f7" />,
      title: '3. Receive Commission',
      desc: 'You earn 20% recurring commission on every billing cycle of their plan.'
    }
  ];

  const pageContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  };

  const headerStyle = {
    textAlign: 'center',
    maxWidth: '650px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--text-h)',
    margin: '0 0 0.5rem 0',
    letterSpacing: '-1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
  };

  const subtitleStyle = {
    fontSize: '1.05rem',
    color: 'var(--text)',
    lineHeight: '1.5',
    margin: 0,
  };

  const stepContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    margin: '1rem 0',
  };

  const stepStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1.5rem',
    borderRadius: '16px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
    gap: '0.75rem',
  };

  const stepIconWrapperStyle = {
    width: '3.25rem',
    height: '3.25rem',
    borderRadius: '50%',
    backgroundColor: 'var(--social-bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const splitGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '2.5rem',
    width: '100%',
    alignItems: 'start',
  };

  return (
    <div style={pageContainerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>
          <Gift size={32} style={{ color: '#6366f1' }} />
          Referral Partner Program
        </h1>
        <p style={subtitleStyle}>
          Invite other businesses to the platform. Earn recurring commissions for every active subscription you bring.
        </p>
      </div>

      {/* How it Works Step Blocks */}
      <div style={stepContainerStyle}>
        {steps.map((step, idx) => (
          <div key={idx} style={stepStyle}>
            <div style={stepIconWrapperStyle}>
              {step.icon}
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-h)', margin: 0 }}>
              {step.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text)', margin: 0, lineHeight: '1.4' }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Referral metrics counters */}
      <ReferralStats stats={stats} />

      {/* Sharing controls and logs */}
      <div style={splitGridStyle}>
        
        {/* Column 1: Share tools */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <ReferralCard 
            title="Invite Partners" 
            subtitle="Copy and paste your personal invite link into emails, articles, or social feeds."
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '0.5rem' }}>
              <ReferralLink code="REF-8291-PULSE" />
              
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                  <HelpCircle size={16} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-h)' }}>
                    Payout Policy
                  </span>
                </div>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.8rem', color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '0.4rem', lineHeight: '1.4' }}>
                  <li>Minimum payout threshold is <strong>$50</strong>.</li>
                  <li>Earnings are processed on the <strong>1st of every month</strong>.</li>
                  <li>Payment options include <strong>PayPal, Stripe, or Bank Transfer</strong>.</li>
                  <li>Commissions are recurring as long as the referred customer stays subscribed.</li>
                </ul>
              </div>
            </div>
          </ReferralCard>
        </div>

        {/* Column 2: Payout Log History */}
        <ReferralCard 
          title="Conversion Log & Earnings" 
          subtitle="Real-time conversions and credit history from your referral channels."
        >
          <div style={{ marginTop: '0.5rem' }}>
            <Earnings />
          </div>
        </ReferralCard>

      </div>

    </div>
  );
}
