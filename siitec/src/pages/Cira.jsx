import React, { useState } from 'react';
import { FaRobot, FaEye, FaCogs, FaBrain, FaYoutube } from 'react-icons/fa';
import '../styles/Center.css';
import YouTube from 'react-youtube';
import image1 from '../assets/images/cira/1.jpg';
import image2 from '../assets/images/cira/2.jpg';
import image3 from '../assets/images/cira/3.jpg';
import image4 from '../assets/images/cira/4.jpg';
import image5 from '../assets/images/cira/5.jpg';
import image6 from '../assets/images/cira/6.png';

// Facility background images (you'll need to add these to your assets)
import facility1 from '../assets/albums/fbrication.webp';
import facility2 from '../assets/albums/fbrication.webp';
import facility3 from '../assets/albums/fbrication.webp';
import facility4 from '../assets/albums/fbrication.webp';

// Project images (you'll need to add these to your assets)
import project1 from '../assets/images/cira/project1.png';
import project2 from '../assets/images/cira/project2.jpg';
import project3 from '../assets/images/cira/project3.png';
import project4 from '../assets/images/cira/project1.png';

const CiRAPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const researchAreas = [
    {
      id: 1,
      title: 'Industrial Robotics',
      icon: <FaRobot />,
      description: 'Advanced robotic systems for manufacturing, assembly, and material handling in industrial environments.',
      keywords: ['Collaborative Robots', 'Robot Manipulation', 'Industrial Automation']
    },
    {
      id: 2,
      title: 'Machine Vision',
      icon: <FaEye />,
      description: 'Computer vision systems for quality inspection, object recognition, and visual guidance in automated processes.',
      keywords: ['Image Processing', 'Quality Control', 'Pattern Recognition']
    },
    {
      id: 3,
      title: 'Control Systems',
      icon: <FaCogs />,
      description: 'Intelligent control algorithms for precision motion control, process optimization, and system integration.',
      keywords: ['PLC Programming', 'Motion Control', 'System Integration']
    },
    {
      id: 4,
      title: 'AI & Machine Learning',
      icon: <FaBrain />,
      description: 'Application of artificial intelligence for predictive maintenance, adaptive control, and decision-making.',
      keywords: ['Deep Learning', 'Predictive Analytics', 'Optimization']
    }
  ];

  const facilities = [
    {
      id: 1,
      name: 'Low Cost Robots  with ROS (Robot operating system)',
      description: 'State-of-the-art facility equipped with industrial robots, collaborative robots, and automation systems.',
      equipment: ['6-Axis Industrial Robots', 'Collaborative Robot Arms', 'AGV Systems'],
      backgroundImage: facility1
    },
    {
      id: 2,
      name: 'Collaborative Robot for Industrial Application  ',
      description: 'Advanced imaging and computer vision laboratory for research and development.',
      equipment: ['High-Speed Cameras', '3D Scanners', 'Vision Sensors'],
      backgroundImage: facility2
    },
    {
      id: 3,
      name: 'Development of a gripper design ',
      description: 'Facility for designing, testing, and implementing control systems and automation solutions.',
      equipment: ['PLCs', 'HMI Systems', 'SCADA Software'],
      backgroundImage: facility3
    },
    {
      id: 4,
      name: 'Multiple View Geometry in Computer Vision (Machine Learning) ',
      description: 'Equipped workshop for rapid prototyping and development of automation solutions.',
      equipment: ['3D Printers', 'CNC Machines', 'Electronics Lab'],
      backgroundImage: facility4
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Smart Manufacturing System',
      status: 'Ongoing',
      description: 'Development of an intelligent manufacturing system integrating robotics, IoT, and AI for Industry 4.0.',
      year: '2024',
      image: project1
    },
    {
      id: 2,
      title: 'Collaborative Robot for SMEs',
      status: 'Completed',
      description: 'Design and implementation of affordable collaborative robot solutions for small and medium enterprises.',
      year: '2023',
      image: project2
    },
    {
      id: 3,
      title: 'Automated Quality Inspection',
      status: 'Ongoing',
      description: 'AI-powered vision system for automated quality inspection in manufacturing processes.',
      year: '2024',
      image: project3
    },
    {
      id: 4,
      title: 'Mobile Robot Navigation',
      status: 'Ongoing',
      description: 'Advanced navigation and path planning for autonomous mobile robots in industrial settings.',
      year: '2024',
      image: project4
    }
  ];

  const cira_activities = [
    {
      id: 1,
      description: 'สกว. พัฒนาแพลตฟอร์มเทคโนโลยีฐานด้านการบูรณาการระบบเพื่องานหุ่นยนต์ฯ ด้วยระบบปฏิบัติการหุ่นยนต์ (ROS) ในภาคอุตสาหกรรมให้มีความเสถียรและน่าเชื่อถือ',
      image: image1
    },
    {
      id: 2,
      description: 'NAC2018 ตอบโจทย์ประเทศไทยด้วยงานวิจัย ประเด็นมุ่งเน้น (Targeted R&D:Tracking Thailand Challenge) ',
      image: image2
    },
    {
      id: 3,
      description: 'NAC2018 ตอบโจทย์ประเทศไทยด้วยงานวิจัย ประเด็นมุ่งเน้น (Targeted R&D:Tracking Thailand Challenge) ',
      image: image3
    },
    {
      id: 4,
      description: 'NAC2018 ตอบโจทย์ประเทศไทยด้วยงานวิจัย ประเด็นมุ่งเน้น (Targeted R&D:Tracking Thailand Challenge) ',
      image: image4
    },
    {
      id: 5,
      description: 'เรียนรู้การใช้งาน ROS (Robotics Operation  System) at CiRA ',
      image: image5
    },
    {
      id: 6,
      description: 'อบรมการใช้งาน KUKA Robot ',
      image: image6
    },
  ];

   const youtubeVideos = [
    {
      id: 'video1',
      title: 'CiRA Robotics Lab Tour',
      description: 'A virtual tour of our state-of-the-art robotics laboratory showcasing advanced automation systems.',
      videoId: 'aMDBSVWBRmM', 
      date: '2024'
    },
    {
      id: 'video2',
      title: 'Industry 4.0 Workshop',
      description: 'Highlights from our annual Industry 4.0 workshop featuring collaborative robot demonstrations.',
      videoId: 'vCix4hGHXvo', 
      date: '2023'
    }
  ];

 
  const youtubeOpts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="cira-container">
      {/* Hero Section with Banner Image */}
      <section className="cira-hero cira-hero-with-banner">
        <div className="hero-decoration"></div>
        <div className="cira_hero-content">
          <div className="hero-badge">Research Center</div>
          <h1 className="cira_hero-title">Center of Industrial Robots<br/>and Automation</h1>
          <div className="hero-acronym">CiRA</div>
          <p className="hero-description">
            Advancing the future of industrial automation through cutting-edge research,
            innovation, and collaboration with industry partners.
          </p>
          <div className="hero-cta-buttons">
            <a href="https://sites.google.com/view/amicira/project?authuser=0" target="_blank" rel="noopener noreferrer" className="hero-cta-btn">
                Visit Website
            </a>
        </div>
          {/* <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Research Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Industry Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Publications</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="cira-nav">
        <button
          className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`nav-tab ${activeTab === 'research' ? 'active' : ''}`}
          onClick={() => setActiveTab('research')}
        >
          Research Areas
        </button>
        <button
          className={`nav-tab ${activeTab === 'facilities' ? 'active' : ''}`}
          onClick={() => setActiveTab('facilities')}
        >
          Facilities
        </button>
        <button
          className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={`nav-tab ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => setActiveTab('team')}
        >
          Activities
        </button>
      </nav>

      {/* Content Sections */}
      <div className="cira-content">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section className="content-section">
            <div className="section-header">
              <h2 className="section-title">About CiRA</h2>
              <div className="title-underline"></div>
            </div>

            <div className="overview-grid">
              <div className="overview-main">
                <h3 className="subsection-title">Our Mission</h3>
                <p className="text-content">
                  The Center of Industrial Robots and Automation (CiRA) is dedicated to advancing
                  the field of industrial automation through innovative research, development of
                  cutting-edge technologies, and collaboration with industry partners. We strive
                  to bridge the gap between academic research and industrial applications,
                  contributing to Thailand's transition towards Industry 4.0.
                </p>

                <h3 className="subsection-title">Vision</h3>
                <p className="text-content">
                  To be a leading research center in Southeast Asia for industrial robotics and
                  automation, recognized for excellence in research, innovation, and technology
                  transfer that drives industrial transformation and economic growth.
                </p>

                <h3 className="subsection-title">Core Objectives</h3>
                <ul className="objectives-list">
                  <li>Conduct cutting-edge research in robotics and automation technologies</li>
                  <li>Develop innovative solutions for industrial challenges</li>
                  <li>Foster collaboration between academia and industry</li>
                  <li>Train the next generation of automation engineers and researchers</li>
                  <li>Contribute to Thailand's digital transformation and Industry 4.0 initiatives</li>
                </ul>
              </div>

              <div className="overview-sidebar">
                <div className="info-box">
                  <h4 className="info-box-title">Quick Facts</h4>
                  <div className="info-item">
                    <span className="info-label">Established:</span>
                    <span className="info-value">2018</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Location:</span>
                    <span className="info-value">SIIT, KMITL</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Research Staff:</span>
                    <span className="info-value">12+ Members</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Lab Space:</span>
                    <span className="info-value">500+ sq.m</span>
                  </div>
                </div>

                <div className="info-box">
                  <h4 className="info-box-title">Contact Information</h4>
                  <div className="contact-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 7l8 5 8-5M4 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <a href="mailto:cira@kmitl.ac.th">cira@kmitl.ac.th</a>
                  </div>
                  <div className="contact-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16v3a2 2 0 0 1-2 2h-1a16 16 0 0 1-16-16V4a2 2 0 0 1 2-2h3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>+66 2 329 8100</span>
                  </div>
                  <div className="contact-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M19 10c0 6-7 11-7 11s-7-5-7-11a7 7 0 0 1 14 0z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>SIIT Building, KMITL</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Research Areas Tab */}
        {activeTab === 'research' && (
          <section className="content-section">
            <div className="section-header">
              <h2 className="section-title">Research Areas</h2>
              <div className="title-underline"></div>
              <p className="section-description">
                Our research spans multiple disciplines in robotics and automation
              </p>
            </div>

            <div className="research-grid">
              {researchAreas.map((area) => (
                <div key={area.id} className="research-card">
                  <div className="research-icon">
                    {area.icon}
                  </div>
                  <h3 className="research-title">{area.title}</h3>
                  <p className="research-description">{area.description}</p>
                  <div className="research-keywords">
                    {area.keywords.map((keyword, index) => (
                      <span key={index} className="keyword-tag">{keyword}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Facilities Tab */}
        {activeTab === 'facilities' && (
          <section className="content-section">
            <div className="section-header">
              <h2 className="section-title">Research Facilities</h2>
              <div className="title-underline"></div>
              <p className="section-description">
                State-of-the-art laboratories and equipment for research and development
              </p>
            </div>

            <div className="cira_facilities-grid">
              {facilities.map((facility) => (
                <div 
                  key={facility.id} 
                  className="cira_facility-card facility-card-with-bg"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${facility.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <h3 className="cira_facility-name">{facility.name}</h3>
                  <p className="cira_facility-description">{facility.description}</p>
                  <div className="cira_facility-divider"></div>
                  <h4 className="equipment-title">Key Equipment</h4>
                  <ul className="equipment-list">
                    {facility.equipment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Tab */}
{activeTab === 'projects' && (
  <section className="content-section">
    <div className="section-header">
      <h2 className="section-title">Research Projects</h2>
      <div className="title-underline"></div>
      <p className="section-description">
        Current and completed research projects advancing automation technology
      </p>
    </div>

    {/* Projects List */}
    <div className="projects-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card project-card-with-image">
          <div className="project-image-container">
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
          <div className="project-content">
            <div className="project-header">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <span className={`project-status ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* YouTube Videos Section - ADD THIS */}
    <div className="section-header" style={{ marginTop: '4rem' }}>
      <div className="video-section-title">
        <FaYoutube style={{ color: '#FF0000', marginRight: '10px', fontSize: '1.5rem' }} />
        <h2 className="section-title">Video Showcase</h2>
      </div>
      <div className="title-underline"></div>
      <p className="section-description">
        Watch our latest research demonstrations and laboratory tours
      </p>
    </div>

    <div className="youtube-videos-grid">
      {youtubeVideos.map((video) => (
        <div key={video.id} className="youtube-video-card">
          <div className="video-container">
            <YouTube 
              videoId={video.videoId} 
              opts={youtubeOpts}
              className="youtube-embed"
            />
          </div>
          <div className="video-info">
            <div className="video-header">
              <h3 className="video-title">{video.title}</h3>
              <span className="video-date">{video.date}</span>
            </div>
            <p className="video-description">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)}
        {/* Activities Tab */}
        {activeTab === 'team' && (
          <section className="content-section">
            <div className="section-header">
              <h2 className="section-title">Activities</h2>
              <div className="title-underline"></div>
              <p className="section-description">
                Our recent activities and workshops
              </p>
            </div>

            <div className="team-grid">
              {cira_activities.map((activity) => (
                <div key={activity.id} className="team-card">
                  <div className="team-image-wrapper">
                    <img src={activity.image} alt={activity.description} className="team-image" />
                  </div>
                  <div className="team-info">
                    <div className="team-divider"></div>
                    <p className="image_description">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CiRAPage;