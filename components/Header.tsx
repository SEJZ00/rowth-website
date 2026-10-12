"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();

  return (
    <header
      className={`relative z-50 w-full ${
        dark ? "text-white" : "text-[#13181B]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12 xl:px-16">

          {/* LOGO */}
<Link
  href="/"
  className="inline-flex items-center"
  aria-label="ROWTH Home"
>
<Image
  src="/rowth-logo.svg"
  alt="ROWTH"
  width={118}
  height={36}
  priority
  className="h-auto w-[108px] md:w-[118px]"
/>
</Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href + "/"));

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm font-semibold"
              >
                <span
                  className={`relative z-10 transition duration-300 ${
                    active
                      ? "bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent"
                      : dark
                      ? "text-white/70 group-hover:text-white"
                      : "text-[#13181B]/70 group-hover:text-[#13181B]"
                  }`}
                >
                  {item.label}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#FD8973] to-[#FFB565] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className={`hidden items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 md:inline-flex ${
            dark
              ? "border-white/20 bg-white/[0.04] text-white hover:border-[#FD8973]/50 hover:bg-white/[0.07]"
              : "border-[#13181B]/15 text-[#13181B] hover:border-[#FD8973]/60"
          }`}
        >
          Let&apos;s Talk →
        </Link>

        {/* MOBILE PLACEHOLDER */}
        <div className="md:hidden">
          <Link
            href="/contact"
            className={`rounded-full border px-4 py-2 text-xs font-semibold ${
              dark
                ? "border-white/15 text-white"
                : "border-[#13181B]/15 text-[#13181B]"
            }`}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}