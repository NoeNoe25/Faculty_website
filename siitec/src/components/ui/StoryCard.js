// src/components/ui/StoryCard.jsx
import React from 'react';
import './StoryCard.css';

const StoryCard = ({ 
  image, 
  title, 
  description, 
  date, 
  readTime,
  layout = 'horizontal',
  size = 'medium',
  className = '' 
}) => {
  return (
    <article className={`story-card ${layout} ${size} ${className}`}>
      <div className="story-image">
        <img src={image} alt={title} />
      </div>
      <div className="story-content">
        {date && <span className="story-date">{date}</span>}
        <h3 className="story-title">{title}</h3>
        {description && <p className="story-description">{description}</p>}
        {readTime && <span className="story-read-time">{readTime}</span>}
      </div>
    </article>
  );
};

export default StoryCard;