export const getPricingPlans = () => {
  return [
    {
      name: 'Starter',
      priceMonthly: 29,
      priceAnnual: 23,
      description: 'Essential growth tools for early stage startups, local brands, and side projects.',
      features: [
        { text: '1 AI Business Audit / mo', included: true },
        { text: 'Basic SWOT Benchmarking', included: true },
        { text: '5 Referral Link invites', included: true },
        { text: 'WhatsApp Support button', included: true },
        { text: 'Continuous recommendations', included: false },
        { text: 'Competitor Backlink Audits', included: false },
      ]
    },
    {
      name: 'Growth Pro',
      priceMonthly: 79,
      priceAnnual: 63,
      isPopular: true,
      description: 'Full strategic package for scaling brands, e-commerce storefronts, and SaaS platforms.',
      features: [
        { text: 'Unlimited AI Business Audits', included: true },
        { text: 'Advanced SWOT Benchmarking', included: true },
        { text: 'Unlimited Referral Invites', included: true },
        { text: 'Priority WhatsApp Support', included: true },
        { text: 'Continuous recommendations', included: true },
        { text: 'Competitor Backlink Audits', included: false },
      ]
    },
    {
      name: 'Enterprise',
      priceMonthly: 199,
      priceAnnual: 159,
      description: 'Premium growth strategy and consultation for established organizations and agencies.',
      features: [
        { text: 'Unlimited AI Business Audits', included: true },
        { text: 'Advanced SWOT Benchmarking', included: true },
        { text: 'Unlimited Referral Invites', included: true },
        { text: 'Dedicated WhatsApp Account Manager', included: true },
        { text: 'Continuous recommendations', included: true },
        { text: 'Competitor Backlink Audits', included: true },
      ]
    }
  ];
};

export const submitPaymentCheckout = async (checkoutData) => {
  // Simulate payment processing
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, transactionId: 'TXN-' + Math.random().toString(36).substr(2, 9).toUpperCase() });
    }, 1500);
  });
};
