import { createFileRoute } from "@tanstack/react-router";
import { GameShowcase } from "@/components/GameShowcase";

export const Route = createFileRoute("/games")({
  head: () => ({ meta: [
    { title: "Games — David's Studio" },
    { name: "description", content: "Explore every released game from David's Studio, including Endless Lights, Bright Souls, Lost in Voids, and The Arrow Game." },
    { property: "og:title", content: "Games — David's Studio" },
    { property: "og:description", content: "Explore original games built by David's Studio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: GamesPage,
});

function GamesPage() {
  return (
    <div className="page-shell section-dark">
      <header className="page-intro">
        <p className="eyebrow">Our games · All releases</p>
        <h1>PLAY THE<br />UNEXPECTED.</h1>
        <p>A selection of titles we have built with care — from fast-paced puzzle action to atmospheric exploration.</p>
      </header>
      <GameShowcase />
    </div>
  );
}