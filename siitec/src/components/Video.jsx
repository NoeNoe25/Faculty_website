import React from 'react';
import '../styles/components/Video.css';
import { useContent } from '../i18n/LanguageContext';
import homeContent from '../i18n/content/home';

const VIDEO_SOURCES = [
  { type: 'youtube', id: 'L00fk0a4ddI' },
  { type: 'youtube', id: '-RU83ieg9qc' },
  { type: 'youtube', id: 'lv4_6DQaohM' },
];

const VideoSection = () => {
  const { videos: text } = useContent(homeContent);
  const videos = VIDEO_SOURCES.map((video, index) => ({ ...video, ...text.items[index] }));

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
              {text.unsupported}
            </video>
          )}
        </div>
        <div className="video-info">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <span className={`video-badge ${video.type === 'youtube' ? 'badge-youtube' : 'badge-local'}`}>
            {video.type === 'youtube' ? 'YouTube' : text.localVideo}
          </span>
        </div>
      </div>
    );
  };

  return (
      <div className="video-section home-videos">
        <div className="section-header">
          <h1>{text.title}</h1>
          <p>{text.description}</p>
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