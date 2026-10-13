import ProcessCreatesMobile from "@/components/ProcessCreatesMobile";
import ApproachProcess from "@/components/ApproachProcess";
import InternalHeroAtmosphere from "@/components/InternalHeroAtmosphere";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-[#080D10] text-white">
      <Header dark />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-8 md:px-14 md:pb-24 md:pt-20 lg:px-20 lg:pt-16">
        <div className="pointer-events-none absolute -right-24 top-[-180px] h-[500px] w-[500px] rounded-full bg-[#FD8973]/10 blur-[150px]" />

        <div className="pointer-events-none absolute left-[30%] top-[-220px] h-[480px] w-[480px] rounded-full bg-[#003A6C]/20 blur-[170px]" />

        <InternalHeroAtmosphere variant="approach" />

        <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FD8973]" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FD8973]/80">
                  The ROWTH Process
                </p>
              </div>

              <h1 className="max-w-4xl text-[46px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-7xl lg:text-[84px]">
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

      {/* DYNAMIC PROCESS */}
      <ApproachProcess />

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
              What the process creates
            </p>
          </div>

          <ProcessCreatesMobile />

          <div className="hidden gap-4 md:grid md:grid-cols-3">
            <article className="rounded-[26px] border border-white/10 bg-[#11191E] p-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
                Clarity
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Know what matters first.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Clear priorities replace disconnected activity and competing
                ideas.
              </p>
            </article>

            <article className="rounded-[26px] border border-white/10 bg-[#11191E] p-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFB565]">
                Infrastructure
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                Build systems that support execution.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                Data, technology, automation, and channels work together instead
                of operating in isolation.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-[26px] border border-[#FD8973]/20 bg-[#151B1F] p-7">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#FD8973]/12 blur-[60px]" />

              <div className="relative">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
                  Improvement
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  Learn from what actually happens.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Measurement turns execution into an ongoing system for
                  improving performance.
                </p>
              </div>
            </article>
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