import React, { useState, useMemo } from 'react';
import '../styles/LecturerPage.css';
// NANO Department Imports
import AssocProfDrApilkuckEiad from '../assets/nano/Assoc. Prof. Dr.Apiluck Eiad-Ua.jpg';
import AssocProfDrBenchapolTunhoo from '../assets/nano/Assoc. Prof. Dr.Benchapol Tunhoo.png';
import AssocProfDrDarineePhromyothin from '../assets/nano/Assoc. Prof. Dr.Darinee Phromyothin.jpg';
import AssocProfDrKanokithBoonyarattanak from '../assets/nano/Assoc. Prof. Dr.Kanokthip Boonyarattanakalin.jpg';
import AssocProfDrKorakotOnlaor from '../assets/nano/Assoc. Prof. Dr.Korakot Onlaor.png';
import AssocProfDrNavaphanKayunkid from '../assets/nano/Assoc. Prof. Dr.Navaphun Kayunkid.png';
import AssocProfDrSakonRahong from '../assets/nano/Assoc. Prof. Dr.Sakon Rahong.png';
import AssocProfDrSuteChutipajit from '../assets/nano/Assoc. Prof. Dr.Sutee Chutipaijiti.png';
import AssocProfDrTosapolMalungnot from '../assets/nano/Assoc. Prof. Dr.Tosapol Malungnont.png';
import AssocProfDrWanichayaMekprasart from '../assets/nano/Assoc. Prof. Dr.Wanichaya Mekprasart.jpg';
import AssocProfDrWanwilaiVittayakorn from '../assets/nano/Assoc. Prof. Dr.Wanwilai Vittayakorn.png';
import AssocProfDrWinaddaWongwiriyapan from '../assets/nano/Assoc. Prof. Dr.Winadda Wongwiriyapan.png';
import AssocProfDrAdirekRangkasidorn from '../assets/nano/Asst. Prof. Dr.Adirek Rangkasidorn.png';
import AssocProfDrKanoknanPhacheerak from '../assets/nano/Asst. Prof. Dr.Kanoknan Phacheerak.jpg';
import AssocProfDrKittiphongAmnuyswat from '../assets/nano/Asst. Prof. Dr.Kittiphong Amnuyswat.png';
import AssocProfDrMayureePhonyiumReilly from '../assets/nano/Asst. Prof. Dr.Mayuree Phonyium Reilly.png';
import AssocProfDrPitipornThanomngam from '../assets/nano/Asst. Prof. Dr.Pitiporn Thanomngam.png';
import AssocProfDrSupamasWirunchit from '../assets/nano/Asst. Prof. Dr.Supamas Wirunchit.png';
import AssocProfDrThutiyapornThiwawong from '../assets/nano/Asst. Prof. Dr.Thutiyaporn Thiwawong.jpg';

// MANU Department Imports
import AssocProfDrJatupornThongsri from '../assets/manu/Assoc.Prof.Dr.Jatuporn Thongsri.png';
import AssocProfDrRachsakSakdanuphab from '../assets/manu/Assoc. Prof. Dr.Rachsak Sakdanuphab.png';
import AssocProfDrChatpolPakasiri from '../assets/manu/Assoc.Prof.Dr.Chatrpol Pakasiri.jpg';
import AssocProfDrSanthadChuwongin from '../assets/manu/Assoc.Prof.Dr.Santhad Chuwongin.png';
import AsstProfDrKomritJaksukam from '../assets/manu/Asst. Prof. Dr.Komkrit Jaksukam.png';
import AsstProfDrAnantaSinchai from '../assets/manu/Asst.Prof.Dr.Ananta Sinchai.png';
import AsstProfDrKamolWasapinyokul from '../assets/manu/Asst.Prof.Dr.Kamol Wasapinyokul.png';
import AsstProfDrKittiponKankhuthod from '../assets/manu/Asst.Prof.Dr.Kittipon Kankhunthod.png';
import AsstProfDrPiyayapinYongsiri from '../assets/manu/Asst.Prof.Dr.Ploypailin Yongsiri.jpg';
import DrNatthawirotSomjaiaroen from '../assets/manu/Dr.Natthawirot Somjaijaroen.png';
import ProfDrChanonWarisarn from '../assets/manu/Prof. Dr.Chanon Warisarn.png';

const LecturerPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Sample lecturer data - replace with your actual data
 const lecturers = [
    // NANO Department Lecturers
    {
      id: 1,
      name: 'Assoc. Prof. Dr. Apilkuck Eiad-Ua',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'apiluck.ei@kmitl.ac.th',
      phone: '02-3298000 ext. 3132',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=8539060400',
      image: AssocProfDrApilkuckEiad,
    },
    {
      id: 2,
      name: 'Assoc. Prof. Dr. Benchapol Tunhoo',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'benchapol.tu@kmitl.ac.th',
      phone: '02-3298000 ext. 3128',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=19640778900',
      image: AssocProfDrBenchapolTunhoo,
    },
    {
      id: 3,
      name: 'Assoc. Prof. Dr. Darinee Phromyothin',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'darinee.ph@kmitl.ac.th',
      phone: '02-3298000 ext. 3133',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=55082047500',
      image: AssocProfDrDarineePhromyothin,
    },
    {
      id: 4,
      name: 'Assoc. Prof. Dr. Kanokthip Boonyarattanak',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'kanokthip.bo@kmitl.ac.th',
      phone: '02-3298000 ext. 2176',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=36833541100',
      image: AssocProfDrKanokithBoonyarattanak,
    },
    {
      id: 5,
      name: 'Assoc. Prof. Dr. Korakot Onlaor',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'korakot.on@kmitl.ac.th',
      phone: '02-3298000 ext. 3128',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=35362507400',
      image: AssocProfDrKorakotOnlaor,
    },
    {
      id: 6,
      name: 'Assoc. Prof. Dr. Navaphan Kayunkid',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'navaphun.ka@kmitl.ac.th',
      phone: '02-3298000 ext. 2176',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=19639732300',
      image: AssocProfDrNavaphanKayunkid,
    },
    {
      id: 7,
      name: 'Assoc. Prof. Dr. Sakon Rahong',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'sakon.ra@kmitl.ac.th',
      phone: '02-3298000 ext. 3075',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=8558302600',
      image: AssocProfDrSakonRahong,
    },
    // {
    //   id: 8,
    //   name: 'Assoc. Prof. Dr. Sakorn Rahong',
    //   title: 'Associate Professor',
    //   department: 'NANO',
    //   email: 'sakorn.ra@kmitl.ac.th',
    //   phone: '02-3298000 ext. 3075',
    //   researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=8558302600',
    //   image: AssocProfDrSakornRahong,
    // },
    {
      id: 9,
      name: 'Assoc. Prof. Dr. Sute Chutipajit',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'sutee.ch@kmitl.ac.th',
      phone: '02-3298000 ext. 3140',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=35344429600',
      image: AssocProfDrSuteChutipajit,
    },
    {
      id: 10,
      name: 'Assoc. Prof. Dr. Tosapol Malungnot',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'tosapol.ma@kmitl.ac.th',
      phone: '02-3298000 ext. 2173',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=36622681600',
      image: AssocProfDrTosapolMalungnot,
    },
    {
      id: 11,
      name: 'Assoc. Prof. Dr. Wanichaya Mekprasart',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'wanichaya.me@kmitl.ac.th',
      phone: '02-3298000 ext. 2176',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=36105458200',
      image: AssocProfDrWanichayaMekprasart,
    },
    {
      id: 12,
      name: 'Assoc. Prof. Dr. Wanwilai Vittayakorn',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'wanwilai.vi@kmitl.ac.th',
      phone: '02-3298000 ext. 2169',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=26422631000',
      image: AssocProfDrWanwilaiVittayakorn,
    },
    {
      id: 13,
      name: 'Assoc. Prof. Dr. Winadda Wongwiriyapan',
      title: 'Associate Professor',
      department: 'NANO',
      email: 'winadda.wo@kmitl.ac.th',
      phone: '02-3298000 ext. 3133',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=6507140809',
      image: AssocProfDrWinaddaWongwiriyapan,
    },
    {
      id: 14,
      name: 'Asst. Prof. Dr. Adirek Rangkasidorn',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'adirek.ra@kmitl.ac.th',
      phone: '02-3298000 ext. 3075',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=55659954200',
      image: AssocProfDrAdirekRangkasidorn,
    },
    {
      id: 15,
      name: 'Asst. Prof. Dr. Kanoknan Phacheerak',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'kanoknan.ph@kmitl.ac.th',
      phone: '02-3298000 ext. 3132',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=16317407800',
      image: AssocProfDrKanoknanPhacheerak,
    },
    {
      id: 16,
      name: 'Asst. Prof. Dr. Kittiphong Amnuyswat',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'kittiphong.am@kmitl.ac.th',
      phone: '02-3298000 ext. 3075',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=35361698900',
      image: AssocProfDrKittiphongAmnuyswat,
    },
    {
      id: 17,
      name: 'Asst. Prof. Dr. Mayuree Phonyium Reilly',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'mayuree.ph@kmitl.ac.th',
      phone: '02-3298000 ext. 2173',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=23991156500',
      image: AssocProfDrMayureePhonyiumReilly,
    },
    {
      id: 18,
      name: 'Asst. Prof. Dr. Pitiporn Thanomngam',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'pitiporn.th@kmitl.ac.th',
      phone: '02-3298000 ext. 3081',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=6506862906',
      image: AssocProfDrPitipornThanomngam,
    },
    {
      id: 19,
      name: 'Asst. Prof. Dr. Supamas Wirunchit',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'supamas.wi@kmitl.ac.th',
      phone: '02-3298000 ext. 3075',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=16320167600',
      image: AssocProfDrSupamasWirunchit,
    },
    {
      id: 20,
      name: 'Asst. Prof. Dr. Thutiyaporn Thiwawong',
      title: 'Assistant Professor',
      department: 'NANO',
      email: 'thutiyaporn.th@kmitl.ac.th',
      phone: '02-3298000 ext. 3128',
      researchLink: 'https://www.scopus.com/authid/detail.uri?authorId=19640410000',
      image: AssocProfDrThutiyapornThiwawong,
    },
    // MANU Department Lecturers
    {
      id: 21,
      name: 'Assoc. Prof. Dr. Jatuporn Thongsri',
      title: 'Associate Professor (Associate Dean)',
      department: 'MANU',
      email: 'jatuporn.th@kmitl.ac.th',
      phone: '02-329-8264 ext. 2183',
      office: '55-Year Chalermprakiat Building, Room 406',
      research: 'Finite Element Analysis, Computational Fluid Dynamics and Numerical Method for Applied Mechanics',
      image: AssocProfDrJatupornThongsri,
    },
    {
      id: 22,
      name: 'Assoc. Prof. Dr. Rachsak Sakdanuphab',
      title: 'Associate Professor',
      department: 'MANU',
      email: 'rachsak.sa@kmitl.ac.th',
      phone: '02-329-8264 ext. 2183',
      office: '55-Year Chalermprakiat Building, Room 405',
      research: 'Thin film semiconductor devices such as solar cells and thermoelectric module',
      image: AssocProfDrRachsakSakdanuphab,
    },
    {
      id: 23,
      name: 'Assoc. Prof. Dr. Chatrpol Pakasiri',
      title: 'Associate Professor (Dean)',
      department: 'MANU',
      email: 'chatrpol.pa@kmitl.ac.th',
      phone: '02-329-8264 ext. 2182',
      office: '55-Year Chalermprakiat Building, Room 404',
      research: 'Wireless Communication, electromagnetic compatibility research, RF/Microwave active and passive Design',
      image: AssocProfDrChatpolPakasiri,
    },
    {
      id: 24,
      name: 'Assoc. Prof. Dr. Santhad Chuwongin',
      title: 'Assistant Professor (Head of CiRA)',
      department: 'MANU',
      email: 'santhad.ch@kmitl.ac.th',
      phone: '02-329-8264 ext. 2183',
      office: '55-Year Chalermprakiat Building, Room 405',
      research: 'Industrial Robot & AI, Deep Learning, Machine Learning, Optoelectronic devices',
      image: AssocProfDrSanthadChuwongin,
    },
    {
      id: 25,
      name: 'Asst. Prof. Dr. Komrit Jaksukam',
      title: 'Assistant Professor',
      department: 'MANU',
      email: 'komgrit.ja@kmitl.ac.th',
      phone: '02-329-8271',
      office: '55-Year Chalermprakiat Building',
      research: 'Wireless sensor networks, Embedded system, Multi-hop networks',
      image: AsstProfDrKomritJaksukam,
    },
    {
      id: 26,
      name: 'Asst. Prof. Dr. Ananta Sinchai',
      title: 'Assistant Professor (Associate Dean)',
      department: 'MANU',
      email: 'ananta.sin@kmitl.ac.th',
      phone: '02-329-8271 ext. 2182',
      office: '55-Year Chalermprakiat Building, Room 404',
      research: 'Image processing, Machine learning, IoT, Automation',
      image: AsstProfDrAnantaSinchai,
    },
    {
      id: 27,
      name: 'Asst. Prof. Dr. Kamol Wasapinyokul',
      title: 'Assistant Professor (Head of Department)',
      department: 'MANU',
      email: 'kamol.wa@kmitl.ac.th',
      phone: '02-329-8264 ext. 2183',
      office: '55-Year Chalermprakiat Building, Room 405',
      research: 'Optoelectronics, inorganic and organic semiconductor-based devices',
      image: AsstProfDrKamolWasapinyokul,
    },
    {
      id: 28,
      name: 'Asst. Prof. Dr. Kittipon Kankhuthod',
      title: 'Professor',
      department: 'MANU',
      email: 'kittipon.ka@kmitl.ac.th',
      phone: '02-329-8264 ext. 2182',
      office: '55-Year Chalermprakiat Building, Room 404',
      research: 'Industrial robot and Automation, AI, Signal processing, and Data analysis',
      image: AsstProfDrKittiponKankhuthod,
    },
    {
      id: 29,
      name: 'Asst. Prof. Dr. Ploypailin Yongsiri',
      title: 'Assistant Professor (Assistant Dean)',
      department: 'MANU',
      email: 'ploypailin.yo@kmitl.ac.th',
      phone: '02-329-8271 ext. 2182',
      office: '55-Year Chalermprakiat Building',
      research: 'Glass and Glass-Ceramic Processing, Electroceramics, Ferroelectric Materials',
      image: AsstProfDrPiyayapinYongsiri,
    },
    {
      id: 30,
      name: 'Dr. Natthawirot Somjaiaroen',
      title: 'Professor',
      department: 'MANU',
      email: 'natthawirot.so@kmitl.ac.th',
      phone: '02-329-8264 ext. 2182',
      office: '55-Year Chalermprakiat Building',
      research: 'Mechanical Engineering, Manufacturing Systems',
      image: DrNatthawirotSomjaiaroen,
    },
    {
      id: 31,
      name: 'Prof. Dr. Chanon Warisarn',
      title: 'Associate Professor',
      department: 'MANU',
      email: 'chanon.wa@kmitl.ac.th',
      phone: '02-329-8264 ext. 2150',
      office: '55-Year Chalermprakiat Building, Room 406',
      research: 'Magnetic recording technology, micromagnetic modeling, coding and signal processing',
      image: ProfDrChanonWarisarn,
    },
  ];


  // Filter lecturers based on search and department
  const filteredLecturers = useMemo(() => {
    return lecturers.filter(lecturer => {
  
      const term = searchQuery.toLowerCase();
      
      const name = (lecturer.name || "").toLowerCase();
      const thaiName = (lecturer.thaiName || ""); 
      const research = (lecturer.research || "").toLowerCase();
      const title = (lecturer.title || "").toLowerCase(); 
      
      const matchesSearch = 
        name.includes(term) ||
        thaiName.includes(searchQuery) ||
        research.includes(term) ||
        title.includes(term); 
      
      const matchesDepartment = 
        selectedDepartment === 'all' || lecturer.department === selectedDepartment;
      
      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);

  // Count lecturers by department
  const amiCount = lecturers.filter(l => l.department === 'MANU').length;
  const cmitCount = lecturers.filter(l => l.department === 'NANO').length;

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
            className={`filter-btn ${selectedDepartment === 'MANU' ? 'active' : ''}`}
            onClick={() => setSelectedDepartment('MANU')}
          >
            MANU
            <span className="count-badge">{amiCount}</span>
          </button>
          <button
            className={`filter-btn ${selectedDepartment === 'NANO' ? 'active' : ''}`}
            onClick={() => setSelectedDepartment('NANO')}
          >
            NANO
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
                  
                  <div className="people-contact-info">
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
                    
                    {/* <div className="info-item">
                      <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M13 6.5c0 4-5 8-5 8s-5-4-5-8a5 5 0 0 1 10 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="info-text">{lecturer.office}</span>
                    </div> */}
                  </div>
                  
                  <div className="research-area">
                    <h4 className="research-label">Research Interests</h4>
                    {lecturer.department === 'CMIT' ? (
                    <a 
                    href={lecturer.researchLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="research-link">
                    Research Profile &rarr;
                    </a>) : (
                    <p className="research-text">{lecturer.research}</p>)}
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