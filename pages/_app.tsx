import "../styles/globals.scss";

import { NextIntlProvider } from "next-intl";
import { AppProps } from "next/app";
import Head from "next/head";

import Header from "../components/header/header";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<NextIntlProvider>
			<Head>
				<title>Profus</title>
				<meta name="description" content="Profus" />
				<link rel="icon" href="/img/favicon.png" />
			</Head >
			<Header />
			<Component {...pageProps} />
		</NextIntlProvider >
	);
}

export default App;
