import test from "node:test";
import assert from "node:assert/strict";
import {readFile,readdir} from "node:fs/promises";

test("production domain and English locale are centralized",async()=>{const config=await readFile("app/config.ts","utf8");const layout=await readFile("app/layout.tsx","utf8");assert.match(config,/https:\/\/colorybee\.site/);assert.match(layout,/<html lang="en">/)});

test("catalogue contains 52 local English-named assets",async()=>{const data=await readFile("app/data.ts","utf8");const assets=(await readdir("public/coloring-pages")).filter(file=>file.endsWith(".webp"));assert.equal((data.match(/\n\s+page\(/g)||[]).length,52);assert.equal(assets.length,52);for(const file of assets){assert.match(file,/^[a-z0-9-]+-coloring-page\.webp$/)}});

test("drawing metadata includes canonical, hreflang, and schema",async()=>{const source=await readFile("app/coloring-pages/[slug]/page.tsx","utf8");assert.match(source,/canonical:\s*url/);assert.match(source,/es:\s*item\.spanishUrl/);assert.match(source,/"@type":\s*"ImageObject"/);assert.match(source,/"@type":\s*"BreadcrumbList"/)});

test("sitemap and robots use the central domain",async()=>{const sitemap=await readFile("app/sitemap.ts","utf8");const robots=await readFile("app/robots.ts","utf8");assert.match(sitemap,/absoluteUrl/);assert.match(robots,/site\.domain/)});
