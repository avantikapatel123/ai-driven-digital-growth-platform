import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Card from '../common/Card';

export default function ContactInfo() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    textAlign: 'left',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  };

  const iconWrapperStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '10px',
    backgroundColor: 'var(--social-bg)',
    color: '#6366f1',
    flexShrink: 0,
  };

  const labelStyle = {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--text)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    margin: 0,
  };

  const valueStyle = {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--text-h)',
    margin: '0.2rem 0 0 0',
    lineHeight: '1.4',
  };

  const infoItems = [
    {
      icon: <Mail size={18} />,
      label: 'Email Us',
      value: 'support@growthpulse.ai',
      href: 'mailto:support@growthpulse.ai'
    },
    {
      icon: <Phone size={18} />,
      label: 'Call Us',
      value: '+1 (555) 019-2834',
      href: 'tel:+15550192834'
    },
    {
      icon: <MapPin size={18} />,
      label: 'Visit Office',
      value: '100 Pine Street, Suite 1200, San Francisco, CA 94111',
      href: 'https://maps.google.com'
    },
    {
      icon: <Clock size={18} />,
      label: 'Business Hours',
      value: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
    }
  ];

  return (
    <Card style={{ padding: '2rem' }}>
      <div style={containerStyle}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-h)' }}>
          Contact Information
        </h3>
        <p style={{ margin: '0 0 1rem 0', fontSize: '0.88rem', color: 'var(--text)', lineHeight: '1.5' }}>
          Have questions about our enterprise audits or need a customized analysis? Contact us directly.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {infoItems.map((item, idx) => (
            <div key={idx} style={itemStyle}>
              <div style={iconWrapperStyle}>
                {item.icon}
              </div>
              <div>
                <h4 style={labelStyle}>{item.label}</h4>
                {item.href ? (
                  <a 
                    href={item.href} 
                    target={item.label === 'Visit Office' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    style={{ ...valueStyle, textDecoration: 'none', color: 'var(--text-h)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#6366f1'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-h)'}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p style={valueStyle}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
