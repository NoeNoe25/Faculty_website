import React, { useState } from 'react';
import '../styles/OrgStructure.css';

const OrgStructure = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="org-chart-container">
      {/* Header */}
      <header className="org-chart-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <div className="header-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="header-title">Organizational Chart</h1>
          <p className="header-subtitle">School of Integrated Innovative Technology</p>
          <p className="header-institution">King Mongkut's Institute of Technology Ladkrabang</p>
        </div>
      </header>

      {/* Chart Content */}
      <div className="chart-wrapper">
        <div className="chart-content">
          
          {/* Level 1: Dean */}
          <div className="chart-level">
            <div 
              className={`chart-node dean-node ${selectedNode === 'dean' ? 'selected' : ''}`}
              onClick={() => setSelectedNode(selectedNode === 'dean' ? null : 'dean')}
            >
              <div className="node-glow"></div>
              <div className="node-content">
                <div className="node-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="node-text">
                  <p className="node-label">Dean</p>
                  <h3 className="node-name">รศ.ดร.วิภู ศรีสินลอย</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Connector Line */}
          <div className="vertical-connector"></div>

          {/* Level 2: Deputy Deans */}
          <div className="chart-level">
            <div className="level-badge deputy-badge">Deputy Deans</div>
            <div className="horizontal-connector deputy-connector">
              <div className="connector-line"></div>
              <div className="connector-dot dot-1"></div>
              <div className="connector-dot dot-2"></div>
              <div className="connector-dot dot-3"></div>
              <div className="connector-dot dot-4"></div>
            </div>
            
            <div className="chart-row deputy-row">
              {[
                { name: 'รศ.ดร.วันนิสา\nวงศ์วิวัชระพันธ์', tasks: ['Finance and Accounting', 'Planning'] },
                { name: 'ผศ.ดร. นิติพร\nกำธนมาน', tasks: ['Academic Affairs', 'Curriculum QA'] },
                { name: 'ผศ.ดร. อนันต์\nสืบไชย', tasks: ['Student Affairs', 'Buildings'] },
                { name: 'รศ.ดร. อดุลย์\nกอบศิริ', tasks: ['Research', 'Personnel'] }
              ].map((deputy, idx) => (
                <div 
                  key={idx}
                  className={`chart-node deputy-node ${selectedNode === `deputy-${idx}` ? 'selected' : ''}`}
                  onClick={() => setSelectedNode(selectedNode === `deputy-${idx}` ? null : `deputy-${idx}`)}
                >
                  <div className="node-content">
                    <div className="node-badge">{idx + 1}</div>
                    <h4 className="node-name small">{deputy.name}</h4>
                    <ul className="node-tasks">
                      {deputy.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Level 3: Assistant Deans */}
          <div className="chart-level">
            <div className="level-badge assistant-badge">Assistant Deans</div>
            <div className="horizontal-connector assistant-connector">
              <div className="connector-line"></div>
              <div className="connector-dot dot-1"></div>
              <div className="connector-dot dot-2"></div>
            </div>
            
            <div className="chart-row assistant-row">
              {[
                { name: 'รศ.ดร.ดารดี\nพรหมไธสง', tasks: ['International Business', 'Procurement'] },
                { name: 'ผศ.ดร. พลอยไพลิน\nยอดศิริ', tasks: ['Public Relations', 'Quality Assurance', 'Risk Management'] }
              ].map((assistant, idx) => (
                <div 
                  key={idx}
                  className={`chart-node assistant-node ${selectedNode === `assistant-${idx}` ? 'selected' : ''}`}
                  onClick={() => setSelectedNode(selectedNode === `assistant-${idx}` ? null : `assistant-${idx}`)}
                >
                  <div className="node-content">
                    <div className="node-badge">{idx + 1}</div>
                    <h4 className="node-name small">{assistant.name}</h4>
                    <ul className="node-tasks">
                      {assistant.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Level 4: Departments and Centers */}
          <div className="chart-level">
            <div className="chart-row bottom-row">
              {/* Departments */}
              <div className="chart-section">
                <div className="level-badge department-badge">Departments</div>
                <div className="horizontal-connector department-connector">
                  <div className="connector-line"></div>
                  <div className="connector-dot dot-1"></div>
                  <div className="connector-dot dot-2"></div>
                </div>
                
                <div className="chart-column">
                  {[
                    { title: 'Nanoscience and\nNanotechnology', head: 'รศ.ดร.กรกช อ่อนละออ' },
                    { title: 'Manufacturing System\nTechnology', head: 'ผศ.ดร.กมล วะธิ ภักกกุล' }
                  ].map((dept, idx) => (
                    <div 
                      key={idx}
                      className={`chart-node department-node ${selectedNode === `dept-${idx}` ? 'selected' : ''}`}
                      onClick={() => setSelectedNode(selectedNode === `dept-${idx}` ? null : `dept-${idx}`)}
                    >
                      <div className="node-content">
                        <div className="node-icon small">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="node-text">
                          <h4 className="node-title">{dept.title}</h4>
                          <p className="node-subtitle">{dept.head}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Centers */}
              <div className="chart-section">
                <div className="level-badge center-badge">Centers</div>
                <div className="horizontal-connector center-connector">
                  <div className="connector-line"></div>
                  <div className="connector-dot dot-1"></div>
                  <div className="connector-dot dot-2"></div>
                  <div className="connector-dot dot-3"></div>
                </div>
                
                <div className="chart-column">
                  {[
                    { title: 'Industrial Robots and\nAutomation', acronym: 'CiRA', head: 'ผศ.ดร.สันทัด ชูวงศ์อินทร์' },
                    { title: 'Technology Testing\n& Analysis', acronym: 'ATTAC', head: 'รศ.ดร.นวมินทร์ ขยันกิจ' },
                    { title: 'Innovative\nSemiconductor', acronym: 'KAISEM', head: 'รศ.ดร.สันธนา กศธิธร' }
                  ].map((center, idx) => (
                    <div 
                      key={idx}
                      className={`chart-node center-node ${selectedNode === `center-${idx}` ? 'selected' : ''}`}
                      onClick={() => setSelectedNode(selectedNode === `center-${idx}` ? null : `center-${idx}`)}
                    >
                      <div className="node-content">
                        <div className="node-icon small">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="node-text">
                          <div className="node-title-row">
                            <h4 className="node-title">{center.title}</h4>
                            <span className="node-acronym">{center.acronym}</span>
                          </div>
                          <p className="node-subtitle">{center.head}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Legend */}
      <div className="chart-legend">
        <h3 className="legend-title">Legend</h3>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-color dean-color"></div>
            <span>Dean</span>
          </div>
          <div className="legend-item">
            <div className="legend-color deputy-color"></div>
            <span>Deputy Deans</span>
          </div>
          <div className="legend-item">
            <div className="legend-color assistant-color"></div>
            <span>Assistant Deans</span>
          </div>
          <div className="legend-item">
            <div className="legend-color department-color"></div>
            <span>Departments</span>
          </div>
          <div className="legend-item">
            <div className="legend-color center-color"></div>
            <span>Centers</span>
          </div>
        </div>
        <p className="legend-hint">💡 Click on any box to highlight it</p>
      </div>

     
    </div>
  );
};

export default OrgStructure;