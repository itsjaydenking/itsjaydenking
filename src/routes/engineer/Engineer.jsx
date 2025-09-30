import { Link } from "react-router-dom";
import PathLayout from "../../components/PathLayout.jsx";
import PathCard from "../../components/PathCard.jsx";
import { useVisitXP } from "../../hooks/useXP.js";

export default function Engineer() {
  useVisitXP("visit_engineer", 15);
  return (
    <PathLayout
      variant="engineer"
      eyebrow="Jordan Campbell"
      title="The Engineer’s Path"
      links={[
        { to: "/engineer", label: "Overview" },
        { to: "/engineer/projects", label: "Projects" },
        { to: "/engineer/skills", label: "Skills" },
        { to: "/engineer/testimonials", label: "Testimonials" },
        { to: "/engineer/contact", label: "Hire Me" },
      ]}
    >
      <p>
        I build accessible, high-performing web apps with a narrative touch—
        clean architecture, inclusive UX, and reliability teams trust.
      </p>
      <div className="choices" style={{ marginTop: 16 }}>
        <PathCard
          to="/engineer/projects"
          title="Projects"
          description="Case studies with performance, a11y, and DX focus."
        />
        <PathCard
          to="/engineer/skills"
          title="Skills"
          description="Core tools, practices, and engineering ethos."
        />
        <PathCard
          to="/engineer/testimonials"
          title="Testimonials"
          description="What collaborators and clients say."
        />
        <PathCard
          to="/engineer/contact"
          title="Hire Me"
          description="Let’s scope your project and timelines."
          cta="Start"
        />
        <PathCard
          to="/fusion"
          title="Open the Bridge"
          description="Explore the fusion of code and story."
          cta="Cross"
        />
      </div>
    </PathLayout>
  );
}
