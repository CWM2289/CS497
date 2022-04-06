import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './assets/translations/en/common.json';
import frCommon from './assets/translations/fr/common.json';
// According to the ISO_3166-1 standard the codes from
// QM-QZ are user assigned codes that can be used for
// indicating things like specific territories or areas
// Therefore, QU will be used to indicate Quebec specific text
/**
 * Initialization of the i18next module
 * @returns {void}
 */
export default () => {
  i18next.use(initReactI18next).init({
    interpolation: { escapeValue: false },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',
    resources: {
      en: {
        common: {
          ...enCommon,
        },
      },
      fr: {
        common: {
          ...frCommon,
        },
      },
    },
  });
  i18next.changeLanguage(navigator && navigator.language && navigator.language.substring(0, 2).toLowerCase() === 'fr' ? 'fr' : 'en');
};
