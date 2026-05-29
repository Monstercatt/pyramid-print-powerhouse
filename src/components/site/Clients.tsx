const clients = ["Hindustan Petroleum", "HPCL", "Superior Drinks", "Duratuff", "Tata Motors", "ICICI", "Reliance", "Bisleri"];

export function Clients() {
  return (
    <section className="px-6 md:px-10 py-20">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
        [ Trusted by India's biggest brands ]
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {clients.map((c) => (
          <div key={c} className="bg-background p-8 flex items-center justify-center text-center">
            <span className="font-display font-bold text-xl md:text-2xl text-paper/60 hover:text-paper transition-colors">{c}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
