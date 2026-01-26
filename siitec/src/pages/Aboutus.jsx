// src/components/AboutUs.js
import React from 'react';
import '../styles/Aboutus.css';

// Import images (you'll need to add these to your project)
import campusImage from '../assets/albums/KMITL 3.jpg';
import founderImage from '../assets/professor1.jpg';
import teamImage from '../assets/albums/KMITL.13.jpg';
import researchImage from '../assets/albums/KMITL.13.jpg';
import studentLifeImage from '../assets/albums/KMITL.13.jpg';
import innovationImage from '../assets/albums/KMITL.13.jpg';

const AboutUs = () => {
  // Leadership Team Data
  const leadershipTeam = [
    {
      name: "Dr. Evelyn Rodriguez",
      position: "Founder & Director",
      department: "Integrated Technology Systems",
      education: "Ph.D. in Advanced Technology Integration, MIT",
      expertise: ["Systems Engineering", "Technology Innovation", "Academic Leadership"],
      image: founderImage,
      quote: "Our mission is to bridge the gap between theoretical knowledge and practical technological innovation."
    },
    {
      name: "Prof. Michael Chen",
      position: "Dean of Academic Affairs",
      department: "Nanotechnology Engineering",
      education: "Ph.D. in Materials Science, Stanford University",
      expertise: ["Nanomaterials", "Research Methodology", "Curriculum Development"],
      image: teamImage,
      quote: "We empower students to become pioneers in emerging technology fields."
    },
    {
      name: "Dr. Sarah Williams",
      position: "Head of Research & Development",
      department: "STEM Education Research",
      education: "Ph.D. in Educational Technology, Harvard University",
      expertise: ["STEM Pedagogy", "Learning Technologies", "Research Innovation"],
      image: researchImage,
      quote: "Innovation in education is the cornerstone of technological advancement."
    }
  ];

  // Statistics Data
  const statistics = [
    { number: "2,500+", label: "Students Enrolled" },
    { number: "150+", label: "Faculty Members" },
    { number: "95%", label: "Graduation Rate" },
    { number: "88%", label: "Employment Rate" },
    { number: "50+", label: "Research Labs" },
    { number: "$10M+", label: "Research Funding" }
  ];

  // Timeline Data
  const timeline = [
    {
      year: "2010",
      title: "Foundation Established",
      description: "Institute founded with focus on integrated technology education"
    },
    {
      year: "2013",
      title: "First Accreditation",
      description: "Received ABET accreditation for engineering programs"
    },
    {
      year: "2016",
      title: "Research Center Launch",
      description: "Opened Advanced Technology Research Center"
    },
    {
      year: "2019",
      title: "International Recognition",
      description: "Ranked among top technology institutes globally"
    },
    {
      year: "2022",
      title: "Campus Expansion",
      description: "New innovation wing added with state-of-the-art facilities"
    },
    {
      year: "2024",
      title: "Future Ready Initiative",
      description: "Launched AI and emerging technology curriculum"
    }
  ];

  // Values Data
  const values = [
    {
      icon: "🔬",
      title: "Innovation",
      description: "Pushing boundaries in technology education and research"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Fostering partnerships between academia and industry"
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Addressing worldwide technological challenges"
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "Maintaining highest standards in education and research"
    },
    {
      icon: "💡",
      title: "Creativity",
      description: "Encouraging innovative thinking and problem-solving"
    },
    {
      icon: "📚",
      title: "Lifelong Learning",
      description: "Cultivating continuous growth and adaptation"
    }
  ];

  return (
    <section id="about" className="section about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Shaping the Future of Technology Education</h1>
            <p className="hero-subtitle">
              Pioneering integrated technology education since 2010, we bridge the gap between 
              theoretical knowledge and practical innovation to create the technology leaders of tomorrow.
            </p>
            <div className="hero-stats">
              {statistics.slice(0, 4).map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide transformative technology education that integrates cutting-edge research, 
                industry collaboration, and innovative teaching methodologies. We prepare students 
                to excel in rapidly evolving technological landscapes and drive meaningful change.
              </p>
            </div>
            
            <div className="vision-card">
              <div className="card-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be the global leader in integrated technology education, recognized for producing 
                visionary leaders who solve complex challenges through interdisciplinary innovation 
                and ethical technological advancement.
              </p>
            </div>
            
            <div className="values-card">
              <div className="card-icon">💎</div>
              <h3>Our Values</h3>
              <ul>
                <li>Innovation & Creativity</li>
                <li>Academic Excellence</li>
                <li>Collaborative Spirit</li>
                <li>Ethical Leadership</li>
                <li>Global Citizenship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>From foundation to future-ready technology education</p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-connector"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="leadership-section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>Meet the visionaries driving our technological education mission</p>
          </div>
          <div className="leadership-grid">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} />
                  <div className="leader-overlay">
                    <p>"{leader.quote}"</p>
                  </div>
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="leader-position">{leader.position}</p>
                  <p className="leader-department">{leader.department}</p>
                  <p className="leader-education">{leader.education}</p>
                  <div className="expertise-tags">
                    {leader.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide our educational philosophy</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus & Facilities */}
      <div className="campus-section">
        <div className="container">
          <div className="campus-content">
            <div className="campus-info">
              <h2>State-of-the-Art Campus</h2>
              <p>
                Our 50-acre campus features cutting-edge facilities designed to foster innovation 
                and collaboration. From advanced research laboratories to collaborative learning 
                spaces, we provide an environment where technology thrives.
              </p>
              <div className="facilities-list">
                <div className="facility-item">
                  <span className="facility-icon">🔬</span>
                  <span>Advanced Research Laboratories</span>
                </div>
                <div className="facility-item">
                  <span className="facility-icon">💻</span>
                  <span>High-Performance Computing Center</span>
                </div>
                <div className="facility-item">
                  <span className="facility-icon">🏢</span>
                  <span>Innovation & Incubation Hub</span>
                </div>
                <div className="facility-item">
                  <span className="facility-icon">📚</span>
                  <span>Digital Library Resources</span>
                </div>
              </div>
            </div>
            <div className="campus-image">
              <img src={campusImage} alt="Campus Facilities" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Innovative Community</h2>
            <p>
              Be part of an institution that's shaping the future of technology. Whether you're a 
              prospective student, researcher, or industry partner, there's a place for you in our 
              vibrant technological ecosystem.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Apply Now</button>
              <button className="btn btn-secondary">Schedule Visit</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;