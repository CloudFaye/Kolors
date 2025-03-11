export const prerender = 'auto'

// Import color systems to dynamically generate color system pages in sitemap
import { colorSystems } from '$lib/data/colorSystems';

export async function GET() {
  // Get current date in ISO format for lastmod
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  // Define your site URLs with descriptive priorities
  const pages = [
    { url: '', lastMod: currentDate, changeFreq: 'weekly', priority: '1.0' }, // Homepage
    { url: 'about', lastMod: currentDate, changeFreq: 'monthly', priority: '0.8' }, // About page
    { url: 'custom', lastMod: currentDate, changeFreq: 'weekly', priority: '0.9' }, // Custom color tool
    { url: 'color-system', lastMod: currentDate, changeFreq: 'weekly', priority: '0.9' } // Color systems list
  ];
  
  // Add individual color systems to the sitemap
  colorSystems.forEach(system => {
    pages.push({
      url: `color-system/${system.id}`,
      lastMod: currentDate,
      changeFreq: 'monthly',
      priority: '0.7'
    });
  });

  const website = 'https://colorsystems.netlify.app';

  // Generate the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${website}/${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
} 