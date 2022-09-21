import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

import LanguageSelector from "../language-selector/language-selector";
import ThemeSelector from "../theme-selector/theme-selector";
import styles from "./header.module.scss";

const Header: React.FC<HeaderProps> = ({ }) => {
	const t = useTranslations();
	const { route } = useRouter();

	const links = [
		{ href: "/", label: t("home.title"), icon: "/img/profus.svg" },
		{ href: "/news", label: t("news.title"), icon: "/img/icons/news.png" },
		{ href: "/map", label: t("map.title"), icon: "/img/icons/map.png" },
		{ href: "/almanax", label: t("almanax.title"), icon: "/img/icons/almanax.png" },
		{ href: "/idols", label: t("idols.title"), icon: "/img/icons/idols.png" },
		{ href: "/stuff", label: t("stuff.title"), icon: "/img/icons/stuff.png" },
		{ href: "/jobs", label: t("jobs.title"), icon: "/img/icons/jobs.png" },
		{ href: "/breaking", label: t("breaking.title"), icon: "/img/icons/breaking.png" },
		{ href: "/fm", label: t("fm.title"), icon: "/img/icons/fm.png" },
		{ href: "/cart", label: t("cart.title"), icon: "/img/icons/cart.png" },
		{ href: "/trade-helper", label: t("trade-helper.title"), icon: "/img/icons/trade-helper.png" },
		{ href: "/inventory", label: t("inventory.title"), icon: "/img/icons/inventory.png" },
		{ href: "/login", label: t("login.title"), icon: "/img/icons/login.png" },
	];

	return (
		<nav className={styles.nav}>
			{
				links.map(({ href, label, icon }, i) => (
					<Link key={i} href={href}>
						<a className={classNames({ [styles.active]: route === href })}>
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

}

export default Header;
