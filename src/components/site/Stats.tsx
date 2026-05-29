import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) animate(mv, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
  }, [inView, mv, to]);

  useEffect(() => rounded.on("change", (v) => { if (ref.current) ref.current.textContent = v; }), [rounded]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { n: 10, s: "+", l: "Years of craft" },
  { n: 700, s: "+", l: "Happy clients" },
  { n: 12000, s: "+", l: "Projects delivered" },
  { n: 48, s: "h", l: "Avg. turnaround" },
];

export function Stats() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-y border-border">
      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange mb-4">[ 03 — Why Pyramid ]</div>
          <h2 className="text-display text-5xl md:text-7xl">
            Premium materials.<br/>Industrial speed.
          </h2>
        </div>
        <p className="col-span-12 md:col-span-5 md:col-start-8 text-muted-foreground text-lg self-end">
          End-to-end design and production under one roof — so nothing gets lost in translation between idea and install.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background p-6 md:p-10"
          >
            <div className="text-display text-5xl md:text-7xl text-orange">
              <Counter to={s.n} suffix={s.s} />
            </div>
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
