/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://arunasomesh.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/studio', '/studio/*', '/api', '/api/*', '/robots.txt', '/sitemap.xml'],
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/'),
    ];
  },
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/about') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/contact') {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
  },
};
