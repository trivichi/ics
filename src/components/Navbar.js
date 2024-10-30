import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Mobile.css';

// Update these import paths
const vitLogo = "/photos/VIT_logo.png";
const comsocLogo = "/photos/ieee-comsoc-registered-logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={vitLogo} alt="VIT Logo" className="vit-logo" />
        <img src={comsocLogo} alt="IEEE ComSoc Logo" className="comsoc-logo" />
      </div>
      
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-link-container">
          {[
            ['HOME', '/'],
            ['ABOUT US', '/about'],
            ['EXECUTIVE BOARD', '/executive-board'],
            ['EVENTS', '/events'],
            ['BLOGS', '/blogs'],
            ['CONTACT US', '/contact']
          ].map(([title, path]) => (
            <Link 
              key={path} 
              to={path} 
              onClick={() => setIsMenuOpen(false)}
              className="nav-link"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
