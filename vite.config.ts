import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// On Netlify we build a pure static site: no nitro/serverless output, every page
// prerendered to HTML at build time and published from dist/client.
const isNetlify = !!process.env.NETLIFY;

export default defineConfig({
  ...(isNetlify ? { nitro: false as const } : {}),
  tanstackStart: {
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
