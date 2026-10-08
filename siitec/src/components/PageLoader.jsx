import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

// Shown while a lazily loaded page chunk downloads; keeps the footer from jumping up.
const PageLoader = () => {
  const { t } = useLanguage();
  return (
    <div role="status" aria-live="polite" style={{ minHeight: '100vh' }}>
      <span className="visually-hidden">{t('common.loading')}</span>
    </div>
  );
};

export default PageLoader;
