import axios from 'axios';

export const generateMockCompetitorReport = (formData) => {
  const { name, url, competitorName, competitorUrl, focusArea } = formData;
  const focus = focusArea.toLowerCase();

  // Default values
  let yourScore = 70;
  let competitorScore = 65;
  let yourCategories = { seo: 68, ux: 74, copy: 66, pricingValue: 72 };
  let competitorCategories = { seo: 75, ux: 58, copy: 72, pricingValue: 55 };

  let strengths = [];
  let weaknesses = [];
  let opportunities = [];
  let threats = [];
  let actions = [];

  if (focus.includes('price') || focus.includes('pricing') || focus.includes('cost') || focus.includes('plan')) {
    yourScore = 78;
    competitorScore = 62;
    yourCategories = { seo: 65, ux: 72, copy: 70, pricingValue: 88 };
    competitorCategories = { seo: 74, ux: 64, copy: 78, pricingValue: 50 };

    strengths = [
      { title: 'Premium Branding', desc: `${competitorName} commands higher pricing because of established authority, premium packaging, and superior customer loyalty.` },
      { title: 'Long-Term Contract Locking', desc: 'They successfully lock enterprises into 12-month non-refundable contracts, stabilizing their MRR.' }
    ];
    weaknesses = [
      { title: 'Inflexible Pricing Grid', desc: 'Their pricing tiers lack customization or credit-based models. Smaller businesses find it overpriced.' },
      { title: 'No Free Entry Tier', desc: 'No freemium or low-cost self-serve starter tier, creating a high barrier to entry for early-stage leads.' }
    ];
    opportunities = [
      { title: 'Introduce a Budget Starter Plan', desc: `By positioning a $19/mo plan, ${name} can capture the long tail of users rejected by ${competitorName}.` },
      { title: 'Add Transparent Add-ons', desc: 'Provide value-based pricing where customers only pay for additional resources they consume.' }
    ];
    threats = [
      { title: 'Enterprise Discounting Price War', desc: `${competitorName} is beginning to offer heavy manual discounts during sales calls to keep deals.` },
      { title: 'Competitor Feature Bundling', desc: 'They may bundle previously paid features into their base plan, eroding your relative pricing advantage.' }
    ];
    actions = [
      {
        title: 'Launch a "Competitor vs Us" Pricing Page',
        action: `Highlight your plan flexibilities and point-by-point feature comparison, showing how ${name} is 40% more cost-effective.`,
        impact: 'High',
        difficulty: 'Easy',
        time: '3 hours',
        focus: 'Pricing Strategy'
      },
      {
        title: 'Implement 14-Day Free Trial (No Credit Card)',
        action: 'Remove friction for leads who cannot justify the competitor\'s high startup fee. Allow immediate access to features.',
        impact: 'High',
        difficulty: 'Medium',
        time: '1 day',
        focus: 'User Acquisition'
      }
    ];
  } else {
    // General UX/Product focus mock
    yourScore = 74;
    competitorScore = 68;
    yourCategories = { seo: 65, ux: 80, copy: 72, pricingValue: 70 };
    competitorCategories = { seo: 72, ux: 62, copy: 66, pricingValue: 68 };

    strengths = [
      { title: 'Feature Richness', desc: `${competitorName} has multiple sub-features built over time, giving them a broad checklist on marketing sheets.` },
      { title: 'Extensive App Integrations', desc: 'They integrate with 50+ third-party CRM, marketing, and analytical tools.' }
    ];
    weaknesses = [
      { title: 'Cluttered UI & Complex Navigation', desc: 'Their product UI is bloated and hard for new users to navigate. The onboarding experience has a steep learning curve.' },
      { title: 'Slow Support Responses', desc: 'Customer support takes up to 48 hours to answer basic technical queries on free/low tiers.' }
    ];
    opportunities = [
      { title: 'Simplify the Product Onboarding', desc: `Position ${name} as the "Simplest, fastest setup alternative" with a zero-training user flow.` },
      { title: 'Build a Live Chat Advantage', desc: 'Implement instant WhatsApp support or live chat responses to capture frustrated leads.' }
    ];
    threats = [
      { title: 'Re-platforming Redesign', desc: 'Rumors show they are working on a complete front-end dashboard redesign to simplify their user experience.' },
      { title: 'Aggressive Retargeting Campaigns', desc: 'They retarget visitors of your website using tracking pixels and offering free trials.' }
    ];
    actions = [
      {
        title: 'Implement Interactive Setup Tour',
        action: 'Add a friendly, 30-second checklist tour on login that helps new users complete their first setup instantly.',
        impact: 'High',
        difficulty: 'Easy',
        time: '3 hours',
        focus: 'User Experience'
      },
      {
        title: 'Integrate WhatsApp Support Button',
        action: 'Provide a direct link to a support specialist on the landing page, solving user problems faster than competitor\'s ticketing systems.',
        impact: 'Medium',
        difficulty: 'Easy',
        time: '1 hour',
        focus: 'Customer Success'
      }
    ];
  }

  return {
    name,
    url,
    competitorName,
    competitorUrl,
    yourScore,
    competitorScore,
    yourCategories,
    competitorCategories,
    strengths,
    weaknesses,
    opportunities,
    threats,
    actions
  };
};

export const fetchCompetitorReportFromGemini = async (formData) => {
  const prompt = `You are a digital business strategist and competitor analyst.
Analyze the following competitive profile:
Your Business Name: ${formData.name}
Your Website URL: ${formData.url}
Competitor Business Name: ${formData.competitorName}
Competitor Website URL: ${formData.competitorUrl}
Focus Area of Analysis: ${formData.focusArea}

Generate a comprehensive SWOT and benchmarking report in EXACTLY this JSON structure, with no markdown wrappers or text outside of the JSON block:
{
  "name": "${formData.name}",
  "url": "${formData.url}",
  "competitorName": "${formData.competitorName}",
  "competitorUrl": "${formData.competitorUrl}",
  "yourScore": 75, // integer overall index score (0-100)
  "competitorScore": 70, // competitor overall index score (0-100)
  "yourCategories": {
    "seo": 70, // integer 0-100
    "ux": 75, // integer 0-100
    "copy": 68, // integer 0-100
    "pricingValue": 72 // integer 0-100
  },
  "competitorCategories": {
    "seo": 80, // integer 0-100
    "ux": 62, // integer 0-100
    "copy": 74, // integer 0-100
    "pricingValue": 60 // integer 0-100
  },
  "strengths": [
    {
      "title": "Short title describing strength",
      "desc": "Detail connecting to their website and offerings"
    }
  ],
  "weaknesses": [
    {
      "title": "Short title describing weakness",
      "desc": "Detail showing competitor gaps, bugs, price bottlenecks"
    }
  ],
  "opportunities": [
    {
      "title": "Short title describing opportunity",
      "desc": "Market gap or angle you can exploit"
    }
  ],
  "threats": [
    {
      "title": "Short title describing threat",
      "desc": "Actions they might take to mitigate your growth"
    }
  ],
  "actions": [
    {
      "title": "Tactical Recommendation",
      "action": "Description of exactly what you should implement",
      "impact": "High" or "Medium" or "Low",
      "difficulty": "Easy" or "Medium" or "Hard",
      "time": "Estimate (e.g. 2 hours, 1 day)",
      "focus": "Focus topic (e.g. Technical SEO, Copywriting)"
    }
  ]
}

Ensure all lists have at least 2 items. Verify the JSON matches the schema.`;

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
