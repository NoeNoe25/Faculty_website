// src/components/AboutUs.js
import React from 'react';
import '../styles/Aboutus.css';
import { useContent } from '../i18n/LanguageContext';
import aboutusContent from '../i18n/content/aboutus';

// Import images (you'll need to add these to your project)
import campusImage from '../assets/albums/KMITL 3.jpg';
import founderImage from '../assets/professor1.jpg';
import teamImage from '../assets/albums/KMITL.13.jpg';
import researchImage from '../assets/albums/KMITL.13.jpg';

const LEADER_IMAGES = [founderImage, teamImage, researchImage];
const STAT_NUMBERS = ['2,500+', '150+', '95%', '88%', '50+', '$10M+'];
const TIMELINE_YEARS = ['2010', '2013', '2016', '2019', '2022', '2024'];
const VALUE_ICONS = ['🔬', '🤝', '🌍', '🎯', '💡', '📚'];
const FACILITY_ICONS = ['🔬', '💻', '🏢', '📚'];

const AboutUs = () => {
  const c = useContent(aboutusContent);

  const leadershipTeam = c.leaders.map((leader, index) => ({ ...leader, image: LEADER_IMAGES[index] }));
  const statistics = STAT_NUMBERS.map((number, index) => ({ number, label: c.statistics[index] }));
  const timeline = TIMELINE_YEARS.map((year, index) => ({ year, ...c.timeline[index] }));
  const values = c.coreValues.map((value, index) => ({ ...value, icon: VALUE_ICONS[index] }));

  return (
    <section id="about" className="section about-section page-aboutus">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>{c.heroTitle}</h1>
            <p className="hero-subtitle">{c.heroSubtitle}</p>
            <div className="hero-stats">
              {statistics.slice(0, 4).map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>{c.missionTitle}</h3>
              <p>{c.missionText}</p>
            </div>

            <div className="vision-card">
              <div className="card-icon">🔭</div>
              <h3>{c.visionTitle}</h3>
              <p>{c.visionText}</p>
            </div>

            <div className="values-card">
              <div className="card-icon">💎</div>
              <h3>{c.valuesTitle}</h3>
              <ul>
                {c.valuesList.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>{c.journeyTitle}</h2>
            <p>{c.journeySubtitle}</p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-connector"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="leadership-section">
        <div className="container">
          <div className="section-header">
            <h2>{c.leadershipTitle}</h2>
            <p>{c.leadershipSubtitle}</p>
          </div>
          <div className="leadership-grid">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} />
                  <div className="leader-overlay">
                    <p>"{leader.quote}"</p>
                  </div>
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="leader-position">{leader.position}</p>
                  <p className="leader-department">{leader.department}</p>
                  <p className="leader-education">{leader.education}</p>
                  <div className="expertise-tags">
                    {leader.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>{c.coreValuesTitle}</h2>
            <p>{c.coreValuesSubtitle}</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus & Facilities */}
      <div className="campus-section">
        <div className="container">
          <div className="campus-content">
            <div className="campus-info">
              <h2>{c.campusTitle}</h2>
              <p>{c.campusText}</p>
              <div className="facilities-list">
                {c.campusFacilities.map((facility, index) => (
                  <div key={facility} className="facility-item">
                    <span className="facility-icon">{FACILITY_ICONS[index]}</span>
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="campus-image">
              <img src={campusImage} alt={c.campusImageAlt} />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{c.ctaTitle}</h2>
            <p>{c.ctaText}</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">{c.applyNow}</button>
              <button className="btn btn-secondary">{c.scheduleVisit}</button>
              <button className="btn btn-secondary">{c.contactUs}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
