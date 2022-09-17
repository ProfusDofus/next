import { useTranslations } from "next-intl";

const Jobs = ({ }: JobsProps) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("jobs.title")}</h1>
		</div>
	);
};

interface JobsProps {

}

export default Jobs;
