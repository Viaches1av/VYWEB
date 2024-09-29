import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translations/en/translation.json';
import translationRU from './translations/ru/translation.json';
import translationUA from './translations/ua/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  ua: {
    translation: translationUA
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
