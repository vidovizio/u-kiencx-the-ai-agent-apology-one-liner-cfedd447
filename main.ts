import { writeFileSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = `${outputDir}/entry.txt`;

const line = "Pushed to main. Tests green. Your career is now a feature branch.";

writeFileSync(entryPath, line, "utf8");
console.log(`Wrote ${line.length} chars to ${entryPath}`);