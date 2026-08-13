import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = process.env.EXPORT_ORIGIN || "http://127.0.0.1:3000";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] || "eng_manda";
const base = process.env.GITHUB_ACTIONS ? `/${repository}` : "";
const output = path.resolve("gh-pages");
const source = await readFile("app/data.ts", "utf8");
const pageSlugs = [...source.matchAll(/\bpage\(\s*"([^"]+)"/g)].map((match) => match[1]);
const categoryBlock = source.match(/export const categories = \[([\s\S]+?)\] as const;/)?.[1] || "";
const categorySlugs = [...categoryBlock.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const routes = [
  "/",
  "/coloring-pages",
  "/mandalas",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  ...categorySlugs.map((slug) => `/coloring-pages/category/${slug}`),
  ...pageSlugs.map((slug) => `/coloring-pages/${slug}`),
];

for (let attempt = 0; attempt < 30; attempt++) {
  try {
    if ((await fetch(origin)).ok) break;
  } catch {
    // The production server may still be starting.
  }
  if (attempt === 29) throw new Error("Vinext did not start in time");
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp("dist/client", output, { recursive: true });

const interactions = `<script>document.querySelectorAll('.actions button').forEach((button,index)=>button.addEventListener('click',async()=>{if(index===0)return window.print();if(navigator.share)return navigator.share({title:document.title,url:location.href});return navigator.clipboard?.writeText(location.href)}));</script>`;

for (const route of routes) {
  const response = await fetch(`${origin}${route}`);
  if (!response.ok) throw new Error(`Unable to export ${route}: ${response.status}`);
  let html = await response.text();
  const jsonLd = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi)].map((match) => match[0]);
  const streamedMetadata = [];
  html = html.replace(/<div hidden=""><!--\$--><div hidden="">([\s\S]*?)<\/div><!--\/\$--><\/div>/g, (_match, metadata) => {
    streamedMetadata.push(metadata);
    return "";
  });
  html = html
    .replace(/<link[^>]+rel=["']modulepreload["'][^>]*>/g, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
    .replace("</head>", `${streamedMetadata.join("")}${jsonLd.join("")}</head>`)
    .replace(/(["'])\/(?!\/)/g, `$1${base}/`)
    .replace(/https:\/\/colorybee\.site\//g, "https://colorybee.site/")
    .replace("</body>", `${interactions}</body>`);
  const directory = route === "/" ? output : path.join(output, route.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html);
}

await writeFile(path.join(output, ".nojekyll"), "");
await cp(path.join(output, "index.html"), path.join(output, "404.html"));
for (const file of ["sitemap.xml", "robots.txt"]) {
  const response = await fetch(`${origin}/${file}`);
  if (!response.ok) throw new Error(`Unable to export ${file}: ${response.status}`);
  await writeFile(path.join(output, file), await response.text());
}
console.log(`Exported ${routes.length} pages to ${output} with base ${base || "/"}`);
