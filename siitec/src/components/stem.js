// src/components/STEMSection.js
import React from "react";
import "../styles/components/stem.css";

const STEMSection = () => {
  const programs = [
    {
      title: "Science Innovation",
      description:
        "Cutting-edge research in physics, chemistry, and biological sciences",
      icon: "🔬",
    },
    {
      title: "Technology Engineering",
      description:
        "Advanced engineering programs focusing on emerging technologies",
      icon: "⚙️",
    },
    {
      title: "Mathematics & Analytics",
      description:
        "Data science, analytics, and mathematical modeling programs",
      icon: "📊",
    },
    {
      title: "Research & Development",
      description:
        "Innovation labs and applied research in emerging scientific fields",
      icon: "🔭",
    },
  ];

  return (
    <section id="stem" className="section stem-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <span className="section-subtitle">
              something something something
            </span>
            <h2>STEM Programs</h2>
          </div>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div className="stem-grid">
          {programs.map((program, index) => (
            <div key={index} className="stem-card card">
              <div className="stem-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <a href="#" className="stem-link">
                Read more +
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default STEMSection;
