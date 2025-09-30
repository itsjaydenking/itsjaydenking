import { NavLink } from "react-router-dom";
import Scene from "./Scene.jsx";
import { useXP } from "../hooks/useXP.js";

// PathLayout: shared wrapper for Engineer / Storyteller / Fusion path pages.
// Props: variant ('engineer'|'storyteller'|'fusion'), title, eyebrow, links: [{to,label}], children
export default function PathLayout({
  variant,
  title,
  eyebrow,
  links = [],
  children,
}) {
  const { xp, level } = useXP();
  const progress = Math.min(100, ((level - 1) / 9) * 100); // level 1..10

  return (
    <Scene variant={variant}>
      <div className="container">
        <div
          className={`${
            variant === "storyteller"
              ? "narrative"
              : variant === "engineer"
              ? "tech"
              : ""
          }`}
        >
          <div className="path-header">
            {eyebrow && <div className="eyebrow mono">{eyebrow}</div>}
            {title && <h1 className="path-title">{title}</h1>}
          </div>
          {links.length > 0 && (
            <nav className="subnav" aria-label={`${title} navigation`}>
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `pill${isActive ? " active" : ""}`
                  }
                  end
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          )}
          <div className="xp-bar" aria-label="Path progress">
            <div className="xp-fill" style={{ width: `${progress}%` }} />
            <div className="xp-meta mono">
              Level {level} • {xp} XP
            </div>
          </div>
          <div className="sep" />
          {children}
        </div>
      </div>
    </Scene>
  );
}
