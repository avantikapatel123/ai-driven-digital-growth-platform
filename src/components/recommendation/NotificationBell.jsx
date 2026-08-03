import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Sparkles } from 'lucide-react';

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: 'Speed SEO Tactic', desc: 'Optimize WebP landing page assets.', time: '2 mins ago' },
    { id: 2, title: 'UX Conversion Fix', desc: 'Simplify your mobile navigation checklist.', time: '1 hour ago' },
    { id: 3, title: 'Referral Earned', desc: 'Acme Corp registered with your code.', time: '2 hours ago' }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    setUnreadCount(0);
  };

  const handleNotificationClick = (id) => {
    setIsOpen(false);
    navigate('/recommendations');
  };

  const containerStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
  };

  const iconButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'var(--text)',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '0.4rem',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '8px',
    height: '8px',
    backgroundColor: '#ef4444',
    borderRadius: '50%',
    border: '2px solid var(--bg)',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '0.5rem',
    width: '280px',
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    boxShadow: 'var(--shadow), 0 10px 15px -3px rgba(0, 0, 0, 0.2)',
    zIndex: 1500,
    overflow: 'hidden',
    display: isOpen ? 'block' : 'none',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 1rem',
    borderBottom: '1px solid var(--border)',
    backgroundColor: 'var(--social-bg)',
  };

  const footerStyle = {
    padding: '0.6rem',
    textAlign: 'center',
    borderTop: '1px solid var(--border)',
    backgroundColor: 'var(--social-bg)',
  };

  const footerLinkStyle = {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#6366f1',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    width: '100%',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const itemStyle = {
    padding: '0.75rem 1rem',
    borderBottom: '1px solid var(--border)',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  return (
    <div style={containerStyle} ref={dropdownRef}>
      <button 
        style={iconButtonStyle} 
        onClick={handleToggle}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--social-bg)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <Bell size={20} />
        {unreadCount > 0 && <div style={badgeStyle} />}
      </button>

      <div style={dropdownStyle}>
        <div style={headerStyle}>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-h)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Sparkles size={12} color="#a855f7" />
            AI Suggestions
          </span>
          {unreadCount > 0 && <span style={{ fontSize: '0.7rem', color: 'var(--text)' }}>New insights</span>}
        </div>

        <ul style={listStyle}>
          {notifications.map((item) => (
            <li 
              key={item.id} 
              style={itemStyle} 
              onClick={() => handleNotificationClick(item.id)}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--social-bg)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-h)' }}>{item.title}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text)', margin: '0.1rem 0' }}>{item.desc}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text)', opacity: 0.7 }}>{item.time}</div>
            </li>
          ))}
        </ul>

        <div style={footerStyle}>
          <button style={footerLinkStyle} onClick={() => { setIsOpen(false); navigate('/recommendations'); }}>
            View All Insights
          </button>
        </div>
      </div>
    </div>
  );
}
