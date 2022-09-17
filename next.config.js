// @ts-check

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		defaultLocale: "fr",
		locales: ["fr", "en"],
	},
};

module.exports = nextConfig;
