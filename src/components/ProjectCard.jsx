import { ChevronDown, Code2, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={"project-card project-card--" + (project.category === "Professional" ? "work" : "personal")}>
      <div className="project-card__topline">
        <span className="project-index">{number}</span>
        <span className="project-type">{project.category}</span>
        {project.repoUrl ? (
          <a className="project-external" href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={"Open " + project.title + " repository in a new tab"}>
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        ) : <span className="project-accent-mark" aria-hidden="true"><Code2 size={16} /></span>}
      </div>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <div className="tag-list project-tags" aria-label="Technologies">
        {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
      <details className="project-details">
        <summary>
          <span>Project details</span>
          <ChevronDown size={16} aria-hidden="true" />
        </summary>
        <div className="project-details__body">
          <div>
            <h4>Context</h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4>Approach</h4>
            <p>{project.solution}</p>
          </div>
          <div>
            <h4>Contribution</h4>
            <p>{project.contribution}</p>
          </div>
        </div>
      </details>
    </article>
  );
}
