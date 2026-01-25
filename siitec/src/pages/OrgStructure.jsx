// src/components/OrgStructure.js
import React from 'react';
import '../styles/OrgStructure.css';
// Import your organizational chart image
import orgChartImage from '../assets/albums/Organizational structure.png'; // or .png, .svg

const OrgStructure = () => {
  return (
    <div className="org-chart-container">
      {/* Header */}
      <header className="org-chart-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <div className="header-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="header-title">Organizational Structure</h1>
          <p className="header-subtitle">School of Integrated Innovative Technology</p>
          <p className="header-institution">King Mongkut's Institute of Technology Ladkrabang</p>
        </div>
      </header>

      {/* Chart Content - Just show the image */}
      <div className="org-chart-content">
        <div className="chart-image-container">
          <img 
            src={orgChartImage} 
            alt="Organizational Structure Chart of School of Integrated Innovative Technology"
            className="org-chart-image"
          />
          <div className="image-caption">
            Organizational Structure of School of Integrated Innovative Technology, KMITL
          </div>
        </div>
        
        <div className="chart-legend">
          <h3>Legend:</h3>
          <div className="legend-items">
            <div className="legend-item">
              <span className="legend-color executive"></span>
              <span>Executive Leadership</span>
            </div>
            <div className="legend-item">
              <span className="legend-color academic"></span>
              <span>Academic Departments</span>
            </div>
            <div className="legend-item">
              <span className="legend-color research"></span>
              <span>Research Centers</span>
            </div>
            <div className="legend-item">
              <span className="legend-color support"></span>
              <span>Support Units</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="org-chart-footer">
        <p>© 2024 School of Integrated Innovative Technology — KMITL</p>
      </footer>
    </div>
  );
};

export default OrgStructure;