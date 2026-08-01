import React, { useState } from 'react';
import axios from 'axios';
import BusinessForm from '../components/business/BusinessForm';
import BusinessReport from '../components/business/BusinessReport';

export default function BusinessAnalysis() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  const generateMockReport = (formData) => {
    const { name, industry, url, challenges } = formData;
    
   
    let score = 65;
    let categories = { seo: 60, ux: 70, copy: 55, retention: 75 };
    let painPoints = [];
    let recommendations = [];
    let projections = {};

    if (industry === 'ecommerce') {
      score = 64;
      categories = { seo: 58, ux: 72, copy: 50, retention: 76 };
      painPoints = [
        {
          title: 'High Shopping Cart Abandonment',
          severity: 'high',
          location: 'Checkout Funnel (/cart -> /checkout)',
          desc: `Based on your challenges: "${challenges}". The checkout flow lacks immediate trust factors, has too many form fields, and has hidden shipping fees causing dropoffs.`,
        },
        {
          title: 'Missing Post-Purchase Referral Hook',
          severity: 'medium',
          location: 'Thank You Page',
          desc: 'Customers complete their purchase, but there is no mechanism or incentive to share their referral link, leading to missed organic word-of-mouth growth.',
        },
        {
          title: 'Unoptimized Product Page Copy',
          severity: 'low',
          location: 'Product Details Section',
          desc: 'Bullet points focus entirely on technical specs rather than customer benefits, failing to address core buyer desires.',
        }
      ];
      recommendations = [
        {
          title: 'Simplify Checkout Fields & Add Security Badges',
          impact: 'High',
          difficulty: 'Easy',
          time: '3 hours',
          action: 'Enable guest checkout, merge address forms, and insert visual SSL badges above the buy button.',
        },
        {
          title: 'Install Post-Checkout Sharing Coupon Popup',
          impact: 'High',
          difficulty: 'Easy',
          time: '2 hours',
          action: 'Display a popup offering a 10% coupon for their next purchase if they invite a friend to shop.',
        },
        {
          title: 'Rewrite Product Details focusing on Outcomes',
          impact: 'Medium',
          difficulty: 'Medium',
          time: '1 day',
          action: 'Describe how the product solves user problems instead of just listing materials and size dimensions.',
        }
      ];
      projections = {
        conversionCurrent: '1.5%',
        conversionTarget: '3.1%',
        conversionLift: '+106%',
        trafficGain: '+35%',
        revenueLift: '$4,200',
        timeline: '30 Days',
      };
    } else if (industry === 'saas') {
      score = 71;
      categories = { seo: 68, ux: 74, copy: 65, retention: 77 };
      painPoints = [
        {
          title: 'Cluttered SaaS Dashboard Onboarding',
          severity: 'high',
          location: 'First-time Login Page',
          desc: 'Users are dropping off in the first 5 minutes of sign-up due to a lack of tooltips, guiding setups, or checklist goals.',
        },
        {
          title: 'Vague SaaS Pricing Callout',
          severity: 'medium',
          location: 'Pricing Page (/pricing)',
          desc: 'The difference between pricing tiers is confusing. Features list is too technical and does not highlight target audience tiers.',
        }
      ];
      recommendations = [
        {
          title: 'Implement Interactive Onboarding Checklist',
          impact: 'High',
          difficulty: 'Medium',
          time: '2 days',
          action: 'Add a 4-step onboarding checklist that rewards users with extra credits when they complete basic setups.',
        },
        {
          title: 'Re-align pricing tiers with user personas',
          impact: 'High',
          difficulty: 'Easy',
          time: '4 hours',
          action: 'Add explicit headings (e.g. "For Solopreneurs", "For Scale Agencies") to each tier on the pricing grid.',
        }
      ];
      projections = {
        conversionCurrent: '2.1%',
        conversionTarget: '3.8%',
        conversionLift: '+80%',
        trafficGain: '+40%',
        revenueLift: '$6,500',
        timeline: '45 Days',
      };
    } else {
      // General industry mock
      score = 68;
      categories = { seo: 62, ux: 70, copy: 64, retention: 76 };
      painPoints = [
        {
          title: 'Slow page loads and layout shifts',
          severity: 'high',
          location: 'Landing Page Core Web Vitals',
          desc: `Uncompressed hero images and unoptimized scripts are slowing down first paint times, leading to bounce actions.`,
        },
        {
          title: 'Weak Call-to-Action Contrast',
          severity: 'medium',
          location: 'Primary CTA Buttons',
          desc: 'CTA button color blends into the footer background, reducing click-through urgency.',
        }
      ];
      recommendations = [
        {
          title: 'Compress and Serve Modern WebP Images',
          impact: 'High',
          difficulty: 'Easy',
          time: '1 hour',
          action: 'Convert all hero and detail images to .webp format and implement lazy loading.',
        },
        {
          title: 'Adopt High Contrast Accent Styling',
          impact: 'High',
          difficulty: 'Easy',
          time: '30 mins',
          action: 'Use purple/indigo highlights (#6366f1) to draw users visually to action buttons.',
        }
      ];
      projections = {
        conversionCurrent: '2.0%',
        conversionTarget: '3.5%',
        conversionLift: '+75%',
        trafficGain: '+25%',
        revenueLift: '$3,100',
        timeline: '30 Days',
      };
    }

    return {
      name,
      industry,
      url,
      score,
      categories,
      painPoints,
      recommendations,
      projections
    };
  };

  const handleAuditSubmit = async (formData) => {
    setLoading(true);
    setError(null);

   
    if (!formData.apiKey) {
      setTimeout(() => {
        const mockData = generateMockReport(formData);
        setReport(mockData);
        setLoading(false);
      }, 1500); // 1.5 seconds loading state simulation
      return;
    }

   
    try {
      const prompt = `You are a professional digital marketing and conversion rate optimization (CRO) auditor.
Analyze the following business profile:
Name: ${formData.name}
Industry: ${formData.industry}
Website URL: ${formData.url}
Challenges: ${formData.challenges}

Generate a comprehensive diagnostic report in EXACTLY this JSON structure, with no markdown wrappers or text outside of the JSON block:
{
  "name": "${formData.name}",
  "industry": "${formData.industry}",
  "url": "${formData.url}",
  "score": 70, // integer from 0 to 100 representing overall readiness
  "categories": {
    "seo": 60, // integer 0-100
    "ux": 70, // integer 0-100
    "copy": 65, // integer 0-100
    "retention": 80 // integer 0-100
  },
  "painPoints": [
    {
      "title": "Short title describing pain point",
      "severity": "high" or "medium" or "low",
      "location": "Page or location (e.g. Checkout page, Hero header)",
      "desc": "Detail explanation connecting to their challenges and URL"
    }
  ],
  "recommendations": [
    {
      "title": "Title of action item",
      "impact": "High" or "Medium" or "Low",
      "difficulty": "Easy" or "Medium" or "Hard",
      "time": "Estimate time (e.g. 2 hours, 1 day)",
      "action": "Specific instructions on what to change"
    }
  ],
  "projections": {
    "conversionCurrent": "current conversion rate guess (e.g. 1.5%)",
    "conversionTarget": "target conversion rate guess (e.g. 3.0%)",
    "conversionLift": "percent increase (e.g. +100%)",
    "trafficGain": "percent traffic increase estimate (e.g. +30%)",
    "revenueLift": "dollar amount lift estimate (e.g. $4,000)",
    "timeline": "Timeline span (e.g. 30 Days)"
  }
}

Keep descriptions highly specific to the provided business details. Make sure the JSON is valid.`;

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${formData.apiKey}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json'
          }
        }
      );

      const responseText = response.data.candidates[0].content.parts[0].text;
      const parsedData = JSON.parse(responseText.trim());
      setReport(parsedData);
    } catch (err) {
      console.error('Gemini Audit Error:', err);
      setError('Gemini API call failed. Using mock calculations instead.');
      // Failover to mock report so user doesn't hit a blank page
      const fallbackReport = generateMockReport(formData);
      setReport(fallbackReport);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setReport(null);
    setError(null);
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2.5rem',
    minHeight: '75vh',
  };

  const errorBannerStyle = {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#ef4444',
    padding: '0.75rem 1.25rem',
    borderRadius: '10px',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
  };

  return (
    <div className="page-container" style={containerStyle}>
      {error && <div style={errorBannerStyle}>{error}</div>}

      {!report ? (
        <BusinessForm onSubmit={handleAuditSubmit} loading={loading} />
      ) : (
        <BusinessReport report={report} onReset={handleReset} />
      )}
    </div>
  );
}
