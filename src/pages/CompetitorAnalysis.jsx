import React, { useState } from 'react';
import CompetitorForm from '../components/competitor/CompetitorForm';
import SWOTReport from '../components/competitor/SWOTReport';
import { generateMockCompetitorReport, fetchCompetitorReportFromGemini } from '../services/competitorService';

export default function CompetitorAnalysis() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalysisSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    if (!formData.apiKey) {
      setTimeout(() => {
        const mockData = generateMockCompetitorReport(formData);
        setReport(mockData);
        setLoading(false);
      }, 1500);
      return;
    }

    try {
      const data = await fetchCompetitorReportFromGemini(formData);
      setReport(data);
    } catch (err) {
      console.error('Gemini SWOT Error:', err);
      setError('Gemini API call failed. Using mock calculations instead.');
      const fallbackReport = generateMockCompetitorReport(formData);
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
    padding: 'var(--page-padding-y) var(--page-padding-x)',
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
        <CompetitorForm onSubmit={handleAnalysisSubmit} loading={loading} />
      ) : (
        <SWOTReport report={report} onReset={handleReset} />
      )}
    </div>
  );
}
