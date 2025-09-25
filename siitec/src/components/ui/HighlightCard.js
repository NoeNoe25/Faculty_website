// src/components/ui/HighlightCard.jsx
import React from 'react';
import './HighlightCard.css';

const HighlightCard = ({ 
  image, 
  title, 
  description, 
  author, 
  orientation = 'vertical',
  className = '' 
}) => {
  return (
    <div className={`highlight-card ${orientation} ${className}`}>
      <div className="highlight-image">
        <img src={image} alt={title} />
      </div>
      <div className="highlight-content">
        {author && <span className="highlight-author">{author}</span>}
        <h4 className="highlight-title">{title}</h4>
        <p className="highlight-description">{description}</p>
      </div>
    </div>
  );
};

export default HighlightCard;