// src/components/DepartmentPage.js
import React from "react";
import "../styles/nano.css";
import { useContent } from "../i18n/LanguageContext";
import departmentContent from "../i18n/content/department";
import { Link } from "react-router-dom";

const FACILITY_IMAGES = [
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
];

const MANUDepartmentPage = () => {
  const c = useContent(departmentContent);
  const programs = c.programs;
  const facilities = c.facilities.map((facility, index) => ({
    ...facility,
    imageUrl: FACILITY_IMAGES[index],
  }));

  return (
    <div className="department-page page-department">
      {/* Hero Section */}
      <section className="nanodept-hero" style={{ height: "80vh" }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{c.titles.manu}</h1>
            <p className="hero-subtitle">{c.heroSubtitle}</p>
            <div className="hero-cta-buttons">
              <a
                href="https://admission.reg.kmitl.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn"
              >
                {c.applyNow}
              </a>
              <a
                href="http://www.cmit.kmitl.ac.th/program-undergrad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn"
              >
                {c.visitWebsite}
              </a>
            </div>
          </div>
        </div>
        <div className="dept_overlay">
          <div className="dept_tech-grid-overlay"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="dept-section">
        <div className="dept-section_section-container">
          <h2 className="dept-section_section-title">{c.aboutTitle}</h2>
          <div className="about-content">
            <p>{c.about[0]}</p>
            <p>{c.about[1]}</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="dept-section programs-section">
        <div className="dept-section_section-container">
          <h2 className="dept-section_section-title">{c.programsTitle}</h2>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <h3 className="program-degree">{program.degree}</h3>
                <span className="program-duration">{program.duration}</span>
                <p className="program-description">{program.description}</p>
                <Link to="/programs" className="program-btn">
                  {c.learnMore}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="dept-section facilities-section">
        <div className="dept-section_section-container">
          <h2 className="dept-section_section-title">{c.facilitiesTitle}</h2>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <img
                  src={facility.imageUrl}
                  alt={facility.name}
                  className="facility-image"
                />
                <div className="facility-card-grad" />
                <div className="facility-card-info">
                  <h3 className="facility-name">{facility.name}</h3>
                  <p className="facility-description">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="dept-section contact-section">
        <div className="section-container">
          <div className="contact-card">
            <h2 className="contact-title">{c.contactTitle}</h2>
            <div className="contact-info">
              <p>
                <strong>{c.contactLabels.address}</strong> {c.address}
              </p>
              <p>
                <strong>{c.contactLabels.phone}</strong> +1 (555) 100-NANO
              </p>
              <p>
                <strong>{c.contactLabels.email}</strong>{" "}
                nano.dept@university.edu
              </p>
              <p>
                <strong>{c.contactLabels.officeHours}</strong> {c.officeHours}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MANUDepartmentPage;
