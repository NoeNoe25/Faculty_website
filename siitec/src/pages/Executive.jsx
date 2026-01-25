// src/components/OrganizationalStructure.js
import React, { useState } from 'react';
import '../styles/Executive.css';

// Import executive images from assets
import wipooSriseubsai from '../assets/executive/Dr. Wipoo Sriseubsai.jpg';
import winaddaWongwiniyapan from '../assets/executive/Assoc. Prof. Dr. Winadda Wongwiniyapan.jpg';
import pitipornThanomngam from '../assets/executive/Asst. Prof. Dr. Pitiporn Thanomngam.jpg';
import jatupornThongsri from '../assets/executive/Assoc. Prof. Dr. Jatuporn Thongsri.jpg';
import darineePhromyothin from '../assets/executive/Assoc. Prof. Dr. Darinee Phromyothin.jpg';
import ploypailinYongsiri from '../assets/executive/Asst. Prof. Dr. Ploypailin Yongsiri.jpg';
import korakotOnlaor from '../assets/executive/Assoc. Prof. Dr. Korakot Onlaor.jpg';
import kamolWasapinyokul from '../assets/executive/Asst. Prof. Dr. Kamol Wasapinyokul.jpg';
import anantaSinchai from '../assets/executive/Asst. Prof. Dr. Ananta Sinchai.jpg';
import santhadChuwongin from '../assets/executive/Asst. Prof. Dr. Santhad Chuwongin.jpg';
import navaphunKayunkid from '../assets/executive/Assoc. Prof. Dr. Navaphun Kayunkid.jpg';
import chatrpolPakasiri from '../assets/executive/Assoc. Prof. Dr. Chatrpol Pakasiri.jpg';

const Executive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const leadership = [
    {
      id: 'president',
      name: "Dr. Wipoo Sriseubsai",
      title: "President",
      image: wipooSriseubsai,
      category: "Executive Leadership",
      department: "Executive Office",
      email: "wipoo.sr@kmitl.ac.th",
      phone: "+66 (0) 2-329-8000",
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
      id: 'vp-academic',
      name: "Assoc. Prof. Dr. Winadda Wongwiniyapan",
      title: "Vice President for Academic Affairs",
      image: winaddaWongwiniyapan,
      category: "Executive Leadership",
      department: "Academic Division",
      email: "winadda.wo@kmitl.ac.th",
      phone: "+66 (0) 2-329-8001",
      responsibilities: [
        "Academic policy and curriculum development",
        "Faculty affairs and development",
        "Academic quality assurance",
        "Student academic services"
      ],
      reportsTo: "President",
      directReports: ["Deans", "Registrar", "Academic Directors"]
    },
    {
      id: 'vp-research',
      name: "Asst. Prof. Dr. Pitiporn Thanomngam",
      title: "Vice President for Research & Innovation",
      image: pitipornThanomngam,
      category: "Executive Leadership",
      department: "Research Division",
      email: "pitiporn.th@kmitl.ac.th",
      phone: "+66 (0) 2-329-8002",
      responsibilities: [
        "Research strategy and funding management",
        "Innovation and technology transfer",
        "Industry collaborations",
        "Research facility oversight"
      ],
      reportsTo: "President",
      directReports: ["Research Center Directors", "Grants Office", "Innovation Office"]
    },
    {
      id: 'vp-admin',
      name: "Assoc. Prof. Dr. Jatuporn Thongsri",
      title: "Vice President for Administration",
      image: jatupornThongsri,
      category: "Executive Leadership",
      department: "Administrative Division",
      email: "jatuporn.th@kmitl.ac.th",
      phone: "+66 (0) 2-329-8003",
      responsibilities: [
        "Administrative operations and policy",
        "Human resources management",
        "Budget planning and allocation",
        "Facility and infrastructure management"
      ],
      reportsTo: "President",
      directReports: ["HR Director", "Finance Director", "Operations Manager"]
    },
    {
      id: 'dean-nano',
      name: "Assoc. Prof. Dr. Korakot Onlaor",
      title: "Dean, Department of Nanoscience & Nanotechnology (NANO)",
      image: korakotOnlaor,
      category: "Department Leadership",
      department: "Department of Nanoscience & Nanotechnology",
      email: "korakot.on@kmitl.ac.th",
      phone: "+66 (0) 2-329-8004",
      responsibilities: [
        "NANO department leadership and management",
        "Nanotechnology curriculum development",
        "Research collaboration in nanoscience",
        "Industry partnerships in nanotechnology"
      ],
      reportsTo: "Vice President for Academic Affairs",
      directReports: ["NANO Faculty", "Research Groups", "Lab Managers"]
    },
    {
      id: 'dean-manu',
      name: "Asst. Prof. Dr. Kamol Wasapinyokul",
      title: "Dean, Department of Manufacturing Technology (MANU)",
      image: kamolWasapinyokul,
      category: "Department Leadership",
      department: "Department of Manufacturing Technology",
      email: "kamol.wa@kmitl.ac.th",
      phone: "+66 (0) 2-329-8005",
      responsibilities: [
        "MANU department leadership and strategy",
        "Manufacturing engineering programs",
        "Advanced manufacturing research",
        "Industry collaboration and training"
      ],
      reportsTo: "Vice President for Academic Affairs",
      directReports: ["MANU Faculty", "Manufacturing Labs", "Industry Liaisons"]
    },
    {
      id: 'dean-cira',
      name: "Asst. Prof. Dr. Santhad Chuwongin",
      title: "Director, Center for Integrated Research Advancement (CIRA)",
      image: santhadChuwongin,
      category: "Research Center Leadership",
      department: "Center for Integrated Research Advancement",
      email: "santhad.ch@kmitl.ac.th",
      phone: "+66 (0) 2-329-8006",
      responsibilities: [
        "Interdisciplinary research coordination",
        "Research facility management",
        "Collaborative research initiatives",
        "Research publication and dissemination"
      ],
      reportsTo: "Vice President for Research & Innovation",
      directReports: ["Research Teams", "Lab Coordinators", "Publication Office"]
    },
    {
      id: 'director-attac',
      name: "Assoc. Prof. Dr. Navaphun Kayunkid",
      title: "Director, Advanced Technology & Telecommunications Center (ATTAC)",
      image: navaphunKayunkid,
      category: "Research Center Leadership",
      department: "Advanced Technology & Telecommunications Center",
      email: "navaphun.ka@kmitl.ac.th",
      phone: "+66 (0) 2-329-8007",
      responsibilities: [
        "Advanced technology research leadership",
        "Telecommunications innovation",
        "Technology transfer and commercialization",
        "Industry-academic partnerships"
      ],
      reportsTo: "Vice President for Research & Innovation",
      directReports: ["Technology Teams", "Innovation Projects", "Partnership Managers"]
    },
    {
      id: 'director-kaisem',
      name: "Assoc. Prof. Dr. Chatrpol Pakasiri",
      title: "Director, Knowledge & Innovation for Sustainable Engineering Management (KAISEM)",
      image: chatrpolPakasiri,
      category: "Research Center Leadership",
      department: "KAISEM Center",
      email: "chatrpol.pa@kmitl.ac.th",
      phone: "+66 (0) 2-329-8008",
      responsibilities: [
        "Sustainable engineering research",
        "Knowledge management systems",
        "Innovation for sustainability",
        "Engineering management programs"
      ],
      reportsTo: "Vice President for Research & Innovation",
      directReports: ["Sustainability Teams", "Knowledge Managers", "Research Fellows"]
    },
    {
      id: 'dean-academic',
      name: "Assoc. Prof. Dr. Darinee Phromyothin",
      title: "Dean, Academic Programs & Quality Assurance",
      image: darineePhromyothin,
      category: "Academic Leadership",
      department: "Academic Affairs Office",
      email: "darinee.ph@kmitl.ac.th",
      phone: "+66 (0) 2-329-8009",
      responsibilities: [
        "Academic program development and review",
        "Quality assurance and accreditation",
        "Teaching and learning enhancement",
        "Academic policy implementation"
      ],
      reportsTo: "Vice President for Academic Affairs",
      directReports: ["Quality Assurance Team", "Program Coordinators", "Academic Support"]
    },
    {
      id: 'dean-student',
      name: "Asst. Prof. Dr. Ploypailin Yongsiri",
      title: "Dean, Student Affairs & Development",
      image: ploypailinYongsiri,
      category: "Administrative Leadership",
      department: "Student Affairs Office",
      email: "ploypailin.yo@kmitl.ac.th",
      phone: "+66 (0) 2-329-8010",
      responsibilities: [
        "Student welfare and support services",
        "Student activities and development",
        "Career counseling and placement",
        "Student discipline and conduct"
      ],
      reportsTo: "Vice President for Administration",
      directReports: ["Student Services", "Counseling Center", "Activities Office"]
    },
    {
      id: 'dean-research',
      name: "Asst. Prof. Dr. Ananta Sinchai",
      title: "Dean, Research Operations & Facilities",
      image: anantaSinchai,
      category: "Research Leadership",
      department: "Research Operations Office",
      email: "ananta.si@kmitl.ac.th",
      phone: "+66 (0) 2-329-8011",
      responsibilities: [
        "Research facility operations",
        "Laboratory equipment management",
        "Research safety and compliance",
        "Research support services"
      ],
      reportsTo: "Vice President for Research & Innovation",
      directReports: ["Lab Managers", "Safety Officers", "Equipment Technicians"]
    }
  ];

  // Filter executives based on search and category
  const filteredLeadership = leadership.filter(leader => {
    const term = searchQuery.toLowerCase();
    const name = (leader.name || '').toLowerCase();
    const title = (leader.title || '').toLowerCase();
    const department = (leader.department || '').toLowerCase();
    const email = (leader.email || '').toLowerCase();
    
    const matchesSearch = 
      name.includes(term) ||
      title.includes(term) ||
      department.includes(term) ||
      email.includes(term);
    
    const matchesCategory = 
      selectedCategory === 'all' || leader.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Count executives by category
  const executiveCount = leadership.filter(l => l.category === 'Executive Leadership').length;
  const departmentCount = leadership.filter(l => l.category === 'Department Leadership').length;
  const researchCenterCount = leadership.filter(l => l.category === 'Research Center Leadership').length;
  const academicCount = leadership.filter(l => l.category === 'Academic Leadership').length;
  const administrativeCount = leadership.filter(l => l.category === 'Administrative Leadership').length;
  const researchCount = leadership.filter(l => l.category === 'Research Leadership').length;

  // Group filtered executives by category
  const groupedLeadership = filteredLeadership.reduce((groups, leader) => {
    const category = leader.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(leader);
    return groups;
  }, {});

  return (
    <div className="executive-container">
      {/* Header Section */}
      <header className="executive-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">Executive Leadership</h1>
          <p className="header-subtitle">School of Integrated Innovative Technology</p>
          <p className="header-institution">King Mongkut's Institute of Technology Ladkrabang</p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="search-container">
          <div className="search-box">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, position, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="filter-section">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Executives
            <span className="count-badge">{leadership.length}</span>
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'Executive Leadership' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Executive Leadership')}
          >
            Executive Leadership
            <span className="count-badge">{executiveCount}</span>
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'Department Leadership' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Department Leadership')}
          >
            Department Leadership
            <span className="count-badge">{departmentCount}</span>
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'Research Center Leadership' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Research Center Leadership')}
          >
            Research Centers
            <span className="count-badge">{researchCenterCount}</span>
          </button>
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <p>
          {filteredLeadership.length} {filteredLeadership.length === 1 ? 'executive' : 'executives'} found
          {searchQuery && <span className="search-term"> for "{searchQuery}"</span>}
          {selectedCategory !== 'all' && !searchQuery && <span className="search-term"> in {selectedCategory}</span>}
        </p>
      </div>

      {/* Executive Leadership Section */}
      <div className="executive-content">
        {filteredLeadership.length > 0 ? (
          Object.entries(groupedLeadership).map(([category, leaders]) => (
            <div key={category} className="category-group">
              <h2 className="category-title">{category}</h2>
              <div className="category-divider"></div>
              
              <div className="executive-grid">
                {leaders.map((leader) => (
                  <article key={leader.id} className="executive-card">
                    <div className="card-header">
                      <div className="executive-image-wrapper">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="executive-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/300x400?text=Executive+Photo";
                          }}
                        />
                        <div className="executive-badge">
                          {leader.department.includes('NANO') ? 'NANO' : 
                           leader.department.includes('MANU') ? 'MANU' :
                           leader.department.includes('CIRA') ? 'CIRA' :
                           leader.department.includes('ATTAC') ? 'ATTAC' :
                           leader.department.includes('KAISEM') ? 'KAISEM' :
                           leader.department.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <h3 className="executive-name">{leader.name}</h3>
                      <p className="executive-title">{leader.title}</p>
                      
                      <div className="card-divider"></div>
                      
                      <div className="people-contact-info">
                        <div className="info-item">
                          <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2.5 5.5L8 9l5.5-3.5M3 11h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <a href={`mailto:${leader.email}`} className="info-link">
                            {leader.email}
                          </a>
                        </div>
                        
                        <div className="info-item">
                          <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14 11v2a1.5 1.5 0 0 1-1.5 1.5A12.5 12.5 0 0 1 2 4 1.5 1.5 0 0 1 3.5 2.5H6l1 3-1.5 1a9 9 0 0 0 5 5l1-1.5 3 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="info-text">{leader.phone}</span>
                        </div>
                      </div>
                      
                      <div className="responsibilities-section">
                        <h4 className="section-label">Key Responsibilities</h4>
                        <div className="responsibilities-list">
                          {leader.responsibilities.map((resp, idx) => (
                            <div key={idx} className="responsibility-item">
                              <span className="responsibility-marker">•</span>
                              <span className="responsibility-text">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="reporting-section">
                        <div className="reporting-item">
                          <span className="reporting-label">Reports to:</span>
                          <span className="reporting-value">{leader.reportsTo}</span>
                        </div>
                        <div className="reporting-item">
                          <span className="reporting-label">Direct reports:</span>
                          <div className="direct-reports-list">
                            {leader.directReports.map((report, idx) => (
                              <span key={idx} className="report-tag">{report}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <svg className="no-results-icon" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="26" cy="26" r="18" stroke="currentColor" strokeWidth="3"/>
              <path d="M39 39l16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <h3>No executives found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="executive-footer">
        <p>© 2024 School of Integrated Innovative Technology — KMITL</p>
      </footer>
    </div>
  );
};

export default Executive;