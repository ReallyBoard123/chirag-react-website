import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./copy/en";
import hi from "./copy/hi";

const resources = {
	en: en,
	hi: hi,
};

i18n
	.use(initReactI18next)
	.use(new LanguageDetector())
	.init({
		resources,
		fallbackLng: "en",
		lng: "en",
		debug: false,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		react: {
			bindI18n: "languageChanged",
			bindI18nStore: "",
			transEmptyNodeValue: "",
			transSupportBasicHtmlNodes: true,
			transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
			useSuspense: true,
		},
		detection: {
			order: ["path"],
			lookupFromPathIndex: 0,
		},
	});

export default i18n;
