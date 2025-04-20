import React from 'react';
import './joshu.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h2>JoshuHub</h2>
          <p>Crafting quality web experiences with passion and purpose.</p>
        </div>

        <div className="footer-middle">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:joshuajuma039@gmail.com">joshuajuma039@gmail.com</a></p>
          <p>Phone: +254 7572 84998</p>
        </div>

        <div className="footer-right">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 JoshuHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
