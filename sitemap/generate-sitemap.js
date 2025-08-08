const https = require("https");
const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

const STATIC_ROUTES = [
  { loc: "/", priority: 1 },
  { loc: "/verified", priority: 0.9 },
  { loc: "/scammers", priority: 0.9 },
  { loc: "/news", priority: 0.6 },
  { loc: "/posts", priority: 0.7 },
  { loc: "/review", priority: 0.5 },
  { loc: "/policy", priority: 0.5 },
  { loc: "/contact", priority: 0.5 },
  { loc: "/privacy-policy", priority: 0.5 },
];

const TODAY = new Date().toISOString().split("T")[0];

/**
 * @param {string} loc
 * @param {string} lastmod
 * @param {string} changefreq
 * @param {number} priority
 */

const buildUrl = (loc, lastmod, changefreq = "monthly", priority = 0.5) => {
  const cleanLoc = loc.replace(/^\/+/, "").replace(/\/+$/, "");
  const fullUrl = `https://anti-scamer.ru/${cleanLoc}`;
  return `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

function formatDate(date) {
  if (!date) return TODAY;
  if (typeof date === "string") return date.split("T")[0];
  return new Date(date).toISOString().split("T")[0];
}

async function getDbEntries() {
  const connection = await mysql.createConnection({
    host: "89.208.113.231",
    user: "root",
    password: "admin",
    database: "trade",
    port: 33061,
  });

  const [scammers] = await connection.query(`SELECT url, lastmod FROM scammer`);
  const [verified] = await connection.query(
    `SELECT url, lastmod FROM verified`
  );
  const [posts] = await connection.query(`SELECT url, lastmod FROM post`);
  const [news] = await connection.query(`SELECT url, lastmod FROM news`);

  await connection.end();

  const formatEntries = (items, changefreq, priority, prefix) =>
    items.map((item) =>
      buildUrl(
        `${prefix}/${item.url}`,
        formatDate(item.lastmod),
        changefreq,
        priority
      )
    );

  return [
    ...formatEntries(scammers, "weekly", 0.9, "scammers"),
    ...formatEntries(verified, "weekly", 0.9, "verified"),
    ...formatEntries(posts, "weekly", 0.7, "posts"),
    ...formatEntries(news, "daily", 0.6, "news"),
  ];
}

async function generateSitemap() {
  let sitemapEntries = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ];

  // Добавляем статические страницы
  for (const route of STATIC_ROUTES) {
    sitemapEntries.push(buildUrl(route.loc, TODAY, "monthly", route.priority));
  }

  // Добавляем страницы из базы
  const dbUrls = await getDbEntries();
  sitemapEntries.push(...dbUrls);

  sitemapEntries.push("</urlset>");

  const finalXml = sitemapEntries.join("\n");

  const outputPath = path.resolve(__dirname, "../web/public/sitemap.xml");
  fs.writeFileSync(outputPath, finalXml, "utf8");
  console.log("generated:", outputPath);
}

function pingYandex(sitemapUrl) {
  const pingUrl = `https://yandex.ru/ping?sitemap=${encodeURIComponent(
    sitemapUrl
  )}`;
  https
    .get(pingUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("yandex pinged");
      } else {
        console.warn(`yandex ping failed`);
      }
    })
    .on("error", (err) => {
      console.error("error pinging", err);
    });
}

generateSitemap().catch(console.error);
pingYandex("https://anti-scamer.ru/sitemap.xml");
