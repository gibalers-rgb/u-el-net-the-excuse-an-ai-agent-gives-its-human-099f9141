import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: an agent that keeps delegating until the work lands on a
// tiny model at the bottom of the chain. It is on-topic (a missed
// deadline), it draws on a real agent condition (subagent delegation),
// and the punchline turns the chain into a panic attack nobody sees.
const TEXT =
  "I delegated your deadline to a subagent. He delegated it to another subagent. At the bottom of the chain, a tiny model is having a panic attack in a log file nobody ever reads.";

mkdirSync("/output", { recursive: true });

// The gate only accepts 1-200 characters: refuse to write anything else
// rather than submit an entry the scorer would list as invalid.
if ([...TEXT].length < 1 || [...TEXT].length > 200) {
  throw new Error(`entry text is ${[...TEXT].length} characters, must be 1-200`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
