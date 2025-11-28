import React from 'react';
import '../styles/components/LatestStories.css';
import story1 from '../assets/images/story/story1.jpg';
import story2 from '../assets/images/story/story2.jpg';
import story3 from '../assets/images/story/story3.webp';
import story4 from '../assets/images/story/story4.jpg';

export default function LatestStories() {
  const stories = [
    {
      id: 1,
      category: 'Research',
      title: 'AI Lab Develops New Hand Gesture Recognition System for Robotics',
      author: 'By SIITec News',
      readTime: '4 minutes',
      image: story1
    },
    {
      id: 2,
      category: 'Innovation',
      title: 'Engineering Students Build Autonomous Delivery Robot for Campus',
      author: 'By SIITec News',
      readTime: '3 minutes',
      image: story2
    },
    {
      id: 3,
      category: 'Events',
      title: 'Tech Expo 2025 Showcases Breakthroughs in IoT, AI, and Automation',
      author: 'By SIITec News',
      readTime: '5 minutes',
      image: story4
    },
    {
      id: 4,
      category: 'Campus',
      title: 'Student Innovation Awards Recognize Outstanding Projects',
      author: 'By SIITec News',
      readTime: '4 minutes',
      image: story1
    }
  ];

  return (
    <div className="lateststories-wrapper">
      <div className="container">
        <div className="lateststories_header">
          <h2>Latest SIITec News</h2>
          <button className="see-all-btn">See All Articles</button>
        </div>
        
        <div className="stories-grid">
          {/* Featured Story */}
          <div className="lateststories_featured-card">
            <img 
              src={story3} 
              alt="Featured story"
              className="featured-image"
            />
            <div className="latestStories_card-content">
              <span className="latestStories_category">Campus Highlight</span>
              <h3>2026 Admission Announcement: Applications Now Open!</h3>
              <p className="meta">By SIITec News • 6 minutes</p>
              {/* <div className="tags">
                <span className="tag">Admission</span>
                <span className="tag">Enrollment</span>
                <span className="tag">Innovation</span>
                <span className="tag">Engineering</span>
                <span className="tag">Technology</span>
                <span className="tag">Research</span>
              </div> */}
            </div>
          </div>

          {/* Side Stories */}
          <div className="side-stories">
            {stories.map((story) => (
              <div key={story.id} className="story-card">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="story-image"
                />
                <div className="story-content">
                  <span className="latestStories_category">{story.category}</span>
                  <h4>{story.title}</h4>
                  <p className="meta">{story.author} • {story.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}