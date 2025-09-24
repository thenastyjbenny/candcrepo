/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/who-we-are'),
    await config.transform(config, '/video-packages'),
    await config.transform(config, '/work'),
    await config.transform(config, '/get-in-touch'),
  ],
}
