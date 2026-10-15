// Builds every page in src/pages into a static .html file at the project root.
// Usage: node build.mjs
import { readdir, writeFile } from "node:fs/promises";
import { layout } from "./src/lib.mjs";

const dir = new URL("./src/pages/", import.meta.url);
const files = (await readdir(dir)).filter((f) => f.endsWith(".mjs"));
let count = 0;
for (const f of files) {
  const mod = await import(new URL(f, dir).href + `?t=${Date.now()}`);
  const pages = Array.isArray(mod.default) ? mod.default : [mod.default];
  for (const p of pages) {
    await writeFile(new URL(`./${p.path}`, import.meta.url), layout(p));
    count++;
  }
}
console.log(`Built ${count} pages`);
