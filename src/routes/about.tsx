import { createFileRoute } from "@tanstack/react-router";
import { aboutParagraphs, pillars } from "@/lib/studio-data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — David's Studio" },
    { name: "description", content: "Meet David's Studio, an independent game development studio creating original games with care." },
    { property: "og:title", content: "About — David's Studio" },
    { property: "og:description", content: "Creativity, game development, art, technology, and original IP." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="page-shell about-page">
      <header className="page-intro about-intro">
        <p className="eyebrow">Independent by nature</p>
        <h1>CRAFTING GAMES<br />THAT PLAYERS<br />REMEMBER.</h1>
      </header>
      <section className="about-copy">
        <div className="about-index">01 — Who we are</div>
        <div>{aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="pillars">
        {pillars.map((pillar, index) => (
          <article key={pillar.title}>
            <span>0{index + 1}</span>
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>
      <section className="manifesto">
        <span>Independent Game Studio</span><span>Creativity</span><span>Game Development</span>
        <span>Art</span><span>Technology</span><span>Original IP</span>
      </section>
    </div>
  );
}