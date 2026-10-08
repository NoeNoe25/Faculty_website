import React, { createRef, useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/details.css";
import { interpolate, translateStrings, usePhrases } from "../i18n/LanguageContext";
import phrases, { PROGRAM_SKIP_KEYS } from "../i18n/content/programs";
import {
  FaChartBar,
  FaBook,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaUniversity,
  FaDownload,
  FaFlask,
  FaArrowLeft,
  FaLaptopCode,
  FaMicroscope,
  FaAtom,
} from "react-icons/fa";

const ProgramDetailsWithNav = () => {
  const tx = usePhrases(phrases);
  const [activeSection, setActiveSection] = useState("overview");

  const location = useLocation();
  const navigate = useNavigate();

  // Created once, so the scroll listener below can depend on it safely.
  const sectionRefs = useRef({
    overview: createRef(),
    curriculum: createRef(),
    careers: createRef(),
    admissions: createRef(),
    scholarships: createRef(),
    facilities: createRef(),
  }).current;

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
  }, [sectionRefs]);

  // The program arrives in English from the Programs page and is translated here, so
  // switching language on this page updates it too.
  const program = translateStrings(location.state?.program, tx, PROGRAM_SKIP_KEYS);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionRefs[sectionId]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!program) {
    return (
      <div className="page-program-details" style={{ padding: "100px", textAlign: "center" }}>
        <h2>{tx("No Program Selected")}</h2>
        <button
          className="program-page__btn program-page__btn--primary"
          onClick={() => navigate("/")}
        >
          {tx("Back to Programs")}
        </button>
      </div>
    );
  }

  return (
    <div className="program-page page-program-details">
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
            <FaArrowLeft /> {tx("Back")}
          </button>

          <div className="program-page__hero-content">
            <h1 className="program-page__hero-title">{program.name}</h1>
            <p className="program-page__hero-subtitle">{program.department}</p>
            <div className="program-page__hero-actions">
              <button className="program-page__btn program-page__btn--primary">
                {tx("Apply Now")}
              </button>
              <button className="program-page__btn program-page__btn--secondary">
                {tx("Request Information")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="program-page__main-wrapper">
        {/* --- SIDE NAVIGATION --- */}
        <nav className="program-page__side-nav">
          <div className="program-page__nav-header">
            <h3>{tx("Program Details")}</h3>
          </div>
          <ul className="program-page__nav-links">
            {[
              {
                id: "overview",
                icon: <FaChartBar />,
                label: tx("Program Overview"),
              },
              { id: "curriculum", icon: <FaBook />, label: tx("Curriculum") },
              { id: "careers", icon: <FaBriefcase />, label: tx("Career Paths") },
              {
                id: "admissions",
                icon: <FaGraduationCap />,
                label: tx("Admissions"),
              },
              { id: "scholarships", icon: <FaAward />, label: tx("Scholarships") },
              { id: "facilities", icon: <FaUniversity />, label: tx("Facilities") },
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
        rel="noopener noreferrer" aria-label={tx("Download Brochure (opens in new tab)")}>
      <FaDownload className="program-page__btn-icon" /> &nbsp;
      {tx("Download Brochure")}
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
              aria-label={tx("Download Academic Calendar (opens in new tab)")}
            >
              <FaDownload className="program-page__btn-icon" /> &nbsp; {tx("Download Academic Calendar")}
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
              <h2>{tx("Program Overview")}</h2>
            </div>
            <div className="program-page__section-content">
              <p className="program-page__intro-text">
                {program.overview?.introText || program.description}
              </p>

              <div className="program-page__stats-grid">
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.credits || "140 credits"}</h3>
                  <p>{tx("Scope of Studies")}</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.duration || "4 years"}</h3>
                  <p>{tx("Length")}</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>
                    {program.overview?.stats?.applicationPeriod || tx("November")}
                  </h3>
                  <p>{tx("Application Period")}</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.tuition || "25,000 THB"}</h3>
                  <p>{tx("Tuition/Semester")}</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.degreeLevel || "Bachelor"}</h3>
                  <p>{tx("Degree Level")}</p>
                </div>
                <div className="program-page__stat-card">
                  <h3>{program.overview?.stats?.language || "Thai"}</h3>
                  <p>{tx("Language")}</p>
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
              <h2>{tx("Curriculum")}</h2>
              <p>
                {program.curriculum?.description ||
                  tx("Download comprehensive curriculum documents")}
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
                        {doc.size || tx("PDF")}
                      </div>
                    </a>
                  )) || (
                    // Fallback for programs without curriculum data
                    <div className="program-page__download-link">
                      <div className="program-page__download-icon">
                        <FaDownload />
                      </div>
                      <div className="program-page__download-info">
                        <h5>{tx("Curriculum Document")}</h5>
                        <p>{tx("Program curriculum details")}</p>
                      </div>
                      <div className="program-page__download-size">{tx("PDF")}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Program Plans Section for Graduate Programs */}
            {program.curriculum?.plans && (
              <div className="program-page__plans-section">
                <h4>{tx("Program Study Plans")}</h4>
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
                        <h6>{tx("Requirements:")}</h6>
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
              <h2>{tx("Career Opportunities")}</h2>
              <p>{tx("Where our graduates make an impact")}</p>
              {program.careers?.startingSalary && (
                <p className="salary-info">
                  {tx("Starting salary:")}{" "}
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
                      <h4>{tx("Industry & Research")}</h4>
                      <ul className="program-page__career-list">
                        <li>{tx("Production Engineer")}</li>
                        <li>{tx("Process Control Engineer")}</li>
                        <li>{tx("R&D Engineer")}</li>
                        <li>{tx("Failure Analysis Engineer")}</li>
                        <li>{tx("Material Engineering")}</li>
                        <li>{tx("Researcher")}</li>
                      </ul>
                    </div>
                    <div className="program-page__career-category">
                      <h4>{tx("Emerging Fields")}</h4>
                      <ul className="program-page__career-list">
                        <li>{tx("Government Jobs / Leading State Enterprise Jobs")}</li>
                        <li>{tx("Robotics and Artificial Intelligence Engineer")}</li>
                        <li>{tx("Systems Integration Engineer")}</li>
                        <li>{tx("Programming Engineer")}</li>
                        <li>{tx("Professor at Science and Technology Institute")}</li>
                        <li>
                          {tx("Freelancer, Entrepreneur, and Self-Employed in Related Fields")}
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
              <h2>{tx("Admissions")}</h2>
              <p>{tx("Entry Requirements and Deadline")}</p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__admissions-grid">
                <div className="program-page__requirements">
                  <h4>{tx("Admission Requirements")}</h4>
                  <ul>
                    {program.admissions?.requirements?.map((req, index) => (
                      <li key={index}>{req}</li>
                    )) ||
                      program.requirements?.map((req, index) => (
                        <li key={index}>{req}</li>
                      )) || (
                        <li>
                          {tx("Currently studying or have completed grade 12 (or equivalent)")}
                        </li>
                      )}
                  </ul>
                </div>
                <div className="program-page__deadlines">
                  <h4>{tx("Application Deadlines")}</h4>
                  <div className="program-page__deadline-card">
                    <h5>{tx("Upcoming Intake")}</h5>
                    {program.admissions?.deadlines ? (
                      <>
                        <p>
                          <strong>{tx("Early Application:")}</strong>{" "}
                          {program.admissions.deadlines.earlyApplication}
                        </p>
                        <p>
                          <strong>{tx("Regular Deadline:")}</strong>{" "}
                          {program.admissions.deadlines.regularDeadline}
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          <strong>{tx("Early Application:")}</strong> {tx("January 15")}
                        </p>
                        <p>
                          <strong>{tx("Regular Deadline:")}</strong> {tx("March 1")}
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
              <h2>{tx("Scholarships & Financial Aid")}</h2>
              <p>{tx("Investing in your future")}</p>
            </div>
            <div className="program-page__section-content">
              <div className="program-page__scholarship-card">
                <div className="program-page__scholarship-header">
                  <h4>{tx("KMITL Scholarships")}</h4>
                </div>
                <p>
                  {tx("Scholarships and financial aid for KMITL students are managed by the Office of Student Development Affairs. See the current scholarships, eligibility and how to apply.")}
                </p>
                <a
                  href="https://osda.kmitl.ac.th/scholarship/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="program-page__btn program-page__btn--primary"
                >
                  {tx("View Scholarships")}
                </a>
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
              <h2>{tx("Facilities & Resources")}</h2>
              <p>
                {tx("State-of-the-art infrastructure for nanotechnology research and education")}
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
                  <h4>{tx("Cleanroom Facility")}</h4>
                  <p>
                    {tx("Class 100/1000 cleanroom with electron beam lithography and thin film deposition systems.")}
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
                  <h4>{tx("Characterization Lab")}</h4>
                  <p>
                    {tx("Advanced microscopy suite including SEM, TEM, AFM, X-ray diffraction, and spectroscopy equipment.")}
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
                  <h4>{tx("Computational Center")}</h4>
                  <p>
                    {tx("High-performance computing cluster for molecular dynamics simulations and quantum mechanical calculations.")}
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
                  <h4>{tx("Wet Chemistry Labs")}</h4>
                  <p>
                    {tx("Specialized laboratories for nanoparticle synthesis, surface functionalization, and biological applications.")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="program-page__cta-section">
            <div className="program-page__cta-content">
              <h2>{tx("Ready to Join Us?")}</h2>
              <p>{interpolate(tx("Start your journey in {name} today."), { name: program.name })}</p>
              <div className="program-page__cta-buttons">
                <button className="program-page__btn program-page__btn--primary">
                  {tx("Start Your Application")}
                </button>
                <button className="program-page__btn program-page__btn--outline">
                  {tx("Contact Admissions")}
                </button>
                <button className="program-page__btn program-page__btn--secondary">
                  {tx("Schedule a Visit")}
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
