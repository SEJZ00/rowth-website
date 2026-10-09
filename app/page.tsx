import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#13181B]">
      <Header dark />

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[#07131D] text-white lg:min-h-[84vh]">

{/* Composed ROWTH visual */}
<div
  className="absolute inset-0 bg-cover bg-[74%_center] bg-no-repeat sm:bg-[70%_center] lg:bg-[66%_center]"
  style={{
    backgroundImage: "url('/rowth-hero-dark.png')",
  }}
/>

{/* Text readability */}
<div className="absolute inset-0 bg-gradient-to-r from-[#07131D] via-[#07131D]/82 to-transparent" />

{/* Subtle bottom depth */}
<div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-[#07131D]/70 to-transparent" />

{/* Content */}
<div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-14 pt-28 sm:pb-16 sm:pt-32 md:px-14 lg:min-h-[84vh] lg:px-20 lg:py-20">
  <div className="max-w-[720px]">

    {/* Accent */}
    <div className="mb-7 h-[2px] w-12 bg-gradient-to-r from-[#FD8973] to-[#FFB565]" />

    {/* Eyebrow */}
    <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/75">
      Strategy
      <span className="mx-2 text-[#FD8973]">×</span>
      Systems
      <span className="mx-2 text-[#FD8973]">×</span>
      Growth
    </p>

    {/* Headline */}
    <h1 className="text-[52px] font-medium leading-[0.9] tracking-[-0.055em] sm:text-[64px] md:text-[84px] lg:text-[102px]">
      Focus on
      <br />

      <span className="bg-gradient-to-r from-[#FD6F5F] to-[#FFB565] bg-clip-text text-transparent">
        Growth.
      </span>
    </h1>

    {/* Supporting headline */}
    <p className="mt-7 max-w-[560px] text-lg leading-[1.4] tracking-[-0.02em] text-white/90 sm:text-xl md:text-2xl">
      A higher standard for measurable growth.
    </p>

    {/* Description */}
    <p className="mt-4 max-w-[540px] text-[15px] leading-7 text-white/65 sm:text-base">
      We connect data, technology, automation, and growth channels
      into systems that move revenue forward.
    </p>

    {/* CTAs */}
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Let&apos;s Talk →
      </a>

      <a
        href="/services"
        className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#13181B]"
      >
        Explore Services
      </a>
    </div>

    {/* Revenue Flow */}
    <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/70 sm:text-[11px]">
      <span>Lead</span>
      <span className="text-[#FD8973]">→</span>

      <span>Call</span>
      <span className="text-[#FD8973]">→</span>

      <span>CRM</span>
      <span className="text-[#FD8973]">→</span>
      <span>Revenue</span>
    </div>
</div>
</div>
</section>

      {/* Hero Transition */}
      <section className="relative overflow-hidden border-b border-[#13181B]/10 bg-white px-6 py-12 md:px-14 lg:px-20">
  {/* ROWTH W mark */}
  <div className="pointer-events-none absolute right-[20px] top-1/2 hidden -translate-y-1/2 lg:block">
  <Image
    src="/rowth-w-mark-v2.png"
    alt=""
    width={280}
    height={200}
    className="h-auto w-[240px] opacity-[0.08]"
  />
</div>

  <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    {/* Copy */}
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-7 bg-[#FD8973]" />
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#13181B]/45">
          Built around the full growth system
        </p>
      </div>

      <p className="max-w-xl text-lg leading-7 text-[#13181B]/75">
        From tracking and automation to search, paid media, and conversion.
      </p>
    </div>

    {/* System Tags */}
    <div className="relative">
      {/* Connector line */}
    <div className="absolute left-0 right-[240px] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-[#FD8973]/20 via-[#13181B]/10 to-[#FFB565]/25 lg:block" />

      <div className="relative flex flex-wrap gap-2">
        {[
          { label: "Tracking", accent: true },
          { label: "Automation", accent: true },
          { label: "Web", accent: false },
          { label: "SEO", accent: false },
          { label: "Paid", accent: false },
          { label: "Strategy", accent: false },
        ].map((item) => (
          <span
            key={item.label}
            className={`rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-sm ${
              item.accent
                ? "border-[#FD8973]/25 bg-[#FD8973]/8 text-[#13181B]"
                : "border-[#13181B]/10 bg-white/85 text-[#13181B]/65"
            }`}
          >
            {item.label}
          </span>
        ))}

          {/* Mobile brand accent */}
  <div className="mt-6 flex items-center gap-3 lg:hidden">
    <span className="h-px w-8 bg-[#FD8973]" />
    <span className="h-px w-8 bg-[#FFB565]" />
    <span className="h-px w-8 bg-[#003A6C]/40" />
      </div>
     </div>
    </div>
  </div>
</section>

      {/* Services */}
<section
  id="services"
  className="border-b border-[#13181B]/10 bg-white px-8 py-24 md:px-14 lg:px-20 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="grid gap-10 border-b border-[#13181B]/10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-7 bg-[#FD8973]" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/50">
            Our Services
          </p>
        </div>

        <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#13181B] md:text-5xl lg:text-6xl">
          Growth services designed for real business impact.
        </h2>
      </div>

      <div className="lg:pb-2">
        <p className="max-w-xl text-base leading-7 text-[#13181B]/60">
          Strategy, systems, and execution working together to help you
          attract, convert, and retain your ideal customers.
        </p>
      </div>
    </div>

    {/* Services Grid */}
<div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {[
    {
      number: "01",
      title: "Tracking & Attribution",
      description:
        "Connect marketing activity to measurable business outcomes and understand what actually drives growth.",
      label: "Measurement",
      style:
        "border-[#003A6C]/15 bg-gradient-to-br from-[#EAF1F5] via-white to-[#CCD5DA]/45",
      dot: "bg-[#003A6C]",
      featured: true,
    },
    {
      number: "02",
      title: "Automation & AI",
      description:
        "Build smarter workflows and connected systems that reduce friction and scale efficiently.",
      label: "Systems",
      style:
        "border-[#FD8973]/20 bg-gradient-to-br from-[#FFF2EE] via-[#FFF7F2] to-[#FFB565]/20",
      dot: "bg-[#FD8973]",
      featured: true,
    },
    {
      number: "03",
      title: "Web & CRO",
      description:
        "Create high-performing digital experiences designed to turn attention into action.",
      label: "Experience",
      style:
        "border-[#13181B]/10 bg-gradient-to-br from-white to-[#F0EEEB]/70",
      dot: "bg-[#13181B]",
      featured: false,
    },
    {
      number: "04",
      title: "SEO & Search Growth",
      description:
        "Build sustainable visibility and qualified demand through strategic search growth.",
      label: "Demand",
      style:
        "border-[#FFB565]/20 bg-gradient-to-br from-white via-[#FFF9F1] to-[#FFB565]/16",
      dot: "bg-[#FFB565]",
      featured: false,
    },
    {
      number: "05",
      title: "Paid Media",
      description:
        "Activate high-intent demand across paid channels with clear measurement and accountability.",
      label: "Acquisition",
      style:
        "border-[#FD8973]/15 bg-gradient-to-br from-white to-[#FD8973]/10",
      dot: "bg-[#FFB565]",
      featured: false,
    },
    {
      number: "06",
      title: "Growth Strategy",
      description:
        "Align data, technology, channels, and execution around the opportunities that matter most.",
      label: "Direction",
      style:
        "border-[#13181B]/10 bg-gradient-to-br from-[#13181B] to-[#003A6C]",
      dot: "bg-[#FFB565]",
      dark: true,
      featured: false,
    },
  ].map((service) => (
    <a
      key={service.number}
      href="/services"
      className={`group relative min-h-[250px] overflow-hidden rounded-[28px] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(19,24,27,0.09)] ${service.style}`}
    >
      {/* Soft glow */}
      {service.featured && (
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/60 blur-3xl" />
      )}

      {/* Large ghost number */}
      <span
        className={`pointer-events-none absolute right-5 top-2 text-[76px] font-semibold leading-none tracking-[-0.07em] ${
          service.dark ? "text-white/[0.05]" : "text-[#13181B]/[0.035]"
        }`}
      >
        {service.number}
      </span>

      <div className="relative flex h-full flex-col">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] ${
              service.dark ? "text-white/45" : "text-[#13181B]/45"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${service.dot}`} />
            {service.label}
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto pt-16">
          <h3
            className={`text-xl font-semibold tracking-[-0.025em] ${
              service.dark ? "text-white" : "text-[#13181B]"
            }`}
          >
            {service.title}
          </h3>

          <p
            className={`mt-3 max-w-sm text-sm leading-6 ${
              service.dark ? "text-white/55" : "text-[#13181B]/55"
            }`}
          >
            {service.description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span
              className={`text-xs font-semibold ${
                service.dark ? "text-white/45" : "text-[#13181B]/45"
              }`}
            >
              Explore service
            </span>

            <span
              className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                service.dark ? "text-[#FFB565]" : "text-[#FD8973]"
              }`}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </a>
  ))}
</div>

    {/* Services CTA */}
    <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#F0EEEB] px-7 py-8 md:flex-row md:items-center md:px-10">
      <div>
        <p className="text-xl font-semibold tracking-[-0.025em] text-[#13181B]">
          Not sure where to start?
        </p>

        <p className="mt-1 text-sm leading-6 text-[#13181B]/55">
          We&apos;ll help you identify the highest-impact opportunities for
          your business.
        </p>
      </div>

      <a
  href="/contact"
  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-7 py-3.5 text-sm font-semibold text-[#13181B] shadow-[0_14px_30px_rgba(253,137,115,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(253,137,115,0.28)]"
>
  Let&apos;s Talk →
</a>
    </div>
  </div>
</section>

{/* Approach */}
<section
  id="approach"
  className="relative overflow-hidden bg-[#F0EEEB]/55 px-6 py-20 md:px-14 md:py-24 lg:px-20 lg:py-28"
>
  {/* Background atmosphere */}
  <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#FFB565]/10 blur-3xl" />
  <div className="pointer-events-none absolute bottom-[-140px] left-[-100px] h-[320px] w-[320px] rounded-full bg-[#CCD5DA]/30 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    {/* Header */}
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-7 bg-[#FD8973]" />

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/50">
          Our Approach
        </p>
      </div>

      <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#13181B] md:text-5xl lg:text-6xl">
        A structured path to
        <br className="hidden sm:block" />
        measurable growth.
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-[#13181B]/60">
        We combine strategy, data, technology, and hands-on execution to move
        from opportunity to measurable results.
      </p>
    </div>

    {/* Process Cards */}
<div className="mt-14">

{/* Desktop */}
<div className="hidden gap-4 md:grid md:grid-cols-5">
  {[
    {
      number: "01",
      title: "Understand",
      description:
        "We learn your business, goals, market, customers, and current growth system.",
      featured: false,
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "We identify the opportunities, priorities, and systems with the greatest impact.",
      featured: true,
    },
    {
      number: "03",
      title: "Build",
      description:
        "We implement across technology, channels, automation, and infrastructure.",
      featured: false,
    },
    {
      number: "04",
      title: "Measure",
      description:
        "We connect activity to performance and measurable business outcomes.",
      featured: true,
    },
    {
      number: "05",
      title: "Improve",
      description:
        "We optimize what works and build the systems required to scale.",
      featured: false,
    },
  ].map((step) => (
    <article
      key={step.number}
      className={`group relative min-h-[290px] overflow-hidden rounded-[26px] border p-6 transition duration-300 hover:-translate-y-1 ${
        step.featured
          ? "border-[#FD8973]/20 bg-[#13181B] text-white shadow-[0_20px_50px_rgba(19,24,27,0.10)]"
          : "border-[#13181B]/10 bg-white/70 text-[#13181B]"
      }`}
    >
      {/* Glow */}
      {step.featured && (
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#FD8973]/20 blur-3xl" />
      )}

      {/* Big ghost number */}
      <span
        className={`absolute right-5 top-3 text-[76px] font-semibold leading-none tracking-[-0.07em] ${
          step.featured ? "text-white/[0.05]" : "text-[#13181B]/[0.04]"
        }`}
      >
        {step.number}
      </span>

      <div className="relative flex h-full flex-col">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold ${
            step.featured
              ? "border-[#FD8973]/60 text-[#FD8973]"
              : "border-[#13181B]/15 text-[#13181B]/55"
          }`}
        >
          {step.number}
        </div>

        <div className="mt-auto pt-16">
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
              step.featured ? "text-[#FD8973]" : "text-[#003A6C]/50"
            }`}
          >
            Step {step.number}
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em]">
            {step.title}
          </h3>

          <p
            className={`mt-3 text-sm leading-6 ${
              step.featured ? "text-white/55" : "text-[#13181B]/55"
            }`}
          >
            {step.description}
          </p>
        </div>
      </div>
    </article>
  ))}
</div>

{/* Mobile horizontal experience */}
<div className="-mx-6 overflow-x-auto px-6 pb-4 md:hidden">
  <div className="flex w-max snap-x snap-mandatory gap-4">
    {[
      {
        number: "01",
        title: "Understand",
        description:
          "We learn your business, goals, market, customers, and current growth system.",
      },
      {
        number: "02",
        title: "Strategize",
        description:
          "We identify the opportunities and priorities with the greatest impact.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "We implement across technology, channels, automation, and infrastructure.",
      },
      {
        number: "04",
        title: "Measure",
        description:
          "We connect activity to measurable business outcomes.",
      },
      {
        number: "05",
        title: "Improve",
        description:
          "We optimize what works and build the systems required to scale.",
      },
    ].map((step, index) => (
      <article
        key={step.number}
        className={`relative w-[78vw] max-w-[310px] shrink-0 snap-start overflow-hidden rounded-[28px] border p-6 ${
          index === 1 || index === 3
            ? "border-[#FD8973]/20 bg-[#13181B] text-white"
            : "border-[#13181B]/10 bg-white/80 text-[#13181B]"
        }`}
      >
        <span
          className={`absolute right-4 top-2 text-[72px] font-semibold leading-none ${
            index === 1 || index === 3
              ? "text-white/[0.05]"
              : "text-[#13181B]/[0.04]"
          }`}
        >
          {step.number}
        </span>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold ${
            index === 1 || index === 3
              ? "border-[#FD8973]/60 text-[#FD8973]"
              : "border-[#13181B]/15 text-[#13181B]/55"
          }`}
        >
          {step.number}
        </div>

        <div className="pt-20">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">
            {step.title}
          </h3>

          <p
            className={`mt-3 text-sm leading-6 ${
              index === 1 || index === 3
                ? "text-white/55"
                : "text-[#13181B]/55"
            }`}
          >
            {step.description}
          </p>
        </div>
      </article>
    ))}
  </div>
</div>

{/* Mobile cue */}
<div className="mt-3 flex items-center gap-2 md:hidden">
  <span className="h-px w-8 bg-[#FD8973]" />
  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#13181B]/40">
    Swipe to explore
  </p>
</div>
    </div>
  </div>
</section>

{/* About ROWTH */}
<section
  id="about"
  className="relative overflow-hidden bg-white px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

      {/* Copy */}
      <div className="flex flex-col justify-center lg:pr-10">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-7 bg-[#FD8973]" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#13181B]/45">
            About ROWTH
          </p>
        </div>

        <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#13181B] md:text-5xl lg:text-6xl">
          Built around
          <br />
          better systems.
        </h2>

        <p className="mt-7 max-w-xl text-base leading-7 text-[#13181B]/60">
          ROWTH brings strategy, data, technology, and execution together
          to help ambitious businesses build sustainable, measurable growth.
        </p>

        <p className="mt-4 max-w-xl text-base leading-7 text-[#13181B]/60">
          We work beyond recommendations, helping teams connect ideas,
          systems, and execution into measurable outcomes.
        </p>

        <a
          href="/about"
          className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-7 py-3.5 text-sm font-semibold text-[#13181B] shadow-[0_12px_30px_rgba(253,137,115,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(253,137,115,0.24)]"
        >
          Learn More About ROWTH →
        </a>
      </div>

      {/* Brand Visual */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F7F5F2] via-[#F0EEEB] to-[#E7ECEF] px-5 py-7 sm:min-h-[460px] sm:px-8 sm:py-8">

        {/* Atmosphere */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-[#FFB565]/20 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-[300px] w-[300px] rounded-full bg-[#CCD5DA]/45 blur-[90px]" />

        {/* ROWTH W background */}
        <div className="pointer-events-none absolute -right-16 top-16 opacity-[0.045] sm:-right-14 sm:-top-4 sm:opacity-[0.10]">
          <Image
            src="/rowth-w-mark-v2.png"
            alt=""
            width={520}
            height={360}
            className="h-auto w-[330px] sm:w-[470px]"
          />
        </div>

        {/* Desktop heading */}
        <div className="relative z-10 hidden sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#003A6C]/55">
            ROWTH SYSTEM
          </p>

          <p className="mt-3 max-w-[260px] text-sm leading-6 text-[#13181B]/50">
            Connecting the pieces behind measurable growth.
          </p>
        </div>

        {/* DESKTOP SYSTEM */}
        <div className="absolute bottom-8 left-8 right-8 z-10 hidden rounded-[28px] border border-white/70 bg-white/80 p-7 shadow-[0_20px_60px_rgba(19,24,27,0.08)] backdrop-blur-xl sm:block">

          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#003A6C]/60">
                How ROWTH works
              </p>

              <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug tracking-[-0.03em] text-[#13181B]">
                Connect the pieces that actually move growth.
              </h3>
            </div>

            <span className="text-xs font-semibold tracking-[0.18em] text-[#13181B]/25">
              01 — 03
            </span>
          </div>

          <div className="relative mt-7">
            <div className="absolute left-[12%] right-[12%] top-6 h-[2px] bg-gradient-to-r from-[#003A6C]/25 via-[#FD8973]/45 to-[#FFB565]/50" />

            <div className="relative grid grid-cols-3 gap-3">

              {/* Data */}
              <div className="relative overflow-hidden rounded-[22px] border border-[#003A6C]/15 bg-gradient-to-br from-[#EAF1F5] via-white to-[#CCD5DA]/45 px-5 py-5">
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#13181B]/35">
                      01
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-[#003A6C]" />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-[#13181B]">
                    Data
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#13181B]/50">
                    Know what&apos;s happening.
                  </p>
                </div>
              </div>

              {/* Technology */}
              <div className="relative overflow-hidden rounded-[22px] border border-[#FD8973]/20 bg-gradient-to-br from-[#FD8973] via-[#FF9868] to-[#FFB565] px-5 py-5 shadow-[0_16px_32px_rgba(253,137,115,0.16)]">
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#13181B]/40">
                      02
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-[#13181B]">
                    Technology
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#13181B]/60">
                    Connect the system.
                  </p>
                </div>
              </div>

              {/* Execution */}
              <div className="relative overflow-hidden rounded-[22px] border border-[#003A6C]/20 bg-gradient-to-br from-[#003A6C] to-[#13181B] px-5 py-5">
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-white/35">
                      03
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFB565]" />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-white">
                    Execution
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Turn insight into action.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MOBILE SYSTEM */}
        <div className="relative z-10 sm:hidden">

          <div className="mb-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#003A6C]/55">
              ROWTH SYSTEM
            </p>

            <h3 className="mt-3 max-w-[280px] text-2xl font-semibold leading-[1.15] tracking-[-0.035em] text-[#13181B]">
              Connect the pieces that actually move growth.
            </h3>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#13181B]/35">
              Explore the system
            </p>

            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#FD8973]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#13181B]/30">
                Swipe →
              </span>
            </div>
          </div>

          {/* Native mobile carousel */}
          <div className="-mx-5 overflow-x-auto overscroll-x-contain px-5 pb-4 scroll-smooth touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max snap-x snap-mandatory gap-4">

              {/* Data */}
              <article className="flex min-h-[260px] w-[78vw] max-w-[300px] shrink-0 snap-center flex-col rounded-[28px] border border-[#003A6C]/15 bg-gradient-to-br from-[#F3F8FA] via-white to-[#DDE7EC] p-6 shadow-[0_16px_40px_rgba(19,24,27,0.07)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#13181B]/35">
                    01
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-[#003A6C]" />
                </div>

                <div className="mt-auto">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#003A6C]/50">
                    Measurement
                  </p>

                  <h4 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#13181B]">
                    Data
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#13181B]/55">
                    Know what&apos;s happening and where growth is coming from.
                  </p>
                </div>
              </article>

              {/* Technology */}
              <article className="flex min-h-[260px] w-[78vw] max-w-[300px] shrink-0 snap-center flex-col rounded-[28px] border border-[#FD8973]/20 bg-gradient-to-br from-[#FD8973] via-[#FF9868] to-[#FFB565] p-6 shadow-[0_18px_42px_rgba(253,137,115,0.16)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#13181B]/40">
                    02
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                </div>

                <div className="mt-auto">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#13181B]/45">
                    Systems
                  </p>

                  <h4 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#13181B]">
                    Technology
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#13181B]/60">
                    Connect the systems that turn information into action.
                  </p>
                </div>
              </article>

              {/* Execution */}
              <article className="flex min-h-[260px] w-[78vw] max-w-[300px] shrink-0 snap-center flex-col rounded-[28px] border border-white/10 bg-gradient-to-br from-[#003A6C] to-[#13181B] p-6 shadow-[0_18px_42px_rgba(0,58,108,0.16)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-white/35">
                    03
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFB565]" />
                </div>

                <div className="mt-auto">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFB565]/70">
                    Outcomes
                  </p>

                  <h4 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">
                    Execution
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    Turn strategy into measurable business outcomes.
                  </p>
                </div>
              </article>

            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[#13181B]" />
            <span className="h-1.5 w-2 rounded-full bg-[#13181B]/15" />
            <span className="h-1.5 w-2 rounded-full bg-[#13181B]/15" />
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* Final CTA */}
<section
  id="contact"
  className="bg-white px-6 py-10 md:px-14 md:py-14 lg:px-20"
>
  <div className="mx-auto max-w-7xl">
    <div className="relative min-h-[500px] overflow-hidden rounded-[36px] bg-[#061521] px-7 py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">

      {/* Premium visual environment */}

{/* Deep blue atmosphere */}
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_55%,rgba(0,58,108,0.22),transparent_34%)]" />

{/* Warm atmosphere */}
<div className="pointer-events-none absolute right-[-8%] top-[-20%] h-[560px] w-[560px] rounded-full bg-[#FFB565]/12 blur-[130px]" />

<div className="pointer-events-none absolute bottom-[-18%] right-[16%] h-[360px] w-[360px] rounded-full bg-[#FD8973]/10 blur-[120px]" />

{/* Architectural glass planes */}
<div className="pointer-events-none absolute right-[20%] top-[-30%] hidden h-[720px] w-[180px] rotate-[29deg] border-x border-white/[0.05] bg-gradient-to-b from-white/[0.025] via-[#FD8973]/[0.025] to-transparent lg:block" />

<div className="pointer-events-none absolute right-[2%] top-[-25%] hidden h-[680px] w-[150px] rotate-[29deg] border-x border-[#FFB565]/[0.10] bg-gradient-to-b from-[#FFB565]/[0.04] to-transparent lg:block" />

{/* Soft floor */}
<div className="pointer-events-none absolute bottom-[-130px] right-[1%] hidden h-[260px] w-[620px] rotate-[-7deg] rounded-[50%] border border-[#FD8973]/10 bg-gradient-to-r from-[#003A6C]/12 via-[#FD8973]/8 to-[#FFB565]/12 blur-[1px] lg:block" />

{/* W glow behind */}
<div
  className="pointer-events-none absolute bottom-[4%] right-[-5%] hidden opacity-[0.28] blur-[30px] lg:block"
  style={{
    maskImage:
      "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
  }}
>
  <Image
    src="/rowth-w-mark-v2.png"
    alt=""
    width={620}
    height={430}
    className="h-auto w-[540px]"
  />
</div>

{/* Main W */}
<div
  className="pointer-events-none absolute bottom-[7%] right-[-4%] hidden opacity-[0.62] lg:block"
  style={{
    maskImage:
      "linear-gradient(to right, transparent 0%, rgba(0,0,0,.45) 18%, black 38%, black 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, rgba(0,0,0,.45) 18%, black 38%, black 100%)",
  }}
>
  <Image
    src="/rowth-w-mark-v2.png"
    alt=""
    width={620}
    height={430}
    className="h-auto w-[535px] drop-shadow-[0_0_22px_rgba(255,181,101,0.12)]"
  />
</div>

{/* Dark integration layer over W */}
<div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] bg-gradient-to-r from-[#061521] via-[#061521]/25 to-transparent lg:block" />

{/* Fine warm rim */}
<div className="pointer-events-none absolute bottom-[14%] right-[8%] hidden h-px w-[330px] bg-gradient-to-r from-transparent via-[#FD8973]/40 to-[#FFB565]/45 blur-[0.5px] lg:block" />

{/* Mobile W atmosphere */}
<div
  className="pointer-events-none absolute bottom-[-30px] right-[-85px] lg:hidden"
  style={{
    maskImage:
      "linear-gradient(to top left, black 0%, rgba(0,0,0,.45) 45%, transparent 78%)",
    WebkitMaskImage:
      "linear-gradient(to top left, black 0%, rgba(0,0,0,.45) 45%, transparent 78%)",
  }}
>
  <div className="absolute inset-0 scale-110 bg-[#FD8973]/10 blur-[55px]" />

  <Image
    src="/rowth-w-mark-v2.png"
    alt=""
    width={380}
    height={260}
    className="relative h-auto w-[320px] opacity-[0.08]"
  />
</div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[360px] max-w-3xl flex-col justify-center">

        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-[#FD8973]" />

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
            Let&apos;s Talk
          </p>
        </div>

        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
          Ready to build what&apos;s next?
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">
          Let&apos;s discuss your goals and explore how ROWTH can help you build
          measurable, sustainable growth.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] via-[#FF9868] to-[#FFB565] px-8 py-4 text-sm font-semibold text-[#13181B] shadow-[0_12px_35px_rgba(253,137,115,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(253,137,115,0.36)]"
          >
            Let&apos;s Talk →
          </a>

          <a
            href="mailto:hello@rowth.io"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/50 hover:bg-white/10"
          >
            hello@rowth.io
          </a>
        </div>

        {/* Bottom system cue */}
        <div className="mt-12 flex flex-wrap items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
          <span>Strategy</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#FD8973]" />

          <span>Systems</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFB565]" />

          <span>Execution</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<Footer />

    </main>
  );
}