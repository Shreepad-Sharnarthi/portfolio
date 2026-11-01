import { skillCategories } from "../data/skills";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SkillCategory from "../components/SkillCategory";

export default function Skills() {
  return (
    <section className="section section--muted" id="skills" aria-labelledby="skills-title">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="The tools behind the work."
          description="A practical toolkit across backend development, data, infrastructure and observability."
          id="skills-title"
        />
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Reveal key={category.name} delay={(index % 4) * 0.06}>
              <SkillCategory category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
