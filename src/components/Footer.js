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
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Rudra Bhagat</h3>
          <p>AI/ML Engineer focused on building practical data products for real users.</p>
          <p>Chhatrapati Sambhajinagar, Maharashtra, India</p>
          <p>
            <a href="mailto:rudrabhagat2625@gmail.com">
              <FaEnvelope /> rudrabhagat2625@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+919699655702">
              <FaPhoneAlt /> +91 9699655702
            </a>
          </p>
        </div>

        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Case Studies</a></li>
          <li><a href="/experience">Work Experience</a></li>
          <li><a href="/resume/Rudra_Bhagat_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a></li>
        </ul>

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
            rel="noreferrer"
            aria-label="Resume"
          >
            <FaFileDownload />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Rudra Bhagat. Open to AI/ML engineering and data science opportunities.
      </div>
    </footer>
  );
}
  
export default Footer;