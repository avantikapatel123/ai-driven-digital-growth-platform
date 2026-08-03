import axios from 'axios';

export const generateMockBusinessReport = (formData) => {
  const { name, url, industry, challenge } = formData;
  return {
    name,
    url,
    industry,
    challenge,
    overallScore: 68,
    categories: {
      seo: 65,
      ux: 72,
      copywriting: 67
    },
    painPoints: [
      {
        title: 'High Mobile Bounce Rates',
        description: 'Landing pages load slow image files, causing mobile visitors to exit prior to site hydration.',
        impact: 'High',
        metric: '42% Bounce'
      },
      {
        title: 'Vague Value Proposition',
        description: 'The header lacks a direct business offering explanation, leading to drop-offs in early user sessions.',
        impact: 'Medium',
        metric: '1.2% CTA CTR'
      }
    ],
    recommendations: [
      {
        title: 'Optimize Landing Page Assets',
        action: 'Convert homepage banners to WebP format and structure lazy loading blocks to lower load speeds below 2 seconds.',
        priority: 'High',
        time: '3 hours',
        focus: 'SEO'
      },
      {
        title: 'Add Concrete Trust Seals',
        action: 'Place customer testimonial text or security shields beneath core submission inputs to improve signup completion rates.',
        priority: 'Medium',
        time: '2 hours',
        focus: 'Copywriting'
      }
    ],
    projections: [
      { year: 'Current', value: 100 },
      { year: 'Month 3', value: 118 },
      { year: 'Month 6', value: 135 },
      { year: 'Month 12', value: 154 }
    ]
  };
};

export const fetchBusinessReportFromGemini = async (formData) => {
  const prompt = `You are a digital business auditor.
Analyze the following business:
Business Name: ${formData.name}
Website URL: ${formData.url}
Industry Type: ${formData.industry}
Key Growth Challenge: ${formData.challenge}

Generate a comprehensive diagnostic report in EXACTLY this JSON structure, with no markdown wrappers or text outside of the JSON block:
{
  "name": "${formData.name}",
  "url": "${formData.url}",
  "industry": "${formData.industry}",
  "challenge": "${formData.challenge}",
  "overallScore": 72, // integer overall index score (0-100)
  "categories": {
    "seo": 65, // integer (0-100)
    "ux": 78, // integer (0-100)
    "copywriting": 73 // integer (0-100)
  },
  "painPoints": [
    {
      "title": "Short title describing painpoint",
      "description": "Detailed observation connected to the industry",
      "impact": "High" or "Medium" or "Low",
      "metric": "Key stat (e.g. 4.2s load, 55% bounce)"
    }
  ],
  "recommendations": [
    {
      "title": "Short title of strategy",
      "action": "Description of exactly what to implement",
      "priority": "High" or "Medium" or "Low",
      "time": "Estimate (e.g. 2 hours, 1 day)",
      "focus": "Focus topic (e.g. SEO, User Experience)"
    }
  ],
  "projections": [
    {"year": "Current", "value": 100},
    {"year": "Month 3", "value": 120},
    {"year": "Month 6", "value": 140},
    {"year": "Month 12", "value": 175}
  ]
}

Ensure list items have at least 2 observations. Verify the JSON matches the schema.`;

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
  return JSON.parse(responseText.trim());
};
