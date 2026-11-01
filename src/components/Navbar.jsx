import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Shreepad, home">
          <span className="wordmark__mark" aria-hidden="true">S</span>
          <span>SHREEPAD<span className="wordmark__period">.</span></span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-links"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>

        <div className={"navbar__links" + (open ? " navbar__links--open" : "")} id="primary-links">
          {links.map(([label, id]) => (
            <a
              className={active === id ? "navbar__link navbar__link--active" : "navbar__link"}
              aria-current={active === id ? "location" : undefined}
              href={"#" + id}
              key={id}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            className="button button--small button--outline navbar__resume"
            href={profile.resume}
            download="Shreepad_Sharnarthi_Resume.pdf"
          >
            <ArrowDownToLine size={15} aria-hidden="true" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
