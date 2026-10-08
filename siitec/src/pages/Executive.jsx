// src/components/OrganizationalStructure.js
import React, { useState } from "react";
import "../styles/Executive.css";
import { interpolate, useContent, useLanguage } from "../i18n/LanguageContext";
import executiveContent from "../i18n/content/executive";

// Import executive images from assets

import deanWipoo from "../assets/executive/1. Dean_ Assoc. Prof. Dr.Wipoo Sriseubsai.png";
import associateDeanWinadda from "../assets/executive/2. Associate Dean_ Assoc. Prof. Dr.Winadda Wongwiriyapan.png";
import associateDeanPitiporn from "../assets/executive/3. Associate Dean_ Asst. Prof. Dr.Pitiporn Thanomngam.png";
import associateDeanAnanta from "../assets/executive/4. Associate Dean_ Asst.Prof.Dr.Ananta Sinchai.png";
import associateDeanJatuporn from "../assets/executive/5. Associate Dean_ Assoc.Prof.Dr.Jatuporn Thongsri.png";
import assistantDeanPloypailin from "../assets/executive/6. Assistant Dean_ Asst.Prof.Dr.Ploypailin Yongsiri.jpg";
import assistantDeanDarinee from "../assets/executive/7. Associate Dean_ Assoc. Prof. Dr.Darinee Phromyothin.jpg";
import headOfDepartmentNano from "../assets/executive/8. Head of Department Nano_ Assoc. Prof. Dr.Korakot Onlaor.png";
import headOfDepartmentManu from "../assets/executive/9. Head of Department Manu_ Asst. Prof. Dr.Komkrit Jaksukam.png";
import centerHeadATAC from "../assets/executive/10. Center Head ATTAC_ Assoc. Prof. Dr.Navaphun Kayunkid.png";
import centerHeadCRA from "../assets/executive/11. Center Head CiRA_ Assoc.Prof.Dr.Santhad Chuwongin.png";
import centerHeadKAISEM from "../assets/executive/12. Center Head KAISEM_ Assoc.Prof.Dr.Chatrpol Pakasiri.jpg";

const Executive = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const people = [
    {
      id: "president",
      name: "Dr. Wipoo Sriseubsai",
      image: deanWipoo,
      category: "executive",
      email: "wipoo.sr@kmitl.ac.th",
      phone: "+66 (0) 2-329-8000",
    },
    {
      id: "vp-academic",
      name: "Assoc. Prof. Dr. Winadda Wongwiriyapan",
      image: associateDeanWinadda,
      category: "executive",
      email: "winadda.wo@kmitl.ac.th",
      phone: "+66 (0) 2-329-8001",
    },
    {
      id: "vp-research",
      name: "Asst. Prof. Dr. Pitiporn Thanomngam",
      image: associateDeanPitiporn,
      category: "executive",
      email: "pitiporn.th@kmitl.ac.th",
      phone: "+66 (0) 2-329-8002",
    },
    {
      id: "vp-admin",
      name: "Assoc. Prof. Dr. Jatuporn Thongsri",
      image: associateDeanJatuporn,
      category: "executive",
      email: "jatuporn.th@kmitl.ac.th",
      phone: "+66 (0) 2-329-8003",
    },
    {
      id: "dean-nano",
      name: "Assoc. Prof. Dr. Korakot Onlaor",
      image: headOfDepartmentNano,
      category: "department",
      email: "korakot.on@kmitl.ac.th",
      phone: "+66 (0) 2-329-8004",
    },
    {
      id: "dean-manu",
      name: "Asst. Prof. Dr. Kamol Wasapinyokul",
      image: headOfDepartmentManu,
      category: "department",
      email: "kamol.wa@kmitl.ac.th",
      phone: "+66 (0) 2-329-8005",
    },
    {
      id: "dean-cira",
      name: "Asst. Prof. Dr. Santhad Chuwongin",
      image: centerHeadCRA,
      category: "researchCenter",
      email: "santhad.ch@kmitl.ac.th",
      phone: "+66 (0) 2-329-8006",
    },
    {
      id: "director-attac",
      name: "Assoc. Prof. Dr. Navaphun Kayunkid",
      image: centerHeadATAC,
      category: "researchCenter",
      email: "navaphun.ka@kmitl.ac.th",
      phone: "+66 (0) 2-329-8007",
    },
    {
      id: "director-kaisem",
      name: "Assoc. Prof. Dr. Chatrpol Pakasiri",
      image: centerHeadKAISEM,
      category: "researchCenter",
      email: "chatrpol.pa@kmitl.ac.th",
      phone: "+66 (0) 2-329-8008",
    },
    {
      id: "dean-academic",
      name: "Assoc. Prof. Dr. Darinee Phromyothin",
      image: assistantDeanDarinee,
      category: "academic",
      email: "darinee.ph@kmitl.ac.th",
      phone: "+66 (0) 2-329-8009",
    },
    {
      id: "dean-student",
      name: "Asst. Prof. Dr. Ploypailin Yongsiri",
      image: assistantDeanPloypailin,
      category: "administrative",
      email: "ploypailin.yo@kmitl.ac.th",
      phone: "+66 (0) 2-329-8010",
    },
    {
      id: "associateDean",
      name: "Asst. Prof. Dr. Ananta Sinchai",
      image: associateDeanAnanta,
      category: "research",
      email: "ananta.si@kmitl.ac.th",
      phone: "+66 (0) 2-329-8011",
    },
  ];

  const { t } = useLanguage();
  const c = useContent(executiveContent);
  const leadership = people.map((person) => ({
    ...person,
    ...c.leaders[person.id],
  }));

  // Filter executives based on search and category
  const filteredLeadership = leadership.filter((leader) => {
    const term = searchQuery.toLowerCase();
    const name = (leader.name || "").toLowerCase();
    const title = (leader.title || "").toLowerCase();
    const department = (leader.department || "").toLowerCase();
    const email = (leader.email || "").toLowerCase();

    const matchesSearch =
      name.includes(term) ||
      title.includes(term) ||
      department.includes(term) ||
      email.includes(term);

    const matchesCategory =
      selectedCategory === "all" || leader.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Count executives by category
  const countIn = (category) =>
    leadership.filter((l) => l.category === category).length;
  const filterCategories = [
    { id: "executive", label: c.categories.executive },
    { id: "department", label: c.categories.department },
    { id: "researchCenter", label: c.researchCentersFilter },
  ];

  // Group filtered executives by category
  const groupedLeadership = filteredLeadership.reduce((groups, leader) => {
    const category = leader.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(leader);
    return groups;
  }, {});

  return (
    <div className="executive-container page-executive">
      {/* Header Section */}
      <header className="executive-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <h1 className="header-title">{c.title}</h1>
          <p className="header-subtitle">{t("site.fullName")}</p>
          <p className="header-institution">{t("site.institution")}</p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="search-container">
          <div className="search-box">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder={c.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label={c.clearSearch}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="filter-section">
          <button
            className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            {c.allExecutives}
            <span className="count-badge">{leadership.length}</span>
          </button>
          {filterCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
              <span className="count-badge">{countIn(category.id)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <p>
          {interpolate(
            filteredLeadership.length === 1 ? c.resultsOne : c.resultsMany,
            { count: filteredLeadership.length },
          )}
          {searchQuery && (
            <span className="search-term">
              {interpolate(c.resultsFor, { query: searchQuery })}
            </span>
          )}
          {selectedCategory !== "all" && !searchQuery && (
            <span className="search-term">
              {interpolate(c.resultsIn, {
                category: c.categories[selectedCategory],
              })}
            </span>
          )}
        </p>
      </div>

      {/* Executive Leadership Section */}
      <div className="executive-content">
        {filteredLeadership.length > 0 ? (
          Object.entries(groupedLeadership).map(([category, leaders]) => (
            <div key={category} className="category-group">
              <h2 className="category-title">{c.categories[category]}</h2>
              <div className="category-divider"></div>

              <div className="executive-grid">
                {leaders.map((leader) => (
                  <article key={leader.id} className="executive-card">
                    <div className="card-header">
                      <div className="executive-image-wrapper">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="executive-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://via.placeholder.com/300x400?text=Executive+Photo";
                          }}
                        />
                        <div className="executive-badge">{leader.badge}</div>
                      </div>
                    </div>

                    <div className="card-body">
                      <h3 className="executive-name">{leader.name}</h3>
                      <p className="executive-title">{leader.title}</p>

                      <div className="card-divider"></div>

                      <div className="people-contact-info">
                        <div className="info-item">
                          <svg
                            className="info-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M2.5 5.5L8 9l5.5-3.5M3 11h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <a
                            href={`mailto:${leader.email}`}
                            className="info-link"
                          >
                            {leader.email}
                          </a>
                        </div>

                        <div className="info-item">
                          <svg
                            className="info-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M14 11v2a1.5 1.5 0 0 1-1.5 1.5A12.5 12.5 0 0 1 2 4 1.5 1.5 0 0 1 3.5 2.5H6l1 3-1.5 1a9 9 0 0 0 5 5l1-1.5 3 1z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="info-text">{leader.phone}</span>
                        </div>
                      </div>

                      <div className="responsibilities-section">
                        <h4 className="section-label">
                          {c.keyResponsibilities}
                        </h4>
                        <div className="responsibilities-list">
                          {leader.responsibilities.map((resp, idx) => (
                            <div key={idx} className="responsibility-item">
                              <span className="responsibility-marker">•</span>
                              <span className="responsibility-text">
                                {resp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="reporting-section">
                        <div className="reporting-item">
                          <span className="reporting-label">{c.reportsTo}</span>
                          <span className="reporting-value">
                            {leader.reportsTo}
                          </span>
                        </div>
                        <div className="reporting-item">
                          <span className="reporting-label">
                            {c.directReports}
                          </span>
                          <div className="direct-reports-list">
                            {leader.directReports.map((report, idx) => (
                              <span key={idx} className="report-tag">
                                {report}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <svg
              className="no-results-icon"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <circle
                cx="26"
                cy="26"
                r="18"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M39 39l16 16"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <h3>{c.noResultsTitle}</h3>
            <p>{c.noResultsText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Executive;
