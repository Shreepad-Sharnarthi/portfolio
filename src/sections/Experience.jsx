import { experience } from "../data/experience";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on work in production."
          description="Professional roles focused on Python application development, reporting and data workflows."
          id="experience-title"
        />
        <Reveal><ExperienceTimeline entries={experience} /></Reveal>
      </div>
    </section>
  );
}
