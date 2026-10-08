// src/components/STEMSection.js
import React from "react";
import "../styles/components/stem.css";
import { LuFlaskConical, LuCpu, LuChartBar, LuMicroscope } from "react-icons/lu";
import { useContent } from "../i18n/LanguageContext";
import homeContent from "../i18n/content/home";

const ICONS = [LuFlaskConical, LuCpu, LuChartBar, LuMicroscope];

const STEMSection = () => {
  const { research } = useContent(homeContent);
  const programs = research.items.map((item, index) => ({ ...item, icon: ICONS[index] }));

  return (
    <section id="stem" className="section stem-section home-stem">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <span className="section-subtitle">{research.subtitle}</span>
            <h2>{research.title}</h2>
          </div>
          <p className="section-description">{research.description}</p>
        </div>

        <div className="stem-grid">
          {programs.map((program, index) => (
            <div key={index} className="stem-card card">
              <div className="stem-icon">
                <program.icon size={40} className="text-blue-600" />
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              {/* <a href="#" className="stem-link">
                Read more +
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default STEMSection;
