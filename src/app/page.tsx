import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-x-hidden selection:bg-green-500/30">
      {/* Background Image */}
      <div className="fixed inset-0 z-[-1] bg-black">
        <Image
          src="/background.png"
          alt="Background"
          fill
          priority
          className="object-cover object-top opacity-60 mix-blend-screen"
        />
        {/* Gradient overlay for readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
      </div>

      <main className="flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-12 sm:py-24 gap-16 sm:gap-24 relative z-10">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mt-8 sm:mt-12 w-full gap-2">
          <p className="text-[#39ff14] font-mono tracking-[0.3em] text-xs sm:text-sm uppercase font-bold drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">
            Excel MEC Presents
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-green-100 to-[#0f4d0f] drop-shadow-[0_0_30px_rgba(57,255,20,0.6)] leading-none mt-2">
            Cyberquest
          </h1>
          
          {/* Register Button - Pushed down to align with the lock in the background image */}
          <div className="mt-48 sm:mt-64 relative group">
            <div className="absolute -inset-1 bg-[#39ff14] rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-8 py-3 bg-black/80 border-2 border-[#39ff14] text-[#39ff14] font-mono tracking-[0.2em] text-sm uppercase hover:bg-[#39ff14] hover:text-black transition-colors flex items-center justify-center gap-3 backdrop-blur-sm"
                    style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}>
              Register
            </button>
            {/* Decorative dots below register button */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`h-1 rounded-full bg-[#39ff14] ${i === 2 ? 'w-4' : 'w-1 opacity-50'}`}></div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Cyberquest */}
        <section className="w-full">
          <div className="relative rounded-3xl bg-[#051105]/70 backdrop-blur-md border border-[#39ff14]/30 p-8 sm:p-12 shadow-[0_0_15px_rgba(57,255,20,0.1)] hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="md:w-1/3">
                <h2 className="text-[#39ff14] font-bold uppercase tracking-[0.2em] text-sm mb-2 drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]">What Is</h2>
                <h3 className="text-3xl sm:text-4xl font-black text-[#39ff14] uppercase tracking-wider drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]">Cyberquest?</h3>
                <div className="flex gap-2 items-center mt-4">
                  <div className="h-0.5 w-16 bg-[#39ff14] shadow-[0_0_10px_rgba(57,255,20,0.8)]"></div>
                  <div className="h-0.5 w-4 bg-[#39ff14]/50"></div>
                  <div className="h-0.5 w-2 bg-[#39ff14]/30"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-white/80 font-mono text-sm leading-relaxed">
                  A 72-hour digital battlefield where Kerala's finest mind clash in cybersecurity warfare.
                  Part of Excel 2026 at Model Engineering College, featuring real-world exploits and
                  advanced penetration testing scenarios
                </p>
                <p className="text-[#39ff14] font-mono text-sm mt-4 font-bold drop-shadow-[0_0_5px_rgba(57,255,20,0.4)]">
                  are you ready to accept the quest?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="w-full">
          <div className="relative bg-[#051105]/70 backdrop-blur-md border border-[#39ff14]/40 p-8 sm:p-10 shadow-[0_0_20px_rgba(57,255,20,0.15)] flex flex-col gap-10"
               style={{
                 clipPath: "polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
               }}>
            
            {/* Top decorative line */}
            <div className="absolute top-0 left-10 w-32 h-[2px] bg-[#39ff14] shadow-[0_0_10px_rgba(57,255,20,0.8)]"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] gap-8">
              {/* Date */}
              <div className="flex flex-col gap-3">
                <span className="text-[#39ff14] text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#39ff14]"></span>
                    <span className="w-1.5 h-1.5 bg-[#39ff14]"></span>
                    <span className="w-1.5 h-1.5 bg-[#39ff14]"></span>
                  </div> 
                  Event Date
                </span>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center border border-[#39ff14]/40 bg-[#39ff14]/10 rounded-md p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#39ff14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-4xl sm:text-5xl font-black text-[#39ff14]">30</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white tracking-wide">September 2026</span>
                      <span className="text-xs text-white/70">6:00 PM</span>
                    </div>
                  </div>
                  
                  <span className="text-[#39ff14] font-bold text-sm tracking-widest">TO</span>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl font-black text-[#39ff14]">3</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white tracking-wide">October 2026</span>
                      <span className="text-xs text-white/70">6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Format */}
              <div className="flex flex-col gap-2 justify-center lg:border-l border-[#39ff14]/20 lg:pl-10">
                <span className="text-[#39ff14] text-xs font-bold tracking-[0.2em] uppercase">Format</span>
                <span className="text-lg text-white/90 font-medium">Capture The Flag (CTF)</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-[#39ff14]/10 via-[#39ff14]/40 to-[#39ff14]/10"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[#39ff14] text-xs font-bold tracking-[0.2em] uppercase">Eligibility</span>
                <span className="text-sm text-white/80 leading-relaxed">Students and professionals<br/>across India</span>
              </div>
              <div className="flex flex-col gap-2 md:border-l border-[#39ff14]/20 md:pl-8">
                <span className="text-[#39ff14] text-xs font-bold tracking-[0.2em] uppercase">Prize Pool</span>
                <span className="text-4xl font-black text-white flex items-center gap-2">
                  <span className="text-[#39ff14] text-3xl">₹</span> 10,000
                </span>
              </div>
              <div className="flex flex-col gap-2 md:border-l border-[#39ff14]/20 md:pl-8">
                <span className="text-[#39ff14] text-xs font-bold tracking-[0.2em] uppercase">Registration</span>
                <span className="text-lg text-white/90 font-medium">Free</span>
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 right-10 w-32 h-[2px] bg-[#39ff14] shadow-[0_0_10px_rgba(57,255,20,0.8)]"></div>
          </div>
        </section>

        {/* Event Coordinators */}
        <section className="w-full flex flex-col items-center gap-8 mb-12">
          <h3 className="text-[#39ff14] font-bold uppercase tracking-[0.3em] text-lg text-center drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">
            Event Coordinators
          </h3>
          
          <div className="relative w-full border border-[#39ff14]/40 bg-[#051105]/70 backdrop-blur-md p-8 sm:p-12"
               style={{
                 clipPath: "polygon(0 25px, 25px 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%)"
               }}>
            
            {/* Top decorative elements */}
            <div className="absolute top-0 left-1/4 -translate-x-1/2 flex items-center gap-2 -mt-[7px]">
              <div className="w-3 h-3 rotate-45 bg-[#39ff14] shadow-[0_0_10px_rgba(57,255,20,0.8)]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#39ff14]/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#39ff14]/30"></div>
              <div className="w-8 h-[1px] bg-[#39ff14]/50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-4xl mx-auto">
              {/* Coordinator 1 */}
              <div className="flex items-center gap-6 justify-center md:justify-start">
                <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center border border-[#39ff14]/50 bg-[#39ff14]/5 shadow-[inset_0_0_15px_rgba(57,255,20,0.2)]"
                     style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#39ff14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-widest text-lg">VASANTH R</span>
                  <span className="text-[#39ff14] text-sm font-mono tracking-wider">CSSA</span>
                  <span className="text-white/60 text-sm font-mono tracking-wider mt-1">783438490</span>
                </div>
              </div>

              {/* Coordinator 2 */}
              <div className="flex items-center gap-6 justify-center md:justify-start md:border-l border-[#39ff14]/20 md:pl-12">
                <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center border border-[#39ff14]/50 bg-[#39ff14]/5 shadow-[inset_0_0_15px_rgba(57,255,20,0.2)]"
                     style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#39ff14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-widest text-lg">VASANTH R</span>
                  <span className="text-[#39ff14] text-sm font-mono tracking-wider">CSSA</span>
                  <span className="text-white/60 text-sm font-mono tracking-wider mt-1">783438490</span>
                </div>
              </div>
            </div>
            
            {/* Bottom decorative elements */}
            <div className="absolute bottom-0 right-1/4 translate-x-1/2 flex items-center gap-2 mb-[1px]">
              <div className="w-16 h-[1px] bg-[#39ff14]/50"></div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
