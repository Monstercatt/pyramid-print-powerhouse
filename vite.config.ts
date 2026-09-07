import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Static-only build: every page is prerendered to HTML at build time,
    // so the output can be hosted on any static host (Netlify) with no server.
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
