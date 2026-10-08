import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/footer.css";
import logoImage from "../assets/logos/siiteclogo (1).png";
import { useLanguage } from "../i18n/LanguageContext";
import {
  ADMISSION_URL,
  SOCIAL_LINKS,
  isExternalLink,
} from "../config/site";

const SOCIAL_ICONS = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  youtube: <FaYoutube />,
  linkedin: <FaLinkedinIn />,
};

// Same details as the Contact page.
const CONTACT = {
  phone: "02-329-8000",
  phoneHref: "tel:+6623298000",
  email: "siitec@kmitl.ac.th",
};

const KMITL_URL = "https://www.kmitl.ac.th";

const LINK_GROUPS = [
  {
    id: "study",
    titleKey: "footer.study",
    links: [
      { labelKey: "footer.programs", to: "/programs" },
      { labelKey: "footer.admissions", to: ADMISSION_URL },
      {
        labelKey: "footer.scholarships",
        to: "https://osda.kmitl.ac.th/scholarship/",
      },
      // {
      //   labelKey: "footer.academicCalendar",
      //   to: "https://www.kmitl.ac.th/academic-calendar",
      // },
      {
        labelKey: "footer.internationalStudents",
        to: "/InternationalStudentPage",
      },
    ],
  },
  {
    id: "about",
    titleKey: "footer.about",
    links: [
      { labelKey: "footer.visionMission", to: "/About2" },
      { labelKey: "footer.executives", to: "/Executive" },
      { labelKey: "footer.lecturers", to: "/LecturerPage" },
      // { labelKey: 'footer.staff', to: '/AcademicStaff' },
      // { labelKey: 'footer.orgStructure', to: '/OrgStructure' },
    ],
  },
  {
    id: "research",
    titleKey: "footer.researchServices",
    links: [
      { labelKey: "footer.deptNano", to: "/NANODepartmentPage" },
      { labelKey: "footer.deptManu", to: "/MANUDepartmentPage" },
      { labelKey: "footer.researchCenters", to: "/CiRAPage" },
      // { labelKey: "footer.instrumentBooking", to: "/InstrumentBooking" },
      // { labelKey: "footer.newsEvents", to: NEWS_URL },
    ],
  },
  {
    id: "kmitl",
    titleKey: "footer.kmitl",
    links: [
      { labelKey: "footer.kmitlWebsite", to: KMITL_URL },
      { labelKey: "footer.registration", to: "https://reg.kmitl.ac.th" },
    ],
  },
];

const FooterLink = ({ to, children }) =>
  isExternalLink(to) ? (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link to={to}>{children}</Link>
  );

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer site-footer">
      <div className="footer-container">
        <div className="footer-main-content">
          <div className="footer-logo">
            <img
              src={logoImage}
              alt={t("header.logoAlt")}
              className="logo-img"
              loading="lazy"
            />
            <p>
              {t("site.fullName")}
              <br />
              {t("site.institution")}
            </p>
          </div>

          <div className="footer-links-horizontal">
            {LINK_GROUPS.map((group) => (
              <div key={group.id} className="link-group">
                <h4>{t(group.titleKey)}</h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.labelKey}>
                      <FooterLink to={link.to}>{t(link.labelKey)}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-social">
            <h4>{t("footer.followUs")}</h4>
            <div className="social-icons">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SOCIAL_ICONS[social.id]}
                </a>
              ))}
            </div>
            <address className="footer-contact">
              <p>
                <FaMapMarkerAlt aria-hidden="true" />{" "}
                <span className="footer-address">{t("footer.address")}</span>
              </p>
              <p>
                <FaPhone aria-hidden="true" />{" "}
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </p>
              <p>
                <FaEnvelope aria-hidden="true" />{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
