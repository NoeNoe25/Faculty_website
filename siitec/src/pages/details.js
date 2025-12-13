


import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/details.css';
import { 
  FaChartBar, FaBook, FaBriefcase, FaGraduationCap, 
  FaAward, FaUniversity, FaDownload, FaHandshake, 
  FaGlobeAmericas, FaFlask, FaArrowLeft, FaLaptopCode, 
  FaMicroscope, FaAtom, FaThermometerHalf, FaDna
} from 'react-icons/fa';

const ProgramDetailsWithNav = () => {

  const [activeSection, setActiveSection] = useState('overview');
  const [activeYear, setActiveYear] = useState(1);
  
  const location = useLocation();
  const navigate = useNavigate();

  const sectionRefs = {
    overview: useRef(null),
    curriculum: useRef(null),
    careers: useRef(null),
    admissions: useRef(null),
    scholarships: useRef(null),
    facilities: useRef(null)
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

 
  const program = location.state?.program;


  const curriculumData = {
    1: [
      { code: 'NANO 101', name: 'Introduction to Nanotechnology', credits: 3, type: 'Core' },
      { code: 'CHEM 121/122', name: 'General Chemistry I & II', credits: 6, type: 'Required' },
      { code: 'MATH 151/152', name: 'Calculus I & II', credits: 8, type: 'Required' },
      { code: 'PHYS 160', name: 'Physics for Engineers', credits: 4, type: 'Required' },
      { code: 'ENGR 100', name: 'Engineering Graphics & Design', credits: 3, type: 'Required' }
    ],
    2: [
      { code: 'NANO 201', name: 'Nanomaterials Science', credits: 3, type: 'Core' },
      { code: 'NANO 210', name: 'Quantum Mechanics for Nanotech', credits: 3, type: 'Core' },
      { code: 'CHEM 231', name: 'Organic Chemistry', credits: 3, type: 'Required' },
      { code: 'MATH 253', name: 'Differential Equations', credits: 3, type: 'Required' },
      { code: 'PHYS 261', name: 'Electromagnetism', credits: 3, type: 'Required' }
    ],
    3: [
      { code: 'NANO 301', name: 'Nanofabrication Techniques', credits: 4, type: 'Core' },
      { code: 'NANO 310', name: 'Characterization Methods', credits: 4, type: 'Core' },
      { code: 'NANO 320', name: 'Bionanotechnology', credits: 3, type: 'Elective' },
      { code: 'NANO 330', name: 'Nanoelectronics', credits: 3, type: 'Elective' },
      { code: 'ENGR 350', name: 'Engineering Ethics', credits: 2, type: 'Required' }
    ],
    4: [
      { code: 'NANO 401', name: 'Capstone Design Project', credits: 6, type: 'Core' },
      { code: 'NANO 410', name: 'Advanced Nanomaterials', credits: 3, type: 'Core' },
      { code: 'NANO 420', name: 'Nanotechnology in Medicine', credits: 3, type: 'Elective' },
      { code: 'NANO 430', name: 'Sustainable Nanotech', credits: 3, type: 'Elective' },
      { code: 'NANO 499', name: 'Research Thesis', credits: 3, type: 'Core' }
    ]
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  if (!program) {
    return (
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h2>No Program Selected</h2>
        <button className="program-page__btn program-page__btn--primary" onClick={() => navigate('/')}>
          Back to Programs
        </button>
      </div>
    );
  }

 
  return (
    <div className="program-page">
      
      {/* --- HERO SECTION --- */}
      <section 
        className="program-page__hero" 
        style={{ 
            backgroundImage: program.image 
              ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${program.image})` 
              : 'linear-gradient(#2c3e50, #000)'
        }}
      >
        <div className="program-page__container">
             {/* Back Button */}
             <button 
                onClick={() => navigate(-1)} 
                className="program-page__back-btn">
                <FaArrowLeft /> Back
            </button>

          <div className="program-page__hero-content">
            <h1 className="program-page__hero-title">{program.name}</h1>
            <p className="program-page__hero-subtitle">
              {program.department}
            </p>
            <div className="program-page__hero-actions">
              <button className="program-page__btn program-page__btn--primary">Apply Now</button>
              <button className="program-page__btn program-page__btn--secondary">Request Information</button>
            </div>
          </div>
        </div>
      </section>

      <div className="program-page__main-wrapper">
        
        {/* --- SIDE NAVIGATION --- */}
        <nav className="program-page__side-nav">
          <div className="program-page__nav-header">
            <h3>Program Details</h3>
          </div>
          <ul className="program-page__nav-links">
            {[
                { id: 'overview', icon: <FaChartBar />, label: 'Program Overview' },
                { id: 'curriculum', icon: <FaBook />, label: 'Curriculum' },
                { id: 'careers', icon: <FaBriefcase />, label: 'Career Paths' },
                { id: 'admissions', icon: <FaGraduationCap />, label: 'Admissions' },
                { id: 'scholarships', icon: <FaAward />, label: 'Scholarships' },
                { id: 'facilities', icon: <FaUniversity />, label: 'Facilities' }
            ].map((item) => (
                <li key={item.id}>
                <button 
                    className={`program-page__nav-link ${activeSection === item.id ? 'program-page__nav-link--active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                >
                    <span className="program-page__nav-icon">{item.icon}</span>
                    {item.label}
                </button>
                </li>
                
            ))}
          </ul>

          <div className="program-page__nav-footer">
             <a className="program-page__btn program-page__btn--outline program-page__nav-cta" 
    href="https://drive.google.com/file/d/1D3iQ2yQY29jMm5eadVS2-M2LuY34G0Rd/view"
        target="_blank"
        rel="noopener noreferrer" aria-label="Download Brochure (opens in new tab)">
      <FaDownload className="program-page__btn-icon" /> &nbsp;
      Download Brochure
    </a>
          </div>
          
          <div className="program-page__nav-footer" style={{ marginTop: '10px' }}>
             <a
        className="program-page__btn program-page__btn--outline program-page__nav-cta"
        href="https://www.kmitl.ac.th/academic-calendar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Academic Calendar (opens in new tab)"
      >
        <FaDownload className="program-page__btn-icon" />{" "}
        &nbsp; Download Academic Calendar
      </a>
          </div>

        </nav>

        {/* --- MAIN CONTENT --- */}
        <main className="program-page__main-content">
          
          {/* 1. OVERVIEW */}
          <section id="overview" ref={sectionRefs.overview} className="program-page__content-section">
            <div className="program-page__section-header">
              <h2>Program Overview</h2>
              {/* <p>Duration: {program.duration}</p> */}
            </div>
            <div className="program-page__section-content">
              <p className="program-page__intro-text">
                {program.description}
              </p>
              
              <div className="program-page__stats-grid">
                <div className="program-page__stat-card">
                  <h3>15:1</h3>
                  <p>Student-Faculty Ratio</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>92%</h3>
                  <p>Employment Rate</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>Full Time</h3>
                  <p>Mode</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>{program.code}</h3>
                  <p>Location</p>
                </div>
              </div>

              <div className="program-page__features-grid">
                <div className="program-page__feature-card">
                    <div className="program-page__feature-icon"><FaFlask /></div>
                    <h4>Hands-on Learning</h4>
                    <p>Extensive laboratory experience with state-of-the-art equipment.</p>
                </div>
                <div className="program-page__feature-card">
                    <div className="program-page__feature-icon"><FaHandshake /></div>
                    <h4>Industry Connections</h4>
                    <p>Partnerships with leading tech companies for internships.</p>
                </div>
                <div className="program-page__feature-card">
                    <div className="program-page__feature-icon"><FaGlobeAmericas /></div>
                    <h4>Global Perspective</h4>
                    <p>International research opportunities and exchange programs.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. CURRICULUM (Using Hardcoded Data) */}
          <section id="curriculum" ref={sectionRefs.curriculum} className="program-page__content-section">
            <div className="program-page__section-header">
              <h2>Curriculum</h2>
              <p>Comprehensive education breakdown by year</p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__curriculum-tabs">
                
                <div className="program-page__tab-buttons">
                  {[1, 2, 3, 4].map(year => (
                    <button
                      key={year}
                      className={`program-page__tab-button ${activeYear === year ? 'program-page__tab-button--active' : ''}`}
                      onClick={() => setActiveYear(year)}
                    >
                      Year {year}
                    </button>
                  ))}
                </div>

                <div className="program-page__tab-content">
                  <h4>
                    {activeYear === 1 ? 'Foundation Year' : 
                     activeYear === 2 ? 'Core Principles' : 
                     activeYear === 3 ? 'Specialization' : 
                     'Advanced Studies & Capstone'}
                  </h4>
                  
                  <div className="program-page__courses-grid">
                    {curriculumData[activeYear].map((course, index) => (
                      <div key={index} className="program-page__course-card">
                        <h5>{course.name}</h5>
                        <p>{course.code} • {course.credits} credits</p>
                        <span className={`program-page__course-tag program-page__course-tag--${course.type.toLowerCase()}`}>
                          {course.type}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* 3. CAREER PATHS */}
          <section id="careers" ref={sectionRefs.careers} className="program-page__content-section">
            <div className="program-page__section-header">
              <h2>Career Opportunities</h2>
              <p>Where our graduates make an impact</p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__careers-grid">
                {program.careerPaths && program.careerPaths.map((career, index) => (
                    <div key={index} className="program-page__career-card">
                        <h4>{career}</h4>
                        {/* <p>Prepare for a leading role in this field.</p> */}
                        {/* <div className="program-page__career-tags">
                            <span className="program-page__tag">High Growth</span>
                            <span className="program-page__tag">Global</span>
                        </div> */}
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. ADMISSIONS */}
          <section id="admissions" ref={sectionRefs.admissions} className="program-page__content-section">
            <div className="program-page__section-header">
              <h2>Admissions</h2>
              <p>Entry Requirements and Deadline</p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__admissions-grid">
                <div className="program-page__requirements">
                  <h4>Admission Requirements</h4>
                  <ul>
                    {program.requirements && program.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="program-page__deadlines">
                  <h4>Application Deadlines</h4>
                  <div className="program-page__deadline-card">
                    <h5>Upcoming Intake</h5>
                    <p><strong>Early Application:</strong> January 15</p>
                    <p><strong>Regular Deadline:</strong> March 1</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. SCHOLARSHIPS */}
          <section id="scholarships" ref={sectionRefs.scholarships} className="program-page__content-section">
            <div className="program-page__section-header">
              <h2>Scholarships & Financial Aid</h2>
              <p>Investing in your future</p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__scholarships-grid">
                <div className="program-page__scholarship-card">
                  <div className="program-page__scholarship-header">
                    <h4>Merit Excellence Scholarship</h4>
                    <div className="program-page__amount">$10,000/year</div>
                  </div>
                  <p>For top-performing students entering the program with outstanding academic records.</p>
                </div>
                <div className="program-page__scholarship-card">
                  <div className="program-page__scholarship-header">
                    <h4>Future Innovators Award</h4>
                    <div className="program-page__amount">$7,500</div>
                  </div>
                  <p>For students demonstrating exceptional innovation in science and technology.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. FACILITIES */}
          <section id="facilities" ref={sectionRefs.facilities} className="program-page__content-section">
            <div className="program-page__section-header">
              <h2>Facilities & Resources</h2>
              <p>State-of-the-art infrastructure for nanotechnology research and education</p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__facilities-grid">
                <div className="program-page__facility-card">
                  <div className="program-page__facility-icon"><FaAtom /></div>
                  <h4>Research Labs</h4>
                  <p>Advanced equipment for specialized research and experimentation.</p>
                </div>
                <div className="program-page__facility-card">
                  <div className="program-page__facility-icon"><FaLaptopCode /></div>
                  <h4>Computing Center</h4>
                  <p>High-performance computing clusters for simulation and modeling.</p>
                </div>
                <div className="program-page__facility-card">
                  <div className="program-page__facility-icon"><FaMicroscope /></div>
                  <h4>Analysis Suite</h4>
                  <p>Microscopy and spectroscopy tools for material characterization.</p>
                </div>
                <div className="program-page__facility-card">
      <div className="program-page__facility-icon">
        <FaAtom />
       </div>
       <h4>Cleanroom Facility</h4>
       <p>Class 100/1000 cleanroom with electron beam lithography, plasma etching, thin film deposition systems, and photolithography equipment for nanoscale device fabrication.</p>
     </div>
     <div className="program-page__facility-card">
       <div className="program-page__facility-icon">
         <FaMicroscope />
       </div>
       <h4>Characterization Lab</h4>
       <p>Advanced microscopy suite including SEM, TEM, AFM, X-ray diffraction, and spectroscopy equipment for comprehensive nanoscale analysis and materials characterization.</p>
     </div>
     <div className="program-page__facility-card">
       <div className="program-page__facility-icon">
         <FaFlask />
       </div>
       <h4>Wet Chemistry Labs</h4>
       <p>Specialized laboratories for nanoparticle synthesis, surface functionalization, biological applications, and chemical processing with fume hoods and specialized equipment.</p>
     </div>
     <div className="program-page__facility-card">
       <div className="program-page__facility-icon">
         <FaLaptopCode />
       </div>
       <h4>Computational Center</h4>
       <p>High-performance computing cluster for molecular dynamics simulations, quantum mechanical calculations, and computational modeling of nanoscale systems.</p>
     </div>
     <div className="program-page__facility-card">
       <div className="program-page__facility-icon">
         <FaThermometerHalf />
       </div>
       <h4>Advanced Materials Testing</h4>
       <p>Comprehensive testing facilities for mechanical, thermal, electrical, and optical properties of nanomaterials under various environmental conditions.</p>
     </div>
     <div className="program-page__facility-card">
       <div className="program-page__facility-icon">
         <FaDna />
       </div>
       <h4>Bio-Nano Interface Lab</h4>
       <p>Specialized facility for studying interactions between nanomaterials and biological systems, including cell culture facilities and biosafety cabinets.</p>
     </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="program-page__cta-section">
            <div className="program-page__cta-content">
              <h2>Ready to Join Us?</h2>
              <p>Start your journey in {program.name} today.</p>
              <div className="program-page__cta-buttons">
                <button className="program-page__btn program-page__btn--primary">Start Your Application</button>
                <button className="program-page__btn program-page__btn--outline">Contact Admissions</button>
                <button className="program-page__btn program-page__btn--secondary">Schedule a Visit</button>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default ProgramDetailsWithNav;