// src/components/ui/HighlightSection.jsx
import React from 'react';
import '../styles/components/HighlightSection.css';

// Default images for the component
import img1 from '../assets/albums/NANO-cover-02.jpg';
import img2 from '../assets/albums/KMITL.11.jpg';
import img3 from '../assets/albums/stem2.webp';

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

const HighlightsSection = ({ 
  title = "Highlights",
  highlights,
  columns = 3,
  className = '',
  // Props for custom header
  showHeader = true,
  subtitle = "SIITec Success Stories",
  headerTitle = "Pride Spotlight",
  description = "Showing Excellence Across Our Community"
}) => {
  // Default data if no highlights provided
  const defaultHighlights = [
    {
      image: img1,
      title: "NanoTechnology Innovation Competition",
      description: "A prestigious national platform showcasing cutting-edge nanotechnology innovations and research with real-world applications.",
      author: "CMIT"
    },
    {
      image: img2,
      title: "Hackathon",
      description: "A prestigious national platform showcasing cutting-edge nanotechnology innovations and research with real-world applications.",
      author: "CMIT"
    },
    {
      image: img3,
      title: "STEMa2018",
      description: "International Conference on Science and Technology of Emerging Materials 2018 (STEMa2018)",
      author: "Sarayut Wongchantra"
    }
  ];

  const displayHighlights = highlights || defaultHighlights;

  return (
    <div className='highlights'> 
    <section className={`highlights-section ${className}`}>
      {showHeader && (
        <div className="testimonials-header">
          <span className="testimonials-subtitle">{subtitle}</span>
          <h2 className="testimonials-title">{headerTitle}</h2>
          <p className="testimonials-description">
            {description}
          </p>
        </div>
      )}
      <div className={`highlights-grid highlights-columns-${columns}`}>
        {displayHighlights.map((highlight, index) => (
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
    </div>
  );
};

export default HighlightsSection;