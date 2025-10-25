/** @type {import('next-sitemap').IConfig} */
const services = ["landing-page", "e-commerce", "erp", "custom-website"];
const statics = ["why-chose-us", "term-conditions", "privacy-policy"];

const serviceUrls = services.map((slug) => ({ loc: `/services/${slug}` }));
const staticUrls = statics.map((slug) => ({ loc: `/${slug}` }));

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://katalisdev.my.id",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.8,
  additionalPaths: async () => [...serviceUrls, ...staticUrls],
  exclude: ["/admin/*"],
};
