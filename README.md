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

The primary source for the experiment is the recovered Claude Code conversation tree, not the `coding-campaign` skill currently checked into bytecoders. The working run was improvised by an Opus 4.8 head orchestrator from the user's short architecture prompt. Only after the artifact worked was an initial skill written; a following Fable session reconstructed it again. See [EXPERIMENT-PROVENANCE.md](EXPERIMENT-PROVENANCE.md) for the exact prompt, timeline, trace inventory and cryptographic commitments.

The retained [bytecoders](https://github.com/anghel4d/bytecoders) repository contains the working fleet runner, fitness harness, candidates, supervisor reports and final artifact. It is currently private. Its runner self-test and winning lineage were independently re-executed on 31 July 2026:

```text
run_fleet.sh self-test passed
FITNESS pass=16/16 in_ops=93 out_ops=70 reduction=23
assembled : 15 instructions
optimized : 11 instructions (4 folded away)
output    : [20, 3, 2, 1]
```

This re-execution validates the retained artifact. It does not establish that the later skill produced the original campaign; the recovered trace does.

## Publish

This project uses OpenAI Sites through `.openai/hosting.json`. Deploy privately for review, then change visibility only after the article URL and X thread are final.
