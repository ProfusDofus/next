import { useTranslations } from "next-intl";

const Cart: React.FC<CartProps> = ({ }) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("cart.title")}</h1>
		</div>
	);
};

interface CartProps {

}

export default Cart;
