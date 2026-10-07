import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
    {
      number: "01",
      title: "SEO & Search Growth",
      description:
        "Build sustainable visibility and capture qualified demand across organic search.",
      details: [
        "SEO strategy",
        "Technical SEO",
        "Content strategy",
        "Keyword research",
        "Search visibility",
      ],
    },
    {
      number: "02",
      title: "Paid Media",
      description:
        "Turn advertising investment into measurable growth through smarter acquisition.",
      details: [
        "Google Ads",
        "Meta Ads",
        "LinkedIn Ads",
        "Campaign strategy",
        "Performance optimization",
      ],
    },
    {
      number: "03",
      title: "Tracking & Attribution",
      description:
        "Create reliable measurement systems that connect marketing activity to business outcomes.",
      details: [
        "Analytics architecture",
        "Conversion tracking",
        "Attribution",
        "Call tracking",
        "Reporting systems",
      ],
    },
    {
      number: "04",
      title: "Web & CRO",
      description:
        "Build digital experiences designed to communicate clearly and convert efficiently.",
      details: [
        "Website strategy",
        "Landing pages",
        "Conversion optimization",
        "UX improvements",
        "Performance",
      ],
    },
    {
      number: "05",
      title: "Automation & AI",
      description:
        "Design smarter systems that reduce repetitive work and improve operational efficiency.",
      details: [
        "Workflow automation",
        "AI implementation",
        "System integrations",
        "Lead workflows",
        "Process optimization",
      ],
    },
    {
      number: "06",
      title: "Growth Strategy",
      description:
        "Align strategy, marketing, technology, and measurement around the opportunities that matter most.",
      details: [
        "Growth planning",
        "Channel strategy",
        "Measurement strategy",
        "Technology planning",
        "Strategic consulting",
      ],
    },
  ];
  
  export default function ServicesPage() {
    return (
      <main className="min-h-screen bg-white text-[#13181B]">
        {/* Header */}
        <Header />
  
        {/* Hero */}
        <section className="px-8 py-24 md:px-14 lg:px-20 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-7 bg-[#FD8973]" />
  
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/50">
                  Our Services
                </p>
              </div>
  
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                Growth services designed for{" "}
                <span className="text-[#FD8973]">
                  real business impact.
                </span>
              </h1>
            </div>
  
            <p className="max-w-xl text-base leading-7 text-[#13181B]/60 lg:pb-2">
              We combine strategy, systems, technology, and execution to help
              businesses create measurable growth across the entire customer
              journey.
            </p>
          </div>
        </section>
  
        {/* Intro */}
        <section className="border-y border-[#13181B]/10 bg-[#F0EEEB]/50 px-8 py-12 md:px-14 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
                Strategy
              </span>
  
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#13181B]/60">
                Identify the highest-impact opportunities and build a clear path
                forward.
              </p>
            </div>
  
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#003A6C]">
                Systems
              </span>
  
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#13181B]/60">
                Create the infrastructure, tracking, and technology required to
                scale.
              </p>
            </div>
  
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFB565]">
                Execution
              </span>
  
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#13181B]/60">
                Turn strategy into action through hands-on implementation and
                optimization.
              </p>
            </div>
          </div>
        </section>
  
        {/* Service Details */}
        <section className="px-8 py-24 md:px-14 lg:px-20 lg:py-32">
          <div className="mx-auto max-w-7xl">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-8 border-b border-[#13181B]/10 py-12 first:pt-0 lg:grid-cols-[100px_0.85fr_1.15fr]"
              >
                <div>
                  <span className="text-sm font-semibold tracking-[0.15em] text-[#FD8973]">
                    {service.number}
                  </span>
                </div>
  
                <div>
                  <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">
                    {service.title}
                  </h2>
  
                  <p className="mt-5 max-w-lg text-base leading-7 text-[#13181B]/60">
                    {service.description}
                  </p>
                </div>
  
                <div className="lg:pl-12">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#13181B]/40">
                    Capabilities
                  </p>
  
                  <div className="grid gap-0">
                    {service.details.map((detail) => (
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
  
        {/* Positioning */}
        <section className="bg-[#F0EEEB]/50 px-8 py-24 md:px-14 lg:px-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                Integrated Growth
              </p>
  
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl">
                The strongest growth systems don&apos;t operate in isolation.
              </h2>
            </div>
  
            <div className="lg:pl-10">
              <p className="max-w-xl text-base leading-7 text-[#13181B]/60">
                Search, paid media, websites, tracking, automation, and strategy
                work better when they share the same objectives and measurement
                framework.
              </p>
  
              <p className="mt-5 max-w-xl text-base leading-7 text-[#13181B]/60">
                ROWTH connects these disciplines so decisions are based on the
                complete picture rather than isolated channel performance.
              </p>
            </div>
          </div>
        </section>
  
        {/* Final CTA */}
        <section className="px-8 py-8 md:px-14 lg:px-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#07131D] px-8 py-16 md:px-12 lg:px-16 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                Start with the opportunity
              </p>
  
              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-5xl lg:text-6xl">
                Not sure which service you need?
              </h2>
  
              <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
                We&apos;ll help identify the highest-impact opportunities based
                on your goals, current systems, and growth priorities.
              </p>
  
              <a
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-6 py-3.5 text-sm font-semibold text-[#13181B]"
              >
                Let&apos;s Talk →
              </a>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <Footer />
      </main>
    );
  }