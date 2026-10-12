import InternalHeroAtmosphere from "@/components/InternalHeroAtmosphere";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Tracking & Attribution",
    action: "CONNECT",
    href: "/services/tracking-attribution",
  },
  {
    number: "02",
    title: "Automation & AI",
    action: "AUTOMATE",
    href: "/services/automation-ai",
  },
  {
    number: "03",
    title: "Growth Strategy",
    action: "DIRECT",
    href: "/services/growth-strategy",
  },
  {
    number: "04",
    title: "Web & CRO",
    action: "CAPTURE",
    href: "/services/web-cro",
  },
  {
    number: "05",
    title: "SEO & Search Growth",
    action: "CAPTURE",
    href: "/services/seo-search-growth",
  },
  {
    number: "06",
    title: "Paid Media",
    action: "ACTIVATE",
    href: "/services/paid-media",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080D10] text-white">
      <Header dark />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-32 md:px-14 md:pb-28 md:pt-40 lg:px-20">
        {/* Atmosphere */}
        <div className="pointer-events-none absolute right-[-120px] top-[-160px] h-[520px] w-[520px] rounded-full bg-[#FD8973]/10 blur-[150px]" />
        <div className="pointer-events-none absolute left-[35%] top-[-200px] h-[480px] w-[480px] rounded-full bg-[#FFB565]/8 blur-[160px]" />

        <InternalHeroAtmosphere variant="services" />

      {/* ROWTH W atmosphere */}
<div className="pointer-events-none absolute right-[-6%] top-[5%] hidden h-[520px] w-[520px] lg:block">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,137,115,0.08),transparent_62%)]" />
</div>

<div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FD8973]" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FD8973]/80">
                  Services
                </p>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-[88px]">
                Six disciplines.
                <br />
                <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
                  One system.
                </span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-7 text-white/55 md:text-lg">
                Strategy, technology, measurement, and execution working
                together to create a growth system your business can actually
                use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM INTRO */}
      <section className="border-b border-white/10 px-6 py-20 md:px-14 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FFB565]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  The ROWTH System
                </p>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                Growth works better
                <br />
                when the pieces connect.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/50">
              Search, paid media, websites, tracking, automation, and strategy
              share one set of goals and one measurement framework.
            </p>
          </div>

          {/* System cards */}
          <div className="mt-14 grid gap-4 md:grid-cols-2">

            <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#11191E] p-7 md:p-8">
              <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-[#FD8973]/10 blur-3xl" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                Attribution
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                Every lead has a source.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                Calls, forms, and CRM records tied back to the click, campaign,
                and channel that created them.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/45">
                {["Ad click", "Landing page", "Call", "CRM", "Revenue"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center gap-2">
                      <span
                        className={`rounded-full border px-3 py-2 ${
                          item === "Revenue"
                            ? "border-[#FFB565]/40 bg-[#FFB565] text-[#13181B]"
                            : "border-white/10 bg-white/[0.03]"
                        }`}
                      >
                        {item}
                      </span>

                      {index < 4 && (
                        <span className="text-[#FD8973]">→</span>
                      )}
                    </div>
                  )
                )}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#11191E] p-7 md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFB565]">
                Measurement
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                One source of truth.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Every channel reporting into the same framework.
              </p>

              <div className="mt-10 flex h-24 items-end gap-3">
                {[35, 48, 42, 65, 82, 100].map((height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-md ${
                      index === 4
                        ? "bg-[#FD8973]"
                        : index === 5
                        ? "bg-[#FFB565]"
                        : "bg-white/12"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#11191E] p-7 md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                Automation
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                Less manual work.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Automation and AI handle the repetitive steps.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Lead routing",
                  "Follow-up sequence",
                  "Weekly reporting",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3"
                  >
                    <span className="text-sm text-white/60">{item}</span>

                    <span className="relative h-5 w-9 rounded-full bg-[#FD8973]">
                      <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-white" />
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[26px] bg-[#F0EEEB] p-8 text-[#13181B]">
  {/* subtle warm atmosphere */}
  <div className="pointer-events-none absolute -right-16 -top-16 h-[200px] w-[200px] rounded-full bg-[#FFB565]/12 blur-[90px]" />

  <div className="relative">
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#003A6C]/55">
      Infrastructure
    </p>

    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
      Built on the stack you already run.
    </h3>

    <p className="mt-3 max-w-lg text-sm leading-6 text-[#13181B]/55">
      We connect your existing tools so data can move cleanly across the
      customer journey.
    </p>

    {/* Connected stack */}
    <div className="mt-8">
      <div className="grid grid-cols-3 gap-3">
        {["Analytics", "CRM", "Automation"].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-[#13181B]/10 bg-white/75 px-4 py-3 text-center text-xs font-semibold"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="relative mx-auto h-8 w-[72%]">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#FD8973] to-[#FFB565]" />

        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#13181B]/10" />

        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FD8973]" />
      </div>

      <div className="rounded-2xl bg-[#11191E] px-5 py-4 text-white">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#FD8973]">
              Connected system
            </p>

            <p className="mt-1 text-sm font-semibold">
              One flow. Shared data.
            </p>
          </div>

          <span className="text-lg text-[#FFB565]">→</span>
        </div>
      </div>

      <div className="relative mx-auto h-8 w-px bg-gradient-to-b from-[#FD8973] to-[#FFB565]" />

      <div className="grid grid-cols-3 gap-3">
        {["Ads", "Call Tracking", "BI"].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-[#13181B]/10 bg-white/75 px-4 py-3 text-center text-xs font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
</article>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FD8973]">
              Services
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Six disciplines.
              <br />
              One connected system.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-[320px_1fr]">

            {/* Service navigation */}
            <div className="space-y-2">
              {services.map((service, index) => (
                <a
                  key={service.number}
                  href={service.href}
                  className={`group flex items-center justify-between rounded-[18px] border px-5 py-4 transition ${
                    index === 0
                      ? "border-white bg-[#F0EEEB] text-[#13181B]"
                      : "border-white/10 bg-white/[0.02] text-white hover:border-white/25 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[10px] font-semibold ${
                        index === 0
                          ? "text-[#13181B]/35"
                          : "text-white/25"
                      }`}
                    >
                      {service.number}
                    </span>

                    <span className="text-sm font-semibold">
                      {service.title}
                    </span>
                  </div>

                  <span
                    className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${
                      index === 0
                        ? "text-[#003A6C]/50"
                        : "text-white/25"
                    }`}
                  >
                    {service.action}
                  </span>
                </a>
              ))}
            </div>

            {/* Feature panel */}
            <div className="relative min-h-[520px] overflow-hidden rounded-[30px] border border-white/10 bg-[#11191E] p-7 md:p-10">

              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#FD8973]/10 blur-[100px]" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFB565]">
                    01 / Connect
                  </p>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[10px] font-semibold text-emerald-300">
                    Connected to the system
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  Tracking & Attribution
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
                  Reliable measurement systems that connect marketing activity
                  to business outcomes.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Analytics architecture",
                    "Conversion tracking",
                    "Attribution",
                    "Call tracking",
                    "Reporting systems",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* System console */}
                <div className="mt-10 overflow-hidden rounded-[22px] border border-white/10 bg-[#080D10]">
                  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FD8973]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFB565]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

                    <span className="ml-3 font-mono text-[10px] text-white/30">
                      rowth.system / tracking
                    </span>
                  </div>

                  <div className="space-y-4 px-5 py-6 font-mono text-xs text-white/45">
                    <p>
                      <span className="text-[#FD8973]">→</span> form submit sent
                      to analytics
                    </p>

                    <p>
                      <span className="text-[#FFB565]">→</span> call matched to
                      source: paid search
                    </p>

                    <p>
                      <span className="text-emerald-300">→</span> CRM record
                      updated with campaign
                    </p>
                  </div>
                </div>

                <a
                  href="/services/tracking-attribution"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-7 py-3.5 text-sm font-semibold text-[#13181B] transition hover:-translate-y-0.5"
                >
                  Explore Tracking & Attribution →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[30px] border border-white/10 bg-[#11191E] px-7 py-12 md:px-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Not sure where to start?
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Start with the business problem.
              <br />
              We&apos;ll help connect the system.
            </h2>
          </div>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-8 py-4 text-sm font-semibold text-[#13181B] lg:mt-0"
          >
            Let&apos;s Talk →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}