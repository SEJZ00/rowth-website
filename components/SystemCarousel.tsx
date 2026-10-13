"use client";

import { useState } from "react";

const cards = [
  {
    label: "Attribution",
    title: "Every lead has a source.",
    description:
      "Calls, forms, and CRM records connected back to the campaign and channel that created them.",
    status: "Source connected",
    accent: "#FD8973",
  },
  {
    label: "Measurement",
    title: "One source of truth.",
    description:
      "Every growth channel reporting into the same framework.",
    status: "Shared framework",
    accent: "#FFB565",
  },
  {
    label: "Automation",
    title: "Less manual work.",
    description:
      "Automation and AI handle repetitive work while your team focuses on decisions.",
    status: "Work automated",
    accent: "#FD8973",
  },
  {
    label: "Infrastructure",
    title: "Built on your stack.",
    description:
      "We connect the technology your business already uses instead of rebuilding everything.",
    status: "Connected infrastructure",
    accent: "#FFB565",
    tools: ["Analytics", "CRM", "Ads", "Automation", "Call Tracking", "BI"],
  },
];

export default function SystemCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = cards[activeIndex];

  const next = () => {
    setActiveIndex((current) =>
      current === cards.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? cards.length - 1 : current - 1
    );
  };

  return (
    <div className="mt-8 md:hidden">
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#11191E] p-5">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-[80px]"
          style={{
            backgroundColor: `${active.accent}14`,
          }}
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <p
              className="text-[9px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: active.accent }}
            >
              {active.label}
            </p>

            <span className="text-[8px] font-semibold tracking-[0.14em] text-white/20">
              0{activeIndex + 1} / 04
            </span>
          </div>

          <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white">
            {active.title}
          </h3>

          <p className="mt-3 text-[13px] leading-5 text-white/45">
            {active.description}
          </p>

          {active.tools && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {active.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] font-medium text-white/40"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: active.accent,
              }}
            />

            <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/30">
              {active.status}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {cards.map((card, index) => (
            <button
              key={card.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${card.label}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-gradient-to-r from-[#FD8973] to-[#FFB565]"
                  : "w-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous card"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition hover:border-white/20 hover:text-white"
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next card"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition hover:border-white/20 hover:text-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}