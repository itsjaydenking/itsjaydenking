import { useVisitXP } from "../../hooks/useXP.js";

export default function FusionCollaborations() {
  useVisitXP("visit_fusion_collaborations", 8);
  return (
    <div className="container">
      <h1>Collaborations & Partners</h1>
      <p>Selected partners and interdisciplinary projects.</p>
    </div>
  );
}
