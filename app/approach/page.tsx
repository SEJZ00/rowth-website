import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with your business, goals, market, customers, and current systems.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We identify the highest-impact opportunities, priorities, and systems.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We implement across technology, channels, automation, and infrastructure.",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "We connect activity to performance and measurable business outcomes.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We optimize what works and build the systems required to scale.",
  },
];

const focusAreas = [
  "Business goals",
  "Current performance",
  "Customer journey",
  "Market context",
  "Technology stack",
];

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-[#080D10] text-white">
      <Header dark />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-32 md:px-14 md:pb-28 md:pt-40 lg:px-20">
        <div className="pointer-events-none absolute -right-24 top-[-180px] h-[500px] w-[500px] rounded-full bg-[#FD8973]/10 blur-[150px]" />
        <div className="pointer-events-none absolute left-[30%] top-[-220px] h-[480px] w-[480px] rounded-full bg-[#003A6C]/20 blur-[170px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FD8973]" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FD8973]/80">
                  The ROWTH Process
                </p>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-[84px]">
                From clarity to
                <br />
                <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
                  continuous improvement.
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/55 md:text-lg lg:pb-2">
              Growth is not a one-time project. Markets, customers, and
              technology change, so the process keeps learning.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F0EEEB] px-6 py-20 text-[#13181B] md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">

          {/* Step Navigation */}
          <div className="grid gap-3 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative overflow-hidden rounded-[22px] border px-5 py-5 ${
                  index === 0
                    ? "border-[#13181B] bg-[#13181B] text-white"
                    : "border-[#13181B]/10 bg-white"
                }`}
              >
                <span
                  className={`text-[10px] font-semibold tracking-[0.18em] ${
                    index === 0 ? "text-white/35" : "text-[#13181B]/35"
                  }`}
                >
                  {step.number}
                </span>

                <p className="mt-4 text-sm font-semibold">
                  {step.title}
                </p>

                <div
                  className={`absolute bottom-0 left-5 right-5 h-[2px] ${
                    index === 0
                      ? "bg-gradient-to-r from-[#FD8973] to-[#FFB565]"
                      : "bg-[#13181B]/10"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Active Step Panel */}
          <div className="mt-8 overflow-hidden rounded-[32px] border border-[#13181B]/10 bg-white shadow-[0_20px_60px_rgba(19,24,27,0.06)]">
            <div className="grid lg:grid-cols-[1fr_0.85fr]">

              {/* Main Content */}
              <div className="p-7 md:p-10 lg:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                  Step 01 of 05
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                  Understand
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-[#13181B]/60">
                  We start with your business, goals, market, customers, and
                  current systems. Before changing anything, we build a clear
                  picture of where growth is coming from and where friction is
                  getting in the way.
                </p>

                {/* Context line */}
                <div className="mt-10 border-t border-[#13181B]/10 pt-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#003A6C]/50">
                    Outcome
                  </p>

                  <p className="mt-3 max-w-lg text-lg font-semibold tracking-[-0.02em]">
                    A clear view of the business before the strategy begins.
                  </p>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="border-t border-[#13181B]/10 bg-[#F7F5F2] p-7 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#003A6C]/50">
                  Focus Areas
                </p>

                <div className="mt-7 space-y-3">
                  {focusAreas.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[#13181B]/5 bg-white px-4 py-4"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FD8973]/10 text-xs text-[#FD8973]">
                        ✓
                      </span>

                      <span className="text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="relative overflow-hidden px-6 py-24 md:px-14 md:py-32 lg:px-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FD8973]/8 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
            How we work
          </p>

          <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-6xl lg:text-7xl">
            Strategy without execution is{" "}
            <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
              just a plan.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/50">
            We work alongside your team, not around it. The goal is not
            dependency. The goal is clarity, better systems, and stronger
            execution.
          </p>
        </div>
      </section>

      {/* PROCESS SUMMARY */}
      <section className="border-t border-white/10 px-6 py-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-7 bg-[#FFB565]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              The full process
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-4 py-7 md:grid-cols-[80px_220px_1fr] md:items-center"
              >
                <span className="text-[11px] font-semibold text-[#FD8973]">
                  {step.number}
                </span>

                <h3 className="text-xl font-semibold tracking-[-0.025em]">
                  {step.title}
                </h3>

                <p className="max-w-2xl text-sm leading-6 text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#F0EEEB] px-7 py-12 text-[#13181B] md:px-10 lg:flex lg:items-center lg:justify-between">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Start with clarity
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Let&apos;s figure out what&apos;s actually holding growth back.
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