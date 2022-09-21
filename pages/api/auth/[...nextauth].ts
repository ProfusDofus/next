import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
	providers: [
		DiscordProvider({
			clientId: process.env.OAUTH_DISCORD_CLIENT_ID!,
			clientSecret: process.env.OAUTH_DISCORD_CLIENT_SECRET!,
		}),
	],
	secret: process.env.JWT_SECRET!,
	session: {
		strategy: "jwt",
	},
	jwt: {
		secret: process.env.JWT_SECRET!,
	},
	debug: false,
});
