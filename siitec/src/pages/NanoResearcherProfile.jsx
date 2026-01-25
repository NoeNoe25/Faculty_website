
import React, { useState, useMemo } from 'react';
import '../styles/ResearcherProfile.css';

import proftosapol from '../assets/images/research/researchers/ProfTosapol.jpg';
import profsakon from '../assets/images/research/researchers/ProfSakon.png';
import profkorakot from '../assets/images/research/researchers/ProfKorakot.jpg';
import profwanwilai from '../assets/images/research/researchers/ProfWanwilai.jpg';
import profteerayut from '../assets/images/research/researchers/ProfTeerayut.jpg';
import profnongluck from '../assets/images/research/researchers/ProfNongluck.png';
import profkittiphong from '../assets/images/research/researchers/ProfKittiphong.jpg';
import profkanoknan from '../assets/images/research/researchers/ProfKanoknan.jpg';
import profkhattiya from '../assets/images/research/researchers/Dr.Khattiya.jpg';
import profkanokthip from '../assets/images/research/researchers/ProfKanokthip.png';
import profwisanu from '../assets/images/research/researchers/ProfWisanu.jpg';
import profnarathon from '../assets/images/research/researchers/Dr.Narathon.jpg';
import ProfWanichaya from '../assets/images/research/researchers/ProfWanichaya.png';
import profchayanan from '../assets/images/research/researchers/Dr.Chayanan.jpg';
import profApiluck from '../assets/images/research/researchers/Dr.Apiluck.jpg';


import project2 from '../assets/images/research/projects/Project2.png';
import project4 from '../assets/images/research/projects/Project4.png';
import project5 from '../assets/images/research/projects/Project5.png';
import project10 from '../assets/images/research/projects/Project10.jpg';
import project11 from '../assets/images/research/projects/Project11.png'; 
import project12 from '../assets/images/research/projects/Project12.png';
import project13 from '../assets/images/research/projects/Project13.jpg';
import project14 from '../assets/images/research/projects/Project14.jpg';
import project15 from '../assets/images/research/projects/Project15.jpg';
import project17 from '../assets/images/research/projects/Project17.png';
import project18 from '../assets/images/research/projects/Project18.png';
import  project21 from '../assets/images/research/projects/Project21.png'; 
import  project24 from '../assets/images/research/projects/Project24.png'; 
import  project23 from '../assets/images/research/projects/Project23.png'; 
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

const NanoResearcherProfile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const researchers = [
   
    {
      id: 2,
      name: "Assoc. Prof. Dr. Tosapol Maluangnont",
      position: "Associate Professor",
      researchGroup: "Electroceramics Research Laboratory",
      category: "Materials Science",
      overview: "Our group focuses on solid state chemistry of layered materials and nanomaterials derived therefrom, including composite formation with biologically-derived polymers. Current applications of interest include humidity sensor and triboelectric nanogenerators (TENGs). Another research direction is the chemical-free modification of properties by gamma and electron irradiation, for possible applications in harsh environments such as nuclear facilities or space.",
      keywords: ["Layered Materials", "Nanosheets", "Radiation", "Triboelectric Nanogenerator"],
      email: "tosapol.ma@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: proftosapol,
      projectImage: project2
    },
    
    {
      id: 4,
      name: "Assoc. Prof. Sakon Rahong",
      position: "Associate Professor",
      researchGroup: "Quantum and Optical Semiconductor Research Laboratory (QOS Lab)",
      category: "Nanotechnology",
      overview: "I specialize in microfluidic and nanotechnology research. My current projects include developing organ-on-a-chip platforms, specifically skin-on-a-chip and tumor-on-a-chip models, as well as advancing 3D bioprinting techniques. Previously, I worked on integrating nanowires with microfluidic systems for dengue virus detection and developed ZnO nanorod photoanodes for photoelectrochemical water splitting applications.",
      keywords: ["Microfluidics Technology", "Nanobiodevices", "Organ-on-a-chip", "Nanomaterials"],
      specialties: ["Microfluidics", "Biosensing", "Disease Modeling", "Renewable Energy"],
      email: "sakon.ra@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      orcid: "https://orcid.org",
      profileImage: profsakon,
      projectImage: project4
    },
    {
      id: 5,
      name: "Assoc. Prof. Korakot Onlaor",
      position: "Associate Professor",
      researchGroup: "Electronics and Control System for Nanodevice Research Laboratory (ECSN Lab)",
      category: "Electronics",
      overview: "My research focuses on developing resistive switching memory devices using nanomaterials and thin films such as TiO₂, SnO₂, and graphene oxide to improve electrical performance and device stability. Our laboratory group also conducts research on sensor development for sensitive chemical detection. Overall, the research aims to create cost-effective, high-performance materials and devices for next-generation electronic applications.",
      keywords: ["Resistive Switching", "Nanomaterials", "Thin Films", "Metal Oxide Semiconductors"],
      email: "korakot.on@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      profileImage: profkorakot,
      projectImage: project5
    },
   
    
    {
      id: 10,
      name: "Assoc. Prof. Dr. Wanwilai Vittayakorn",
      position: "Associate Professor",
      researchGroup: "Electroceramics Research Laboratory",
      category: "Materials Science",
      overview: "My research focuses on the design and development of composite and nanocomposite materials with enhanced functional properties, particularly in dielectric, piezoelectric, and ferroelectric systems. I am especially interested in understanding structure-property relationships and advancing materials for next-generation energy harvesting, sensing, and electronic applications.",
      keywords: ["Electroceramics", "Ferroelectric", "Piezoelectric", "Nanocomposites"],
      email: "wanwilai.vi@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      profileImage: profwanwilai,
      projectImage: project10
    },
    {
      id: 11,
      name: "Asst. Prof. Dr. Teerayut Uwanno",
      position: "Assistant Professor",
      researchGroup: "Carbon Nanomaterials Research Laboratory",
      category: "Nanotechnology",
      overview: "Nanocarbon materials synthesis from biomass and their device applications. Our research focuses on developing sustainable carbon-based materials from renewable biomass sources for advanced energy storage and electronic applications.",
      keywords: ["Biomass", "Graphene", "Carbon Nanotubes", "Supercapacitors"],
      email: "teerayut.uw@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      orcid: "https://orcid.org",
      profileImage: profteerayut,
      projectImage: project11
    },
    {
      id: 12,
      name: "Assoc. Prof. Dr. Nongluck Houngkamhang",
      position: "Associate Professor",
      researchGroup: "Biosensors Research Laboratory",
      category: "Biotechnology",
      overview: "Specializing in sensor and biosensor development using nanomaterials for sensitive, rapid-response screening of environmental and biological samples. Portable, low-cost detection tools for pesticide detection, and clinical diagnostics — bridging laboratory innovation with real-world application to support public health and food safety.",
      keywords: ["Biosensors", "Point of Care Diagnostic", "Gold Nanoparticles Assay"],
      email: "nongluck.ho@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      profileImage: profnongluck,
      projectImage: project12
    },
    {
      id: 13,
      name: "Assist. Prof. Dr. Kittiphong Amnuaysawat",
      position: "Assistant Professor",
      researchGroup: "Materials Informatics and Machine Learning",
      category: "AI & Computational",
      overview: "My research focuses on applying machine learning to materials science to improve the prediction of material properties and accelerate the discovery of new compounds. By integrating computational data (VASP, Quantum Espresso, MaterialsProject.org), structural descriptors, and advanced models.",
      keywords: ["Materials Informatics", "Machine Learning", "DFT Calculations"],
      specialties: ["Generative Learning", "Solar Cell Materials", "Computational Materials Science"],
      email: "kittiphong.am@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: profkittiphong,
      projectImage: project13
    },
    {
      id: 14,
      name: "Asst. Prof. Dr. Kanoknan Phacheerak",
      position: "Assistant Professor",
      researchGroup: "Computational Materials Science",
      category: "Computational",
      overview: "My research focuses on the theoretical investigation of structural and mechanical properties, as well as high-pressure phase transitions in materials. Using first-principles calculations, I aim to predict novel material phases and properties before they are observed experimentally.",
      keywords: ["Structural Properties", "Mechanical Properties", "Phase Transition", "First-Principles Calculations"],
      email: "kanoknan.ph@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: profkanoknan,
      projectImage: project14
    },
    {
      id: 15,
      name: "Dr. Khattiya Chalapat",
      position: "Researcher",
      researchGroup: "Integrated Technology Research Group",
      category: "Applied Science",
      overview: "1. Cross-disciplinary research to serve local municipality, particularly in the monitoring of air/water quality using sensor network, and raising the community awareness of environmental problems. 2. Applied science education to improve student skills in micro/nano technologies and innovations for sustainable economy.",
      keywords: ["Nanotechnology", "Applied Physics", "Integrated Technology"],
      email: "khattiya.ch@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      researchGate: "https://researchgate.net",
      profileImage: profkhattiya,
      projectImage: project15
    },
    
    {
      id: 17,
      name: "Dr. Chayanan Boonrawd",
      position: "Researcher",
      researchGroup: "Natural Rubber Composites Laboratory",
      category: "Materials Science",
      overview: "Our research focuses on the emerging applications and physiochemistry of natural rubber composites. We investigate utilizing the intrinsic properties of natural rubber as a colloidal approach to thermal insulation and thermo-responsive applications as smart materials.",
      keywords: ["Natural Rubber Latex", "Shape Memory Polymer", "Thermal Insulation"],
      email: "chayanan.bo@kmitl.ac.th",
      researchGate: "https://researchgate.net",
      profileImage: profchayanan,
      projectImage: project17
    },
    {
      id: 18,
      name: "Dr. Narathon Khemasiri",
      position: "Researcher",
      researchGroup: "Quantum and Optical Semiconductor Research Laboratory (QOS Lab)",
      category: "Nanotechnology",
      overview: "My research focuses on the design and synthesis of advanced inorganic nanomaterials—such as metal-doped ZnO, metal-doped SnO₂, metal-doped V₂O₅, and BiOI—using physical vapor deposition and solution-based processes for molecular sensing and renewable energy applications.",
      keywords: ["Functional Nanomaterials", "Thin-film Technology", "Photoelectrochemical Sensor", "Nano/optoelectronic Devices"],
      email: "narathon.kh@kmitl.ac.th",
      researchGate: "https://researchgate.net",
      profileImage: profnarathon,
      projectImage: project18
    },
    
   
    {
      id: 21,
      name: "Prof. Dr. Wisanu Pecharapa",
      position: "Professor",
      researchGroup: "Nanocomposite Material Research Laboratory (NMRL)",
      category: "Materials Science",
      overview: "Our research focuses on the study and development of oxide- and nano-scale composite materials. We are particularly interested in synthesizing nanostructured materials through various techniques for use in applications such as electronic devices, photocatalysis, dye-sensitized solar cells, and magnetic-related technologies.",
      keywords: ["IR Shielding", "Light Scattering", "Metal Oxide", "Thin Films", "Up-conversion"],
      email: "wisanu.pe@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      profileImage: profwisanu,
      projectImage: project21
    },
    {
      id: 22,
      name: "Assoc. Prof. Dr. Kanokthip Boonyaratkarin",
      position: "Associate Professor",
      researchGroup: "Nanocomposite Material Research Laboratory (NMRL)",
      category: "Materials Science",
      overview: "Our research focuses on the study and development of oxide- and nano-scale composite materials. We are particularly interested in synthesizing nanostructured materials through various techniques for use in applications such as electronic devices, photocatalysis, dye-sensitized solar cells, and magnetic-related technologies.",
      keywords: ["Nanocomposites", "Oxide Materials", "Electronic Devices", "Photocatalysis"],
      email: "kanokthip.bo@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      profileImage: profkanokthip,
      projectImage: project17
    },
    {
      id: 23,
      name: "Assoc. Prof. Dr. Wanichaya Mekprasart",
      position: "Associate Professor",
      researchGroup: "Nanocomposite Material Research Laboratory (NMRL)",
      category: "Materials Science",
      overview: "Our research focuses on the study and development of oxide- and nano-scale composite materials. We are particularly interested in synthesizing nanostructured materials through various techniques for use in applications such as electronic devices, photocatalysis, dye-sensitized solar cells, and magnetic-related technologies.",
      keywords: ["Photocatalysis", "TiO₂ Composites", "Oxygen Indicators", "Nanocomposite Films"],
      email: "wanichaya.me@kmitl.ac.th",
      googleScholar: "https://scholar.google.com",
      profileImage: ProfWanichaya,
      projectImage: project23
    },
    {
  id: 24,
  name: "Assoc. Prof. Dr. Apiluck Eiad-Ua",
  position: "Associate Professor",
  researchGroup: "Nanoporous Material Research Group",
  category: "Materials Science & Environmental Engineering",
  overview: "Our research integrates circular economy concepts into the synthesis of nanoporous carbon and inorganic–organic hybrid materials derived from agricultural, industrial, and petroleum wastes. Advanced thermal and hydrothermal processes are employed to tailor pore structures and surface chemistry at the nanoscale. The resulting materials are applied in energy storage, adsorption, catalytic supports, and environmental remediation, contributing to sustainable energy and environmental technologies.",
  keywords: [
    "Nanoporous Carbon",
    "Circular Economy",
    "Biomass-Derived Materials",
    "Hydrothermal Carbonization",
    "Zeolite",
    "Adsorbents",
    "Electrodes",
    "Catalyst Support",
    "Wastewater Treatment",
    "Air Pollution Control",
    "Energy Storage",
    "Direct Air Capture (DAC)"
  ],
  email: "apiluck.ei@kmitl.ac.th",
  googleScholar: "https://scholar.google.com",
  profileImage: profApiluck,
  projectImage: project24
}

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
  const categories = ['all', 'Materials Science', 'Electronics', 'Nanotechnology', 
                     'Computational', 'Biotechnology', 
                       'Applied Science', 'AI & Computational', 
                      ];

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
          <h1 className="header-title">Nanoscience & Nanotechnology Research Groups</h1>
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

export default NanoResearcherProfile;
