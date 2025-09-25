// src/components/ui/MainStoryCard.jsx
import React from 'react';
import './MainstoryCard.css';

const MainStoryCard = ({ 
  image, 
  title, 
  description, 
  category, 
  className = '' 
}) => {
  return (
    <div className={`main-story-card ${className}`}>
      <div className="main-story-image">
        <img src={image} alt={title} />
        {category && <span className="story-category">{category}</span>}
      </div>
      <div className="main-story-content">
        <h2 className="main-story-title">{title}</h2>
        <p className="main-story-description">{description}</p>
      </div>
    </div>
  );
};

export default MainStoryCard;