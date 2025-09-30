import { motion } from "framer-motion";
import CircuitLine from "./CircuitLine.jsx";

export default function Scene({ variant = "fusion", children }) {
  const variants = {
    engineer: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
    },
    storyteller: {
      initial: { opacity: 0, y: 12, rotateX: -6 },
      animate: { opacity: 1, y: 0, rotateX: 0 },
    },
    fusion: {
      initial: { opacity: 0, scale: 0.985 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  return (
    <div className={`scene ${variant}`}>
      {variant === "engineer" && <CircuitLine />}
      <motion.section
        initial={variants[variant].initial}
        animate={variants[variant].animate}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={variant === "storyteller" ? "page" : ""}
      >
        {children}
      </motion.section>
      {variant === "storyteller" && <div className="vignette" aria-hidden />}
    </div>
  );
}
