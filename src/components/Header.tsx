import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import i18n from "../../i18n";
import { LangContext } from "../App";

export function Header() {
	const context = useContext(LangContext);
	const location = useLocation();
	useEffect(() => {
		console.log("languageChanged");
		setNavigation([
			{ name: "Home", href: `/${context.lang}/` },
			{ name: "About", href: `/${context.lang}/about` },
			{ name: "Blog", href: `/${context.lang}/blog` },
			{ name: "Services", href: `/${context.lang}/services` },
			{ name: "Contact", href: `/${context.lang}/contact` },
		]);
	}, [context.lang]);

	const [navigation, setNavigation] = useState([
		{ name: "Home", href: `/${context.lang}/` },
		{ name: "About", href: `/${context.lang}/about` },
		{ name: "Blog", href: `/${context.lang}/blog` },
		{ name: "Services", href: `/${context.lang}/services` },
		{ name: "Contact", href: `/${context.lang}/contact` },
	] as Array<{ name: string; href: string }>);
	return (
		<header className="flex w-full justify-between items-center px-6 py-4">
			<span className="text-3xl font-semibold">Giraffe Uncle</span>
			<nav className="space-x-4 font-medium text-xl">
				{navigation.map((item) => (
					<Link key={item.name} to={item.href}>
						{item.name}
					</Link>
				))}
			</nav>
		</header>
	);
}
