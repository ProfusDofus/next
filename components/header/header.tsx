import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import LanguageSelector from "../language-selector/language-selector";
import ThemeSelector from "../theme-selector/theme-selector";
import styles from "./header.module.scss";

const Header = ({ messages }: HeaderProps) => {
	const t = useTranslations("header");
	const { route } = useRouter();

	const links = [
		{ href: "/", label: t("home"), icon: "/img/profus.svg" },
		{ href: "/news", label: t("news"), icon: "/img/icons/news.png" },
		{ href: "/map", label: t("map"), icon: "/img/icons/map.png" },
		{ href: "/almanax", label: t("almanax"), icon: "/img/icons/almanax.png" },
		{ href: "/idols", label: t("idols"), icon: "/img/icons/idols.png" },
		{ href: "/stuff", label: t("stuff"), icon: "/img/icons/stuff.png" },
		{ href: "/jobs", label: t("jobs"), icon: "/img/icons/jobs.png" },
		{ href: "/breaking", label: t("breaking"), icon: "/img/icons/breaking.png" },
		{ href: "/fm", label: t("fm"), icon: "/img/icons/fm.png" },
		{ href: "/cart", label: t("cart"), icon: "/img/icons/cart.png" },
		{ href: "/trade-helper", label: t("trade-helper"), icon: "/img/icons/trade-helper.png" },
		{ href: "/inventory", label: t("inventory"), icon: "/img/icons/inventory.png" },
		{ href: "/login", label: t("login"), icon: "/img/icons/login.png" },
	];

	return (
		<nav className={styles.nav}>
			{
				links.map(({ href, label, icon }, i) => (
					<Link key={i} href={href}>
						<a className={classNames({"active": route === href})}>
							<img src={icon} alt={label} title={label} />
							{ /*
								<span>{label}</span>
							*/ }
						</a>
					</Link>
				))
			}
			<LanguageSelector />
			<ThemeSelector />
		</nav>
	);
};

interface HeaderProps {
	messages: Record<string, string>;
}

export function getStaticProps({ locale }: { locale: NonNullable<NextRouter["locale"]> }): { props: HeaderProps } {
	return {
		props: {
			messages: {
				...require(`../../messages/${locale}.json`),
			},
		},
	};
}

export default Header;
