
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const site = "_site";
const limitBytes = 14 * 1024;

function brotliSize(buf){
  return zlib.brotliCompressSync(buf, {params: {[zlib.constants.BROTLI_PARAM_QUALITY]: 11}}).length;
}

function* walk(dir){
  for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let bad = [];
for (const file of walk(site)) {
  if (!file.endsWith(".html")) continue;
  const buf = fs.readFileSync(file);
  const size = brotliSize(buf);
  const rel = file.replace(site,"");
  console.log(`${rel} → ${(size/1024).toFixed(2)}KB br`);
  if (size > limitBytes) bad.push({file:rel,size});
}

if (bad.length){
  console.error("\n❌ Pages above 14KB (brotli):");
  for (const b of bad) console.error(` - ${b.file}: ${(b.size/1024).toFixed(2)}KB`);
//  process.exit(1);
}else{
  console.log("\n✅ All pages ≤14KB br.");
}
