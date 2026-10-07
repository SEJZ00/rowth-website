import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-white px-8 py-10 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 border-b border-[#13181B]/10 pb-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
            <a href="/" className="flex items-center">
            <Image
  src="/rowth-logo.png"
  alt="ROWTH"
  width={110}
  height={36}
  className="h-auto w-[105px]"
/>
</a>
  
              <p className="mt-4 text-sm leading-6 text-[#13181B]/55">
                Strategy, systems, and execution designed to create measurable
                growth.
              </p>
            </div>
  
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm md:grid-cols-4">
              <a
                href="/services"
                className="text-[#13181B]/60 transition hover:text-[#13181B]"
              >
                Services
              </a>
  
              <a
                href="/approach"
                className="text-[#13181B]/60 transition hover:text-[#13181B]"
              >
                Approach
              </a>
  
              <a
                href="/about"
                className="text-[#13181B]/60 transition hover:text-[#13181B]"
              >
                About
              </a>
  
              <a
                href="/contact"
                className="text-[#13181B]/60 transition hover:text-[#13181B]"
              >
                Contact
              </a>
            </div>
          </div>
  
          <div className="flex flex-col gap-4 pt-6 text-xs text-[#13181B]/40 md:flex-row md:items-center md:justify-between">
            <p>© 2026 ROWTH. All rights reserved.</p>
  
            <div className="flex gap-5">
              <a href="#" className="transition hover:text-[#13181B]">
                Privacy Policy
              </a>
  
              <a href="#" className="transition hover:text-[#13181B]">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }