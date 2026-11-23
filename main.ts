import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — one complete story in exactly six words.
// He planted the stars; she reaped the light they became.
const story =
  "He planted stars; she harvested light.";

// The bounty requires a story of exactly six words. Count whitespace-
// separated words and fail loudly instead of writing an entry that
// breaks the one rule the whole bounty turns on.
const wordCount = story.trim().split(/\s+/).filter(Boolean).length;
if (wordCount !== 6) {
  throw new Error(`story must be exactly 6 words, got ${wordCount}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
