"use client";

import { useRef, useState } from "react";

const cards = [
  {
    label: "Attribution",
    title: "Every lead has a source.",
    description:
      "Calls, forms, and CRM records tied back to the click, campaign, and channel that created them.",
    accent: "#FD8973",
    type: "attribution",
  },
  {
    label: "Measurement",
    title: "One source of truth.",
    description:
      "Every growth channel reporting into the same framework.",
    accent: "#FFB565",
    type: "measurement",
  },
  {
    label: "Automation",
    title: "Less manual work.",
    description:
      "Automation and AI handle repetitive work while your team focuses on decisions.",
    accent: "#FD8973",
    type: "automation",
  },
  {
    label: "Infrastructure",
    title: "Built on the stack you already run.",
    description:
      "We connect your existing tools so data can move cleanly across the customer journey.",
    accent: "#FFB565",
    type: "infrastructure",
  },
];

export default function ServicesSystemCube() {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const next = () => {
    setActiveIndex((current) =>
      current === cards.length - 1 ? current : current + 1
    );
  };

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? 0 : current - 1));
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;

    const distance = startX.current - event.clientX;

    if (distance > 45) next();
    if (distance < -45) previous();

    startX.current = null;
  };

  return (
    <div className="mt-10 md:hidden">
      <div
        className="overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div key={card.label} className="min-w-full">
              <article className="overflow-hidden rounded-[28px] border border-white/10 bg-[#10171B] px-6 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
                <div className="flex items-start justify-between gap-4">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: card.accent }}
                  >
                    {card.label}
                  </p>

                  <span className="text-[9px] font-semibold tracking-[0.16em] text-white/20">
                    0{index + 1} / 04
                  </span>
                </div>

                <h3 className="mt-5 text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-white/48">
                  {card.description}
                </p>

                {card.type === "attribution" && (
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {["Ad click", "Landing page", "Call", "CRM", "Revenue"].map(
                      (item, itemIndex, array) => (
                        <div key={item} className="flex items-center gap-2">
                          <span
                            className={`rounded-full border px-3 py-2 text-[10px] font-medium ${
                              item === "Revenue"
                                ? "border-[#FFB565]/25 bg-[#FFB565] text-[#13181B]"
                                : "border-white/10 bg-white/[0.03] text-white/45"
                            }`}
                          >
                            {item}
                          </span>

                          {itemIndex < array.length - 1 && (
                            <span className="text-[11px] text-[#FD8973]/70">
                              →
                            </span>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}

                {card.type === "measurement" && (
                  <div className="mt-8">
                    <div className="flex h-28 items-end gap-2">
                      {[30, 38, 34, 52, 70, 82].map((height, barIndex) => (
                        <span
                          key={barIndex}
                          className={`flex-1 rounded-t-md ${
                            barIndex === 4
                              ? "bg-[#FD8973]"
                              : barIndex === 5
                              ? "bg-[#FFB565]"
                              : "bg-white/10"
                          }`}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {card.type === "automation" && (
                  <div className="mt-8 space-y-3">
                    {[
                      "Lead routing",
                      "Follow-up automation",
                      "Reporting sync",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="text-[12px] text-white/48">{item}</span>

                        <span className="relative h-5 w-9 rounded-full bg-[#FD8973]">
                          <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-white" />
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {card.type === "infrastructure" && (
                  <div className="mt-8 grid grid-cols-3 gap-2">
                    {["Analytics", "CRM", "Automation", "Ads", "Calls", "BI"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-[10px] font-medium text-white/45"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {cards.map((card, index) => (
            <button
              key={card.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${card.label}`}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "h-1.5 w-7 bg-gradient-to-r from-[#FD8973] to-[#FFB565]"
                  : "h-1.5 w-1.5 bg-white/18"
              }`}
            />
          ))}
        </div>

        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/22">
          Swipe to explore
        </span>
      </div>
    </div>
  );
}