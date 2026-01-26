// src/components/ProgramDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Programs.css";

const programData = {
  "BMT-101": {
    title: "Material Technology (B.Eng.)",
    duration: "4 Years",
    description:
      "This program focuses on the development, processing, and application of advanced materials...",
    highlights: [
      "Core engineering foundation",
      "Hands-on lab training",
      "Industry-based internships",
      "Focus on sustainable materials",
    ],
    courses: [
      "Materials Science Fundamentals",
      "Polymer & Composite Technology",
      "Metallurgy and Heat Treatment",
      "Nanomaterials & Advanced Manufacturing",
    ],
    careers: [
      "Materials Engineer",
      "Metallurgical Engineer",
      "Polymer Technologist",
      "R&D Specialist",
    ],
  },
  "MSC-201": {
    title: "Material Technology (M.Sc.)",
    duration: "2 Years",
    description:
      "The M.Sc. program emphasizes research, innovation, and advanced knowledge in material science...",
    highlights: ["Advanced research", "Specialized electives", "Thesis work"],
    courses: ["Advanced Materials Engineering", "Computational Modeling"],
    careers: ["Research Scientist", "University Lecturer", "Innovation Manager"],
  },
};

const ProgramDetail = () => {
  const { code } = useParams();
  const program = programData[code];

  if (!program) return <p>Program not found</p>;

  return (
    <section className="programs-section">
      <div className="program-header">
        <h3>{program.title}</h3>
        <span className="duration-badge">{program.duration}</span>
      </div>

      <p className="degree-description">{program.description}</p>

      <div className="degree-details">
        <div className="detail-section">
          <h5>Program Highlights</h5>
          <ul>
            {program.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h5>Key Courses</h5>
          <ul>
            {program.courses.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h5>Career Opportunities</h5>
          <div className="career-tags">
            {program.careers.map((career, i) => (
              <span key={i} className="career-tag">
                {career}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="degree-actions">
        <a href="#apply" className="btn btn-primary">
          Apply Now
        </a>
        <a href="#brochure" className="btn btn-outline">
          Download Brochure
        </a>
        <Link to="/" className="btn btn-secondary">
          Back to Programs
        </Link>
      </div>
    </section>
  );
};

export default ProgramDetail;
