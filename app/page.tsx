import RevenueFlow from "@/components/RevenueFlow";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Tracking & Attribution",
    label: "CONNECT",
    href: "/services/tracking-attribution",
  },
  {
    number: "02",
    title: "Automation & AI",
    label: "AUTOMATE",
    href: "/services/automation-ai",
  },
  {
    number: "03",
    title: "Growth Strategy",
    label: "DIRECT",
    href: "/services/growth-strategy",
  },
  {
    number: "04",
    title: "Web & CRO",
    label: "CAPTURE",
    href: "/services/web-cro",
  },
  {
    number: "05",
    title: "SEO & Search Growth",
    label: "CAPTURE",
    href: "/services/seo-search-growth",
  },
  {
    number: "06",
    title: "Paid Media",
    label: "ACTIVATE",
    href: "/services/paid-media",
  },
];

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
      "Reliable measurement and reporting that reduce guesswork.",
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

const process = [
  "Understand",
  "Strategize",
  "Build",
  "Measure",
  "Improve",
];

export default function HomePage() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#080D10] text-white">
      {/* ANNOUNCEMENT */}
      <div className="border-b border-white/10 bg-[#0D151A] px-6 py-3 text-center">
        <p className="text-[10px] font-medium tracking-[0.08em] text-white/45 md:text-xs">
          Introducing the ROWTH system: every channel, call, and conversion in
          one place.
          <a
            href="/services"
            className="ml-2 text-[#FFB565] transition hover:text-white"
          >
            See how it works →
          </a>
        </p>
      </div>

      {/* HERO */}
      <section className="relative w-full max-w-full overflow-hidden border-b border-white/10 lg:min-h-[760px]">
  <Header dark />

  {/* Background atmosphere */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {/* Base */}
  <div className="absolute inset-0 bg-[#080D10]" />

  {/* Mountain integrated into background */}
<div className="absolute inset-y-0 right-0 hidden w-[62%] lg:block">
  <Image
    src="/rowth-mountain.png"
    alt=""
    fill
    priority
    className="object-cover object-[62%_center] opacity-[0.38] saturate-[0.9] contrast-[1.02]"
  />

  {/* Blend into left side */}
  <div className="absolute inset-0 bg-[linear-gradient(90deg,#080D10_0%,rgba(8,13,16,0.96)_14%,rgba(8,13,16,0.7)_34%,rgba(8,13,16,0.26)_68%,rgba(8,13,16,0.18)_100%)]" />

  {/* Fade vertically */}
  <div className="absolute inset-0 bg-[linear-gradient(180deg,#080D10_0%,rgba(8,13,16,0.36)_18%,transparent_44%,rgba(8,13,16,0.18)_74%,#080D10_100%)]" />

  {/* Warm dawn glow */}
  <div className="absolute right-[14%] top-[14%] h-[420px] w-[420px] rounded-full bg-[#FD8973]/14 blur-[170px]" />
  <div className="absolute bottom-[8%] right-[24%] h-[320px] w-[320px] rounded-full bg-[#FFB565]/10 blur-[150px]" />
  <div className="absolute bottom-[-4%] right-[36%] h-[280px] w-[280px] rounded-full bg-[#0D3B66]/10 blur-[140px]" />
</div>

  {/* Global atmosphere */}
  <div className="absolute left-[-8%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#003A6C]/14 blur-[160px]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.025),transparent_40%)]" />

  {/* Very subtle grid */}
  <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:96px_96px]" />
</div>

  {/* HERO CONTENT */}
  <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 pt-20 sm:px-6 md:px-10 md:pb-20 md:pt-28 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-12 xl:px-16">
    {/* HERO COPY */}
    <div className="relative z-10 max-w-[760px]">
      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-[#FD8973]" />

        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
          Strategy × Systems × Growth
        </p>
      </div>

      <h1 className="max-w-4xl text-[68px] font-semibold leading-[0.9] tracking-[-0.07em] sm:text-[84px] md:text-[108px] lg:text-[118px]">
        Focus on
        <br />

        <span className="bg-gradient-to-r from-[#FD8973] via-[#FD9A68] to-[#FFB565] bg-clip-text text-transparent">
          Growth.
        </span>
      </h1>

      <p className="mt-7 max-w-2xl text-xl font-medium leading-tight tracking-[-0.03em] text-white/90 sm:text-2xl lg:text-[28px]">
        A higher standard for measurable growth.
      </p>

      <p className="mt-5 max-w-xl text-base leading-8 text-white/50 md:text-lg">
        We connect data, technology, automation, and growth channels into one
        system that moves revenue forward.
      </p>

      <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
        <a
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-8 py-4 text-sm font-semibold text-[#13181B] shadow-[0_18px_40px_rgba(253,137,115,0.24)] transition hover:-translate-y-0.5 sm:w-auto"
        >
          Start a conversation →
        </a>

        <a
          href="/services"
          className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white/75 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
        >
          Explore the system
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {["Attribution", "Automation", "Revenue visibility"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.02em] text-white/45"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

{/* EMPTY RIGHT SPACE FOR MOUNTAIN */}
<div className="relative z-10 hidden min-h-[560px] lg:block" />
  

</div>

<RevenueFlow />
</section>

      {/* WHY ROWTH */}
      <section className="bg-[#F0EEEB] px-6 py-20 text-[#13181B] md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FD8973]">
            Why ROWTH
          </p>

          <h2 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.07] tracking-[-0.045em] md:text-5xl lg:text-6xl">
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

                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">
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

      {/* ROWTH SYSTEM */}
      <section className="border-b border-white/10 px-6 py-20 md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FFB565]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  The ROWTH System
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                The strongest growth
                <br />
                systems don&apos;t work
                <br />
                <span className="text-white/30">in isolation.</span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-white/50">
                Search, paid media, websites, tracking, automation, and
                strategy share one set of goals and one measurement framework.
                Decisions come from the complete picture.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-2">

                <article className="rounded-[26px] border border-white/10 bg-[#11191E] p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
                    Attribution
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">
                    Every lead has a source.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    Calls, forms, and CRM records connected back to the
                    campaign and channel that created them.
                  </p>
                </article>

                <article className="rounded-[26px] border border-white/10 bg-[#11191E] p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFB565]">
                    Measurement
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">
                    One source of truth.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    Every growth channel reporting into the same framework.
                  </p>
                </article>

                <article className="rounded-[26px] border border-white/10 bg-[#11191E] p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
                    Automation
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">
                    Less manual work.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    Automation and AI handle repetitive work while your team
                    focuses on decisions.
                  </p>
                </article>

                <article className="relative overflow-hidden rounded-[26px] bg-[#F0EEEB] p-6 text-[#13181B]">
  {/* subtle atmosphere */}
  <div className="pointer-events-none absolute -right-16 -top-20 h-[180px] w-[180px] rounded-full bg-[#FFB565]/10 blur-[80px]" />

  <div className="relative">
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#003A6C]/55">
      Infrastructure
    </p>

    <h3 className="mt-4 text-xl font-semibold">
      Built on your stack.
    </h3>

    <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
      We connect the technology your business already uses instead of
      rebuilding everything.
    </p>

    <div className="mt-6 flex flex-wrap gap-2">
      {["Analytics", "CRM", "Ads", "Automation", "Call Tracking", "BI"].map(
        (item) => (
          <span
            key={item}
            className="rounded-full border border-[#13181B]/10 bg-white/70 px-3 py-1.5 text-[10px] font-medium text-[#13181B]/60"
          >
            {item}
          </span>
        )
      )}
    </div>

    <div className="mt-6 flex items-center gap-2 border-t border-[#13181B]/10 pt-4">
      <span className="h-2 w-2 rounded-full bg-[#FD8973]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#13181B]/35">
        Connected infrastructure
      </span>
    </div>
  </div>
</article>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F0EEEB] px-6 py-20 text-[#13181B] md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FD8973]">
                Services
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-5xl lg:text-6xl">
                Six disciplines.
                <br />
                One system.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#13181B]/55">
                Strategy, systems, and execution designed to work together,
                not compete for attention.
              </p>

              <a
                href="/services"
                className="mt-7 inline-flex items-center text-sm font-semibold text-[#13181B]"
              >
                Explore all services →
              </a>
            </div>

            <div className="divide-y divide-[#13181B]/10 border-y border-[#13181B]/10">
              {services.map((service) => (
                <a
                  key={service.number}
                  href={service.href}
                  className="group grid gap-3 py-5 transition md:grid-cols-[55px_1fr_auto] md:items-center"
                >
                  <span className="text-[10px] font-semibold text-[#FD8973]">
                    {service.number}
                  </span>

                  <h3 className="text-lg font-semibold tracking-[-0.02em] transition group-hover:translate-x-1">
                    {service.title}
                  </h3>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/35">
                    {service.label}
                  </span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FD8973]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  The ROWTH Process
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.045em] md:text-5xl">
                From clarity to
                <br />
                <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
                  continuous improvement.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/45">
                Growth is not a one-time project. The process keeps learning,
                measuring, and improving.
              </p>

              <a
                href="/approach"
                className="mt-7 inline-flex text-sm font-semibold text-white"
              >
                Explore our approach →
              </a>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[55px_1fr] items-center py-5"
                >
                  <span className="text-[10px] font-semibold text-[#FD8973]">
                    0{index + 1}
                  </span>

                  <p className="text-xl font-semibold tracking-[-0.025em]">
                    {step}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PARTNERSHIP STATEMENT */}
      <section className="relative overflow-hidden border-y border-white/10 px-6 py-24 md:px-14 md:py-32 lg:px-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FD8973]/7 blur-[170px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/30">
            Built for partnership
          </p>

          <h2 className="mt-8 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] md:text-6xl lg:text-7xl">
            Strategy without execution
            <br />
            <span className="text-white/30">is just a plan.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/50">
            We work alongside your team, not around it. The goal is clarity,
            better systems, and stronger execution.
          </p>

          <a
            href="/about"
            className="mt-8 inline-flex items-center text-sm font-semibold text-[#FFB565]"
          >
            About ROWTH →
          </a>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-20 md:px-14 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#F0EEEB] text-[#13181B]">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                Contact
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                Let&apos;s talk about
                <br />
                what&apos;s next.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-[#13181B]/55">
                Tell us where you are today, where you want to go, and
                what&apos;s getting in the way.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-7 py-3.5 text-sm font-semibold text-[#13181B]"
              >
                Start a conversation →
              </a>
            </div>

            <div className="border-t border-[#13181B]/10 bg-white/55 p-7 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#003A6C]/45">
                What happens next
              </p>

              <div className="mt-7 divide-y divide-[#13181B]/10">
                {[
                  ["01", "Start with context"],
                  ["02", "Identify the opportunity"],
                  ["03", "Define the next step"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[45px_1fr] py-5"
                  >
                    <span className="text-[10px] font-semibold text-[#FD8973]">
                      {number}
                    </span>

                    <span className="text-sm font-semibold">
                      {title}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:hello@rowth.io"
                className="mt-8 inline-flex text-sm font-semibold text-[#13181B]"
              >
                hello@rowth.io →
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}