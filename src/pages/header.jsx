import React, { useState, useEffect, useRef } from 'react';
import './joshu.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
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
          <h1>JoshuHub</h1>
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
            <li><a href="joshu.html" onClick={() => window.innerWidth <= 768 && setIsMenuOpen(false)}>Home</a></li>
            <li><a href="services.html" onClick={() => window.innerWidth <= 768 && setIsMenuOpen(false)}>Services</a></li>
            <li><a href="projects.html" onClick={() => window.innerWidth <= 768 && setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="contact.html" onClick={() => window.innerWidth <= 768 && setIsMenuOpen(false)}>Contact</a></li>
            <li><a href="about.html" onClick={() => window.innerWidth <= 768 && setIsMenuOpen(false)}>About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
