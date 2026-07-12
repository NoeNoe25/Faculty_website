import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaArrowRight,
  FaClock,
  FaBuilding,
} from "react-icons/fa";
import "../styles/Contact.css";

const ContactPage = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.3992732724985!2d100.77468807278278!3d13.729434959616041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66498620e959%3A0x3658c54a381a2f24!2sCollege%20Of%20Advanced%20Manufacturing%20Innovation%2C%20KMITL!5e0!3m2!1sen!2sth!4v1763062463457!5m2!1sen!2sth";

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      url: "https://facebook.com/kmitlofficial",
    },
    { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com/kmitl" },
    {
      icon: <FaYoutube />,
      label: "YouTube",
      url: "https://youtube.com/c/KMITLChannel",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      url: "https://linkedin.com/school/kmitl",
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Campus Address",
      content: "1 Chalongkrung Rd, Ladkrabang, Bangkok 10520, Thailand",
      link: "https://goo.gl/maps/your-map-link",
    },
    {
      icon: <FaBuilding />,
      title: "School Building",
      content:
        "College of Advanced Manufacturing Innovation (CAM-I), 4th Floor",
      details: "School of Integrated Innovative Technology",
    },
    {
      icon: <FaPhone />,
      title: "Phone Number",
      content: "02-329-8000",
      extension: "Ext. 1175",
      hours: "Monday - Friday: 8:30 AM - 4:30 PM",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      content: "siitec@kmitl.ac.th",
      secondary: "SIITEC@kmitl.ac.th",
      type: "email",
    },
    {
      icon: <FaGlobe />,
      title: "Website",
      content: "www.kmitl.ac.th",
      link: "https://www.kmitl.ac.th",
      type: "website",
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      content: "8:30 AM - 4:30 PM",
      details: "Monday to Friday (Excluding Public Holidays)",
    },
  ];

  const departments = [
    { name: "Administration Office", phone: "02-329-8000 Ext. 1175" },
    { name: "Academic Affairs", phone: "02-329-8000 Ext. 1176" },
    { name: "Student Affairs", phone: "02-329-8000 Ext. 1177" },
    { name: "International Affairs", phone: "02-329-8000 Ext. 1178" },
  ];

  return (
    <div className="contact-container">
      {/* Header Section */}
      <header className="contact-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">Contact Us</h1>
          <p className="header-subtitle">
            School of Integrated Innovative Technology
          </p>
          <p className="header-institution">
            King Mongkut's Institute of Technology Ladkrabang
          </p>
        </div>
      </header>

      {/* Contact Content */}
      <div className="contact-content">
        {/* Main Contact Grid */}
        <div className="contact-grid">
          {/* Left Column - Contact Information */}
          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-description">
              Get in touch with us through any of these channels. Our team is
              here to assist you.
            </p>

            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <h3 className="info-title">{info.title}</h3>
                    <div className="info-text">
                      {info.type === "email" ? (
                        <>
                          <a
                            href={`mailto:${info.content}`}
                            className="contact-link"
                          >
                            {info.content}
                          </a>
                          {info.secondary && (
                            <>
                              <br />
                              <a
                                href={`mailto:${info.secondary}`}
                                className="contact-link"
                              >
                                {info.secondary}
                              </a>
                            </>
                          )}
                        </>
                      ) : info.type === "website" ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                        >
                          {info.content}
                        </a>
                      ) : info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <>
                          <p className="contact-text">{info.content}</p>
                          {info.extension && (
                            <p className="contact-detail">{info.extension}</p>
                          )}
                          {info.details && (
                            <p className="contact-detail">{info.details}</p>
                          )}
                          {info.hours && (
                            <p className="contact-hours">{info.hours}</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Departments Section */}
            <div className="departments-section">
              <h3 className="departments-title">Department Contacts</h3>
              <div className="departments-grid">
                {departments.map((dept, index) => (
                  <div key={index} className="department-card">
                    <h4 className="department-name">{dept.name}</h4>
                    <p className="department-phone">{dept.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links & Social Media */}
          <div className="sidebar-section">
            {/* Social Media */}
            <div className="contact_social-section">
              <h3 className="sidebar-title">Connect With Us</h3>
              <p className="sidebar-description">
                Follow us on social media for the latest updates, news, and
                events.
              </p>
              <div className="social-links-container">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    <span className="social-label">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="quick-links-section">
              <h3 className="sidebar-title">Quick Links</h3>
              <div className="quick-links">
                <a
                  href="https://www.kmitl.ac.th"
                  className="quick-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                  <span>KMITL Main Website</span>
                </a>
                <a
                  href="https://admission.kmitl.ac.th"
                  className="quick-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                  <span>Admissions Portal</span>
                </a>
                <a
                  href="https://reg.kmitl.ac.th"
                  className="quick-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                  <span>Registration System</span>
                </a>
                <a
                  href="https://library.kmitl.ac.th"
                  className="quick-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                  <span>University Library</span>
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            {/* <div className="emergency-section">
              <h3 className="sidebar-title">Emergency Contact</h3>
              <div className="emergency-info">
                <div className="emergency-item">
                  <FaPhone className="emergency-icon" />
                  <div>
                    <h4>Security Office</h4>
                    <p className="emergency-phone">02-329-8111</p>
                  </div>
                </div>
                <div className="emergency-item">
                  <FaPhone className="emergency-icon" />
                  <div>
                    <h4>Medical Center</h4>
                    <p className="emergency-phone">02-329-8222</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2 className="contact-section-title">Our Location</h2>
          <p className="contact-section-description">
            Visit us at our beautiful campus in Ladkrabang, Bangkok
          </p>

          <div className="map-container">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KMITL Campus Location"
              aria-label="Interactive map showing KMITL campus location"
            ></iframe>
          </div>

          <div className="map-actions">
            <a
              href="https://www.google.com/maps/dir//King+Mongkut's+Institute+of+Technology+Ladkrabang"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions
              <FaArrowRight className="btn-icon" />
            </a>
            <a href="tel:+6623298000" className="call-btn">
              <FaPhone />
              Call Main Office
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
