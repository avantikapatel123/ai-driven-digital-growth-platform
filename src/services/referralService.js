export const getReferralStats = () => {
  return {
    totalInvites: 36,
    successfulConversions: 11,
    totalEarnings: 390,
    pendingCommission: 120
  };
};

export const getReferralEarningsHistory = () => {
  return [
    { name: 'Acme Corp', plan: 'Growth Pro', date: 'Jul 28, 2026', commission: 40, status: 'Approved' },
    { name: 'Pixel Studio', plan: 'Starter', date: 'Jul 25, 2026', commission: 15, status: 'Approved' },
    { name: 'Apex Retail', plan: 'Enterprise', date: 'Jul 20, 2026', commission: 80, status: 'Pending' },
    { name: 'SaaS Labs', plan: 'Growth Pro', date: 'Jul 15, 2026', commission: 40, status: 'Approved' },
    { name: 'E-com Kings', plan: 'Starter', date: 'Jul 10, 2026', commission: 15, status: 'Approved' },
  ];
};
