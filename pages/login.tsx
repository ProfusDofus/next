import { useTranslations } from "next-intl";

const Login = ({ }: LoginProps) => {
	const t = useTranslations();
	return (
		<div>
			<h1>{t("login.title")}</h1>
		</div>
	);
};

interface LoginProps {

}

export default Login;
