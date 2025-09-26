// src/components/Programs.js
import React, { useState } from 'react';
import '../styles/Programs.css';
import image1 from "../assets/photo1.jpg";

const Programs = () => {
  const [activeDegree, setActiveDegree] = useState('bachelor');

  const programsData = {
    bachelor: {
      title: "Bachelor of Science Programs",
      duration: "4 Years",
      degrees: [
        {
          name: "B.Sc. in Integrated Technology Systems",
          code: "ITS-BSC",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.Comprehensive foundation in technology integration across multiple disciplines",
          courses: ["Systems Engineering", "Data Analytics", "Technology Management", "Innovation Design"],
          careerPaths: ["Technology Analyst", "Systems Integrator", "Project Coordinator"],
          requirements: ["High School Diploma", "Math & Science prerequisites"],
          image: "/images/bachelor-its.jpg"
        },
        {
          name: "B.Sc. in Nanotechnology Engineering",
          code: "NTE-BSC",
          description: "Focus on nanoscale materials, devices, and applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.",
          courses: ["Nanomaterials Science", "Quantum Mechanics", "Microfabrication", "Nano-characterization"],
          careerPaths: ["Nano-technician", "Research Assistant", "Quality Control Specialist"],
          requirements: ["High School Diploma", "Chemistry & Physics prerequisites"],
          image: image1
        },
        {
          name: "B.Sc. in STEM Education",
          code: "STEM-BSC",
          description: "Prepare for teaching and educational leadership in STEM fields",
          courses: ["Educational Technology", "Curriculum Design", "STEM Pedagogy", "Classroom Innovation"],
          careerPaths: ["STEM Teacher", "Educational Coordinator", "Curriculum Developer"],
          requirements: ["High School Diploma", "Teaching aptitude assessment"],
          image: image1
        }
      ]
    },
    master: {
      title: "Master of Science Programs",
      duration: "2 Years",
      degrees: [
        {
          name: "M.Sc. in Advanced Technology Integration",
          code: "ATI-MSC",
          description: "Advanced study in integrating emerging technologies across industries",
          courses: ["Advanced Systems Design", "Technology Strategy", "Innovation Management", "Research Methods"],
          careerPaths: ["Technology Manager", "Innovation Consultant", "R&D Lead"],
          requirements: ["Bachelor's degree in related field", "3.0 GPA minimum", "Research proposal"],
          image: image1
        },
        {
          name: "M.Sc. in Nanoscience and Molecular Engineering",
          code: "NME-MSC",
          description: "Specialized research in molecular-scale engineering and applications",
          courses: ["Advanced Nanomaterials", "Molecular Dynamics", "Nanofabrication Techniques", "Thesis Research"],
          careerPaths: ["Research Scientist", "Process Engineer", "Materials Specialist"],
          requirements: ["Bachelor's in Engineering or Science", "3.2 GPA minimum", "Lab experience"],
          image: image1
        },
        {
          name: "M.Sc. in STEM Leadership",
          code: "STEM-MSC",
          description: "Leadership and management in STEM education and innovation",
          courses: ["STEM Policy", "Leadership Theory", "Program Evaluation", "Capstone Project"],
          careerPaths: ["STEM Director", "Education Administrator", "Policy Advisor"],
          requirements: ["Bachelor's degree", "2 years relevant experience", "Leadership statement"],
          image: image1
        }
      ]
    },
    doctoral: {
      title: "Doctoral Programs",
      duration: "4-5 Years",
      degrees: [
        {
          name: "Ph.D. in Integrated Innovative Technology",
          code: "IIT-PHD",
          description: "Pioneering research at the intersection of multiple technology disciplines Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.",
          courses: ["Advanced Research Methods", "Interdisciplinary Theory", "Dissertation Research", "Academic Writing"],
          careerPaths: ["University Professor", "Chief Technology Officer", "Research Director"],
          requirements: ["Master's degree", "3.5 GPA minimum", "Research publications", "Faculty interview"],
          image: image1
        },
        {
          name: "Ph.D. in Nanotechnology and Materials Science",
          code: "NMS-PHD",
          description: "Cutting-edge research in nanomaterials and their applications",
          courses: ["Advanced Characterization", "Theoretical Modeling", "Grant Writing", "Laboratory Management"],
          careerPaths: ["Research Scientist", "Materials Engineer", "Academic Researcher"],
          requirements: ["Master's in related field", "Strong research background", "Publication record"],
          image: image1
        },
        {
          name: "Ph.D. in STEM Education Research",
          code: "SER-PHD",
          description: "Research-focused program advancing STEM education methodologies",
          courses: ["Qualitative Research", "Statistical Analysis", "Educational Theory", "Dissertation Development"],
          careerPaths: ["Education Researcher", "University Professor", "Policy Analyst"],
          requirements: ["Master's degree", "Teaching experience", "Research proposal"],
          image: image1
        }
      ]
    }
  };

  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        <div className="section-title">
          <h2>Academic Programs</h2>
          <p>Choose your path in integrated innovative technology education</p>
        </div>

        {/* Degree Level Selector */}
        <div className="degree-selector">
          {['bachelor', 'master', 'doctoral'].map(degree => (
            <button
              key={degree}
              className={`degree-tab ${activeDegree === degree ? 'active' : ''}`}
              onClick={() => setActiveDegree(degree)}
            >
              <span className="degree-icon">
                {degree === 'bachelor' ? '🎓' : degree === 'master' ? '📚' : '🔬'}
              </span>
              <span className="degree-text">
                {degree === 'bachelor' ? 'Bachelor' : degree === 'master' ? 'Master' : 'Doctoral'}
              </span>
            </button>
          ))}
        </div>

        {/* Program Content */}
        <div className="programs-content">
          <div className="program-header">
            <h3>{programsData[activeDegree].title}</h3>
            <div className="program-duration">
              <span className="duration-badge">Duration: {programsData[activeDegree].duration}</span>
            </div>
          </div>

          <div className="degrees-grid">
            {programsData[activeDegree].degrees.map((degree, index) => (
              <div key={index} className="degree-card card">
                <div className="degree-image-wrapper">
                  <img src={degree.image} alt={degree.name} className="degree-image" />
                </div>
                <div className='details-des'>
                <div className="degree-card-header">
                  <h4>{degree.name}</h4>
                  <span className="degree-code">{degree.code}</span>
                </div>
                
                <p className="degree-description">{degree.description}</p>
                
                {/* <div className="degree-details">
                  <div className="detail-section">
                    <h5>Core Courses</h5>
                    <ul>
                      {degree.courses.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h5>Career Paths</h5>
                    <div className="career-tags">
                      {degree.careerPaths.map((path, idx) => (
                        <span key={idx} className="career-tag">{path}</span>
                      ))}
                    </div>
                  </div>
                  
              
                </div> */}
                
                <div className="degree-actions">
                  <button className="btn btn-primary">Apply Now</button>
                  <button className="btn btn-secondary">Program Details</button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="programs-info">
          <div className="info-card card">
            <h4>Financial Aid & Scholarships</h4>
            <p>We offer various scholarship opportunities for outstanding students at all degree levels.</p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          
          <div className="info-card card">
            <h4>Research Opportunities</h4>
            <p>Work with leading researchers and access state-of-the-art facilities.</p>
            <button className="btn btn-secondary">Explore Research</button>
          </div>
          
          <div className="info-card card">
            <h4>International Students</h4>
            <p>Join our diverse community with dedicated support for international applicants.</p>
            <button className="btn btn-secondary">International Info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
