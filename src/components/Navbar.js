import React from 'react';
import { ReactComponent as Logo } from '../assets/LogoWithText.svg'; 
import './Navbar.scss';

function Navbar({ isNavbarVisible }) {
  return (
    <nav className="navbar">
      <Logo className="navbar-logo" />

      <div className="navbar-links" style={{ 
        transform: isNavbarVisible ? 'translateY(100%)' : 'translateY(0)', 
        opacity: isNavbarVisible ? 1 : 0 
        }}>
        <a href="#contact" className="navbar-link">Contact</a>
        <a href="#" className="navbar-link">Back to top</a>
      </div>
      
    </nav>
  );
}

export default Navbar;
