// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// File JSON bahasa
import translationID from './locales/id/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  id: { translation: translationID },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
