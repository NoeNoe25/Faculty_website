import React from 'react';
import '../styles/components/CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-badge">Application Open</div>
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-description">
            Join our innovative community of technology leaders and researchers. 
            Applications for 2026 admission are now open.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-btn primary">
              Apply Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="cta-btn secondary">
              Download Brochure
            </button>
          </div>

          <div className="cta-stats">
            <div className="cta-stat-item">
              <div className="cta-stat-icon">📅</div>
              <div className="cta-stat-content">
                <div className="cta-stat-label">Application Deadline</div>
                <div className="cta-stat-value">March 31, 2026</div>
              </div>
            </div>
            <div className="cta-stat-item">
              <div className="cta-stat-icon">🎓</div>
              <div className="cta-stat-content">
                <div className="cta-stat-label">Programs Available</div>
                <div className="cta-stat-value">12+ Majors</div>
              </div>
            </div>
            <div className="cta-stat-item">
              <div className="cta-stat-icon">💰</div>
              <div className="cta-stat-content">
                <div className="cta-stat-label">Scholarships</div>
                <div className="cta-stat-value">Up to 100%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-visual">
          <div className="cta-image-placeholder">
            <div className="cta-floating-card card-1">
              <div className="card-icon">🔬</div>
              <div className="card-text">Research</div>
            </div>
            <div className="cta-floating-card card-2">
              <div className="card-icon">💡</div>
              <div className="card-text">Innovation</div>
            </div>
            <div className="cta-floating-card card-3">
              <div className="card-icon">🚀</div>
              <div className="card-text">Future</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}