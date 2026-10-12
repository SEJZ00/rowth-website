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
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-32 md:px-14 md:pb-20 md:pt-40 lg:px-20">
        <div className="pointer-events-none absolute -right-32 top-[-180px] h-[520px] w-[520px] rounded-full bg-[#FD8973]/10 blur-[160px]" />

        <div className="pointer-events-none absolute left-[30%] top-[-220px] h-[500px] w-[500px] rounded-full bg-[#003A6C]/20 blur-[170px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-7 bg-[#FD8973]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FD8973]/80">
              Contact
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-[84px]">
            Let&apos;s talk about
            <br />

            <span className="bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent">
              what&apos;s next.
            </span>
          </h1>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-16 md:px-14 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}
            <div className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-[#11191E] p-7 md:p-10">

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

            {/* FORM */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#F0EEEB] p-7 text-[#13181B] md:p-10 lg:p-12">

              {/* Atmosphere */}
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

                <form className="space-y-6">

                  {/* Name + Email */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/45">
                        Name
                      </span>

                      <input
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
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        className="mt-3 w-full border-b border-[#13181B]/15 bg-transparent py-3 text-sm outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
                      />
                    </label>
                  </div>

                  {/* Company */}
                  <label className="block">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/45">
                      Company
                    </span>

                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className="mt-3 w-full border-b border-[#13181B]/15 bg-transparent py-3 text-sm outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
                    />
                  </label>

                  {/* Help */}
                  <label className="block">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/45">
                      What can we help with?
                    </span>

                    <select
                      name="service"
                      defaultValue=""
                      className="mt-3 w-full border-b border-[#13181B]/15 bg-transparent py-3 text-sm text-[#13181B] outline-none transition focus:border-[#FD8973]"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Tracking & Attribution</option>
                      <option>Automation & AI</option>
                      <option>Growth Strategy</option>
                      <option>Web & CRO</option>
                      <option>SEO & Search Growth</option>
                      <option>Paid Media</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>

                  {/* Message */}
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

                  {/* Submit */}
                  <div className="pt-3">
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-8 py-4 text-sm font-semibold text-[#13181B] shadow-[0_14px_30px_rgba(253,137,115,0.20)] transition hover:-translate-y-0.5 sm:w-auto"
                    >
                      Send Inquiry →
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPECTATION STRIP */}
      <section className="border-y border-white/10 px-6 py-16 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <span className="text-[10px] font-semibold text-[#FD8973]">
                01
              </span>

              <h3 className="mt-4 text-lg font-semibold">
                Share the context
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Tell us what&apos;s happening and what you&apos;re trying to
                accomplish.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-semibold text-[#FD8973]">
                02
              </span>

              <h3 className="mt-4 text-lg font-semibold">
                We review the opportunity
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                We look at where ROWTH can create the most value.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-semibold text-[#FD8973]">
                03
              </span>

              <h3 className="mt-4 text-lg font-semibold">
                Define the next step
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                If there&apos;s a fit, we map the next move together.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}