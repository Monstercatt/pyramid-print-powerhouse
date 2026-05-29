export function Footer() {
  return (
    <footer className="px-6 md:px-10 pb-10 pt-20 border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <div className="font-display font-black text-3xl">PYRAMID<span className="text-orange">/</span>GRAPHICS</div>
          <p className="text-muted-foreground text-sm mt-2 max-w-sm">
            Large-format printing, signage &amp; branding production — Nagpur, India.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Studio</div>
            <p>+91 7058 776 655</p>
            <p>hello@pyramidgraphics.in</p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Social</div>
            <p>Instagram</p>
            <p>WhatsApp</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground font-mono uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Pyramid Graphics. All rights reserved.</span>
        <span>Designed for the streets of Nagpur.</span>
      </div>
    </footer>
  );
}
