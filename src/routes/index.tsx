import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Stats } from "@/components/site/Stats";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pyramid Graphics — Printing & Signage Studio in Nagpur" },
      { name: "description", content: "Premium flex banners, LED signages, acrylic letters, vehicle branding, t-shirt printing & corporate branding in Nagpur. 10+ years, 700+ clients." },
      { property: "og:title", content: "Pyramid Graphics — Printing & Signage Studio in Nagpur" },
      { property: "og:description", content: "Large-format printing, signage and branding produced at scale, delivered fast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Stats />
      <Clients />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
