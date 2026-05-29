import { motion } from "motion/react";
import heroImg from "@/assets/hero-signage.jpg";
import neonImg from "@/assets/proj-neon.jpg";
import tshirtImg from "@/assets/proj-tshirt.jpg";

function HeroVectors() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large orange circle top-right */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-32 -right-32 w-[520px] h-[520px]"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" fill="var(--orange)" opacity="0.95" />
      </motion.svg>

      {/* Yellow halftone dot grid bottom-left */}
      <motion.svg
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-24 left-6 w-56 h-56"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern id="halftone" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2.2" fill="var(--yellow)" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#halftone)" />
      </motion.svg>

      {/* CMYK registration crosshair — top-left */}
      <motion.svg
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="absolute top-40 left-[42%] w-16 h-16"
        viewBox="0 0 40 40"
      >
        <circle cx="20" cy="20" r="14" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
        <line x1="0" y1="20" x2="40" y2="20" stroke="var(--ink)" strokeWidth="1" />
        <line x1="20" y1="0" x2="20" y2="40" stroke="var(--ink)" strokeWidth="1" />
      </motion.svg>

      {/* Magenta crosshair — mid-right */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute top-[58%] right-[6%] w-10 h-10 hidden md:block"
        viewBox="0 0 40 40"
      >
        <circle cx="20" cy="20" r="14" fill="none" stroke="var(--magenta)" strokeWidth="1.5" />
        <line x1="6" y1="20" x2="34" y2="20" stroke="var(--magenta)" strokeWidth="1" />
        <line x1="20" y1="6" x2="20" y2="34" stroke="var(--magenta)" strokeWidth="1" />
      </motion.svg>

      {/* Diagonal arrow sweep */}
      <motion.svg
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="absolute bottom-[28%] left-[20%] w-[40%] h-24 hidden lg:block"
        viewBox="0 0 400 80"
        fill="none"
      >
        <motion.path
          d="M 0 60 Q 100 10 200 40 T 380 20"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M 370 12 L 388 18 L 374 30" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.svg>

      {/* Magenta wave squiggle near headline */}
      <motion.svg
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-[18%] left-[2%] w-32 h-8 hidden md:block"
        viewBox="0 0 120 20"
        fill="none"
      >
        <path d="M 0 10 Q 15 0 30 10 T 60 10 T 90 10 T 120 10" stroke="var(--magenta)" strokeWidth="2.5" strokeLinecap="round" />
      </motion.svg>

      {/* Cyan plus marks scattered */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-[8%] right-[40%] w-6 h-6"
        viewBox="0 0 20 20"
      >
        <line x1="10" y1="2" x2="10" y2="18" stroke="var(--cyan)" strokeWidth="2" />
        <line x1="2" y1="10" x2="18" y2="10" stroke="var(--cyan)" strokeWidth="2" />
      </motion.svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 pb-12 px-6 md:px-10 overflow-hidden grain-light bg-paper text-ink"
    >
      <HeroVectors />

      <div className="relative z-10">
        {/* Top meta bar */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-ink/60 border-b border-ink/15 pb-4">
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
              WE PRINT<br />
              BRANDS THAT<br />
              <span className="inline-flex items-center gap-4 md:gap-6">
                GET <span className="stroke-text-ink">NOTICED</span>
                <span className="text-orange">.</span>
              </span>
            </motion.h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[3/4] overflow-hidden ring-1 ring-ink/10"
            >
              <img src={neonImg} alt="Large-format print emerging from press" width={1200} height={1500} className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-paper uppercase">
                <span>· Press · Vol 01</span>
                <span className="bg-magenta text-paper px-2 py-0.5">LIVE</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-8">
          <p className="col-span-12 md:col-span-6 text-lg md:text-xl text-ink/70 max-w-xl">
            Premium flex banners, signages, t-shirt printing, vinyl graphics &amp; branding solutions across Nagpur — produced at scale, delivered fast.
          </p>
          <div className="col-span-12 md:col-span-6 flex flex-wrap items-center gap-4 md:justify-end">
            <a href="#contact" className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 font-bold uppercase tracking-wider hover:bg-orange hover:text-ink transition-colors">
              Get Instant Quote
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#work" className="inline-flex items-center gap-3 border border-ink text-ink px-7 py-4 font-bold uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors">
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
          <img src={heroImg} alt="Large-format printer in action" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
            <div className="font-mono text-xs uppercase tracking-widest text-paper/90">
              Production Floor — Large-Format Press · Nagpur
            </div>
            <div className="hidden md:flex gap-2 items-end">
              <img src={tshirtImg} alt="Custom prints" width={120} height={120} className="w-24 h-24 object-cover" loading="lazy" />
              <div className="bg-yellow text-ink px-3 py-1 font-mono text-xs font-bold">+1,240 projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
