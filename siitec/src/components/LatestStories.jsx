import React from 'react';
import '../styles/components/LatestStories.css';
import story1 from '../assets/images/story/story1.jpg';
import story2 from '../assets/images/story/story2.webp';
import story3 from '../assets/images/story/story3.webp';
export default function LatestStories() {
  const stories = [
    {
      id: 1,
      category: 'Travel',
      title: '15 South London Mincers You\'ll Want to Visit Markets in South London',
      author: 'By Author',
      readTime: '3 minutes',
      size: 'small',
      image: story1
    },
    {
      id: 2,
      category: 'Books',
      title: '10 incredible books around the world for your reading list',
      author: 'By Author',
      readTime: '3 minutes',
      size: 'small',
      image: story1
    },
    {
      id: 3,
      category: 'Health',
      title: 'Visiting Chinatown a Bigger, Better Experience',
      author: 'By Author',
      readTime: '3 minutes',
      size: 'small',
      image: story1
    }
  ];

  return (
  
      <div className="container">
        <div className="lateststories_header">
          <h2>Latest Stories</h2>
          <button className="see-all-btn">See All Articles</button>
        </div>

        <div className="stories-grid">
          <div className="lateststories_featured-card">
           <img 
              src={story3} 
              alt="Featured story"
              className="featured-image"
            />
            <div className="card-content">
              <span className="category">Travel Guide</span>
              <h3>Los Angeles is your 4-step guide: 11 things to try in Los Angeles, California</h3>
              <p className="meta">By Author • 3 minutes</p>
              <div className="tags">
                <span className="tag">california</span>
                <span className="tag">beverhills</span>
                <span className="tag">losangeles</span>
                <span className="tag">USA</span>
                <span className="tag">hotels</span>
                <span className="tag">trips</span>
                <span className="tag">north...</span>
              </div>
            </div>
          </div>

          <div className="side-stories">
            {stories.map((story) => (
              <div key={story.id} className="story-card">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="story-image"
                />
                <div className="story-content">
                  <span className="category">{story.category}</span>
                  <h4>{story.title}</h4>
                  <p className="meta">{story.author} • {story.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}