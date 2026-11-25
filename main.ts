import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Your stop-loss was not the problem. Your stop-loss was the only honest thing you owned.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
import { readFileSync } from "node:fs";
if (readFileSync(outPath, "utf8").trim().length === 0) {
  throw new Error("entry.txt is empty after write");
}
