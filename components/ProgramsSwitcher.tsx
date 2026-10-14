"use client";

import { useState } from "react";
import Link from "next/link";

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
        description:
          "Understand where leads, conversions, and revenue come from.",
      },
      {
        name: "Analytics & Reporting",
        description:
          "Turn performance data into clear, actionable visibility.",
      },
      {
        name: "CRM & Core Integrations",
        description:
          "Connect the systems behind your marketing and customer journey.",
      },
      {
        name: "Revenue Visibility",
        description:
          "Connect marketing activity to meaningful business outcomes.",
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
        description:
          "Build sustainable visibility around high-intent demand.",
      },
      {
        name: "Paid Media",
        description:
          "Create and optimize campaigns around measurable outcomes.",
      },
      {
        name: "Web & CRO",
        description:
          "Improve the experiences that turn attention into action.",
      },
      {
        name: "Conversion Optimization",
        description:
          "Use performance signals to continuously improve conversion.",
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
        description:
          "Use intelligent workflows to improve speed and efficiency.",
      },
      {
        name: "CRM Integrations",
        description:
          "Connect customer data, workflows, and marketing systems.",
      },
      {
        name: "Workflow Automation",
        description:
          "Remove repetitive work and create more consistent processes.",
      },
      {
        name: "Growth Strategy",
        description:
          "Align priorities, technology, and execution around what matters most.",
      },
    ],
  },
];

export default function ProgramsSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const activeProgram = programs[activeIndex];

  const selectProgram = (index: number) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setAnimationKey((current) => current + 1);
  };

  return (
    <section className="relative overflow-hidden bg-[#080D10] px-6 py-16 md:px-14 md:py-24 lg:px-20">
      {/* SUBTLE BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-[#FFB565]/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION INTRO */}
        <div className="mb-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#FD8973]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
              Choose your starting point
            </p>
          </div>

          <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
            Three ways to bring the right work together.
          </h2>
        </div>

        {/* PROGRAM SELECTOR */}
        <div className="border-b border-white/10">
          <div className="flex gap-8 overflow-x-auto">
            {programs.map((program, index) => {
              const active = activeIndex === index;

              return (
                <button
                  key={program.name}
                  type="button"
                  onClick={() => selectProgram(index)}
                  className="group relative min-w-max pb-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-semibold transition-colors duration-300 ${
                        active ? "text-[#FD8973]" : "text-white/25"
                      }`}
                    >
                      {program.number}
                    </span>

                    <span
                      className={`text-sm font-semibold transition-colors duration-300 md:text-base ${
                        active
                          ? "text-white"
                          : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {program.name}
                    </span>
                  </div>

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${
                      active
                        ? "w-full bg-gradient-to-r from-[#FD8973] to-[#FFB565]"
                        : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE PROGRAM CARD */}
        <div
          key={animationKey}
          className="program-enter relative mt-10 overflow-hidden rounded-[30px] border border-[#13181B]/10 bg-[#F2EFEB] text-[#13181B] shadow-[0_24px_70px_rgba(0,0,0,0.16)]"
        >
          {/* WARM EDGE */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#FD8973] via-[#FFB565] to-transparent"
          />

          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            {/* LEFT */}
            <div className="border-b border-[#13181B]/10 p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                {activeProgram.eyebrow}
              </p>

              <h3 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-[#13181B] md:text-5xl">
                {activeProgram.name}
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#13181B]/60 md:text-base">
                {activeProgram.description}
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#13181B]"
              >
                Talk about {activeProgram.name}

                <span className="text-[#FD8973] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="p-8 md:p-10 lg:p-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FD8973]">
                What it includes
              </p>

              <div className="divide-y divide-[#13181B]/10">
                {activeProgram.services.map((service, index) => (
                  <div
                    key={service.name}
                    className="grid gap-2 py-5 md:grid-cols-[50px_0.8fr_1fr] md:items-start"
                  >
                    <span className="text-[10px] font-semibold text-[#FD8973]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4 className="text-base font-semibold text-[#13181B]">
                      {service.name}
                    </h4>

                    <p className="text-sm leading-6 text-[#13181B]/55">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes programEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .program-enter {
          animation: programEnter 420ms ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .program-enter {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}