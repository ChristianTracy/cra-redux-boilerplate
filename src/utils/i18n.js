import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { en, es } from '../locales';

const options = {
  interpolation: {
    escapeValue: false
  },
  resources: { en, es }
};

i18next.use(LanguageDetector).init(options);

export default i18next;
