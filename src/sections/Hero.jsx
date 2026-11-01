import { ArrowDownToLine, ArrowRight, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import SocialLinks from "../components/SocialLinks";
import Reveal from "../components/Reveal";

export default function Hero() {
  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero__copy">
        <Reveal>
          <div className="availability"><span /> {profile.availability}</div>
          <p className="hero-kicker">Hello, I’m <span>{profile.name}</span></p>
          <h1 id="hero-title">
            Building Reliable<br />
            Backend Systems<br />
            <span>with Python.</span>
          </h1>
          <p className="hero__subtitle">{profile.subtitle}</p>
          <div className="hero__location"><MapPin size={16} aria-hidden="true" /> {profile.location}</div>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Explore projects <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button--outline"
              href={profile.resume}
              download="Shreepad_Sharnarthi_Resume.pdf"
            >
              <ArrowDownToLine size={16} aria-hidden="true" /> Download résumé
            </a>
          </div>
          <a
            className="hero-view-resume"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            View résumé in browser <ArrowRight size={13} aria-hidden="true" />
          </a>
          <SocialLinks />
        </Reveal>
      </div>

      <Reveal className="hero__visual" delay={0.12}>
        <div className="portrait-frame">
          <div className="portrait-frame__glow" aria-hidden="true" />
          <img
            className="portrait"
            src={profile.photo}
            alt="Professional portrait of Shreepad Sharnarthi"
            width="1122"
            height="1402"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="code-card" role="group" aria-label="Illustrative Python backend code">
          <div className="code-card__bar"><span /><span /><span /><small>backend.py</small></div>
          <pre><code><span className="code-muted"># build with intent</span>{"\n"}<span className="code-keyword">class</span> <span className="code-name">ReliableAPI</span>:{"\n"}  <span className="code-keyword">def</span> <span className="code-func">respond</span>(self):{"\n"}    <span className="code-return">return</span> <span className="code-string">"clear, tested, useful"</span></code></pre>
          <span className="code-card__status"><span /> ready to ship</span>
        </div>
      </Reveal>
      <a className="hero-scroll" href="#about"><span /> Scroll to explore</a>
    </section>
  );
}
