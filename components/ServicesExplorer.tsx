"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Tracking & Attribution",
    action: "CONNECT",
    slug: "tracking-attribution",
    description:
      "Reliable measurement systems that connect marketing activity to business outcomes.",
    capabilities: [
      "Analytics architecture",
      "Conversion tracking",
      "Attribution",
      "Call tracking",
      "Reporting systems",
    ],
    consoleTitle: "rowth.system / tracking",
    console: [
      "form submit sent to analytics",
      "call matched to source: paid search",
      "CRM record updated with campaign",
    ],
  },
  {
    number: "02",
    title: "Automation & AI",
    action: "AUTOMATE",
    slug: "automation-ai",
    description:
      "Reduce repetitive work and connect the systems that move leads, data, and follow-up forward.",
    capabilities: [
      "Lead routing",
      "Workflow automation",
      "AI-assisted processes",
      "CRM automation",
      "Reporting automation",
    ],
    consoleTitle: "rowth.system / automation",
    console: [
      "new lead routed automatically",
      "follow-up workflow triggered",
      "CRM status synced",
    ],
  },
  {
    number: "03",
    title: "Growth Strategy",
    action: "DIRECT",
    slug: "growth-strategy",
    description:
      "Create clearer priorities and a practical roadmap around the opportunities that matter most.",
    capabilities: [
      "Growth planning",
      "Channel strategy",
      "Measurement planning",
      "Prioritization",
      "Execution roadmap",
    ],
    consoleTitle: "rowth.system / strategy",
    console: [
      "growth priorities defined",
      "channel opportunities mapped",
      "execution roadmap aligned",
    ],
  },
  {
    number: "04",
    title: "Web & CRO",
    action: "CAPTURE",
    slug: "web-cro",
    description:
      "Build digital experiences designed to turn attention into measurable action.",
    capabilities: [
      "Conversion strategy",
      "Landing pages",
      "Website optimization",
      "User journeys",
      "Testing",
    ],
    consoleTitle: "rowth.system / conversion",
    console: [
      "visitor path measured",
      "conversion point optimized",
      "test result added to roadmap",
    ],
  },
  {
    number: "05",
    title: "SEO & Search Growth",
    action: "CAPTURE",
    slug: "seo-search-growth",
    description:
      "Build sustainable search visibility around the topics and intent that matter to your business.",
    capabilities: [
      "Technical SEO",
      "Content strategy",
      "Search intent",
      "On-page SEO",
      "Organic measurement",
    ],
    consoleTitle: "rowth.system / search",
    console: [
      "search opportunity identified",
      "content mapped to intent",
      "organic performance measured",
    ],
  },
  {
    number: "06",
    title: "Paid Media",
    action: "ACTIVATE",
    slug: "paid-media",
    description:
      "Turn paid acquisition into a measurable system tied to leads, pipeline, and business outcomes.",
    capabilities: [
      "Google Ads",
      "Paid social",
      "Campaign structure",
      "Conversion measurement",
      "Performance optimization",
    ],
    consoleTitle: "rowth.system / paid-media",
    console: [
      "campaign launched",
      "conversion source matched",
      "performance connected to pipeline",
    ],
  },
];

export default function ServicesExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = services[activeIndex];

  return (
    <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
      {/* SERVICE SELECTOR */}
      <div className="space-y-2">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={service.number}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group flex w-full items-center justify-between rounded-[18px] border px-5 py-4 text-left transition duration-300 ${
                isActive
                  ? "border-white bg-[#F0EEEB] text-[#13181B]"
                  : "border-white/10 bg-white/[0.02] text-white hover:border-white/25 hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`text-[10px] font-semibold ${
                    isActive ? "text-[#13181B]/35" : "text-white/25"
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
                  isActive ? "text-[#003A6C]/50" : "text-white/25"
                }`}
              >
                {service.action}
              </span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SERVICE */}
      <div className="relative min-h-[500px] overflow-hidden rounded-[30px] border border-white/10 bg-[#11191E] p-7 md:p-10">
        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#FD8973]/10 blur-[100px]" />

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFB565]">
              {active.number} / {active.action}
            </p>

            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[10px] font-semibold text-emerald-300">
              Connected to the system
            </span>
          </div>

          <h3 className="mt-7 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            {active.title}
          </h3>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            {active.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {active.capabilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60"
              >
                {item}
              </span>
            ))}
          </div>

          {/* SYSTEM CONSOLE */}
          <div className="mt-8 overflow-hidden rounded-[22px] border border-white/10 bg-[#080D10]">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FD8973]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFB565]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

              <span className="ml-3 font-mono text-[10px] text-white/30">
                {active.consoleTitle}
              </span>
            </div>

            <div className="space-y-4 px-5 py-6 font-mono text-xs text-white/45">
              {active.console.map((item, index) => (
                <p key={item}>
                  <span
                    className={
                      index === 0
                        ? "text-[#FD8973]"
                        : index === 1
                        ? "text-[#FFB565]"
                        : "text-emerald-300"
                    }
                  >
                    →
                  </span>{" "}
                  {item}
                </p>
              ))}
            </div>
          </div>

          <a
            href={`/contact?service=${active.slug}`}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-7 py-3.5 text-sm font-semibold text-[#13181B] transition hover:-translate-y-0.5 sm:w-auto"
          >
            Talk about {active.title} →
          </a>
        </div>
      </div>
    </div>
  );
}