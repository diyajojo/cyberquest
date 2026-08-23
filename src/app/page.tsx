import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans text-white bg-black z-0 overflow-x-hidden">
      {/* ── Scrollable Background Image ── */}
      <div className="absolute top-0 left-0 w-full z-0">
        <Image
          src="/background.png"
          alt="Background"
          width={1920}
          height={2720}
          className="w-full h-auto"
          priority
          unoptimized
        />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative z-10 flex flex-col items-center w-full min-h-screen">

        {/* Container that holds everything stacked and centered */}
        <div className="relative flex flex-col items-center justify-center w-full flex-1 pt-6 sm:pt-10">

          {/* "EXCEL MEC PRESENTS" — sits right above CYBERQUEST */}
          <p
            className="tracking-[0.35em] text-xs sm:text-sm font-mono font-bold uppercase border border-white/20 px-4 py-1 mb-0 relative z-30"
            style={{ color: "#b0c8b0" }}
          >
            Excel MEC Presents
          </p>

          {/* Main stacking area: CYBERQUEST text + hero image + register button */}
          <div className="relative flex items-start justify-center w-full" style={{ height: "85vh", maxHeight: "800px" }}>

            {/* CYBERQUEST text — behind everything, vertically centered in upper portion */}
            <h1
              className="absolute top-[5%] left-0 right-0 flex items-center justify-center select-none font-black uppercase tracking-tighter leading-none text-center pointer-events-none z-0"
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

                {/* Decorative dot row below button */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-1 items-center">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full bg-[#39ff14]"
                      style={{
                        width: i === 3 ? "14px" : "4px",
                        height: "4px",
                        opacity: i === 3 ? 1 : 0.35,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
