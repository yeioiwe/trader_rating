const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

const config = {
    db: {
        host: '89.208.113.231',
        port: 33061,
        user: 'root',
        password: 'admin',
        database: 'trade'
    },
    siteUrl: 'https://anti-scamer.ru',
    outputPath: path.join(__dirname, 'sitemap.xml')
};

const staticUrls = [
    '/',
    '/verified',
    '/scammers',
    '/news',
    '/posts',
    '/review',
    '/policy',
    '/contact',
    '/privacy-policy'
];

function normalizePath(url) {
    if (!url || typeof url !== 'string') return null;
    url = url.trim();
    if (url === '') return null;
    return url.startsWith('/') ? url : `/${url}`;
}

async function generateSitemap() {
    try {
        const connection = await mysql.createConnection(config.db);
        const urls = [];


        staticUrls.forEach((path) => {
            urls.push(`${config.siteUrl}${path}`);
        });

        const [newsRows] = await connection.execute('SELECT url FROM news');
        const [postRows] = await connection.execute('SELECT url FROM post');
        const [scammerRows] = await connection.execute('SELECT url FROM scammer');

        const addUrlsFromRows = (rows, prefix) => {
            rows.forEach((row) => {
                const path = normalizePath(row.url);
                if (path) {
                    urls.push(`${config.siteUrl}/${prefix}${path}`);
                }
            });
        };

        addUrlsFromRows(newsRows, 'news');
        addUrlsFromRows(postRows, 'posts');
        addUrlsFromRows(scammerRows, 'scammers');

        const uniqueUrls = [...new Set(urls)];

        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
                .map(
                    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
                )
                .join('\n')}
</urlset>`;

        fs.writeFileSync(config.outputPath, sitemapXml, 'utf8');
        console.log(`Sitemap успешно создан: ${config.outputPath}`);

        await connection.end();
    } catch (error) {
        console.error('Ошибка при генерации sitemap:', error.message);
    }
}

generateSitemap()