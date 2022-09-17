import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";

import styles from "./theme-selector.module.scss";

const ThemeSelector = ({ theme = "dark" }: ThemeSelectorProps) => {
	const t = useTranslations();
	const [_theme, setTheme] = useState(theme);

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setTheme(e.target.value as "light" | "dark");
	};

	return (
		<select value={_theme} onChange={onChange} className={styles.theme_selector}>
			<option value="light">{t("theme.light")}</option>
			<option value="dark">{t("theme.dark")}</option>
		</select>
	);
};

interface ThemeSelectorProps {
	theme?: "light" | "dark";
}

export default ThemeSelector;
