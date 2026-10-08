import React, { useState } from 'react';
import '../styles/Center.css';

import { usePhrases } from '../i18n/LanguageContext';
import phrases from '../i18n/content/centers';
const ATTACPage = () => {

  const tx = usePhrases(phrases);

  const [activeTab, setActiveTab] = useState('overview');

  const researchAreas = [

    {

      id: 1,

      title: tx('Industrial Robotics'),

      icon: '🤖',

      description: tx('Advanced robotic systems for manufacturing, assembly, and material handling in industrial environments.'),

      keywords: ['Collaborative Robots', 'Robot Manipulation', 'Industrial Automation']

    },

    {

      id: 2,

      title: tx('Machine Vision'),

      icon: '👁️',

      description: tx('Computer vision systems for quality inspection, object recognition, and visual guidance in automated processes.'),

      keywords: ['Image Processing', 'Quality Control', 'Pattern Recognition']

    },

    {

      id: 3,

      title: tx('Control Systems'),

      icon: '⚙️',

      description: tx('Intelligent control algorithms for precision motion control, process optimization, and system integration.'),

      keywords: ['PLC Programming', 'Motion Control', 'System Integration']

    },

    {

      id: 4,

      title: tx('AI & Machine Learning'),

      icon: '🧠',

      description: tx('Application of artificial intelligence for predictive maintenance, adaptive control, and decision-making.'),

      keywords: ['Deep Learning', 'Predictive Analytics', 'Optimization']

    }

  ];



  const facilities = [

    {

      id: 1,

      name: tx('Robotics Laboratory'),

      description: tx('State-of-the-art facility equipped with industrial robots, collaborative robots, and automation systems.'),

      equipment: [tx('6-Axis Industrial Robots'), tx('Collaborative Robot Arms'), tx('AGV Systems')]

    },

    {

      id: 2,

      name: tx('Vision Systems Lab'),

      description: tx('Advanced imaging and computer vision laboratory for research and development.'),

      equipment: [tx('High-Speed Cameras'), tx('3D Scanners'), tx('Vision Sensors')]

    },

    {

      id: 3,

      name: tx('Control Systems Lab'),

      description: tx('Facility for designing, testing, and implementing control systems and automation solutions.'),

      equipment: [tx('PLCs'), tx('HMI Systems'), tx('SCADA Software')]

    },

    {

      id: 4,

      name: tx('Prototyping Workshop'),

      description: tx('Equipped workshop for rapid prototyping and development of automation solutions.'),

      equipment: [tx('3D Printers'), tx('CNC Machines'), tx('Electronics Lab')]

    }

  ];



  const projects = [

    {

      id: 1,

      title: tx('Smart Manufacturing System'),

      status: 'Ongoing',

      description: tx('Development of an intelligent manufacturing system integrating robotics, IoT, and AI for Industry 4.0.'),

      year: '2024'

    },

    {

      id: 2,

      title: tx('Collaborative Robot for SMEs'),

      status: 'Completed',

      description: tx('Design and implementation of affordable collaborative robot solutions for small and medium enterprises.'),

      year: '2023'

    },

    {

      id: 3,

      title: tx('Automated Quality Inspection'),

      status: 'Ongoing',

      description: tx('AI-powered vision system for automated quality inspection in manufacturing processes.'),

      year: '2024'

    },

    {

      id: 4,

      title: tx('Mobile Robot Navigation'),

      status: 'Ongoing',

      description: tx('Advanced navigation and path planning for autonomous mobile robots in industrial settings.'),

      year: '2024'

    }

  ];



  const teamMembers = [

    {

      id: 1,

      name: tx('Dr. Suntad Chuawongin'),

      thaiName: 'ผศ.ดร.สันทัด ชูวงศ์อินทร์',

      position: tx('Center Director'),

      expertise: tx('Robotics, Automation Systems'),

      email: 'suntad.c@kmitl.ac.th',

      image: 'https://via.placeholder.com/150'

    },

    {

      id: 2,

      name: tx('Dr. Research Associate'),

      thaiName: 'ดร. นักวิจัย',

      position: tx('Senior Researcher'),

      expertise: tx('Machine Vision, AI'),

      email: 'research@kmitl.ac.th',

      image: 'https://via.placeholder.com/150'

    },

    {

      id: 3,

      name: tx('Eng. Technical Staff'),

      thaiName: 'วศ. เจ้าหน้าที่เทคนิค',

      position: tx('Lead Engineer'),

      expertise: tx('Control Systems, Integration'),

      email: 'engineer@kmitl.ac.th',

      image: 'https://via.placeholder.com/150'

    }

  ];



 return (
    <div className="cira-container page-center">
      {/* Hero Section with Banner Image */}
      <section className="cira-hero cira-hero-with-banner">
        <div className="hero-decoration"></div>
        <div className="cira_hero-content">
          <div className="hero-badge">{tx("Research Center")}</div>
          <h1 className="cira_hero-title">{tx("Advanced Technology Testing")} <br/>{tx("and Analysis Center")}</h1>
          <div className="hero-acronym">{tx("ATTAC")}</div>
          <p className="hero-description">
            {tx("Advancing the future of industrial automation through cutting-edge research, innovation, and collaboration with industry partners.")}
          </p>
           <div className="hero-cta-buttons">
            <a href="http://www.cmit.kmitl.ac.th/attac-instrument/" target="_blank" rel="noopener noreferrer" className="hero-cta-btn">
                {tx("Visit Website")}
            </a>
        </div>
          {/* <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">{tx("Research Projects")}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">{tx("Industry Partners")}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">{tx("Publications")}</div>
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

          {tx("Overview")}

        </button>

        <button

          className={`nav-tab ${activeTab === 'research' ? 'active' : ''}`}

          onClick={() => setActiveTab('research')}

        >

          {tx("Research Areas")}

        </button>

        <button

          className={`nav-tab ${activeTab === 'facilities' ? 'active' : ''}`}

          onClick={() => setActiveTab('facilities')}

        >

          {tx("Facilities")}

        </button>

        <button

          className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}

          onClick={() => setActiveTab('projects')}

        >

          {tx("Projects")}

        </button>

        <button

          className={`nav-tab ${activeTab === 'team' ? 'active' : ''}`}

          onClick={() => setActiveTab('team')}

        >

          {tx("Our Team")}

        </button>

      </nav>



      {/* Content Sections */}

      <div className="cira-content">

        {/* Overview Tab */}

        {activeTab === 'overview' && (

          <section className="content-section">

            <div className="section-header">

              <h2 className="section-title">{tx("About CiRA")}</h2>

              <div className="title-underline"></div>

            </div>



            <div className="overview-grid">

              <div className="overview-main">

                <h3 className="subsection-title">{tx("Our Mission")}</h3>

                <p className="text-content">

                  {tx("The Center of Industrial Robots and Automation (CiRA) is dedicated to advancing the field of industrial automation through innovative research, development of cutting-edge technologies, and collaboration with industry partners. We strive to bridge the gap between academic research and industrial applications, contributing to Thailand's transition towards Industry 4.0.")}

                </p>



                <h3 className="subsection-title">{tx("Vision")}</h3>

                <p className="text-content">

                  {tx("To be a leading research center in Southeast Asia for industrial robotics and automation, recognized for excellence in research, innovation, and technology transfer that drives industrial transformation and economic growth.")}

                </p>



                <h3 className="subsection-title">{tx("Core Objectives")}</h3>

                <ul className="objectives-list">

                  <li>{tx("Conduct cutting-edge research in robotics and automation technologies")}</li>

                  <li>{tx("Develop innovative solutions for industrial challenges")}</li>

                  <li>{tx("Foster collaboration between academia and industry")}</li>

                  <li>{tx("Train the next generation of automation engineers and researchers")}</li>

                  <li>{tx("Contribute to Thailand's digital transformation and Industry 4.0 initiatives")}</li>

                </ul>

              </div>



              <div className="overview-sidebar">

                <div className="info-box">

                  <h4 className="info-box-title">{tx("Quick Facts")}</h4>

                  <div className="info-item">

                    <span className="info-label">{tx("Established:")}</span>

                    <span className="info-value">2018</span>

                  </div>

                  <div className="info-item">

                    <span className="info-label">{tx("Location:")}</span>

                    <span className="info-value">{tx("SIIT, KMITL")}</span>

                  </div>

                  <div className="info-item">

                    <span className="info-label">{tx("Research Staff:")}</span>

                    <span className="info-value">{tx("12+ Members")}</span>

                  </div>

                  <div className="info-item">

                    <span className="info-label">{tx("Lab Space:")}</span>

                    <span className="info-value">{tx("500+ sq.m")}</span>

                  </div>

                </div>



                <div className="info-box">

                  <h4 className="info-box-title">{tx("Contact Information")}</h4>

                  <div className="contact-item">

                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">

                      <path d="M4 7l8 5 8-5M4 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth="2"/>

                    </svg>

                    <a href="mailto:cira@kmitl.ac.th">{tx("cira@kmitl.ac.th")}</a>

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

                    <span>{tx("SIIT Building, KMITL")}</span>

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

              <h2 className="section-title">{tx("Research Areas")}</h2>

              <div className="title-underline"></div>

              <p className="section-description">

                {tx("Our research spans multiple disciplines in robotics and automation")}

              </p>

            </div>



            <div className="research-grid">

              {researchAreas.map((area) => (

                <div key={area.id} className="research-card">

                  <div className="research-icon">{area.icon}</div>

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

              <h2 className="section-title">{tx("Research Facilities")}</h2>

              <div className="title-underline"></div>

              <p className="section-description">

                {tx("State-of-the-art laboratories and equipment for research and development")}

              </p>

            </div>



            <div className="cira_facilities-grid">

              {facilities.map((facility) => (

                <div key={facility.id} className="cira_facility-card">

                  <h3 className="cira_facility-name">{facility.name}</h3>

                  <p className="cira_facility-description">{facility.description}</p>

                  <div className="cira_facility-divider"></div>

                  <h4 className="equipment-title">{tx("Key Equipment")}</h4>

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

              <h2 className="section-title">{tx("Research Projects")}</h2>

              <div className="title-underline"></div>

              <p className="section-description">

                {tx("Current and completed research projects advancing automation technology")}

              </p>

            </div>



            <div className="projects-list">

              {projects.map((project) => (

                <div key={project.id} className="project-card">

                  <div className="project-header">

                    <div>

                      <h3 className="project-title">{project.title}</h3>

                      <span className="project-year">{project.year}</span>

                    </div>

                    <span className={`project-status ${project.status.toLowerCase()}`}>

                      {tx(project.status)}

                    </span>

                  </div>

                  <p className="project-description">{project.description}</p>

                </div>

              ))}

            </div>

          </section>

        )}



        {/* Team Tab */}

        {activeTab === 'team' && (

          <section className="content-section">

            <div className="section-header">

              <h2 className="section-title">{tx("Our Team")}</h2>

              <div className="title-underline"></div>

              <p className="section-description">

                {tx("Meet the experts driving innovation in robotics and automation")}

              </p>

            </div>



            <div className="team-grid">

              {teamMembers.map((member) => (

                <div key={member.id} className="team-card">

                  <div className="team-image-wrapper">

                    <img src={member.image} alt={member.name} className="team-image" />

                  </div>

                  <div className="team-info">

                    <h3 className="team-name">{member.name}</h3>

                    <p className="team-thai-name">{member.thaiName}</p>

                    <p className="team-position">{member.position}</p>

                    <div className="team-divider"></div>

                    <p className="team-expertise">

                      <strong>{tx("Expertise:")}</strong> {member.expertise}

                    </p>

                    <a href={`mailto:${member.email}`} className="team-email">

                      {member.email}

                    </a>

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



export default ATTACPage;