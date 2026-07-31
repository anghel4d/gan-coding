# GANcoding launch thread

Each numbered block is one post.

## 1/

I think software just changed reproductive strategy.

Stop asking one agent for one answer. Breed complete implementations, execute every one, kill nearly all of them, and make the survivors compete again.

I call it GANcoding. 🧵

## 2/

Software is now an r-selected evolutionary organism.

Today: 3 competing versions of one feature, generated in parallel and judged.

Soon: 10.

Then: 50.

Then: a continuous loop where a “development cycle” means a generation.

## 3/

This is not codegen, best-of-N prompting, or “an agent swarm.”

Parallel agents tell you who is busy.

GANcoding specifies population, variation, heredity, selection, and another generation. The unit of work is no longer the patch. It is the lineage.

## 4/

It is not a literal differentiable GAN. No one is backpropagating through Clang.

The conversion is architectural:

generator population ↔ adversarial discriminator

many executable descendants → measured selection → inherited survivors → repeat

## 5/

I have done it successfully exactly once.

The primary trace is recovered: one Opus 4.8 head, 6 persistent Opus supervisors, 270 production candidate conversations.

The checked-in campaign skill did NOT produce it. That skill was reverse-engineered afterward.

## 6/

My 946-character prompt asked Opus to create 5–10 persistent supervisors; make each run 5 Sol/high + 10 Luna/xhigh candidates over 3 stages; keep supervisors blind; pick winners; propagate them.

I chose 6 agents and a bytecode VM.

## 7/

Opus first built the judge, validated a golden 16/16 result, proved a broken jump fixup fell to 15/16, and smoke-tested one Sol plus one Luna.

Then it spawned the six supervisors.

First spawn → working VM: 42m 52s.

## 8/

The result:

• 6 × 15 = 90 candidates/generation
• 3 inherited generations = 270 production calls
• 16/16 semantic fitness programs passed
• 93 input operations became 70
• 23 operations removed without changing behavior
• roughly 40,000 candidate LoC generated
• every global winner came from the Sol/high pool

The 270 excludes the 2 smoke probes.

## 9/

The model mattered.

Opus 4.8 followed the campaign contract. Fable would not.

That is not a vibes footnote. Protocol obedience is fitness. A brilliant supervisor that refuses to commission, blind, test, report, and hand off the required artifacts is a failed candidate.

## 10/

The hard part is not generation.

Generated volume is cheap.

The hard part is selection pressure.

If your judge rewards shallow tests, the population evolves test gaming. If it rewards benchmark theater, it evolves benchmark theater. If it accepts prose, it evolves liars.

## 11/

The judge is the product:

1. compiler + types + static contracts
2. unit/integration/property/differential tests
3. ASan + UBSan + TSan
4. performance, memory, size, stability
5. frontier-model semantic review
6. cross-candidate tournaments

Every build. All the time.

## 12/

A frontier model evaluating every build, with the full suite and sanitizer evidence in context, is not “a weak judge.”

It is the semantic layer above deterministic machinery: did this solve the intended problem, canonize a bug, game a metric, or poison the architecture?

## 13/

The model does not replace the compiler.

The compiler does not replace tests.

Tests do not replace sanitizers.

Sanitizers do not replace the profiler.

The profiler does not replace semantic review.

Together they are the fitness ecology.

## 14/

This also changes what a programming language is FOR.

Boilerplate? In 2026? I do not even write my actualplate by hand anymore.

Reflection is not valuable because it saves typing. A language is valuable when it makes the judge stronger and bad descendants cheaper to kill.

## 15/

So the C23 vs C++26 question is not “does C++ mode make instructions faster?”

It is:

Does stronger compile-time rejection and specialization improve the best descendant found per budget more than build latency, complexity, and model confusion reduce generations?

## 16/

The metric is not ergonomics in isolation. It is:

E[max software fitness | fixed wall-clock + compute]

Choose the substrate that produces the best surviving code after the same evolutionary budget.

That is the only language war I care about now.

## 17/

Prior art absolutely exists.

FunSearch evolves programs. AlphaEvolve is the closest ancestor. Darwin Gödel Machine evolves coding agents. BACE and Agent-CoEvo coevolve code and tests. Loreley searches whole-repo Git commits.

The pieces are arriving fast.

## 18/

I found no indexed use of “GANcoding” for this method.

I am not claiming I invented evolution, automated judges, or coding agents.

The conversion is making whole-population evolution the normal operating model for ordinary production software—not a research demo around one algorithm.

## 19/

The next harness must be meaner:

• retain diverse elites, not one monoculture
• coevolve tests without letting code and tests collude
• spend compute on uncertain contests
• replay noisy benchmarks
• preserve complete ancestry
• verify that supervisors obeyed the protocol

## 20/

Prompts are not governance.

The harness must mechanically verify candidate count, blindness, required artifacts, execution, scoring, re-tests, and ancestry.

An orchestration model is trusted only as far as its outputs can be checked.

## 21/

We spent decades optimizing how humans edit one canonical tree.

That is no longer the frontier.

The frontier is how quickly we can generate a forest, how brutally we can measure it, and how much truth survives selection.

Software is now a population.

## 22/

The full argument, the exact recovered prompt, the prior-art boundary, and the working harness:

https://rainbowcrash.lol/gancoding.html

Recovered provenance + trace commitments:
https://github.com/anghel4d/gan-coding/blob/main/EXPERIMENT-PROVENANCE.md

The raw traces are preserved privately pending redaction.
