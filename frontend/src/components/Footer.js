import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaFileDownload
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Info */}
        <div className="footer-brand">
          <h3>Rudra Bhagat</h3>

          <p>Chhatrapati Sambhajinagar, Maharashtra, India</p>

          {/* Email */}
          <p>
            <a href="mailto:rudrabhagat2625@gmail.com">
              <FaEnvelope /> rudrabhagat2625@gmail.com
            </a>
          </p>

          {/* Phone */}
          <p>
            <a href="tel:+919699655702">
              <FaPhoneAlt /> +91 9699655702
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/experience">Experience</a></li>
        </ul>

        {/* Social Icons */}
        <div className="footer-socials">

          <a
            href="https://github.com/RudraBhagat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/rudrabhagat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/rudrabhagat2625"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com/rudrabhagat2625"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="/resume/Rudra_Bhagat_Resume.pdf"
            target="_blank"
            aria-label="Resume"
          >
            <FaFileDownload />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © 2026 Rudra Bhagat. Built with React & Node.js.
      </div>
    </footer>
  );
}

export default Footer;