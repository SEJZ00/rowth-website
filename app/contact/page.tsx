import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nextSteps = [
  {
    number: "01",
    title: "Start with context",
    description:
      "What's happening, what you've tried, and what success looks like.",
  },
  {
    number: "02",
    title: "Identify the opportunity",
    description:
      "We look at where ROWTH can create the most meaningful value.",
  },
  {
    number: "03",
    title: "Define the next step",
    description:
      "If there's a fit, we map the clearest path forward together.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080D10] text-white">
      <Header dark />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-8 md:px-14 md:pb-20 md:pt-20 lg:px-20 lg:pt-16">
        <div className="pointer-events-none absolute -right-32 top-[-180px] h-[520px] w-[520px] rounded-full bg-[#FD8973]/10 blur-[160px]" />

        <div className="pointer-events-none absolute left-[30%] top-[-220px] h-[500px] w-[500px] rounded-full bg-[#003A6C]/20 blur-[170px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-7 bg-[#FD8973]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FD8973]/80">
              Contact
            </p>
          </div>

          <h1 className="max-w-4xl text-[46px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-7xl lg:text-[84px]">
            Let&apos;s talk about
            <br />

            <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
              what&apos;s next.
            </span>
          </h1>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-10 md:px-14 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}
            <div className="hidden flex-col justify-between rounded-[32px] border border-white/10 bg-[#11191E] p-7 md:p-10 lg:flex">

              <div>
                <p className="max-w-lg text-lg leading-8 text-white/55">
                  Tell us where you are today, where you want to go, and
                  what&apos;s getting in the way. We&apos;ll help identify the
                  clearest path forward.
                </p>

                {/* Steps */}
                <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
                  {nextSteps.map((step) => (
                    <div
                      key={step.number}
                      className="grid gap-3 py-6 sm:grid-cols-[48px_1fr]"
                    >
                      <span className="text-[10px] font-semibold text-[#FD8973]">
                        {step.number}
                      </span>

                      <div>
                        <h2 className="text-lg font-semibold tracking-[-0.02em]">
                          {step.title}
                        </h2>

                        <p className="mt-2 max-w-md text-sm leading-6 text-white/45">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="mt-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                  Prefer email?
                </p>

                <a
                  href="mailto:hello@rowth.io"
                  className="mt-3 inline-flex text-lg font-semibold text-white transition hover:text-[#FFB565]"
                >
                  hello@rowth.io →
                </a>
              </div>
            </div>

            <Suspense
  fallback={
    <div className="min-h-[520px] rounded-[32px] bg-[#F0EEEB]" />
  }
>
  <ContactForm />
</Suspense>

            <div className="lg:hidden">
  <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
    Prefer email?
  </p>

  <a
    href="mailto:hello@rowth.io"
    className="mt-3 flex justify-center text-base font-semibold text-white transition hover:text-[#FFB565]"
  >
    hello@rowth.io →
  </a>
</div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}