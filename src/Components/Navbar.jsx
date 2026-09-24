import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-main">OBI</span>
          <span className="logo-sub">GLOBAL<span>LINKS</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#properties" onClick={closeMenu}>
            Properties
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#properties"
            className="mobile-property-btn"
            onClick={closeMenu}
          >
            View Properties
            <ArrowUpRight size={17} />
          </a>
        </nav>

        {/* Desktop CTA */}
        <a href="#properties" className="navbar-cta">
          View Properties
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;