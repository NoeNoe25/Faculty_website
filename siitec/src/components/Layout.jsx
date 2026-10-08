// src/components/Layout.jsx
import React from 'react';
import Header from './header';
import Footer from './footer';
import { useLanguage } from '../i18n/LanguageContext';

const Layout = ({ children }) => {
  const { t } = useLanguage();

  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <Header />
      <main id="main-content" className="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
