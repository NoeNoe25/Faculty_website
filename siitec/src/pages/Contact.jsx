import React, { useState } from 'react';

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
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.3992732724985!2d100.77468807278278!3d13.729434959616041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66498620e959%3A0x3658c54a381a2f24!2sCollege%20Of%20Advanced%20Manufacturing%20Innovation%2C%20KMITL!5e0!3m2!1sen!2sth!4v1763062463457!5m2!1sen!2sth";
  
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Header */}
      <header style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '3rem 2rem',
        marginBottom: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2C3E50 0%, #B8860B 100%)'
        }}></div>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '300',
            color: '#2C3E50',
            marginBottom: '1rem',
            letterSpacing: '0.02em'
          }}>Contact Us</h1>
          <p style={{
            fontSize: '1.3rem',
            fontWeight: '500',
            color: '#34495E',
            marginBottom: '0.5rem'
          }}>School of Integrated Innovative Technology</p>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: '400',
            color: '#7F8C8D'
          }}>King Mongkut's Institute of Technology Ladkrabang</p>
        </div>
      </header>

      {/* Contact Content */}
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '2.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {/* Contact Information - Single Column */}
        <div style={{ marginBottom: '3rem' }}>
          <div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '300',
              color: '#2C3E50',
              marginBottom: '1rem'
            }}>Get In Touch</h2>
            <p style={{
              fontSize: '1rem',
              color: '#7F8C8D',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              We'd love to hear from you. Our team is here to answer any questions you may have.
            </p>

            {/* Address Card - Full Width */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              padding: '1.5rem',
              background: '#F8F9FA',
              borderRadius: '8px',
              borderLeft: '3px solid #B8860B',
              marginBottom: '2rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                flexShrink: 0,
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #2C3E50 0%, #B8860B 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M19 10c0 6-7 11-7 11s-7-5-7-11a7 7 0 0 1 14 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#2C3E50',
                  marginBottom: '0.5rem'
                }}>Visit Us</h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#7F8C8D',
                  lineHeight: '1.6'
                }}>
                  1 Chalongkrung Rd,<br/>
                  Ladkrabang, Bangkok 10520<br/>
                  Thailand
                </p>
              </div>
            </div>

            {/* Three Column Info Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem'
            }}>
              {/* Call Us */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1.5rem',
                background: '#F8F9FA',
                borderRadius: '8px',
                borderLeft: '3px solid #B8860B'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #2C3E50 0%, #B8860B 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16v3a2 2 0 0 1-2 2h-1a16 16 0 0 1-16-16V4a2 2 0 0 1 2-2h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a13 13 0 0 0 11 11v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#2C3E50',
                    marginBottom: '0.5rem'
                  }}>Call Us</h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#7F8C8D',
                    lineHeight: '1.6'
                  }}>
                    Tel: +66 2 329 8000<br/>
                    Fax: +66 2 329 8001<br/>
                    Mon-Fri: 8:30 AM - 4:30 PM
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1.5rem',
                background: '#F8F9FA',
                borderRadius: '8px',
                borderLeft: '3px solid #B8860B'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #2C3E50 0%, #B8860B 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 7l8 5 8-5M4 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#2C3E50',
                    marginBottom: '0.5rem'
                  }}>Email Us</h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#7F8C8D',
                    lineHeight: '1.6'
                  }}>
                    <a href="mailto:siit@kmitl.ac.th" style={{ color: '#B8860B', textDecoration: 'none' }}>siit@kmitl.ac.th</a><br/>
                    <a href="mailto:info@siit.kmitl.ac.th" style={{ color: '#B8860B', textDecoration: 'none' }}>info@siit.kmitl.ac.th</a>
                  </p>
                </div>
              </div>

              {/* Follow Us */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1.5rem',
                background: '#F8F9FA',
                borderRadius: '8px',
                borderLeft: '3px solid #B8860B'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #2C3E50 0%, #B8860B 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 3a9 9 0 0 0 0 18M12 3a9 9 0 0 1 0 18M3.5 9h17M3.5 15h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#2C3E50',
                    marginBottom: '0.5rem'
                  }}>Follow Us</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => (
                      <a key={social} href="#" style={{
                        width: '36px',
                        height: '36px',
                        background: '#2C3E50',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        transition: 'all 0.2s ease'
                      }}>
                        <span style={{ fontSize: '0.7rem' }}>{social[0]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '3rem',
          borderTop: '2px solid #E9ECEF'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '300',
            color: '#2C3E50',
            marginBottom: '1.5rem'
          }}>Find Us on Map</h2>
          
          <div style={{
            position: 'relative',
            width: '100%',
            height: '500px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
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
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem'
          }}>
            <a 
              href="https://www.google.com/maps/dir//King+Mongkut's+Institute+of+Technology+Ladkrabang"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                padding: '0.9rem 2rem',
                background: '#2C3E50',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Get Directions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;