"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
    const searchParams = useSearchParams();

const serviceFromUrl = searchParams.get("service") ?? "";

const validServices = [
  "tracking-attribution",
  "automation-ai",
  "growth-strategy",
  "web-cro",
  "seo-search-growth",
  "paid-media",
];

const defaultService = validServices.includes(serviceFromUrl)
  ? serviceFromUrl
  : "";
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[#F0EEEB] p-7 text-[#13181B] md:p-10 lg:p-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#FFB565]/18 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-28 -left-24 h-[300px] w-[300px] rounded-full bg-[#CCD5DA]/55 blur-[100px]" />

      <div className="relative">
        <div className="mb-9">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#003A6C]/55">
            Start the conversation
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Tell us about your goals.
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-[#13181B]/55">
            A little context helps us understand where to start.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-[24px] border border-[#13181B]/10 bg-white/70 p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
              Inquiry sent
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
              Thanks for reaching out.
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
              We received your message and will review the context you shared.
            </p>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold text-[#003A6C]"
            >
              Send another inquiry →
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
          <input
  type="text"
  name="website"
  tabIndex={-1}
  autoComplete="off"
  className="hidden"
  aria-hidden="true"
/>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/45">
                  Name
                </span>

                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-3 w-full border-b border-[#13181B]/15 bg-transparent py-3 text-sm outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
                />
              </label>

              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/45">
                  Work email
                </span>

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="mt-3 w-full border-b border-[#13181B]/15 bg-transparent py-3 text-sm outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/45">
                Company
              </span>

              <input
                required
                type="text"
                name="company"
                placeholder="Company name"
                className="mt-3 w-full border-b border-[#13181B]/15 bg-transparent py-3 text-sm outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
              />
            </label>

            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/45">
                What can we help with?
              </span>

              <select
              required
                name="service"
                defaultValue={defaultService}
                className="mt-3 w-full border-b border-[#13181B]/15 bg-transparent py-3 text-sm text-[#13181B] outline-none transition focus:border-[#FD8973]"
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="tracking-attribution">
                  Tracking & Attribution
                </option>

                <option value="automation-ai">
                  Automation & AI
                </option>

                <option value="growth-strategy">
                  Growth Strategy
                </option>

                <option value="web-cro">
                  Web & CRO
                </option>

                <option value="seo-search-growth">
                  SEO & Search Growth
                </option>

                <option value="paid-media">
                  Paid Media
                </option>

                <option value="not-sure">Not sure yet</option>
              </select>
            </label>

            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/45">
                Anything else?
              </span>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about what you're working on..."
                className="mt-3 w-full resize-none border-b border-[#13181B]/15 bg-transparent py-3 text-sm leading-6 outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
              />
            </label>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}

            <div className="pt-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-8 py-4 text-sm font-semibold text-[#13181B] shadow-[0_14px_30px_rgba(253,137,115,0.20)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? "Sending..." : "Send Inquiry →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}