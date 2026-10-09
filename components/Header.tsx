"use client";

import { useState } from "react";
import Image from "next/image";

type HeaderProps = {
  dark?: boolean;
};

export default function Header({ dark = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`z-50 w-full ${
        dark
  ? "absolute left-0 top-0 z-50 w-full bg-gradient-to-b from-[#04111c]/75 via-[#04111c]/35 to-transparent"
  : "relative z-50 w-full border-b border-[#13181B]/5 bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-14 lg:px-20">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/rowth-logo.png"
            alt="ROWTH"
            width={120}
            height={40}
            priority
            className={`h-auto w-[105px] md:w-[120px] ${
              dark ? "brightness-0 invert" : ""
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/services"
            className={`text-sm font-medium transition ${
              dark
                ? "text-white/75 hover:text-white"
                : "text-[#13181B]/65 hover:text-[#13181B]"
            }`}
          >
            Services
          </a>

          <a
            href="/approach"
            className={`text-sm font-medium transition ${
              dark
                ? "text-white/75 hover:text-white"
                : "text-[#13181B]/65 hover:text-[#13181B]"
            }`}
          >
            Approach
          </a>

          <a
            href="/about"
            className={`text-sm font-medium transition ${
              dark
                ? "text-white/75 hover:text-white"
                : "text-[#13181B]/65 hover:text-[#13181B]"
            }`}
          >
            About
          </a>

          <a
            href="/contact"
            className={`text-sm font-medium transition ${
              dark
                ? "text-white/75 hover:text-white"
                : "text-[#13181B]/65 hover:text-[#13181B]"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className={`hidden rounded-full px-5 py-3 text-sm font-semibold transition md:inline-flex ${
            dark
              ? "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#13181B]"
              : "bg-[#13181B] text-white hover:bg-[#003A6C]"
          }`}
        >
          Let&apos;s Talk →
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className={`flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${
            dark
              ? "border-white/25 bg-white/5"
              : "border-[#13181B]/15"
          }`}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 transition ${
                dark ? "bg-white" : "bg-[#13181B]"
              } ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />

            <span
              className={`absolute left-0 top-[7px] h-px w-5 transition ${
                dark ? "bg-white" : "bg-[#13181B]"
              } ${menuOpen ? "opacity-0" : ""}`}
            />

            <span
              className={`absolute left-0 top-[14px] h-px w-5 transition ${
                dark ? "bg-white" : "bg-[#13181B]"
              } ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className={`absolute left-0 top-20 w-full border-t shadow-sm md:hidden ${
            dark
              ? "border-white/10 bg-[#07131D]/95 text-white backdrop-blur-xl"
              : "border-[#13181B]/5 bg-white text-[#13181B]"
          }`}
        >
          <nav className="flex flex-col px-6 py-6">
            <a
              href="/services"
              className={`border-b py-4 text-lg font-medium ${
                dark ? "border-white/10" : "border-[#13181B]/10"
              }`}
            >
              Services
            </a>

            <a
              href="/approach"
              className={`border-b py-4 text-lg font-medium ${
                dark ? "border-white/10" : "border-[#13181B]/10"
              }`}
            >
              Approach
            </a>

            <a
              href="/about"
              className={`border-b py-4 text-lg font-medium ${
                dark ? "border-white/10" : "border-[#13181B]/10"
              }`}
            >
              About
            </a>

            <a
              href="/contact"
              className={`border-b py-4 text-lg font-medium ${
                dark ? "border-white/10" : "border-[#13181B]/10"
              }`}
            >
              Contact
            </a>

            <a
              href="/contact"
              className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold ${
                dark
                  ? "bg-white text-[#13181B]"
                  : "bg-[#13181B] text-white"
              }`}
            >
              Let&apos;s Talk →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}