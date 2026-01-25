
import React, { useState, useMemo } from 'react';
import '../styles/ResearcherProfile.css';
import profploypailin from '../assets/images/research/researchers/ProfPloypailin.png';
import profchatrpol from '../assets/images/research/researchers/ProfChatrpol.png';
import profjatuporn from '../assets/images/research/researchers/ProfJatuporn.jpg';
import profrachsak from '../assets/images/research/researchers/Prof.jpg';
import profkomgrit from '../assets/images/research/researchers/ProfKomgrit.jpg';
import profsanthad from '../assets/images/research/researchers/ProfSanthad.jpg';
import profkittipong from '../assets/images/research/researchers/Dr.Kittipon.jpg';
import profnattawirot from '../assets/images/research/researchers/Dr.Nattawirot.png';
import profchanon from '../assets/images/research/researchers/ProfChanon.jpg';
import project1 from '../assets/images/research/projects/Project1.png';
import project3 from '../assets/images/research/projects/Project3.png';
import project6 from '../assets/images/research/projects/Project6.jpg';
import project7 from '../assets/images/research/projects/Project7.png';
import project8 from '../assets/images/research/projects/Project8.png';
import project9 from '../assets/images/research/projects/Project9.png';
import  project16 from '../assets/images/research/projects/Project16.png';
import project19 from '../assets/images/research/projects/Project19.png';
import project20 from '../assets/images/research/projects/Project20.png';
const ResearcherCard = ({ researcher }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="researcher-card">
      <div className="researcher-card-header">
        <div className="project-image">
          <img src={researcher.projectImage} alt={researcher.researchGroup} />
        </div>
        <div className="profile-badge">
          <img src={researcher.profileImage} alt={researcher.name} className="profile-img" />
        </div>
      </div>
      
      <div className="researcher-card-body">
        <div className="researcher-info">
          <h2 className="researcher-name">{researcher.name}</h2>
          <p className="researcher-position">{researcher.position}</p>
        </div>
        
        <div className="research-group-tag">
          {researcher.researchGroup}
        </div>

        <div className={`research-overview ${expanded ? 'expanded' : ''}`}>
          <p>{researcher.overview}</p>
        </div>

        {researcher.overview.length > 180 && (
          <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? '− Show Less' : '+ Read More'}
          </button>
        )}

        <div className="keywords-section">
          <div className="keywords-label">Research Focus</div>
          <div className="keywords">
            {researcher.keywords.map((keyword, idx) => (
              <span key={idx} className="keyword-chip">{keyword}</span>
            ))}
          </div>
        </div>

        {researcher.specialties && researcher.specialties.length > 0 && (
          <div className="specialties-section">
            <div className="keywords-label">Specialties</div>
            <div className="keywords">
              {researcher.specialties.map((specialty, idx) => (
                <span key={idx} className="specialty-chip">{specialty}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="card-footer">
        <a href={`mailto:${researcher.email}`} className="btn-contact">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Contact
        </a>
        <div className="external-links">
          {researcher.googleScholar && (
            <a href={researcher.googleScholar} target="_blank" rel="noopener noreferrer" className="icon-link" title="Google Scholar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l7 3.5v7.32c0 4.35-2.94 8.41-7 9.49-4.06-1.08-7-5.14-7-9.49V7.68l7-3.5z"/>
              </svg>
            </a>
          )}
          {researcher.researchGate && (
            <a href={researcher.researchGate} target="_blank" rel="noopener noreferrer" className="icon-link" title="ResearchGate">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 2a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5z"/>
              </svg>
            </a>
          )}
          {researcher.orcid && (
            <a href={researcher.orcid} target="_blank" rel="noopener noreferrer" className="icon-link" title="ORCID">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-7h2v7zm-1-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 8h-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-2v-7h2v1c.55-.55 1.3-.89 2.15-.89C13.71 9.11 15 10.4 15 12v5z"/>
              </svg>
            </a>
          )}
          {researcher.website && (
            <a href={researcher.website} target="_blank" rel="noopener noreferrer" className="icon-link" title="Website">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ManuResearcherProfile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const researchers = [
    {
      id: 1,
      name: "Asst. Prof. Dr. Ploypailin Yongsiri",
      position: "Assistant Professor",
      researchGroup: "Advanced Materials Manufacturing",
      category: "Materials Science",
      overview: "Researcher expertise focuses on the valorization of industrial waste and residual materials, transforming them into high-value products through rigorous scientific methodologies. Specialization lies in the fabrication of electroceramic materials, with particular expertise in glass and glass-ceramic systems. The work encompasses comprehensive characterization and development of these advanced materials, with special interest in ferroelectric properties.",
      keywords: ["Advanced Ceramics", "Ferroelectric", "Industrial Waste Valorization", "Glass-Ceramics"],
      email: "ploypailin.yo@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: profploypailin,
      projectImage: project1
    },
  
    {
      id: 3,
      name: "Assoc. Prof. Dr. Chatrpol Pakasiri",
      position: "Associate Professor",
      researchGroup: "Microelectronics and Sensors for Manufacturing",
      category: "Electronics",
      overview: "Radio frequency integrated circuit (RFIC). RF power combiner/divider, RF power amplifier, RF low noise amplifier, mixers, oscillator, phase locked loops/frequency synthesisers, phase shifter, RF switches, transceivers, passive microwave circuits, antenna design, digital circuit design using hardware description language (verilog).",
      keywords: ["RFIC", "Transceivers", "Digital Circuit Design", "FPGA", "Antenna Design"],
      email: "chatrpol.pa@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: profchatrpol,
      projectImage: project3
    },
 
 
    {
      id: 6,
      name: "Assoc. Prof. Dr. Jatuporn Thongsri",
      position: "Associate Professor",
      researchGroup: "Computational Manufacturing Systems",
      category: "Computational",
      overview: "Research expertise spans Computational Fluid Dynamics (CFD), Finite Element Method (FEM), manufacturing systems, computer simulation, and digital twin technologies. His work focuses on integrating advanced computational modeling with intelligent manufacturing to enhance system performance, optimize processes, and support data-driven decision making.",
      keywords: ["Computational Fluid Dynamics", "Finite Element Method", "Manufacturing Process", "Digital Twin"],
      email: "jatuporn.th@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: profjatuporn,
      projectImage: project6
    },
    {
      id: 7,
      name: "Assoc. Prof. Dr. Rachsak Sakdanuphab",
      position: "Associate Professor",
      researchGroup: "PVD Coating Technology for Industry",
      category: "Materials Science",
      overview: "ADOPT PVD COATINGS TECHNOLOGY IN THAILAND PVD CLUSTER. Research focuses on thin film semiconductor devices such as solar cells and thermoelectric modules, with expertise in PVD coating technology applications for industrial use.",
      keywords: ["PVD Coating", "Thin Films", "Semiconductor Physics", "Thermoelectric Materials"],
      email: "rachsak.sa@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      profileImage: profrachsak,
      projectImage: project7
    },
    {
      id: 8,
      name: "Asst. Prof. Komgrit Jaksukam",
      position: "Assistant Professor",
      researchGroup: "IoT and Industrial Automation",
      category: "Automation",
      overview: "Research expertise focuses on the convergence of IoT Edge-Cloud Computing and Industrial Automation Systems, embedded systems, multi-hop network, industrial robotics integration, and ultrasound measurement system.",
      keywords: ["IoT Edge-Cloud Computing", "Industrial Robotics", "Wireless Sensor Networks", "Embedded Systems", "Industry 4.0"],
      specialties: ["Multi-hop Networks", "Predictive Maintenance", "Automation Systems"],
      email: "komgrit.ja@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: profkomgrit,
      projectImage: project8
    },
    {
      id: 9,
      name: "Asst. Prof. Dr. Santhad Chuwongin",
      position: "Assistant Professor",
      researchGroup: "Center of Industrial Robots & Automation (CiRA Lab)",
      category: "AI & Automation",
      overview: "Practical AI in Advanced Manufacturing: AI-driven solutions for Industry 4.0, emphasizing automation, quality assurance, and process optimization. AI in Healthcare Applications: Deep learning approaches for healthcare including Medical image analysis using deep learning architectures, Vision Transformers for diagnostic systems.",
      keywords: ["Industrial Robot & AI", "Machine Learning", "Deep Learning", "Self-Supervised Learning"],
      specialties: ["Computer Vision", "Medical Image Analysis", "Tropical Disease Diagnostics"],
      email: "santhad.ch@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: profsanthad,
      projectImage: project9
    },
    
    {
      id: 16,
      name: "Dr. Kittipon Kankhunthod",
      position: "Researcher",
      researchGroup: "Intelligent Automation and Data Analytics (IADA)",
      category: "AI & Data Science",
      overview: "Our research interests include Digital Signal Processing, Machine Learning, Data Analytics, and Magnetic Recording. We focus on developing advanced signal processing algorithms and data-driven models for intelligent analysis for the next-generation data storage technologies.",
      keywords: ["Digital Signal Processing", "Machine Learning", "Data Analytics", "Magnetic Recording"],
      email: "kittipon.ka@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: profkittipong,
      projectImage: project16
    },
  
    
    {
      id: 19,
      name: "Dr. Nathawirot Somjajaroen",
      position: "Researcher",
      researchGroup: "Thin Films and Semiconductor Applications",
      category: "Electronics",
      overview: "My research primarily focuses on semiconductor-based thin-film preparation, analysis, and fabrication, especially using PVD technology. The resulting films are applied to various applications such as protective coatings, transparent functional layers, sensors, and semiconductor-related devices.",
      keywords: ["Thin Films", "Semiconductor Application", "Magnetic Behavior", "Deep Learning", "Superconductor"],
      email: "nathawirot.so@kmitl.ac.th",
      researchGate: "https://researchgate.net",
      profileImage: profnattawirot,
      projectImage: project19
    },
    {
      id: 20,
      name: "Assoc. Prof. Dr. Chanon Warisarn",
      position: "Associate Professor",
      researchGroup: "Advanced Signal Processing for Data Storage",
      category: "Data Science",
      overview: "Our research focuses on advanced signal processing techniques for magnetic recording and data storage systems, with an emphasis on emerging recording technologies and intelligent detection schemes. We investigate the read/write processes in ultra-high-density storage.",
      keywords: ["Magnetic Recording", "Signal Processing", "Encoding/Decoding Design"],
      website: "https://www.adsignlab.org",
      email: "chanon.wa@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      profileImage: profchanon,
      projectImage: project20
    },
    

  ];

  // Filter researchers based on search and category
  const filteredResearchers = useMemo(() => {
    return researchers.filter(researcher => {
      const term = searchQuery.toLowerCase();
      
      const name = (researcher.name || '').toLowerCase();
      const researchGroup = (researcher.researchGroup || '').toLowerCase();
      const keywords = researcher.keywords.join(' ').toLowerCase();
      const overview = (researcher.overview || '').toLowerCase();
      const position = (researcher.position || '').toLowerCase();
      
      const matchesSearch = 
        name.includes(term) ||
        researchGroup.includes(term) ||
        keywords.includes(term) ||
        overview.includes(term) ||
        position.includes(term);
      
      const matchesCategory = 
        selectedCategory === 'all' || researcher.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Get unique categories for filter buttons
  const categories = ['all', 'Materials Science', 'Electronics', 
                      'AI & Automation', 'Computational', 
                      'AI & Data Science', 
                      'Data Science', 'Automation'];

  // Count researchers by category
  const categoryCounts = categories.reduce((acc, category) => {
    if (category === 'all') {
      acc[category] = researchers.length;
    } else {
      acc[category] = researchers.filter(r => r.category === category).length;
    }
    return acc;
  }, {});

  return (
    <div className="researcher-container">
      {/* Header */}
      <header className="researcher-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">Advanced Manufacturing & Technology Research Groups</h1>
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
              placeholder="Search by name, research group, or keywords..."
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
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Research Areas' : category}
              <span className="count-badge">{categoryCounts[category]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <p>
          {filteredResearchers.length} {filteredResearchers.length === 1 ? 'research group' : 'research groups'} found
          {searchQuery && <span className="search-term"> for "{searchQuery}"</span>}
          {selectedCategory !== 'all' && <span className="search-term"> in {selectedCategory}</span>}
        </p>
      </div>

      {/* Researchers Grid */}
      <div className="researchers-content">
        {filteredResearchers.length > 0 ? (
          <div className="cards-grid">
            {filteredResearchers.map((researcher) => (
              <ResearcherCard key={researcher.id} researcher={researcher} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <svg className="no-results-icon" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="26" cy="26" r="18" stroke="currentColor" strokeWidth="3"/>
              <path d="M39 39l16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <h3>No research groups found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="researcher-footer">
        <p>© 2024 School of Integrated Innovative Technology — KMITL</p>
      </footer>
    </div>
  );
};

export default ManuResearcherProfile;
