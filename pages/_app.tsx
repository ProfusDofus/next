import "../styles/globals.scss";

import { NextIntlProvider } from "next-intl";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";

import Header from "../components/header/header";
import English from "../messages/en.json";
import French from "../messages/fr.json";

const App = ({ Component, pageProps }: AppProps) => {
	const { locale, route } = useRouter();
	const messages = useMemo(() => {
		switch(locale) {
			case "en": return English;
			case "fr": return French;
			default: return English;
		}
	}, [locale]);
	const onError = console.error;
	const formats = {
		dateTime: {
			short: {
				day: "numeric",
				month: "short",
				year: "numeric",
			},
		},
		number: {
			precise: {
				maximumFractionDigits: 5,
			},
		},
	} as const;
	const title = messages[(route.slice(1) || "home") as "home"]?.["title"] ?? "";
	return (
		<NextIntlProvider
			locale={locale}
			messages={messages}
			onError={onError}
			formats={formats}>
			<Head>
				<title>Profus - {title}</title>
				<meta name="description" content="Profus" />
				<link rel="icon" href="/img/favicon.png" />
			</Head >
			<Header />
			<Component {...pageProps} />
		</NextIntlProvider >
	);
};

export default App;
