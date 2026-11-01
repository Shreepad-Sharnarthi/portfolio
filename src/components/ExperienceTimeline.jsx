import { ArrowUpRight, MapPin } from "lucide-react";

export default function ExperienceTimeline({ entries }) {
  return (
    <div className="timeline">
      {entries.map((entry) => (
        <article className="timeline-item" key={entry.company + "-" + entry.role}>
          <div className="timeline-item__rail" aria-hidden="true">
            <span className={entry.current ? "timeline-dot timeline-dot--current" : "timeline-dot"} />
            <span className="timeline-line" />
          </div>
          <div className="timeline-card">
            <div className="timeline-card__top">
              <div>
                <p className="timeline-period">
                  {entry.current && <span className="current-indicator"><span /> Current</span>}
                  {entry.period}
                </p>
                <h3>{entry.role}</h3>
                <p className="timeline-company">{entry.company}</p>
              </div>
              <span className="timeline-open" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </div>
            <p className="timeline-location"><MapPin size={14} aria-hidden="true" /> {entry.location}</p>
            <p className="timeline-intro">{entry.intro}</p>
            <ul className="contribution-list">
              {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="tag-list tag-list--compact" aria-label="Technologies">
              {entry.technologies.map((technology) => (
                <span className="tag" key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
