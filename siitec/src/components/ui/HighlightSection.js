// src/components/ui/HighlightsSection.jsx
import React from 'react';
import HighlightCard from './HighlightCard';
import './HighlightSection.css';

const HighlightsSection = ({ 
  title = "Trekker's Highlights",
  highlights = [],
  columns = 3,
  className = '' 
}) => {
  return (
    <section className={`highlights-section ${className}`}>
      <h2 className="section-title">{title}</h2>
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