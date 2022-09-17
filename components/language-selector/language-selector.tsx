import { useRouter } from "next/router";
import { ChangeEvent } from "react";

import styles from "./language-selector.module.scss";

const LanguageSelector = ({ }: LanguageSelectorProps) => {
	const { locale, locales, push, route } = useRouter();

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		push(route, undefined, { locale: e.currentTarget.value });
	};

	return (
		<select onChange={onChange} value={locale} className={styles.language_selector}>
			{
				(locales ?? []).map(l =>
					<option key={l} value={l}>{l}</option>)
			}
		</select>
	);
};

interface LanguageSelectorProps {

}

export default LanguageSelector;
