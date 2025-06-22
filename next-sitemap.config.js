/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://www.iguazutrasladosgg.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://www.iguazutrasladosgg.com/pt',
      hreflang: 'pt',
    },
    {
      href: 'https://www.iguazutrasladosgg.com/en',
      hreflang: 'en',
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // Se exportará como http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}