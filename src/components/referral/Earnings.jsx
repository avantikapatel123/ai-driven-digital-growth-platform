import React from 'react';

export default function Earnings({ history = [] }) {
  const defaultHistory = [
    { name: 'Acme Corp', plan: 'Growth Pro', date: 'Jul 28, 2026', commission: 40, status: 'Approved' },
    { name: 'Pixel Studio', plan: 'Starter', date: 'Jul 25, 2026', commission: 15, status: 'Approved' },
    { name: 'Apex Retail', plan: 'Enterprise', date: 'Jul 20, 2026', commission: 80, status: 'Pending' },
    { name: 'SaaS Labs', plan: 'Growth Pro', date: 'Jul 15, 2026', commission: 40, status: 'Approved' },
    { name: 'E-com Kings', plan: 'Starter', date: 'Jul 10, 2026', commission: 15, status: 'Approved' },
  ];

  const list = history.length > 0 ? history : defaultHistory;

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    fontSize: '0.9rem',
  };

  const thStyle = {
    padding: '0.85rem 1rem',
    borderBottom: '2px solid var(--border)',
    color: 'var(--text-h)',
    fontWeight: '700',
  };

  const tdStyle = {
    padding: '0.85rem 1rem',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text)',
  };

  const statusBadgeStyle = (status) => {
    const isApproved = status.toLowerCase() === 'approved';
    return {
      display: 'inline-block',
      padding: '0.2rem 0.5rem',
      borderRadius: '6px',
      fontSize: '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      backgroundColor: isApproved ? 'rgba(16, 185, 129, 0.12)' : 'rgba(245, 158, 11, 0.12)',
      color: isApproved ? '#10b981' : '#f59e0b',
    };
  };

  const containerStyle = {
    width: '100%',
    overflowX: 'auto',
  };

  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Referral</th>
            <th style={thStyle}>Plan Chosen</th>
            <th style={thStyle}>Date Joined</th>
            <th style={thStyle}>Commission</th>
            <th style={thStyle}>Payout Status</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, idx) => (
            <tr key={idx}>
              <td style={{ ...tdStyle, fontWeight: '600', color: 'var(--text-h)' }}>{item.name}</td>
              <td style={tdStyle}>{item.plan}</td>
              <td style={tdStyle}>{item.date}</td>
              <td style={{ ...tdStyle, fontWeight: '700', color: 'var(--text-h)' }}>${item.commission}</td>
              <td style={tdStyle}>
                <span style={statusBadgeStyle(item.status)}>{item.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
