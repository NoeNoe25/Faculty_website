// src/components/ui/StoriesSection.jsx
import React from 'react';
import MainStoryCard from './MainstoryCard';
import StoryCard from './StoryCard';
import './StoriesSection.css';

const StoriesSection = ({ 
  mainStory,
  sideStories = [],
  title = "Latest Stories",
  className = '' 
}) => {
  return (
    <section className={`stories-section ${className}`}>
      <h2 className="section-title">{title}</h2>
      <div className="stories-layout">
        <div className="main-story">
          {mainStory && (
            <MainStoryCard
              image={mainStory.image}
              title={mainStory.title}
              description={mainStory.description}
              category={mainStory.category}
            />
          )}
        </div>
        
        <div className="side-stories">
          {sideStories.map((story, index) => (
            <StoryCard
              key={index}
              image={story.image}
              title={story.title}
              description={story.description}
              date={story.date}
              readTime={story.readTime}
              layout="horizontal"
              size="small"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;