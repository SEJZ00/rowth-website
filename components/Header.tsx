import Image from "next/image";

export default function Header() {
    return (
      <header className="border-b border-[#13181B]/5 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 md:px-14 lg:px-20">
        <a href="/" className="flex items-center">
          <Image
         src="/rowth-logo.png"
         alt="ROWTH"
         width={120}
         height={40}
         priority
         className="h-auto w-[110px] md:w-[120px]"
        />
      </a>
  
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/services"
              className="text-sm font-medium text-[#13181B]/65 transition hover:text-[#13181B]"
            >
              Services
            </a>
  
            <a
              href="/approach"
              className="text-sm font-medium text-[#13181B]/65 transition hover:text-[#13181B]"
            >
              Approach
            </a>
  
            <a
              href="/about"
              className="text-sm font-medium text-[#13181B]/65 transition hover:text-[#13181B]"
            >
              About
            </a>
  
            <a
              href="/contact"
              className="text-sm font-medium text-[#13181B]/65 transition hover:text-[#13181B]"
            >
              Contact
            </a>
          </nav>
  
          <a
            href="/contact"
            className="rounded-full bg-[#13181B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#003A6C]"
          >
            Let&apos;s Talk →
          </a>
        </div>
      </header>
    );
  }