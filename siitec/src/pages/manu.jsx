// src/components/DepartmentPage.js
import React, { useState } from 'react';
import '../styles/nano.css';

const MANUDepartmentPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const facultyMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Department Head & Professor",
      email: "s.johnson@university.edu",
      phone: "+1 (555) 123-4567",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Prof. Michael Chen",
      position: "Associate Professor",
      email: "m.chen@university.edu",
      phone: "+1 (555) 234-5678",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Assistant Professor",
      email: "e.rodriguez@university.edu",
      phone: "+1 (555) 345-6789",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  const programs = [
    {
      degree: "Bachelor of Science",
      duration: "4 Years",
      description: "Comprehensive undergraduate program covering fundamental and advanced topics"
    },
    {
      degree: "Master of Science",
      duration: "2 Years",
      description: "Advanced graduate program with research and specialization opportunities"
    },
    {
      degree: "Doctor of Philosophy",
      duration: "3-5 Years",
      description: "Research-focused doctoral program for academic and industry careers"
    }
  ];

  const facilities = [
    {
      name: "Research Laboratories",
      description: "State-of-the-art research facilities with cutting-edge equipment",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
    },
    
    {
      name: "Departmental Library",
      description: "Specialized collection of journals, books, and digital resources",
      imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop"
    },
    {
      name: "Seminar Halls",
      description: "Well-equipped spaces for lectures, seminars, and conferences",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      name: "Fabrication Lab",
      description: "Advanced nanofabrication and characterization equipment",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop"
    }
  ];



  const handleLike = (e, cardId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Liked:', cardId);
    // Add your like logic here
  };

  const handleBookmark = (e, cardId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Bookmarked:', cardId);
    // Add your bookmark logic here
  };

  return (
    <div className="department-page">
      {/* Hero Section */}
      <section className="nanodept-hero" style={{ height: '80vh' }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Department of Manufacturing System Technology (MANU)</h1>
            <p className="hero-subtitle">
              Pioneering innovation at the atomic scale since 2005
            </p>
           <div className="hero-cta-buttons">
            <a href="https://admission.reg.kmitl.ac.th/" target="_blank" rel="noopener noreferrer" className="hero-cta-btn">
                Apply Now
            </a>
            <a href="http://www.cmit.kmitl.ac.th/program-undergrad/" target="_blank" rel="noopener noreferrer" className="hero-cta-btn">
                Visit Website
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
          <h2 className="dept-section_section-title">About Our Department</h2>
          <div className="about-content">
            <p>
              The Department of Nanoscience and Nanotechnology is committed to excellence in education, 
              research, and innovation at the nanoscale. Our world-class faculty members are dedicated to 
              advancing the frontiers of knowledge while providing exceptional learning experiences to our students.
            </p>
            <p>
              We offer comprehensive programs at undergraduate, graduate, and doctoral levels, 
              preparing students for successful careers in academia, industry, and entrepreneurship. 
              Our research spans nanomaterials, quantum devices, biomedical applications, and energy systems.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="dept-section programs-section">
        <div className="dept-section_section-container">
          <h2 className="dept-section_section-title">Academic Programs</h2>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <h3 className="program-degree">{program.degree}</h3>
                <span className="program-duration">{program.duration}</span>
                <p className="program-description">{program.description}</p>
                <button className="program-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      {/* <section className="dept-section">
        <div className="section-container">
          <h2 className="section-title">Our Faculty</h2>
          <div className="faculty-grid">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-image-wrapper">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="faculty-image"
                  />
                </div>
                <div className="faculty-info">
                  <h3 className="faculty-name">{faculty.name}</h3>
                  <p className="faculty-position">{faculty.position}</p>
                  <div className="faculty-contact">
                    <p>📧 {faculty.email}</p>
                    <p>📞 {faculty.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Facilities Section */}
      <section className="dept-section facilities-section">
        <div className="dept-section_section-container">
          <h2 className="dept-section_section-title">Our Facilities</h2>
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
            <h2 className="contact-title">Get In Touch</h2>
            <div className="contact-info">
              <p><strong>Address:</strong> Nano Science Building, Room 301-310, University Campus</p>
              <p><strong>Phone:</strong> +1 (555) 100-NANO</p>
              <p><strong>Email:</strong> nano.dept@university.edu</p>
              <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MANUDepartmentPage;