import { useTranslations } from "next-intl";

const Idols: React.FC<IdolsProps> = ({ }) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("idols.title")}</h1>
		</div>
	);
};

interface IdolsProps {

}

export default Idols;
