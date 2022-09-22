import {
	createBrowserRouter,
	Link,
	Route,
	RouterProvider,
	Routes,
} from "react-router-dom";

import "../i18n.js";

import { About } from "./routes/About";
import { Blog } from "./routes/Blog";

import { Services } from "./routes/Services";
import { Contact } from "./routes/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./routes/Home";
import { Posts } from "./routes/Posts";
import { useState, useContext, Dispatch, SetStateAction } from "react";

import React from "react";
export const LangContext = React.createContext({} as any);

export interface Post {
	id: number;
	title: string;
	content: string;
}

export function App() {
	const [lang, setLang] = useState("en");
	return (
		<LangContext.Provider value={{ lang: lang, setLang: setLang }}>
			<Header />
			<Routes>
				<Route path="/:lang/" element={<Home />} />
				<Route path="/:lang/about" element={<About />} />
				<Route path="/:lang/blog" element={<Blog />} />
				<Route path="/:lang/blog/:id" element={<Posts />} />
				<Route path="/:lang/services" element={<Services />} />
				<Route path="/:lang/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</LangContext.Provider>
	);
}
