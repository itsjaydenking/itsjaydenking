import { Link } from "react-router-dom";
import PathLayout from "../../components/PathLayout.jsx";
import PathCard from "../../components/PathCard.jsx";
import { useVisitXP } from "../../hooks/useXP.js";

export default function Fusion() {
  useVisitXP("visit_fusion", 15);
  return (
    <PathLayout
      variant="fusion"
      eyebrow="The Fusion"
      title="The Bridge — Creative Technologist"
      links={[
        { to: "/fusion", label: "Overview" },
        { to: "/fusion/ebonmane-ink", label: "Ebonmane Ink" },
        { to: "/fusion/labs", label: "Labs" },
        { to: "/fusion/collaborations", label: "Collaborations" },
        { to: "/fusion/contact", label: "Contact" },
      ]}
    >
      <p>
        Strategy, systems, and storytelling combined. From product to
        production, I prototype experiences where narrative and technology
        enhance each other.
      </p>
      <div className="choices" style={{ marginTop: 16 }}>
        <PathCard
          to="/fusion/ebonmane-ink"
          title="Ebonmane Ink"
          description="Studio: brand, projects, and community."
        />
        <PathCard
          to="/fusion/labs"
          title="Labs"
          description="Prototypes bridging story and engineering."
        />
        <PathCard
          to="/fusion/collaborations"
          title="Collaborations"
          description="Partners and interdisciplinary work."
        />
        <PathCard
          to="/fusion/contact"
          title="Collaborate"
          description="Let’s explore your idea and scope."
          cta="Start"
        />
      </div>
    </PathLayout>
  );
}
