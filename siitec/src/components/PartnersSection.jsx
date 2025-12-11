import React from 'react';
import '../styles/components/PartnersSection.css';

export default function PartnersSection() {
  const partners = [
    { id: 1, name: "Tech Corp", logo: "https://via.placeholder.com/150x60/c9a66b/FFFFFF?text=Tech+Corp" },
    { id: 2, name: "Innovation Labs", logo: "https://via.placeholder.com/150x60/758384/FFFFFF?text=Innovation" },
    { id: 3, name: "Future Systems", logo: "https://via.placeholder.com/150x60/a88448/FFFFFF?text=Future+Sys" },
    { id: 4, name: "AI Research", logo: "https://via.placeholder.com/150x60/c9a66b/FFFFFF?text=AI+Research" },
    { id: 5, name: "Robotics Inc", logo: "https://via.placeholder.com/150x60/758384/FFFFFF?text=Robotics" },
    { id: 6, name: "Data Analytics", logo: "https://via.placeholder.com/150x60/a88448/FFFFFF?text=Data+Co" },
    { id: 7, name: "Smart Tech", logo: "https://via.placeholder.com/150x60/c9a66b/FFFFFF?text=Smart+Tech" },
    { id: 8, name: "Cloud Solutions", logo: "https://via.placeholder.com/150x60/758384/FFFFFF?text=Cloud+Sol" }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        {/* <div className="partners-header">
          <span className="partners-subtitle">Trusted Partnerships</span>
          <h2 className="partners-title">Industry & Academic Partners</h2>
          <p className="partners-description">
            Collaborating with leading organizations to provide real-world experience and opportunities
          </p>
        </div> */}
{/* 
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div> */}

        <div className="partners-cta">
          <p>Interested in partnering with us?</p>
          <a 
  href="mailto:ssitec@kmitl.ac.th?subject=Partnership Inquiry&body=I am interested in becoming a partner with Siitec. Please send me more information." 
  className="partner-btn"
  style={{textDecoration: 'none', display: 'inline-flex', alignItems: 'center'}}
>
  Become a Partner
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M6 4L11 9L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
</a>
        </div>
      </div>
    </section>
  );
}