import React, { useState } from 'react';
import InputField from '../common/InputField';
import TextArea from '../common/TextArea';
import Button from '../common/Button';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const successContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1.5rem',
    borderRadius: '16px',
    border: '1px dashed var(--border)',
    backgroundColor: 'var(--social-bg)',
    textAlign: 'center',
    gap: '1rem',
  };

  return (
    <div style={{ width: '100%' }}>
      {submitted ? (
        <div style={successContainerStyle}>
          <CheckCircle2 size={48} color="#10b981" />
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-h)' }}>
            Message Sent!
          </h3>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.5', maxWidth: '350px' }}>
            Thank you for getting in touch. Our growth strategy team will review your message and reply within 24 hours.
          </p>
          <Button 
            variant="secondary" 
            onClick={() => setSubmitted(false)}
            style={{ width: 'auto', marginTop: '1rem', minWidth: '150px' }}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <InputField
            label="Your Name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />

          <InputField
            label="Subject"
            name="subject"
            placeholder="How can we help your business grow?"
            value={formData.subject}
            onChange={handleInputChange}
            error={errors.subject}
            required
          />

          <TextArea
            label="Your Message"
            name="message"
            placeholder="Describe your project, website goals, or questions..."
            value={formData.message}
            onChange={handleInputChange}
            error={errors.message}
            rows={5}
            required
          />

          <Button 
            type="submit" 
            loading={loading}
            disabled={loading}
            style={{ marginTop: '1rem' }}
          >
            <Send size={16} />
            <span>Send Message</span>
          </Button>
        </form>
      )}
    </div>
  );
}
