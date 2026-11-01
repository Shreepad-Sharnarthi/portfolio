import { Activity, Boxes, Layers3 } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const approach = [
  {
    icon: Layers3,
    title: "Production applications",
    text: "Django features, workflow fixes and reporting improvements grounded in real application needs.",
  },
  {
    icon: Boxes,
    title: "APIs & data systems",
    text: "REST services, ORM-backed data models, relational databases and asynchronous processing.",
  },
  {
    icon: Activity,
    title: "Reliability & visibility",
    text: "Authenticated metrics, alerting and regression checks that help make changes observable.",
  },
];

export default function About() {
  return (
    <section className="section section--about" id="about" aria-labelledby="about-title">
      <div className="page-shell">
        <SectionHeading
          eyebrow="A bit about me"
          title="Backend engineering, close to the real work."
          description="I work across application logic, data and operations to make backend features dependable in production."
          id="about-title"
        />
        <div className="about-layout">
          <Reveal className="about-copy">
            <p>{profile.about}</p>
            <p>
              I enjoy untangling problems at the boundary between a request, the data behind it and the system that needs to keep running. I bring a practical, test-focused approach to each change.
            </p>
            <div className="about-note">
              <span className="about-note__line" />
              <p>Currently growing as a Python backend engineer at <strong>Markytics.AI</strong>.</p>
            </div>
          </Reveal>
          <div className="approach-grid">
            {approach.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="approach-card">
                  <span className="icon-tile"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
