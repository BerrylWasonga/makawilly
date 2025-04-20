import React, { useState, useEffect } from 'react';
import './joshu.css'; // Add any necessary styles

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleButton = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.navv');

    // Function to toggle menu
    const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
    };

    toggleButton.addEventListener('click', toggleMenu);

    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('.navv a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          setIsMenuOpen(false);
        }
      });
    });

    // Close menu when clicking outside
    const handleOutsideClick = (event) => {
      if (window.innerWidth > 768) return;

      const isClickInside = navMenu.contains(event.target) || toggleButton.contains(event.target);

      if (!isClickInside && navMenu.getAttribute('data-visible') === 'true') {
        toggleMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    // Close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listeners
    return () => {
      toggleButton.removeEventListener('click', toggleMenu);
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

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="hamburger"></span>
        </button>

        {/* Navigation Menu */}
        <nav>
          <ul className={`navv ${isMenuOpen ? 'open' : ''}`} data-visible={isMenuOpen ? 'true' : 'false'}>
            <li><a href="joshu.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
