// components/PartnersSection.jsx
import React from 'react';
import '../styles/components/PartnerBanner.css';
import abb from '../assets/logos/abb-logo.png';
import nvidia from '../assets/logos/nvidia-logo.png';
import nissan from '../assets/logos/nissan.png';
import nintendo from '../assets/logos/nintendo.png';
import reactjs from '../assets/logos/nodejs.png';
import bosh from '../assets/logos/bosh.png';
import harvard from '../assets/logos/harvard.png';
import { useContent } from '../i18n/LanguageContext';
import homeContent from '../i18n/content/home';


const PartnersSection = () => {
  const { partners: text } = useContent(homeContent);
  // Sample university logos - replace with your actual partner logos
  const partners = [
    { id: 1, name: 'Harvard', logo: abb },
    { id: 2, name: 'Stanford', logo:nvidia },
    { id: 3, name: 'MIT', logo:nissan },
    { id: 4, name: 'Oxford', logo: nintendo },
    { id: 5, name: 'Cambridge', logo: reactjs },
    { id: 6, name: 'ETH Zurich', logo: bosh},
    { id: 7, name: 'Tokyo University', logo: harvard },

  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="partners-banner-container home-partners">
      <h1 className="banner-title">{text.title}</h1>
      <div className="partners-banner">
        <div className="partners-track">
          {duplicatedPartners.map((partner, index) => (
            <div key={`partner-${partner.id}-${index}`} className="partner-logo">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                title={partner.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="partners-cta">
        <div className="partners-cta-text">
          <p className="partners-cta-title">{text.question}</p>
          <p className="partners-cta-pitch">{text.pitch}</p>
        </div>
        <a
          href={`mailto:siitec@kmitl.ac.th?subject=${encodeURIComponent(text.mailSubject)}&body=${encodeURIComponent(text.mailBody)}`}
          className="partner-btn"
        >
          {text.become}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M6 4L11 9L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </div>
    
  );
};

export default PartnersSection;