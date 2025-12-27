// src/components/InstrumentBooking.js
import React, { useState } from 'react';
import '../styles/InstrumentBooking.css';
import { 
  FaMicroscope, 
  FaFlask, 
  FaCalendarAlt, 
  FaUserTie, 
  FaUserFriends, 
  FaUniversity, 
  FaClock, 
  FaCheckCircle, 
  FaFileAlt, 
  FaCalculator,
  FaSearch,
  FaDownload,
  FaArrowRight,
  FaExternalLinkAlt,
  FaCalendarCheck
} from 'react-icons/fa';

const InstrumentBooking = () => {
  const [activeTab, setActiveTab] = useState('general');

  // Mock data for available instruments
  const instruments = [
    {
      id: 1,
      name: "Scanning Electron Microscope",
      category: "Imaging",
      availability: "Available",
      location: "Lab A-101",
      hourlyRate: 1500,
      requiresTraining: true
    },
    {
      id: 2,
      name: "FTIR Spectrometer",
      category: "Spectroscopy",
      availability: "Available",
      location: "Lab B-205",
      hourlyRate: 800,
      requiresTraining: true
    },
    {
      id: 3,
      name: "X-ray Diffractometer",
      category: "Structural Analysis",
      availability: "Under Maintenance",
      location: "Lab C-310",
      hourlyRate: 2000,
      requiresTraining: true
    },
    {
      id: 4,
      name: "Atomic Force Microscope",
      category: "Imaging",
      availability: "Available",
      location: "Lab A-102",
      hourlyRate: 1200,
      requiresTraining: true
    },
    {
      id: 5,
      name: "TGA/DSC",
      category: "Thermal Analysis",
      availability: "Available",
      location: "Lab B-210",
      hourlyRate: 900,
      requiresTraining: false
    },
    {
      id: 6,
      name: "HPLC System",
      category: "Chromatography",
      availability: "Available",
      location: "Lab D-401",
      hourlyRate: 700,
      requiresTraining: true
    }
  ];

  // Booking steps
  const bookingSteps = [
    {
      step: 1,
      title: "Account Registration",
      description: "Create your user account in the booking system",
      icon: <FaUserFriends />
    },
    {
      step: 2,
      title: "Training Certification",
      description: "Complete required instrument training sessions",
      icon: <FaCheckCircle />
    },
    {
      step: 3,
      title: "Reservation Request",
      description: "Submit booking request with preferred time slots",
      icon: <FaCalendarAlt />
    },
    {
      step: 4,
      title: "Approval & Confirmation",
      description: "Wait for approval from facility manager",
      icon: <FaCheckCircle />
    },
    {
      step: 5,
      title: "Payment Processing",
      description: "Complete payment for external users",
      icon: <FaCalculator />
    },
    {
      step: 6,
      title: "Instrument Usage",
      description: "Access the instrument during scheduled time",
      icon: <FaMicroscope />
    }
  ];

  // User types information
  const userTypes = {
    general: {
      title: "General Users (Students & Researchers)",
      description: "Internal users including undergraduate/graduate students and researchers",
      requirements: [
        "Active KMITL student/staff ID",
        "Completed instrument-specific training",
        "Faculty advisor approval for students",
        "Project description and objectives"
      ],
      bookingProcess: [
        "Login with KMITL credentials",
        "Check instrument availability calendar",
        "Submit booking request",
        "Receive approval from lab manager",
        "Use instrument during scheduled time"
      ],
      benefits: [
        "Subsidized rates for academic research",
        "Priority booking during academic terms",
        "Technical support available",
        "Training sessions provided"
      ],
      contact: "instrument-lab@kmitl.ac.th"
    },
    staff: {
      title: "Faculty & Staff Members",
      description: "KMITL faculty, researchers, and administrative staff",
      requirements: [
        "Active faculty/staff ID",
        "Research project registration",
        "Safety certification",
        "Department approval"
      ],
      bookingProcess: [
        "Access through ATTAC system",
        "Priority booking privileges",
        "Direct calendar access",
        "Multiple instrument bookings allowed",
        "Research group management"
      ],
      benefits: [
        "Priority access to instruments",
        "Extended booking durations",
        "Research group management",
        "Budget account linking",
        "Technical consultation"
      ],
      contact: "facility-manager@kmitl.ac.th"
    },
    external: {
      title: "External Users (Industry & Collaborators)",
      description: "Industry partners, external researchers, and academic collaborators",
      requirements: [
        "Company/organization credentials",
        "NDA agreement for proprietary work",
        "Project proposal submission",
        "Payment method setup"
      ],
      bookingProcess: [
        "Register as external user",
        "Submit project proposal",
        "Receive quotation and approval",
        "Complete payment",
        "Schedule instrument time"
      ],
      benefits: [
        "Access to advanced instrumentation",
        "Technical consultation services",
        "Confidentiality agreements",
        "Flexible scheduling options",
        "Detailed analysis reports"
      ],
      contact: "external-services@kmitl.ac.th"
    }
  };

  return (
    <div className="instrument-booking-page">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="container">
          <div className="booking-hero-content">
            <h1 className="booking-hero-title">
              <FaMicroscope className="booking-hero-icon" />
              Instrument Booking Service
            </h1>
            <p className="booking-hero-subtitle">
              Access state-of-the-art research instrumentation at Faculty of Integrated Innovative Technology
            </p>
            <div className="booking-hero-stats">
              <div className="booking-stat-item">
                <FaFlask className="booking-stat-icon" />
                <span className="stat-number">25+</span>
                <span className="stat-label">Instruments</span>
              </div>
              <div className="booking-stat-item">
                <FaUserFriends className="booking-stat-icon" />
                <span className="booking-stat-number">500+</span>
                <span className="booking-stat-label">Active Users</span>
              </div>
              <div className="booking-stat-item">
                <FaCalendarAlt className="booking-stat-icon" />
                <span className="booking-stat-number">98%</span>
                <span className="booking-stat-label">Uptime</span>
              </div>
              <div className="booking-stat-item">
                <FaUniversity className="booking-stat-icon" />
                <span className="booking-stat-number">24/7</span>
                <span className="booking-stat-label">Access*</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Type Navigation */}
      <section className="user-type-section">
        <div className="container">
          <div className="section-header">
            <h2>Select Your User Type</h2>
            <p>Choose your category to view specific instructions and requirements</p>
          </div>
          
          <div className="user-type-tabs">
            <button 
              className={`user-tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              <FaUserFriends className="tab-icon" />
              <span>General Users</span>
              <p>Students & Researchers</p>
            </button>
            
            <button 
              className={`user-tab ${activeTab === 'staff' ? 'active' : ''}`}
              onClick={() => setActiveTab('staff')}
            >
              <FaUserTie className="tab-icon" />
              <span>Faculty & Staff</span>
              <p>ATTAC System Access</p>
            </button>
            
            <button 
              className={`user-tab ${activeTab === 'external' ? 'active' : ''}`}
              onClick={() => setActiveTab('external')}
            >
              <FaUniversity className="tab-icon" />
              <span>External Users</span>
              <p>Industry & Collaborators</p>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="booking-content">
          {/* Left Column - User Type Details */}
          <div className="user-details-section">
            <div className="user-type-header">
              <h3>{userTypes[activeTab].title}</h3>
              <p className="user-description">{userTypes[activeTab].description}</p>
            </div>

            <div className="instruments-info-grid">
              <div className="instruments-info-card">
                <h4><FaFileAlt className="card-icon" /> Requirements</h4>
                <ul className="requirement-list">
                  {userTypes[activeTab].requirements.map((req, index) => (
                    <li key={index}>
                      <FaCheckCircle className="check-icon" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-card">
                <h4><FaCalendarAlt className="card-icon" /> Booking Process</h4>
                <ol className="process-list">
                  {userTypes[activeTab].bookingProcess.map((step, index) => (
                    <li key={index}>
                      <span className="step-number">{index + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="info-card">
                <h4><FaCheckCircle className="card-icon" /> Benefits</h4>
                <ul className="benefits-list">
                  {userTypes[activeTab].benefits.map((benefit, index) => (
                    <li key={index}>
                      <FaArrowRight className="arrow-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-card contact-card">
                <h4><FaExternalLinkAlt className="card-icon" /> Quick Access</h4>
                <div className="contact-info">
                  <p className="contact-email">
                    <strong>Email:</strong> {userTypes[activeTab].contact}
                  </p>
                  <div className="quick-links">
                    {activeTab === 'staff' && (
                      <a 
                        href="https://attac.kmitl.ac.th" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaExternalLinkAlt /> Access ATTAC System
                      </a>
                    )}
                    {activeTab === 'general' && (
                      <a 
                        href="https://booking.kmitl.ac.th" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaCalendarCheck /> Book Instrument
                      </a>
                    )}
                    {activeTab === 'external' && (
                      <a 
                        href="https://services.kmitl.ac.th" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaExternalLinkAlt /> External Services Portal
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Available Instruments & Resources */}
          <div className="sidebar-section">
            {/* Available Instruments */}
            <div className="sidebar-card">
              <h4><FaSearch className="sidebar-icon" /> Available Instruments</h4>
              <div className="instrument-list">
                {instruments.map(instrument => (
                  <div 
                    key={instrument.id} 
                    className={`instrument-item ${instrument.availability !== 'Available' ? 'unavailable' : ''}`}
                  >
                    <div className="instrument-info">
                      <h5>{instrument.name}</h5>
                      <div className="instrument-details">
                        <span className="category">{instrument.category}</span>
                        <span className={`availability ${instrument.availability}`}>
                          {instrument.availability}
                        </span>
                      </div>
                      <div className="instrument-meta">
                        <span className="location">{instrument.location}</span>
                        <span className="rate">฿{instrument.hourlyRate}/hr</span>
                      </div>
                    </div>
                    {instrument.requiresTraining && (
                      <span className="training-badge">Training Required</span>
                    )}
                  </div>
                ))}
              </div>
              <a href="/instruments" className="view-all-link">
                View All Instruments <FaArrowRight />
              </a>
            </div>

            {/* Booking Steps */}
            <div className="sidebar-card">
              <h4><FaCalendarAlt className="sidebar-icon" /> Booking Steps</h4>
              <div className="booking-steps">
                {bookingSteps.map(step => (
                  <div key={step.step} className="step-item">
                    <div className="step-number-circle">
                      {step.icon}
                    </div>
                    <div className="step-content">
                      <h6>Step {step.step}: {step.title}</h6>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Resources */}
            <div className="sidebar-card">
              <h4><FaDownload className="sidebar-icon" /> Quick Resources</h4>
              <div className="resources-list">
                <a href="/forms/user-agreement.pdf" className="resource-link">
                  <FaFileAlt /> User Agreement Form
                </a>
                <a href="/forms/safety-guidelines.pdf" className="resource-link">
                  <FaFileAlt /> Safety Guidelines
                </a>
                <a href="/forms/training-schedule.pdf" className="resource-link">
                  <FaFileAlt /> Training Schedule
                </a>
                <a href="/forms/price-list.pdf" className="resource-link">
                  <FaFileAlt /> Price List 2025
                </a>
                {activeTab === 'external' && (
                  <a href="/forms/nda-template.pdf" className="resource-link">
                    <FaFileAlt /> NDA Template
                  </a>
                )}
              </div>
            </div>

            {/* System Status */}
            <div className="sidebar-card status-card">
              <h4><FaClock className="sidebar-icon" /> System Status</h4>
              <div className="status-indicator">
                <div className="status online">
                  <div className="status-dot"></div>
                  <span>Booking System: Online</span>
                </div>
                <div className="status online">
                  <div className="status-dot"></div>
                  <span>Payment Gateway: Online</span>
                </div>
                <div className="status maintenance">
                  <div className="status-dot"></div>
                  <span>Support System: Maintenance</span>
                </div>
              </div>
              <p className="status-note">
                Last updated: Today, 10:30 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Instrument?</h2>
            <p>Start your research journey with our advanced instrumentation facilities</p>
            <div className="cta-buttons">
              {activeTab === 'staff' ? (
                <a 
                  href="https://attac.kmitl.ac.th" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  <FaExternalLinkAlt /> Access ATTAC Portal
                </a>
              ) : (
                <a 
                  href="https://booking.kmitl.ac.th" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  <FaCalendarCheck /> Start Booking Now
                </a>
              )}
              <a href="/contact" className="btn btn-secondary btn-large">
                Contact Facility Manager
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstrumentBooking;