import React from "react";
import "../styles/About.css";
import "../styles/components/ParallaxSection.css";
import deanImage from "../assets/professor1.jpg";
import bgimg from "../assets/albums/KMITL.16.jpg";
import {
  LuGraduationCap,
  LuMicroscope,
  LuHandshake,
  LuGlobe,
  LuHeartHandshake,
  LuRocket,
} from "react-icons/lu";
import { useContent } from "../i18n/LanguageContext";
import aboutContent from "../i18n/content/about";

const STAT_NUMBERS = ["2,500+", "150+", "95%", "88%"];
const FEATURE_ICONS = [
  <LuHeartHandshake />,
  <LuHandshake />,
  <LuGraduationCap />,
  <LuMicroscope />,
  <LuGlobe />,
  <LuRocket />,
];

export default function SIITECAbout() {
  const c = useContent(aboutContent);
  const statistics = STAT_NUMBERS.map((number, index) => ({ number, label: c.statistics[index] }));
  const features = c.features.map((feature, index) => ({ ...feature, icon: FEATURE_ICONS[index] }));

  return (
    <div className="about-section page-about">
      {/* Hero Section with Parallax Banner */}
      <section className="parallax-section">
        <div className="parallax-banner" style={{ height: "90vh" }}>
          {/* Single static background image */}
          <div
            className="parallax-background active"
            style={{ backgroundImage: `url(${bgimg})` }}
          ></div>

          <div className="overlay">
            <div className="tech-grid-overlay"></div>
          </div>

          <div className="content-container">
            <div className="parallax-content">
              <h1 className="parallax-main-title" style={{ color: "#fff" }}>
                {c.heroTitle}
              </h1>
              <p className="parallax-subtitle">{c.heroText}</p>

              {/* Stats Section */}
              <div className="about-hero-stats" style={{ marginTop: "40px" }}>
                {statistics.map((stat, index) => (
                  <div key={index} className="about-stat-item">
                    <span className="about-stat-number">{stat.number}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Innovation Section */}
        <div className="innovation-section">
          <div className="container">
            <div className="innovation-grid">
              <div className="section-title">
                <h2>{c.joinTitle}</h2>
                <button className="about-btn about-btn-primary">{c.applyNow}</button>
              </div>
              <div className="innovation-right">
                <p>{c.joinText}</p>
              </div>
            </div>

            <div className="cards-grid">
              <div className="about-card about-card-story">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt={c.storyImageAlt}
                />
                <div className="about-card-overlay">
                  <h3>{c.storyTitle}</h3>
                  <p>{c.storyText}</p>
                </div>
              </div>
              <div className="cards-right">
                <div className="about-card about-card-mission">
                  <h3>{c.missionTitle}</h3>
                  <p>{c.missionText}</p>
                </div>
                <div className="about-card about-card-vision">
                  <h3>{c.visionTitle}</h3>
                  <p>{c.visionText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Unique */}
        <div className="unique-section">
          <div className="container">
            <div className="section-title">
              <h2>{c.uniqueTitle}</h2>
              <p>{c.uniqueText}</p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="about-feature-card">
                  <div className="about-feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dean's Message */}
        <div className="dean-section">
          <div className="container">
            <div className="section-title">
              <h2>{c.deanTitle}</h2>
            </div>
            <div className="dean-card">
              <div className="dean-quote">
                <div className="quote-mark">"</div>
                <h3>{c.deanQuote}</h3>
                <p>{c.deanText}</p>
              </div>
              <div className="dean-profile">
                <img src={deanImage} alt={c.deanImageAlt} />
                <div className="dean-info">
                  <h4>{c.deanName}</h4>
                  <p>{c.deanOrg}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
