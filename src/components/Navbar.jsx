import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const navLinks = ['Schedule', 'Results', 'News', 'Drivers', 'Teams', 'Fantasy & Gaming'];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="navbar navbar-animated">
      <div className="nav-container">
        <div className="nav-left">
          <a href="#" className="logo">F1</a>

          <button
            className={`nav-toggle-btn ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className="nav-link nav-link-animated"
                style={{ animationDelay: `${0.6 + i * 0.08}s` }}
              >
                {link}
              </a>
            ))}
            <a href="#" className="nav-link mobile-only">Sign In</a>
            <a href="#" className="nav-link subscribe mobile-only">Subscribe</a>
          </div>
        </div>
        <div className="nav-right desktop-only">
          <a href="#" className="nav-link nav-link-animated" style={{ animationDelay: '1.1s' }}>Sign In</a>
          <a href="#" className="nav-link subscribe nav-link-animated" style={{ animationDelay: '1.2s' }}>Subscribe</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
