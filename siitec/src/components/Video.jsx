import React, { useState } from 'react';
import '../styles/components/Video.css';
import nano from '../assets/albums/02-CMIT-Nanomaterial-engineering.mp4';
import dual from '../assets/albums/03-CMIT-Dual-degree.mp4';
const VideoSection = () => {
  const [videos] = useState([
    {
      type: 'youtube',
      id: 'L00fk0a4ddI',
      title: 'Faculty Introduction 2024',
      description: 'Welcome message from our faculty dean discussing our vision and goals for the academic year.'
    },
    {
      type: 'local',
      src: dual,
      title: 'Dual Degree Program Overview',
      description: 'An in-depth look at our dual degree programs and the benefits they offer to students.'
    },
    {
      type: 'local',
      src: nano,
      title: 'Nanomaterial Engineering Lab Tour',
      description: 'Take a virtual tour of our state-of-the-art nanomaterial engineering laboratories and facilities.'
    }
  ]);

  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const VideoCard = ({ video }) => {
    return (
      <div className="video-card">
        <div className="video-wrapper">
          {video.type === 'youtube' ? (
            <iframe
              src={getYouTubeEmbedUrl(video.id)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
            />
          ) : (
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="video-info">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <span className={`video-badge ${video.type === 'youtube' ? 'badge-youtube' : 'badge-local'}`}>
            {video.type === 'youtube' ? 'YouTube' : 'Local Video'}
          </span>
        </div>
      </div>
    );
  };

  return (
      <div className="video-section">
        <div className="section-header">
          <h1>Faculty Videos</h1>
          <p>Explore our collection of educational and informational videos</p>
        </div>

        <div className="video-grid">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
  );
};

export default VideoSection;