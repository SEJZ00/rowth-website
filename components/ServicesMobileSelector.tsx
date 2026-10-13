"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Tracking & Attribution",
    label: "CONNECT",
    description:
      "Connect marketing activity to the outcomes that actually matter.",
    href: "/services/tracking-attribution",
  },
  {
    number: "02",
    title: "Automation & AI",
    label: "AUTOMATE",
    description:
      "Reduce repetitive work and create smarter systems for moving leads and data.",
    href: "/services/automation-ai",
  },
  {
    number: "03",
    title: "Growth Strategy",
    label: "DIRECT",
    description:
      "Create clearer priorities, stronger decisions, and a focused growth roadmap.",
    href: "/services/growth-strategy",
  },
  {
    number: "04",
    title: "Web & CRO",
    label: "CAPTURE",
    description:
      "Build digital experiences designed to convert attention into measurable action.",
    href: "/services/web-cro",
  },
  {
    number: "05",
    title: "SEO & Search Growth",
    label: "CAPTURE",
    description:
      "Build sustainable search visibility around the topics your customers actually need.",
    href: "/services/seo-search-growth",
  },
  {
    number: "06",
    title: "Paid Media",
    label: "ACTIVATE",
    description:
      "Turn paid acquisition into a measurable system tied to real business outcomes.",
    href: "/services/paid-media",
  },
];

export default function ServicesMobileSelector() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = services[activeIndex];

  return (
    <div className="md:hidden">
      {/* SELECTOR */}
      <div className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={service.number}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-semibold transition duration-300 ${
                isActive
                  ? "border-[#FD8973]/40 bg-[#FD8973]/10 text-[#FD8973]"
                  : "border-[#13181B]/10 bg-white/60 text-[#13181B]/40 hover:border-[#13181B]/20 hover:text-[#13181B]/65"
              }`}
            >
              {service.number}
            </button>
          );
        })}
      </div>

      {/* ACTIVE SERVICE */}
      <div className="mt-6 border-t border-[#13181B]/10 pt-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FD8973]">
          {active.number} / {active.label}
        </p>

        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#13181B]">
          {active.title}
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-6 text-[#13181B]/55">
          {active.description}
        </p>

        <a
          href={active.href}
          className="mt-6 inline-flex items-center text-sm font-semibold text-[#13181B] transition hover:text-[#FD8973]"
        >
          Explore service →
        </a>
      </div>
    </div>
  );
}