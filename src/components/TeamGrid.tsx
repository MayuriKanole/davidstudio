import { ExternalLink, UserRound } from "lucide-react";
import { team } from "@/lib/studio-data";

export function TeamGrid() {
  return (
    <div className="team-grid">
      {team.map((member) => (
        <article className="team-card" key={member.name}>
          <div className="team-portrait">
            {"image" in member && member.image ? (
              <img src={member.image} alt={`${member.name}, ${member.role} at David's Studio`} loading="lazy" />
            ) : (
              <div className="team-portrait-empty" aria-label={`${member.name} has no portrait on the original website`}>
                <UserRound aria-hidden="true" />
              </div>
            )}
          </div>
          <div className="team-copy">
            <p className="team-role">{member.role}</p>
            <h2>{member.name}</h2>
            <p>{member.description}</p>
            {"portfolio" in member && member.portfolio ? (
              <a href={member.portfolio} target="_blank" rel="noreferrer">
                Portfolio <ExternalLink aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}