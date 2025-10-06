import React from "react";
import "../styles/About.css";
import deanImage from "../assets/professor1.jpg";

export default function SIITECAbout() {
  const statistics = [
    { number: "2,500+", label: "Students Enrolled" },
    { number: "150+", label: "Faculty Members" },
    { number: "95%", label: "Graduation Rate" },
    { number: "88%", label: "Employment Rate" },
  ];

  const features = [
    {
      icon: "🎧",
      title: "Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Id enim sem, piam hendrerit nibh et quamlis. Laornis purus an ullis.",
    },
    {
      icon: "📊",
      title: "Sales",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Id enim sem, piam hendrerit nibh et quamlis. Laornis purus an ullis.",
    },
    {
      icon: "⚡",
      title: "Onboarding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Id enim sem, piam hendrerit nibh et quamlis. Laornis purus an ullis.",
    },
    {
      icon: "💼",
      title: "Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Id enim sem, piam hendrerit nibh et quamlis. Laornis purus an ullis.",
    },
    {
      icon: "✓",
      title: "Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Id enim sem, piam hendrerit nibh et quamlis. Laornis purus an ullis.",
    },
    {
      icon: "⏱",
      title: "Result",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Id enim sem, piam hendrerit nibh et quamlis. Laornis purus an ullis.",
    },
  ];

  return (
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>About SIITEC</h1>
          <p className="hero-subtitle">
            The Faculty of Integrated Innovative Technology (SIITEC) at KMITL is
            home to two pioneering programs, MediloT and AMI. With hands-on
            labs, cutting-edge research, and close industry ties, we equip
            students to lead in AI, robotics, and next-gen manufacturing.
          </p>
          <div className="hero-stats">
            {statistics.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Innovation Section */}
      <div className="innovation-section">
        <div className="container">
          <p className="label">Get started for free</p>
          <div className="innovation-grid">
            <div className="innovation-left">
              <h2>
                About SIITec
                <br />
                Innovation Starts Here
              </h2>
              <button className="btn btn-primary">Apply Now</button>
            </div>
            <div className="innovation-right">
              <p>
                The Faculty of Integrated Innovative Technology (SIITEC) at
                KMITL is home to two pioneering programs MediloT and AMI.
              </p>
            </div>
          </div>

          <div className="cards-grid">
            <div className="card card-story">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team meeting"
              />
              <div className="card-overlay">
                <h3>Our Story</h3>
                <p>
                  As a pioneer school in advanced manufacturing at KMITL, we are
                  at the forefront of cultivating talented and a growing legacy
                  of innovation. MIT continues to lead in influencing success,
                  higher education.
                </p>
              </div>
            </div>
            <div className="cards-right">
              <div className="card card-mission">
                <h3>Our Mission</h3>
                <p>
                  To provide a transformative, interdisciplinary education that
                  bridges technology, creativity, and real-world impact.
                </p>
              </div>
              <div className="card card-vision">
                <h3>Our Vision</h3>
                <p>
                  To be a leading faculty in integrated innovation, fostering
                  future engineers and innovators who drive sustainable global
                  progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Us Unique */}
      <div className="unique-section">
        <div className="container">
          <div className="section-header">
            <h2>What Makes Us Unique</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipis elit</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dean's Message */}
      <div className="dean-section">
        <div className="container">
          <div className="section-header">
            <h2>Dean's Message</h2>
          </div>
          <div className="dean-card">
            <div className="dean-quote">
              <div className="quote-mark">"</div>
              <h3>
                At SIITec, we believe the future belongs to those who innovate.
              </h3>
              <p>
                Our programs — MediloT and AMI — are designed to blend
                technology, creativity, and real-world experience. We're proud
                to nurture students who don't just keep up with change — they
                lead it.
              </p>
            </div>
            <div className="dean-profile">
              <img src={deanImage} alt="Dean" />
              <div className="dean-info">
                <h4>Abael Flores</h4>
                <p>School of Integrated Innovative Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
