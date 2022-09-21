import { useTranslations } from "next-intl";

const Map: React.FC<MapProps> = ({ }) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("map.title")}</h1>
		</div>
	);
};

interface MapProps {

}

export default Map;
