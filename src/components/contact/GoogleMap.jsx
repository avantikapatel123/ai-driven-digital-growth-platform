import React from 'react';
import Card from '../common/Card';

export default function GoogleMap() {
  const mapContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '350px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid var(--border)',
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: 0,
    // Applies a high-tech dark overlay theme filter to standard map frames
    filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) opacity(0.85)',
  };

  return (
    <Card style={{ padding: '1rem', width: '100%' }}>
      <div style={mapContainerStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191124806653!2d-122.4011833!3d37.7928236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062094254fb%3A0xe54e608034d65373!2s100%20Pine%20St%2C%20San%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          title="GrowthPulse HQ Office Map"
          style={iframeStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Card>
  );
}
