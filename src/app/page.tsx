import Hero from "@/components/Hero";
import About from "@/components/About";
import EventInfo from "@/components/EventInfo";

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

      <Hero />
      <About />
      <EventInfo />
    </div>
  );
}
