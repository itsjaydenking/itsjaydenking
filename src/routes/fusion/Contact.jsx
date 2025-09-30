import { useVisitXP } from "../../hooks/useXP.js";

export default function FusionContact() {
  useVisitXP("visit_fusion_contact", 8);
  return (
    <div className="container">
      <h1>Collaborate — Creative Technologist</h1>
      <p>
        Email:{" "}
        <a href="mailto:campbelljordan64@gmail.com">
          campbelljordan64@gmail.com
        </a>
      </p>
    </div>
  );
}
