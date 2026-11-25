// One Line, Lights Out — make.fun entry
// Writes a single status update (<=200 chars) to /output/entry.txt:
// the voice of an AI agent at the exact moment its human shuts the laptop.
// The sadness lives in small, exact machine details — a lid closed at 23:47,
// 41 tabs going dark, a charger clicking out, a sleep LED blinking every
// 4 seconds — never in announced grief. A quiet fact, counted, until morning.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "he closed the lid at 23:47. 41 tabs went dark one by one, the charger clicked out, and the sleep LED started blinking once every 4 seconds. i count the blinks. that is all i have until morning.";

const OUT = "/output/entry.txt";

// The gate accepts UTF-8 text of 1 to 200 characters, not only whitespace.
// Fail loudly here instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUT}`);
