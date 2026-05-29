const tt = [
  { q: "They turned a 40-foot façade around in 5 days. Install was flawless.", n: "Rohan Mehta", r: "Brand Manager, Superior Drinks", c: "orange" },
  { q: "From visiting cards to a full retail rollout — one team, zero drama.", n: "Aanya Kapoor", r: "Marketing Lead, HPCL Nagpur", c: "cyan" },
  { q: "The neon work is gallery-grade. Customers literally photograph the storefront.", n: "Vikas Sharma", r: "Owner, Duratuff", c: "yellow" },
];

export function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange mb-4">[ 04 — Words From Clients ]</div>
      <h2 className="text-display text-5xl md:text-7xl mb-16 max-w-4xl">
        "Loud work. <span className="text-orange">Quiet</span> process."
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {tt.map((t, i) => (
          <article key={i} className="bg-card border border-border p-8 flex flex-col gap-10 min-h-[360px]">
            <div
              className="text-6xl font-display leading-none"
              style={{ color: `var(--color-${t.c})` }}
            >“</div>
            <p className="text-xl md:text-2xl font-display font-medium">{t.q}</p>
            <div className="mt-auto pt-6 border-t border-border">
              <div className="font-bold">{t.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.r}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
