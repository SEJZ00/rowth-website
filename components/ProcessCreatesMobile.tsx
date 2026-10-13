"use client";

import { useRef, useState } from "react";

const cards = [
  {
    label: "Clarity",
    title: "Know what matters first.",
    description:
      "Clear priorities replace disconnected activity and competing ideas.",
    accent: "#FD8973",
  },
  {
    label: "Infrastructure",
    title: "Build systems that support execution.",
    description:
      "Data, technology, automation, and channels work together instead of operating in isolation.",
    accent: "#FFB565",
  },
  {
    label: "Improvement",
    title: "Learn from what actually happens.",
    description:
      "Measurement turns execution into an ongoing system for improving performance.",
    accent: "#FD8973",
  },
];

export default function ProcessCreatesMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const next = () => {
    setActiveIndex((current) => (current + 1) % cards.length);
  };

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? cards.length - 1 : current - 1
    );
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance =
      touchStartX.current - event.changedTouches[0].clientX;

    if (distance > 40) {
      next();
    } else if (distance < -40) {
      previous();
    }

    touchStartX.current = null;
  };

  return (
    <div className="md:hidden">
      <div
        className="overflow-hidden touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {cards.map((card) => (
            <div key={card.label} className="min-w-full">
              <article className="rounded-[26px] border border-white/10 bg-[#11191E] p-6">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: card.accent }}
                >
                  {card.label}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {card.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-2">
          {cards.map((card, index) => (
            <button
              key={card.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-7 bg-gradient-to-r from-[#FD8973] to-[#FFB565]"
                  : "w-1.5 bg-white/15"
              }`}
              aria-label={`Show ${card.label}`}
            />
          ))}
        </div>

        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/25">
          Swipe to explore
        </span>
      </div>
    </div>
  );
}