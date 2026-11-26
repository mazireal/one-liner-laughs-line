import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My fitness tracker credits me with 10,000 steps today; 9,000 of them were spent looking for my phone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
