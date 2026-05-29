import { motion } from "motion/react";
import acrylic from "@/assets/proj-acrylic.jpg";
import vehicle from "@/assets/proj-vehicle.jpg";
import tshirt from "@/assets/proj-tshirt.jpg";
import banner from "@/assets/proj-banner.jpg";
import neon from "@/assets/proj-neon.jpg";
import printer from "@/assets/proj-printer.jpg";

const items = [
  { img: acrylic, t: "Liau Corporate Facade", cat: "Retail Signages", span: "row-span-2", h: 1500, w: 1200 },
  { img: banner, t: "Hindustan Petroleum — Site Wrap", cat: "Event Branding", span: "", h: 1000, w: 1400 },
  { img: vehicle, t: "Fleet Wrap Campaign", cat: "Vehicle Graphics", span: "", h: 1000, w: 1400 },
  { img: printer, t: "Superior Drinks — Launch", cat: "Promotional Campaigns", span: "", h: 1000, w: 1400 },
  { img: tshirt, t: "Annual Merch Drop", cat: "Corporate Branding", span: "", h: 1200, w: 1200 },
  { img: neon, t: "Duratuff Storefront Neon", cat: "Restaurant Signages", span: "row-span-2", h: 1500, w: 1200 },
];

export function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32 bg-paper text-ink">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange mb-4">[ 02 — Selected Work ]</div>
          <h2 className="text-display text-5xl md:text-8xl">
            Built for the<br/>street &amp; the <span className="italic">stage.</span>
          </h2>
        </div>
        <a href="#contact" className="inline-flex w-fit items-center gap-3 bg-ink text-paper px-6 py-3 font-bold uppercase tracking-wider hover:bg-orange hover:text-ink transition-colors">
          Start a Project →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense gap-3 auto-rows-[280px]">
        {items.map((it, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`relative overflow-hidden group ${it.span}`}
          >
            <img
              src={it.img}
              alt={it.t}
              width={it.w}
              height={it.h}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/90 to-transparent text-paper opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="font-mono text-[10px] uppercase tracking-widest text-orange">{it.cat}</div>
              <div className="font-display font-bold text-xl">{it.t}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
