import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './joshu.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth > 768) return;
      
      if (navRef.current && toggleButtonRef.current && 
          !navRef.current.contains(event.target) && 
          !toggleButtonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="container">
        <div className="webname">
          <Link to="/" onClick={closeMenu}>
            <h1>JoshuHub</h1>
          </Link>
        </div>

        <button
          ref={toggleButtonRef}
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger"></span>
        </button>

        <nav ref={navRef}>
          <ul 
            className={`navv ${isMenuOpen ? 'open' : ''}`} 
            data-visible={isMenuOpen}
          >
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
