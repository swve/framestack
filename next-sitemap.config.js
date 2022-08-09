/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.WEBSITE_HOST || "https://framestack.net",
  generateRobotsTxt: true,
  outDir: "public",
};

module.exports = config;
