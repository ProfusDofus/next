import { useTranslations } from "next-intl";

const News: React.FC<NewsProps> = ({ }) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("news.title")}</h1>
		</div>
	);
};

interface NewsProps {

}

export default News;
