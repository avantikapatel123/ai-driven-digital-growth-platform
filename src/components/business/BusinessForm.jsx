import React, { useState, useEffect } from 'react';
import { Sparkles, Key } from 'lucide-react';
import Card from '../common/Card';
import InputField from '../common/InputField';
import TextArea from '../common/TextArea';
import Button from '../common/Button';
import { isValidUrl } from '../../utils/validators';

export default function BusinessForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    name: '',
    industry: 'ecommerce',
    url: '',
    challenges: '',
    apiKey: '',
  });

  const [errors, setErrors] = useState({});

  
  useEffect(() => {
    const savedKey = localStorage.getItem('growth_platform_gemini_key');
    if (savedKey) {
      setFormData(prev => ({ ...prev, apiKey: savedKey }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Business name is required';
    if (!formData.url.trim()) {
      newErrors.url = 'Website URL is required';
    } else if (!isValidUrl(formData.url)) {
      newErrors.url = 'Please enter a valid URL (e.g. https://example.com)';
    }
    if (!formData.challenges.trim()) newErrors.challenges = 'Please describe your main challenges';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

   
    if (formData.apiKey.trim()) {
      localStorage.setItem('growth_platform_gemini_key', formData.apiKey.trim());
    } else {
      localStorage.removeItem('growth_platform_gemini_key');
    }

    onSubmit(formData);
  };

  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-h)',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const subtitleStyle = {
    fontSize: '0.9rem',
    color: 'var(--text)',
    marginBottom: '1.5rem',
  };

  const selectContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.25rem',
    width: '100%',
    textAlign: 'left',
  };

  const labelStyle = {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-h)',
  };

  const selectStyle = {
    padding: '0.75rem 1rem',
    fontSize: '0.95rem',
    borderRadius: '10px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-h)',
    outline: 'none',
    width: '100%',
    cursor: 'pointer',
  };

  const apiContainerStyle = {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'var(--social-bg)',
    borderRadius: '12px',
    border: '1px solid var(--border)',
  };

  return (
    <Card style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={titleStyle}>
        <Sparkles size={22} style={{ color: 'var(--accent)' }} />
        Business Growth Audit
      </h2>
      <p style={subtitleStyle}>
        Enter your details to generate an instant digital marketing and conversion audit report.
      </p>

      <form onSubmit={handleSubmit} style={formStyle}>
        <InputField
          label="Business Name"
          name="name"
          placeholder="e.g. Apex Clothes or GrowthPulse SaaS"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <div style={selectContainerStyle}>
          <label style={labelStyle}>Industry Category</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            style={selectStyle}
          >
            <option value="ecommerce">E-commerce / Retail</option>
            <option value="saas">SaaS / Software Product</option>
            <option value="agency">Agency / Professional Services</option>
            <option value="education">EdTech / Education</option>
            <option value="healthcare">Healthcare / Wellness</option>
            <option value="other">Other Business model</option>
          </select>
        </div>

        <InputField
          label="Website URL"
          name="url"
          placeholder="e.g. https://apexclothes.com"
          value={formData.url}
          onChange={handleChange}
          error={errors.url}
          required
        />

        <TextArea
          label="Key Growth Challenges"
          name="challenges"
          placeholder="Describe your current issues (e.g. Low checkout conversions, high bounce rates, struggling with organic search traffic...)"
          value={formData.challenges}
          onChange={handleChange}
          error={errors.challenges}
          required
          rows={4}
        />

        <div style={apiContainerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
            <Key size={16} style={{ color: 'var(--accent)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-h)' }}>Gemini API Key (Optional)</span>
          </div>
          <InputField
            name="apiKey"
            type="password"
            placeholder="AIzaSy..."
            value={formData.apiKey}
            onChange={handleChange}
            style={{ marginBottom: 0 }}
          />
          <p style={{ fontSize: '0.75rem', color: 'var(--text)', marginTop: '0.5rem', textAlign: 'left', lineHeight: '1.4' }}>
            If omitted, the platform will use preloaded mock diagnostics. Keys are saved locally on your browser.
          </p>
        </div>

        <Button type="submit" loading={loading} disabled={loading} style={{ marginTop: '1rem' }}>
          Analyze Growth Potential
        </Button>
      </form>
    </Card>
  );
}
