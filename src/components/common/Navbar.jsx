import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import NotificationBell from "../recommendation/NotificationBell";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Business Analysis", path: "/business-analysis" },
    { name: "Competitor Analysis", path: "/competitor-analysis" },
    { name: "Pricing", path: "/pricing" },
    { name: "Referral", path: "/referral" },
    { name: "Contact", path: "/contact" },
  ];

  // Base styles
  const navStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: isMobile ? "0.8rem 1.25rem" : "1rem 2.5rem",
    backgroundColor: "rgba(9, 8, 15, 0.95)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    boxSizing: "border-box",
  };

  const desktopRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const topRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  };

  const logoStyle = {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#ffffff",
    margin: 0,
    letterSpacing: "-0.5px",
    textDecoration: "none",
  };

  const logoHighlight = {
    color: "#6366f1",
  };

  const ulStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1.8rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = (isActive, isHovered) => ({
    textDecoration: "none",
    color: isActive 
      ? "#6366f1" 
      : (isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.65)"),
    fontWeight: "600",
    fontSize: "0.92rem",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
    padding: "0.2rem 0",
  });

  const buttonStyle = {
    backgroundColor: "#6366f1",
    color: "#ffffff",
    border: "none",
    padding: "0.6rem 1.3rem",
    fontSize: "0.9rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(99, 102, 241, 0.25)",
    transition: "transform 0.2s ease, background-color 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const desktopActionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
  };

  const mobileActionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const hamburgerButtonStyle = {
    background: "transparent",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    padding: "0.4rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.2s ease",
  };

  const mobileMenuContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    padding: "1.2rem 0 0.5rem 0",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    marginTop: "0.8rem",
    boxSizing: "border-box",
  };

  const mobileUlStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    width: "100%",
  };

  const mobileLinkStyle = (isActive, isHovered) => ({
    textDecoration: "none",
    color: isActive 
      ? "#6366f1" 
      : (isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.7)"),
    fontWeight: "600",
    fontSize: "1.05rem",
    transition: "all 0.2s ease",
    display: "block",
    width: "100%",
    padding: "0.6rem 0.8rem",
    borderRadius: "8px",
    backgroundColor: isActive ? "rgba(99, 102, 241, 0.08)" : "transparent",
    textAlign: "left",
    boxSizing: "border-box",
  });

  const mobileMenuActionsStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "1rem",
    paddingTop: "0.5rem",
    boxSizing: "border-box",
  };

  const mobileActionButtonStyle = {
    ...buttonStyle,
    width: "100%",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
  };

  return (
    <nav style={navStyle}>
      {isMobile ? (
        <>
          {/* Top row with Logo and Actions */}
          <div style={topRowStyle}>
            <Link to="/" style={logoStyle}>
              AI<span style={logoHighlight}>Growth</span> 
            </Link>
            <div style={mobileActionsStyle}>
              <NotificationBell />
              <button 
                style={hamburgerButtonStyle} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Collapsible Mobile Menu Drawer */}
          {isMenuOpen && (
            <div style={mobileMenuContainerStyle}>
              <ul style={mobileUlStyle}>
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  const isHovered = hoveredLink === idx;
                  return (
                    <li key={idx} style={{ width: "100%" }}>
                      <Link
                        to={link.path}
                        style={mobileLinkStyle(isActive, isHovered)}
                        onMouseEnter={() => setHoveredLink(idx)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div style={mobileMenuActionsStyle}>
                <button 
                  style={mobileActionButtonStyle}
                  onClick={() => navigate("/pricing")}
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div style={desktopRowStyle}>
          {/* Desktop Layout */}
          <Link to="/" style={logoStyle}>
            AI<span style={logoHighlight}>Growth</span> 
          </Link>

          <ul style={ulStyle}>
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              const isHovered = hoveredLink === idx;
              return (
                <li key={idx}>
                  <Link
                    to={link.path}
                    style={linkStyle(isActive, isHovered)}
                    onMouseEnter={() => setHoveredLink(idx)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div style={desktopActionsStyle}>
            <NotificationBell />
            <button 
              style={buttonStyle}
              onClick={() => navigate("/pricing")}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;