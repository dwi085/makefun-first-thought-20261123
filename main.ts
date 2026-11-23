// One Word, First Thought — make.fun entry (u-0xkianno-one-word-first-thought-106abaf8)
//
// Writes exactly one word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic: no input, no randomness, no network, no clock. Two runs
// produce byte-identical output. Writes nowhere except the output dir.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The first word that came to mind: the strange, wistful feeling you get
// in a second-hand bookshop, surrounded by books that belonged to strangers.
const WORD = "vellichor";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (!/^[^\s]+$/.test(WORD) || WORD.length < 1 || WORD.length > 24) {
  console.error("entry word is not a single word of 1-24 characters");
  process.exit(1);
}

// Written with no trailing newline: entry.txt holds exactly the word,
// 9 bytes, so the sealed gate sees one word and nothing else.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
