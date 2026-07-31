# The experiment that actually happened

The `coding-campaign` skill currently checked into bytecoders did not produce the original experiment. The successful run was improvised directly by an Opus 4.8 head orchestrator from the short prompt below. Only after the bytecode VM worked did the user ask Opus to archive the method as a skill. The immediately following Fable 5 session attempted to reverse-engineer and rewrite that skill. The skill is a descendant reconstruction, not the original control plane.

This correction is based on the primary Claude Code conversation tree recovered locally on 31 July 2026. The raw JSONLs are privately preserved because they contain hidden reasoning, local paths, tool inputs and machine metadata. This document publishes the human prompt, visible chronology, inventory and cryptographic commitments without publishing that private material.

## The prompt that worked

Session: `1544ea15-0e04-43c1-be72-42c575c56d08`

Model: `claude-opus-4-8`

Timestamp: `2026-07-13T16:31:32.945Z`

> Could you test running 10 of these, but having 10 *Claude* (like, actually you, Opus) subagents actually be what spawns and supervises the claudex task? Come up with something more complex, multi-stage.
>
> What I want to see:
> - 5 to 10 agents actually popping up in my claude worktree, supervised by you the head orchestrator.
> - Each agent invokes its own 5 Sol (high) and 10 Luna (xhigh) instances, and does so in separate invocations over the course of 3 steps.
> eg, foreach agent.
> -- Step A: Spawn all 15 claudex instances in one invocation. Await for them to all finish. Collect and consolidate. First component of the algorithm, report back pick winner.
> -- Step B: Ditto. Second component of the algorithm, report back, report winner.
> -- Step C: Ditto. Final component and polishing round. Report and definitively implement winner.
> Subagents are never told what the others are doing. Winners are picked in a RNN/GAN-style evolutionary contest.

The user then selected `6 agents` and `Bytecode VM`: assembler, execution loop, optimizer.

## What Opus inferred

Opus immediately expanded the prompt into a concrete hierarchy:

- One head orchestrator.
- Six persistent Opus supervisors, mutually blind.
- Three head-orchestrated generations.
- Fifteen candidate implementations per supervisor per generation: five Sol/high and ten Luna/xhigh.
- Each supervisor compiles and tests its fifteen candidates, then returns one local champion.
- The head re-tests the six champions, chooses one global winner and propagates it anonymously as fixed substrate for the next generation.
- The same six supervisors retain context across all three generations.
- The head definitively assembles, tests and writes the final winner.

None of that came from the later skill. The trace shows Opus designing it in response to the prompt.

## The part that made it work

Before spawning the production population, Opus built the judge.

It fixed the bytecode instruction set, isolated component modules so winners would compose, created a sixteen-program semantic battery, installed per-case panic handling and process timeouts, built golden assembler/executor/optimizer components, and verified these properties:

- Golden components: `16/16`, reduction `0`.
- Reference optimizer: `16/16`, positive reduction.
- Reference optimizer with jump-target repair removed: `15/16`.
- Fleet runner: one Sol/high and one Luna/xhigh smoke candidate completed before the full fan-out.

That sequence is the deepest practical lesson in the trace. Opus did not merely spawn a large population. It tried to falsify the selector before trusting the selector.

## Timeline

| UTC on 13 July 2026 | Event |
| --- | --- |
| `16:31:32.945` | User sends the successful GANcoding prompt. |
| `16:35:25.186` | Opus states the hierarchy, blindness, selection and heredity plan. |
| `16:51:04.535` | User selects six supervisors and a bytecode VM. |
| `17:04:46.416` | First Opus supervisor is spawned. |
| `17:05:22.661` | Sixth Opus supervisor is spawned. |
| `17:47:38.165` | Working final artifact is reported. |
| `17:52:27.617` | User asks to save and archive the successful experiment. |
| `18:04:02.884` | Original bytecoders commit begins. |
| `18:04:26.601` | Original bytecoders push completes. |

First production supervisor spawn to working artifact was `42m 51.749s`.

## Recovered population

The production population is exactly 270 candidate conversations:

| Generation | Component | Candidate traces |
| --- | --- | ---: |
| A | assembler | 90 |
| B | executor | 90 |
| C | optimizer | 90 |
| | production total | 270 |

The head also ran two candidate smoke probes before launching the supervisors. They are visible in the head trace and intentionally excluded from the 270 production count.

The recovered control plane has exactly nineteen orchestration events: one parameter question, six supervisor spawns and twelve continuation messages. Those twelve continuations are the six Stage B messages plus the six Stage C messages sent back to the same persistent supervisors.

## Primary-evidence commitments

The private archive contains 283 raw files: one head JSONL, six supervisor JSONLs, six supervisor metadata files and 270 candidate JSONLs. A SHA-256 manifest covers every raw file.

| Evidence | SHA-256 |
| --- | --- |
| Raw-file manifest | `5b99a375a0165940b1d1d76d8a3d1e772ab8ce815f280e1398b82767f2027ad3` |
| Head trace | `3125df34fa0403e89f5d6b68a8a7b83ef505a7204e9bdfce62e07195dd50407f` |
| Supervisor `a1d20880e548ffe8b` | `32e1d668463489d32d66ad2f32b7f84fff6dc0f86740d17835ebcda9e03bb96f` |
| Supervisor `a3afe26493bb641e0` | `c23e94bc494cd0685b332034bdb429fb561f2cbc5f6e43083068d1834c91d569` |
| Supervisor `a42dd973cc9edcdab` | `0c44ec7e482d4b71af013c9e13fde30d8309289032e8875a650f13f284d8c6e4` |
| Supervisor `a53e7881088de20cb` | `e4bd236a6a23fec72880364d0de6ed297a9ba004024b69b96b3e0e02a354f65f` |
| Supervisor `abac24aae203c70af` | `9cd433d99986c857611e13020d535341252e9aee8b5a52b46567c67aa016b185` |
| Supervisor `ad96f5862057315db` | `215115ace913967fb00e970debf3a0b3e945de2b351ce528ee5efe925ea0ed81` |

The archive also contains a readable projection of the visible conversation and a structured control-plane projection. They exclude hidden reasoning and unrelated tools; the raw JSONL remains authoritative.

## Independent re-execution

On 31 July 2026 the retained runner self-test and winning lineage were re-executed:

```text
run_fleet.sh self-test passed
FITNESS pass=16/16 in_ops=93 out_ops=70 reduction=23
assembled : 15 instructions
optimized : 11 instructions (4 folded away)
output    : [20, 3, 2, 1]
```

This validates the retained runner, composed winners and final behavior. It does not establish that the later reconstruction produced the original campaign. The trace establishes that provenance.
