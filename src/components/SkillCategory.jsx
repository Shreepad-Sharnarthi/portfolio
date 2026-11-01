import {
  Activity,
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  PanelsTopLeft,
  Server,
  Workflow,
} from "lucide-react";

const icons = {
  Activity,
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  PanelsTopLeft,
  Server,
  Workflow,
};

export default function SkillCategory({ category }) {
  const Icon = icons[category.icon] ?? Code2;
  return (
    <article className="skill-card">
      <div className="skill-card__heading">
        <span className="icon-tile"><Icon size={18} strokeWidth={1.8} aria-hidden="true" /></span>
        <h3>{category.name}</h3>
      </div>
      <div className="tag-list">
        {category.items.map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
    </article>
  );
}
