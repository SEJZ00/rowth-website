"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with your business, goals, market, customers, and current systems. Before changing anything, we build a clear picture of where growth is coming from and where friction is getting in the way.",
    outcome: "A clear view of the business before the strategy begins.",
    focusAreas: [
      "Business goals",
      "Current performance",
      "Customer journey",
      "Market context",
      "Technology stack",
    ],
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We turn what we learn into a focused growth plan, identifying the opportunities, priorities, and systems most likely to create meaningful impact.",
    outcome: "A prioritized roadmap built around the highest-impact opportunities.",
    focusAreas: [
      "Growth opportunities",
      "Channel priorities",
      "Measurement plan",
      "Technology needs",
      "Execution roadmap",
    ],
  },
  {
    number: "03",
    title: "Build",
    description:
      "We implement the strategy across technology, tracking, automation, websites, and growth channels so the plan becomes a working system.",
    outcome: "The infrastructure and execution required to move the strategy forward.",
    focusAreas: [
      "Tracking setup",
      "Automation",
      "Web & CRO",
      "Channel execution",
      "CRM connections",
    ],
  },
  {
    number: "04",
    title: "Measure",
    description:
      "We connect activity to real business outcomes, giving teams a clear view of what is working, what is not, and where revenue is actually coming from.",
    outcome: "Clear reporting that connects growth activity to business results.",
    focusAreas: [
      "Attribution",
      "Performance",
      "Lead quality",
      "Pipeline visibility",
      "Revenue reporting",
    ],
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We use what the data shows to refine the system, remove friction, strengthen performance, and scale the parts that create the most value.",
    outcome: "A growth system that keeps improving instead of standing still.",
    focusAreas: [
      "Optimization",
      "Scaling",
      "Testing",
      "Efficiency",
      "Continuous improvement",
    ],
  },
];

export default function ApproachProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = steps[activeIndex];

  return (
    <section className="bg-[#F0EEEB] px-6 py-16 text-[#13181B] md:px-14 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* STEP TABS */}
        <div className="grid gap-3 md:grid-cols-5">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-[22px] border px-5 py-6 text-left transition duration-300 ${
                  isActive
                    ? "border-[#13181B] bg-[#13181B] text-white shadow-[0_18px_45px_rgba(19,24,27,0.14)]"
                    : "border-[#13181B]/10 bg-white/80 text-[#13181B] hover:-translate-y-0.5 hover:border-[#FD8973]/40"
                }`}
              >
                <span
                  className={`text-[10px] font-semibold tracking-[0.16em] ${
                    isActive ? "text-white/40" : "text-[#13181B]/35"
                  }`}
                >
                  {step.number}
                </span>

                <p className="mt-5 text-sm font-semibold">
                  {step.title}
                </p>

                {isActive && (
                  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#FD8973] to-[#FFB565]" />
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE CONTENT */}
        <div className="mt-8 overflow-hidden rounded-[30px] border border-[#13181B]/10 bg-white shadow-[0_24px_70px_rgba(19,24,27,0.06)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}
            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                Step {active.number} of 05
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
                {active.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#13181B]/60">
                {active.description}
              </p>

              <div className="mt-10 border-t border-[#13181B]/10 pt-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#003A6C]/45">
                  Outcome
                </p>

                <p className="mt-4 max-w-xl text-lg font-semibold leading-7">
                  {active.outcome}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="border-t border-[#13181B]/10 bg-[#F7F5F2] p-7 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#003A6C]/45">
                Focus areas
              </p>

              <div className="mt-7 space-y-3">
                {active.focusAreas.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-[#13181B]/[0.06] bg-white px-4 py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FD8973]/10 text-xs font-semibold text-[#FD8973]">
                      ✓
                    </span>

                    <span className="text-sm font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}