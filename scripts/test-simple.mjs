// Smoke test do build: garante que o Eleventy gerou as paginas essenciais.
import { readFile, stat } from "node:fs/promises";

const OUT = "_site";
const REQUIRED = ["index.html", "feed.xml", "sitemap.xml"];

const failures = [];

for (const file of REQUIRED) {
  const path = `${OUT}/${file}`;
  try {
    const { size } = await stat(path);
    if (size === 0) failures.push(`${path} esta vazio`);
  } catch {
    failures.push(`${path} nao foi gerado`);
  }
}

try {
  const html = await readFile(`${OUT}/index.html`, "utf8");
  if (!/<title>/i.test(html)) failures.push("_site/index.html nao tem <title>");
} catch {
  // ja reportado acima
}

if (failures.length) {
  console.error("Build invalido:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(`Build ok: ${REQUIRED.join(", ")} gerados em ${OUT}/`);
