import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Kunj Khanpara
        </Link>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </div>
        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={() => setMobileMenuOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/education" onClick={() => setMobileMenuOpen(false)}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={() => setMobileMenuOpen(false)}>
                Resume
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
