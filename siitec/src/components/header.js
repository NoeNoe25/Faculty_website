// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedinIn,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaUserTie,
  FaUsers,
  FaFlask,
  FaBook,
  FaHome,
  FaUniversity,
  FaIdCard
} from 'react-icons/fa';
import '../styles/theme.css';
import '../styles/header.css';
import logoImage from '../assets/logos/siiteclogo (1).png';

// Social Icons Component with consistent size
const SocialIcons = () => (
  <div className="header_social-icons">
    <a href="#" aria-label="Facebook" className="header_social-icon">
      <FaFacebookF />
    </a>
    <a href="#" aria-label="Twitter" className="header_social-icon">
      <FaTwitter />
    </a>
    <a href="#" aria-label="YouTube" className="header_social-icon">
      <FaYoutube />
    </a>
    <a href="#" aria-label="LinkedIn" className="header_social-icon">
      <FaLinkedinIn />
    </a>
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [language, setLanguage] = useState('EN');
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'TH' : 'EN');
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null);
  };

  // Services Mega Menu Data
  const servicesMegaMenu = {
    categories: [
      {
        title: language === 'EN' ? 'Students' : 'n',
        icon: <FaGraduationCap />,
        items: [
          { name: language === 'EN' ? 'Apply for study' : 'n', link: '/student-academic' },
          { name: language === 'EN' ? 'Rules and Regulations' : 'n', link: '/student-career' },
          { name: language === 'EN' ? 'Scholarships' : 'ทุนการศึกษา', link: '/student-portal' },
          { name: language === 'EN' ? 'Download Documents' : 'n', link: '/scholarships' },
          { name: language === 'EN' ? 'Nano Classroom' : 'n', link: '/student-academic' },
          { name: language === 'EN' ? 'Manu Skill Certificate' : 'n', link: '/student-career' },
          { name: language === 'EN' ? 'Academic Services' : 'ทุนการศึกษา', link: '/student-portal' }
        ]
      },
      {
        title: language === 'EN' ? 'For Faculty & Staff' : 'สำหรับคณาจารย์และบุคลากร',
        icon: <FaUserTie />,
        items: [
          { name: language === 'EN' ? 'Report Repair' : 'n', link: '/faculty-hr' },
          { name: language === 'EN' ? 'Position form/ Request' : 'n', link: '/research-support' },
          { name: language === 'EN' ? 'Information System KMITL' : 'n', link: '/teaching-resources' },
          { name: language === 'EN' ? 'Instrument booking service for KMITL' : 'n', link: '/faculty-portal' }
        ]
      },
      {
        title: language === 'EN' ? 'For External Partners' : 'สำหรับพันธมิตรภายนอก',
        icon: <FaUsers />,
        items: [
          { name: language === 'EN' ? 'Faculty Visit Request' : 'n', link: '/industry-collab' },
          { name: language === 'EN' ? 'Instrument Booking Service' : 'n', link: '/consulting' }
      
        ]
      }
    ],
    featured: {
      title: language === 'EN' ? 'Quick Services' : 'บริการด่วน',
      items: [
        { name: language === 'EN' ? 'Online Application' : 'สมัครออนไลน์', link: '/online-apply', icon: <FaIdCard /> },
        { name: language === 'EN' ? 'Document Request' : 'ขอเอกสาร', link: '/document-request', icon: <FaBook /> },
        { name: language === 'EN' ? 'Schedule Appointment' : 'นัดหมาย', link: '/appointment', icon: <FaUniversity /> }
      ]
    }
  };

  // Menu Items with EN + TH versions
  const menuItems = [
    { name: language === 'EN' ? 'Home' : 'หน้าหลัก', link: '/', icon: <FaHome /> },
    { 
      name: language === 'EN' ? 'Apply' : 'การศึกษา', 
      link: '/programs',
      submenu: [
        { name: language === 'EN' ? 'Undergraduate' : 'ปริญญาตรี', link: '/programs' },
        { name: language === 'EN' ? 'Graduate' : 'บัณฑิตศึกษา', link: '/programs' },
        { name: language === 'EN' ? 'Doctoral' : 'หลักสูตรออนไลน์', link: '/programs' }
      ]
    },
    { 
      name: language === 'EN' ? 'Services' : 'บริการ',
      isMegaMenu: true,
      megaMenuData: servicesMegaMenu
    },
    { 
      name: language === 'EN' ? 'Research and Center' : 'ชีวิตนักศึกษา',
      submenu: [
        { name: language === 'EN' ? 'Center' : 'ชมรมและกิจกรรม', link: '/OrgStructure' },
        { name: language === 'EN' ? 'Research' : 'หอพัก', link: '/CiRAPage' }
      ]
    },
    { 
      name: language === 'EN' ? 'Departments/Organization' : 'ชีวิตนักศึกษา',
      submenu: [
        { name: language === 'EN' ? 'Department of Nanoscience and Nanotechnology (NANO)' : 'ชมรมและกิจกรรม', link: '/NANODepartmentPage' },
        { name: language === 'EN' ? 'Department of Manufacturing System Technology (MANU)' : 'หอพัก', link: '/MANUDepartmentPage' },
        { name: language === 'EN' ? 'Organization' : 'หอพัก', link: '/AcademicCalendar' }
      ]
    }, 
    { 
      name: language === 'EN' ? 'About Us' : 'เกี่ยวกับเรา',
      submenu: [
        { name: language === 'EN' ? 'Vision/Mission' : 'ชมรมและกิจกรรม', link: '/About2' },
        { name: language === 'EN' ? 'Organizational structure' : 'หอพัก', link: '/OrganizationalStructure' },
        { name: language === 'EN' ? 'Faculty Committee' : 'หอพัก', link: '#' },
        { name: language === 'EN' ? 'Executive' : 'หอพัก', link: '/Executive' },
        { name: language === 'EN' ? 'Lecturer' : 'หอพัก', link: '/LecturerPage' },
        { name: language === 'EN' ? 'Staff' : 'หอพัก', link: '/AcademicStaff' }
      ]
    },
    { name: language === 'EN' ? 'Contact' : 'ติดต่อเรา', link: '/Contact' }
  ];

  // Mega Menu Component
  const MegaMenu = ({ data, isOpen }) => {
    if (!isOpen) return null;

    return (
      <div className="mega-menu">
        <div className="mega-menu-container">
          <div className="mega-menu-content">
            <div className="mega-menu-grid">
              {data.categories.map((category, index) => (
                <div key={index} className="mega-menu-category">
                  <div className="mega-menu-category-header">
                    <span className="mega-menu-category-icon">{category.icon}</span>
                    <h4 className="mega-menu-category-title">{category.title}</h4>
                  </div>
                  <ul className="mega-menu-category-list">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mega-menu-item">
                        <Link 
                          to={item.link} 
                          className="mega-menu-link"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mega-menu-featured">
              <h4 className="mega-menu-featured-title">{data.featured.title}</h4>
              <div className="mega-menu-featured-grid">
                {data.featured.items.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.link}
                    className="mega-menu-featured-item"
                    onClick={closeMenu}
                  >
                    <span className="mega-menu-featured-icon">{item.icon}</span>
                    <span className="mega-menu-featured-text">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="header">
      {/* First Line: Logo + Social Icons */}
      <div className="header-top">
        <div className="header-container">
          <div className="logo-section">
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <img src={logoImage} alt="SIITec Logo" className="logo-img" />
                <div className="logo-text">
                  <span className="logo-line-1">
                    {language === 'EN' ? 'School of Integrated' : 'คณะเทคโนโลยี'}
                  </span>
                  <span className="logo-line-2">
                    {language === 'EN' ? 'Innovative Technology' : 'บูรณาการนวัตกรรม'}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="social-section">
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Second Line: Navigation Menu */}
      <div className="header-bottom">
        <div className="header-container">
          <nav className={`nav ${menuOpen ? 'active' : ''}`} ref={navRef}>
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`nav-item ${item.submenu || item.isMegaMenu ? 'has-dropdown' : ''} ${item.isMegaMenu ? 'has-mega-menu' : ''}`}
                >
                  {item.submenu ? (
                    <>
                      <button 
                        className="nav-link dropdown-toggle"
                        onClick={() => toggleDropdown(item.name)}
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span className="nav-text">{item.name}</span>
                        <FaChevronDown className="dropdown-arrow" />
                      </button>
                      <ul className={`dropdown-menu ${activeDropdown === item.name ? 'show' : ''}`}>
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="dropdown-item">
                            <Link 
                              to={subItem.link}
                              onClick={closeMenu}
                              className="dropdown-link"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : item.isMegaMenu ? (
                    <>
                      <button 
                        className="nav-link dropdown-toggle mega-menu-toggle"
                        onClick={() => toggleDropdown(item.name)}
                        aria-expanded={activeDropdown === item.name}
                      >
                        <span className="nav-text">{item.name}</span>
                        <FaChevronDown className="dropdown-arrow" />
                      </button>
                      <MegaMenu 
                        data={item.megaMenuData} 
                        isOpen={activeDropdown === item.name}
                      />
                    </>
                  ) : (
                    <Link 
                      className="nav-link"
                      to={item.link}
                      onClick={closeMenu}
                    >
                      <span className="nav-text">{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Actions Inside Navigation */}
            <div className="mobile-actions">
              <button className="apply-button mobile-apply">
                {language === 'EN' ? 'Apply Now' : 'สมัครเรียน'}
              </button>
              <button className="language-switcher" onClick={toggleLanguage}>
                {language === 'EN' ? 'TH' : 'EN'}
              </button>
            </div>
          </nav>
          
          <div className="nav-actions">
            <button className="apply-button desktop-apply">
              {language === 'EN' ? 'Apply Now' : 'สมัครเรียน'}
            </button>
            <button className="language-switcher" onClick={toggleLanguage}>
              {language === 'EN' ? 'TH' : 'EN'}
            </button>
            <button 
              className="menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;