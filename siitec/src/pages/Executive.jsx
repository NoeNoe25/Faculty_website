// src/components/OrganizationalStructure.js
import React, { useState } from 'react';
import '../styles/OrganizationalStructure.css';

// Import images
import presidentImage from '../assets/professor1.jpg';
import academicDeanImage from '../assets/professor1.jpg';
import researchDeanImage from '../assets/professor1.jpg';
import adminDeanImage from '../assets/professor1.jpg';

const Executive = () => {
  // Leadership Data
  const leadership = [
    {
      id: 'president',
      name: "Dr. Evelyn Rodriguez",
      title: "President & CEO",
      image: presidentImage,
      department: "Executive Office",
      email: "e.rodriguez@techinstitute.edu",
      phone: "+1 (555) 123-4000",
      responsibilities: [
        "Overall institutional leadership and strategy",
        "Board of Trustees relations",
        "External partnerships and funding",
        "Strategic planning and vision"
      ],
      reportsTo: "Board of Trustees",
      directReports: ["Academic Dean", "Research Dean", "Administrative Dean"]
    },
    {
      id: 'academic',
      name: "Prof. Michael Chen",
      title: "Dean of Academic Affairs",
      image: academicDeanImage,
      department: "Academic Division",
      email: "m.chen@techinstitute.edu",
      phone: "+1 (555) 123-4001",
      responsibilities: [
        "Curriculum development and oversight",
        "Faculty recruitment and development",
        "Student academic services",
        "Accreditation and quality assurance"
      ],
      reportsTo: "President",
      directReports: ["Department Heads", "Registrar", "Library Director"]
    },
    {
      id: 'research',
      name: "Dr. Sarah Williams",
      title: "Dean of Research & Innovation",
      image: researchDeanImage,
      department: "Research Division",
      email: "s.williams@techinstitute.edu",
      phone: "+1 (555) 123-4002",
      responsibilities: [
        "Research strategy and funding",
        "Laboratory facilities management",
        "Industry partnerships",
        "Intellectual property management"
      ],
      reportsTo: "President",
      directReports: ["Research Center Directors", "Grants Office", "Tech Transfer"]
    },
    {
      id: 'admin',
      name: "Mr. James Thompson",
      title: "Dean of Administration & Finance",
      image: adminDeanImage,
      department: "Administrative Division",
      email: "j.thompson@techinstitute.edu",
      phone: "+1 (555) 123-4003",
      responsibilities: [
        "Financial management and budgeting",
        "Human resources",
        "Facilities and operations",
        "IT infrastructure"
      ],
      reportsTo: "President",
      directReports: ["Finance Director", "HR Director", "Operations Manager"]
    }
  ];

  return (
    <div className="executive-container">
      {/* Header Section */}
      <header className="executive-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">Executive Leadership</h1>
          <p className="header-subtitle">School of Integrated Innovative Technology</p>
          <p className="header-institution">Leadership and Governance Framework</p>
        </div>
      </header>

      {/* Executive Leadership Section */}
      <div className="executive-content">
        <div className="leadership-grid">
          {leadership.map((leader) => (
            <article key={leader.id} className="leader-card">
              <div className="card-header">
                <div className="leader-image-wrapper">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="leader-image"
                  />
                  <div className="position-badge">{leader.department}</div>
                </div>
              </div>
              
              <div className="card-body">
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-title">{leader.title}</p>
                
                <div className="card-divider"></div>
                
                <div className="contact-info">
                  <div className="info-item">
                    <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2.5 5.5L8 9l5.5-3.5M3 11h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <a href={`mailto:${leader.email}`} className="info-link">
                      {leader.email}
                    </a>
                  </div>
                  
                  <div className="info-item">
                    <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 11v2a1.5 1.5 0 0 1-1.5 1.5A12.5 12.5 0 0 1 2 4 1.5 1.5 0 0 1 3.5 2.5H6l1 3-1.5 1a9 9 0 0 0 5 5l1-1.5 3 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="info-text">{leader.phone}</span>
                  </div>
                </div>
                
                <div className="responsibilities-section">
                  <h4 className="section-label">Key Responsibilities</h4>
                  <div className="responsibilities-list">
                    {leader.responsibilities.map((resp, idx) => (
                      <div key={idx} className="responsibility-item">
                        <span className="responsibility-marker">•</span>
                        <span className="responsibility-text">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="reporting-section">
                  <div className="reporting-item">
                    <span className="reporting-label">Reports to:</span>
                    <span className="reporting-value">{leader.reportsTo}</span>
                  </div>
                  <div className="reporting-item">
                    <span className="reporting-label">Direct reports:</span>
                    <div className="direct-reports-list">
                      {leader.directReports.map((report, idx) => (
                        <span key={idx} className="report-tag">{report}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="executive-footer">
        <p>© 2024 School of Integrated Innovative Technology — KMITL</p>
      </footer>
    </div>
  );
};

export default Executive;