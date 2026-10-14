"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`relative z-50 w-full ${
        dark ? "text-white" : "text-[#13181B]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1480px] items-center justify-between px-6 py-5 md:px-8 lg:px-10 xl:px-12">
        {/* LOGO */}
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="ROWTH Home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={dark ? "/rowth-logo-dark.svg" : "/rowth-logo.svg"}
            alt="ROWTH"
            width={118}
            height={36}
            priority
            className="h-auto w-[108px] md:w-[118px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
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

        {/* DESKTOP CTA */}
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

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-full border transition md:hidden ${
            dark
              ? "border-white/15 text-white"
              : "border-[#13181B]/15 text-[#13181B]"
          }`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block h-px w-4 transition duration-300 ${
                dark ? "bg-white" : "bg-[#13181B]"
              } ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />

            <span
              className={`block h-px w-4 transition duration-300 ${
                dark ? "bg-white" : "bg-[#13181B]"
              } ${menuOpen ? "opacity-0" : ""}`}
            />

            <span
              className={`block h-px w-4 transition duration-300 ${
                dark ? "bg-white" : "bg-[#13181B]"
              } ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-t transition-all duration-300 md:hidden ${
          dark
            ? "border-white/10 bg-[#080D10]"
            : "border-[#13181B]/10 bg-white"
        } ${
          menuOpen
            ? "max-h-[430px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href + "/"));

            return (
              <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`group flex items-center justify-between border-b py-4 text-base font-semibold transition-all duration-300 active:translate-x-1 ${
                dark
                  ? "border-white/10 text-white/70 hover:pl-2 hover:text-white"
                  : "border-[#13181B]/10 text-[#13181B]/70 hover:pl-2 hover:text-[#13181B]"
              }`}
            >
              <span
                className={
                  active
                    ? "bg-gradient-to-r from-[#FD8973] to-[#FFB565] bg-clip-text text-transparent"
                    : ""
                }
              >
                {item.label}
              </span>
            
              <span className="translate-x-[-6px] text-[#FFB565] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FD8973] to-[#FFB565] px-6 py-3.5 text-sm font-semibold text-[#13181B] shadow-[0_12px_28px_rgba(253,137,115,0.20)]"
          >
            Let&apos;s Talk →
          </Link>
        </nav>
      </div>
    </header>
  );
}