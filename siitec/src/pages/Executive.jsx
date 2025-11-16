// src/components/OrganizationalStructure.js
import React, { useState } from 'react';
import '../styles/OrganizationalStructure.css';

// Import images
import presidentImage from '../assets/professor1.jpg';
import academicDeanImage from '../assets/professor1.jpg';
import researchDeanImage from '../assets/professor1.jpg';
import adminDeanImage from '../assets/professor1.jpg';


const Executive = () => {
  const [activeView, setActiveView] = useState('chart'); // 'chart' or 'list'
  const [expandedDepartment, setExpandedDepartment] = useState(null);

  // Leadership Data
  const leadership = [
    {
      id: 'president',
      name: "Dr. Evelyn Rodriguez",
      title: "President & CEO",
      image: presidentImage,
      department: "Executive Office",
      email: "e.rodriguez@techinstitute.edu",
      phone: "+1 (555) 123-4000",
      responsibilities: [
        "Overall institutional leadership and strategy",
        "Board of Trustees relations",
        "External partnerships and funding",
        "Strategic planning and vision"
      ],
      reportsTo: "Board of Trustees",
      directReports: ["Academic Dean", "Research Dean", "Administrative Dean"]
    },
    {
      id: 'academic',
      name: "Prof. Michael Chen",
      title: "Dean of Academic Affairs",
      image: academicDeanImage,
      department: "Academic Division",
      email: "m.chen@techinstitute.edu",
      phone: "+1 (555) 123-4001",
      responsibilities: [
        "Curriculum development and oversight",
        "Faculty recruitment and development",
        "Student academic services",
        "Accreditation and quality assurance"
      ],
      reportsTo: "President",
      directReports: ["Department Heads", "Registrar", "Library Director"]
    },
    {
      id: 'research',
      name: "Dr. Sarah Williams",
      title: "Dean of Research & Innovation",
      image: researchDeanImage,
      department: "Research Division",
      email: "s.williams@techinstitute.edu",
      phone: "+1 (555) 123-4002",
      responsibilities: [
        "Research strategy and funding",
        "Laboratory facilities management",
        "Industry partnerships",
        "Intellectual property management"
      ],
      reportsTo: "President",
      directReports: ["Research Center Directors", "Grants Office", "Tech Transfer"]
    },
    {
      id: 'admin',
      name: "Mr. James Thompson",
      title: "Dean of Administration & Finance",
      image: adminDeanImage,
      department: "Administrative Division",
      email: "j.thompson@techinstitute.edu",
      phone: "+1 (555) 123-4003",
      responsibilities: [
        "Financial management and budgeting",
        "Human resources",
        "Facilities and operations",
        "IT infrastructure"
      ],
      reportsTo: "President",
      directReports: ["Finance Director", "HR Director", "Operations Manager"]
    }
  ];

  


  return (
    <section id="organizational-structure" className="section org-structure-section">
      <div className="container">
        {/* Header Section */}
        <div className="org-header">
          <h1> Leadership Directory</h1>
          <p>Transparent leadership and governance framework driving our technological excellence</p>
          

         
        </div>



        {/* List View */}
       
          <div className="list-view">
            {/* Executive Leadership */}
            <div className="leadership-section">
              <h2>Executive Leadership</h2>
              <div className="leadership-grid">
                {leadership.map((leader) => (
                  <div key={leader.id} className="leader-card">
                    <div className="leader-image">
                      <img src={leader.image} alt={leader.name} />
                    </div>
                    <div className="leader-details">
                      <h3>{leader.name}</h3>
                      <p className="leader-title">{leader.title}</p>
                      <p className="leader-department">{leader.department}</p>
                      
                      <div className="contact-info">
                        <span>📧 {leader.email}</span>
                        <span>📞 {leader.phone}</span>
                      </div>
                      
                      <div className="responsibilities">
                        <h4>Key Responsibilities:</h4>
                        <ul>
                          {leader.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="reporting">
                        <p><strong>Reports to:</strong> {leader.reportsTo}</p>
                        <p><strong>Direct reports:</strong> {leader.directReports.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          
            
          </div>
     

        
      </div>
    </section>
  );
};

export default Executive;