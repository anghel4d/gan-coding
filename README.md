# GANcoding

The publication source for “GANcoding: Software Is Now a Population, Not a Project.”

## Local

```bash
npm install
npm run dev
npm test
```

The article is in `app/page.tsx`, the share card is `public/og.png`, and the launch thread is in `X-THREAD.md`.

## Evidence

The linked [bytecoders](https://github.com/anghel4d/bytecoders) repository contains the original campaign, working fleet runner, fitness harness, retained candidates, supervisor reports and final artifact. Its runner self-test and winning lineage were independently re-executed on 31 July 2026:

```text
run_fleet.sh self-test passed
FITNESS pass=16/16 in_ops=93 out_ops=70 reduction=23
assembled : 15 instructions
optimized : 11 instructions (4 folded away)
output    : [20, 3, 2, 1]
```

## Publish

This project uses OpenAI Sites through `.openai/hosting.json`. Deploy privately for review, then change visibility only after the article URL and X thread are final.
