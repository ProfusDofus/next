import { useTranslations } from "next-intl";

const _404 = ({ }: _404Props) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("_404.title")}</h1>
		</div>
	);
};

interface _404Props {

}

export default _404;
