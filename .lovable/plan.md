## What's actually wrong

I loaded the site in the mobile preview (411px) and the **page renders, but the hero looks empty** — meta bar at top, then a huge blank area, then "Premium flex banners…" appears far down. Diagnostics:

- The H1 text ("WE PRINT / BRANDS THAT / GET NOTICED.") IS in the DOM (extraction confirms it) but is not visually rendered. Almost certainly the `motion.h1` is stuck at `initial={{ opacity: 0, y: 40 }}` because Motion v12 + React 19 SSR is serializing the initial style and the client-side `animate` prop isn't kicking in reliably on first paint. Same pattern affects the side image card and the big bottom hero strip.
- The hero's side image (`neonImg`) is `col-span-12 lg:col-span-4` with `aspect-[3/4]` — on a 411px phone that's a ~548px tall block stacked under the headline, which makes the empty area look enormous.
- The bottom hero strip is `h-[55vh] min-h-[420px]` and also wrapped in a `motion.div` with `initial={{ opacity: 0 }}` — same hang risk.
- No JS errors in the console. Only Lovable postMessage warnings (unrelated).

## Fix

1. **Make Motion-animated elements visible by default on first paint.**
   - In `src/components/site/Hero.tsx`, change every `motion.*` that uses `initial={{ opacity: 0, ... }} animate={{ opacity: 1, ... }}` to either:
     - drop the `initial` (let it render normally) and use `whileInView` for entry animation, OR
     - add `initial={false}` so SSR doesn't ship `opacity:0` and freeze.
   - Apply the same audit to `HeroVectors` SVGs so vectors don't stay invisible if Motion hasn't mounted yet.

2. **Rebalance the hero for mobile.**
   - Shrink the side image card on mobile: on `<lg` use `aspect-[16/10]` (short, wide) instead of `aspect-[3/4]`, or hide it on small screens and show only on `md+`.
   - Reduce the bottom strip to `h-[40vh] min-h-[280px]` on mobile, full size from `md` up.
   - Tighten vertical padding (`pt-24 pb-12` → `pt-20 pb-8` on mobile).

3. **Sanity-check the other sections.**
   - Quickly verify `Work`, `Stats`, `Process`, `Testimonials`, `Contact` `motion` wrappers using `whileInView` settle to opacity 1 (they do, but I'll spot-check while the file is open).

4. **Re-verify in the browser** at 411×800 after the edits: take a screenshot to confirm the headline, side image, CTAs and the bottom press image all render on first load.

## Files touched

- `src/components/site/Hero.tsx` (motion props + mobile sizing)
- No new dependencies. No content / copy changes. No changes to other components unless step 3 finds a stuck motion wrapper.
