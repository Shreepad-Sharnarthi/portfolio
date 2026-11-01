import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function ProjectGroup({ title, description, items, startIndex = 0 }) {
  return (
    <div className="project-group">
      <div className="project-group__heading">
        <div><h3>{title}</h3><p>{description}</p></div>
        <span>{String(items.length).padStart(2, "0")} projects</span>
      </div>
      <div className="projects-grid">
        {items.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.06}>
            <ProjectCard project={project} index={startIndex + index} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const professional = projects.filter((project) => project.category === "Professional");
  const personal = projects.filter((project) => project.category !== "Professional");

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Selected projects"
          title="A closer look at the work."
          description="Professional contributions are separated from personal and academic builds. Expand a project for context and contribution details."
          id="projects-title"
        />
        <ProjectGroup
          title="Professional work"
          description="Production application contributions"
          items={professional}
        />
        <ProjectGroup
          title="Personal & academic"
          description="Independent builds and applied learning"
          items={personal}
          startIndex={professional.length}
        />
      </div>
    </section>
  );
}
