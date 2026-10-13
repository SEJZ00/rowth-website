"use client";

import { useState } from "react";

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
      "Reliable measurement and clear reporting to reduce guesswork.",
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

export default function AboutPrinciplesMobile() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 md:hidden">
      {principles.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={item.number}
            type="button"
            onClick={() =>
                setActiveIndex((current) => (current === index ? null : index))
              }
            className="block w-full border-t border-[#13181B]/10 py-5 text-left last:border-b"
          >
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <span
                  className={`text-[10px] font-semibold transition ${
                    isActive ? "text-[#FD8973]" : "text-[#13181B]/30"
                  }`}
                >
                  {item.number}
                </span>

                <h3
                  className={`text-lg font-semibold tracking-[-0.025em] transition ${
                    isActive ? "text-[#13181B]" : "text-[#13181B]/55"
                  }`}
                >
                  {item.title}
                </h3>
              </div>

              <span
                className={`text-lg transition duration-300 ${
                  isActive
                    ? "rotate-45 text-[#FD8973]"
                    : "text-[#13181B]/25"
                }`}
              >
                +
              </span>
            </div>

            <div
              className={`grid transition-all duration-300 ${
                isActive
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="ml-8 max-w-sm pt-4 text-sm leading-6 text-[#13181B]/55">
                  {item.description}
                </p>

                <div className="ml-8 mt-4 h-px w-12 bg-gradient-to-r from-[#FD8973] to-[#FFB565]" />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}