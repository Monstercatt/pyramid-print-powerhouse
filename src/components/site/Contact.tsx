import { useState, type FormEvent } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32 relative overflow-hidden">
      <h2 className="text-display text-6xl md:text-[12rem] leading-[0.85]">
        LET'S PRINT<br/>
        SOMETHING<br/>
        <span className="text-orange">IMPOSSIBLE.</span>
      </h2>

      <div className="mt-20 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5 space-y-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Call us</div>
            <a href="tel:+917058776655" className="text-display text-4xl md:text-5xl block hover:text-orange transition-colors">
              +91 7058 776 655
            </a>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">WhatsApp</div>
            <a
              href="https://wa.me/917058776655"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-yellow text-ink px-6 py-3 font-bold uppercase tracking-wider hover:bg-orange transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Studio</div>
            <p className="text-lg">Pyramid Graphics<br/>Nagpur, Maharashtra · India</p>
          </div>
          <div className="aspect-[4/3] border border-border overflow-hidden">
            <iframe
              title="Pyramid Graphics Nagpur"
              src="https://www.google.com/maps?q=Nagpur,India&output=embed"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={submit} className="col-span-12 md:col-span-7 md:pl-10 space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-orange">[ Instant Quote ]</div>
          {sent ? (
            <div className="border border-orange p-10 text-center">
              <div className="text-display text-4xl mb-2 text-orange">Got it.</div>
              <p className="text-muted-foreground">We'll respond within an hour — usually faster.</p>
            </div>
          ) : (
            <>
              <Field label="Your name" name="name" />
              <Field label="Phone / Email" name="contact" />
              <Field label="Project type" name="type" placeholder="e.g. Storefront signage, T-shirt batch, Vehicle wrap" />
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest mb-2">Tell us about it</label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-orange outline-none py-3 text-lg resize-none transition-colors"
                />
              </div>
              <button type="submit" className="group inline-flex items-center gap-3 bg-orange text-ink px-8 py-4 font-bold uppercase tracking-wider hover:bg-yellow transition-colors">
                Send Brief
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-xs uppercase tracking-widest mb-2">{label}</label>
      <input
        id={name}
        name={name}
        required
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-orange outline-none py-3 text-lg transition-colors placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
