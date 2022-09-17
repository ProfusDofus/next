import { useTranslations } from "next-intl";

const Home = ({ }: HomeProps) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("home.title")}</h1>
		</div>
	);
};

interface HomeProps {

}

export default Home;
