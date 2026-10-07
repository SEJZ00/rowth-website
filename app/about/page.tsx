import Header from "@/components/Header";
import Footer from "@/components/Footer";

const principles = [
  {
    number: "01",
    title: "Strategic Thinking",
    description:
      "We focus on the decisions, priorities, and systems that create meaningful business impact.",
  },
  {
    number: "02",
    title: "Data-Driven",
    description:
      "We use reliable measurement and clear reporting to reduce guesswork and improve decisions.",
  },
  {
    number: "03",
    title: "Execution-Focused",
    description:
      "We move beyond recommendations and help turn strategy into systems, campaigns, and measurable outcomes.",
  },
  {
    number: "04",
    title: "Built for Partnership",
    description:
      "We work closely with our clients to build stronger systems, better decisions, and long-term capability.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#13181B]">
      <Header />

      {/* Hero */}
      <section className="px-8 py-24 md:px-14 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#FD8973]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/50">
                About ROWTH
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              Built for companies that want{" "}
              <span className="text-[#FD8973]">more than activity.</span>
            </h1>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#13181B]/60 lg:pb-2">
            ROWTH is a growth, strategy, and technology partner focused on
            turning ideas into measurable outcomes through better decisions,
            stronger systems, and disciplined execution.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="border-y border-[#13181B]/10 bg-[#F0EEEB]/50 px-8 py-16 md:px-14 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              What ROWTH is
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              A growth partner built around strategy, systems, and execution.
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-xl text-base leading-7 text-[#13181B]/60">
              Many companies do not need more disconnected tactics. They need
              clearer priorities, better infrastructure, reliable measurement,
              and consistent execution.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#13181B]/60">
              ROWTH brings those pieces together so growth efforts are connected
              to real business goals rather than isolated channel performance.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-8 py-24 md:px-14 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#13181B]/40">
                How We Think
              </p>

              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
                Growth should be intentional, measurable, and built to last.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="rounded-3xl border border-[#13181B]/10 bg-white p-7"
                >
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#FD8973]">
                    {principle.number}
                  </span>

                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#13181B]/55">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-[#07131D] px-8 py-24 text-white md:px-14 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Our Perspective
            </p>
          </div>

          <div>
            <p className="max-w-4xl text-3xl font-semibold leading-[1.2] tracking-[-0.035em] md:text-4xl lg:text-5xl">
              Growth is not about doing more. It is about making better
              decisions, building stronger systems, and executing with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="px-8 py-24 md:px-14 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[430px] overflow-hidden rounded-[32px] bg-[#F0EEEB]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#CCD5DA]/40" />

            <div className="absolute left-12 top-10 h-[300px] w-[110px] -skew-x-[24deg] bg-[#CCD5DA]/80" />

            <div className="absolute left-28 top-24 h-[270px] w-[105px] skew-x-[24deg] bg-gradient-to-b from-[#FD8973] to-[#FFB565]" />

            <div className="absolute bottom-8 right-8 max-w-[250px] rounded-2xl bg-white/90 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#003A6C]">
                Partnership
              </p>

              <p className="mt-3 text-xl font-semibold leading-snug tracking-[-0.025em]">
                Better systems create better decisions.
              </p>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              How We Work
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              We work as an extension of your team.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#13181B]/60">
              Our role is to bring clarity, structure, and execution to the
              areas that matter most while working closely with the people
              already driving the business forward.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#13181B]/60">
              We value direct communication, transparent measurement, and
              long-term relationships built around real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 pb-8 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#F0EEEB] px-8 py-16 md:px-12 lg:px-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Work with ROWTH
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Looking for a stronger growth partner?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#13181B]/60">
              Let&apos;s talk about where you are, where you want to go, and
              what needs to happen next.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#13181B] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003A6C]"
            >
              Let&apos;s Talk →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}