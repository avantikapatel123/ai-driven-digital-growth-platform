import React, { useState } from 'react';
import RecommendationCard from './RecommendationCard';
import { Filter } from 'lucide-react';

export default function SuggestionList({ recommendations = [], onComplete }) {
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const priorities = ['all', 'high', 'medium', 'low'];
  const categories = ['all', 'seo', 'user experience', 'conversion', 'content'];

  const filtered = recommendations.filter(item => {
    const matchPriority = filterPriority === 'all' || item.priority.toLowerCase() === filterPriority;
    const matchCategory = filterCategory === 'all' || item.category.toLowerCase() === filterCategory;
    return matchPriority && matchCategory;
  });

  const controlsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
  };

  const filterGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap',
  };

  const selectStyle = {
    padding: '0.4rem 0.8rem',
    fontSize: '0.85rem',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-h)',
    outline: 'none',
    cursor: 'pointer',
    fontWeight: '600',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
    gap: '1.5rem',
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Filters bar */}
      <div style={controlsStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-h)' }}>
          <Filter size={16} style={{ color: '#6366f1' }} />
          <span>Filter Recommendations</span>
        </div>

        <div style={filterGroupStyle}>
          {/* Priority Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>Priority:</span>
            <select 
              value={filterPriority} 
              onChange={(e) => setFilterPriority(e.target.value)}
              style={selectStyle}
            >
              {priorities.map(p => (
                <option key={p} value={p}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>Category:</span>
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              style={selectStyle}
            >
              {categories.map(c => (
                <option key={c} value={c}>
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid listing */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', border: '1px dashed var(--border)', borderRadius: '12px', backgroundColor: 'var(--social-bg)' }}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text)', fontStyle: 'italic' }}>
            No recommendations match your selected filters.
          </p>
        </div>
      ) : (
        <div style={gridStyle}>
          {filtered.map(item => (
            <RecommendationCard 
              key={item.id} 
              recommendation={item} 
              onComplete={onComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
