import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// Update these import paths
const vitLogo = "/photos/VIT_logo.png";
const comsocLogo = "/photos/ieee-comsoc-registered-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={vitLogo} alt="VIT Logo" className="vit-logo" />
        <img src={comsocLogo} alt="IEEE ComSoc Logo" className="comsoc-logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/executive-board">EXECUTIVE BOARD</Link>
        <Link to="/events">EVENTS</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>
    </nav>
  );
}

export default Navbar;
