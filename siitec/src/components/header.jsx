// src/components/header.jsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  FaBook,
  FaHome,
  FaUniversity,
  FaIdCard
} from 'react-icons/fa';
import '../styles/header.css';
import logoImage from '../assets/logos/siiteclogo (1).png';
import { useLanguage } from '../i18n/LanguageContext';
import { ADMISSION_URL, SOCIAL_LINKS, isExternalLink } from '../config/site';

const SOCIAL_ICONS = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  youtube: <FaYoutube />,
  linkedin: <FaLinkedinIn />,
};

// Social Icons Component with consistent size
const SocialIcons = () => (
  <div className="header_social-icons">
    {SOCIAL_LINKS.map((social) => (
      <a
        key={social.id}
        href={social.url}
        aria-label={social.label}
        className="header_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        {SOCIAL_ICONS[social.id]}
      </a>
    ))}
  </div>
);

/** Renders internal routes with <Link> and anything off-site as a normal anchor in a new tab. */
const MenuLink = ({ to, className, onClick, children }) =>
  isExternalLink(to) ? (
    <a
      href={to}
      className={className}
      onClick={onClick}
      {...(to.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  ) : (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );

const MegaMenu = ({ data, isOpen, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="mega-menu">
      <div className="mega-menu-container">
        <div className="mega-menu-content">
          <div className="mega-menu-grid">
            {data.categories.map((category) => (
              <div key={category.id} className="mega-menu-category">
                <div className="mega-menu-category-header">
                  <span className="mega-menu-category-icon" aria-hidden="true">{category.icon}</span>
                  <h4 className="mega-menu-category-title">{category.title}</h4>
                </div>
                <ul className="mega-menu-category-list">
                  {category.items.map((item) => (
                    <li key={item.id} className={`mega-menu-item ${item.isHeader ? 'mega-menu-header' : ''}`}>
                      {item.isHeader ? (
                        <div className="mega-menu-header-title">
                          <span className="mega-menu-header-icon" aria-hidden="true">{item.icon}</span>
                          {item.name}
                        </div>
                      ) : (
                        <MenuLink to={item.link} className="mega-menu-link" onClick={onNavigate}>
                          {item.name}
                        </MenuLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {data.featured && (
            <div className="mega-menu-featured">
              <h4 className="mega-menu-featured-title">{data.featured.title}</h4>
              <div className="mega-menu-featured-grid">
                {data.featured.items.map((item) => (
                  <MenuLink key={item.id} to={item.link} className="mega-menu-featured-item" onClick={onNavigate}>
                    <span className="mega-menu-featured-icon" aria-hidden="true">{item.icon}</span>
                    <span className="mega-menu-featured-text">{item.name}</span>
                  </MenuLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const buildMenu = (t) => {
  const servicesMegaMenu = {
    categories: [
      {
        id: 'students',
        title: t('services.students'),
        icon: <FaGraduationCap />,
        items: [
          { id: 'apply', name: t('services.applyForStudy'), link: ADMISSION_URL },
          { id: 'rules', name: t('services.rules'), link: 'https://www.reg.kmitl.ac.th/rule/index.php?links=1' },
          { id: 'scholarships', name: t('services.scholarships'), link: 'https://osda.kmitl.ac.th/scholarship/' },
          { id: 'calendar', name: t('services.academicCalendar'), link: 'https://www.reg.kmitl.ac.th/educalendar/' },
          { id: 'documents', name: t('services.downloadDocuments'), link: 'https://drive.google.com/drive/folders/1J8w6NbAtBitgrqsvetnkWFQHWtTpPVQo' },
          { id: 'nano-classroom', name: t('services.nanoClassroom'), link: 'http://www.cmit.kmitl.ac.th/classroom/login/index.php' },
          { id: 'manu-skill', name: t('services.manuSkillCertificate'), link: 'https://skill.ami.kmitl.ac.th/' },
          { id: 'academic-services', name: t('services.academicServices'), link: 'https://www.kllc.kmitl.ac.th/' }
        ]
      },
      {
        id: 'faculty-staff',
        title: t('services.facultyStaff'),
        icon: <FaUserTie />,
        items: [
          { id: 'repair', name: t('services.reportRepair'), link: 'https://lin.ee/UOFslzH' },
          { id: 'position-form', name: t('services.positionForm'), link: 'https://www.ami.kmitl.ac.th/research/ami-research-center/' },
          { id: 'booking-faculty', name: t('services.instrumentBookingFaculty'), link: '/InstrumentBooking' },
          // External Partners sub-heading, listed under Faculty & Staff
          { id: 'partners-header', name: t('services.externalPartners'), isHeader: true, icon: <FaUsers /> },
          { id: 'visit', name: t('services.facultyVisit'), link: '/Contact' },
          { id: 'booking-service', name: t('services.instrumentBookingService'), link: 'http://www.cmit.kmitl.ac.th/testing-process/' },
          { id: 'partnership', name: t('services.partnershipInquiry'), link: 'mailto:ssitec@kmitl.ac.th' }
        ]
      }
    ],
    featured: {
      title: t('services.quickServices'),
      items: [
        { id: 'online-apply', name: t('services.onlineApplication'), link: ADMISSION_URL, icon: <FaIdCard /> },
        { id: 'document-request', name: t('services.documentRequest'), link: '/Contact', icon: <FaBook /> },
        { id: 'appointment', name: t('services.scheduleAppointment'), link: '/Contact', icon: <FaUniversity /> }
      ]
    }
  };

  const researchMegaMenu = {
    categories: [
      {
        id: 'research',
        title: t('research.research'),
        icon: <FaGraduationCap />,
        items: [
          { id: 'manu', name: t('research.manuGroup'), link: '/ManuResearcherProfile' },
          { id: 'nano', name: t('research.nanoGroup'), link: '/NanoResearcherProfile' }
        ]
      },
      {
        id: 'center',
        title: t('research.center'),
        icon: <FaUserTie />,
        items: [
          { id: 'cira', name: t('research.cira'), link: '/CiRAPage' },
          { id: 'attac', name: t('research.attac'), link: '/ATTACPage' },
          { id: 'kaisem', name: t('research.kaisem'), link: '/KAISEMPage' }
        ]
      }
    ]
  };

  return [
    { id: 'home', name: t('nav.home'), link: '/', icon: <FaHome /> },
    {
      id: 'apply',
      name: t('nav.apply'),
      link: '/programs',
      submenu: [
        { id: 'undergraduate', name: t('nav.undergraduate'), link: '/programs' },
        { id: 'graduate', name: t('nav.graduate'), link: '/programs' },
        { id: 'doctoral', name: t('nav.doctoral'), link: '/programs' }
      ]
    },
    { id: 'services', name: t('nav.services'), isMegaMenu: true, megaMenuData: servicesMegaMenu },
    { id: 'research', name: t('nav.researchAndCenter'), isMegaMenu: true, megaMenuData: researchMegaMenu },
    {
      id: 'departments',
      name: t('nav.departmentsOrganization'),
      submenu: [
        { id: 'nano', name: t('nav.deptNano'), link: '/NANODepartmentPage' },
        { id: 'manu', name: t('nav.deptManu'), link: '/MANUDepartmentPage' },
        {
          id: 'organization',
          name: t('nav.organization'),
          hasNested: true,
          nestedItems: [
            { id: 'alumni', name: t('nav.alumni'), link: 'https://www.kmitlalumni.org/' },
            { id: 'student-union', name: t('nav.studentUnion'), link: 'https://www.facebook.com/share/17aVVVWXqf/' }
          ]
        }
      ]
    },
    {
      id: 'about',
      name: t('nav.aboutUs'),
      submenu: [
        { id: 'vision', name: t('nav.visionMission'), link: '/About2' },
        { id: 'structure', name: t('nav.orgStructure'), link: '/OrgStructure' },
        { id: 'executive', name: t('nav.executive'), link: '/Executive' },
        { id: 'lecturer', name: t('nav.lecturer'), link: '/LecturerPage' },
        { id: 'staff', name: t('nav.staff'), link: '/AcademicStaff' }
      ]
    },
    { id: 'contact', name: t('nav.contact'), link: '/Contact' }
  ];
};

const Header = () => {
  const { t, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  const navRef = useRef(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
  }, []);

  // Close dropdowns when clicking outside the navigation, and everything on Escape.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu]);

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown((current) => (current === dropdownId ? null : dropdownId));
    setActiveNestedDropdown(null);
  };

  const toggleNestedDropdown = (dropdownId) => {
    setActiveNestedDropdown((current) => (current === dropdownId ? null : dropdownId));
  };

  const toggleMobileMenu = () => {
    setMenuOpen((open) => !open);
    setActiveDropdown(null);
  };

  const menuItems = buildMenu(t);

  const languageButton = (
    <button
      type="button"
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={t('header.languageToggleAria')}
    >
      {t('header.languageToggleLabel')}
    </button>
  );

  return (
    <header className="header site-header">
      {/* First Line: Logo + Social Icons */}
      <div className="header-top">
        <div className="header-container">
          <div className="logo-section">
            <div className="logo-container">
              <Link to="/" className="logo-link">
                <img src={logoImage} alt={t('header.logoAlt')} className="logo-img" />
                <div className="logo-text">
                  <span className="logo-line-1">{t('site.logoLine1')}</span>
                  <span className="logo-line-2">{t('site.logoLine2')}</span>
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
          <nav
            id="main-navigation"
            className={`nav ${menuOpen ? 'active' : ''}`}
            ref={navRef}
            aria-label={t('header.mainNavigation')}
          >
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`nav-item ${item.submenu || item.isMegaMenu ? 'has-dropdown' : ''} ${item.isMegaMenu ? 'has-mega-menu' : ''}`}
                >
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        className="nav-link dropdown-toggle"
                        onClick={() => toggleDropdown(item.id)}
                        aria-expanded={activeDropdown === item.id}
                      >
                        <span className="nav-text">{item.name}</span>
                        <FaChevronDown className="dropdown-arrow" aria-hidden="true" />
                      </button>
                      <ul className={`dropdown-menu ${activeDropdown === item.id ? 'show' : ''}`}>
                        {item.submenu.map((subItem) => (
                          <li
                            key={subItem.id}
                            className={`dropdown-item ${subItem.hasNested ? 'has-nested-dropdown' : ''}`}
                          >
                            {subItem.hasNested ? (
                              <>
                                <button
                                  type="button"
                                  className="dropdown-link nested-dropdown-toggle"
                                  onClick={() => toggleNestedDropdown(subItem.id)}
                                  aria-expanded={activeNestedDropdown === subItem.id}
                                >
                                  <span>{subItem.name}</span>
                                  <FaChevronDown className="nested-dropdown-arrow" aria-hidden="true" />
                                </button>
                                <ul className={`nested-dropdown-menu ${activeNestedDropdown === subItem.id ? 'show' : ''}`}>
                                  {subItem.nestedItems.map((nestedItem) => (
                                    <li key={nestedItem.id} className="nested-dropdown-item">
                                      <MenuLink to={nestedItem.link} onClick={closeMenu} className="nested-dropdown-link">
                                        {nestedItem.name}
                                      </MenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <MenuLink to={subItem.link} onClick={closeMenu} className="dropdown-link">
                                {subItem.name}
                              </MenuLink>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : item.isMegaMenu ? (
                    <>
                      <button
                        type="button"
                        className="nav-link dropdown-toggle mega-menu-toggle"
                        onClick={() => toggleDropdown(item.id)}
                        aria-expanded={activeDropdown === item.id}
                      >
                        <span className="nav-text">{item.name}</span>
                        <FaChevronDown className="dropdown-arrow" aria-hidden="true" />
                      </button>
                      <MegaMenu
                        data={item.megaMenuData}
                        isOpen={activeDropdown === item.id}
                        onNavigate={closeMenu}
                      />
                    </>
                  ) : (
                    <Link className="nav-link" to={item.link} onClick={closeMenu}>
                      <span className="nav-text">{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Actions Inside Navigation */}
            <div className="mobile-actions">
              <a
                href={ADMISSION_URL}
                className="apply-button mobile-apply"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('header.applyNow')}
              </a>
              {languageButton}
            </div>
          </nav>

          <div className="nav-actions">
            <a
              href={ADMISSION_URL}
              className="apply-button desktop-apply"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('header.applyNow')}
            </a>
            {languageButton}
            <button
              type="button"
              className="menu-toggle"
              onClick={toggleMobileMenu}
              aria-label={t('header.toggleMenu')}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} aria-hidden="true"></div>}
    </header>
  );
};

export default Header;
