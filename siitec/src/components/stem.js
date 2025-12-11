// src/components/STEMSection.js
import React from "react";
import "../styles/components/stem.css";
import { LuFlaskConical, LuCpu, LuChartBar, LuMicroscope } from "react-icons/lu";

const STEMSection = () => {
  const programs = [
    {
      title: "Research Excellence Centers",
      description:
        "Interdisciplinary centers driving high-impact research in science, engineering, and technology.",
      icon: LuFlaskConical,
    },
    {
      title: "Technology & Innovation Labs",
      description:
        "State-of-the-art laboratories supporting advanced experimentation, prototyping, and innovation.",
      icon: LuCpu,
    },
    {
      title: "Data & Computational Research",
      description:
        "Applied research in data science, AI, analytics, and computational modeling to solve real-world challenges.",
      icon: LuChartBar,
    },
    {
      title: "Scientific Discovery & Development",
      description:
        "Cutting-edge studies in emerging scientific fields, supporting breakthroughs and industry collaborations.",
      icon: LuMicroscope,
    },
  ];

  return (
    <section id="stem" className="section stem-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <span className="section-subtitle">
              Advancing Knowledge Through Research
            </span>
            <h2>Research Highlights</h2>
          </div>
          <p className="section-description">
            Explore diverse research initiatives led by expert faculty, supported by modern 
            facilities and interdisciplinary collaboration. Our research programs drive innovation, 
            scientific discovery, and solutions that shape the future of technology and society.
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
