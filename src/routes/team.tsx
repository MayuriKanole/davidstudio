import { createFileRoute } from "@tanstack/react-router";
import { TeamGrid } from "@/components/TeamGrid";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Team — David's Studio" },
    { name: "description", content: "Meet every developer, artist, designer, creator, and storyteller behind David's Studio." },
    { property: "og:title", content: "Team — David's Studio" },
    { property: "og:description", content: "Meet the people behind David's Studio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="page-shell section-dark team-page">
      <header className="page-intro">
        <p className="eyebrow">Our team · Ten creators</p>
        <h1>THE PEOPLE<br />BEHIND THE PLAY.</h1>
        <p>A small team of developers, artists, and designers who share a genuine love for building games. Every member brings something different to the table, and that is what makes our projects worth playing.</p>
      </header>
      <TeamGrid />
    </div>
  );
}