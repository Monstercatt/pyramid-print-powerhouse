import { motion } from "motion/react";
import heroImg from "@/assets/hero-signage.jpg";
import neonImg from "@/assets/proj-neon.jpg";
import tshirtImg from "@/assets/proj-tshirt.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 pb-12 px-6 md:px-10 overflow-hidden grain">
      {/* Top meta bar */}
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-muted-foreground border-b border-border pb-4">
        <span>Nagpur, India · EST. 2014</span>
        <span className="hidden md:inline">Large-format / Signage / Branding</span>
        <span>★ 700+ Clients</span>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-10 md:mt-16 items-end">
        <div className="col-span-12 lg:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mega"
          >
            WE PRINT<br/>
            BRANDS THAT<br/>
            <span className="inline-flex items-center gap-4 md:gap-6">
              GET <span className="stroke-text">NOTICED</span><span className="text-orange">.</span>
            </span>
          </motion.h1>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <img src={neonImg} alt="Neon signage" width={1200} height={1500} className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-paper uppercase">
              <span>· Neon · Vol 01</span>
              <span className="bg-magenta text-ink px-2 py-0.5">LIVE</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 grid grid-cols-12 gap-8">
        <p className="col-span-12 md:col-span-6 text-lg md:text-xl text-muted-foreground max-w-xl">
          Premium flex banners, signages, t-shirt printing, vinyl graphics &amp; branding solutions across Nagpur — produced at scale, delivered fast.
        </p>
        <div className="col-span-12 md:col-span-6 flex flex-wrap items-center gap-4 md:justify-end">
          <a href="#contact" className="group inline-flex items-center gap-3 bg-orange text-ink px-7 py-4 font-bold uppercase tracking-wider hover:bg-yellow transition-colors">
            Get Instant Quote
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#work" className="inline-flex items-center gap-3 border border-paper text-paper px-7 py-4 font-bold uppercase tracking-wider hover:bg-paper hover:text-ink transition-colors">
            View Our Work
          </a>
        </div>
      </div>

      {/* Big hero strip */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="mt-16 relative h-[55vh] min-h-[420px] overflow-hidden"
      >
        <img src={heroImg} alt="LED storefront signage" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
          <div className="font-mono text-xs uppercase tracking-widest text-paper/80">
            Project 014 — Retail Façade · Nagpur
          </div>
          <div className="hidden md:flex gap-2 items-end">
            <img src={tshirtImg} alt="Custom prints" width={120} height={120} className="w-24 h-24 object-cover" loading="lazy" />
            <div className="bg-yellow text-ink px-3 py-1 font-mono text-xs font-bold">+1,240 projects</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
