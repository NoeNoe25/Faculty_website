import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/NotFound.css';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <section className="page-not-found">
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">{t('notFound.title')}</h1>
      <p className="not-found-message">{t('notFound.message')}</p>
      <Link to="/" className="btn btn-primary">
        {t('notFound.backHome')}
      </Link>
    </section>
  );
};

export default NotFound;
