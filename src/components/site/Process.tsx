import { motion } from "motion/react";

const steps = [
  { n: "01", t: "Design", d: "Brief → concept → print-ready artwork. In-house creative team." },
  { n: "02", t: "Production", d: "Wide-format printing, fabrication, finishing — all on-site." },
  { n: "03", t: "Quality Check", d: "Color calibration, material inspection, dimension verification." },
  { n: "04", t: "Delivery & Install", d: "City-wide installation crew. Mounted, lit, photographed, done." },
];

export function Process() {
  return (
    <section id="process" className="px-6 md:px-10 py-24 md:py-32 bg-paper text-ink">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange mb-4">[ 05 — Process ]</div>
          <h2 className="text-display text-5xl md:text-8xl">
            From brief<br/>to <span className="italic">billboard.</span>
          </h2>
        </div>
        <p className="col-span-12 md:col-span-5 md:col-start-8 text-ink/70 text-lg self-end">
          A repeatable four-step pipeline, refined across 12,000+ projects.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-[88px] h-px bg-ink/15 hidden md:block" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="font-mono text-xs mb-4">{s.n} / 04</div>
              <div className="text-display text-7xl md:text-8xl text-orange mb-3">{s.n}</div>
              <div className="relative md:pr-6">
                <div className="hidden md:block w-3 h-3 bg-ink rounded-full -mt-1 mb-6" />
                <h3 className="text-display text-3xl mb-2">{s.t}</h3>
                <p className="text-ink/70">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
