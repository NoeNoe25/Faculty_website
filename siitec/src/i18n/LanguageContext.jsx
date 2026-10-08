import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from './en';
import th from './th';

export const LANGUAGES = { en, th };
export const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'siitec-language';

const LanguageContext = createContext(null);

const readStoredLanguage = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored && LANGUAGES[stored] ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const lookup = (dictionary, key) =>
  key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dictionary);

export const interpolate = (value, params) =>
  params ? value.replace(/\{(\w+)\}/g, (match, name) => (params[name] ?? match)) : value;

export const LanguageProvider = ({ children, initialLanguage }) => {
  const [language, setLanguageState] = useState(() => initialLanguage || readStoredLanguage());

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this visit only.
    }
  }, [language]);

  const setLanguage = useCallback((next) => {
    if (LANGUAGES[next]) setLanguageState(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === 'en' ? 'th' : 'en'));
  }, []);

  // Missing Thai keys fall back to English, then to the key itself.
  const t = useCallback(
    (key, params) => {
      let value = lookup(LANGUAGES[language], key);
      if (value === undefined) value = lookup(LANGUAGES[DEFAULT_LANGUAGE], key);
      if (value === undefined) {
        if (process.env.NODE_ENV !== 'production') console.warn(`Missing translation key: ${key}`);
        return key;
      }
      return typeof value === 'string' ? interpolate(value, params) : value;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, setLanguage, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return context;
};

const isPlainObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

// Lays translated content over the English content. Arrays merge item by item, so a
// translation only needs the fields that differ (e.g. a title, not an image or a URL).
const mergeContent = (base, override) => {
  if (override === undefined || override === null) return base;
  if (Array.isArray(base) && Array.isArray(override)) {
    return base.map((item, index) => mergeContent(item, override[index]));
  }
  if (isPlainObject(base) && isPlainObject(override)) {
    const merged = { ...base };
    Object.keys(override).forEach((key) => {
      merged[key] = mergeContent(base[key], override[key]);
    });
    return merged;
  }
  return override;
};

// For long, mostly static pages: returns tx(text), which looks the English text up in a
// phrase table shaped { th: { 'English text': 'Thai text' } }. Untranslated text stays English.
export const usePhrases = (phrases) => {
  const { language } = useLanguage();
  return useCallback((text) => phrases[language]?.[text] ?? text, [phrases, language]);
};

// Runs tx over every string in a data object (e.g. a program passed between pages), leaving
// values under `skipKeys` (ids, URLs, codes) untouched. The source data stays in English.
export const translateStrings = (value, tx, skipKeys = []) => {
  if (typeof value === 'string') return tx(value);
  if (Array.isArray(value)) return value.map((item) => translateStrings(item, tx, skipKeys));
  if (isPlainObject(value)) {
    const result = {};
    Object.keys(value).forEach((key) => {
      result[key] = skipKeys.includes(key) ? value[key] : translateStrings(value[key], tx, skipKeys);
    });
    return result;
  }
  return value;
};

// Page content lives in src/i18n/content as { en: {...}, th: {...} }.
// Returns the content for the current language, falling back to English field by field.
export const useContent = (content) => {
  const { language } = useLanguage();
  return useMemo(
    () => (language === DEFAULT_LANGUAGE ? content[DEFAULT_LANGUAGE] : mergeContent(content[DEFAULT_LANGUAGE], content[language])),
    [content, language]
  );
};
