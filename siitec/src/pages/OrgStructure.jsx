import React, { useState } from 'react';
import '../styles/OrgStructure.css';

const OrgStructure = () => {
  const [expandedSection, setExpandedSection] = useState('deputy');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="org-container">
      {/* Header Section */}
      <header className="org-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">ORGANIZATIONAL STRUCTURE</h1>
          <p className="header-subtitle">School of Integrated Innovative Technology</p>
          <p className="header-institution">King Mongkut's Institute of Technology Ladkrabang</p>
        </div>
      </header>

      <div className="org-content">
        {/* Dean Section */}
        <div className="dean-section">
          <div className="dean-card">
            <div className="dean-badge">DEAN</div>
            <h3 className="dean-name">รศ.ดร.วิภู ศรีสินลอย</h3>
            <div className="dean-underline"></div>
          </div>
        </div>

        {/* Deputy Deans */}
        <section className="org-section">
          <button 
            className="section-toggle"
            onClick={() => toggleSection('deputy')}
            aria-expanded={expandedSection === 'deputy'}
          >
            <h2 className="section-title-text">Deputy Dean</h2>
            <span className="toggle-indicator">
              {expandedSection === 'deputy' ? '−' : '+'}
            </span>
          </button>
          
          <div className={`section-content ${expandedSection === 'deputy' ? 'expanded' : ''}`}>
            <div className="position-grid">
              <article className="position-card">
                <h4 className="position-name">รศ.ดร.วันนิสา<br/>วงศ์วิวัชระพันธ์</h4>
                <div className="position-divider"></div>
                <p className="position-label">Work Supervision</p>
                <ul className="position-list">
                  <li>Finance and Accounting</li>
                  <li>Planning</li>
                </ul>
              </article>

              <article className="position-card">
                <h4 className="position-name">ผศ.ดร. นิติพร<br/>กำธนมาน</h4>
                <div className="position-divider"></div>
                <p className="position-label">Work Supervision</p>
                <ul className="position-list">
                  <li>Academic Affairs</li>
                  <li>Curriculum Quality Assurance (AUN-QA)</li>
                </ul>
              </article>

              <article className="position-card">
                <h4 className="position-name">ผศ.ดร. อนันต์<br/>สืบไชย</h4>
                <div className="position-divider"></div>
                <p className="position-label">Work Supervision</p>
                <ul className="position-list">
                  <li>Student Affairs</li>
                  <li>Buildings and Facilities</li>
                </ul>
              </article>

              <article className="position-card">
                <h4 className="position-name">รศ.ดร. อดุลย์<br/>กอบศิริ</h4>
                <div className="position-divider"></div>
                <p className="position-label">Work Supervision</p>
                <ul className="position-list">
                  <li>Research</li>
                  <li>Personnel</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Assistant Deans */}
        <section className="org-section">
          <button 
            className="section-toggle"
            onClick={() => toggleSection('assistant')}
            aria-expanded={expandedSection === 'assistant'}
          >
            <h2 className="section-title-text">Assistant Dean</h2>
            <span className="toggle-indicator">
              {expandedSection === 'assistant' ? '−' : '+'}
            </span>
          </button>
          
          <div className={`section-content ${expandedSection === 'assistant' ? 'expanded' : ''}`}>
            <div className="position-grid">
              <article className="position-card">
                <h4 className="position-name">รศ.ดร.ดารณี<br/>พรหมไธสง</h4>
                <div className="position-divider"></div>
                <p className="position-label">Work Supervision</p>
                <ul className="position-list">
                  <li>International Business</li>
                  <li>Procurement</li>
                </ul>
              </article>

              <article className="position-card">
                <h4 className="position-name">ผศ.ดร. พลอยไพลิน<br/>ยอดศิริ</h4>
                <div className="position-divider"></div>
                <p className="position-label">Work Supervision</p>
                <ul className="position-list">
                  <li>Public Relations</li>
                  <li>Educational Quality Assurance</li>
                  <li>Risk Management/ITA</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Head of Department */}
        <section className="org-section">
          <button 
            className="section-toggle"
            onClick={() => toggleSection('departments')}
            aria-expanded={expandedSection === 'departments'}
          >
            <h2 className="section-title-text">Head of Department</h2>
            <span className="toggle-indicator">
              {expandedSection === 'departments' ? '−' : '+'}
            </span>
          </button>
          
          <div className={`section-content ${expandedSection === 'departments' ? 'expanded' : ''}`}>
            <div className="department-grid">
              <article className="department-card">
                <h4 className="department-title">Department of Nanoscience and Nanotechnology</h4>
                <div className="department-divider"></div>
                <p className="department-head">รศ.ดร.กรกช อ่อนละออ</p>
                <p className="department-support">Academic Support: Lecturer</p>
              </article>

              <article className="department-card">
                <h4 className="department-title">Department of Manufacturing System Technology</h4>
                <div className="department-divider"></div>
                <p className="department-head">ผศ.ดร.กมล วะธิภัญญกุล</p>
                <p className="department-support">Academic Support: Lecturer</p>
              </article>
            </div>
          </div>
        </section>

        {/* Head of Center */}
        <section className="org-section">
          <button 
            className="section-toggle"
            onClick={() => toggleSection('centers')}
            aria-expanded={expandedSection === 'centers'}
          >
            <h2 className="section-title-text">Head of Center</h2>
            <span className="toggle-indicator">
              {expandedSection === 'centers' ? '−' : '+'}
            </span>
          </button>
          
          <div className={`section-content ${expandedSection === 'centers' ? 'expanded' : ''}`}>
            <div className="center-grid">
              <article className="center-card">
                <h4 className="center-title">Center of Industrial Robots and Automation</h4>
                <p className="center-acronym">(CiRA)</p>
                <div className="center-divider"></div>
                <p className="center-head">ผศ.ดร.สันทัด ชูวงศ์อินทร์</p>
                <p className="center-support">Technical Support: Engineer</p>
              </article>

              <article className="center-card">
                <h4 className="center-title">Advanced Technology Testing and Analysis Center</h4>
                <p className="center-acronym">(ATTAC)</p>
                <div className="center-divider"></div>
                <p className="center-head">รศ.ดร.นวมินทร์ ขยันกิจ</p>
                <p className="center-support">Technical Support: Scientist</p>
              </article>

              <article className="center-card">
                <h4 className="center-title">Academy of Innovative Semiconductor</h4>
                <p className="center-acronym">(KAISEM)</p>
                <div className="center-divider"></div>
                <p className="center-head">รศ.ดร.สันธนา กศธิธร</p>
              </article>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="org-footer">
        <p>© 2024 School of Integrated Innovative Technology — KMITL</p>
      </footer>
    </div>
  );
};

export default OrgStructure;