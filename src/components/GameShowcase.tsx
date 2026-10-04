import { ArrowUpRight, Play } from "lucide-react";
import { games } from "@/lib/studio-data";

export function GameShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <div className="game-stack">
      {games.map((game, index) => (
        <article className="game-panel" key={game.title}>
          <img
            src={game.image}
            alt={`${game.title} game artwork`}
            loading={index === 0 ? "eager" : "lazy"}
            className="game-panel-image"
          />
          <div className="game-panel-shade" />
          <div className="game-panel-content">
            <div className="game-kicker">
              <span>{game.status}</span><span>{game.genre}</span>
            </div>
            <h2>{game.title}</h2>
            {!compact && <p>{game.description}</p>}
            <div className="game-actions">
              <a className="studio-link studio-link-primary" href={game.primary.href} target="_blank" rel="noreferrer">
                {game.primary.label}<ArrowUpRight aria-hidden="true" />
              </a>
              {"secondary" in game && game.secondary ? (
                <a className="studio-link studio-link-ghost" href={game.secondary.href} target="_blank" rel="noreferrer">
                  <Play aria-hidden="true" />{game.secondary.label}
                </a>
              ) : null}
            </div>
          </div>
          <span className="game-index" aria-hidden="true">0{index + 1}</span>
        </article>
      ))}
    </div>
  );
}