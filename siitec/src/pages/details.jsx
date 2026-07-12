import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/details.css";
import {
  FaChartBar,
  FaBook,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaUniversity,
  FaDownload,
  FaHandshake,
  FaGlobeAmericas,
  FaFlask,
  FaArrowLeft,
  FaLaptopCode,
  FaMicroscope,
  FaAtom,
  FaThermometerHalf,
  FaDna,
} from "react-icons/fa";

const ProgramDetailsWithNav = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeYear, setActiveYear] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

  const sectionRefs = {
    overview: useRef(null),
    curriculum: useRef(null),
    careers: useRef(null),
    admissions: useRef(null),
    scholarships: useRef(null),
    facilities: useRef(null),
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
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const program = location.state?.program;

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionRefs[sectionId]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!program) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>No Program Selected</h2>
        <button
          className="program-page__btn program-page__btn--primary"
          onClick={() => navigate("/")}
        >
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
            : "linear-gradient(#2c3e50, #000)",
        }}
      >
        <div className="program-page__container">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="program-page__back-btn"
          >
            <FaArrowLeft /> Back
          </button>

          <div className="program-page__hero-content">
            <h1 className="program-page__hero-title">{program.name}</h1>
            <p className="program-page__hero-subtitle">{program.department}</p>
            <div className="program-page__hero-actions">
              <button className="program-page__btn program-page__btn--primary">
                Apply Now
              </button>
              <button className="program-page__btn program-page__btn--secondary">
                Request Information
              </button>
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
              {
                id: "overview",
                icon: <FaChartBar />,
                label: "Program Overview",
              },
              { id: "curriculum", icon: <FaBook />, label: "Curriculum" },
              { id: "careers", icon: <FaBriefcase />, label: "Career Paths" },
              {
                id: "admissions",
                icon: <FaGraduationCap />,
                label: "Admissions",
              },
              { id: "scholarships", icon: <FaAward />, label: "Scholarships" },
              { id: "facilities", icon: <FaUniversity />, label: "Facilities" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  className={`program-page__nav-link ${activeSection === item.id ? "program-page__nav-link--active" : ""}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="program-page__nav-icon">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          {/* 
          <div className="program-page__nav-footer">
             <a className="program-page__btn program-page__btn--outline program-page__nav-cta" 
    href="https://drive.google.com/file/d/1D3iQ2yQY29jMm5eadVS2-M2LuY34G0Rd/view"
        target="_blank"
        rel="noopener noreferrer" aria-label="Download Brochure (opens in new tab)">
      <FaDownload className="program-page__btn-icon" /> &nbsp;
      Download Brochure
    </a>
          </div>
           */}
          <div
            className="program-page__nav-footer"
            style={{ marginTop: "10px" }}
          >
            <a
              className="program-page__btn program-page__btn--outline program-page__nav-cta"
              href="https://www.kmitl.ac.th/academic-calendar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Academic Calendar (opens in new tab)"
            >
              <FaDownload className="program-page__btn-icon" /> &nbsp; Download
              Academic Calendar
            </a>
          </div>
        </nav>

        {/* --- MAIN CONTENT --- */}
        <main className="program-page__main-content">
          {/* // 1. OVERVIEW SECTION */}
          <section
            id="overview"
            ref={sectionRefs.overview}
            className="program-page__content-section"
          >
            <div className="program-page__section-header">
              <h2>Program Overview</h2>
            </div>
            <div className="program-page__section-content">
              <p className="program-page__intro-text">
                {program.overview?.introText || program.description}
              </p>

              <div className="program-page__stats-grid">
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.credits || "140 credits"}</h3>
                  <p>Scope of Studies</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.duration || "4 years"}</h3>
                  <p>Length</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>
                    {program.overview?.stats?.applicationPeriod || "November"}
                  </h3>
                  <p>Application Period</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.tuition || "25,000 THB"}</h3>
                  <p>Tuition/Semester</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.degreeLevel || "Bachelor"}</h3>
                  <p>Degree Level</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.language || "Thai"}</h3>
                  <p>Language</p>
                </div>
              </div>
            </div>
          </section>
          {/* 
// 2. CURRICULUM SECTION */}
          <section
            id="curriculum"
            ref={sectionRefs.curriculum}
            className="program-page__content-section"
          >
            <div className="program-page__section-header">
              <h2>Curriculum</h2>
              <p>
                {program.curriculum?.description ||
                  "Download comprehensive curriculum documents"}
              </p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__curriculum-simple">
                <div className="program-page__download-links">
                  {program.curriculum?.documents?.map((doc, index) => (
                    <a
                      key={index}
                      href={doc.url}
                      className="program-page__download-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="program-page__download-icon">
                        <FaDownload />
                      </div>
                      <div className="program-page__download-info">
                        <h5>{doc.title}</h5>
                        <p>{doc.description}</p>
                      </div>
                      <div className="program-page__download-size">
                        {doc.size || "PDF"}
                      </div>
                    </a>
                  )) || (
                    // Fallback for programs without curriculum data
                    <a href="#" className="program-page__download-link">
                      <div className="program-page__download-icon">
                        <FaDownload />
                      </div>
                      <div className="program-page__download-info">
                        <h5>Curriculum Document</h5>
                        <p>Program curriculum details</p>
                      </div>
                      <div className="program-page__download-size">PDF</div>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Program Plans Section for Graduate Programs */}
            {program.curriculum?.plans && (
              <div className="program-page__plans-section">
                <h4>Program Study Plans</h4>
                <div className="program-page__plans-grid">
                  {program.curriculum.plans.map((plan, index) => (
                    <div key={index} className="program-page__plan-card">
                      <div className="program-page__plan-header">
                        <h5>{plan.name}</h5>
                        <span className="program-page__plan-type">
                          {plan.type}
                        </span>
                      </div>
                      <p className="program-page__plan-description">
                        {plan.description || plan.target}
                      </p>
                      <div className="program-page__plan-requirements">
                        <h6>Requirements:</h6>
                        <ul>
                          {plan.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
          {/* 
// 3. CAREER PATHS SECTION */}
          <section
            id="careers"
            ref={sectionRefs.careers}
            className="program-page__content-section"
          >
            <div className="program-page__section-header">
              <h2>Career Opportunities</h2>
              <p>Where our graduates make an impact</p>
              {program.careers?.startingSalary && (
                <p className="salary-info">
                  Starting salary:{" "}
                  <strong>{program.careers.startingSalary}</strong>
                </p>
              )}
            </div>
            <div className="program-page__section-content">
              <div className="program-page__careers-minimal">
                {program.careers?.categories?.map((category, index) => (
                  <div key={index} className="program-page__career-category">
                    <h4>{category.title}</h4>
                    <ul className="program-page__career-list">
                      {category.jobs.map((job, jobIndex) => (
                        <li key={jobIndex}>{job}</li>
                      ))}
                    </ul>
                  </div>
                )) || (
                  // Fallback career paths
                  <>
                    <div className="program-page__career-category">
                      <h4>Industry & Research</h4>
                      <ul className="program-page__career-list">
                        <li>Production Engineer</li>
                        <li>Process Control Engineer</li>
                        <li>R&D Engineer</li>
                        <li>Failure Analysis Engineer</li>
                        <li>Material Engineering</li>
                        <li>Researcher</li>
                      </ul>
                    </div>
                    <div className="program-page__career-category">
                      <h4>Emerging Fields</h4>
                      <ul className="program-page__career-list">
                        <li>Government Jobs / Leading State Enterprise Jobs</li>
                        <li>Robotics and Artificial Intelligence Engineer</li>
                        <li>Systems Integration Engineer</li>
                        <li>Programming Engineer</li>
                        <li>Professor at Science and Technology Institute</li>
                        <li>
                          Freelancer, Entrepreneur, and Self-Employed in Related
                          Fields
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* // 4. ADMISSIONS SECTION */}
          <section
            id="admissions"
            ref={sectionRefs.admissions}
            className="program-page__content-section"
          >
            <div className="program-page__section-header">
              <h2>Admissions</h2>
              <p>Entry Requirements and Deadline</p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__admissions-grid">
                <div className="program-page__requirements">
                  <h4>Admission Requirements</h4>
                  <ul>
                    {program.admissions?.requirements?.map((req, index) => (
                      <li key={index}>{req}</li>
                    )) ||
                      program.requirements?.map((req, index) => (
                        <li key={index}>{req}</li>
                      )) || (
                        <li>
                          Currently studying or have completed grade 12 (or
                          equivalent)
                        </li>
                      )}
                  </ul>
                </div>
                <div className="program-page__deadlines">
                  <h4>Application Deadlines</h4>
                  <div className="program-page__deadline-card">
                    <h5>Upcoming Intake</h5>
                    {program.admissions?.deadlines ? (
                      <>
                        <p>
                          <strong>Early Application:</strong>{" "}
                          {program.admissions.deadlines.earlyApplication}
                        </p>
                        <p>
                          <strong>Regular Deadline:</strong>{" "}
                          {program.admissions.deadlines.regularDeadline}
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          <strong>Early Application:</strong> January 15
                        </p>
                        <p>
                          <strong>Regular Deadline:</strong> March 1
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. SCHOLARSHIPS */}
          <section
            id="scholarships"
            ref={sectionRefs.scholarships}
            className="program-page__content-section"
          >
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
                  <p>
                    For top-performing students entering the program with
                    outstanding academic records.
                  </p>
                </div>
                <div className="program-page__scholarship-card">
                  <div className="program-page__scholarship-header">
                    <h4>Future Innovators Award</h4>
                    <div className="program-page__amount">$7,500</div>
                  </div>
                  <p>
                    For students demonstrating exceptional innovation in science
                    and technology.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. FACILITIES */}
          <section
            id="facilities"
            ref={sectionRefs.facilities}
            className="program-page__content-section"
          >
            <div className="program-page__section-header">
              <h2>Facilities & Resources</h2>
              <p>
                State-of-the-art infrastructure for nanotechnology research and
                education
              </p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__facilities-grid">
                <div
                  className="program-page__facility-card program-page__facility-card--image"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/assets/cleanroom.jpg)",
                  }}
                >
                  <div className="program-page__facility-icon">
                    <FaAtom />
                  </div>
                  <h4>Cleanroom Facility</h4>
                  <p>
                    Class 100/1000 cleanroom with electron beam lithography and
                    thin film deposition systems.
                  </p>
                </div>
                <div
                  className="program-page__facility-card program-page__facility-card--image"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/assets/microscopy.jpg)",
                  }}
                >
                  <div className="program-page__facility-icon">
                    <FaMicroscope />
                  </div>
                  <h4>Characterization Lab</h4>
                  <p>
                    Advanced microscopy suite including SEM, TEM, AFM, X-ray
                    diffraction, and spectroscopy equipment.
                  </p>
                </div>
                <div
                  className="program-page__facility-card program-page__facility-card--image"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/assets/computing.jpg)",
                  }}
                >
                  <div className="program-page__facility-icon">
                    <FaLaptopCode />
                  </div>
                  <h4>Computational Center</h4>
                  <p>
                    High-performance computing cluster for molecular dynamics
                    simulations and quantum mechanical calculations.
                  </p>
                </div>
                <div
                  className="program-page__facility-card program-page__facility-card--image"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(/assets/wetlab.jpg)",
                  }}
                >
                  <div className="program-page__facility-icon">
                    <FaFlask />
                  </div>
                  <h4>Wet Chemistry Labs</h4>
                  <p>
                    Specialized laboratories for nanoparticle synthesis, surface
                    functionalization, and biological applications.
                  </p>
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
                <button className="program-page__btn program-page__btn--primary">
                  Start Your Application
                </button>
                <button className="program-page__btn program-page__btn--outline">
                  Contact Admissions
                </button>
                <button className="program-page__btn program-page__btn--secondary">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProgramDetailsWithNav;
