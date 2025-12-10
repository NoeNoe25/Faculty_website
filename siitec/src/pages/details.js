// import React, { useState, useRef, useEffect } from 'react';
// import '../styles/details.css';
// import { 
//   FaChartBar, 
//   FaBook, 
//   FaBriefcase, 
//   FaGraduationCap, 
//   FaAward, 
//   FaUniversity,
//   FaDownload
// } from 'react-icons/fa';

// import {  
//   FaHandshake, 
//   FaGlobeAmericas,
//   FaUserTie,
//   FaLightbulb,
//   FaRocket
// } from 'react-icons/fa';

// import { 
//   FaAtom,
//   FaMicroscope,
//   FaFlask,
//   FaLaptopCode,
//   FaThermometerHalf,
//   FaDna
// } from 'react-icons/fa';
// const ProgramDetailsWithNav = () => {
//   const [activeSection, setActiveSection] = useState('overview');
//   const [activeYear, setActiveYear] = useState(1);
  
//   const sectionRefs = {
//     overview: useRef(null),
//     curriculum: useRef(null),
//     careers: useRef(null),
//     admissions: useRef(null),
//     scholarships: useRef(null),
//     faculty: useRef(null),
//     research: useRef(null),
//     facilities: useRef(null)
//   };

//   // Scroll to section when nav item is clicked
//   const scrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     sectionRefs[sectionId].current?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   };

//   // Update active section based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 100;
      
//       Object.entries(sectionRefs).forEach(([section, ref]) => {
//         if (ref.current) {
//           const sectionTop = ref.current.offsetTop;
//           const sectionHeight = ref.current.offsetHeight;
          
//           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Curriculum data
//   const curriculumData = {
//     1: [
//       { code: 'NANO 101', name: 'Introduction to Nanotechnology', credits: 3, type: 'Core' },
//       { code: 'CHEM 121/122', name: 'General Chemistry I & II', credits: 6, type: 'Required' },
//       { code: 'MATH 151/152', name: 'Calculus I & II', credits: 8, type: 'Required' },
//       { code: 'PHYS 160', name: 'Physics for Engineers', credits: 4, type: 'Required' },
//       { code: 'ENGR 100', name: 'Engineering Graphics & Design', credits: 3, type: 'Required' }
//     ],
//     2: [
//       { code: 'NANO 201', name: 'Nanomaterials Science', credits: 3, type: 'Core' },
//       { code: 'NANO 210', name: 'Quantum Mechanics for Nanotech', credits: 3, type: 'Core' },
//       { code: 'CHEM 231', name: 'Organic Chemistry', credits: 3, type: 'Required' },
//       { code: 'MATH 253', name: 'Differential Equations', credits: 3, type: 'Required' },
//       { code: 'PHYS 261', name: 'Electromagnetism', credits: 3, type: 'Required' }
//     ],
//     3: [
//       { code: 'NANO 301', name: 'Nanofabrication Techniques', credits: 4, type: 'Core' },
//       { code: 'NANO 310', name: 'Characterization Methods', credits: 4, type: 'Core' },
//       { code: 'NANO 320', name: 'Bionanotechnology', credits: 3, type: 'Elective' },
//       { code: 'NANO 330', name: 'Nanoelectronics', credits: 3, type: 'Elective' },
//       { code: 'ENGR 350', name: 'Engineering Ethics', credits: 2, type: 'Required' }
//     ],
//     4: [
//       { code: 'NANO 401', name: 'Capstone Design Project', credits: 6, type: 'Core' },
//       { code: 'NANO 410', name: 'Advanced Nanomaterials', credits: 3, type: 'Core' },
//       { code: 'NANO 420', name: 'Nanotechnology in Medicine', credits: 3, type: 'Elective' },
//       { code: 'NANO 430', name: 'Sustainable Nanotech', credits: 3, type: 'Elective' },
//       { code: 'NANO 499', name: 'Research Thesis', credits: 3, type: 'Core' }
//     ]
//   };

//   // Faculty data
// //   const facultyData = [
// //     {
// //       name: 'Dr. Sarah Chen',
// //       title: 'Professor of Nanomaterials',
// //       research: 'Quantum dot synthesis and applications',
// //       tags: ['Materials Science', 'Quantum Tech', 'Synthesis']
// //     },
// //     {
// //       name: 'Dr. Marcus Rodriguez',
// //       title: 'Associate Professor of Nanoelectronics',
// //       research: '2D materials for next-gen computing',
// //       tags: ['Electronics', '2D Materials', 'Computing']
// //     },
// //     {
// //       name: 'Dr. Elena Petrova',
// //       title: 'Assistant Professor of Biomedical Nanotech',
// //       research: 'Targeted drug delivery systems',
// //       tags: ['Biomedical', 'Drug Delivery', 'Therapeutics']
// //     },
// //     {
// //       name: 'Dr. James Kim',
// //       title: 'Professor of Nanophotonics',
// //       research: 'Plasmonics and metamaterials',
// //       tags: ['Photonics', 'Metamaterials', 'Optics']
// //     }
// //   ];

//   return (
//     <div className="program-page">
//       {/* Hero Section */}
//       <section className="program-page__hero" style={{ height: '80vh' }}>
         
//         <div className="program-page__container" >
         
//           <div className="program-page__hero-content">
//             <h1 className="program-page__hero-title">B.Sc. in Nanotechnology Engineering</h1>
//             <p className="program-page__hero-subtitle">
//               Engineering at the atomic scale to create macroscopic impact. 
//               Join the forefront of technological innovation and shape the future of materials, medicine, and electronics.
//             </p>
//             <div className="program-page__hero-actions">
//               <button className="program-page__btn program-page__btn--primary">Apply Now</button>
//               <button className="program-page__btn program-page__btn--secondary">Request Information</button>
//             </div>
//           </div>
//           <div className="program-page__hero-visual">
//             <div className="program-page__nano-structure">
//               <div className="program-page__atom"></div>
//               <div className="program-page__bond"></div>
//               <div className="program-page__atom"></div>
//               <div className="program-page__bond"></div>
//               <div className="program-page__atom"></div>
//               <div className="program-page__bond"></div>
//               <div className="program-page__atom"></div>
//             </div>
//           </div>
//         </div>
//         <div className="overlay">
//             <div className="tech-grid-overlay"></div>
//           </div>
//       </section>

//       <div className="program-page__main-wrapper">
//         {/* Side Navigation */}
//         <nav className="program-page__side-nav">
//   <div className="program-page__nav-header">
//     <h3>Program Details</h3>
//   </div>
//   <ul className="program-page__nav-links">
//     <li>
//       <button 
//         className={`program-page__nav-link ${activeSection === 'overview' ? 'program-page__nav-link--active' : ''}`}
//         onClick={() => scrollToSection('overview')}
//       >
//         <span className="program-page__nav-icon">
//           <FaChartBar />
//         </span>
//         Program Overview
//       </button>
//     </li>
//     <li>
//       <button 
//         className={`program-page__nav-link ${activeSection === 'curriculum' ? 'program-page__nav-link--active' : ''}`}
//         onClick={() => scrollToSection('curriculum')}
//       >
//         <span className="program-page__nav-icon">
//           <FaBook />
//         </span>
//         Curriculum
//       </button>
//     </li>
//     <li>
//       <button 
//         className={`program-page__nav-link ${activeSection === 'careers' ? 'program-page__nav-link--active' : ''}`}
//         onClick={() => scrollToSection('careers')}
//       >
//         <span className="program-page__nav-icon">
//           <FaBriefcase />
//         </span>
//         Career Paths
//       </button>
//     </li>
//     <li>
//       <button 
//         className={`program-page__nav-link ${activeSection === 'admissions' ? 'program-page__nav-link--active' : ''}`}
//         onClick={() => scrollToSection('admissions')}
//       >
//         <span className="program-page__nav-icon">
//           <FaGraduationCap />
//         </span>
//         Admissions
//       </button>
//     </li>
//     <li>
//       <button 
//         className={`program-page__nav-link ${activeSection === 'scholarships' ? 'program-page__nav-link--active' : ''}`}
//         onClick={() => scrollToSection('scholarships')}
//       >
//         <span className="program-page__nav-icon">
//           <FaAward />
//         </span>
//         Scholarships
//       </button>
//     </li>
//     <li>
//       <button 
//         className={`program-page__nav-link ${activeSection === 'facilities' ? 'program-page__nav-link--active' : ''}`}
//         onClick={() => scrollToSection('facilities')}
//       >
//         <span className="program-page__nav-icon">
//           <FaUniversity />
//         </span>
//         Facilities
//       </button>
//     </li>
//   </ul>
//   <div className="program-page__nav-footer">
//     <button className="program-page__btn program-page__btn--outline program-page__nav-cta">
//       <FaDownload className="program-page__btn-icon" /> &nbsp;
//       Download Brochure
//     </button>
//   </div>
//   <div className="program-page__nav-footer">
//     <button className="program-page__btn program-page__btn--outline program-page__nav-cta">
//       <FaDownload className="program-page__btn-icon" />  &nbsp;
//       Download Academic Calendar
//     </button>
//   </div>
// </nav>

//         {/* Main Content */}
//         <main className="program-page__main-content">
//           {/* Program Overview */}
//           <section 
//             id="overview" 
//             ref={sectionRefs.overview}
//             className="program-page__content-section"
//           >
//             <div className="program-page__section-header">
//               <h2>Program Overview</h2>
//               <p>Engineering at the nanoscale for macroscopic impact</p>
//             </div>
//             <div className="program-page__section-content">
//               <p className="program-page__intro-text">
//                 Our Bachelor of Science in Nanotechnology Engineering is an interdisciplinary program 
//                 that prepares students to manipulate matter at the atomic and molecular levels. This 
//                 cutting-edge field combines principles from materials science, chemistry, physics, 
//                 and engineering to create innovative solutions across industries including healthcare, 
//                 electronics, energy, and environmental sustainability.
//               </p>
              
//               <div className="program-page__stats-grid">
//                 <div className="program-page__stat-card">
//                   <h3>4</h3>
//                   <p>Years Duration</p>
//                 </div>
//                 <div className="program-page__stat-card">
//                   <h3>128</h3>
//                   <p>Credit Hours</p>
//                 </div>
//                 <div className="program-page__stat-card">
//                   <h3>15:1</h3>
//                   <p>Student-Faculty Ratio</p>
//                 </div>
//                 <div className="program-page__stat-card">
//                   <h3>92%</h3>
//                   <p>Employment Rate</p>
//                 </div>
//               </div>

//               <div className="program-page__features-grid">
//   <div className="program-page__feature-card">
//     <div className="program-page__feature-icon">
//       <FaFlask />
//     </div>
//     <h4>Hands-on Learning</h4>
//     <p>Extensive laboratory experience with state-of-the-art equipment including SEM, TEM, and cleanroom facilities</p>
//   </div>
//   <div className="program-page__feature-card">
//     <div className="program-page__feature-icon">
//       <FaHandshake />
//     </div>
//     <h4>Industry Connections</h4>
//     <p>Partnerships with leading tech companies and research institutions for internships and co-op opportunities</p>
//   </div>
//   <div className="program-page__feature-card">
//     <div className="program-page__feature-icon">
//       <FaGlobeAmericas />
//     </div>
//     <h4>Global Perspective</h4>
//     <p>International research opportunities and exchange programs with partner universities worldwide</p>
//   </div>
// </div>
//             </div>
//           </section>

//           {/* Curriculum */}
//           <section 
//             id="curriculum" 
//             ref={sectionRefs.curriculum}
//             className="program-page__content-section"
//           >
//             <div className="program-page__section-header">
//               <h2>Curriculum</h2>
//               <p>Comprehensive education in nanoscience and engineering principles</p>
//             </div>
//             <div className="program-page__section-content">
//               <div className="program-page__curriculum-tabs">
//                 <div className="program-page__tab-buttons">
//                   {[1, 2, 3, 4].map(year => (
//                     <button
//                       key={year}
//                       className={`program-page__tab-button ${activeYear === year ? 'program-page__tab-button--active' : ''}`}
//                       onClick={() => setActiveYear(year)}
//                     >
//                       Year {year}
//                     </button>
//                   ))}
//                 </div>
//                 <div className="program-page__tab-content">
//                   <h4>{activeYear === 1 ? 'Foundation Year' : 
//                        activeYear === 2 ? 'Core Principles' : 
//                        activeYear === 3 ? 'Specialization & Electives' : 
//                        'Advanced Studies & Capstone'}</h4>
//                   <div className="program-page__courses-grid">
//                     {curriculumData[activeYear].map((course, index) => (
//                       <div key={index} className="program-page__course-card">
//                         <h5>{course.name}</h5>
//                         <p>{course.code} • {course.credits} credits</p>
//                         <span className={`program-page__course-tag program-page__course-tag--${course.type.toLowerCase()}`}>
//                           {course.type}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Career Paths */}
//           <section 
//             id="careers" 
//             ref={sectionRefs.careers}
//             className="program-page__content-section"
//           >
//             <div className="program-page__section-header">
//               <h2>Career Opportunities</h2>
//               <p>Where our graduates make an impact</p>
//             </div>
//             <div className="program-page__section-content">
//               <div className="program-page__careers-grid">
//                 <div className="program-page__career-card">
//                   <h4>Nanomaterials Engineer</h4>
//                   <p>Design and develop novel materials with enhanced properties for various applications</p>
//                   <div className="program-page__salary">$85,000 - $120,000</div>
//                   <div className="program-page__career-tags">
//                     <span className="program-page__tag">Semiconductors</span>
//                     <span className="program-page__tag">Energy</span>
//                     <span className="program-page__tag">Aerospace</span>
//                   </div>
//                 </div>
//                 <div className="program-page__career-card">
//                   <h4>Nanofabrication Specialist</h4>
//                   <p>Create nanoscale devices using advanced fabrication techniques in cleanroom environments</p>
//                   <div className="program-page__salary">$78,000 - $110,000</div>
//                   <div className="program-page__career-tags">
//                     <span className="program-page__tag">Electronics</span>
//                     <span className="program-page__tag">Photonics</span>
//                     <span className="program-page__tag">Medical Devices</span>
//                   </div>
//                 </div>
//                 <div className="program-page__career-card">
//                   <h4>Research Scientist</h4>
//                   <p>Conduct fundamental and applied research in academic, government, or industrial settings</p>
//                   <div className="program-page__salary">$70,000 - $95,000</div>
//                   <div className="program-page__career-tags">
//                     <span className="program-page__tag">R&D</span>
//                     <span className="program-page__tag">Academia</span>
//                     <span className="program-page__tag">Government</span>
//                   </div>
//                 </div>
//                 <div className="program-page__career-card">
//                   <h4>Biomedical Nanotechnologist</h4>
//                   <p>Develop nanoscale solutions for healthcare, drug delivery, and medical diagnostics</p>
//                   <div className="program-page__salary">$75,000 - $105,000</div>
//                   <div className="program-page__career-tags">
//                     <span className="program-page__tag">Drug Delivery</span>
//                     <span className="program-page__tag">Diagnostics</span>
//                     <span className="program-page__tag">Tissue Engineering</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Admissions */}
//           <section 
//             id="admissions" 
//             ref={sectionRefs.admissions}
//             className="program-page__content-section"
//           >
//             <div className="program-page__section-header">
//               <h2>Admissions</h2>
//               <p>Join the next generation of nanotechnology innovators</p>
//             </div>
//             <div className="program-page__section-content">
//               <div className="program-page__admissions-grid">
//                 <div className="program-page__requirements">
//                   <h4>Admission Requirements</h4>
//                   <ul>
//                     <li>High school diploma with minimum 85% average</li>
//                     <li>Advanced level Mathematics (Calculus preferred)</li>
//                     <li>Advanced level Physics</li>
//                     <li>Advanced level Chemistry</li>
//                     <li>English proficiency test for international students (TOEFL 90+ or IELTS 6.5+)</li>
//                     <li>Personal statement and letter of intent</li>
//                     <li>Two letters of recommendation</li>
//                   </ul>
//                 </div>
//                 <div className="program-page__deadlines">
//                   <h4>Application Deadlines</h4>
//                   <div className="program-page__deadline-card">
//                     <h5>Fall Intake 2024</h5>
//                     <p><strong>Early Application:</strong> January 15</p>
//                     <p><strong>Regular Deadline:</strong> March 1</p>
//                     <p><strong>Documents Due:</strong> March 15</p>
//                   </div>
//                   <div className="program-page__deadline-card">
//                     <h5>Winter Intake 2025</h5>
//                     <p><strong>Early Application:</strong> September 15</p>
//                     <p><strong>Regular Deadline:</strong> November 1</p>
//                     <p><strong>Documents Due:</strong> November 15</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Scholarships */}
//           <section 
//             id="scholarships" 
//             ref={sectionRefs.scholarships}
//             className="program-page__content-section"
//           >
//             <div className="program-page__section-header">
//               <h2>Scholarships & Financial Aid</h2>
//               <p>Investing in your future in nanotechnology</p>
//             </div>
//             <div className="program-page__section-content">
//               <div className="program-page__scholarships-grid">
//                 <div className="program-page__scholarship-card">
//                   <div className="program-page__scholarship-header">
//                     <h4>Nanotechnology Excellence Scholarship</h4>
//                     <div className="program-page__amount">$10,000/year</div>
//                   </div>
//                   <p>Merit-based scholarship for top-performing students entering the nanotechnology program with minimum 95% average</p>
//                   <div className="program-page__scholarship-details">
//                     <span className="program-page__detail-tag">Deadline: March 15</span>
//                     <span className="program-page__detail-tag">Renewable</span>
//                     <span className="program-page__detail-tag">Maintain 3.5 GPA</span>
//                   </div>
//                 </div>
//                 <div className="program-page__scholarship-card">
//                   <div className="program-page__scholarship-header">
//                     <h4>Future Innovators Award</h4>
//                     <div className="program-page__amount">$7,500</div>
//                   </div>
//                   <p>For students demonstrating exceptional innovation in science and technology projects or competitions</p>
//                   <div className="program-page__scholarship-details">
//                     <span className="program-page__detail-tag">Deadline: February 28</span>
//                     <span className="program-page__detail-tag">One-time</span>
//                     <span className="program-page__detail-tag">Portfolio Required</span>
//                   </div>
//                 </div>
//                 <div className="program-page__scholarship-card">
//                   <div className="program-page__scholarship-header">
//                     <h4>Research Fellowship</h4>
//                     <div className="program-page__amount">$5,000/semester</div>
//                   </div>
//                   <p>For students engaged in nanotechnology research with faculty members. Includes summer research opportunities</p>
//                   <div className="program-page__scholarship-details">
//                     <span className="program-page__detail-tag">Rolling Admission</span>
//                     <span className="program-page__detail-tag">Work-Study</span>
//                     <span className="program-page__detail-tag">Faculty Reference</span>
//                   </div>
//                 </div>
//                 <div className="program-page__scholarship-card">
//                   <div className="program-page__scholarship-header">
//                     <h4>Diversity in STEM Scholarship</h4>
//                     <div className="program-page__amount">$8,000/year</div>
//                   </div>
//                   <p>Supporting underrepresented groups in STEM fields to promote diversity in nanotechnology</p>
//                   <div className="program-page__scholarship-details">
//                     <span className="program-page__detail-tag">Deadline: April 1</span>
//                     <span className="program-page__detail-tag">Renewable</span>
//                     <span className="program-page__detail-tag">Essay Required</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Faculty */}
//           {/* <section 
//             id="faculty" 
//             ref={sectionRefs.faculty}
//             className="program-page__content-section"
//           >
//             <div className="program-page__section-header">
//               <h2>Faculty & Research Leaders</h2>
//               <p>Learn from world-renowned experts in nanotechnology</p>
//             </div>
//             <div className="program-page__section-content">
//               <div className="program-page__faculty-grid">
//                 {facultyData.map((faculty, index) => (
//                   <div key={index} className="program-page__faculty-card">
//                     <div className="program-page__faculty-image"></div>
//                     <h4>{faculty.name}</h4>
//                     <p className="program-page__faculty-title">{faculty.title}</p>
//                     <p className="program-page__faculty-research">{faculty.research}</p>
//                     <div className="program-page__faculty-tags">
//                       {faculty.tags.map((tag, tagIndex) => (
//                         <span key={tagIndex} className="program-page__tag">{tag}</span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section> */}

//           {/* Research */}
//           {/* <section 
//             id="research" 
//             ref={sectionRefs.research}
//             className="program-page__content-section"
//           >
//             <div className="program-page__section-header">
//               <h2>Research Areas</h2>
//               <p>Cutting-edge research driving innovation in nanotechnology</p>
//             </div>
//             <div className="program-page__section-content">
//               <div className="program-page__research-areas">
//                 <div className="program-page__research-card">
//                   <h4>Nanomaterials Synthesis</h4>
//                   <p>Developing novel methods for creating nanoparticles, nanotubes, and 2D materials with precise control over size, shape, and composition. Focus on scalable production techniques and functionalization for specific applications.</p>
//                   <div className="program-page__research-tags">
//                     <span className="program-page__tag">Graphene</span>
//                     <span className="program-page__tag">MOFs</span>
//                     <span className="program-page__tag">Quantum Dots</span>
//                     <span className="program-page__tag">Nanowires</span>
//                   </div>
//                 </div>
//                 <div className="program-page__research-card">
//                   <h4>Nanoelectronics & Photonics</h4>
//                   <p>Designing and fabricating electronic and photonic devices at the nanoscale for faster, more efficient computing, communication, and sensing technologies. Exploring quantum computing and neuromorphic computing applications.</p>
//                   <div className="program-page__research-tags">
//                     <span className="program-page__tag">Spintronics</span>
//                     <span className="program-page__tag">Memristors</span>
//                     <span className="program-page__tag">Nano-sensors</span>
//                     <span className="program-page__tag">Plasmonics</span>
//                   </div>
//                 </div>
//                 <div className="program-page__research-card">
//                   <h4>Biomedical Applications</h4>
//                   <p>Creating nanoscale systems for drug delivery, medical diagnostics, imaging, and tissue engineering to advance healthcare solutions. Developing targeted therapies and smart medical devices.</p>
//                   <div className="program-page__research-tags">
//                     <span className="program-page__tag">Theranostics</span>
//                     <span className="program-page__tag">Biosensors</span>
//                     <span className="program-page__tag">Implants</span>
//                     <span className="program-page__tag">Lab-on-Chip</span>
//                   </div>
//                 </div>
//                 <div className="program-page__research-card">
//                   <h4>Energy & Environment</h4>
//                   <p>Developing nanomaterials for efficient energy harvesting, storage, and conversion. Creating nanoscale solutions for environmental monitoring, remediation, and sustainable technology development.</p>
//                   <div className="program-page__research-tags">
//                     <span className="program-page__tag">Solar Cells</span>
//                     <span className="program-page__tag">Batteries</span>
//                     <span className="program-page__tag">Catalysis</span>
//                     <span className="program-page__tag">Water Purification</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section> */}

//           {/* Facilities */}
//           <section 
//             id="facilities" 
//             ref={sectionRefs.facilities}
//             className="program-page__content-section"
//           >
//             <div className="program-page__section-header">
//               <h2>Facilities & Resources</h2>
//               <p>State-of-the-art infrastructure for nanotechnology research and education</p>
//             </div>
//             <div className="program-page__section-content">
//   <div className="program-page__facilities-grid">
//     <div className="program-page__facility-card">
//       <div className="program-page__facility-icon">
//         <FaAtom />
//       </div>
//       <h4>Cleanroom Facility</h4>
//       <p>Class 100/1000 cleanroom with electron beam lithography, plasma etching, thin film deposition systems, and photolithography equipment for nanoscale device fabrication.</p>
//     </div>
//     <div className="program-page__facility-card">
//       <div className="program-page__facility-icon">
//         <FaMicroscope />
//       </div>
//       <h4>Characterization Lab</h4>
//       <p>Advanced microscopy suite including SEM, TEM, AFM, X-ray diffraction, and spectroscopy equipment for comprehensive nanoscale analysis and materials characterization.</p>
//     </div>
//     <div className="program-page__facility-card">
//       <div className="program-page__facility-icon">
//         <FaFlask />
//       </div>
//       <h4>Wet Chemistry Labs</h4>
//       <p>Specialized laboratories for nanoparticle synthesis, surface functionalization, biological applications, and chemical processing with fume hoods and specialized equipment.</p>
//     </div>
//     <div className="program-page__facility-card">
//       <div className="program-page__facility-icon">
//         <FaLaptopCode />
//       </div>
//       <h4>Computational Center</h4>
//       <p>High-performance computing cluster for molecular dynamics simulations, quantum mechanical calculations, and computational modeling of nanoscale systems.</p>
//     </div>
//     <div className="program-page__facility-card">
//       <div className="program-page__facility-icon">
//         <FaThermometerHalf />
//       </div>
//       <h4>Advanced Materials Testing</h4>
//       <p>Comprehensive testing facilities for mechanical, thermal, electrical, and optical properties of nanomaterials under various environmental conditions.</p>
//     </div>
//     <div className="program-page__facility-card">
//       <div className="program-page__facility-icon">
//         <FaDna />
//       </div>
//       <h4>Bio-Nano Interface Lab</h4>
//       <p>Specialized facility for studying interactions between nanomaterials and biological systems, including cell culture facilities and biosafety cabinets.</p>
//     </div>
//   </div>
// </div>
//           </section>

//           {/* Final CTA */}
//           <section className="program-page__cta-section">
//             <div className="program-page__cta-content">
//               <h2>Ready to Engineer at the Atomic Scale?</h2>
//               <p>Join our innovative nanotechnology engineering program and shape the future of technology, healthcare, and sustainable solutions.</p>
//               <div className="program-page__cta-buttons">
//                 <button className="program-page__btn program-page__btn--primary">Start Your Application</button>
//                 <button className="program-page__btn program-page__btn--secondary">Schedule a Campus Tour</button>
//                 <button className="program-page__btn program-page__btn--outline">Contact Admissions</button>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProgramDetailsWithNav;



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
            <button className="program-page__btn program-page__btn--outline program-page__nav-cta">
              <FaDownload className="program-page__btn-icon" /> &nbsp;
              Download Brochure
            </button>
          </div>
          
          <div className="program-page__nav-footer" style={{ marginTop: '10px' }}>
            <button className="program-page__btn program-page__btn--outline program-page__nav-cta">
              <FaDownload className="program-page__btn-icon" /> &nbsp;
              Download Academic Calendar
            </button>
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