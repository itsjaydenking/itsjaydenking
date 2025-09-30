import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ChoiceCard({
  title,
  subtitle,
  to,
  variant = "default",
}) {
  const palette = {
    default: { bg: "var(--violet)", accent: "var(--gold)" },
    engineer: { bg: "#1a1a24", accent: "#7dd3fc" },
    storyteller: { bg: "#2a1b2f", accent: "var(--gold)" },
    fusion: { bg: "#1e1b2a", accent: "var(--crimson)" },
  }[variant];

  return (
    <motion.article
      className="card"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--violet) 22%, transparent), transparent)",
        borderColor: palette.accent,
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <h2
        className="split-header"
        style={{ borderLeft: `3px solid ${palette.accent}`, paddingLeft: 10 }}
      >
        {title}
      </h2>
      {subtitle && <p style={{ opacity: 0.9 }}>{subtitle}</p>}
      <Link className="cta primary" to={to} aria-label={`${title} — enter`}>
        Enter
      </Link>
    </motion.article>
  );
}
