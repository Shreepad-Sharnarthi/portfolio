import { Award } from "lucide-react";
import { certifications } from "../data/certifications";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Certifications() {
  return (
    <section className="section section--muted" id="certifications" aria-labelledby="certifications-title">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Learning across the stack."
          description="Completed certifications and learning programs listed in my résumé."
          id="certifications-title"
        />
        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <Reveal key={certificate.name} delay={(index % 3) * 0.06}>
              <article className="certificate-card">
                <span className="certificate-icon"><Award size={19} strokeWidth={1.7} aria-hidden="true" /></span>
                <div><h3>{certificate.name}</h3><p>{certificate.issuer}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
