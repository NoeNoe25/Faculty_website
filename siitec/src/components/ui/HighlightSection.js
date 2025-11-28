// src/components/ui/HighlightSection.jsx
import React from 'react';
import HighlightCard from './HighlightCard';
import './HighlightSection.css';

const HighlightsSection = ({ 
  title = "Trekker's Highlights",
  highlights = [],
  columns = 3,
  // className = '' 
}) => {
  return (
    // <section className={`highlights-section ${className}`}>
    <section className="highlights-section">
      <div className="testimonials-header">
          <span className="testimonials-subtitle">Success Stories</span>
          <h2 className="testimonials-title">Innovation Contest</h2>
          <p className="testimonials-description">
            Hear from graduates who are making an impact in technology and innovation
          </p>
        </div>
      <div className={`highlights-grid highlights-columns-${columns}`}>
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            image={highlight.image}
            title={highlight.title}
            description={highlight.description}
            author={highlight.author}
            orientation={highlight.orientation}
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;