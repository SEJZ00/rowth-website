import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your business, goals, market, customers, and current systems.",
    details: [
      "Business goals",
      "Current performance",
      "Customer journey",
      "Market context",
      "Technology stack",
    ],
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We identify the highest-impact opportunities and define the clearest path forward.",
    details: [
      "Growth priorities",
      "Channel strategy",
      "Measurement plan",
      "Technology requirements",
      "Execution roadmap",
    ],
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the strategy into systems, campaigns, infrastructure, and digital experiences.",
    details: [
      "Implementation",
      "Tracking",
      "Campaign setup",
      "Automation",
      "Web experiences",
    ],
  },
  {
    number: "04",
    title: "Measure",
    description:
      "We connect activity to outcomes so performance is visible, reliable, and actionable.",
    details: [
      "Performance tracking",
      "Attribution",
      "Reporting",
      "Data quality",
      "Business outcomes",
    ],
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We continuously optimize what works, remove friction, and identify the next opportunity.",
    details: [
      "Optimization",
      "Testing",
      "Efficiency",
      "Scaling",
      "Continuous improvement",
    ],
  },
];

export default function ApproachPage() {
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
                Our Approach
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              A structured path to{" "}
              <span className="text-[#FD8973]">measurable growth.</span>
            </h1>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#13181B]/60 lg:pb-2">
            We combine strategic thinking, data, technology, and execution into
            a process designed to move from opportunity to measurable outcomes.
          </p>
        </div>
      </section>

      {/* Principle */}
      <section className="border-y border-[#13181B]/10 bg-[#F0EEEB]/50 px-8 py-14 md:px-14 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
            Strategy + Execution
          </p>

          <p className="max-w-4xl text-2xl font-semibold leading-snug tracking-[-0.025em] md:text-3xl">
            Strategy is only valuable when it becomes action, and execution is
            only valuable when it can be measured.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="px-8 py-24 md:px-14 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#13181B]/40">
              The ROWTH Process
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              From clarity to continuous improvement.
            </h2>
          </div>

          {steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-8 border-t border-[#13181B]/10 py-12 lg:grid-cols-[100px_0.9fr_1.1fr]"
            >
              <div>
                <span className="text-sm font-semibold tracking-[0.15em] text-[#FD8973]">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.035em] md:text-4xl">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-7 text-[#13181B]/60">
                  {step.description}
                </p>
              </div>

              <div className="lg:pl-12">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#13181B]/40">
                  Focus Areas
                </p>

                <div>
                  {step.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center justify-between border-t border-[#13181B]/10 py-3"
                    >
                      <span className="text-sm font-medium text-[#13181B]/70">
                        {detail}
                      </span>

                      <span className="text-[#FD8973]">+</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Continuous Loop */}
      <section className="bg-[#07131D] px-8 py-24 text-white md:px-14 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Continuous Growth
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              Growth is not a one-time project.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              Markets change, customer behavior changes, and technology changes.
              The process is designed to keep learning and improving instead of
              treating growth as a fixed plan.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-5">
            {["Understand", "Strategize", "Build", "Measure", "Improve"].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex min-h-32 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="text-xs text-white/35">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-semibold">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="px-8 py-24 md:px-14 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Built to work together
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
              We work alongside your team, not around it.
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-xl text-base leading-7 text-[#13181B]/60">
              ROWTH is designed to operate as a strategic and execution partner,
              helping teams make better decisions while building the systems
              required to execute them.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#13181B]/60">
              The goal is not dependency. The goal is clarity, better systems,
              and stronger execution.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 pb-8 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#F0EEEB] px-8 py-16 md:px-12 lg:px-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Start with clarity
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Ready to build a stronger growth system?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#13181B]/60">
              Let&apos;s identify where the biggest opportunities are and what
              needs to happen next.
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