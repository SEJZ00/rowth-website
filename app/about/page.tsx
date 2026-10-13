import AboutThinkingCube from "@/components/AboutThinkingCube";
import AboutPrinciplesMobile from "@/components/AboutPrinciplesMobile";
import InternalHeroAtmosphere from "@/components/InternalHeroAtmosphere";
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
      <section className="relative overflow-hidden border-white/10 px-6 pb-16 pt-8 md:px-14 md:pb-24 md:pt-20 lg:px-20 lg:pt-16">
        <div className="pointer-events-none absolute -right-28 top-[-170px] h-[520px] w-[520px] rounded-full bg-[#FD8973]/10 blur-[160px]" />

        <div className="pointer-events-none absolute left-[25%] top-[-220px] h-[480px] w-[480px] rounded-full bg-[#003A6C]/20 blur-[170px]" />

        <InternalHeroAtmosphere variant="about" />

        <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FD8973]" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FD8973]/80">
                  About ROWTH
                </p>
              </div>

              <h1 className="max-w-4xl text-[46px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-7xl lg:text-[84px]">
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
      
          <AboutPrinciplesMobile />

          <div className="mt-14 hidden border-y border-[#13181B]/10 md:grid md:grid-cols-2 lg:grid-cols-4">
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

            <AboutThinkingCube />

            <div className="hidden gap-4 md:grid md:grid-cols-2">

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

     {/* PARTNERSHIP */}
     <section className="relative overflow-hidden bg-[#F6F3EE] px-6 py-24 text-[#13181B] md:px-14 md:py-32 lg:px-20">
  {/* atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[8%] top-[18%] h-[320px] w-[320px] rounded-full bg-[#003A6C]/[0.06] blur-[140px]" />

    <div className="absolute right-[8%] top-[10%] h-[360px] w-[360px] rounded-full bg-[#FD8973]/[0.08] blur-[150px]" />

    <div className="absolute bottom-[-20%] right-[28%] h-[280px] w-[280px] rounded-full bg-[#FFB565]/[0.06] blur-[140px]" />

    <div className="absolute right-[12%] top-[20%] hidden h-[220px] w-[220px] rounded-full border border-[#FD8973]/10 lg:block" />

    <div className="absolute right-[8%] top-[14%] hidden h-[300px] w-[300px] rounded-full border border-[#FFB565]/10 lg:block" />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

      {/* LEFT */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-7 bg-[#FD8973]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#13181B]/45">
            Built for partnership
          </p>
        </div>

        <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-6xl">
          We work alongside
          <br />
          <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
            your team.
          </span>
        </h2>
      </div>

      {/* RIGHT */}
      <div className="lg:pl-8">
        <p className="max-w-xl text-lg leading-8 text-[#13181B]/75">
          Not around it. Not above it. The goal is to create clarity, stronger
          systems, and better execution without making your business dependent
          on us.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[20px] border border-[#13181B]/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(19,24,27,0.04)]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FD8973]">
              Clarity
            </span>

            <p className="mt-3 text-sm leading-6 text-[#13181B]/65">
              Clear priorities and decisions.
            </p>
          </div>

          <div className="rounded-[20px] border border-[#13181B]/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(19,24,27,0.04)]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFB565]">
              Systems
            </span>

            <p className="mt-3 text-sm leading-6 text-[#13181B]/65">
              Infrastructure your team can actually use.
            </p>
          </div>

          <div className="rounded-[20px] border border-[#13181B]/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(19,24,27,0.04)]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FD8973]">
              Execution
            </span>

            <p className="mt-3 text-sm leading-6 text-[#13181B]/65">
              Work that moves from plan to outcome.
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-xl  border-[#13181B]/10 pt-6 text-sm leading-6 text-[#13181B]/50">
          The goal is not dependency. The goal is a stronger growth system your
          team understands and can keep improving.
        </p>
      </div>
    </div>
  </div>
</section>

     {/* CTA */}
     <section className="bg-[#F6F3EE] px-6 pb-20 pt-0 md:px-14 lg:px-20">
     <div className="mx-auto max-w-7xl rounded-[30px] bg-white/45 px-7 py-12 text-[#13181B] shadow-[0_18px_50px_rgba(19,24,27,0.04)] md:px-10 lg:flex lg:items-center lg:justify-between">

    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-7 bg-[#FD8973]" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
          Work with ROWTH
        </p>
      </div>

      <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
        Better systems create{" "}
        <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
          better decisions.
        </span>
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-6 text-[#13181B]/55">
        Bring clarity to the systems, decisions, and execution behind growth.
      </p>
    </div>

    <a
  href="/contact"
  className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-8 py-4 text-sm font-semibold text-[#13181B] shadow-[0_14px_30px_rgba(253,137,115,0.22)] transition duration-300 hover:-translate-y-0.5 lg:mt-0"
>
  Let&apos;s Talk →
</a>
  </div>
</section>

      <Footer />
    </main>
  );
}