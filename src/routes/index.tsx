import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GameShowcase } from "@/components/GameShowcase";
import { HERO_VIDEO, aboutParagraphs, games, team } from "@/lib/studio-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "David's Studio — Independent Game Development Studio" },
    { name: "description", content: "David's Studio creates original, memorable games through thoughtful development, art, and technology." },
    { property: "og:title", content: "David's Studio — Independent Game Development Studio" },
    { property: "og:description", content: "Original games, distinctive worlds, and memorable player experiences." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="home-hero">
        <video autoPlay muted loop playsInline preload="auto" poster={games[1].image} className="hero-video" aria-label="David's Studio game reel">
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Independent Game Studio</p>
          <h1>DAVID'S<br />STUDIO</h1>
          <p className="hero-tagline">Turning Imaginations into Reality</p>
          <a href="#featured" className="hero-cta">Explore our worlds <ArrowDown aria-hidden="true" /></a>
        </div>
        <div className="hero-side-note"><span>EST.</span><span>INDIA</span></div>
      </section>

      <section className="statement-band">
        <p>We build original games where <strong>art, technology,</strong> and <strong>play</strong> move as one.</p>
      </section>

      <section id="featured" className="home-games section-dark">
        <div className="section-heading-row">
          <div><p className="eyebrow">Selected projects</p><h2>WORLDS WE'VE BUILT</h2></div>
          <a href="/games">View all games <ArrowRight /></a>
        </div>
        <GameShowcase compact />
      </section>

      <section className="home-about section-light">
        <p className="eyebrow">Who we are</p>
        <div className="editorial-split">
          <h2>CRAFTING GAMES<br />PLAYERS REMEMBER.</h2>
          <div><p>{aboutParagraphs[0]}</p><a href="/about">Discover our studio <ArrowRight /></a></div>
        </div>
      </section>

      <section className="team-tease section-dark">
        <div className="section-heading-row">
          <div><p className="eyebrow">Our team</p><h2>THE PEOPLE<br />BEHIND THE PLAY.</h2></div>
          <p>{team.length} creators. One shared commitment to making games worth remembering.</p>
        </div>
        <div className="team-strip">
          {team.filter((member) => "image" in member).slice(0, 5).map((member) => (
            <img key={member.name} src={member.image} alt={member.name} loading="lazy" />
          ))}
        </div>
        <a className="studio-link studio-link-primary" href="/team">Meet the full team <ArrowRight /></a>
      </section>

      <section className="home-contact">
        <p className="eyebrow">Start a conversation</p>
        <h2>LET'S BUILD<br />SOMETHING.</h2>
        <a href="mailto:davidsstudio225@gmail.com">davidsstudio225@gmail.com <ArrowRight /></a>
      </section>
    </>
  );
}
