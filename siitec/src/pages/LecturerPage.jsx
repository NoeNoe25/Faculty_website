import React, { useState, useMemo } from 'react';
import '../styles/LecturerPage.css';
import professor1 from '../assets/professor1.jpg';
const LecturerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Sample lecturer data - replace with your actual data
  const lecturers = [
    {
      id: 1,
      name: 'Dr. Somchai Tanaka',
      thaiName: 'ดร. สมชาย ทานากะ',
      title: 'Associate Professor',
      department: 'AMI',
      email: 'somchai.t@kmitl.ac.th',
      phone: '+66 2 329 8000',
      office: 'AMI Building, Room 301',
      research: 'Artificial Intelligence, Machine Learning',
      image: professor1
    },
    {
      id: 2,
      name: 'Dr. Siriwan Patel',
      thaiName: 'ดร. ศิริวรรณ พาเทล',
      title: 'Assistant Professor',
      department: 'AMI',
      email: 'siriwan.p@kmitl.ac.th',
      phone: '+66 2 329 8001',
      office: 'AMI Building, Room 305',
      research: 'Data Science, Neural Networks',
      image: professor1
    },
    {
      id: 3,
      name: 'Dr. Anirut Kumar',
      thaiName: 'ดร. อนิรุทธิ์ กุมาร',
      title: 'Professor',
      department: 'AMI',
      email: 'anirut.k@kmitl.ac.th',
      phone: '+66 2 329 8002',
      office: 'AMI Building, Room 310',
      research: 'Computer Vision, Deep Learning',
      image: professor1
    },
    {
      id: 4,
      name: 'Dr. Natthaphon Lee',
      thaiName: 'ดร. ณัฐพล ลี',
      title: 'Lecturer',
      department: 'AMI',
      email: 'natthaphon.l@kmitl.ac.th',
      phone: '+66 2 329 8003',
      office: 'AMI Building, Room 308',
      research: 'Robotics, Automation Systems',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Dr. Praewa Wilson',
      thaiName: 'ดร. แพรวา วิลสัน',
      title: 'Associate Professor',
      department: 'CMIT',
      email: 'praewa.w@kmitl.ac.th',
      phone: '+66 2 329 8010',
      office: 'CMIT Building, Room 201',
      research: 'Software Engineering, Cloud Computing',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      name: 'Dr. Kittipong Chen',
      thaiName: 'ดร. กิตติพงษ์ เฉิน',
      title: 'Assistant Professor',
      department: 'CMIT',
      email: 'kittipong.c@kmitl.ac.th',
      phone: '+66 2 329 8011',
      office: 'CMIT Building, Room 205',
      research: 'Cybersecurity, Network Systems',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 7,
      name: 'Dr. Siriporn Nakamura',
      thaiName: 'ดร. ศิริพร นากามูระ',
      title: 'Professor',
      department: 'CMIT',
      email: 'siriporn.n@kmitl.ac.th',
      phone: '+66 2 329 8012',
      office: 'CMIT Building, Room 210',
      research: 'Database Systems, Big Data Analytics',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 8,
      name: 'Dr. Thanakorn Singh',
      thaiName: 'ดร. ธนากร สิงห์',
      title: 'Lecturer',
      department: 'CMIT',
      email: 'thanakorn.s@kmitl.ac.th',
      phone: '+66 2 329 8013',
      office: 'CMIT Building, Room 208',
      research: 'Mobile Computing, IoT Systems',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 9,
      name: 'Dr. Waraporn Martinez',
      thaiName: 'ดร. วราพร มาร์ติเนซ',
      title: 'Assistant Professor',
      department: 'CMIT',
      email: 'waraporn.m@kmitl.ac.th',
      phone: '+66 2 329 8014',
      office: 'CMIT Building, Room 215',
      research: 'Human-Computer Interaction, UX Design',
      image: 'https://via.placeholder.com/150'
    }
  ];

  // Filter lecturers based on search and department
  const filteredLecturers = useMemo(() => {
    return lecturers.filter(lecturer => {
      const matchesSearch = 
        lecturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lecturer.thaiName.includes(searchQuery) ||
        lecturer.research.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDepartment = 
        selectedDepartment === 'all' || lecturer.department === selectedDepartment;
      
      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);

  // Count lecturers by department
  const amiCount = lecturers.filter(l => l.department === 'AMI').length;
  const cmitCount = lecturers.filter(l => l.department === 'CMIT').length;

  return (
    <div className="lecturer-container">
      {/* Header */}
      <header className="lecturer-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">Our Lecturers</h1>
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
              placeholder="Search by name or research interest..."
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

        {/* Department Filter */}
        <div className="filter-section">
          <button
            className={`filter-btn ${selectedDepartment === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedDepartment('all')}
          >
            All Departments
            <span className="count-badge">{lecturers.length}</span>
          </button>
          <button
            className={`filter-btn ${selectedDepartment === 'AMI' ? 'active' : ''}`}
            onClick={() => setSelectedDepartment('AMI')}
          >
            AMI
            <span className="count-badge">{amiCount}</span>
          </button>
          <button
            className={`filter-btn ${selectedDepartment === 'CMIT' ? 'active' : ''}`}
            onClick={() => setSelectedDepartment('CMIT')}
          >
            CMIT
            <span className="count-badge">{cmitCount}</span>
          </button>
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <p>
          {filteredLecturers.length} {filteredLecturers.length === 1 ? 'lecturer' : 'lecturers'} found
          {searchQuery && <span className="search-term"> for "{searchQuery}"</span>}
        </p>
      </div>

      {/* Lecturers Grid */}
      <div className="lecturers-content">
        {filteredLecturers.length > 0 ? (
          <div className="lecturers-grid">
            {filteredLecturers.map((lecturer) => (
              <article key={lecturer.id} className="lecturer-card">
                <div className="card-header">
                  <div className="lecturer-image-wrapper">
                    <img 
                      src={lecturer.image} 
                      alt={lecturer.name}
                      className="lecturer-image"
                    />
                    <div className="dept-badge">{lecturer.department}</div>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="lecturer-name">{lecturer.name}</h3>
                  <p className="lecturer-thai-name">{lecturer.thaiName}</p>
                  <p className="lecturer-title">{lecturer.title}</p>
                  
                  <div className="card-divider"></div>
                  
                  <div className="contact-info">
                    <div className="info-item">
                      <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2.5 5.5L8 9l5.5-3.5M3 11h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <a href={`mailto:${lecturer.email}`} className="info-link">
                        {lecturer.email}
                      </a>
                    </div>
                    
                    <div className="info-item">
                      <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14 11v2a1.5 1.5 0 0 1-1.5 1.5A12.5 12.5 0 0 1 2 4 1.5 1.5 0 0 1 3.5 2.5H6l1 3-1.5 1a9 9 0 0 0 5 5l1-1.5 3 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="info-text">{lecturer.phone}</span>
                    </div>
                    
                    <div className="info-item">
                      <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M13 6.5c0 4-5 8-5 8s-5-4-5-8a5 5 0 0 1 10 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="info-text">{lecturer.office}</span>
                    </div>
                  </div>
                  
                  <div className="research-area">
                    <h4 className="research-label">Research Interests</h4>
                    <p className="research-text">{lecturer.research}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <svg className="no-results-icon" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="26" cy="26" r="18" stroke="currentColor" strokeWidth="3"/>
              <path d="M39 39l16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <h3>No lecturers found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="lecturer-footer">
        <p>© 2024 School of Integrated Innovative Technology — KMITL</p>
      </footer>
    </div>
  );
};

export default LecturerPage;