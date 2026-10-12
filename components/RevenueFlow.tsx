"use client";

import { useState } from "react";

const flows = {
  Track: {
    number: "01",
    title: "Track",
    description: "Capture every meaningful interaction across the customer journey.",
    steps: ["Search", "Ad click", "Form", "Call", "CRM", "Revenue"],
  },
  Attribute: {
    number: "02",
    title: "Attribute",
    description: "Connect each lead and outcome back to the source that created it.",
    steps: ["First touch", "Source", "Campaign", "Lead", "CRM", "Revenue"],
  },
  Automate: {
    number: "03",
    title: "Automate",
    description: "Move leads and data through the system with less manual work.",
    steps: ["Lead", "Route", "Follow-up", "CRM update", "Report", "Next action"],
  },
  Scale: {
    number: "04",
    title: "Scale",
    description: "Use clearer performance signals to invest where growth is working.",
    steps: ["Performance", "Budget", "Conversion", "Pipeline", "Revenue", "Growth"],
  },
};

type FlowKey = keyof typeof flows;

export default function RevenueFlow() {
  const [activeFlow, setActiveFlow] = useState<FlowKey>("Track");

  const active = flows[activeFlow];

  return (
    <div className="relative border-t border-white/10 bg-[#0A1014]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#FD8973]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                Revenue flow
              </p>
            </div>

            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-3xl">
              Growth you can{" "}
              <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
                actually see.
              </span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
              {active.description}
            </p>
          </div>

          {/* RIGHT */}
          <div>
            {/* TABS */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {(Object.keys(flows) as FlowKey[]).map((key) => {
                const item = flows[key];
                const isActive = activeFlow === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveFlow(key)}
                    className={`relative overflow-hidden rounded-2xl border px-4 py-4 text-left transition duration-300 ${
                      isActive
                        ? "border-[#FD8973]/35 bg-[#FD8973]/10"
                        : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="text-[9px] font-semibold tracking-[0.18em] text-white/25">
                      {item.number}
                    </span>

                    <p
                      className={`mt-2 text-sm font-semibold transition ${
                        isActive
                          ? "text-[#FD8973]"
                          : "text-white/65"
                      }`}
                    >
                      {item.title}
                    </p>

                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#FD8973] to-[#FFB565]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* JOURNEY */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 sm:px-5">
              <div className="flex items-center justify-between gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {active.steps.map((item, index) => (
                  <div
                    key={`${activeFlow}-${item}`}
                    className="flex shrink-0 items-center gap-2"
                  >
                    <div
                      className={`rounded-full border px-3 py-2 text-[10px] font-semibold transition duration-300 ${
                        index === active.steps.length - 1
                          ? "border-[#FFB565]/35 bg-[#FFB565] text-[#13181B]"
                          : "border-white/10 bg-[#10171B] text-white/45"
                      }`}
                    >
                      {item}
                    </div>

                    {index < active.steps.length - 1 && (
                      <span className="text-[10px] text-[#FD8973]/65">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}