import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* =====================================================
         MAIN FOOTER
      ===================================================== */}

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <span className="footer-logo-main">
              OBI
            </span>

            <span className="footer-logo-sub">
              GLOBAL<span>LINKS</span>
            </span>
          </a>

          <p>
            Connecting people with property opportunities across
            residential, commercial, land and luxury real estate.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="footer-socials">

            <a
              href="https://www.facebook.com/Obigloballinks789/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/obigloballinks_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>

        </div>


        {/* EXPLORE */}
        <div className="footer-column">

          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#properties">Properties</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h3>Services</h3>

          <a href="#services">Property Buying</a>
          <a href="#services">Property Sales</a>
          <a href="#services">Land & Property</a>
          <a href="#services">Property Leasing</a>
          <a href="#services">Property Management</a>
          <a href="#services">Property Investment</a>

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h3>Contact</h3>

          <a href="tel:+2349115817660">
            <Phone size={16} />
            <span>0911 581 7660</span>
          </a>

          <a href="mailto:obigloballinks@gmail.com">
            <Mail size={16} />
            <span>obigloballinks@gmail.com</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=2+Old+Aba+Road+Opposite+Customary+Court+of+Appeal+Rumuogba+Port+Harcourt+Rivers+State"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={16} />

            <span>
              2 Old Aba Road, Opposite Customary Court
              of Appeal, Rumuogba, Port Harcourt
            </span>
          </a>

        </div>

      </div>


      {/* =====================================================
         LARGE CTA
      ===================================================== */}

      <div className="footer-cta">

        <div className="footer-cta-content">

          <span>
            YOUR PROPERTY JOURNEY STARTS HERE
          </span>

          <h2>
            Find Your Next
            <strong>Opportunity.</strong>
          </h2>

        </div>

        <a href="#contact">
          Get In Touch
          <ArrowUpRight size={18} />
        </a>

      </div>


      {/* =====================================================
         BOTTOM
      ===================================================== */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} OBIGLOBALLINKS.
          All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#home">
            Back to top ↑
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;