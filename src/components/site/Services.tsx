import { motion } from "motion/react";

const services = [
  { n: "01", t: "Flex Banner Printing", d: "Wide-format outdoor banners up to 16ft.", c: "orange" },
  { n: "02", t: "LED Signages", d: "Backlit and front-lit illuminated displays.", c: "cyan" },
  { n: "03", t: "ACP & Acrylic Letters", d: "3D façade lettering with brushed finish.", c: "yellow" },
  { n: "04", t: "Neon Sign Boards", d: "Hand-bent custom neon for retail and bars.", c: "magenta" },
  { n: "05", t: "Vinyl Sticker Printing", d: "Die-cut decals, glass frosting, wall graphics.", c: "orange" },
  { n: "06", t: "Sunboard Printing", d: "Rigid indoor signage on PVC sunboards.", c: "cyan" },
  { n: "07", t: "T-Shirt Printing", d: "DTF, sublimation & screen printing at scale.", c: "yellow" },
  { n: "08", t: "Visiting Cards & Bill Books", d: "Offset and digital, premium stocks.", c: "magenta" },
  { n: "09", t: "Corporate Branding", d: "End-to-end identity rollouts.", c: "orange" },
  { n: "10", t: "Roll-Up Standees", d: "Event-ready collapsible displays.", c: "cyan" },
  { n: "11", t: "Photo Frames & Nameplates", d: "Custom finishes for home and office.", c: "yellow" },
  { n: "12", t: "Vehicle Graphics", d: "Full and partial fleet wraps.", c: "magenta" },
];

const accent = (c: string) =>
  c === "orange" ? "group-hover:bg-orange"
  : c === "cyan" ? "group-hover:bg-cyan"
  : c === "yellow" ? "group-hover:bg-yellow"
  : "group-hover:bg-magenta";

export function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange mb-4">[ 01 — Services ]</div>
          <h2 className="text-display text-5xl md:text-8xl">
            Everything we<br/>print, build &amp; <span className="text-orange">install.</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          From a single business card to a 40-foot façade — one production house, one quality bar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
        {services.map((s, i) => (
          <motion.a
            href="#contact"
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            className="group relative border-r border-b border-border p-8 md:p-10 min-h-[260px] flex flex-col justify-between transition-colors hover:text-ink overflow-hidden"
          >
            <div className={`absolute inset-0 -translate-y-full ${accent(s.c)} transition-transform duration-500 group-hover:translate-y-0`} />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-xs text-muted-foreground group-hover:text-ink">{s.n}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-2xl">↗</span>
            </div>
            <div className="relative">
              <h3 className="text-display text-3xl md:text-4xl mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-ink/80">{s.d}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
