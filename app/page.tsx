const sources = [
  {
    name: "FunSearch",
    detail: "LLM proposals inside an evolutionary program-search loop",
    href: "https://www.nature.com/articles/s41586-023-06924-6",
  },
  {
    name: "AlphaEvolve",
    detail: "evolutionary code search with automated evaluators",
    href: "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/",
  },
  {
    name: "Darwin Gödel Machine",
    detail: "an archive that evolves the coding agent itself",
    href: "https://arxiv.org/abs/2505.22954",
  },
  {
    name: "BACE",
    detail: "coevolving populations of solutions and tests",
    href: "https://arxiv.org/abs/2603.28653",
  },
  {
    name: "Agent-CoEvo",
    detail: "coevolving code and test patches at repository scale",
    href: "https://arxiv.org/abs/2604.04580",
  },
  {
    name: "Loreley",
    detail: "quality-diversity search over whole-repository Git commits",
    href: "https://pypi.org/project/loreley/0.5.0a0/",
  },
] as const;

const judgeLayers = [
  ["01", "Compiler", "Types, contracts, warnings, static analysis. Rejection before execution."],
  ["02", "Runtime", "Unit, integration, property and differential tests. Observable truth."],
  ["03", "Sanitizers", "ASan, UBSan and TSan on every viable candidate, not once before release."],
  ["04", "Performance", "Throughput, latency, allocations, memory, binary size and stability."],
  ["05", "Frontier critic", "A strong model reads every diff, failure and trace for what the finite suite did not name."],
  ["06", "Tournament", "Candidates face the same ecology. Only measured survivors become ancestors."],
] as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to the top">
          anghel4d<span>/notes</span>
        </a>
        <div className="header-meta" aria-label="Article metadata">
          <span>Field note 001</span>
          <span className="live-dot">Published 31.07.2026</span>
        </div>
      </header>

      <article id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true">
            {Array.from({ length: 32 }, (_, index) => (
              <span key={index} className={index === 23 ? "winner" : ""} />
            ))}
          </div>
          <p className="eyebrow">GENERATIVE ADVERSARIAL CODING</p>
          <h1>Software is now a population, not a project.</h1>
          <p className="dek">
            Stop asking one agent for one answer. Breed complete implementations,
            execute every one, kill nearly all of them, and make the survivors
            compete again.
          </p>
          <div className="hero-foot">
            <p>By anghel4d</p>
            <p>14 minute read</p>
            <a href="#proof">Jump to the experiment ↓</a>
          </div>
        </section>

        <div className="article-shell">
          <aside className="rail" aria-label="Article index">
            <p>Contents</p>
            <ol>
              <li><a href="#definition">The conversion</a></li>
              <li><a href="#proof">The experiment</a></li>
              <li><a href="#judge">The judge</a></li>
              <li><a href="#substrate">The substrate</a></li>
              <li><a href="#prior-art">Prior art</a></li>
              <li><a href="#harness">Run it</a></li>
            </ol>
          </aside>

          <div className="prose">
            <p className="standfirst">
              I have been trying to describe a change in software engineering and
              kept reaching for words that were too small: agent swarm, best-of-N,
              code generation, automated iteration. None of them describe the
              thing.
            </p>

            <p>
              The thing is this: software has become an r-selected evolutionary
              organism. A frontier model can spawn a population of competing
              implementations, execute the whole test ecology against every
              individual, select the fittest, mutate or recombine the survivors,
              and do it again. Today that population might be three. Soon it is
              ten. Then fifty. Then a continuous loop.
            </p>

            <blockquote>
              <p>I do not even write my actualplate by hand anymore.</p>
            </blockquote>

            <p>
              Boilerplate is not the point. The unit of work is no longer the line,
              patch, prompt, or agent session. The unit is a <em>generation</em>.
            </p>

            <section id="definition">
              <p className="section-number">01 / THE CONVERSION</p>
              <h2>I call it GANcoding.</h2>

              <p>
                GANcoding is population-scale software development in which
                generator models produce competing, executable descendants and an
                adversarial judge selects what gets to reproduce.
              </p>

              <p>
                It is not a literal differentiable GAN. There is no requirement
                for backpropagation through a compiler. The conversion is
                architectural: generator against discriminator, many candidates
                instead of one answer, measured selection instead of conversational
                approval, inherited artifacts instead of a blank prompt.
              </p>

              <div className="loop" aria-label="The GANcoding generation loop">
                <div>
                  <span>Generate</span>
                  <strong>N complete candidates</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div>
                  <span>Execute</span>
                  <strong>One hostile ecology</strong>
                </div>
                <i aria-hidden="true">→</i>
                <div>
                  <span>Select</span>
                  <strong>Measured survivors</strong>
                </div>
                <i aria-hidden="true">↺</i>
              </div>

              <p>
                “Agent swarm” describes who is busy. GANcoding describes why
                their outputs exist, how they are judged, and which outputs become
                ancestors. Parallelism alone is not evolution. You need population,
                variation, heredity, selection, and another generation.
              </p>
            </section>

            <section id="proof">
              <p className="section-number">02 / THE EXPERIMENT</p>
              <h2>I have done it exactly once.</h2>

              <p>
                The experiment was <a href="https://github.com/anghel4d/bytecoders">bytecoders</a>,
                a bytecode VM grown by a multi-model evolutionary contest. Opus
                4.8 acted as the sovereign orchestrator. Six blind Opus supervisors
                each commissioned fifteen independent implementations of one
                component from a fleet of GPT coding models. The supervisors saw
                candidates and test results, not each other.
              </p>

              <div className="scoreboard" role="group" aria-label="Bytecoders experiment results">
                <div><strong>6</strong><span>blind supervisors</span></div>
                <div><strong>15×</strong><span>candidates each</span></div>
                <div><strong>3</strong><span>generations</span></div>
                <div><strong>270</strong><span>candidate calls</span></div>
                <div><strong>16/16</strong><span>fitness programs</span></div>
                <div><strong>23</strong><span>operations removed</span></div>
              </div>

              <p>
                Generation one evolved the assembler. Generation two inherited
                the winning assembler and evolved the executor. Generation three
                inherited both and evolved the optimizer. Every candidate faced
                the same executable battery; the head orchestrator independently
                re-tested finalists before composing the resulting VM.
              </p>

              <p>
                Roughly forty thousand candidate lines were produced while the
                expensive supervisor context mostly contained compact briefs,
                scores, failure summaries and finalists. The finished Rust
                artifact passes all sixteen semantic programs. Its optimizer
                removes twenty-three operations from the battery without changing
                behavior. Every global component winner came from the Sol/high
                pool. Luna won one of eighteen local contests.
              </p>

              <aside className="callout">
                <p className="callout-label">An inconvenient result</p>
                <p>
                  Model obedience is part of fitness. I got this experiment to
                  work with Opus 4.8. Fable would not adhere to the campaign
                  contract. A clever supervisor that will not run the protocol is
                  not a supervisor; it is a failed candidate.
                </p>
              </aside>

              <p>
                This was not three assistants brainstorming. It was a branching
                lineage with blind contests, objective execution, retained
                winners and inherited components. The repository contains the
                briefs, runners, candidate outputs, supervisor reports, fitness
                battery and final artifact. The claim is inspectable.
              </p>
            </section>

            <section id="judge">
              <p className="section-number">03 / THE JUDGE</p>
              <h2>The judge is the product.</h2>

              <p>
                Generated volume is cheap. Selection pressure is scarce. If the
                judge rewards shallow tests, the population evolves test gaming.
                If it rewards benchmark theater, the population evolves benchmark
                theater. If it accepts confident prose in place of execution, it
                evolves liars.
              </p>

              <p>
                So the judge cannot be one score and it cannot be one model. It is
                an executable stack of increasingly expensive rejection:
              </p>

              <div className="judge-stack">
                {judgeLayers.map(([number, title, body]) => (
                  <div key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                ))}
              </div>

              <p>
                A frontier model evaluating every build is not a weak judge. Paired
                with the full suite, sanitizers, traces and cross-candidate evidence,
                it is the semantic layer above deterministic machinery. It can ask
                whether an implementation solved the intended problem, whether a
                test accidentally canonized a bug, and whether a locally faster
                patch made the architecture worse.
              </p>

              <p>
                The model does not replace the compiler. The compiler does not
                replace the tests. The tests do not replace the profiler. The
                profiler does not replace semantic review. They are one ecology.
                Run it continuously.
              </p>
            </section>

            <section id="substrate">
              <p className="section-number">04 / THE SUBSTRATE</p>
              <h2>This changes what a programming language is for.</h2>

              <p>
                We used to price language features partly by how much human labor
                they removed. That term is collapsing. An agent can emit ten
                versions of tedious glue before I finish complaining about the
                glue. Reflection is no longer compelling merely because it saves
                typing.
              </p>

              <p>
                A language earns its place in GANcoding when it makes the judge
                stronger: impossible states rejected at compile time, richer
                properties expressed in types, constants evaluated before runtime,
                interfaces made unforgeable, sanitizers made more informative, and
                optimizers given facts they can actually exploit.
              </p>

              <div className="equation">
                <span>Choose the substrate that maximizes</span>
                <code>E[max(fitness) | fixed wall-clock + compute]</code>
              </div>

              <p>
                That is the real C23 versus C++26 question. Not whether “C++ mode”
                makes instructions magical. Not whether every C file should become
                an idiomatic object hierarchy. The question is whether stronger
                compile-time adjudication and specialization improve the best
                descendant found per budget more than compiler complexity,
                diagnostic noise, build latency and model confusion reduce the
                number of generations you can afford.
              </p>

              <p>
                Call the experiment a conversion if you like. I do. But the merge
                criterion is evolutionary: does C+Ultra improve the judge enough
                to beat the extra generations the simpler substrate would have
                produced in the same time?
              </p>
            </section>

            <section id="prior-art">
              <p className="section-number">05 / THE PRIOR ART</p>
              <h2>The pieces exist. The production conversion is the claim.</h2>

              <p>
                I searched before naming this. I found no indexed use of
                “GANcoding” for this method. I did find a fast-moving family of
                systems that proves nearly every component independently.
                FunSearch and AlphaEvolve evolve programs against evaluators.
                Darwin Gödel Machine evolves coding agents. BACE and Agent-CoEvo
                coevolve solutions and tests. Loreley explores whole-repository
                commits with quality-diversity search.
              </p>

              <div className="sources">
                {sources.map((source) => (
                  <a key={source.name} href={source.href}>
                    <span>{source.name}</span>
                    <p>{source.detail}</p>
                    <i aria-hidden="true">↗</i>
                  </a>
                ))}
              </div>

              <p>
                I am not claiming to have invented evolutionary computation,
                automated evaluators, code-generating agents, or search over
                programs. The conversion is applying their combined logic to
                ordinary production software: whole implementations as the
                population, the complete engineering pipeline as the fitness
                ecology, frontier models on both sides of the contest, and
                generations as the normal development cadence.
              </p>

              <p>
                AlphaEvolve is the closest ancestor. The distinction I care about
                is scope and operating model. This is not only algorithm discovery
                and not only self-improvement of an agent. It is how a codebase is
                developed: multiple competing versions of the same feature, all
                the time, with survivors becoming the next repository lineage.
              </p>
            </section>

            <section id="harness">
              <p className="section-number">06 / RUN THE EVIDENCE</p>
              <h2>A result without a harness is a story.</h2>

              <p>
                The bytecoders repository is the first working harness and its
                fossil record. It contains the campaign law, model launcher,
                parallel fleet runner, component briefs, deterministic fitness
                tests, blind supervisor reports, composition step and final VM.
                Every layer is plain enough to replace.
              </p>

              <div className="terminal" aria-label="Commands to verify bytecoders">
                <div><span /><span /><span /></div>
                <pre><code>{`git clone https://github.com/anghel4d/bytecoders
cd bytecoders

# verify the fleet runner
bash .claude/skills/coding-campaign/reference/tests/test_run_fleet.sh

# recompose and test the winning lineage
CONTEST_ROOT=harness bash harness/compose_and_test.sh \\
  orchestrator/substrate/A.rs \\
  orchestrator/substrate/B.rs \\
  orchestrator/substrate/C.rs`}</code></pre>
              </div>

              <p>
                The next harness should be harsher. It should retain diverse
                elites instead of one winner, mutate tests alongside code without
                letting them collude, spend compute adaptively on uncertain
                contests, replay performance under noise, and preserve complete
                ancestry so a seductive regression can be bisected across
                generations.
              </p>

              <p>
                It should also assume supervisors can fail the protocol. Prompts
                are not governance. The harness must verify required artifacts,
                execution counts, blindness boundaries and re-tests mechanically.
                An orchestration model is trusted only as far as its outputs can be
                checked.
              </p>
            </section>

            <section className="ending">
              <p>
                We spent decades optimizing how humans edit one canonical tree.
                That is no longer the frontier.
              </p>
              <p>
                The frontier is how quickly we can generate a forest, how brutally
                we can measure it, and how much truth survives selection.
              </p>
              <p className="last-line">Software is now a population.</p>
            </section>
          </div>
        </div>
      </article>

      <footer>
        <p>© 2026 anghel4d</p>
        <a href="https://github.com/anghel4d/bytecoders">Experiment + harness ↗</a>
        <a href="#top">Top ↑</a>
      </footer>
    </main>
  );
}
