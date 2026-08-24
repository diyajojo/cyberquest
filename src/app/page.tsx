import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans text-white bg-black z-0 overflow-x-hidden">
      {/* ── Fixed CSS Gradient Background ── */}
      <div className="fixed inset-0 z-[-1] bg-black">
        {/* Wide primary glow — spreads green across the full width */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 120% 60% at 50% 35%, #0d3d18 0%, #051a0a 55%, #000000 100%)"
        }}></div>

        {/* Secondary edge bleed — soft green tint on sides */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 40% at 15% 50%, rgba(10,46,16,0.5) 0%, transparent 70%), radial-gradient(ellipse 80% 40% at 85% 50%, rgba(10,46,16,0.5) 0%, transparent 70%)"
        }}></div>
        
        {/* Subtle tech grid pattern to keep the cyber feel */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)", 
            backgroundSize: "60px 60px" 
          }}
        ></div>
        
        {/* Vignette effect to darken the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_40%,_#000000_100%)]"></div>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative z-10 flex flex-col items-center w-full min-h-screen min-h-[100dvh]">

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
      </section>

      {/* ── What is Cyberquest Section ── */}
      <section className="relative z-10 flex flex-col items-center w-full px-4 py-16">
        <div className="w-full max-w-5xl rounded-3xl border border-[#1b3d18] bg-[#030904]/80 p-8 sm:p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(27,61,24,0.3)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
            
            {/* Left Column: Heading */}
            <div className="flex-1">
              <h2 className="font-bebas-neue flex flex-col uppercase">
                <span className="text-2xl sm:text-3xl tracking-widest text-[#6FEF44]">What Is</span>
                <span className="text-4xl sm:text-5xl md:text-6xl tracking-wider text-[#6FEF44]">Cyberquest?</span>
              </h2>
              {/* Decorative underline */}
              <div className="mt-4 flex items-center gap-2">
                <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#6FEF44]"></div>
                <div className="h-[2px] w-8 bg-[#6FEF44]"></div>
                <div className="h-[2px] w-3 bg-[#6FEF44]"></div>
                <div className="h-[2px] w-1.5 bg-[#6FEF44]"></div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex-1 font-josefin-sans font-medium text-sm sm:text-base leading-relaxed text-white">
              <p className="mb-4">
                A 72-hour digital battlefield where Kerala's finest mind clash in cybersecurity warfare.<br/>
                Part of Excel 2026 at Model Engineering College, featuring real-world exploits and<br/>
                advanced penetration testing scenarios
              </p>
              <p className="text-[#6FEF44]">
                are you ready to accept the quest?
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Event Details Section ── */}
      <section className="relative z-10 flex flex-col items-center w-full px-4 py-8 pb-24">
        <div className="relative w-full max-w-5xl p-[1px]">
          {/* Outer glowing border shape */}
          <div 
            className="absolute inset-0 bg-[#1b3d18]"
            style={{
              clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 60px 100%, 40px calc(100% - 20px), 0 calc(100% - 20px), 0 20px)"
            }}
          >
            {/* Glowing accent bars */}
            <div className="absolute top-0 left-[20%] w-[35%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44,0_0_15px_#6FEF44]"></div>
            <div className="absolute bottom-0 left-[25%] w-[15%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44,0_0_15px_#6FEF44]"></div>
            <div className="absolute bottom-0 right-[25%] w-[10%] h-[2px] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44,0_0_15px_#6FEF44]"></div>
            <div className="absolute top-[20%] left-0 w-[2px] h-[25%] bg-[#6FEF44] shadow-[0_0_10px_#6FEF44,0_0_15px_#6FEF44]"></div>
          </div>
          
          {/* Inner dark container */}
          <div 
            className="relative bg-[#030904]/90 backdrop-blur-md w-full h-full p-6 sm:p-10"
            style={{
              clipPath: "polygon(21px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 21px), calc(100% - 21px) calc(100% - 1px), 59px calc(100% - 1px), 39px calc(100% - 21px), 1px calc(100% - 21px), 1px 21px)"
            }}
          >
            {/* Top Row: Date and Format */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              {/* Event Date */}
              <div className="flex-1">
                <div className="text-[#6FEF44] uppercase text-sm tracking-[0.2em] font-mono mb-4 flex items-center gap-2">
                  {/* Decorative Icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="10" y="2" width="4" height="4" transform="rotate(45 12 4)" />
                    <rect x="4" y="10" width="4" height="4" transform="rotate(45 6 12)" />
                    <rect x="16" y="10" width="4" height="4" transform="rotate(45 18 12)" />
                    <rect x="10" y="18" width="4" height="4" transform="rotate(45 12 20)" />
                    <rect x="10" y="10" width="4" height="4" transform="rotate(45 12 12)" />
                  </svg>
                  Event Date
                </div>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                  {/* Calendar Icon */}
                  <svg className="w-10 h-10 text-[#6FEF44] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none"></circle>
                    <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"></circle>
                    <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none"></circle>
                  </svg>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="text-4xl sm:text-5xl font-bebas-neue text-[#6FEF44] leading-none mt-1">30</div>
                    <div className="flex flex-col text-xs sm:text-sm font-josefin-sans leading-tight text-white">
                      <span>September 2026</span>
                      <span>6:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="text-lg sm:text-xl font-bebas-neue text-white px-1 sm:px-2 mt-1">TO</div>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="text-4xl sm:text-5xl font-bebas-neue text-[#6FEF44] leading-none mt-1">3</div>
                    <div className="flex flex-col text-xs sm:text-sm font-josefin-sans leading-tight text-white">
                      <span>October 2026</span>
                      <span>6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Format */}
              <div className="md:w-[35%] md:pl-8 md:border-l border-[#1b3d18]">
                <div className="text-[#6FEF44] uppercase text-sm tracking-[0.2em] font-mono mb-3">
                  Format
                </div>
                <div className="text-white font-josefin-sans text-lg">
                  Capture The Flag (CTF)
                </div>
              </div>

            </div>

            {/* Divider line */}
            <div className="w-full h-[1px] bg-[#1b3d18] my-8"></div>

            {/* Bottom Row: Eligibility, Prize Pool, Registration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              
              {/* Eligibility */}
              <div>
                <div className="text-[#6FEF44] uppercase text-sm tracking-[0.2em] font-mono mb-3">
                  Eligibility
                </div>
                <div className="text-white font-josefin-sans text-base leading-relaxed">
                  Students and professionals<br/>across India
                </div>
              </div>

              {/* Prize Pool */}
              <div className="sm:border-l sm:border-[#1b3d18] sm:pl-8">
                <div className="text-[#6FEF44] uppercase text-sm tracking-[0.2em] font-mono mb-2">
                  Prize Pool
                </div>
                <div className="text-white font-bebas-neue text-4xl sm:text-5xl flex items-center gap-2 mt-1">
                  <span className="text-[#6FEF44] text-3xl sm:text-4xl mb-1">₹</span> 10,000
                </div>
              </div>

              {/* Registration */}
              <div className="sm:border-l sm:border-[#1b3d18] sm:pl-8">
                <div className="text-[#6FEF44] uppercase text-sm tracking-[0.2em] font-mono mb-3">
                  Registration
                </div>
                <div className="text-white font-josefin-sans text-lg">
                  Free
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
