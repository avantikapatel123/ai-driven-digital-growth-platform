import React, { useState, useEffect } from 'react';
import { Target, Key } from 'lucide-react';
import Card from '../common/Card';
import InputField from '../common/InputField';
import TextArea from '../common/TextArea';
import Button from '../common/Button';
import { isValidUrl } from '../../utils/validators';

export default function CompetitorForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    competitorName: '',
    competitorUrl: '',
    focusArea: '',
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Your Business name is required';
    if (!formData.url.trim()) {
      newErrors.url = 'Your website URL is required';
    } else if (!isValidUrl(formData.url)) {
      newErrors.url = 'Please enter a valid URL (e.g. https://mybusiness.com)';
    }

    if (!formData.competitorName.trim()) newErrors.competitorName = 'Competitor name is required';
    if (!formData.competitorUrl.trim()) {
      newErrors.competitorUrl = 'Competitor website URL is required';
    } else if (!isValidUrl(formData.competitorUrl)) {
      newErrors.competitorUrl = 'Please enter a valid URL (e.g. https://competitor.com)';
    }

    if (!formData.focusArea.trim()) newErrors.focusArea = 'Please specify the main analysis focus';

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

  const apiContainerStyle = {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'var(--social-bg)',
    borderRadius: '12px',
    border: '1px solid var(--border)',
  };

  return (
    <Card style={{ maxWidth: '650px', margin: '0 auto' }}>
      <h2 style={titleStyle}>
        <Target size={22} style={{ color: 'var(--accent)' }} />
        AI Competitor SWOT Analysis
      </h2>
      <p style={subtitleStyle}>
        Compare your business against a primary competitor to identify strategic gaps, market opportunities, and vulnerabilities.
      </p>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 250px' }}>
            <InputField
              label="Your Business Name"
              name="name"
              placeholder="e.g. MyShop Online"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
          </div>
          <div style={{ flex: '1 1 250px' }}>
            <InputField
              label="Your Website URL"
              name="url"
              placeholder="e.g. https://myshop.com"
              value={formData.url}
              onChange={handleChange}
              error={errors.url}
              required
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 250px' }}>
            <InputField
              label="Competitor Name"
              name="competitorName"
              placeholder="e.g. MegaShop Retail"
              value={formData.competitorName}
              onChange={handleChange}
              error={errors.competitorName}
              required
            />
          </div>
          <div style={{ flex: '1 1 250px' }}>
            <InputField
              label="Competitor Website URL"
              name="competitorUrl"
              placeholder="e.g. https://megashop.com"
              value={formData.competitorUrl}
              onChange={handleChange}
              error={errors.competitorUrl}
              required
            />
          </div>
        </div>

        <TextArea
          label="Analysis Focus Area"
          name="focusArea"
          placeholder="What do you want the AI to analyze and compare? (e.g. Pricing plans, SEO search rankings, mobile user experience, product range, checkout flow...)"
          value={formData.focusArea}
          onChange={handleChange}
          error={errors.focusArea}
          required
          rows={3}
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
            If omitted, the platform will use preloaded mock SWOT benchmarks. Keys are stored locally on your browser.
          </p>
        </div>

        <Button type="submit" loading={loading} disabled={loading} style={{ marginTop: '1rem' }}>
          Generate SWOT & Benchmark
        </Button>
      </form>
    </Card>
  );
}
