// src/components/STEMSection.js
import React from 'react';
import '../styles/components/stem.css';

const STEMSection = () => {
  const programs = [
    {
      title: "Science Innovation",
      description: "Cutting-edge research in physics, chemistry, and biological sciences",
      icon: "🔬"
    },
    {
      title: "Technology Engineering",
      description: "Advanced engineering programs focusing on emerging technologies",
      icon: "⚙️"
    },
    {
      title: "Mathematics & Analytics",
      description: "Data science, analytics, and mathematical modeling programs",
      icon: "📊"
    }
  ];

  return (
    <section id="stem" className="section stem-section">
      <div className="container">
        <div className="section-title">
          <h2>STEM Programs</h2>
          <p>Comprehensive education in Science, Technology, Engineering, and Mathematics</p>
        </div>
        <div className="stem-grid">
          {programs.map((program, index) => (
            <div key={index} className="stem-card card">
              <div className="stem-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default STEMSection;