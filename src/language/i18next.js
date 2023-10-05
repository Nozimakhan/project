import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
const Languages = ["uz", "ru", "en"]

i18n
 .use(Backend)
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
    fallbackLng: "uz",
    debug: false,
    whiteList: Languages,
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: ["cookie","localStorage"],
        lookupLocalStorage: "lang",
        lookupCookie: "lang",
        caches: ["cookie", "localStorage"]
    }
 });

export default i18n;