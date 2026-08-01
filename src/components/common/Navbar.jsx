import { Link } from "react-router-dom";

function Navbar() {

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2.5rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid #f3f4f6",
  };

  const logoStyle = {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#111827",
    margin: 0,
    letterSpacing: "-0.5px",
  };

  const logoHighlight = {
    color: "#6366f1", // Modern Purple/Indigo color
  };

  const ulStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1.8rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#4b5563",
    fontWeight: "500",
    fontSize: "0.95rem",
    transition: "color 0.2s ease",
  };

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
  };

  return (
    <nav style={navStyle}>
      <h2 style={logoStyle}>
        AI<span style={logoHighlight}>Growth</span> 
      </h2>

      <ul style={ulStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/business-analysis" style={linkStyle}>Business Analysis</Link>
        </li>
        <li>
          <Link to="/competitor-analysis" style={linkStyle}>Competitor Analysis</Link>
        </li>
        <li>
          <Link to="/pricing" style={linkStyle}>Pricing</Link>
        </li>
        <li>
          <Link to="/referral" style={linkStyle}>Referral</Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>

      <button style={buttonStyle}>Get Started</button>
    </nav>
  );
}

export default Navbar;