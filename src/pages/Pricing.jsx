import React, { useState } from 'react';
import PricingToggle from '../components/pricing/PricingToggle';
import PricingCard from '../components/pricing/PricingCard';
import Modal from '../components/common/Modal';
import InputField from '../components/common/InputField';
import Button from '../components/common/Button';
import { CreditCard, CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('form'); // 'form' or 'success'
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    email: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });
  const [errors, setErrors] = useState({});

  const plans = [
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

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setCheckoutStep('form');
    setErrors({});
    setCheckoutData({
      email: '',
      cardName: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvc: ''
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateCheckout = () => {
    const newErrors = {};
    if (!checkoutData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(checkoutData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!checkoutData.cardName.trim()) newErrors.cardName = 'Name on card is required';
    if (!checkoutData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (checkoutData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    if (!checkoutData.cardExpiry.trim()) newErrors.cardExpiry = 'Expiry date is required';
    if (!checkoutData.cardCvc.trim()) {
      newErrors.cardCvc = 'CVC is required';
    } else if (checkoutData.cardCvc.length < 3) {
      newErrors.cardCvc = 'Invalid CVC';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!validateCheckout()) return;

    setCheckoutLoading(true);
    setTimeout(() => {
      setCheckoutLoading(false);
      setCheckoutStep('success');
    }, 1500);
  };

  const pageContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--text-h)',
    marginBottom: '0.5rem',
    letterSpacing: '-1px',
  };

  const subtitleStyle = {
    fontSize: '1.05rem',
    color: 'var(--text)',
    maxWidth: '600px',
    textAlign: 'center',
    marginBottom: '2rem',
    lineHeight: '1.5',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
    width: '100%',
    maxWidth: '1100px',
    alignItems: 'stretch',
    marginTop: '1rem',
  };

  const priceBilledText = (plan) => {
    const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
    if (isAnnual) {
      return `Billed annually ($${price * 12}/year)`;
    }
    return 'Billed monthly';
  };

  return (
    <div style={pageContainerStyle}>
      <h1 style={titleStyle}>Upgrade to Growth Pro</h1>
      <p style={subtitleStyle}>
        Unlock the complete potential of your digital channels. Choose the ideal subscription tier to supercharge conversions and crush the competition.
      </p>

      {/* Monthly / Annual switch */}
      <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

      {/* Grid of plans */}
      <div style={gridStyle}>
        {plans.map((plan, index) => {
          const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
          return (
            <PricingCard
              key={index}
              name={plan.name}
              price={price}
              period={isAnnual ? 'yr' : 'mo'}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              btnText={plan.name === 'Enterprise' ? 'Contact Sales' : `Choose ${plan.name}`}
              onSelect={() => handleSelectPlan(plan)}
            />
          );
        })}
      </div>

      {/* Checkout modal overlay */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={checkoutStep === 'form' ? `Subscribe to ${selectedPlan?.name}` : 'Subscription Complete!'}
      >
        {checkoutStep === 'form' ? (
          <form onSubmit={handleCheckoutSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--social-bg)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', marginBottom: '0.5rem' }}>
              <div>
                <span style={{ fontWeight: '700', color: 'var(--text-h)', display: 'block' }}>{selectedPlan?.name} Plan</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>{selectedPlan && priceBilledText(selectedPlan)}</span>
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-h)' }}>
                ${selectedPlan ? (isAnnual ? selectedPlan.priceAnnual : selectedPlan.priceMonthly) : 0}
                <span style={{ fontSize: '0.8rem', fontWeight: '400' }}>/{isAnnual ? 'yr' : 'mo'}</span>
              </span>
            </div>

            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="name@business.com"
              value={checkoutData.email}
              onChange={handleInputChange}
              error={errors.email}
              required
            />

            <InputField
              label="Cardholder Name"
              name="cardName"
              placeholder="John Doe"
              value={checkoutData.cardName}
              onChange={handleInputChange}
              error={errors.cardName}
              required
            />

            <InputField
              label="Card Number"
              name="cardNumber"
              placeholder="4111 2222 3333 4444"
              value={checkoutData.cardNumber}
              onChange={handleInputChange}
              error={errors.cardNumber}
              required
            />

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: '1 1 50%' }}>
                <InputField
                  label="Expiry Date"
                  name="cardExpiry"
                  placeholder="MM/YY"
                  value={checkoutData.cardExpiry}
                  onChange={handleInputChange}
                  error={errors.cardExpiry}
                  required
                />
              </div>
              <div style={{ flex: '1 1 50%' }}>
                <InputField
                  label="CVC"
                  name="cardCvc"
                  placeholder="123"
                  value={checkoutData.cardCvc}
                  onChange={handleInputChange}
                  error={errors.cardCvc}
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              loading={checkoutLoading} 
              disabled={checkoutLoading} 
              style={{ marginTop: '1.25rem' }}
            >
              <CreditCard size={16} />
              <span>Complete Upgrade</span>
            </Button>
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '1rem 0' }}>
            <CheckCircle2 size={54} color="#10b981" style={{ filter: 'drop-shadow(0 4px 10px rgba(16, 185, 129, 0.2))' }} />
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-h)' }}>
              Upgrade Successful!
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.5', maxWidth: '350px' }}>
              Thank you for subscribing! Your account has been upgraded to the <strong style={{ color: 'var(--text-h)' }}>{selectedPlan?.name}</strong> tier. You now have complete access.
            </p>
            <Button 
              variant="secondary" 
              onClick={() => setIsModalOpen(false)} 
              style={{ marginTop: '1.5rem', width: 'auto', minWidth: '150px' }}
            >
              Close Window
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}
