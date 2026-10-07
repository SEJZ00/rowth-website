import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#13181B]">
      <Header />

      <section className="grid min-h-[78vh] items-center gap-10 px-8 py-16 md:px-14 lg:grid-cols-2 lg:px-20">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#FD8973]">
            Strategy / Systems / Execution
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Growth Starts{" "}
            <span className="text-[#FD8973]">Here.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#5F6B73]">
            We help ambitious companies turn strategy into measurable growth
            through search, data, technology, and execution.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#FD8973] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Let&apos;s Talk
            </a>

            <a
              href="/services"
              className="rounded-full border border-[#13181B]/20 px-6 py-3 text-sm font-semibold transition hover:bg-[#F0EEEB]"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* ROWTH Hero Visual */}
<div className="relative hidden min-h-[460px] overflow-hidden rounded-[32px] bg-[#F0EEEB] lg:flex">
  {/* Mountain image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/rowth-mountain.png')",
    }}
  />

  {/* Soft brand overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#F0EEEB]/95 via-[#F0EEEB]/40 to-transparent" />

  {/* Subtle W structure */}
  <div className="absolute inset-0 flex items-center justify-center opacity-90">
    <div className="relative h-[310px] w-[360px]">
      <div className="absolute left-[40px] top-[40px] h-[230px] w-[78px] -skew-x-[24deg] bg-white/28 backdrop-blur-[2px]" />

      <div className="absolute left-[128px] top-[82px] h-[190px] w-[72px] skew-x-[24deg] bg-[#FD8973]/28 backdrop-blur-[2px]" />

      <div className="absolute left-[205px] top-[30px] h-[240px] w-[78px] -skew-x-[24deg] bg-[#FFB565]/28 backdrop-blur-[2px]" />
    </div>
  </div>

  {/* Bottom content card */}
  <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/60 bg-white/90 px-7 py-6 backdrop-blur-md">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#003A6C]">
      ROWTH
    </p>

    <p className="mt-3 text-xl font-semibold leading-snug tracking-[-0.025em] text-[#13181B]">
      Strategy that moves business forward.
    </p>
  </div>
</div>
</section>

      <section className="grid gap-8 border-t border-[#E5E7EB] px-8 py-10 md:grid-cols-3 md:px-14 lg:px-20">
        <div>
          <p className="text-sm font-semibold text-[#FD8973]">01</p>
          <h2 className="mt-2 text-xl font-semibold">Strategy</h2>
          <p className="mt-2 text-sm leading-6 text-[#5F6B73]">
            Clear priorities tied to real business outcomes.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#FD8973]">02</p>
          <h2 className="mt-2 text-xl font-semibold">Systems</h2>
          <p className="mt-2 text-sm leading-6 text-[#5F6B73]">
            Data, tracking, automation, and infrastructure that scale.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#FD8973]">03</p>
          <h2 className="mt-2 text-xl font-semibold">Execution</h2>
          <p className="mt-2 text-sm leading-6 text-[#5F6B73]">
            Hands-on implementation that turns strategy into results.
          </p>
        </div>
      </section>
      {/* Services */}
<section
  id="services"
  className="border-b border-[#13181B]/10 bg-white px-8 py-24 md:px-14 lg:px-20 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="grid gap-10 border-b border-[#13181B]/10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-7 bg-[#FD8973]" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/50">
            Our Services
          </p>
        </div>

        <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#13181B] md:text-5xl lg:text-6xl">
          Growth services designed for real business impact.
        </h2>
      </div>

      <div className="lg:pb-2">
        <p className="max-w-xl text-base leading-7 text-[#13181B]/60">
          Strategy, systems, and execution working together to help you
          attract, convert, and retain your ideal customers.
        </p>
      </div>
    </div>

    {/* Services List */}
    <div>
      {[
        {
          number: "01",
          title: "SEO & Search Growth",
          description:
            "Increase visibility, traffic, and qualified demand through strategic SEO.",
        },
        {
          number: "02",
          title: "Paid Media",
          description:
            "Drive high-intent leads across Google, Meta, LinkedIn, and more.",
        },
        {
          number: "03",
          title: "Tracking & Attribution",
          description:
            "Turn data into clarity and make smarter growth decisions.",
        },
        {
          number: "04",
          title: "Web & CRO",
          description:
            "Build high-performing digital experiences designed to convert.",
        },
        {
          number: "05",
          title: "Automation & AI",
          description:
            "Streamline operations and create systems that scale efficiently.",
        },
        {
          number: "06",
          title: "Growth Strategy",
          description:
            "Align marketing, technology, and revenue around long-term growth.",
        },
      ].map((service) => (
        <a
          key={service.number}
          href="#contact"
          className="group grid gap-5 border-b border-[#13181B]/10 py-7 transition-colors hover:bg-[#F0EEEB]/45 md:grid-cols-[70px_1fr_1fr_40px] md:items-center md:px-4"
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-[#FD8973]">
            {service.number}
          </span>

          <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#13181B] md:text-xl">
            {service.title}
          </h3>

          <p className="max-w-md text-sm leading-6 text-[#13181B]/55">
            {service.description}
          </p>

          <span className="hidden text-xl text-[#13181B]/45 transition-transform group-hover:translate-x-1 group-hover:text-[#FD8973] md:block">
            →
          </span>
        </a>
      ))}
    </div>

    {/* Services CTA */}
    <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#F0EEEB] px-7 py-8 md:flex-row md:items-center md:px-10">
      <div>
        <p className="text-xl font-semibold tracking-[-0.025em] text-[#13181B]">
          Not sure where to start?
        </p>

        <p className="mt-1 text-sm leading-6 text-[#13181B]/55">
          We&apos;ll help you identify the highest-impact opportunities for
          your business.
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#13181B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#003A6C]"
      >
        Let&apos;s Talk →
      </a>
    </div>
  </div>
</section>

{/* Approach */}
<section
  id="approach"
  className="bg-[#F0EEEB]/45 px-8 py-24 md:px-14 lg:px-20 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-7 bg-[#FD8973]" />

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/50">
          Our Approach
        </p>
      </div>

      <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#13181B] md:text-5xl lg:text-6xl">
        A structured path to measurable growth.
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-[#13181B]/60">
        We combine strategic thinking, data, and hands-on execution to help
        businesses move from opportunity to real results.
      </p>
    </div>

    {/* Approach Steps */}
    <div className="mt-16 grid border-y border-[#13181B]/10 md:grid-cols-5">
      {[
        {
          number: "01",
          title: "Understand",
          description:
            "We learn about your business, goals, market, and customers.",
        },
        {
          number: "02",
          title: "Strategize",
          description:
            "We identify the highest-impact opportunities based on data and business objectives.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "We implement the strategy across channels, technology, and infrastructure.",
        },
        {
          number: "04",
          title: "Measure",
          description:
            "We track performance and attribute results clearly.",
        },
        {
          number: "05",
          title: "Improve",
          description:
            "We optimize and scale what works for long-term impact.",
        },
      ].map((step, index) => (
        <article
          key={step.number}
          className={`py-8 md:px-6 ${
            index !== 4 ? "md:border-r md:border-[#13181B]/10" : ""
          }`}
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-[#13181B]/35">
            {step.number}
          </span>

          <div className="mt-8 mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#FD8973]/40 text-sm font-semibold text-[#FD8973]">
            {step.number}
          </div>

          <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#13181B]">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
            {step.description}
          </p>
        </article>
      ))}
    </div>

    {/* Strategy Statement */}
    <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      {/* Visual */}
      <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-[#13181B]">
        <div className="absolute left-10 top-12 h-48 w-20 -skew-x-[25deg] bg-[#CCD5DA]/70" />

        <div className="absolute left-28 top-20 h-56 w-20 skew-x-[25deg] bg-linear-to-b from-[#FD8973] to-[#FFB565]" />

        <div className="absolute bottom-8 right-8 max-w-[220px] text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            ROWTH
          </p>

          <p className="mt-2 text-lg font-semibold leading-snug text-white">
            Strategy is only valuable when it gets executed.
          </p>
        </div>
      </div>

      {/* Copy */}
      <div className="lg:pl-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
          Strategy + Execution
        </p>

        <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#13181B] md:text-4xl">
          Strategy without execution is just a plan.
        </h3>

        <p className="mt-5 max-w-xl text-base leading-7 text-[#13181B]/60">
          We stay involved beyond the strategy phase, working alongside your
          team to implement, measure, and continuously improve.
        </p>

        <a
          href="#contact"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-[#13181B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#003A6C]"
        >
          Let&apos;s Talk About Your Goals →
        </a>
      </div>
    </div>
  </div>
</section>

{/* About / Why ROWTH */}
<section
  id="about"
  className="bg-white px-8 py-24 md:px-14 lg:px-20 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    {/* Top */}
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      {/* Copy */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-7 bg-[#FD8973]" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/50">
            About ROWTH
          </p>
        </div>

        <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#13181B] md:text-5xl lg:text-6xl">
          A different kind of growth partner.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#13181B]/60">
          ROWTH brings strategy, data, technology, and execution together to
          help ambitious businesses build sustainable, measurable growth.
        </p>

        <p className="mt-4 max-w-xl text-base leading-7 text-[#13181B]/60">
          We don&apos;t stop at recommendations. We work alongside your team to
          turn ideas into systems, systems into execution, and execution into
          measurable outcomes.
        </p>

        <a
          href="/about"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[#13181B]/20 px-6 py-3 text-sm font-semibold text-[#13181B] transition hover:border-[#13181B] hover:bg-[#13181B] hover:text-white"
        >
          Learn More About ROWTH →
        </a>
      </div>
      </div>


    {/* Why ROWTH */}
    <div className="mt-20 border-t border-[#13181B]/10 pt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/45">
        Why ROWTH
      </p>

      <div className="mt-8 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            number: "01",
            title: "Strategic Thinking",
            description:
              "We focus on the decisions and priorities that create real business impact.",
          },
          {
            number: "02",
            title: "Data-Driven",
            description:
              "Every decision is supported by data, measurement, and clear accountability.",
          },
          {
            number: "03",
            title: "Execution Focused",
            description:
              "We move beyond recommendations and help implement what needs to happen.",
          },
          {
            number: "04",
            title: "Long-Term Partnerships",
            description:
              "We grow with our clients, not just for them.",
          },
        ].map((item, index) => (
          <article
            key={item.number}
            className={`py-8 ${
              index !== 3
                ? "border-b border-[#13181B]/10 lg:border-b-0 lg:border-r"
                : ""
            } ${
              index === 1 ? "md:border-l md:border-[#13181B]/10" : ""
            } px-0 md:px-7 lg:px-8`}
          >
            <span className="text-xs font-semibold tracking-[0.15em] text-[#FD8973]">
              {item.number}
            </span>

            <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[#13181B]">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Final CTA */}
<section
  id="contact"
  className="px-8 pb-8 pt-6 md:px-14 lg:px-20 lg:pb-10"
>
  <div className="mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[32px] bg-[#07131D] px-7 py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute right-[-30px] top-[-20px] h-[360px] w-[150px] -skew-x-[24deg] bg-[#CCD5DA]/15" />

        <div className="absolute right-[85px] top-[60px] h-[300px] w-[120px] skew-x-[24deg] bg-gradient-to-b from-[#FD8973]/70 to-[#FFB565]/80" />

        <div className="absolute bottom-[-120px] right-[180px] h-[280px] w-[280px] rounded-full bg-[#003A6C]/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-7 bg-[#FD8973]" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
            Let&apos;s Talk
          </p>
        </div>

        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-5xl lg:text-6xl">
          Ready to build what&apos;s next?
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
          Let&apos;s discuss your goals and explore how ROWTH can help you build
          measurable, sustainable growth.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-6 py-3.5 text-sm font-semibold text-[#13181B] transition hover:opacity-90"
          >
            Start a Conversation →
          </a>

          <a
            href="mailto:hello@rowth.io"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#13181B]"
          >
            Email ROWTH
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<Footer />

    </main>
  );
}