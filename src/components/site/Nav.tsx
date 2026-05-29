export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="flex items-center gap-2 font-display text-paper">
          <span className="inline-block w-7 h-7 bg-orange" style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }} />
          <span className="font-black tracking-tight text-lg">PYRAMID<span className="text-orange">/</span>GRAPHICS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-paper">
          <a href="#services" className="hover:text-orange transition-colors">Services</a>
          <a href="#work" className="hover:text-orange transition-colors">Work</a>
          <a href="#process" className="hover:text-orange transition-colors">Process</a>
          <a href="#contact" className="hover:text-orange transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-orange text-ink px-5 py-2.5 font-bold text-sm uppercase tracking-wider hover:bg-yellow transition-colors">
          Get Quote →
        </a>
      </div>
    </header>
  );
}
