import React, { useState } from 'react';
import '../styles/components/Video.css';

const VideoSection = () => {
  const [videos] = useState([
    {
      type: 'youtube',
      id: 'L00fk0a4ddI',
      title: 'Faculty Introduction 2024',
      description: 'Welcome message from our faculty dean discussing our vision and goals for the academic year.'
    },
    {
      type: 'youtube',
      id: '-RU83ieg9qc',
      title: 'Why Study Nano Materials Engineering?',
      description: 'Have you ever wondered how materials invisible to the naked eye can be transformed into advanced technologies? The Department of Nanoscience and Nanotechnology focuses on the design, synthesis, and development of nanoscale materials, driving innovations in electronics, energy, healthcare, environmental technology, and advanced manufacturing. Students gain both theoretical knowledge and hands-on experience to prepare for careers in cutting-edge industries.'
    },
    {
      type: 'youtube',
      id: 'lv4_6DQaohM',
      title: 'Manufacturing Systems Engineering: Shaping the Future of Smart Manufacturing',
      description: 'Are you passionate about becoming an engineer in modern manufacturing? The Manufacturing Systems Engineering Program, offered by the Department of Manufacturing System Technology equips students with the knowledge and practical skills needed for the next generation of industry.'
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