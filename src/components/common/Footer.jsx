import { Link } from "react-router-dom";

function Footer() {
 
  const footerStyle = {
    backgroundColor: "rgba(9, 8, 15, 0.98)", 
    color: "var(--text)",
    padding: "3rem var(--page-padding-x) 1.5rem var(--page-padding-x)",
    fontSize: "0.9rem",
    marginTop: "auto",
    borderTop: "1px solid var(--border)",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const brandColStyle = {
    flex: "1 1 300px",
  };

  const titleStyle = {
    color: "#ffffff",
    fontSize: "1.25rem",
    fontWeight: "700",
    marginBottom: "0.8rem",
  };

  const descStyle = {
    lineHeight: "1.6",
    color: "#9ca3af",
  };

  const sectionTitleStyle = {
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "1rem",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  };

  const linkStyle = {
    color: "#9ca3af",
    textDecoration: "none",
    transition: "color 0.2s ease",
  };

  const contactTextStyle = {
    margin: "0.5rem 0",
    color: "#9ca3af",
  };

  const hrStyle = {
    borderColor: "var(--border)",
    margin: "2.5rem 0 1.5rem 0",
    borderStyle: "solid",
    borderWidth: "1px 0 0 0",
  };

  const copyrightStyle = {
    textAlign: "center",
    fontSize: "0.85rem",
    color: "#6b7280",
    margin: 0,
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Brand & Description Column */}
        <div style={brandColStyle}>
          <h2 style={titleStyle}>
            AI<span style={{ color: "#6366f1" }}>Growth</span> 
          </h2>
          <p style={descStyle}>
            Helping businesses grow with Artificial Intelligence and Digital
            Marketing.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 style={sectionTitleStyle}>Quick Links</h3>
          <ul style={ulStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/business-analysis" style={linkStyle}>Business Analysis</Link></li>
            <li><Link to="/competitor-analysis" style={linkStyle}>Competitor Analysis</Link></li>
            <li><Link to="/pricing" style={linkStyle}>Pricing</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 style={sectionTitleStyle}>Contact Us</h3>
          <p style={contactTextStyle}>
            <strong>Email:</strong> support@growthpulse.ai
          </p>
          <p style={contactTextStyle}>
            <strong>Phone:</strong> +91 9876543210
          </p>
        </div>
      </div>

      <hr style={hrStyle} />

      <p style={copyrightStyle}>
        © 2026 GrowthPulse AI. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;