import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Name & Role */}
        <div className="footer-brand">
          <h3>Rudra Bhagat</h3>
          <p>Data Scientist | ML Engineer</p>
        </div>

        {/* Quick Links */}
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/contact">Contact</a></li>
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
            href="/resume/Rudra_Bhagat_Resume.pdf"
            target="_blank"
            aria-label="Resume"
          >
            <FaFileDownload />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        © 2026 Rudra Bhagat. Built with React & EmailJS.
      </div>
    </footer>
  );
}

export default Footer;
