import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#13181B]">
      <Header />

      {/* Hero */}
      <section className="px-8 py-24 md:px-14 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#FD8973]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/50">
                Contact
              </p>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              Let&apos;s talk about{" "}
              <span className="text-[#FD8973]">what&apos;s next.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#13181B]/60">
              Tell us where you are today, where you want to go, and what&apos;s
              getting in the way. We&apos;ll help identify the clearest path
              forward.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#13181B]/40">
                  Email
                </p>

                <a
                  href="mailto:hello@rowth.io"
                  className="mt-2 inline-block text-lg font-semibold transition hover:text-[#FD8973]"
                >
                  hello@rowth.io
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#13181B]/40">
                  What we can help with
                </p>

                <p className="mt-2 max-w-md text-sm leading-6 text-[#13181B]/60">
                  SEO, paid media, tracking, websites, CRO, automation, AI, and
                  growth strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[32px] bg-[#F0EEEB] p-7 md:p-10">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FD8973]">
                Start a conversation
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
                Tell us a little about your goals.
              </h2>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#13181B]/70"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-[#13181B]/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#13181B]/70"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-[#13181B]/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-[#13181B]/70"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-2xl border border-[#13181B]/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#13181B]/70"
                >
                  What can we help with?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your goals, challenges, or what you're looking to improve."
                  className="w-full resize-none rounded-2xl border border-[#13181B]/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#13181B]/30 focus:border-[#FD8973]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#13181B] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003A6C]"
              >
                Send Inquiry →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="border-y border-[#13181B]/10 bg-[#F0EEEB]/45 px-8 py-16 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="text-xs font-semibold tracking-[0.15em] text-[#FD8973]">
                01
              </span>

              <h3 className="mt-4 text-lg font-semibold">
                Start with context
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
                Tell us what&apos;s happening, what you&apos;ve tried, and what
                success looks like.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold tracking-[0.15em] text-[#FD8973]">
                02
              </span>

              <h3 className="mt-4 text-lg font-semibold">
                Identify the opportunity
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
                We&apos;ll look at the situation and identify where ROWTH can
                create the most value.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold tracking-[0.15em] text-[#FD8973]">
                03
              </span>

              <h3 className="mt-4 text-lg font-semibold">
                Define the next step
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
                If there&apos;s a fit, we&apos;ll define the clearest path
                forward together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}