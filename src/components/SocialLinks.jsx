import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Email", href: "mailto:" + profile.email, Icon: Mail },
];

export default function SocialLinks({ compact = false }) {
  return (
    <div className={compact ? "social-links social-links--compact" : "social-links"}>
      {links.map(({ label, href, Icon }) => (
        <a
          className="social-link"
          href={href}
          key={label}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={href.startsWith("mailto:") ? label : label + " (opens in a new tab)"}
        >
          <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
          {!compact && <span>{label}</span>}
          {!compact && <ArrowUpRight className="social-link__arrow" size={14} aria-hidden="true" />}
        </a>
      ))}
    </div>
  );
}
