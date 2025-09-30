import { motion } from "framer-motion";

export default function CircuitLine() {
  return (
    <motion.div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background:
          "repeating-linear-gradient(90deg, transparent, transparent 16px, rgba(201,162,39,0.06) 16px, rgba(201,162,39,0.06) 17px)",
        maskImage:
          "linear-gradient(180deg, transparent, #000 20%, #000 80%, transparent)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}
