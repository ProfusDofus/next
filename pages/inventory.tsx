import { useTranslations } from "next-intl";

const Inventory: React.FC<InventoryProps> = ({ }) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("inventory.title")}</h1>
		</div>
	);
};

interface InventoryProps {

}

export default Inventory;
