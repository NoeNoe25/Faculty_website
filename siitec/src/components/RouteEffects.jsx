import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Per-navigation side effects: scroll to the top (or to the #hash target) and
 * keep the document title in the current language.
 */
const RouteEffects = ({ titleKey }) => {
  const { pathname, hash } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    const siteName = t('site.shortName');
    // The home page (and any untitled route) shows the full school name.
    if (!titleKey || titleKey === 'home') {
      document.title = `${siteName} KMITL | ${t('site.fullName')}`;
      return;
    }
    document.title = `${t(`pageTitles.${titleKey}`)} | ${siteName} KMITL`;
  }, [titleKey, t]);

  return null;
};

export default RouteEffects;
