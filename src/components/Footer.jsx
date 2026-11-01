import { ArrowUpRight, ArrowUp, ArrowDownToLine } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="footer-name" href="#home">{profile.name}</a>
        <p>{profile.title} <span aria-hidden="true">·</span> Pune, India</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href={"mailto:" + profile.email}>Email <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href={profile.resume} download="Shreepad_Sharnarthi_Resume.pdf">Résumé <ArrowDownToLine size={13} aria-hidden="true" /></a>
        </div>
        <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>
        <span className="footer-copyright">© {new Date().getFullYear()} Shreepad Sharnarthi</span>
      </div>
    </footer>
  );
}
