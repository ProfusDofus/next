import { useTranslations } from "next-intl";

const Almanax = ({ }: AlmanaxProps) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("almanax.title")}</h1>
		</div>
	);
};

interface AlmanaxProps {

}

export default Almanax;
