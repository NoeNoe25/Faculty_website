import React from 'react';
import '../styles/nano.css';

const NANODepartmentPage = () => {
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
      icon: "🔬",
      name: "Research Laboratories",
      description: "State-of-the-art research facilities with cutting-edge equipment"
    },
    {
      icon: "💻",
      name: "Computer Labs",
      description: "Modern computing facilities with latest hardware and software"
    },
    {
      icon: "📚",
      name: "Departmental Library",
      description: "Specialized collection of journals, books, and digital resources"
    },
    {
      icon: "🎓",
      name: "Seminar Halls",
      description: "Well-equipped spaces for lectures, seminars, and conferences"
    }
  ];

  return (
    <div className="department-page">
      {/* Hero Section */}
      <section className="dept-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Department of Computer Science</h1>
            <p className="hero-subtitle">
              Pioneering innovation in technology and research since 1985
            </p>
            <button className="hero-cta-btn">Apply Now</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="dept-section">
        <div className="section-container">
          <h2 className="section-title">About Our Department</h2>
          <div className="about-content">
            <p>
              The Department of Computer Science is committed to excellence in education, 
              research, and innovation. Our world-class faculty members are dedicated to 
              advancing the frontiers of knowledge while providing exceptional learning 
              experiences to our students.
            </p>
            <p>
              We offer comprehensive programs at undergraduate, graduate, and doctoral levels, 
              preparing students for successful careers in academia, industry, and entrepreneurship. 
              Our research spans artificial intelligence, cybersecurity, data science, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="dept-section programs-section">
        <div className="section-container">
          <h2 className="section-title">Academic Programs</h2>
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
      <section className="dept-section">
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
      </section>

      {/* Facilities Section */}
      <section className="dept-section facilities-section">
        <div className="section-container">
          <h2 className="section-title">Our Facilities</h2>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <span className="facility-icon">{facility.icon}</span>
                <h3 className="facility-name">{facility.name}</h3>
                <p className="facility-description">{facility.description}</p>
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
              <p><strong>Address:</strong> Building A, Room 301, University Campus</p>
              <p><strong>Phone:</strong> +1 (555) 100-2000</p>
              <p><strong>Email:</strong> cs.dept@university.edu</p>
              <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NANODepartmentPage;