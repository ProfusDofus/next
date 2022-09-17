import { useTranslations } from "next-intl";

const TradeHelper = ({ }: TradeHelperProps) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("trade-helper.title")}</h1>
		</div>
	);
};

interface TradeHelperProps {

}

export default TradeHelper;
