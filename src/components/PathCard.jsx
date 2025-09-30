import { Link } from "react-router-dom";

export default function PathCard({
  to,
  title,
  eyebrow,
  description,
  cta = "Enter",
  onClick,
}) {
  const content = (
    <div className="path-card card" onClick={onClick}>
      {eyebrow && (
        <div className="eyebrow mono" style={{ opacity: 0.8 }}>
          {eyebrow}
        </div>
      )}
      <h3 style={{ margin: "6px 0 8px" }}>{title}</h3>
      {description && <p style={{ margin: 0 }}>{description}</p>}
      <div className="path-card-cta mono" aria-hidden>
        {cta} →
      </div>
    </div>
  );
  return to ? <Link to={to}>{content}</Link> : content;
}
