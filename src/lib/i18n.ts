import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import pl from "@/locales/pl.json";
import ua from "@/locales/ua.json";

const resources = {
  en: { translation: en },
  pl: { translation: pl },
  ua: { translation: ua },
};

const storedLanguage = localStorage.getItem("language");
const normalizedLanguage = storedLanguage === "uk" ? "ua" : storedLanguage || "pl";

if (storedLanguage === "uk") {
  localStorage.setItem("language", "ua");
}

i18n.use(initReactI18next).init({
  resources,
  lng: normalizedLanguage,
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
