import React, { useState } from 'react';
import '../styles/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  // KMITL Coordinates
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.3992732724985!2d100.77468807278278!3d13.729434959616041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66498620e959%3A0x3658c54a381a2f24!2sCollege%20Of%20Advanced%20Manufacturing%20Innovation%2C%20KMITL!5e0!3m2!1sen!2sth!4v1763062463457!5m2!1sen!2sth";
  return (
    <div className="contact-container">
      {/* Header */}
      <header className="contact-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">Contact Us</h1>
          <p className="header-subtitle">School of Integrated Innovative Technology</p>
          <p className="header-institution">King Mongkut's Institute of Technology Ladkrabang</p>
        </div>
      </header>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              We'd love to hear from you. Our team is here to answer any questions you may have.
            </p>

            <div className="contact_info-cards">
              {/* Address Card */}
              <div className="contact_info-card">
                <div className="info-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M19 10c0 6-7 11-7 11s-7-5-7-11a7 7 0 0 1 14 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">Visit Us</h3>
                  <p className="info-card-text">
                    1 Chalongkrung Rd,<br/>
                    Ladkrabang, Bangkok 10520<br/>
                    Thailand
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="info-card">
                <div className="info-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16v3a2 2 0 0 1-2 2h-1a16 16 0 0 1-16-16V4a2 2 0 0 1 2-2h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a13 13 0 0 0 11 11v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">Call Us</h3>
                  <p className="info-card-text">
                    Tel: +66 2 329 8000<br/>
                    Fax: +66 2 329 8001<br/>
                    Mon-Fri: 8:30 AM - 4:30 PM
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="info-card">
                <div className="info-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 7l8 5 8-5M4 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">Email Us</h3>
                  <p className="info-card-text">
                    <a href="mailto:siit@kmitl.ac.th">siit@kmitl.ac.th</a><br/>
                    <a href="mailto:info@siit.kmitl.ac.th">info@siit.kmitl.ac.th</a>
                  </p>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="info-card">
                <div className="info-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 3a9 9 0 0 0 0 18M12 3a9 9 0 0 1 0 18M3.5 9h17M3.5 15h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="info-card-content">
                  <h3 className="info-card-title">Follow Us</h3>
                  <div className="social-links">
                    <a href="#" className="social-link" aria-label="Facebook">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-link" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href="#" className="social-link" aria-label="Instagram">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                        <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Send Us a Message</h2>
            <p className="section-description">
              Have a question or feedback? Fill out the form below and we'll get back to you soon.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {formStatus === 'success' && (
                <div className="form-success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-section">
          <h2 className="section-title">Find Us on Map</h2>
          <div className="map-container">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KMITL Location"
            ></iframe>
          </div>
          <div className="map-overlay">
            <a 
              href="https://www.google.com/maps/dir//King+Mongkut's+Institute+of+Technology+Ladkrabang"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <p>© 2024 School of Integrated Innovative Technology — KMITL</p>
      </footer>
    </div>
  );
};

export default ContactPage;