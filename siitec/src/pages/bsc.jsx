// ProgramDetails.js
import React from 'react';
import '../styles/bsc.css';

const ProgramDetails = () => {
  return (
    <div className="program-details">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">B.Sc. in Nanotechnology Engineering</h1>
            <p className="hero-subtitle">
              Shaping the future at the atomic scale. Explore the intersection of engineering, 
              physics, chemistry, and biology to create revolutionary technologies.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Apply Now</button>
              <button className="btn btn-secondary">Request Information</button>
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
            <h2>Program Overview</h2>
            <p>Engineering at the nanoscale for macroscopic impact</p>
          </div>
          <div className="overview-content">
            <div className="overview-text">
              <p>
                Our Bachelor of Science in Nanotechnology Engineering is an interdisciplinary program 
                that prepares students to manipulate matter at the atomic and molecular levels. 
                This cutting-edge field combines principles from materials science, chemistry, 
                physics, and engineering to create innovative solutions across industries.
              </p>
              <div className="program-highlights">
                <div className="highlight-card">
                  <div className="highlight-icon">🎓</div>
                  <h4>Interdisciplinary Curriculum</h4>
                  <p>Blend of engineering, science, and technology courses</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">🔬</div>
                  <h4>State-of-the-Art Labs</h4>
                  <p>Access to advanced nanofabrication and characterization facilities</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">🤝</div>
                  <h4>Industry Partnerships</h4>
                  <p>Collaborations with leading tech companies and research institutions</p>
                </div>
              </div>
            </div>
            <div className="overview-stats">
              <div className="stat-item">
                <h3>4</h3>
                <p>Years Duration</p>
              </div>
              <div className="stat-item">
                <h3>128</h3>
                <p>Credit Hours</p>
              </div>
              <div className="stat-item">
                <h3>15:1</h3>
                <p>Student-Faculty Ratio</p>
              </div>
              <div className="stat-item">
                <h3>92%</h3>
                <p>Graduate Employment Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Curriculum</h2>
            <p>Comprehensive education in nanoscience and engineering principles</p>
          </div>
          <div className="curriculum-tabs">
            <div className="tab-buttons">
              <button className="tab-button active">Year 1</button>
              <button className="tab-button">Year 2</button>
              <button className="tab-button">Year 3</button>
              <button className="tab-button">Year 4</button>
            </div>
            <div className="tab-content">
              <div className="year-courses">
                <h4>First Year Foundation</h4>
                <div className="course-list">
                  <div className="course-item">
                    <h5>Introduction to Nanotechnology</h5>
                    <p>NANO 101 - 3 credits</p>
                  </div>
                  <div className="course-item">
                    <h5>General Chemistry I & II</h5>
                    <p>CHEM 121/122 - 6 credits</p>
                  </div>
                  <div className="course-item">
                    <h5>Calculus I & II</h5>
                    <p>MATH 151/152 - 8 credits</p>
                  </div>
                  <div className="course-item">
                    <h5>Physics for Engineers</h5>
                    <p>PHYS 160 - 4 credits</p>
                  </div>
                  <div className="course-item">
                    <h5>Engineering Graphics & Design</h5>
                    <p>ENGR 100 - 3 credits</p>
                  </div>
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
            <h2>Career Opportunities</h2>
            <p>Where our graduates make an impact</p>
          </div>
          <div className="career-grid">
            <div className="career-card">
              <h4>Nanomaterials Engineer</h4>
              <p>Design and develop novel materials with enhanced properties</p>
              <div className="career-tags">
                <span className="tag">Semiconductors</span>
                <span className="tag">Energy</span>
                <span className="tag">Aerospace</span>
              </div>
            </div>
            <div className="career-card">
              <h4>Nanofabrication Specialist</h4>
              <p>Create nanoscale devices and systems using advanced fabrication techniques</p>
              <div className="career-tags">
                <span className="tag">Electronics</span>
                <span className="tag">Photonics</span>
                <span className="tag">Medical Devices</span>
              </div>
            </div>
            <div className="career-card">
              <h4>Research Scientist</h4>
              <p>Conduct fundamental and applied research in academic or industrial settings</p>
              <div className="career-tags">
                <span className="tag">R&D</span>
                <span className="tag">Academia</span>
                <span className="tag">Government Labs</span>
              </div>
            </div>
            <div className="career-card">
              <h4>Biomedical Nanotechnologist</h4>
              <p>Develop nanoscale solutions for healthcare and medical applications</p>
              <div className="career-tags">
                <span className="tag">Drug Delivery</span>
                <span className="tag">Diagnostics</span>
                <span className="tag">Tissue Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="admissions section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Admissions Requirements</h2>
            <p>Join the next generation of nanotechnology innovators</p>
          </div>
          <div className="admissions-content">
            <div className="requirements">
              <h4>Academic Requirements</h4>
              <ul>
                <li>High school diploma with minimum 85% average</li>
                <li>Advanced level Mathematics (Calculus preferred)</li>
                <li>Advanced level Physics</li>
                <li>Advanced level Chemistry</li>
                <li>English proficiency test for international students</li>
              </ul>
            </div>
            <div className="deadlines">
              <h4>Application Deadlines</h4>
              <div className="deadline-item">
                <h5>Fall Intake</h5>
                <p>January 15 - Early Application</p>
                <p>March 1 - Final Deadline</p>
              </div>
              <div className="deadline-item">
                <h5>Winter Intake</h5>
                <p>September 15 - Early Application</p>
                <p>November 1 - Final Deadline</p>
              </div>
            </div>
          </div>
          <div className="cta-section">
            <h3>Ready to engineer at the nanoscale?</h3>
            <p>Start your application today or contact our admissions team for more information.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Apply Now</button>
              <button className="btn btn-outline">Contact Admissions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetails;