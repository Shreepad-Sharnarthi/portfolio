import { GraduationCap, MapPin } from "lucide-react";
import { education } from "../data/education";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Education"
          title="A foundation in computer science."
          id="education-title"
        />
        <Reveal>
          <article className="education-card">
            <div className="education-icon"><GraduationCap size={23} strokeWidth={1.7} aria-hidden="true" /></div>
            <div className="education-card__main">
              <p className="education-period">{education.period}</p>
              <h3>{education.degree}</h3>
              <p className="education-institution">{education.institution}</p>
              <p className="education-location"><MapPin size={14} aria-hidden="true" /> {education.location}</p>
            </div>
            <div className="education-grade"><span>CGPA</span><strong>{education.cgpa}</strong></div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
