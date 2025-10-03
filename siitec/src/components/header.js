// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import '../styles/theme.css';
import '../styles/header.css';
import logoImage from '../assets/logos/siiteclogo (1).png';

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

  // Menu Items with EN + TH versions
  const menuItems = [
    { name: language === 'EN' ? 'Home' : 'หน้าหลัก', link: '/' },
    { 
      name: language === 'EN' ? 'Academics' : 'การศึกษา',
      submenu: [
        { name: language === 'EN' ? 'Undergraduate' : 'ปริญญาตรี', link: '/bsc' },
        { name: language === 'EN' ? 'Graduate' : 'บัณฑิตศึกษา', link: '/ProgramDetailsWithNav' },
        { name: language === 'EN' ? 'Online Programs' : 'หลักสูตรออนไลน์', link: '#online' }
      ]
    },
    { 
      name: language === 'EN' ? 'Research' : 'งานวิจัย',
      submenu: [
        { name: language === 'EN' ? 'Research Centers' : 'ศูนย์วิจัย', link: '#centers' },
        { name: language === 'EN' ? 'Projects' : 'โครงการวิจัย', link: '#projects' },
        { name: language === 'EN' ? 'Publications' : 'สิ่งตีพิมพ์', link: '#pubs' }
      ]
    },
    { 
      name: language === 'EN' ? 'Student Life' : 'ชีวิตนักศึกษา',
      submenu: [
        { name: language === 'EN' ? 'Clubs & Activities' : 'ชมรมและกิจกรรม', link: '/OrganizationalStructure' },
        { name: language === 'EN' ? 'Academic Calendar' : 'หอพัก', link: '/AcademicCalendar' },
        { name: language === 'EN' ? 'Events' : 'กิจกรรมพิเศษ', link: '#events' },
        { name: language === 'EN' ? 'News & Events' : 'ข่าวและกิจกรรม', link: '#news' }
      ]
    },
    { name: language === 'EN' ? 'Programs' : 'การรับสมัคร', link: '/programs' },
    { name: language === 'EN' ? 'About Us' : 'เกี่ยวกับเรา', link: '/aboutus' },
    { name: language === 'EN' ? 'Contact' : 'ติดต่อ', link: '#contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo-image">
            <Link to="/">
              <img src={logoImage} alt="SIITec Logo" />
            </Link>
          </div>
          <div className="logo-text">
            <p>{language === 'EN' ? 'School of Integrated Innovative Technology' : 'คณะเทคโนโลยีบูรณาการนวัตกรรม'}</p>
          </div>
        </div>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
        
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
                      {item.name} &nbsp;
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                    <ul className={`dropdown-menu vertical ${activeDropdown === item.name ? 'show' : ''}`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link 
                            className="dropdown-item" 
                            to={subItem.link}
                            onClick={() => {
                              setMenuOpen(false);
                              setActiveDropdown(null);
                            }}
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
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-actions">
            <button className="apply-button mobile-apply">{language === 'EN' ? 'Apply Now' : 'สมัครเรียน'}</button>
            <button className="language-switcher" onClick={toggleLanguage}>
              {language === 'EN' ? 'TH' : 'EN'}
            </button>
          </div>
        </nav>
        
        <div className="header-actions">
          <button className="apply-button desktop-apply">{language === 'EN' ? 'Apply Now' : 'สมัครเรียน'}</button>
          <button className="language-switcher" onClick={toggleLanguage}>
            {language === 'EN' ? 'TH' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;