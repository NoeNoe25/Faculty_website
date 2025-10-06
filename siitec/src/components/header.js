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
  FaTimes
} from 'react-icons/fa';
import '../styles/theme.css';
import '../styles/header.css';
import logoImage from '../assets/logos/siiteclogo (1).png';

// Social Icons Component with consistent size
const SocialIcons = () => (
  <div className="social-icons">
    <a href="#" aria-label="Facebook" className="social-icon">
      <FaFacebookF />
    </a>
    <a href="#" aria-label="Twitter" className="social-icon">
      <FaTwitter />
    </a>
    <a href="#" aria-label="YouTube" className="social-icon">
      <FaYoutube />
    </a>
    <a href="#" aria-label="LinkedIn" className="social-icon">
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

  // Menu Items with EN + TH versions
  const menuItems = [
    { name: language === 'EN' ? 'Home' : 'หน้าหลัก', link: '/' },
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
      name: language === 'EN' ? 'Services' : 'งานวิจัย',
      submenu: [
        { name: language === 'EN' ? 'Students' : 'ศูนย์วิจัย', link: '#centers' },
        { name: language === 'EN' ? 'Faculty staff' : 'โครงการวิจัย', link: '#projects' },
        { name: language === 'EN' ? 'External' : 'สิ่งตีพิมพ์', link: '#pubs' }
      ]
    },
    { 
      name: language === 'EN' ? 'Research and Center' : 'ชีวิตนักศึกษา',
      submenu: [
        { name: language === 'EN' ? 'Center' : 'ชมรมและกิจกรรม', link: '/OrganizationalStructure' },
        { name: language === 'EN' ? 'Research' : 'หอพัก', link: '/AcademicCalendar' }
      ]
    },
    { 
      name: language === 'EN' ? 'Departments/Organization' : 'ชีวิตนักศึกษา',
      submenu: [
        { name: language === 'EN' ? 'Department of Nanoscience and Nanotechnology (NANO)' : 'ชมรมและกิจกรรม', link: '#' },
        { name: language === 'EN' ? 'Department of Manufacturing System Technology (MANU)' : 'หอพัก', link: '#' },
        { name: language === 'EN' ? 'Organization' : 'หอพัก', link: '/AcademicCalendar' }
      ]
    }, 
    { 
      name: language === 'EN' ? 'About Us' : 'เกี่ยวกับเรา',
      submenu: [
        { name: language === 'EN' ? 'Vision/Mission' : 'ชมรมและกิจกรรม', link: '/About2' },
        { name: language === 'EN' ? 'Organizational structure' : 'หอพัก', link: '/OrganizationalStructure' },
        { name: language === 'EN' ? 'Faculty Committee' : 'หอพัก', link: '#' },
        { name: language === 'EN' ? 'Executive' : 'หอพัก', link: '#' },
        { name: language === 'EN' ? 'Lecturer' : 'หอพัก', link: '#' },
        { name: language === 'EN' ? 'Staff' : 'หอพัก', link: '#' }
      ]
    },
    { name: language === 'EN' ? 'Contact' : 'ติดต่อเรา', link: '/Contact' }
  ];

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
                  className={`nav-item ${item.submenu ? 'has-dropdown' : ''}`}
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
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="mobile-actions">
            <button className="apply-button mobile-apply">
              {language === 'EN' ? 'Apply Now' : 'สมัครเรียน'}
            </button>
            <button className="language-switcher" onClick={toggleLanguage}>
              {language === 'EN' ? 'TH' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;