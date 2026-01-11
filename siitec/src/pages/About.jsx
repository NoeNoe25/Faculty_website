import React from "react";
import "../styles/About.css";
import "../styles/components/ParallaxSection.css";
import deanImage from "../assets/professor1.jpg";
import bgimg from "../assets/albums/KMITL.16.jpg";
import { 
  LuGraduationCap, 
  LuMicroscope, 
  LuHandshake, 
  LuGlobe, 
  LuHeartHandshake, 
  LuRocket 
} from "react-icons/lu";

export default function SIITECAbout() {
  const statistics = [
    { number: "2,500+", label: "Students Enrolled" },
    { number: "150+", label: "Faculty Members" },
    { number: "95%", label: "Graduation Rate" },
    { number: "88%", label: "Employment Rate" },
  ];

  const features = [
    {
      icon: <LuHeartHandshake />,
      title: "Student Support",
      description:
        "Providing comprehensive mentorship, career guidance, and a supportive community to ensure every student reaches their full potential.",
    },
    {
      icon: <LuHandshake />,
      title: "Industry Partners", 
      description:
        "Collaborating with leading global tech companies to provide hands-on labs and real-world internship opportunities.",
    },
    {
      icon: <LuGraduationCap />, 
      title: "Academic Excellence", 
      description: 
        "Delivering pioneering programs in Technology and Science that combine theoretical depth with practical application.",
    },
    {
      icon: <LuMicroscope />,
      title: "Innovative Research", 
      description: 
        "Driving cutting-edge discoveries in Nanotechnology and next-gen manufacturing to solve global challenges.",
    },
    {
      icon: <LuGlobe />,
      title: "Global Vision",
      description: 
        "Cultivating a diverse, international learning environment that prepares students for leadership on the world stage.",
    },
    {
      icon: <LuRocket />,
      title: "Future Impact",
      description: 
        "Empowering graduates to become the innovators and leaders who will shape the future of technology and society.",
    },
  ];

  return (
    <div className="about-section">
      {/* Hero Section with Parallax Banner */}
      <section className="parallax-section">
        <div className="parallax-banner" style={{ height: '90vh' }}>
          {/* Single static background image */}
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
                About SIITEC
              </h1>
              <p className="parallax-subtitle">
                The Faculty of Integrated Innovative Technology (SIITEC) at KMITL is
                home to two pioneering programs, MediloT and AMI. With hands-on
                labs, cutting-edge research, and close industry ties, we equip
                students to lead in AI, robotics, and next-gen manufacturing.
              </p>
              
              {/* Stats Section */}
              <div className="about-hero-stats" style={{ marginTop: '40px' }}>
                {statistics.map((stat, index) => (
                  <div key={index} className="about-stat-item">
                    <span className="about-stat-number">{stat.number}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Innovation Section */}
        <div className="innovation-section">
          <div className="container">
            <div className="innovation-grid">
              <div className="section-title">
                <h2>Join our SIITech</h2>
                <button className="about-btn about-btn-primary">Apply Now</button>
              </div>
              <div className="innovation-right">
                <p>
                  SIIiTec is more than a faculty — it is an incubator for the next generation of innovators. 
                  We move beyond traditional education to create a hands-on ecosystem where students don't 
                  just learn about the future; they build it.
                </p>
              </div>
            </div>

            <div className="cards-grid">
              <div className="about-card about-card-story">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Team meeting"
                />
                <div className="about-card-overlay">
                  <h3>Our Story</h3>
                  <p>
                    Pioneering advanced manufacturing at KMITL, we cultivate world-class 
                    talent to drive the future of innovation.
                  </p>
                </div>
              </div>
              <div className="cards-right">
                <div className="about-card about-card-mission">
                  <h3>Our Mission</h3>
                  <p>
                    To provide a transformative, interdisciplinary education that
                    bridges technology, creativity, and real-world impact.
                  </p>
                </div>
                <div className="about-card about-card-vision">
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
            <div className="section-title">
              <h2>What Makes Us Unique</h2>
              <p>Equipping students to lead in a rapidly evolving global landscape.</p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="about-feature-card">
                  <div className="about-feature-icon">{feature.icon}</div>
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
            <div className="section-title">
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
    </div>
  );
}