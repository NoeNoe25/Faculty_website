// src/components/OrganizationalStructure.js
import React, { useState } from 'react';
import '../styles/OrganizationalStructure.css';

// Import images
import presidentImage from '../assets/professor1.jpg';
import academicDeanImage from '../assets/professor1.jpg';
import researchDeanImage from '../assets/professor1.jpg';
import adminDeanImage from '../assets/professor1.jpg';
import departmentHeadsImage from '../assets/professor1.jpg';
import facultyImage from '../assets/professor1.jpg';

const OrganizationalStructure = () => {
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

  // Departments Structure
  const departments = {
    academic: {
      name: "Academic Division",
      head: "Prof. Michael Chen",
      color: "#667eea",
      subDepartments: [
        {
          name: "Integrated Technology Systems",
          head: "Dr. Amanda Lee",
          programs: ["B.Sc. ITS", "M.Sc. ATI", "Ph.D. IIT"],
          faculty: 25,
          students: 450
        },
        {
          name: "Nanotechnology Engineering",
          head: "Dr. Robert Kim",
          programs: ["B.Sc. NTE", "M.Sc. NME", "Ph.D. NMS"],
          faculty: 18,
          students: 320
        },
        {
          name: "STEM Education",
          head: "Dr. Patricia Brown",
          programs: ["B.Sc. STEM", "M.Sc. STEM Leadership", "Ph.D. SER"],
          faculty: 15,
          students: 280
        },
        {
          name: "Student Services",
          head: "Ms. Jennifer Wilson",
          units: ["Admissions", "Registrar", "Career Services", "Academic Advising"],
          staff: 30
        }
      ]
    },
    research: {
      name: "Research Division",
      head: "Dr. Sarah Williams",
      color: "#764ba2",
      subDepartments: [
        {
          name: "Advanced Technology Research Center",
          head: "Dr. David Zhang",
          labs: ["AI & Machine Learning", "Nanomaterials", "IoT Systems"],
          researchers: 45,
          projects: 32
        },
        {
          name: "Innovation & Entrepreneurship Hub",
          head: "Mr. Kevin Martinez",
          programs: ["Startup Incubation", "Industry Partnerships", "Tech Transfer"],
          startups: 15,
          patents: 28
        },
        {
          name: "Grants & Funding Office",
          head: "Dr. Lisa Anderson",
          functions: ["Proposal Development", "Grant Management", "Compliance"],
          annualFunding: "$8.5M"
        }
      ]
    },
    administration: {
      name: "Administrative Division",
      head: "Mr. James Thompson",
      color: "#f093fb",
      subDepartments: [
        {
          name: "Finance & Accounting",
          head: "Ms. Rachel Green",
          units: ["Budgeting", "Payroll", "Financial Reporting"],
          staff: 18
        },
        {
          name: "Human Resources",
          head: "Mr. Thomas White",
          functions: ["Recruitment", "Employee Development", "Benefits"],
          staff: 12
        },
        {
          name: "Facilities & Operations",
          head: "Mr. Brian Johnson",
          areas: ["Campus Maintenance", "Security", "IT Infrastructure"],
          staff: 45
        },
        {
          name: "Student Affairs",
          head: "Ms. Samantha Davis",
          services: ["Housing", "Dining", "Health Services", "Activities"],
          staff: 25
        }
      ]
    }
  };

  // Board of Trustees
  const boardMembers = [
    {
      name: "Dr. Richard Parker",
      role: "Chairperson",
      affiliation: "Former CEO, TechGlobal Inc.",
      term: "2022-2026"
    },
    {
      name: "Ms. Maria Gonzalez",
      role: "Vice Chair",
      affiliation: "Partner, Innovation Ventures",
      term: "2021-2025"
    },
    {
      name: "Dr. Benjamin Carter",
      role: "Secretary",
      affiliation: "Professor Emeritus, MIT",
      term: "2023-2027"
    },
    {
      name: "Mr. Alexander Wong",
      role: "Treasurer",
      affiliation: "CFO, NanoSystems Corp.",
      term: "2022-2026"
    },
    {
      name: "Dr. Nancy Chen",
      role: "Member",
      affiliation: "Director, National Science Foundation",
      term: "2023-2027"
    }
  ];

  // Committee Structure
  const committees = [
    {
      name: "Academic Affairs Committee",
      chair: "Prof. Michael Chen",
      focus: "Curriculum, faculty development, academic standards",
      members: 8,
      meetings: "Monthly"
    },
    {
      name: "Research & Innovation Committee",
      chair: "Dr. Sarah Williams",
      focus: "Research strategy, funding, partnerships",
      members: 7,
      meetings: "Bi-monthly"
    },
    {
      name: "Finance & Audit Committee",
      chair: "Mr. James Thompson",
      focus: "Budget oversight, financial planning, audit compliance",
      members: 6,
      meetings: "Quarterly"
    },
    {
      name: "Student Life Committee",
      chair: "Ms. Samantha Davis",
      focus: "Student services, campus life, welfare",
      members: 9,
      meetings: "Monthly"
    },
    {
      name: "Technology Infrastructure Committee",
      chair: "Mr. Brian Johnson",
      focus: "IT systems, facilities, infrastructure planning",
      members: 5,
      meetings: "Bi-monthly"
    }
  ];

  return (
    <section id="organizational-structure" className="section org-structure-section">
      <div className="container">
        {/* Header Section */}
        <div className="org-header">
          <h1>Organizational Structure</h1>
          <p>Transparent leadership and governance framework driving our technological excellence</p>
          
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${activeView === 'chart' ? 'active' : ''}`}
              onClick={() => setActiveView('chart')}
            >
              📊 Organizational Chart
            </button>
            <button 
              className={`toggle-btn ${activeView === 'list' ? 'active' : ''}`}
              onClick={() => setActiveView('list')}
            >
              👥 Leadership Directory
            </button>
          </div>
        </div>

        {/* Organizational Chart View */}
        {activeView === 'chart' && (
          <div className="chart-view">
            {/* Board of Trustees */}
            <div className="level board-level">
              <h3>Board of Trustees</h3>
              <div className="node board-node">
                <div className="node-content">
                  <h4>Board of Trustees</h4>
                  <p>5 Members • Governance & Oversight</p>
                </div>
                <div className="connector-down"></div>
              </div>
            </div>

            {/* President Level */}
            <div className="level president-level">
              <div className="node president-node">
                <div className="connector-up"></div>
                <div className="node-content">
                  <img src={presidentImage} alt="President" />
                  <div className="node-info">
                    <h4>Dr. Evelyn Rodriguez</h4>
                    <p>President & CEO</p>
                    <span className="node-department">Executive Office</span>
                  </div>
                </div>
                <div className="connector-down"></div>
              </div>
            </div>

            {/* Deans Level */}
            <div className="level deans-level">
              <div className="deans-container">
                {leadership.filter(l => l.id !== 'president').map((dean, index) => (
                  <div key={dean.id} className="node dean-node">
                    <div className="connector-up"></div>
                    <div className="node-content">
                      <img src={dean.image} alt={dean.name} />
                      <div className="node-info">
                        <h4>{dean.name}</h4>
                        <p>{dean.title}</p>
                        <span className="node-department">{dean.department}</span>
                      </div>
                    </div>
                    <div className="connector-down"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments Level */}
            <div className="level departments-level">
              <div className="departments-container">
                {Object.entries(departments).map(([key, dept]) => (
                  <div key={key} className="department-column">
                    <div 
                      className={`department-header ${expandedDepartment === key ? 'expanded' : ''}`}
                      onClick={() => setExpandedDepartment(expandedDepartment === key ? null : key)}
                    >
                      <h4>{dept.name}</h4>
                      <span className="toggle-icon">
                        {expandedDepartment === key ? '▼' : '►'}
                      </span>
                    </div>
                    
                    {expandedDepartment === key && (
                      <div className="sub-departments">
                        {dept.subDepartments.map((subDept, idx) => (
                          <div key={idx} className="sub-department">
                            <h5>{subDept.name}</h5>
                            <p>Head: {subDept.head}</p>
                            {subDept.programs && (
                              <div className="programs">
                                {subDept.programs.map((program, pIdx) => (
                                  <span key={pIdx} className="program-tag">{program}</span>
                                ))}
                              </div>
                            )}
                            {subDept.labs && (
                              <div className="labs">
                                {subDept.labs.map((lab, lIdx) => (
                                  <span key={lIdx} className="lab-tag">{lab}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* List View */}
        {activeView === 'list' && (
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

            {/* Board of Trustees */}
            <div className="board-section">
              <h2>Board of Trustees</h2>
              <div className="board-grid">
                {boardMembers.map((member, index) => (
                  <div key={index} className="board-card">
                    <h4>{member.name}</h4>
                    <p className="board-role">{member.role}</p>
                    <p className="board-affiliation">{member.affiliation}</p>
                    <span className="board-term">Term: {member.term}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Committees */}
            <div className="committees-section">
              <h2>Governance Committees</h2>
              <div className="committees-grid">
                {committees.map((committee, index) => (
                  <div key={index} className="committee-card">
                    <h4>{committee.name}</h4>
                    <p className="committee-chair">
                      <strong>Chair:</strong> {committee.chair}
                    </p>
                    <p className="committee-focus">{committee.focus}</p>
                    <div className="committee-meta">
                      <span>Members: {committee.members}</span>
                      <span>Meets: {committee.meetings}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="org-additional-info">
          <div className="info-card">
            <h3>📋 Governance Documents</h3>
            <ul>
              <li>Institutional Bylaws</li>
              <li>Strategic Plan 2023-2028</li>
              <li>Academic Policies Handbook</li>
              <li>Research Ethics Guidelines</li>
            </ul>
            <button className="btn btn-secondary">Download Documents</button>
          </div>
          
          <div className="info-card">
            <h3>🔍 Transparency Portal</h3>
            <p>Access detailed reports and organizational data</p>
            <div className="portal-links">
              <button className="btn btn-secondary">Financial Reports</button>
              <button className="btn btn-secondary">Annual Reports</button>
              <button className="btn btn-secondary">Meeting Minutes</button>
            </div>
          </div>
          
          <div className="info-card">
            <h3>💼 Contact Governance</h3>
            <p>Reach out to our leadership and governance teams</p>
            <div className="contact-actions">
              <button className="btn btn-primary">Contact Board</button>
              <button className="btn btn-secondary">Leadership Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalStructure;