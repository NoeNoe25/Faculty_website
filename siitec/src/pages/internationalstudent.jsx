import React, { useState } from 'react';
import { 
  FaHome, FaGraduationCap, FaBed, FaUtensils, FaBus, 
  FaRunning, FaGlobeAmericas, FaHandshake, FaPassport, 
  FaFileAlt, FaUsers, FaBook, FaUniversity, FaMapMarkerAlt,
  FaCalendar, FaClock, FaPhone, FaWifi, FaSnowflake,
  FaShower, FaHotTub, FaBicycle, FaSubway, FaMusic, FaPaintBrush, FaHandsHelping, FaHeart, FaExternalLinkAlt, FaFacebook, FaEnvelope,
} from 'react-icons/fa';
import { 
  GiMoneyStack, GiMeal, GiPayMoney, GiBank
} from 'react-icons/gi';
import { 
  MdLocalLibrary, MdGroups, MdSportsBasketball,
  MdOutlineEmergency
} from 'react-icons/md';
import { 
  HiAcademicCap
} from 'react-icons/hi';
import '../styles/internationalstudent.css';

// Import all your images
import dorm1 from '../assets/International students/dorm4.jpg';
import dorm2 from '../assets/International students/dorm2.jpg';
import dorm3 from '../assets/International students/dorm3.jpg';  
import dorm4 from '../assets/International students/dorm1.jpg';
import canteenA from '../assets/International students/canteen_A.jpg';
import canteenB from '../assets/International students/canteen_B.jpg';
import canteenC from '../assets/International students/canteen_c.png';
import eccFoodCourt from '../assets/International students/canteen_ecc.jpg';
import archiCafe from '../assets/International students/canteen_archi.png';

// Activity images - using existing ones as placeholders
import activity1 from '../assets/International students/canteen_A.jpg';
import activity2 from '../assets/International students/canteen_B.jpg';
import activity3 from '../assets/International students/canteen_c.png';
import activity4 from '../assets/International students/canteen_ecc.jpg';
import activity5 from '../assets/International students/canteen_archi.png';
import activity6 from '../assets/International students/dorm1.jpg';
import activity7 from '../assets/International students/dorm2.jpg';
import activity8 from '../assets/International students/dorm3.jpg';

import gym from '../assets/International students/gym.jpg';
import basketball from '../assets/International students/basketball.jpg';
import pool from '../assets/International students/pool.jpg';
import stadium from '../assets/International students/stadium.jpg';
import kmch from '../assets/International students/kmch.jpg';
import { usePhrases } from '../i18n/LanguageContext';
import phrases from '../i18n/content/international';
// Google Maps search link for a place on or near the KMITL campus.
const mapsSearchUrl = (place) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place}, Lat Krabang, Bangkok`)}`;

const InternationalStudentPage = () => {
  const tx = usePhrases(phrases);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubSection, setActiveSubSection] = useState(null);

  const navItems = [
    { id: 'home', label: tx('Home'), icon: <FaHome /> },
    { id: 'programs', label: tx('Programs'), icon: <FaGraduationCap /> },
    { id: 'campuslife', label: tx('Campus Life'), icon: <FaUniversity /> },
    { id: 'experience', label: tx('Experience'), icon: <FaRunning /> },
    { id: 'studentaffairs', label: tx('Student Affairs'), icon: <FaUsers /> },
  ];


  // Academic sub-sections for Programs
  const programSubSections = [
    { 
      id: 'kllc', 
      icon: <HiAcademicCap />,
      label: tx('KMITL LIFE Long Learning Center'),
      title: tx('KMITL LIFE Long Learning Center (KLLC)'),
      description: tx("Short courses, training and library services at KMITL's lifelong learning center")
    },
    { 
      id: 'academicsupport', 
      icon: <FaBook />,
      label: tx('Academic Support'),
      title: tx('Academic Support Services'),
      description: tx('Library services that support your study and research')
    },
    { 
      id: 'library', 
      icon: <MdLocalLibrary />,
      label: tx('Library & Study Spaces'),
      title: tx('Library & Study Spaces'),
      description: tx('Study spaces and resources available for students')
    },
  ];

  // Campus Life sub-sections
  const campusLifeSubSections = [
    { 
      id: 'housing', 
      icon: <FaBed />,
      label: tx('Housing'),
      title: tx('Accommodation'),
      description: tx('On-campus housing options for international students')
    },
    { 
      id: 'food', 
      icon: <FaUtensils />,
      label: tx('Food & Dining'),
      title: tx('Campus Dining & Canteens'),
      description: tx('Enjoy affordable Thai food and international dishes')
    },
    { 
      id: 'transportation', 
      icon: <FaBus />,
      label: tx('Getting Around'),
      title: tx('Transportation Services'),
      description: tx('Navigate the campus and city with our transportation options')
    },
    { 
      id: 'livingcosts', 
      icon: <GiMoneyStack />,
      label: tx('Living Costs'),
      title: tx('Finances & Living Costs'),
      description: tx('Essential information about estimated monthly living costs')
    },
  ];

  // Experience sub-sections
  const experienceSubSections = [
    { 
      id: 'clubs', 
      icon: <MdGroups />,
      label: tx('Clubs & Community'),
      title: tx('Student Clubs & Community'),
      description: tx('Get involved in student organizations and community activities')
    },
    { 
      id: 'sports', 
      icon: <FaRunning />,
      label: tx('Sports & Wellness'),
      title: tx('Sports & Wellness Activities'),
      description: tx('Stay active and healthy with our sports and wellness programs')
    },
    { 
      id: 'cultural', 
      icon: <FaGlobeAmericas />,
      label: tx('Cultural Activities'),
      title: tx('Cultural Exchange Activities'),
      description: tx('Experience diverse cultures through various activities and events')
    },
    { 
      id: 'networking', 
      icon: <FaHandshake />,
      label: tx('Student Networking'),
      title: tx('Student Networking Opportunities'),
      description: tx('Connect with fellow students and build your professional network')
    },
  ];

  // Student Affairs sub-sections
  const studentAffairsSubSections = [
    { 
      id: 'internationaloffice', 
      icon: <FaPassport />,
      label: tx('International Office'),
      title: tx('International Student Office'),
      description: tx('Support and services for international students')
    },
    { 
      id: 'visa', 
      icon: <FaFileAlt />,
      label: tx('Visa & Immigration'),
      title: tx('Visa & Immigration Support'),
      description: tx('Essential information about visas and immigration procedures')
    },
    { 
      id: 'emergency', 
      icon: <MdOutlineEmergency />,
      label: tx('Healthcare & Emergency'),
      title: tx('Healthcare & Emergency Services'),
      description: tx('Important contact information and emergency support')
    },
    
  ];

  // KLLC Programs data
  // KLLC programs, from https://www.kllc.kmitl.ac.th/
  const kllcPrograms = [
    {
      id: 1,
      name: tx('Upskill / Reskill Short Courses'),
      description: tx('Short, modular courses in deep technology and future skills for lifelong learners.'),
      details: [
        { icon: <FaCalendar />, label: tx('Format:'), value: tx('Short-term modular courses') },
        { icon: <FaUsers />, label: tx('Open to:'), value: tx('See each course on the KLLC website') },
      ],
    },
    {
      id: 2,
      name: tx('Training & Workshops'),
      description: tx('Regular workshops such as EndNote reference management and research database training.'),
      details: [
        { icon: <FaCalendar />, label: tx('Schedule:'), value: tx('See the KLLC event calendar') },
        { icon: <FaUsers />, label: tx('Format:'), value: tx('Onsite and online sessions') },
      ],
    },
    {
      id: 3,
      name: tx('Contact KLLC'),
      description: tx('Questions about courses, training or library services can be sent to KLLC directly.'),
      details: [
        { icon: <FaEnvelope />, label: tx('Email:'), value: 'lifelong@kmitl.ac.th' },
        { icon: <FaFacebook />, label: tx('Facebook:'), value: 'KMITL Lifelong Learning Center' },
      ],
    },
  ];

  // Library services for study and research, from KLLC and the KMITL International Affairs office
  const academicSupport = [
    {
      id: 1,
      title: tx('Library Orientation'),
      description: tx('Learn how to find books, journals and online resources in the KMITL library.'),
      details: [{ icon: <FaMapMarkerAlt />, label: tx('Where:'), value: tx('Central Library (KLLC)') }],
    },
    {
      id: 2,
      title: tx('Off-campus Access (VPN)'),
      description: tx('Search library e-resources from outside the campus through the KMITL SSL VPN.'),
      details: [{ icon: <FaUsers />, label: tx('Access:'), value: tx('KMITL student account') }],
    },
    {
      id: 3,
      title: tx('Inter-library Loan'),
      description: tx('Borrow and return materials from other Thai universities through the library.'),
      details: [{ icon: <FaMapMarkerAlt />, label: tx('Where:'), value: tx('Central Library (KLLC)') }],
    },
    {
      id: 4,
      title: tx('Campus Delivery'),
      description: tx('Books and journals can be delivered to you inside the campus.'),
      details: [{ icon: <FaMapMarkerAlt />, label: tx('Where:'), value: tx('Within KMITL Ladkrabang campus') }],
    },
  ];

  // Central library spaces and hours, from https://www.kllc.kmitl.ac.th/contact/
  const librarySpaces = [
    {
      id: 1,
      name: tx('Opening Hours'),
      description: tx('Hours of the Central Library (KLLC). Times may change, so check the KLLC website before you go.'),
      details: [
        { icon: <FaClock />, label: tx('Semester:'), value: tx('Mon–Fri 08:30–19:30, Sat–Sun 10:00–18:00') },
        { icon: <FaClock />, label: tx('Semester break:'), value: tx('Mon–Fri 08:30–16:30, closed weekends') },
      ],
    },
    {
      id: 2,
      name: tx('Study Rooms & Learning Spaces'),
      description: tx('Book rooms and learning spaces for group work through the KLLC booking system.'),
      details: [
        { icon: <FaUsers />, label: tx('Who can book:'), value: tx('KMITL students and staff only') },
        { icon: <FaFileAlt />, label: tx('Fees:'), value: tx('See the room rate schedule on the KLLC website') },
      ],
    },
    {
      id: 3,
      name: tx('Borrowing & Search'),
      description: tx('Search the catalogue online (Web OPAC) and borrow or return books and media.'),
      details: [{ icon: <FaWifi />, label: tx('Internet:'), value: tx('Internet access in the Central Library') }],
    },
    {
      id: 4,
      name: tx('Media & Exhibitions'),
      description: tx('Watch films and visual media, and visit exhibitions in the library and the King Rama IV Honorable Hall.'),
      details: [{ icon: <FaMapMarkerAlt />, label: tx('Where:'), value: tx('Central Library (KLLC)') }],
    },
  ];

  // Faculties data
  

  // Dining options with images
  const diningOptions = [
    { 
      id: 1, 
      name: tx('Canteen A'), 
      description: tx('Main student canteen with Thai rice dishes, noodles, halal food and drinks.'),
      hours: tx('7:00 AM - 5:00 PM'),
      price: tx('35-80 THB per meal'),
      image: canteenA,
      badges: ['thai', 'halal']
    },
    { 
      id: 2, 
      name: tx('Canteen B'), 
      description: tx('Low-cost Thai meals, vegetarian food, and fresh fruit drinks.'),
      hours: tx('7:00 AM - 5:00 PM'),
      price: tx('35-80 THB per meal'),
      image: canteenB,
    },
    { 
      id: 3, 
      name: tx('Canteen C'), 
      description: tx('Street-food style stalls with noodles, fried rice, and snacks.'),
      hours: tx('7:00 AM - 5:00 PM'),
      price: tx('35-80 THB per meal'),
      image: canteenC,
    },
    { 
      id: 4, 
      name: tx('ECC Food Court'), 
      description: tx('Modern food court with Thai and international fast-food options.'),
      hours: tx('7:00 AM - 5:00 PM'),
      price: tx('35-80 THB per meal'),
      image: eccFoodCourt,
    },
    { 
      id: 5, 
      name: tx('Archi Café & Shops'), 
      description: tx('Coffee, bakery, western snacks and international drinks.'),
      hours: tx('8:00 AM - 10:00 PM'),
      price: tx('35-80 THB per meal'),
      image: archiCafe,
    },
  ];

  // Transportation options
  const transportOptions = [
    { id: 1, name: tx('Campus Shuttle'), schedule: tx('Every 15 minutes'), hours: tx('9:00 AM - 4:00 PM'), coverage: tx('Campus-wide'), icon: <FaBus /> },
    { id: 2, name: tx('Public Bus System'), schedule: tx('Varies by route'), hours: tx('5:00 AM - 12:00 AM'), coverage: tx('City-wide'), icon: <FaSubway /> },
    { id: 3, name: tx('Any Wheel'), schedule: '24/7', hours: tx('Always available'), coverage: tx('Campus and nearby areas'), icon: <FaBicycle /> }
  ];

  // Activities data
  const activities = [
    { 
      id: 1, 
      name: tx('International Student Association'), 
      day: tx('Every Friday'), 
      time: tx('5:00 PM'), 
      location: tx('Student Union'),
      image: activity1,
      description: tx('Connect with fellow international students, share experiences, and plan events.'),
      icon: <FaUsers />
    },
    { 
      id: 2, 
      name: tx('Cultural Exchange Events'), 
      day: tx('Monthly'), 
      time: tx('Varies'), 
      location: tx('International Center'),
      image: activity2,
      description: tx('Experience diverse cultures through food, music, and traditional activities.'),
      icon: <FaGlobeAmericas />
    },
    { 
      id: 3, 
      name: tx('Language Exchange Cafe'), 
      day: tx('Every Tuesday'), 
      time: tx('3:00 PM - 6:00 PM'), 
      location: tx('Library Cafe'),
      image: activity3,
      description: tx('Practice different languages in a casual, friendly cafe setting.'),
      icon: <FaHandshake />
    },
    { 
      id: 4, 
      name: tx('Weekend Excursions'), 
      day: tx('Select Saturdays'), 
      time: tx('9:00 AM - 5:00 PM'), 
      location: tx('Various destinations'),
      image: activity4,
      description: tx('Explore Thailand\'s beautiful temples, markets, and natural attractions.'),
      icon: <FaMapMarkerAlt />
    },
    { 
      id: 5, 
      name: tx('Sports and Recreation'), 
      day: tx('Daily'), 
      time: tx('4:00 PM - 8:00 PM'), 
      location: tx('University Stadium'),
      image: activity5,
      description: tx('Join football, basketball, badminton, or fitness groups on campus.'),
      icon: <MdSportsBasketball />
    },
    { 
      id: 6, 
      name: tx('Arts and Crafts Workshops'), 
      day: tx('Every Wednesday'), 
      time: tx('2:00 PM - 4:00 PM'), 
      location: tx('Arts Center'),
      image: activity6,
      description: tx('Learn traditional Thai crafts, painting, pottery, and creative skills.'),
      icon: <FaPaintBrush />
    },
    { 
      id: 7, 
      name: tx('Music and Dance Groups'), 
      day: tx('Every Thursday'), 
      time: tx('6:00 PM - 8:00 PM'), 
      location: tx('Performing Arts Hall'),
      image: activity7,
      description: tx('Join choir, band, dance teams, or learn traditional Thai dance.'),
      icon: <FaMusic />
    },
    { 
      id: 8, 
      name: tx('Volunteering Projects'), 
      day: tx('Monthly Weekends'), 
      time: tx('8:00 AM - 12:00 PM'), 
      location: tx('Community Center'),
      image: activity8,
      description: tx('Give back to the local community through various service projects.'),
      icon: <FaHandsHelping />
    },
  ];

  // Support services data
  const supportServices = [
    { id: 1, service: tx('International Office'), location: tx('Administration Building'), hours: tx('Mon-Fri 8:30AM-4:30PM'), contact: '+66-2-123-4567', website: 'https://oia.kmitl.ac.th/', icon: <FaUniversity /> },
  ];

  // Google Maps embed URL
  // Canteen map (Google My Maps): embedded on the Food tab, and opened full-size from its button.
  const campusMapId = "1F4NIQ2vLOaaDWM1wfcLdVd-ltfTQkrY";
  const campusMapUrl = `https://www.google.com/maps/d/embed?mid=${campusMapId}`;
  const campusMapViewUrl = `https://www.google.com/maps/d/viewer?mid=${campusMapId}`;

  // Handle section change
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setActiveSubSection(null);
  };

  // Get current sub-sections based on active section
  const getCurrentSubSections = () => {
    switch(activeSection) {
      case 'programs': return programSubSections;
      case 'campuslife': return campusLifeSubSections;
      case 'experience': return experienceSubSections;
      case 'studentaffairs': return studentAffairsSubSections;
      default: return [];
    }
  };

  // Get current active sub-section data
  const getCurrentSubSectionData = () => {
    const currentSubSections = getCurrentSubSections();
    return currentSubSections.find(sub => sub.id === activeSubSection);
  };

  return (
    <div className="international-student-page page-international">
      {/* Header */}
      <header className="international-header">
        <div className="international-container">
          <h1 className="international-logo">{tx("International Student Portal")}</h1>
          <p className="international-tagline">{tx("Your comprehensive guide to university life abroad")}</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="international-navbar">
        <div className="international-container">
          <ul className="international-nav-list">
            {navItems.map(item => (
              <li key={item.id}>
                <button 
                  className={`international-nav-button ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleSectionChange(item.id)}
                >
                  <span className="international-nav-icon">{item.icon}</span>
                  <span className="international-nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="international-main-content">
        <div className="international-container">
          
          {/* Home Section */}
          {activeSection === 'home' && (
            <section className="international-section">
              <div className="international-welcome-section">
                <h2>{tx("Welcome, International Students!")}</h2>
                <p className="international-intro-text">
                  {tx("This portal provides all the essential information you need for your academic journey. From programs and accommodation to dining and transportation, we've got you covered.")}
                </p>
                
                <div className="international-quick-links">
                  <h3>{tx("Quick Access")}</h3>
                  <div className="international-quick-links-grid">
                    <div className="international-quick-link-card" onClick={() => handleSectionChange('programs')}>
                      <div className="international-quick-link-icon">
                        <FaGraduationCap />
                      </div>
                      <h4>{tx("Academic Programs")}</h4>
                      <p>{tx("Explore study options including free programs")}</p>
                    </div>
                    <div className="international-quick-link-card" onClick={() => {
                      handleSectionChange('studentaffairs');
                      setActiveSubSection('visa');
                    }}>
                      <div className="international-quick-link-icon">
                        <FaFileAlt />
                      </div>
                      <h4>{tx("Visa & Finances")}</h4>
                      <p>{tx("Information about visas, banking, and money matters")}</p>
                    </div>
                    <div className="international-quick-link-card" onClick={() => {
                      handleSectionChange('campuslife');
                      setActiveSubSection('transportation');
                    }}>
                      <div className="international-quick-link-icon">
                        <FaBus />
                      </div>
                      <h4>{tx("Transportation")}</h4>
                      <p>{tx("Campus and city transport options")}</p>
                    </div>
                    <div className="international-quick-link-card" onClick={() => handleSectionChange('experience')}>
                      <div className="international-quick-link-icon">
                        <FaRunning />
                      </div>
                      <h4>{tx("Student Activities")}</h4>
                      <p>{tx("Get involved in campus life and events")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Main Content Sections with Sub-Sections */}
          {activeSection !== 'home' && (
            <section className="international-section">
              {/* Section Header */}
              <div className="international-section-header">
                <h2>
                  <span className="international-section-header-icon">
                    {navItems.find(item => item.id === activeSection)?.icon}
                  </span>
                  {navItems.find(item => item.id === activeSection)?.label}
                </h2>
                <p className="international-section-intro">
                  {activeSection === 'programs' && tx('Explore our academic offerings, support services, and faculty information.')}
                  {activeSection === 'campuslife' && tx('Daily living on campus - Where I live and survive.')}
                  {activeSection === 'experience' && tx('Fun, friends, and wellness - Where my memories happen.')}
                  {activeSection === 'studentaffairs' && tx('All official help - Where I go when I\'m lost.')}
                </p>
              </div>
              
              {/* Sub-Section Navigation */}
              <div className="international-subsection-nav">
                {getCurrentSubSections().map(subSection => (
                  <button
                    key={subSection.id}
                    className={`international-subsection-nav-button ${activeSubSection === subSection.id ? 'active' : ''}`}
                    onClick={() => setActiveSubSection(activeSubSection === subSection.id ? null : subSection.id)}
                  >
                    <span className="international-subsection-nav-icon">{subSection.icon}</span>
                    <span className="international-subsection-nav-label">{subSection.label}</span>
                    <span className="international-subsection-nav-arrow">
                      {activeSubSection === subSection.id ? '▲' : '▼'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Sub-Section Content */}
              {activeSubSection && getCurrentSubSectionData() && (
                <div className="international-subsection-content">
                  <h3>
                    <span className="subsection-icon">{getCurrentSubSectionData().icon}</span>
                    {getCurrentSubSectionData().title}
                  </h3>
                  <p className="international-subsection-intro">
                    {getCurrentSubSectionData().description}
                  </p>

                  {/* Programs Content */}
                  {activeSection === 'programs' && activeSubSection === 'kllc' && (
                    <div className="international-programs-grid">
                      {kllcPrograms.map(program => (
                        <div key={program.id} className="international-card international-program-card">
                          <h3>{program.name}</h3>
                          <p>{program.description}</p>
                          <div className="international-program-details">
                            {program.details.map((detail) => (
                              <div key={detail.label} className="international-detail-item">
                                {React.cloneElement(detail.icon, { className: 'detail-icon' })}
                                <span className="international-detail-label">{detail.label}</span>
                                <span>{detail.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="international-link-row">
                        <a
                          href="https://www.kllc.kmitl.ac.th/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaExternalLinkAlt /> {tx("Visit KLLC Website")}
                        </a>
                      </div>
                    </div>
                  )}

                  {activeSection === 'programs' && activeSubSection === 'academicsupport' && (
                    <div className="international-programs-grid">
                      {academicSupport.map(item => (
                        <div key={item.id} className="international-card international-program-card">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <div className="international-program-details">
                            {item.details.map((detail) => (
                              <div key={detail.label} className="international-detail-item">
                                {React.cloneElement(detail.icon, { className: 'detail-icon' })}
                                <span className="international-detail-label">{detail.label}</span>
                                <span>{detail.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSection === 'programs' && activeSubSection === 'library' && (
                    <div className="international-programs-grid">
                      {librarySpaces.map(space => (
                        <div key={space.id} className="international-card international-program-card">
                          <h3>{space.name}</h3>
                          <p>{space.description}</p>
                          <div className="international-program-details">
                            {space.details.map((detail) => (
                              <div key={detail.label} className="international-detail-item">
                                {React.cloneElement(detail.icon, { className: 'detail-icon' })}
                                <span className="international-detail-label">{detail.label}</span>
                                <span>{detail.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Campus Life Content */}
                  {activeSection === 'campuslife' && activeSubSection === 'housing' && (
                    <div className="international-accommodation-grid">
                      <div className="international-card international-accommodation-card">
                        <div className="international-image-gallery">
                          <img src={dorm1} alt={tx("No AC Dormitory")} className="international-image" />
                          <img src={dorm2} alt={tx("No AC Dormitory Interior")} className="international-image" />
                        </div>
                        <h3>{tx("No-Air-Conditioned Dormitory (Buildings 1,2,3,4,6)")}</h3>
                        <p>{tx("Shared rooms with essential facilities for budget-friendly student living.")}</p>
                        <div className="international-price-tag">{tx("6,000 – 10,000 THB / semester")}</div>
                        <ul>
                          <li><FaBed /> {tx("Bunk bed, desk, wardrobe")}</li>
                          <li><FaWifi /> {tx("Free Wi-Fi")}</li>
                          <li><FaShower /> {tx("Shared bathrooms")}</li>
                          <li>{tx("⚡ Electricity: 7 THB/unit")}</li>
                        </ul>
                      </div>

                      <div className="international-card international-accommodation-card">
                        <img src={dorm3} alt={tx("Air-Conditioned Dormitory")} className="international-image" />
                        <h3>{tx("Air-Conditioned Dormitory (Buildings 7 & 8)")}</h3>
                        <p>{tx("Comfortable air-conditioned rooms suitable for 1–2 students.")}</p>
                        <div className="international-price-tag">{tx("20,000 – 24,000 THB / semester")}</div>
                        <ul>
                          <li><FaSnowflake /> {tx("Air-conditioner, double bed")}</li>
                          <li><FaWifi /> {tx("Free Wi-Fi")}</li>
                          <li><FaShower /> {tx("Shared bathrooms")}</li>
                          <li>{tx("⚡ Electricity: 16 THB/unit")}</li>
                        </ul>
                      </div>

                      <div className="international-card international-accommodation-card">
                        <img src={dorm4} alt={tx("Type C Dormitory")} className="international-image" />
                        <h3>{tx("Type A, B, C Dormitory (Buildings 9 & 12)")}</h3>
                        <p>{tx("Premium ensuite rooms with private bathroom and refrigerator.")}</p>
                        <div className="international-price-tag">{tx("24,000 – 28,000 THB / semester")}</div>
                        <ul>
                          <li><FaHotTub /> {tx("Private bathroom")}</li>
                          <li>{tx("❄️ Refrigerator & water heater")}</li>
                          <li><FaWifi /> {tx("Free Wi-Fi")}</li>
                          <li><FaSnowflake /> {tx("Air-conditioning included")}</li>
                        </ul>
                      </div>

                      <div className="international-link-row">
                        <a
                          href="https://dorm.kmitl.ac.th/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaExternalLinkAlt /> {tx("Dormitory Website")}
                        </a>
                        <a
                          href="https://www.facebook.com/Dormitory.Of.KMITL"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaFacebook /> {tx("Dormitory Facebook")}
                        </a>
                      </div>
                    </div>
                  )}

                  {activeSection === 'campuslife' && activeSubSection === 'food' && (
                    <>
                      <div className="international-dining-grid">
                        {diningOptions.map(option => (
                          <div key={option.id} className="international-card international-dining-card">
                            <img src={option.image} alt={option.name} className="international-image" />
                            <h3>{option.name}</h3>
                            <p>{option.description}</p>
                            <div className="international-hours-badge">
                              <FaClock /> {option.hours}
                            </div>
                            <div className="international-price-tag">
                              <GiPayMoney /> {option.price}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="international-dining-map">
                        <h3>{tx("Campus Dining Locations")}</h3>
                        <p className="international-map-description">
                          {tx("Find all dining locations on campus with this interactive map.")}
                        </p>
                        <div className="international-map-container">
                          <iframe
                            src={campusMapUrl}
                            className="international-map-iframe"
                            title={tx("Campus Dining Locations")}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        <a
                          href={campusMapViewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaMapMarkerAlt /> {tx("Open Full Map")}
                        </a>
                      </div>
                    </>
                  )}

                  {activeSection === 'campuslife' && activeSubSection === 'transportation' && (
                    <div className="international-transport-grid">
                      {transportOptions.map(option => (
                        <div key={option.id} className="international-card international-transport-card">
                          <div className="international-transport-icon">
                            {option.icon}
                          </div>
                          <h3>{option.name}</h3>
                          <div className="international-transport-details">
                            <div className="international-detail-item">
                              <FaCalendar className="detail-icon" />
                              <span className="international-detail-label">{tx("Schedule:")}</span>
                              <span>{option.schedule}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaClock className="detail-icon" />
                              <span className="international-detail-label">{tx("Hours:")}</span>
                              <span>{option.hours}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaMapMarkerAlt className="detail-icon" />
                              <span className="international-detail-label">{tx("Coverage:")}</span>
                              <span>{option.coverage}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSection === 'campuslife' && activeSubSection === 'livingcosts' && (
                    <div className="international-finance-grid">
                      <div className="international-card international-finance-card">
                        <h3><FaBed /> {tx("Accommodation Costs")}</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>{tx("Basic Dorm:")}</span>
                            <span className="international-cost">{tx("1,000 - 1,700 THB/month")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("AC Dorm:")}</span>
                            <span className="international-cost">{tx("3,300 - 4,000 THB/month")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("Premium Dorm:")}</span>
                            <span className="international-cost">{tx("4,000 - 4,700 THB/month")}</span>
                          </div>
                        </div>
                      </div>

                      <div className="international-card international-finance-card">
                        <h3><GiMeal /> {tx("Food & Dining Costs")}</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>{tx("Canteen Meals:")}</span>
                            <span className="international-cost">{tx("3,000 - 4,000 THB/month")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("Groceries:")}</span>
                            <span className="international-cost">{tx("1,000 - 2,000 THB/month")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("Eating Out:")}</span>
                            <span className="international-cost">{tx("500 - 1,500 THB/month")}</span>
                          </div>
                        </div>
                      </div>

                      <div className="international-card international-finance-card highlight">
                        <h3><GiMoneyStack /> {tx("Total Monthly Estimate")}</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span><strong>{tx("Basic Budget:")}</strong></span>
                            <span className="international-cost">{tx("5,000 - 7,000 THB")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span><strong>{tx("Comfort Budget:")}</strong></span>
                            <span className="international-cost">{tx("8,000 - 12,000 THB")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span><strong>{tx("Premium Budget:")}</strong></span>
                            <span className="international-cost">{tx("13,000 - 18,000 THB")}</span>
                          </div>
                        </div>
                      </div>

                      <div className="international-card international-finance-card">
                        <h3><GiBank /> {tx("Banking & Money")}</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>{tx("Bank Account Opening:")}</span>
                            <span className="international-cost">{tx("Free with documents")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("ATM Withdrawal Fee:")}</span>
                            <span className="international-cost">{tx("220 THB (foreign cards)")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("Money Transfer:")}</span>
                            <span className="international-cost">{tx("0.25% - 1% fee")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Experience Content */}
                  {activeSection === 'experience' && activeSubSection === 'clubs' && (
                    <div className="international-activities-grid">
                      {activities.map(activity => (
                        <div key={activity.id} className="international-card international-activity-card">
                          <div className="international-activity-image-container">
                            <img 
                              src={activity.image} 
                              alt={activity.name} 
                              className="international-activity-image"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/300x200/4a5568/ffffff?text=' + encodeURIComponent(activity.name);
                              }}
                            />
                            <div className="international-activity-overlay">
                              <span className="international-activity-day">{activity.day}</span>
                            </div>
                          </div>
                          <div className="international-activity-content">
                            <div className="international-activity-icon">
                              {activity.icon}
                            </div>
                            <h3>{activity.name}</h3>
                            <p className="international-activity-description">{activity.description}</p>
                            <div className="international-activity-details">
                              <div className="international-detail-item">
                                <FaClock className="detail-icon" />
                                <span className="international-detail-label">{tx("Time:")}</span>
                                <span>{activity.time}</span>
                              </div>
                              <div className="international-detail-item">
                                <FaMapMarkerAlt className="detail-icon" />
                                <span className="international-detail-label">{tx("Location:")}</span>
                                <span>{activity.location}</span>
                              </div>
                            </div>
                            <button className="international-action-button">{tx("Join Activity")}</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSection === 'experience' && activeSubSection === 'sports' && (
                    <div className="international-programs-grid">
                      <div className="international-card international-program-card">
                         <img 
  src={stadium} 
  alt={tx("stadium")} 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';}}/>
                        <h3><MdSportsBasketball /> {tx("KMITL Stadium")} </h3>
                        <p>{tx("Access to state-of-the-art sports facilities including gym, swimming pool, and various sports courts.")}</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaClock className="detail-icon" />
                            <span className="international-detail-label">{tx("Hours:")}</span>
                            <span>{tx("6:00 AM - 10:00 PM Daily")}</span>
                          </div>
                          <div className="international-detail-item">
                            <FaMapMarkerAlt className="detail-icon" />
                            <span className="international-detail-label">{tx("Location:")}</span>
                            <span>{tx("University Sports Complex")}</span>
                          </div>
                        </div>
                        <a
                          href={mapsSearchUrl("KMITL Stadium")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaMapMarkerAlt /> {tx("Open in Google Maps")}
                        </a>
                      </div>

                      <div className="international-card international-program-card">
                                             <img 
  src={gym} 
  alt={tx("Gym")} 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';}}/>
                        <h3><FaRunning /> {tx("Fitness Center")}</h3>
                        <p>{tx("Join various fitness classes including yoga, aerobics, Zumba, and martial arts.")}</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaClock className="detail-icon" />
                            <span className="international-detail-label">{tx("Schedule:")}</span>
                            <span>{tx("Daily classes, check schedule")}</span>
                          </div>
                          <div className="international-detail-item">
                            <FaUsers className="detail-icon" />
                            <span className="international-detail-label">{tx("Instructor:")}</span>
                            <span>{tx("Certified fitness trainers")}</span>
                          </div>
                        </div>
                        <a
                          href={mapsSearchUrl("KMITL Fitness Center")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaMapMarkerAlt /> {tx("Open in Google Maps")}
                        </a>
                      </div>

                      <div className="international-card international-program-card">
                        <img 
  src={basketball} 
  alt={tx("basketball court")} 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';
  }}
/>
                        <h3><FaHeart /> {tx("Basketball court")}</h3>
                        <p>{tx("Mental health and wellness programs including meditation, counseling, and stress management workshops.")}</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaClock className="detail-icon" />
                            <span className="international-detail-label">{tx("Support:")}</span>
                            <span>{tx("Available by appointment")}</span>
                          </div>
                          <div className="international-detail-item">
                            <FaMapMarkerAlt className="detail-icon" />
                            <span className="international-detail-label">{tx("Location:")}</span>
                            <span>{tx("Student Wellness Center")}</span>
                          </div>
                        </div>
                        <a
                          href={mapsSearchUrl("KMITL Basketball Court")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaMapMarkerAlt /> {tx("Open in Google Maps")}
                        </a>
                      </div>

                        <div className="international-card international-program-card">
                        <img 
  src={pool} 
  alt={tx("Swimming Pool")} 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';
  }}
/>
                        <h3><FaHeart /> {tx("Swimming Pool")}</h3>
                        <p>{tx("Mental health and wellness programs including meditation, counseling, and stress management workshops.")}</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaClock className="detail-icon" />
                            <span className="international-detail-label">{tx("Support:")}</span>
                            <span>{tx("Available by appointment")}</span>
                          </div>
                          <div className="international-detail-item">
                            <FaMapMarkerAlt className="detail-icon" />
                            <span className="international-detail-label">{tx("Location:")}</span>
                            <span>{tx("Student Wellness Center")}</span>
                          </div>
                        </div>
                        <a
                          href={mapsSearchUrl("KMITL Swimming Pool")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaMapMarkerAlt /> {tx("Open in Google Maps")}
                        </a>
                      </div>

                    </div>
                  )}

                  {/* Student Affairs Content */}
                  {activeSection === 'studentaffairs' && activeSubSection === 'internationaloffice' && (
                    <div className="international-programs-grid">
                      {supportServices.map(service => (
                        <div key={service.id} className="international-card international-program-card">
                          <div className="international-service-icon">
                            {service.icon}
                          </div>
                          <h3>{service.service}</h3>
                          <div className="international-program-details">
                            <div className="international-detail-item">
                              <FaMapMarkerAlt className="detail-icon" />
                              <span className="international-detail-label">{tx("Location:")}</span>
                              <span>{service.location}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaClock className="detail-icon" />
                              <span className="international-detail-label">{tx("Hours:")}</span>
                              <span>{service.hours}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaPhone className="detail-icon" />
                              <span className="international-detail-label">{tx("Contact:")}</span>
                              <span>{service.contact}</span>
                            </div>
                          </div>
                          {service.website && (
                            <a
                              href={service.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="international-action-button international-link-button"
                            >
                              <FaExternalLinkAlt /> {tx("Visit Website")}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSection === 'studentaffairs' && activeSubSection === 'visa' && (
                    <div className="international-finance-grid">
                      <div className="international-card international-finance-card">
                        <h3><FaFileAlt /> {tx("Visa Extension Procedure")}</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>{tx("Required Documents:")}</span>
                            <span className="international-cost"> {tx("Passport, student status certificate, transcript, TM30")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("Submit to:")}</span>
                            <span className="international-cost"> {tx("International Affairs Office (HM 506), 45 days before")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("Collect when")}</span>
                            <span className="international-cost">{tx("Gets e-mail notification")}</span>
                          </div>
                        </div>
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSduqyc0p4nShZxNIEqtspO8H784LiHmJlLjL4N_k43R3-xhqQ/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaExternalLinkAlt /> {tx("Visa Extension Request Form")}
                        </a>
                      </div>

                      <div className="international-card international-finance-card">
                        <h3><FaUniversity /> {tx("Visa & Immigration")}</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>{tx("Visa Assistance:")}</span>
                            <span className="international-cost">{tx("Free guidance")}</span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("Visa Extention:")}</span>
                            <span className="international-cost">{tx("1,900 THB")} <br></br> {tx("(Before expiry)")} </span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("90 days Report:")}</span>
                            <span className="international-cost">{tx("Online & Onsite")} </span>
                          </div>
                          <div className="international-cost-item">
                            <span>{tx("Re-entry Permits:")}</span>
                            <span className="international-cost">{tx("1,000 THB")} </span>
                          </div>
                        </div>
                        <a
                          href="https://www.immigration.go.th/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="international-action-button international-link-button"
                        >
                          <FaExternalLinkAlt /> {tx("Thai Immigration Bureau")}
                        </a>
                      </div>
                    </div>
                  )}

                 {activeSection === 'studentaffairs' && activeSubSection === 'emergency' && (
  <div className="international-programs-grid">
    {/* Define supportServices array with emergency services data */}
    {[
      {
        id: 1,
        service: tx("King Mongkut Chaokhunthahan Hospital (KMCH)"),
        location: tx("PQJR+M8C, Lam Pla Thio, Lat Krabang, Bangkok 10520"),
        hours: tx("8AM - 5PM (Mon-Fri)"),
        contact: "+66-2-123-4567",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=King+Mongkut+Chaokhunthahan+Hospital+Lat+Krabang"
      }
      
      
    ].map(service => (
      <div key={service.id} className="international-card international-program-card">

                              <img 
  src={kmch} 
  alt={tx("Hospital")} 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';
  }}
/>
        <h3>{service.service}</h3>
        <div className="international-program-details">
          <div className="international-detail-item">
            <FaMapMarkerAlt className="detail-icon" />
            <span className="international-detail-label">{tx("Location:")}</span>
            <span>{service.location}</span>
          </div>
          <div className="international-detail-item">
            <FaClock className="detail-icon" />
            <span className="international-detail-label">{tx("Hours:")}</span>
            <span>{service.hours}</span>
          </div>
          <div className="international-detail-item">
            <FaPhone className="detail-icon" />
            <span className="international-detail-label">{tx("Contact:")}</span>
            <span>{service.contact}</span>
          </div>
        </div>
        <a
          href={service.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="international-action-button international-link-button"
        >
          <FaMapMarkerAlt /> {tx("Open in Google Maps")}
        </a>
      </div>
    ))}
  </div>
)}


                  
                </div>
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default InternationalStudentPage;