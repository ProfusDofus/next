import { useTranslations } from "next-intl";

const Stuff: React.FC<StuffProps> = ({ }) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("stuff.title")}</h1>
		</div>
	);
};

interface StuffProps {

}

export default Stuff;
