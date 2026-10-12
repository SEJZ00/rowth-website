type InternalHeroAtmosphereProps = {
    variant?: "services" | "approach" | "about";
  };
  
  export default function InternalHeroAtmosphere({
    variant = "services",
  }: InternalHeroAtmosphereProps) {
    const configs = {
      services: {
        glow: "right-[-6%] top-[2%]",
        ridgeTop: "top-[36%]",
        ridgeOpacity: "opacity-[0.26]",
        accent: "right-[15%] top-[26%]",
      },
  
      approach: {
        glow: "right-[0%] top-[8%]",
        ridgeTop: "top-[31%]",
        ridgeOpacity: "opacity-[0.22]",
        accent: "right-[22%] top-[22%]",
      },
  
      about: {
        glow: "right-[-8%] top-[12%]",
        ridgeTop: "top-[42%]",
        ridgeOpacity: "opacity-[0.17]",
        accent: "right-[18%] top-[30%]",
      },
    };
  
    const config = configs[variant];
  
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
  
        {/* DARK BASE DEPTH */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(255,255,255,0.018),transparent_42%)]" />
  
        {/* NAVY DEPTH */}
        <div className="absolute left-[-8%] top-[5%] h-[420px] w-[420px] rounded-full bg-[#003A6C]/10 blur-[170px]" />
  
        {/* WARM LIGHT */}
        <div
          className={`absolute ${config.glow} h-[560px] w-[560px] rounded-full bg-[#FD8973]/11 blur-[200px]`}
        />
  
        <div className="absolute bottom-[-22%] right-[18%] h-[380px] w-[380px] rounded-full bg-[#FFB565]/7 blur-[170px]" />
  
        {/* LARGE SOFT LIGHT BAND */}
        <div className="absolute right-[-10%] top-[8%] hidden h-[520px] w-[52%] rotate-[-8deg] bg-[linear-gradient(135deg,transparent_0%,rgba(253,137,115,0.025)_35%,rgba(255,181,101,0.055)_70%,transparent_100%)] blur-[1px] lg:block" />
  
        {/* RIDGELINE */}
        <div
          className={`absolute left-[38%] ${config.ridgeTop} hidden w-[72%] ${config.ridgeOpacity} lg:block`}
        >
          <svg
            viewBox="0 0 1200 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full"
          >
            <defs>
              <linearGradient
                id={`ridge-${variant}`}
                x1="0"
                y1="0"
                x2="1200"
                y2="0"
              >
                <stop offset="0%" stopColor="#003A6C" stopOpacity="0" />
                <stop offset="35%" stopColor="#FD8973" stopOpacity="0.45" />
                <stop offset="72%" stopColor="#FFB565" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FFB565" stopOpacity="0" />
              </linearGradient>
            </defs>
  
            <path
              d="M0 222
                 C110 216 145 192 215 196
                 C280 200 318 160 372 170
                 C430 180 468 120 520 137
                 C565 151 602 82 660 106
                 C710 127 748 71 805 92
                 C850 109 882 48 936 75
                 C1004 109 1040 39 1100 66
                 C1140 84 1172 57 1200 50"
              stroke={`url(#ridge-${variant})`}
              strokeWidth="1.4"
            />
  
            <path
              d="M0 233
                 C110 228 150 212 230 214
                 C312 218 356 184 420 192
                 C492 202 526 161 588 172
                 C642 182 690 139 746 148
                 C805 158 842 116 902 130
                 C970 145 1020 110 1084 119
                 C1130 125 1160 106 1200 108"
              stroke="#CCD5DA"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
          </svg>
        </div>
  
        {/* ORBITAL CURVES */}
        <div className="absolute right-[-17%] top-[-38%] hidden h-[760px] w-[760px] rounded-full border border-[#FD8973]/[0.05] lg:block" />
  
        <div className="absolute right-[-5%] top-[-27%] hidden h-[620px] w-[620px] rounded-full border border-[#FFB565]/[0.035] lg:block" />
  
        {/* DETAIL DOT GRID */}
        <div
          className={`absolute ${config.accent} hidden h-[90px] w-[140px] opacity-[0.12] lg:block [background-image:radial-gradient(circle,rgba(253,137,115,0.8)_1px,transparent_1px)] [background-size:14px_14px]`}
        />
  
        {/* SMALL ACCENT LINE */}
        <div className="absolute right-[13%] top-[24%] hidden h-px w-24 bg-gradient-to-r from-transparent via-[#FD8973]/25 to-transparent lg:block" />
  
        {/* BLEND INTO CONTENT */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#080D10_0%,rgba(8,13,16,0.95)_30%,rgba(8,13,16,0.52)_64%,rgba(8,13,16,0.16)_100%)]" />
  
        {/* TOP / BOTTOM FADE */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,13,16,0.28)_0%,transparent_23%,transparent_72%,rgba(8,13,16,0.34)_100%)]" />
      </div>
    );
  }