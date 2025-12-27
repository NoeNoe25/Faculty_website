// src/components/STEMSection.js
import React from "react";
import "../styles/components/stem.css";
import { LuFlaskConical, LuCpu, LuChartBar, LuMicroscope } from "react-icons/lu";

const STEMSection = () => {
  const programs = [
 {
  title: "Research Groups",
  description:
    "Interdisciplinary research groups and centers conducting high-impact studies across science, engineering, and technology to address real-world challenges.",
  icon: LuFlaskConical,
},
{
  title: "Research Publications",
  description:
    "Peer-reviewed journals, conference papers, and scholarly publications showcasing innovative research and academic contributions at national and international levels.",
  icon: LuCpu,
},
{
  title: "Patents & International Awards",
  description:
    "Research-driven innovations leading to patents and international awards, reflecting excellence in applied research and technological advancement.",
  icon: LuChartBar,
},
{
  title: "MOUs/MOAs and Partnerships",
  description:
    "Strategic collaborations with universities, industries, and global partners through MOUs and MOAs to strengthen research, innovation, and student opportunities.",
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
            SITTec research addresses real-world challenges through projects ranging from advanced

materials to advanced manu-
facturing. Through international

collabolations ,

our faculty create innovations that make
 patent partners

a difference while students gain
hands-on experience preparing

them for future careers.

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
