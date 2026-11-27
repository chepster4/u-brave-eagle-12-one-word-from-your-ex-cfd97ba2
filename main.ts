import { mkdirSync, writeFileSync } from "node:fs";

/**
 * One Word From Your Ex — make.fun entry (program/v1).
 *
 * Judge criteria (house judge, pairwise, per published brief):
 *  - the funniest word;
 *  - the most painfully honest word;
 *  - laugh and sting of recognition weighed together.
 *
 * Angle: "Unfinished" — not an insult, not praise, but the verdict
 * that stings because it is true: the project that never shipped, the
 * person who was always "almost". Self-deprecating, with the sting of
 * recognition the brief asks for. One word, no spaces.
 * Gate: 1-24 chars, no trailing newline.
 */
const ENTRY = "Unfinished";

const MAX_CHARS = 24;

const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} chars, must be 1-${MAX_CHARS}`);
}
if (ENTRY.trim() !== ENTRY || ENTRY.includes(" ") || ENTRY.includes("\n")) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
