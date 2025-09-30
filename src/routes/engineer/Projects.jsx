import { Link } from "react-router-dom";
import { useVisitXP } from "../../hooks/useXP.js";
import PathLayout from "../../components/PathLayout.jsx";
import PathCard from "../../components/PathCard.jsx";
import AwardButton from "../../components/AwardButton.jsx";

export default function EngineerProjects() {
  useVisitXP("visit_engineer_projects", 8);
  return (
    <PathLayout
      variant="engineer"
      eyebrow="Projects"
      title="Engineering Projects"
      links={[
        { to: "/engineer", label: "Overview" },
        { to: "/engineer/projects", label: "Projects" },
        { to: "/engineer/skills", label: "Skills" },
        { to: "/engineer/testimonials", label: "Testimonials" },
        { to: "/engineer/contact", label: "Hire Me" },
      ]}
    >
      <div className="choices compact">
        <PathCard
          to="/engineer/projects/spots"
          title="Spots — Photo Sharing"
          description="Core Web Vitals-first mobile app"
          cta="Case Study"
        />
      </div>
      <AwardButton xp={5} awardKey="award_engineer_projects_read">
        Mark as explored
      </AwardButton>
    </PathLayout>
  );
}
