// ProgramDetails.js
import React from 'react';
import '../styles/bsc.css';
import { interpolate, useContent } from '../i18n/LanguageContext';
import bscContent from '../i18n/content/bsc';

const HIGHLIGHT_ICONS = ['🎓', '🔬', '🤝'];
const STAT_VALUES = ['4', '128', '15:1', '92%'];
const COURSE_CODES = [
  { code: 'NANO 101', credits: 3 },
  { code: 'CHEM 121/122', credits: 6 },
  { code: 'MATH 151/152', credits: 8 },
  { code: 'PHYS 160', credits: 4 },
  { code: 'ENGR 100', credits: 3 },
];

const ProgramDetails = () => {
  const c = useContent(bscContent);

  return (
    <div className="program-details page-bsc">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{c.heroTitle}</h1>
            <p className="hero-subtitle">{c.heroSubtitle}</p>
            <div className="hero-actions">
              <button className="btn btn-primary">{c.applyNow}</button>
              <button className="btn btn-secondary">{c.requestInfo}</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="nano-visualization">
              <div className="molecule"></div>
              <div className="molecule"></div>
              <div className="molecule"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="program-overview section-padding">
        <div className="container">
          <div className="section-title">
            <h2>{c.overviewTitle}</h2>
            <p>{c.overviewSubtitle}</p>
          </div>
          <div className="overview-content">
            <div className="overview-text">
              <p>{c.overviewText}</p>
              <div className="program-highlights">
                {c.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-card">
                    <div className="highlight-icon">{HIGHLIGHT_ICONS[index]}</div>
                    <h4>{highlight.title}</h4>
                    <p>{highlight.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overview-stats">
              {STAT_VALUES.map((value, index) => (
                <div key={index} className="stat-item">
                  <h3>{value}</h3>
                  <p>{c.stats[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum section-padding">
        <div className="container">
          <div className="section-title">
            <h2>{c.curriculumTitle}</h2>
            <p>{c.curriculumSubtitle}</p>
          </div>
          <div className="curriculum-tabs">
            <div className="tab-buttons">
              {c.years.map((year, index) => (
                <button key={index} className={`tab-button${index === 0 ? ' active' : ''}`}>
                  {year}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <div className="year-courses">
                <h4>{c.firstYearTitle}</h4>
                <div className="course-list">
                  {COURSE_CODES.map((course, index) => (
                    <div key={course.code} className="course-item">
                      <h5>{c.courses[index]}</h5>
                      <p>
                        {course.code} - {interpolate(c.credits, { count: course.credits })}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="career-paths section-padding">
        <div className="container">
          <div className="section-title">
            <h2>{c.careersTitle}</h2>
            <p>{c.careersSubtitle}</p>
          </div>
          <div className="career-grid">
            {c.careers.map((career, index) => (
              <div key={index} className="career-card">
                <h4>{career.title}</h4>
                <p>{career.text}</p>
                <div className="career-tags">
                  {career.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="admissions section-padding">
        <div className="container">
          <div className="section-title">
            <h2>{c.admissionsTitle}</h2>
            <p>{c.admissionsSubtitle}</p>
          </div>
          <div className="admissions-content">
            <div className="requirements">
              <h4>{c.requirementsTitle}</h4>
              <ul>
                {c.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>
            <div className="deadlines">
              <h4>{c.deadlinesTitle}</h4>
              {c.deadlines.map((deadline) => (
                <div key={deadline.title} className="deadline-item">
                  <h5>{deadline.title}</h5>
                  {deadline.dates.map((date) => (
                    <p key={date}>{date}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="cta-section">
            <h3>{c.ctaTitle}</h3>
            <p>{c.ctaText}</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">{c.applyNow}</button>
              <button className="btn btn-outline">{c.contactAdmissions}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetails;
