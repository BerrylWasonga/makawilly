import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="webname">
          <h1>JoshuHub</h1>
        </div>

        <button className="mobile-toggle" aria-label="Toggle navigation menu">
          <span className="hamburger"></span>
        </button>

        <nav>
          <ul className="navv">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
