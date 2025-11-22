// src/components/STEMSection.js
import React from "react";
import "../styles/components/stem.css";
import { LuFlaskConical, LuCpu, LuChartBar, LuMicroscope } from "react-icons/lu";


const STEMSection = () => {
  const programs = [
  {
    title: "Science Innovation",
    description:
      "Cutting-edge research in physics, chemistry, and biological sciences",
    icon: LuFlaskConical,
  },
  {
    title: "Technology Engineering",
    description:
      "Advanced engineering programs focusing on emerging technologies",
    icon: LuCpu,
  },
  {
    title: "Mathematics & Analytics",
    description:
      "Data science, analytics, and mathematical modeling programs",
    icon: LuChartBar,
  },
  {
    title: "Research & Development",
    description:
      "Innovation labs and applied research in emerging scientific fields",
    icon: LuMicroscope,
  },
];

  

  return (
    <section id="stem" className="section stem-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <span className="section-subtitle">
              Advancing Knowledge in Science & Technology
            </span>
            <h2>STEM Programs</h2>
          </div>
          <p className="section-description">
            Explore diverse STEM fields supported by expert faculty, modern facilities, 
            and research-driven learning. Our programs help students grow their knowledge, 
            creativity, and technical skills for future careers.
          </p>
        </div>
        <div className="stem-grid">
          {programs.map((program, index) => (
            <div key={index} className="stem-card card">
              <div className="stem-icon">
                <program.icon size={40} className="text-blue-600" />
              </div>
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
