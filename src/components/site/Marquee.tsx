export function Marquee() {
  const items = [
    "FLEX BANNERS", "LED SIGNAGES", "ACRYLIC LETTERS", "VINYL GRAPHICS",
    "T-SHIRT PRINTING", "VEHICLE BRANDING", "NEON SIGNS", "ROLL-UP STANDEES",
  ];
  const line = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-ink py-6">
      <div className="marquee flex gap-12 whitespace-nowrap text-paper">
        {line.map((t, i) => (
          <span key={i} className="text-display text-5xl md:text-7xl flex items-center gap-12">
            {t}
            <span className="text-orange">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
