import { useVisitXP } from "../../hooks/useXP.js";

export default function EngineerTestimonials() {
  useVisitXP("visit_engineer_testimonials", 6);
  return (
    <div className="container tech">
      <h1>Engineering Testimonials</h1>
      <blockquote>
        “Delivers accessible, performant UI with clear systems thinking.” —
        Collaborator
      </blockquote>
    </div>
  );
}
