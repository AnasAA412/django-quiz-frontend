import i18n from "i18next";

import { initReactI18next } from "react-i18next";
// import common_en from './translation/en.json';
// import common_ml from './translation/ml.json';

// const resources = {
//     en: {
//         translation: common_en
//     },
//     ml: {
//         translation: common_ml
//     }
// }

i18n.use(initReactI18next).init({

  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
