import React, { useState } from 'react';
import PricingToggle from '../components/pricing/PricingToggle';
import PricingCard from '../components/pricing/PricingCard';
import Modal from '../components/common/Modal';
import InputField from '../components/common/InputField';
import Button from '../components/common/Button';
import { CreditCard, CheckCircle2 } from 'lucide-react';
import { getPricingPlans, submitPaymentCheckout } from '../services/pricingService';

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

  const plans = getPricingPlans();

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

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    if (!validateCheckout()) return;

    setCheckoutLoading(true);
    try {
      await submitPaymentCheckout(checkoutData);
      setCheckoutStep('success');
    } catch (err) {
      console.error('Checkout error:', err);
      setErrors({ form: 'Payment processing failed. Please try again.' });
    } finally {
      setCheckoutLoading(false);
    }
  };

  const pageContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 'var(--page-padding-y) var(--page-padding-x)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
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
            {errors.form && <div style={{ color: '#ef4444', fontSize: '0.85rem' }}>{errors.form}</div>}
            
            <div style={{ display: 'flex', justifyContext: 'space-between', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--social-bg)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', marginBottom: '0.5rem' }}>
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
