import React, { useState } from 'react';
import { 
  FaHome, FaGraduationCap, FaBed, FaUtensils, FaBus, 
  FaRunning, FaGlobeAmericas, FaHandshake, FaPassport, 
  FaFileAlt, FaFirstAid, FaUsers, FaMoneyBillWave, 
  FaBook, FaBuilding, FaUserTie, FaUniversity, FaMapMarkerAlt,
  FaCalendar, FaClock, FaPhone, FaEnvelope, FaWifi, FaSnowflake,
  FaShower, FaHotTub, FaCar, FaBicycle, FaSubway, FaDumbbell,
  FaMusic, FaPaintBrush, FaHandsHelping, FaHeart,
} from 'react-icons/fa';
import { 
  GiMoneyStack, GiBookshelf, GiTeacher, GiMeal, GiShoppingCart,
  GiPayMoney, GiHealthIncrease, GiBank
} from 'react-icons/gi';
import { 
  MdLibraryBooks, MdLocalLibrary, MdGroups, MdSportsBasketball,
  MdOutlineEmergency, MdOutlineSupportAgent
} from 'react-icons/md';
import { 
  HiAcademicCap, HiOfficeBuilding, HiUserGroup
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
const InternationalStudentPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubSection, setActiveSubSection] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'programs', label: 'Programs', icon: <FaGraduationCap /> },
    { id: 'campuslife', label: 'Campus Life', icon: <FaUniversity /> },
    { id: 'experience', label: 'Experience', icon: <FaRunning /> },
    { id: 'studentaffairs', label: 'Student Affairs', icon: <FaUsers /> },
  ];


  // Academic sub-sections for Programs
  const programSubSections = [
    { 
      id: 'kllc', 
      icon: <HiAcademicCap />,
      label: 'KMITL LIFE Long Learning Center',
      title: 'KMITL LIFE Long Learning Center (KLLC)',
      description: 'Language and cultural programs designed to help international students succeed'
    },
    { 
      id: 'academicsupport', 
      icon: <FaBook />,
      label: 'Academic Support',
      title: 'Academic Support Services',
      description: 'Get the academic help you need to succeed in your studies'
    },
    { 
      id: 'library', 
      icon: <MdLocalLibrary />,
      label: 'Library & Co-working',
      title: 'Library & Co-working Spaces',
      description: 'Study spaces and resources available for students'
    },
    { 
      id: 'mentors', 
      icon: <HiUserGroup />,
      label: 'Nym / Pod Mentors',
      title: 'Peer Mentorship Program',
      description: 'Connect with experienced student mentors'
    },
  ];

  // Campus Life sub-sections
  const campusLifeSubSections = [
    { 
      id: 'housing', 
      icon: <FaBed />,
      label: 'Housing',
      title: 'Accommodation',
      description: 'On-campus housing options for international students'
    },
    { 
      id: 'food', 
      icon: <FaUtensils />,
      label: 'Food & Dining',
      title: 'Campus Dining & Canteens',
      description: 'Enjoy affordable Thai food and international dishes'
    },
    { 
      id: 'transportation', 
      icon: <FaBus />,
      label: 'Getting Around',
      title: 'Transportation Services',
      description: 'Navigate the campus and city with our transportation options'
    },
    { 
      id: 'livingcosts', 
      icon: <GiMoneyStack />,
      label: 'Living Costs',
      title: 'Finances & Living Costs',
      description: 'Essential information about estimated monthly living costs'
    },
  ];

  // Experience sub-sections
  const experienceSubSections = [
    { 
      id: 'clubs', 
      icon: <MdGroups />,
      label: 'Clubs & Community',
      title: 'Student Clubs & Community',
      description: 'Get involved in student organizations and community activities'
    },
    { 
      id: 'sports', 
      icon: <FaRunning />,
      label: 'Sports & Wellness',
      title: 'Sports & Wellness Activities',
      description: 'Stay active and healthy with our sports and wellness programs'
    },
    { 
      id: 'cultural', 
      icon: <FaGlobeAmericas />,
      label: 'Cultural Activities',
      title: 'Cultural Exchange Activities',
      description: 'Experience diverse cultures through various activities and events'
    },
    { 
      id: 'networking', 
      icon: <FaHandshake />,
      label: 'Student Networking',
      title: 'Student Networking Opportunities',
      description: 'Connect with fellow students and build your professional network'
    },
  ];

  // Student Affairs sub-sections
  const studentAffairsSubSections = [
    { 
      id: 'internationaloffice', 
      icon: <FaPassport />,
      label: 'International Office',
      title: 'International Student Office',
      description: 'Support and services for international students'
    },
    { 
      id: 'visa', 
      icon: <FaFileAlt />,
      label: 'Visa & Immigration',
      title: 'Visa & Immigration Support',
      description: 'Essential information about visas and immigration procedures'
    },
    { 
      id: 'emergency', 
      icon: <MdOutlineEmergency />,
      label: 'Healthcare & Emergency',
      title: 'Healthcare & Emergency Services',
      description: 'Important contact information and emergency support'
    },
    
  ];

  // KLLC Programs data
  const kllcPrograms = [
    { id: 1, name: 'Free Program: KLLd', description: 'Language and cultural immersion program for new international students', duration: '6 months', eligibility: 'All international students' },
    { id: 2, name: 'Griswor - Now', description: 'Graduate research and internship program with immediate opportunities', duration: '1-2 years', eligibility: 'Graduate students' },
  ];

  // Academic support data
  const academicSupport = [
    { id: 1, title: 'Writing Center', description: 'Get help with academic writing, essays, and research papers', hours: 'Mon-Fri: 9AM-5PM', location: 'Library Building' },
    { id: 2, title: 'Math Tutoring', description: 'One-on-one tutoring for mathematics and statistics', hours: 'Mon-Thu: 10AM-4PM', location: 'Science Building' },
    { id: 3, title: 'Language Assistance', description: 'Help with Thai language learning and academic English', hours: 'Tue-Fri: 1PM-6PM', location: 'Language Center' },
    { id: 4, title: 'Research Support', description: 'Guidance on research methodologies and thesis writing', hours: 'By appointment', location: 'Graduate School' },
  ];

  // Library data
  const librarySpaces = [
    { id: 1, name: 'Main Library', description: '24/7 access to books, journals, and study spaces', hours: '24/7 during exam periods', floors: '8 floors, 500+ seats' },
    { id: 2, name: 'Silent Study Zone', description: 'Quiet study area with individual carrels', hours: '7AM-11PM daily', floors: 'Floor 3-4' },
    { id: 3, name: 'Group Study Rooms', description: 'Bookable rooms for group projects and discussions', hours: '8AM-10PM', booking: 'Online booking available' },
    { id: 4, name: 'Co-working Space', description: 'Modern workspace with computers and printers', hours: '24/7 access', amenities: 'WiFi, printers, scanners' },
  ];

  // Faculties data
  

  // Dining options with images
  const diningOptions = [
    { 
      id: 1, 
      name: 'Canteen A', 
      description: 'Main student canteen with Thai rice dishes, noodles, halal food and drinks.',
      hours: '7:00 AM - 5:00 PM',
      price: '35-80 THB per meal',
      image: canteenA,
      badges: ['thai', 'halal']
    },
    { 
      id: 2, 
      name: 'Canteen B', 
      description: 'Low-cost Thai meals, vegetarian food, and fresh fruit drinks.',
      hours: '7:00 AM - 5:00 PM',
      price: '35-80 THB per meal',
      image: canteenB,
    },
    { 
      id: 3, 
      name: 'Canteen C', 
      description: 'Street-food style stalls with noodles, fried rice, and snacks.',
      hours: '7:00 AM - 5:00 PM',
      price: '35-80 THB per meal',
      image: canteenC,
    },
    { 
      id: 4, 
      name: 'ECC Food Court', 
      description: 'Modern food court with Thai and international fast-food options.',
      hours: '7:00 AM - 5:00 PM',
      price: '35-80 THB per meal',
      image: eccFoodCourt,
    },
    { 
      id: 5, 
      name: 'Archi Café & Shops', 
      description: 'Coffee, bakery, western snacks and international drinks.',
      hours: '8:00 AM - 10:00 PM',
      price: '35-80 THB per meal',
      image: archiCafe,
    },
  ];

  // Transportation options
  const transportOptions = [
    { id: 1, name: 'Campus Shuttle', schedule: 'Every 15 minutes', hours: '9:00 AM - 4:00 PM', coverage: 'Campus-wide', icon: <FaBus /> },
    { id: 2, name: 'Public Bus System', schedule: 'Varies by route', hours: '5:00 AM - 12:00 AM', coverage: 'City-wide', icon: <FaSubway /> },
    { id: 3, name: 'Any Wheel', schedule: '24/7', hours: 'Always available', coverage: 'Campus and nearby areas', icon: <FaBicycle /> }
  ];

  // Activities data
  const activities = [
    { 
      id: 1, 
      name: 'International Student Association', 
      day: 'Every Friday', 
      time: '5:00 PM', 
      location: 'Student Union',
      image: activity1,
      description: 'Connect with fellow international students, share experiences, and plan events.',
      icon: <FaUsers />
    },
    { 
      id: 2, 
      name: 'Cultural Exchange Events', 
      day: 'Monthly', 
      time: 'Varies', 
      location: 'International Center',
      image: activity2,
      description: 'Experience diverse cultures through food, music, and traditional activities.',
      icon: <FaGlobeAmericas />
    },
    { 
      id: 3, 
      name: 'Language Exchange Cafe', 
      day: 'Every Tuesday', 
      time: '3:00 PM - 6:00 PM', 
      location: 'Library Cafe',
      image: activity3,
      description: 'Practice different languages in a casual, friendly cafe setting.',
      icon: <FaHandshake />
    },
    { 
      id: 4, 
      name: 'Weekend Excursions', 
      day: 'Select Saturdays', 
      time: '9:00 AM - 5:00 PM', 
      location: 'Various destinations',
      image: activity4,
      description: 'Explore Thailand\'s beautiful temples, markets, and natural attractions.',
      icon: <FaMapMarkerAlt />
    },
    { 
      id: 5, 
      name: 'Sports and Recreation', 
      day: 'Daily', 
      time: '4:00 PM - 8:00 PM', 
      location: 'University Stadium',
      image: activity5,
      description: 'Join football, basketball, badminton, or fitness groups on campus.',
      icon: <MdSportsBasketball />
    },
    { 
      id: 6, 
      name: 'Arts and Crafts Workshops', 
      day: 'Every Wednesday', 
      time: '2:00 PM - 4:00 PM', 
      location: 'Arts Center',
      image: activity6,
      description: 'Learn traditional Thai crafts, painting, pottery, and creative skills.',
      icon: <FaPaintBrush />
    },
    { 
      id: 7, 
      name: 'Music and Dance Groups', 
      day: 'Every Thursday', 
      time: '6:00 PM - 8:00 PM', 
      location: 'Performing Arts Hall',
      image: activity7,
      description: 'Join choir, band, dance teams, or learn traditional Thai dance.',
      icon: <FaMusic />
    },
    { 
      id: 8, 
      name: 'Volunteering Projects', 
      day: 'Monthly Weekends', 
      time: '8:00 AM - 12:00 PM', 
      location: 'Community Center',
      image: activity8,
      description: 'Give back to the local community through various service projects.',
      icon: <FaHandsHelping />
    },
  ];

  // Support services data
  const supportServices = [
    { id: 1, service: 'International Office', location: 'Administration Building', hours: 'Mon-Fri 8:30AM-4:30PM', contact: '+66-2-123-4567', icon: <FaUniversity /> },
    { id: 3, service: 'Counseling Services', location: 'Student Wellness Center', hours: 'By appointment', contact: 'counseling@university.ac.th', icon: <MdOutlineSupportAgent /> },
    { id: 4, service: 'Career Services', location: 'Career Center Building', hours: 'Mon-Fri 9AM-5PM', contact: 'career@university.ac.th', icon: <FaUserTie /> },
  ];

  // Google Maps embed URL
  const campusMapUrl = "https://www.google.com/maps/d/embed?mid=1UEUU0ZbmX0mktzMBgfRVX1l7BCwbqq8&ehbc=2E312F";

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
    <div className="international-student-page">
      {/* Header */}
      <header className="international-header">
        <div className="international-container">
          <h1 className="international-logo">International Student Portal</h1>
          <p className="international-tagline">Your comprehensive guide to university life abroad</p>
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
                <h2>Welcome, International Students!</h2>
                <p className="international-intro-text">
                  This portal provides all the essential information you need for your academic journey. 
                  From programs and accommodation to dining and transportation, we've got you covered.
                </p>
                
                <div className="international-quick-links">
                  <h3>Quick Access</h3>
                  <div className="international-quick-links-grid">
                    <div className="international-quick-link-card" onClick={() => handleSectionChange('programs')}>
                      <div className="international-quick-link-icon">
                        <FaGraduationCap />
                      </div>
                      <h4>Academic Programs</h4>
                      <p>Explore study options including free programs</p>
                    </div>
                    <div className="international-quick-link-card" onClick={() => {
                      handleSectionChange('studentaffairs');
                      setActiveSubSection('visa');
                    }}>
                      <div className="international-quick-link-icon">
                        <FaFileAlt />
                      </div>
                      <h4>Visa & Finances</h4>
                      <p>Information about visas, banking, and money matters</p>
                    </div>
                    <div className="international-quick-link-card" onClick={() => {
                      handleSectionChange('campuslife');
                      setActiveSubSection('transportation');
                    }}>
                      <div className="international-quick-link-icon">
                        <FaBus />
                      </div>
                      <h4>Transportation</h4>
                      <p>Campus and city transport options</p>
                    </div>
                    <div className="international-quick-link-card" onClick={() => handleSectionChange('experience')}>
                      <div className="international-quick-link-icon">
                        <FaRunning />
                      </div>
                      <h4>Student Activities</h4>
                      <p>Get involved in campus life and events</p>
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
                  {activeSection === 'programs' && 'Explore our academic offerings, support services, and faculty information.'}
                  {activeSection === 'campuslife' && 'Daily living on campus - Where I live and survive.'}
                  {activeSection === 'experience' && 'Fun, friends, and wellness - Where my memories happen.'}
                  {activeSection === 'studentaffairs' && 'All official help - Where I go when I\'m lost.'}
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
                          <div className="international-card-header">
                            <h3>{program.name}</h3>
                            {program.name.includes('Free') && (
                              <div className="international-free-badge">Free Program</div>
                            )}
                            {program.name.includes('Griswor') && (
                              <div className="international-now-badge">Available Now</div>
                            )}
                          </div>
                          <p>{program.description}</p>
                          <div className="international-program-details">
                            <div className="international-detail-item">
                              <FaCalendar className="detail-icon" />
                              <span className="international-detail-label">Duration:</span>
                              <span>{program.duration}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaUsers className="detail-icon" />
                              <span className="international-detail-label">Eligibility:</span>
                              <span>{program.eligibility}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSection === 'programs' && activeSubSection === 'academicsupport' && (
                    <div className="international-programs-grid">
                      {academicSupport.map(item => (
                        <div key={item.id} className="international-card international-program-card">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <div className="international-program-details">
                            <div className="international-detail-item">
                              <FaClock className="detail-icon" />
                              <span className="international-detail-label">Hours:</span>
                              <span>{item.hours}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaMapMarkerAlt className="detail-icon" />
                              <span className="international-detail-label">Location:</span>
                              <span>{item.location}</span>
                            </div>
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
                            <div className="international-detail-item">
                              <FaClock className="detail-icon" />
                              <span className="international-detail-label">Hours:</span>
                              <span>{space.hours}</span>
                            </div>
                            <div className="international-detail-item">
                              <span className="international-detail-label">Details:</span>
                              <span>{space.floors || space.booking || space.amenities}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSection === 'progr' && activeSubSection === 'mentors' && (
                    <div className="international-programs-grid">
                      <div className="international-card international-program-card">
                        <h3><HiUserGroup /> Peer Mentorship Program</h3>
                        <p>Connect with experienced student mentors who can guide you through your university journey.</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaUsers className="detail-icon" />
                            <span className="international-detail-label">Mentor Matching:</span>
                            <span>Based on your major and interests</span>
                          </div>
                          <div className="international-detail-item">
                            <FaClock className="detail-icon" />
                            <span className="international-detail-label">Meetings:</span>
                            <span>Weekly or bi-weekly sessions</span>
                          </div>
                        </div>
                        <button className="international-action-button">Apply for Mentor</button>
                      </div>

                      <div className="international-card international-program-card">
                        <h3><FaHandshake /> Nym Program</h3>
                        <p>New student orientation and mentoring program specifically designed for international students.</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaCalendar className="detail-icon" />
                            <span className="international-detail-label">Duration:</span>
                            <span>Full academic year</span>
                          </div>
                          <div className="international-detail-item">
                            <FaUsers className="detail-icon" />
                            <span className="international-detail-label">Eligibility:</span>
                            <span>First-year international students</span>
                          </div>
                        </div>
                        <button className="international-action-button">Join Nym Program</button>
                      </div>
                    </div>
                  )}

                  {/* Campus Life Content */}
                  {activeSection === 'campuslife' && activeSubSection === 'housing' && (
                    <div className="international-accommodation-grid">
                      <div className="international-card international-accommodation-card">
                        <div className="international-image-gallery">
                          <img src={dorm1} alt="No AC Dormitory" className="international-image" />
                          <img src={dorm2} alt="No AC Dormitory Interior" className="international-image" />
                        </div>
                        <h3>No-Air-Conditioned Dormitory (Buildings 1,2,3,4,6)</h3>
                        <p>Shared rooms with essential facilities for budget-friendly student living.</p>
                        <div className="international-price-tag">6,000 – 10,000 THB / semester</div>
                        <ul>
                          <li><FaBed /> Bunk bed, desk, wardrobe</li>
                          <li><FaWifi /> Free Wi-Fi</li>
                          <li><FaShower /> Shared bathrooms</li>
                          <li>⚡ Electricity: 7 THB/unit</li>
                        </ul>
                      </div>

                      <div className="international-card international-accommodation-card">
                        <img src={dorm3} alt="Air-Conditioned Dormitory" className="international-image" />
                        <h3>Air-Conditioned Dormitory (Buildings 7 & 8)</h3>
                        <p>Comfortable air-conditioned rooms suitable for 1–2 students.</p>
                        <div className="international-price-tag">20,000 – 24,000 THB / semester</div>
                        <ul>
                          <li><FaSnowflake /> Air-conditioner, double bed</li>
                          <li><FaWifi /> Free Wi-Fi</li>
                          <li><FaShower /> Shared bathrooms</li>
                          <li>⚡ Electricity: 16 THB/unit</li>
                        </ul>
                      </div>

                      <div className="international-card international-accommodation-card">
                        <img src={dorm4} alt="Type C Dormitory" className="international-image" />
                        <h3>Type A, B, C Dormitory (Buildings 9 & 12)</h3>
                        <p>Premium ensuite rooms with private bathroom and refrigerator.</p>
                        <div className="international-price-tag">24,000 – 28,000 THB / semester</div>
                        <ul>
                          <li><FaHotTub /> Private bathroom</li>
                          <li>❄️ Refrigerator & water heater</li>
                          <li><FaWifi /> Free Wi-Fi</li>
                          <li><FaSnowflake /> Air-conditioning included</li>
                        </ul>
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
                        <h3>Campus Dining Locations</h3>
                        <p className="international-map-description">
                          Find all dining locations on campus with this interactive map.
                        </p>
                        <div className="international-map-container">
                          <iframe
                            src={campusMapUrl}
                            className="international-map-iframe"
                            title="Campus Dining Locations"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
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
                              <span className="international-detail-label">Schedule:</span>
                              <span>{option.schedule}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaClock className="detail-icon" />
                              <span className="international-detail-label">Hours:</span>
                              <span>{option.hours}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaMapMarkerAlt className="detail-icon" />
                              <span className="international-detail-label">Coverage:</span>
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
                        <h3><FaBed /> Accommodation Costs</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>Basic Dorm:</span>
                            <span className="international-cost">1,000 - 1,700 THB/month</span>
                          </div>
                          <div className="international-cost-item">
                            <span>AC Dorm:</span>
                            <span className="international-cost">3,300 - 4,000 THB/month</span>
                          </div>
                          <div className="international-cost-item">
                            <span>Premium Dorm:</span>
                            <span className="international-cost">4,000 - 4,700 THB/month</span>
                          </div>
                        </div>
                      </div>

                      <div className="international-card international-finance-card">
                        <h3><GiMeal /> Food & Dining Costs</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>Canteen Meals:</span>
                            <span className="international-cost">3,000 - 4,000 THB/month</span>
                          </div>
                          <div className="international-cost-item">
                            <span>Groceries:</span>
                            <span className="international-cost">1,000 - 2,000 THB/month</span>
                          </div>
                          <div className="international-cost-item">
                            <span>Eating Out:</span>
                            <span className="international-cost">500 - 1,500 THB/month</span>
                          </div>
                        </div>
                      </div>

                      <div className="international-card international-finance-card highlight">
                        <h3><GiMoneyStack /> Total Monthly Estimate</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span><strong>Basic Budget:</strong></span>
                            <span className="international-cost">5,000 - 7,000 THB</span>
                          </div>
                          <div className="international-cost-item">
                            <span><strong>Comfort Budget:</strong></span>
                            <span className="international-cost">8,000 - 12,000 THB</span>
                          </div>
                          <div className="international-cost-item">
                            <span><strong>Premium Budget:</strong></span>
                            <span className="international-cost">13,000 - 18,000 THB</span>
                          </div>
                        </div>
                      </div>

                      <div className="international-card international-finance-card">
                        <h3><GiBank /> Banking & Money</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>Bank Account Opening:</span>
                            <span className="international-cost">Free with documents</span>
                          </div>
                          <div className="international-cost-item">
                            <span>ATM Withdrawal Fee:</span>
                            <span className="international-cost">220 THB (foreign cards)</span>
                          </div>
                          <div className="international-cost-item">
                            <span>Money Transfer:</span>
                            <span className="international-cost">0.25% - 1% fee</span>
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
                                <span className="international-detail-label">Time:</span>
                                <span>{activity.time}</span>
                              </div>
                              <div className="international-detail-item">
                                <FaMapMarkerAlt className="detail-icon" />
                                <span className="international-detail-label">Location:</span>
                                <span>{activity.location}</span>
                              </div>
                            </div>
                            <button className="international-action-button">Join Activity</button>
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
  alt="stadium" 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';}}/>
                        <h3><MdSportsBasketball /> KMITL Stadium </h3>
                        <p>Access to state-of-the-art sports facilities including gym, swimming pool, and various sports courts.</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaClock className="detail-icon" />
                            <span className="international-detail-label">Hours:</span>
                            <span>6:00 AM - 10:00 PM Daily</span>
                          </div>
                          <div className="international-detail-item">
                            <FaMapMarkerAlt className="detail-icon" />
                            <span className="international-detail-label">Location:</span>
                            <span>University Sports Complex</span>
                          </div>
                        </div>
                      </div>

                      <div className="international-card international-program-card">
                                             <img 
  src={gym} 
  alt="Gym" 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';}}/>
                        <h3><FaRunning /> Fitness Center</h3>
                        <p>Join various fitness classes including yoga, aerobics, Zumba, and martial arts.</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaClock className="detail-icon" />
                            <span className="international-detail-label">Schedule:</span>
                            <span>Daily classes, check schedule</span>
                          </div>
                          <div className="international-detail-item">
                            <FaUsers className="detail-icon" />
                            <span className="international-detail-label">Instructor:</span>
                            <span>Certified fitness trainers</span>
                          </div>
                        </div>
                      </div>

                      <div className="international-card international-program-card">
                        <img 
  src={basketball} 
  alt="basketball court" 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';
  }}
/>
                        <h3><FaHeart /> Basketball court</h3>
                        <p>Mental health and wellness programs including meditation, counseling, and stress management workshops.</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaClock className="detail-icon" />
                            <span className="international-detail-label">Support:</span>
                            <span>Available by appointment</span>
                          </div>
                          <div className="international-detail-item">
                            <FaMapMarkerAlt className="detail-icon" />
                            <span className="international-detail-label">Location:</span>
                            <span>Student Wellness Center</span>
                          </div>
                        </div>
                      </div>

                        <div className="international-card international-program-card">
                        <img 
  src={pool} 
  alt="Swimming Pool" 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';
  }}
/>
                        <h3><FaHeart /> Swimming Pool</h3>
                        <p>Mental health and wellness programs including meditation, counseling, and stress management workshops.</p>
                        <div className="international-program-details">
                          <div className="international-detail-item">
                            <FaClock className="detail-icon" />
                            <span className="international-detail-label">Support:</span>
                            <span>Available by appointment</span>
                          </div>
                          <div className="international-detail-item">
                            <FaMapMarkerAlt className="detail-icon" />
                            <span className="international-detail-label">Location:</span>
                            <span>Student Wellness Center</span>
                          </div>
                        </div>
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
                              <span className="international-detail-label">Location:</span>
                              <span>{service.location}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaClock className="detail-icon" />
                              <span className="international-detail-label">Hours:</span>
                              <span>{service.hours}</span>
                            </div>
                            <div className="international-detail-item">
                              <FaPhone className="detail-icon" />
                              <span className="international-detail-label">Contact:</span>
                              <span>{service.contact}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSection === 'studentaffairs' && activeSubSection === 'visa' && (
                    <div className="international-finance-grid">
                      <div className="international-card international-finance-card">
                        <h3><FaFileAlt /> Visa Extension Procedure</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>Required Documents:</span>
                            <span className="international-cost"> Passport, student status certificate, transcript, TM30</span>
                          </div>
                          <div className="international-cost-item">
                            <span>Submit to:</span>
                            <span className="international-cost"> OIA ( 30 days before expiry)</span>
                          </div>
                          <div className="international-cost-item">
                            <span>Collect when</span>
                            <span className="international-cost">Gets e-mail notification</span>
                          </div>
                        </div>
                      </div>

                      <div className="international-card international-finance-card">
                        <h3><FaUniversity /> Visa & Immigration</h3>
                        <div className="international-cost-breakdown">
                          <div className="international-cost-item">
                            <span>Visa Assistance:</span>
                            <span className="international-cost">Free guidance</span>
                          </div>
                          <div className="international-cost-item">
                            <span>Visa Extention:</span>
                            <span className="international-cost">1,900 THB <br></br> (Before expiry) </span>
                          </div>
                          <div className="international-cost-item">
                            <span>90 days Report:</span>
                            <span className="international-cost">Online & Onsite </span>
                          </div>
                          <div className="international-cost-item">
                            <span>Re-entry Permits:</span>
                            <span className="international-cost">1,000 THB </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                 {activeSection === 'studentaffairs' && activeSubSection === 'emergency' && (
  <div className="international-programs-grid">
    {/* Define supportServices array with emergency services data */}
    {[
      {
        id: 1,
        service: "King Mongkut Chaokhunthahan Hospital (KMCH)",
        location: "PQJR+M8C, Lam Pla Thio, Lat Krabang, Bangkok 10520",
        hours: "8AM - 5PM (Mon-Fri)",
        contact: "+66-2-123-4567"
      }
      
      
    ].map(service => (
      <div key={service.id} className="international-card international-program-card">

                              <img 
  src={kmch} 
  alt="Hospital" 
  className="international-image"
  onError={(e) => {
    e.target.src = 'https://via.placeholder.com/600x300/4a5568/ffffff?text=Visa+Documentation';
  }}
/>
        <h3>{service.service}</h3>
        <div className="international-program-details">
          <div className="international-detail-item">
            <FaMapMarkerAlt className="detail-icon" />
            <span className="international-detail-label">Location:</span>
            <span>{service.location}</span>
          </div>
          <div className="international-detail-item">
            <FaClock className="detail-icon" />
            <span className="international-detail-label">Hours:</span>
            <span>{service.hours}</span>
          </div>
          <div className="international-detail-item">
            <FaPhone className="detail-icon" />
            <span className="international-detail-label">Contact:</span>
            <span>{service.contact}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

<div className="international-important-notice emergency">
  <h3><MdOutlineEmergency /> Emergency Contacts</h3>
  <ul>
    <li><strong>Medical Emergency:</strong> 1669 (Thai Emergency Number)</li>
    <li><strong>Campus Security:</strong> +66-2-123-4000</li>
    <li><strong>Police:</strong> 191</li>
    <li><strong>Fire Department:</strong> 199</li>
    <li><strong>University Health Center:</strong> +66-2-123-4568 (24/7)</li>
    <li><strong>International Office Emergency:</strong> +66-81-234-5678</li>
  </ul>
</div>

                  
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