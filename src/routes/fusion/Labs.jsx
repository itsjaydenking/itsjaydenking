import { useVisitXP } from "../../hooks/useXP.js";

export default function FusionLabs() {
  useVisitXP("visit_fusion_labs", 8);
  return (
    <div className="container">
      <h1>Labs — Experiments</h1>
      <p>
        Prototypes where story and technology are engineered as one experience.
      </p>
    </div>
  );
}
