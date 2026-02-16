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
          <p><span>Email:</span> rudrabhagat2625@gmail.com</p>
          <p><span>Mobile:</span> +91 9699655702</p>
          <p><span>Location:</span> Chhatrapati Sambhajinagar, Mahartashtra, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
