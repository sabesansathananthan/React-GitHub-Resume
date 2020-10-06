import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Github Resume Generator": "Github Resume Generator"
    }
  },
  es: {
    translation: {
      "Github Resume Generator": "Generador de CV Github"
    }
  },
  de: {
    translation: {
      "Github Resume Generator": "Github Resume Generator"
    }
  },
  pl: {
    translation: {
      "Github Resume Generator": "Generator wznawiania Github"
    }
  },
  it: {
    translation: {
      "Github Resume Generator": "Github Resume Generator"
    }
  },
  pt: {
    translation: {
      "Github Resume Generator": "Gerador de currículo Github"
    }
  },
  fr: {
    translation: {
      "Github Resume Generator": "Générateur de CV Github"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;