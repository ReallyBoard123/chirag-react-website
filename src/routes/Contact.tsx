import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { changeLanguage } from "i18next";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { LangContext } from "../App";
import { useContext } from "react";

export function Contact() {
	const context = useContext(LangContext);
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();

	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
		const { pathname, search } = location;

		const segments = pathname.slice(1).split("/"); //split on /
		segments.splice(0, 1, lang); // replace existing lang with new lang
		context.setLang(lang);
		navigate("/" + segments.join("/") + search, { replace: true });
	};

	return (
		<div className="p-20">
			<span>{t("test:section")}</span>
			<button className="bg-red-300 block" onClick={() => changeLanguage("hi")}>
				hi
			</button>
			<button
				className="bg-blue-300 block"
				onClick={() => changeLanguage("en")}
			>
				en
			</button>
		</div>
	);
}
