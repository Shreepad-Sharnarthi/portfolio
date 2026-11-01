import { ArrowRight, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";

export default function Contact() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="page-shell">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-panel__copy">
              <SectionHeading
                eyebrow="Get in touch"
                title="Let’s build something dependable."
                description="If you’re hiring for a Python, Django or backend role, I’d be glad to hear from you."
                id="contact-title"
              />
              <a className="button button--primary contact-email" href={"mailto:" + profile.email}>
                <Mail size={17} aria-hidden="true" /> {profile.email} <ArrowRight size={16} aria-hidden="true" />
              </a>
              <div className="contact-location"><MapPin size={15} aria-hidden="true" /> {profile.location}</div>
            </div>
            <div className="contact-panel__aside">
              <p>Find me online</p>
              <SocialLinks />
              <span className="contact-aside-note">I usually respond by email or LinkedIn.</span>
            </div>
            <span className="contact-decoration" aria-hidden="true">S.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
