// src/components/Programs.js
import React, { useState } from 'react';
import '../styles/Programs.css';
import image1 from "../assets/albums/DSC_3872.jpg";
import image2 from "../assets/albums/Nano123456.JPG";
import image3 from "../assets/albums/fbrication.webp";
import image4 from "../assets/albums/DSC_3894.jpg";
import { FaUserGraduate, FaBook, FaMicroscope } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';


const Programs = () => {
  const [activeDegree, setActiveDegree] = useState('bachelor');
  const navigate = useNavigate(); // Move this to the top level of component

  const programsData = {
    bachelor: {
      title: "Bachelor Programs",
      duration: "4 Years",
      degrees: [
        {
          id: "be-nme", // Add unique IDs for each program
          name: "BE. in Nanomaterial Engineering",
          code: "CMIT",
          department: "Department of Nanoscience and Nanotechnology",
          description: "Nanotechnology is a crucial new field of science for national development in the era of globalization. It requires the integration of knowledge from various disciplines, and thus has been included in the national strategic plan.",
          courses: ["Systems Engineering", "Data Analytics", "Technology Management", "Innovation Design"],
          careerPaths: ["Production Engineer", "Process Control Engineer", "R&D Engineer", "Failure Analysis Engineer", "Material Engineering", "Researcher", "Government Jobs / Leading State Enterprise Jobs", "Robotics and Artificial Intelligence Engineer", "Systems Integration Engineer", "Programming Engineer", "Professor at Science and Technology Institute", "Freelancer", "Entrepreneur", "Self-Employed in Related Fields"],
          requirements: ["Currently studying or have completed grade 12 (or equivalent) of the 2014 Basic Education Curriculum.", "Science-Mathematics study plan", "Be a Thai national or legally residing in Thailand."],
          image: image1
        },
        {
          id: "be-mse",
          name: "BE. in Manufacturing System Engineering",
          code: "AMI",
          department: "College of Advanced Manufacturing Innovation",
          description: "The program integrates various disciplinaries including Electrical engineering, Industry engineering, Mechanical engineering, Electronics engineering, Control engineering, and Management industry.",
          courses: ["Nanomaterials Science", "Quantum Mechanics", "Microfabrication", "Nano-characterization"],
          careerPaths: ["Production Engineer", "Process Control Engineer", "R&D Engineer", "Failure Analysis Engineer", "Material Engineering", "Researcher", "Government Jobs / Leading State Enterprise Jobs", "Robotics and Artificial Intelligence Engineer", "Systems Integration Engineer", "Programming Engineer", "Professor at Science and Technology Institute", "Freelancer", "Entrepreneur", "Self-Employed in Related Fields"],
          requirements: ["Currently studying or have completed grade 12 (or equivalent) of the 2014 Basic Education Curriculum.", "Science-Mathematics study plan", "Be a Thai national or legally residing in Thailand."],
          image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: "be-msecp",
          name: "BE. in Manufacturing System Engineering (Continuing Program)",
          code: "AMI",
          department: "College of Advanced Manufacturing Innovation",
          description: "Similar to the Bachelor of Engineering Program in Manufacturing System Engineering, this continuing program condenses various disciplinaries in a very short period of study (2 years) to accommodate working professionals.",
          courses: ["Educational Technology", "Curriculum Design", "STEM Pedagogy", "Classroom Innovation"],
          careerPaths: ["Production Engineer", "Process Control Engineer", "R&D Engineer", "Failure Analysis Engineer", "Material Engineering", "Researcher", "Government Jobs / Leading State Enterprise Jobs", "Robotics and Artificial Intelligence Engineer", "Systems Integration Engineer", "Programming Engineer", "Professor at Science and Technology Institute", "Freelancer", "Entrepreneur", "Self-Employed in Related Fields"],
          requirements: ["Currently studying or have completed grade 12 (or equivalent) of the 2014 Basic Education Curriculum.", "Science-Mathematics study plan", "Be a Thai national or legally residing in Thailand."],
          image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=1225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    },
    master: {
      title: "Master Programs",
      duration: "2 Years",
      degrees: [
        {
          id: "me-amse",
          name: "ME. in Advanced Manufacturing System Engineering",
          code: "AMI",
          department: "College of Advanced Manufacturing Innovation",
          description: "Master advanced manufacturing with a curriculum tailored to your goals. Choose from research-focused (Thesis) or professional (Course-based) tracks to gain specialized skills in system engineering, research methodology, and process innovation.",
          courses: ["Advanced Systems Design", "Technology Strategy", "Innovation Management", "Research Methods"],
          careerPaths: ["Technology Manager", "Innovation Consultant", "R&D Lead"],
          requirements: ["Bachelor's degree in related field", "3.0 GPA minimum", "Research proposal"],
          image: image2
        },
        {
          id: "msc-nnt",
          name: "M.Sc. in Nanoscience and Nanotechnology",
          code: "CMIT",
          department: "Department of Nanoscience and Nanotechnology",
          description: "Explore the frontier of technology at the atomic level. Our graduate programs in Nanoscience and Nanotechnology offer rigorous training and cutting-edge research opportunities, from fundamental discovery to real-world application.",
          courses: ["Advanced Nanomaterials", "Molecular Dynamics", "Nanofabrication Techniques", "Thesis Research"],
          careerPaths: ["Researchers and scientists in nanotechnology", "Teachers or Lecturers", "Experts in quality assurance and control of goods and products in related industries", "Experts in the use of advanced instruments", "Independent entrepreneurs in nanotechnology", "Nanotechnology consultants"],
          requirements: ["Applicants must hold a Bachelor's degree in Science, Engineering, Nanotechnology, or a related field from an institution accredited by the Civil Service Commission (CSC), or be currently pursuing a Master's degree in Science, Engineering, Nanotechnology, or a related field through transfer from another program.", "If an applicant does not meet the requirements in point 1, the decision will be at the discretion of the program committee."],
          image: image3
        }
      ]
    },
    doctoral: {
      title: "Doctoral Programs",
      duration: "4-5 Years",
      degrees: [
        {
          id: "phd-amse",
          name: "Ph.D. in Advanced Manufacturing System Engineering (International Program)",
          code: "AMI",
          department: "College of Advanced Manufacturing Innovation",
          description: "An advanced research degree offering flexible study plans for graduates of all levels. Combine deep theoretical study with practical thesis research to master the complexities of modern manufacturing system engineering.",
          courses: ["Advanced Research Methods", "Interdisciplinary Theory", "Dissertation Research", "Academic Writing"],
          careerPaths: ["University Professor", "Chief Technology Officer", "Research Director"],
          requirements: ["Master's degree", "3.5 GPA minimum", "Research publications", "Faculty interview"],
          image: 'https://images.unsplash.com/photo-1729843420196-1ff32bb39db5?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: "phd-nnt",
          name: "Ph.D. in Nanoscience and Nanotechnology",
          code: "CMIT",
          department: "Department of Nanoscience and Nanotechnology",
          description: "A research-intensive program designed to push the boundaries of nanoscale science. Candidates engage in pioneering research, developing novel materials and technologies to solve complex global challenges.",
          courses: ["Advanced Characterization", "Theoretical Modeling", "Grant Writing", "Laboratory Management"],
          careerPaths: ["Research Scientist", "Materials Engineer", "Academic Researcher"],
          requirements: ["Applicants must hold a Master's degree in Science, Engineering, Nanotechnology, or a related field from an institution accredited by the Civil Service Commission (CSC), or be currently pursuing a Doctoral degree in Science,Engineering, Nanotechnology, or a related field transferred from another program.", "Applicants must hold a Bachelor's degree with First Class Honors in Science, Engineering, Nanotechnology, or a related field from an institution accredited by the CSC.", "If an applicant does not meet the requirements in point 1, the decision will be at the discretion of the program committee."],
          image: "https://images.pexels.com/photos/17485658/pexels-photo-17485658.png"
        }
      ]
    }
  };

  // Function to handle program details navigation
  const handleProgramDetails = (program) => {
    navigate('/ProgramDetailsWithNav', { 
      state: { program } // Pass the entire program object
    });
  };

  
  // // Function to handle Apply Now
  // const handleApplyNow = (program) => {
  //   navigate('/apply', { 
  //     state: { program } 
  //   });
  // };

  // // Functions for the additional info cards
  // const handleFinancialAid = () => {
  //   navigate('/financial-aid');
  // };

  // const handleResearchOpportunities = () => {
  //   navigate('/research');
  // };

  // const handleInternationalStudents = () => {
  //   navigate('/international-students');
  // };

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
                {degree === 'bachelor' ? <FaUserGraduate /> : degree === 'master' ? <FaBook /> : <FaMicroscope />}

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
                  
                  <div className="degree-actions">
                    <button 
                      className="btn btn-primary"
                  
                    >
                      Apply Now
                    </button>
                    <button 
                      className="btn btn-secondary" 
                      // onClick={() => handleProgramDetails(degree)}
                      onClick={() => handleProgramDetails(degree)}
                    >
                      Program Details
                    </button>
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
            <button 
              className="btn btn-secondary" 
              
            >
              Learn More
            </button>
          </div>
          
          <div className="info-card card">
            <h4>Research Opportunities</h4>
            <p>Work with leading researchers and access state-of-the-art facilities.</p>
            <button 
              className="btn btn-secondary"
             
            >
              Explore Research
            </button>
          </div>
          
          <div className="info-card card">
            <h4>International Students</h4>
            <p>Join our diverse community with dedicated support for international applicants.</p>
            <button 
              className="btn btn-secondary"
              
            >
              International Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;