import { BookOpenCheck, BrainCircuit, Eye, Scale } from "lucide-react";
import { research } from "../data/education";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const researchIcons = [BrainCircuit, Eye, Scale];

export default function Research() {
  return (
    <section className="section section--muted" id="research" aria-labelledby="research-title">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Research"
          title="Fairness and explainability in medical AI."
          description="Academic research in computer vision, deep learning and responsible machine learning."
          id="research-title"
        />
        <Reveal>
          <article className="research-card">
            <div className="research-card__symbol"><BookOpenCheck size={24} strokeWidth={1.6} aria-hidden="true" /></div>
            <div className="research-card__content">
              <div className="research-meta"><span>{research.role}</span><span className="research-status">{research.status}</span></div>
              <h3>{research.title}</h3>
              <p className="research-venue">{research.venue}</p>
              <div className="research-areas">
                {research.areas.map((area, index) => {
                  const Icon = researchIcons[index] ?? BrainCircuit;
                  return <span key={area}><Icon size={14} aria-hidden="true" />{area}</span>;
                })}
              </div>
              <p className="research-note">Paper accepted at IEEE ICEFEET 2026. Publication details are not listed in the résumé.</p>
            </div>
            <span className="research-card__index" aria-hidden="true">R / 01</span>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
