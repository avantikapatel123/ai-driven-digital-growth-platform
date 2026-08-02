import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 11, 15, 0.65)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '1.5rem',
  };

  const modalBoxStyle = {
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '16px',
    boxShadow: 'var(--shadow), 0 20px 25px -5px rgba(0, 0, 0, 0.3)',
    maxWidth: '500px',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 1.5rem',
    borderBottom: '1px solid var(--border)',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--text-h)',
  };

  const closeButtonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'var(--text)',
    cursor: 'pointer',
    display: 'inline-flex',
    padding: '0.25rem',
    borderRadius: '50%',
    transition: 'all 0.2s',
  };

  const bodyStyle = {
    padding: '1.5rem',
    overflowY: 'auto',
    maxHeight: '75vh',
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalBoxStyle} onClick={(e) => e.stopPropagation()}>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes modalSlideIn {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}} />
        
        <div style={headerStyle}>
          <h3 style={titleStyle}>{title}</h3>
          <button 
            style={closeButtonStyle} 
            onClick={onClose}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--social-bg)';
              e.currentTarget.style.color = 'var(--text-h)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={bodyStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}
