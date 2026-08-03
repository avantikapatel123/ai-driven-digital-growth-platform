import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import WhatsAppButton from '../components/contact/WhatsAppButton';
import GoogleMap from '../components/contact/GoogleMap';

export default function Contact() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 'var(--page-padding-y) var(--page-padding-x)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
    gap: '2.5rem',
    alignItems: 'start',
  };

  const rightColStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const whatsappPromoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
    gap: '1rem',
  };

  return (
    <div className="page-container" style={containerStyle}>
      <SectionTitle 
        badge="Connect With Us"
        title="Get In Touch"
        subtitle="Have questions about our AI diagnostics or need a custom integration? We're here to help you accelerate growth."
      />

      <div style={gridStyle}>
        {/* Left Column: Form */}
        <ContactForm />

        {/* Right Column: Info & WhatsApp */}
        <div style={rightColStyle}>
          <ContactInfo />

          <div style={whatsappPromoStyle}>
            <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-h)' }}>
              Need Instant Support?
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.4' }}>
              Chat directly with our tech support or sales specialist for quick answers to your questions.
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-h)', textAlign: 'left', margin: 0 }}>
          Find Our HQ Office
        </h3>
        <GoogleMap />
      </div>
    </div>
  );
}
