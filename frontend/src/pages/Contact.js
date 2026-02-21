import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '' // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch('https://portfolio-1-xyrq.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showToast('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          botField: ''
        });
      } else {
        showToast('Something went wrong!', 'error');
      }
    } catch (err) {
      showToast('Server error. Try again later.', 'error');
    }

    setLoading(false);
  };

  return (
    <section className="contact">
      <div className="section-header">
        <div className="header-line"></div>
        <h3>Get In Touch</h3>
        <div className="header-line"></div>
      </div>

      <div className="contact-card">
        <p className="contact-intro">
          I’m open to internships, full-time roles, freelance projects, and collaborations.
          Feel free to reach out — I usually respond within 24 hours.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          
          {/* Honeypot (hidden) */}
          <input
            type="text"
            name="botField"
            value={formData.botField}
            onChange={handleChange}
            style={{ display: 'none' }}
          />

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? <span className="spinner"></span> : 'Send Message'}
          </button>
        </form>

        <div className="contact-info">
          <p><span>Email:</span> rudrabhagat2625@gmail.com</p>
          <p><span>Mobile:</span> +91 9699655702</p>
          <p><span>Location:</span> Chhatrapati Sambhajinagar, Maharashtra, India</p>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </section>
  );
}

export default Contact;
