import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 flex flex-col items-center w-full min-h-screen min-h-[100dvh]">
      {/* Container that holds everything stacked and centered */}
      <div className="relative flex flex-col items-center justify-center w-full flex-1 pt-4 sm:pt-10">

        {/* ═══ MOBILE LAYOUT (below sm) — natural flex flow ═══ */}
        <div className="flex sm:hidden flex-col items-center justify-center w-full flex-1 px-4">
          
          {/* Text group */}
          <div className="flex flex-col items-center text-center pointer-events-none mt-2">
            <p
              className="font-roboto-slab tracking-[0.3em] text-[10px] font-bold uppercase mb-0 relative z-30"
              style={{ color: "#b0c8b0" }}
            >
              Excel MEC Presents
            </p>
            <h1
              className="font-bebas-neue select-none uppercase tracking-[0.05em] leading-none -mt-1"
              style={{
                fontSize: "clamp(3.2rem, 20vw, 5.5rem)",
                background: "linear-gradient(180deg, #E8FFEA 0%, #77BC79 47%, #102F10 83%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(57,255,20,0.25))",
              }}
            >
              Cyberquest
            </h1>
          </div>

          {/* Hero image */}
          <div className="relative z-10 flex flex-col items-center w-full -mt-4" style={{ maxWidth: "85vw" }}>
            <Image
              src="/hero.png"
              alt="Cyberquest Hero"
              width={650}
              height={650}
              className="w-full h-auto"
              unoptimized
            />

            {/* Register button — overlapping bottom of hero image */}
            <div className="relative -mt-10 z-20">
              <div
                className="absolute inset-0 rounded-sm blur-md opacity-50"
                style={{ background: "#39ff14" }}
              ></div>

              <button
                className="relative font-mono font-bold tracking-[0.2em] uppercase text-xs px-8 py-2.5 border-2 bg-transparent hover:bg-[#39ff14]/10 transition-colors cursor-pointer"
                style={{
                  color: "#39ff14",
                  borderColor: "#39ff14",
                  clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                  boxShadow: "0 0 12px rgba(57,255,20,0.5), inset 0 0 12px rgba(57,255,20,0.05)",
                }}
              >
                Register
              </button>

              <span className="absolute -top-[3px] -left-[3px] w-2.5 h-2.5 border-t-2 border-l-2 border-[#39ff14]"></span>
              <span className="absolute -top-[3px] -right-[3px] w-2.5 h-2.5 border-t-2 border-r-2 border-[#39ff14]"></span>
              <span className="absolute -bottom-[3px] -left-[3px] w-2.5 h-2.5 border-b-2 border-l-2 border-[#39ff14]"></span>
              <span className="absolute -bottom-[3px] -right-[3px] w-2.5 h-2.5 border-b-2 border-r-2 border-[#39ff14]"></span>
            </div>
          </div>
        </div>

        {/* ═══ DESKTOP LAYOUT (sm and above) — original absolute positioning ═══ */}
        <div className="hidden sm:flex relative items-start justify-center w-full" style={{ height: "85vh", maxHeight: "800px" }}>

          {/* Background Text Group — behind everything */}
          <div className="absolute top-[2%] left-0 right-0 flex flex-col items-center justify-center pointer-events-none z-0">
            <p
              className="font-roboto-slab tracking-[0.35em] text-sm font-bold uppercase mb-0 relative z-30"
              style={{ color: "#b0c8b0" }}
            >
              Excel MEC Presents
            </p>
            <h1
              className="font-bebas-neue select-none uppercase tracking-[0.08em] leading-none text-center -mt-2"
              style={{
                fontSize: "clamp(4.5rem, 15vw, 14rem)",
                background: "linear-gradient(180deg, #E8FFEA 0%, #77BC79 47%, #102F10 83%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(57,255,20,0.25))",
              }}
            >
              Cyberquest
            </h1>
          </div>

          {/* Hero figure — large, overlapping on the text, pushed down slightly */}
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center" style={{ width: "min(85vw, 650px)" }}>
            <Image
              src="/hero.png"
              alt="Cyberquest Hero"
              width={650}
              height={650}
              className="w-full h-auto"
              unoptimized
            />

            {/* ── REGISTER Button — overlapping on the hero image ── */}
            <div className="relative -mt-16 z-20">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-sm blur-md opacity-50"
                style={{ background: "#39ff14" }}
              ></div>

              <button
                className="relative font-mono font-bold tracking-[0.25em] uppercase text-sm px-10 py-3 border-2 bg-transparent hover:bg-[#39ff14]/10 transition-colors cursor-pointer"
                style={{
                  color: "#39ff14",
                  borderColor: "#39ff14",
                  clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                  boxShadow: "0 0 12px rgba(57,255,20,0.5), inset 0 0 12px rgba(57,255,20,0.05)",
                }}
              >
                Register
              </button>

              {/* Corner decorations */}
              <span className="absolute -top-[3px] -left-[3px] w-3 h-3 border-t-2 border-l-2 border-[#39ff14]"></span>
              <span className="absolute -top-[3px] -right-[3px] w-3 h-3 border-t-2 border-r-2 border-[#39ff14]"></span>
              <span className="absolute -bottom-[3px] -left-[3px] w-3 h-3 border-b-2 border-l-2 border-[#39ff14]"></span>
              <span className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-2 border-r-2 border-[#39ff14]"></span>
              
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6FEF44]/70">Scroll</span>
        <svg
          className="w-5 h-5 text-[#6FEF44]"
          style={{ filter: "drop-shadow(0 0 6px #6FEF44)" }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
