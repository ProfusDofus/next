import { useTranslations } from "next-intl";

const _Error = ({ }: _ErrorProps) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("_error.title")}</h1>
		</div>
	);
};

interface _ErrorProps {

}

export default _Error;
