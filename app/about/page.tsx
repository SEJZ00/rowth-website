import Header from "@/components/Header";
import Footer from "@/components/Footer";

const principles = [
  {
    number: "01",
    title: "Strategic thinking",
    description:
      "The decisions and priorities that create real business impact.",
  },
  {
    number: "02",
    title: "Data-driven",
    description:
      "Reliable measurement and clear reporting to reduce guesswork.",
  },
  {
    number: "03",
    title: "Execution-focused",
    description:
      "Beyond recommendations: systems, campaigns, and measurable outcomes.",
  },
  {
    number: "04",
    title: "Built for partnership",
    description:
      "We grow with our clients, not just for them.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080D10] text-white">
      <Header dark />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-32 md:px-14 md:pb-28 md:pt-40 lg:px-20">
        <div className="pointer-events-none absolute -right-28 top-[-170px] h-[520px] w-[520px] rounded-full bg-[#FD8973]/10 blur-[160px]" />

        <div className="pointer-events-none absolute left-[25%] top-[-220px] h-[480px] w-[480px] rounded-full bg-[#003A6C]/20 blur-[170px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FD8973]" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FD8973]/80">
                  About ROWTH
                </p>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-[84px]">
                Built for better
                <br />
                <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
                  systems.
                </span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-7 text-white/55 md:text-lg">
                ROWTH brings strategy, data, technology, and execution together
                to help ambitious businesses create sustainable, measurable
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ROWTH */}
      <section className="bg-[#F0EEEB] px-6 py-20 text-[#13181B] md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-5xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FD8973]">
              Why ROWTH
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Most companies don&apos;t need more{" "}
              <span className="text-[#13181B]/35">
                disconnected tactics.
              </span>
              <br />
              They need clearer priorities, better infrastructure, reliable
              measurement, and{" "}
              <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
                consistent execution.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid border-y border-[#13181B]/10 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <article
                key={item.number}
                className={`py-7 md:px-6 lg:py-9 ${
                  index !== principles.length - 1
                    ? "lg:border-r lg:border-[#13181B]/10"
                    : ""
                }`}
              >
                <span className="text-[10px] font-semibold text-[#FD8973]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE THINK */}
      <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FFB565]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  How we think
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                Growth should be
                <br />
                understandable.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

              <article className="rounded-[28px] border border-white/10 bg-[#11191E] p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
                  Clarity
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                  Know what is working.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Decisions become easier when performance, attribution, and
                  business outcomes are connected.
                </p>
              </article>

              <article className="rounded-[28px] border border-white/10 bg-[#11191E] p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFB565]">
                  Infrastructure
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                  Build systems that last.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Growth should not depend on disconnected tools, manual work,
                  or knowledge living with one person.
                </p>
              </article>

              <article className="rounded-[28px] border border-white/10 bg-[#11191E] p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
                  Execution
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                  Move beyond recommendations.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Strategy matters when it becomes campaigns, infrastructure,
                  automation, measurement, and action.
                </p>
              </article>

              <article className="rounded-[28px] bg-[#F0EEEB] p-7 text-[#13181B]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#003A6C]/55">
                  Partnership
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                  Work with the team.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
                  We work alongside your team to create clarity, stronger
                  systems, and better execution.
                </p>
              </article>

            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP STATEMENT */}
      <section className="relative overflow-hidden border-y border-white/10 px-6 py-24 md:px-14 md:py-32 lg:px-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FD8973]/8 blur-[160px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
            Built for partnership
          </p>

          <h2 className="mt-8 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] md:text-6xl lg:text-7xl">
            We work alongside your team,
            <br />
            <span className="text-white/35">not around it.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/50">
            The goal is not dependency. The goal is clarity, better systems,
            stronger execution, and a business that understands how its growth
            engine actually works.
          </p>
        </div>
      </section>

      {/* SYSTEM STRIP */}
      <section className="px-6 py-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-[30px] border border-white/10 bg-[#11191E] p-7 md:p-10">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                  The ROWTH System
                </p>

                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  Strategy. Systems. Execution.
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Tracking",
                  "Automation",
                  "Web",
                  "SEO",
                  "Paid Media",
                  "Strategy",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/55"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#F0EEEB] px-7 py-12 text-[#13181B] md:px-10 lg:flex lg:items-center lg:justify-between">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Work with ROWTH
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Better systems create better decisions.
            </h2>
          </div>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-8 py-4 text-sm font-semibold text-[#13181B] shadow-[0_14px_30px_rgba(253,137,115,0.20)] transition hover:-translate-y-0.5 lg:mt-0"
          >
            Let&apos;s Talk →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}