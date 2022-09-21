import { useTranslations } from "next-intl";

const Breaking: React.FC<BreakingProps> = ({ }) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("breaking.title")}</h1>
		</div>
	);
};

interface BreakingProps {

}

export default Breaking;
