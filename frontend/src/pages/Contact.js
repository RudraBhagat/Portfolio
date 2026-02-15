import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      {/* Header */}
      <div className="section-header">
        <div className="header-line"></div>
        <h3>Get In Touch</h3>
        <div className="header-line"></div>
      </div>

      {/* Contact Card */}
      <div className="contact-card">
        <p className="contact-intro">
          I’m open to internships, full-time roles, freelance projects, and collaborations.
          Feel free to reach out — I usually respond within 24 hours.
        </p>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Subject" />
          </div>

          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        {/* Direct Info */}
        <div className="contact-info">
          <p><span>Email:</span> rudrabhagat@email.com</p>
          <p><span>Location:</span> India</p>
        </div>

        {/* Social Links */}
        <div className="contact-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume/Rudra_Bhagat_Resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
