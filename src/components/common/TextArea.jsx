import React from 'react';

export default function TextArea({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  rows = 4,
  required = false,
  style = {}
}) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.25rem',
    width: '100%',
    textAlign: 'left',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-h)',
  };

  const textareaStyle = {
    padding: '0.75rem 1rem',
    fontSize: '0.95rem',
    borderRadius: '10px',
    border: error ? '1px solid #ef4444' : '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-h)',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s ease',
    width: '100%',
    boxSizing: 'border-box',
  };

  const errorStyle = {
    fontSize: '0.8rem',
    color: '#ef4444',
    marginTop: '0.25rem',
  };

  return (
    <div style={containerStyle}>
      {label && (
        <label htmlFor={name} style={labelStyle}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        style={{ ...textareaStyle, ...style }}
      />
      {error && <span style={errorStyle}>{error}</span>}
    </div>
  );
}
