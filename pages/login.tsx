import { signIn, signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const Login: React.FC<LoginProps> = ({ }) => {
	const t = useTranslations();
	const { status, data: session } = useSession();

	let content;
	switch(status) {
		case "unauthenticated": content = <button onClick={() => signIn("discord")}>{t("login.login_with_discord")}</button>; break;
		case "authenticated": content = <button onClick={() => signOut()}>{t("login.logout")}</button>; break;
	}

	return (
		<div>
			<h1>{t("login.title")}</h1>
			{content}
		</div>
	);
};

interface LoginProps {

}

export default Login;
