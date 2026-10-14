import ProgramsSwitcher from "@/components/ProgramsSwitcher";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const programs = [
  {
    number: "01",
    name: "Foundation",
    eyebrow: "Build the foundation",
    description:
      "Create reliable measurement, clearer reporting, and the core systems needed to make better growth decisions.",
    services: [
      {
        name: "Tracking & Attribution",
        description: "Understand where leads, conversions, and revenue come from.",
      },
      {
        name: "Analytics & Reporting",
        description: "Turn performance data into clear, actionable visibility.",
      },
      {
        name: "CRM & Core Integrations",
        description: "Connect the systems behind your marketing and customer journey.",
      },
      {
        name: "Revenue Visibility",
        description: "Connect marketing activity to meaningful business outcomes.",
      },
    ],
  },
  {
    number: "02",
    name: "Performance",
    eyebrow: "Turn demand into growth",
    description:
      "Bring acquisition, conversion, and measurement together to create more efficient and measurable growth.",
    services: [
      {
        name: "SEO & Search Growth",
        description: "Build sustainable visibility around high-intent demand.",
      },
      {
        name: "Paid Media",
        description: "Create and optimize campaigns around measurable outcomes.",
      },
      {
        name: "Web & CRO",
        description: "Improve the experiences that turn attention into action.",
      },
      {
        name: "Conversion Optimization",
        description: "Use performance signals to continuously improve conversion.",
      },
    ],
  },
  {
    number: "03",
    name: "Enablement",
    eyebrow: "Build systems that scale",
    description:
      "Reduce manual work, connect systems, and create stronger infrastructure for long-term growth.",
    services: [
      {
        name: "Automation & AI",
        description: "Use intelligent workflows to improve speed and efficiency.",
      },
      {
        name: "CRM Integrations",
        description: "Connect customer data, workflows, and marketing systems.",
      },
      {
        name: "Workflow Automation",
        description: "Remove repetitive work and create more consistent processes.",
      },
      {
        name: "Growth Strategy",
        description: "Align priorities, technology, and execution around what matters most.",
      },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#080D10] text-white">
      <Header dark />

      {/* HERO */}
      <section className="border-b border-white/10 px-6 pb-16 pt-10 md:px-14 md:pb-24 md:pt-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-7 bg-[#FD8973]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#FD8973]">
              Growth Programs
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <h1 className="max-w-4xl text-[46px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-7xl lg:text-[82px]">
              Choose the support that{" "}
              <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
                moves growth forward.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-white/55 md:text-lg">
              ROWTH combines strategy, measurement, growth channels, technology,
              and execution around the problems your business actually needs to
              solve.
            </p>
          </div>
        </div>
      </section>

      <ProgramsSwitcher />

     {/* SERVICES CONNECTION */}
<section className="px-6 py-16 md:px-14 md:py-24 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#11191E]">
      {/* WARM EDGE */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#FD8973] via-[#FFB565] to-transparent"
      />

      <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
        {/* LEFT */}
        <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#FFB565]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFB565]">
              Explore the capabilities
            </p>
          </div>

          <h2 className="max-w-md text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
            Looking for something specific?
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/50 md:text-base">
            Explore the individual capabilities behind our growth programs and
            see where ROWTH can support your team.
          </p>

          <a
            href="/services"
            className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white"
          >
            Explore All Services

            <span className="text-[#FD8973] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* SERVICE LIST */}
        <div className="p-8 md:p-10 lg:p-12">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
            Individual capabilities
          </p>

          <div className="divide-y divide-white/10">
            {[
              "Tracking & Attribution",
              "Automation & AI",
              "Growth Strategy",
              "Web & CRO",
              "SEO & Search Growth",
              "Paid Media",
            ].map((service, index) => (
              <a
                key={service}
                href="/services"
                className="group flex items-center justify-between py-5"
              >
                <div className="flex items-center gap-5 md:gap-7">
                  <span className="w-6 text-[10px] font-semibold text-[#FD8973]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base font-medium text-white transition duration-300 group-hover:translate-x-1 group-hover:text-[#FFB565] md:text-lg">
                    {service}
                  </span>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-sm text-white/35 transition duration-300 group-hover:border-[#FD8973]/40 group-hover:text-[#FD8973]">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FLEXIBILITY */}
      <section className="px-6 pb-16 md:px-14 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 px-7 py-10 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFB565]">
                Built around your business
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                These are not fixed packages.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-white/50 md:text-base">
              Every engagement is adapted to your goals, current systems,
              priorities, and stage of growth. A program gives us a starting
              point, not a box your business has to fit into.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#F0EEEB] px-7 py-12 text-[#13181B] md:px-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Not sure where to start?
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Start with the business problem.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#13181B]/55">
              We&apos;ll help connect the right strategy, services, and systems
              around what you&apos;re trying to achieve.
            </p>
          </div>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-8 py-4 text-sm font-semibold text-[#13181B] transition hover:-translate-y-0.5 lg:mt-0"
          >
            Let&apos;s Talk →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}