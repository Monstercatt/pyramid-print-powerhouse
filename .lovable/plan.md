# Plan: Hero refresh — printing-press imagery + vibrant white hero

## 1. Replace two images (same file paths, so no imports change)

Regenerate both as cinematic, brand-aligned shots of large-format printing in action:

- `src/assets/hero-signage.jpg` — wide hero shot of a large-format roll-to-roll printer mid-run: vivid CMYK ink heads laying down a vibrant graphic on glossy vinyl, shallow depth of field, studio lighting, premium production-house mood.
- `src/assets/proj-neon.jpg` — vertical (3:4) close-up of freshly printed large-format output emerging from the press, vibrant color bars and registration marks visible, crisp detail.

## 2. Hero section → vibrant white background

Scope: only `src/components/site/Hero.tsx`. Rest of the site stays dark.

Changes:
- Section background: pure white (`bg-paper`), ink-black text, muted text becomes neutral gray.
- Top meta bar border + text recolored for light surface.
- Headline: keep `mega` type. `stroke-text` switches to ink-stroke variant on white. Orange period and accent chips retained for punch.
- CTA buttons re-themed: primary = ink-on-orange (unchanged), secondary = ink outline (was paper outline).
- Add a new utility `.stroke-text-ink` in `src/styles.css` (ink stroke instead of paper stroke) — only addition to global styles.

## 3. Vibrant decorative SVG vectors (inline, no new deps)

Layered behind hero content with low z-index, `pointer-events-none`, `aria-hidden`. Vibrant + print-studio coded:

- Large orange circle, top-right, partially clipped.
- Yellow grid of dots (halftone feel), bottom-left.
- Cyan + magenta CMYK registration crosshairs scattered as small accents.
- Thin ink-black diagonal arrow sweeping across the lower third.
- Subtle magenta squiggle / wave near the headline.
- Keep the existing grain overlay but tone it for white (lower opacity dark dots).

All vectors animated subtly with `motion` (fade + slight float on mount) — reuses already-installed `motion` package.

## Technical notes

- Files touched: `src/components/site/Hero.tsx`, `src/styles.css` (add `.stroke-text-ink` + light-grain variant), and the two regenerated JPGs.
- No route, no data, no other components changed.
- Grain `::before` currently uses white dots w/ overlay blend — add a `.grain-light` variant using dark dots for the white hero.
- Images regenerated via imagegen at the same paths so existing imports keep working.

