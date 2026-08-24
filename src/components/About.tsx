export default function About() {
  return (
    <section id="about" className="relative z-10 flex flex-col items-center w-full px-4 py-16">
      <div className="w-full max-w-6xl rounded-3xl border border-[#1b3d18] bg-[#030904]/80 p-8 sm:p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(27,61,24,0.3)]">
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
  );
}
