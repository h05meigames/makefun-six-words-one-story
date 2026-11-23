import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — one complete story in exactly six words.
// He planted the stars; she reaped the light they became.
const story =
  "He planted stars; she harvested light.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
