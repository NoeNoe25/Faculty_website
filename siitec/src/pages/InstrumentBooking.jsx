// src/components/InstrumentBooking.js
import React, { useState } from 'react';
import '../styles/InstrumentBooking.css';
import '../styles/components/ParallaxSection.css';
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
import bgimg from "../assets/albums/instruments.webp";

import { usePhrases } from "../i18n/LanguageContext";
import phrases from "../i18n/content/instrumentBooking";
const InstrumentBooking = () => {
  const tx = usePhrases(phrases);
  const [activeTab, setActiveTab] = useState('general');

  // Mock data for available instruments
  const instruments = [
    {
      id: 1,
      name: tx("Scanning Electron Microscope"),
      category: tx("Imaging"),
      availability: "Available",
      location: "Lab A-101",
      hourlyRate: 1500,
      requiresTraining: true
    },
    {
      id: 2,
      name: tx("FTIR Spectrometer"),
      category: tx("Spectroscopy"),
      availability: "Available",
      location: "Lab B-205",
      hourlyRate: 800,
      requiresTraining: true
    },
    {
      id: 3,
      name: tx("X-ray Diffractometer"),
      category: tx("Structural Analysis"),
      availability: "Under Maintenance",
      location: "Lab C-310",
      hourlyRate: 2000,
      requiresTraining: true
    },
    {
      id: 4,
      name: tx("Atomic Force Microscope"),
      category: tx("Imaging"),
      availability: "Available",
      location: "Lab A-102",
      hourlyRate: 1200,
      requiresTraining: true
    },
    {
      id: 5,
      name: tx("TGA/DSC"),
      category: tx("Thermal Analysis"),
      availability: "Available",
      location: "Lab B-210",
      hourlyRate: 900,
      requiresTraining: false
    },
    {
      id: 6,
      name: tx("HPLC System"),
      category: tx("Chromatography"),
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
      title: tx("Account Registration"),
      description: tx("Create your user account in the booking system"),
      icon: <FaUserFriends />
    },
    {
      step: 2,
      title: tx("Training Certification"),
      description: tx("Complete required instrument training sessions"),
      icon: <FaCheckCircle />
    },
    {
      step: 3,
      title: tx("Reservation Request"),
      description: tx("Submit booking request with preferred time slots"),
      icon: <FaCalendarAlt />
    },
    {
      step: 4,
      title: tx("Approval & Confirmation"),
      description: tx("Wait for approval from facility manager"),
      icon: <FaCheckCircle />
    },
    {
      step: 5,
      title: tx("Payment Processing"),
      description: tx("Complete payment for external users"),
      icon: <FaCalculator />
    },
    {
      step: 6,
      title: tx("Instrument Usage"),
      description: tx("Access the instrument during scheduled time"),
      icon: <FaMicroscope />
    }
  ];

  // User types information
  const userTypes = {
    general: {
      title: tx("General Users (Students & Researchers)"),
      description: tx("Internal users including undergraduate/graduate students and researchers"),
      requirements: [
        tx("Active KMITL student/staff ID"),
        tx("Completed instrument-specific training"),
        tx("Faculty advisor approval for students"),
        tx("Project description and objectives")
      ],
      bookingProcess: [
        tx("Login with KMITL credentials"),
        tx("Check instrument availability calendar"),
        tx("Submit booking request"),
        tx("Receive approval from lab manager"),
        tx("Use instrument during scheduled time")
      ],
      benefits: [
        tx("Subsidized rates for academic research"),
        tx("Priority booking during academic terms"),
        tx("Technical support available"),
        tx("Training sessions provided")
      ],
      contact: "instrument-lab@kmitl.ac.th"
    },
    staff: {
      title: tx("Faculty & Staff Members"),
      description: tx("KMITL faculty, researchers, and administrative staff"),
      requirements: [
        tx("Active faculty/staff ID"),
        tx("Research project registration"),
        tx("Safety certification"),
        tx("Department approval")
      ],
      bookingProcess: [
        tx("Access through ATTAC system"),
        tx("Priority booking privileges"),
        tx("Direct calendar access"),
        tx("Multiple instrument bookings allowed"),
        tx("Research group management")
      ],
      benefits: [
        tx("Priority access to instruments"),
        tx("Extended booking durations"),
        tx("Research group management"),
        tx("Budget account linking"),
        tx("Technical consultation")
      ],
      contact: "facility-manager@kmitl.ac.th"
    },
    external: {
      title: tx("External Users (Industry & Collaborators)"),
      description: tx("Industry partners, external researchers, and academic collaborators"),
      requirements: [
        tx("Company/organization credentials"),
        tx("NDA agreement for proprietary work"),
        tx("Project proposal submission"),
        tx("Payment method setup")
      ],
      bookingProcess: [
        tx("Register as external user"),
        tx("Submit project proposal"),
        tx("Receive quotation and approval"),
        tx("Complete payment"),
        tx("Schedule instrument time")
      ],
      benefits: [
        tx("Access to advanced instrumentation"),
        tx("Technical consultation services"),
        tx("Confidentiality agreements"),
        tx("Flexible scheduling options"),
        tx("Detailed analysis reports")
      ],
      contact: "external-services@kmitl.ac.th"
    }
  };

  return (
    <div className="instrument-booking-page page-instrument-booking">
      {/* Hero Section with Parallax Background */}
      <section className="parallax-section">
        <div className="parallax-banner" style={{ height: '90vh' }}>
          {/* Single static background image (no slideshow) */}
          <div 
            className="parallax-background active"
            style={{ backgroundImage: `url(${bgimg})` }}
          ></div>
          
          <div className="overlay">
            <div className="tech-grid-overlay"></div>
          </div>
          
          <div className="content-container">
            <div className="parallax-content">
              <h1 className="parallax-main-title" style={{ color: '#fff' }}>
                {tx("Instrument Booking Service")}
              </h1>
              <p className="parallax-subtitle">
                {tx("Access state-of-the-art research instrumentation at Faculty of Integrated Innovative Technology")}
              </p>
              
              {/* Stats Section */}
              <div className="booking-hero-stats" style={{ marginTop: '40px' }}>
                <div className="booking-stat-item">
                  <FaFlask className="booking-stat-icon" />
                  <span className="booking-stat-number">25+</span>
                  <span className="booking-stat-label">{tx("Instruments")}</span>
                </div>
                <div className="booking-stat-item">
                  <FaUserFriends className="booking-stat-icon" />
                  <span className="booking-stat-number">500+</span>
                  <span className="booking-stat-label">{tx("Active Users")}</span>
                </div>
                <div className="booking-stat-item">
                  <FaCalendarAlt className="booking-stat-icon" />
                  <span className="booking-stat-number">98%</span>
                  <span className="booking-stat-label">{tx("Uptime")}</span>
                </div>
                <div className="booking-stat-item">
                  <FaUniversity className="booking-stat-icon" />
                  <span className="booking-stat-number">24/7</span>
                  <span className="booking-stat-label">{tx("Access*")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Type Navigation */}
      <section className="user-type-section">
        <div className="container">
          <div className="section-header">
            <h2>{tx("Select Your User Type")}</h2>
            <p>{tx("Choose your category to view specific instructions and requirements")}</p>
          </div>
          
          <div className="user-type-tabs">
            <button 
              className={`user-tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              <FaUserFriends className="tab-icon" />
              <span>{tx("General Users")}</span>
              <p>{tx("Students & Researchers")}</p>
            </button>
            
            <button 
              className={`user-tab ${activeTab === 'staff' ? 'active' : ''}`}
              onClick={() => setActiveTab('staff')}
            >
              <FaUserTie className="tab-icon" />
              <span>{tx("Faculty & Staff")}</span>
              <p>{tx("ATTAC System Access")}</p>
            </button>
            
            <button 
              className={`user-tab ${activeTab === 'external' ? 'active' : ''}`}
              onClick={() => setActiveTab('external')}
            >
              <FaUniversity className="tab-icon" />
              <span>{tx("External Users")}</span>
              <p>{tx("Industry & Collaborators")}</p>
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
                <h4><FaFileAlt className="card-icon" /> {tx("Requirements")}</h4>
                <ul className="requirement-list">
                  {userTypes[activeTab].requirements.map((req, index) => (
                    <li key={index}>
                      <FaCheckCircle className="check-icon" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="instruments-info-card">
                <h4><FaCalendarAlt className="card-icon" /> {tx("Booking Process")}</h4>
                <ol className="process-list">
                  {userTypes[activeTab].bookingProcess.map((step, index) => (
                    <li key={index}>
                      <span className="step-number">{index + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="instruments-info-card">
                <h4><FaCheckCircle className="card-icon" /> {tx("Benefits")}</h4>
                <ul className="benefits-list">
                  {userTypes[activeTab].benefits.map((benefit, index) => (
                    <li key={index}>
                      <FaArrowRight className="arrow-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="instruments-info-card contact-card">
                <h4><FaExternalLinkAlt className="card-icon" /> {tx("Quick Access")}</h4>
                <div className="contact-info">
                  <p className="contact-email">
                    <strong>{tx("Email:")}</strong> {userTypes[activeTab].contact}
                  </p>
                  <div className="quick-links">
                    {activeTab === 'staff' && (
                      <a 
                        href="https://attac.kmitl.ac.th" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaExternalLinkAlt /> {tx("Access ATTAC System")}
                      </a>
                    )}
                    {activeTab === 'general' && (
                      <a 
                        href="https://booking.kmitl.ac.th" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaCalendarCheck /> {tx("Book Instrument")}
                      </a>
                    )}
                    {activeTab === 'external' && (
                      <a 
                        href="https://services.kmitl.ac.th" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaExternalLinkAlt /> {tx("External Services Portal")}
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
              <h4><FaSearch className="sidebar-icon" /> {tx("Available Instruments")}</h4>
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
                        <span className={`availability ${instrument.availability.replace(' ', '-')}`}>
                          {tx(instrument.availability)}
                        </span>
                      </div>
                      <div className="instrument-meta">
                        <span className="location">{instrument.location}</span>
                        <span className="rate">฿{instrument.hourlyRate}{tx("/hr")}</span>
                      </div>
                    </div>
                    {instrument.requiresTraining && (
                      <span className="training-badge">{tx("Training Required")}</span>
                    )}
                  </div>
                ))}
              </div>
              <a href="/instruments" className="view-all-link">
                {tx("View All Instruments")} <FaArrowRight />
              </a>
            </div>

            {/* Booking Steps */}
            <div className="sidebar-card">
              <h4><FaCalendarAlt className="sidebar-icon" /> {tx("Booking Steps")}</h4>
              <div className="booking-steps">
                {bookingSteps.map(step => (
                  <div key={step.step} className="step-item">
                    <div className="step-number-circle">
                      {step.icon}
                    </div>
                    <div className="step-content">
                      <h6>{tx("Step")} {step.step}: {step.title}</h6>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Resources */}
            <div className="sidebar-card">
              <h4><FaDownload className="sidebar-icon" /> {tx("Quick Resources")}</h4>
              <div className="resources-list">
                <a href="/forms/user-agreement.pdf" className="resource-link">
                  <FaFileAlt /> {tx("User Agreement Form")}
                </a>
                <a href="/forms/safety-guidelines.pdf" className="resource-link">
                  <FaFileAlt /> {tx("Safety Guidelines")}
                </a>
                <a href="/forms/training-schedule.pdf" className="resource-link">
                  <FaFileAlt /> {tx("Training Schedule")}
                </a>
                <a href="/forms/price-list.pdf" className="resource-link">
                  <FaFileAlt /> {tx("Price List 2025")}
                </a>
                {activeTab === 'external' && (
                  <a href="/forms/nda-template.pdf" className="resource-link">
                    <FaFileAlt /> {tx("NDA Template")}
                  </a>
                )}
              </div>
            </div>

            {/* System Status */}
            <div className="sidebar-card status-card">
              <h4><FaClock className="sidebar-icon" /> {tx("System Status")}</h4>
              <div className="status-indicator">
                <div className="status online">
                  <div className="status-dot"></div>
                  <span>{tx("Booking System: Online")}</span>
                </div>
                <div className="status online">
                  <div className="status-dot"></div>
                  <span>{tx("Payment Gateway: Online")}</span>
                </div>
                <div className="status maintenance">
                  <div className="status-dot"></div>
                  <span>{tx("Support System: Maintenance")}</span>
                </div>
              </div>
              <p className="status-note">
                {tx("Last updated: Today, 10:30 AM")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{tx("Ready to Book Your Instrument?")}</h2>
            <p>{tx("Start your research journey with our advanced instrumentation facilities")}</p>
            <div className="cta-buttons">
              {activeTab === 'staff' ? (
                <a 
                  href="https://attac.kmitl.ac.th" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  <FaExternalLinkAlt /> {tx("Access ATTAC Portal")}
                </a>
              ) : (
                <a 
                  href="https://booking.kmitl.ac.th" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  <FaCalendarCheck /> {tx("Start Booking Now")}
                </a>
              )}
              <a href="/contact" className="btn btn-secondary btn-large">
                {tx("Contact Facility Manager")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstrumentBooking;