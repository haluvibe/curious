import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

const enUK = require("./strings/en-UK.json");
const esES = require("./strings/es-ES.json");

/**
 * Instance
 */
const i18nextInstance = i18next
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init(
        {
            defaultNS: "general",
            lng: "en",
            fallbackLng: "cimode",
            debug: false,
            // debug: process.env.NODE_ENV !== "production",
            resources: {
                en: enUK,
                es: esES
            },
            appendNamespaceToCIMode: true
        },
        err => {
            if (err) {
                throw new Error(`Something went wrong i18next: ${err}`);
            }
        }
    );

/**
 * Events
 */
i18nextInstance.on("languageChanged", lng => {
    // change `lang` attribute in <html>
    document.documentElement.setAttribute("lang", lng);
});

export default i18nextInstance;
