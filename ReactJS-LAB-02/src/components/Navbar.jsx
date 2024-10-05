import React, { useState } from 'react';
import useCustomMediaQuery from '../hooks/useCustomMediaQuery';
import './Navbar.css';


const Navbar = () => {
  const isSmallScreen = useCustomMediaQuery('(max-width: 768px)');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>

      {isSmallScreen ? (
        <div className="hamburger-menu">
          <button className="menu-icon" onClick={toggleMenu}>
            &#9776; {}
          </button>
          {isMenuOpen && (
            <ul className="nav-links small-screen">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          )}
        </div>
      ) : (
        <ul className="nav-links large-screen">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
