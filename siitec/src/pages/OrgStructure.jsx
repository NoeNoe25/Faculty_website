// src/components/OrgStructure.js
import React from "react";
import "../styles/OrgStructure.css";
// Import your organizational chart image
import orgChartImage from "../assets/albums/Organizational structure.png"; // or .png, .svg
import { useContent, useLanguage } from "../i18n/LanguageContext";
import orgStructureContent from "../i18n/content/orgStructure";

const OrgStructure = () => {
  const { t } = useLanguage();
  const c = useContent(orgStructureContent);
  return (
    <div className="org-chart-container page-org-structure">
      {/* Header */}
      <header className="org-chart-header">
        <div className="header-decoration"></div>
        <div className="header-content">
          <div className="header-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h1 className="header-title">{c.title}</h1>
          <p className="header-subtitle">{t("site.fullName")}</p>
          <p className="header-institution">{t("site.institution")}</p>
        </div>
      </header>

      {/* Chart Content - Just show the image */}
      <div className="org-chart-content">
        <div className="chart-image-container">
          <img
            src={orgChartImage}
            alt={c.chartAlt}
            className="org-chart-image"
          />
          <div className="image-caption">
            {c.caption}</div>
        </div>
      </div>
    </div>
  );
};

export default OrgStructure;
