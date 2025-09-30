import { Link } from "react-router-dom";
import { useVisitXP } from "../../hooks/useXP.js";
import PathLayout from "../../components/PathLayout.jsx";
import PathCard from "../../components/PathCard.jsx";

export default function StorytellerSystems() {
  useVisitXP("visit_storyteller_systems", 8);
  return (
    <PathLayout
      variant="storyteller"
      eyebrow="Systems"
      title="Narrative Systems"
      links={[
        { to: "/storyteller", label: "Overview" },
        { to: "/storyteller/productions", label: "Productions" },
        { to: "/storyteller/systems", label: "Systems" },
        { to: "/storyteller/testimonials", label: "Testimonials" },
        { to: "/storyteller/booking", label: "Booking" },
      ]}
    >
      <div className="choices compact">
        <PathCard
          to="/storyteller/systems/las-vegas-by-night"
          title="Las Vegas by Night"
          description="V5 Toolkit + web app for urban-gothic sandbox"
          cta="Open"
        />
      </div>
      <p style={{ marginTop: 16 }}>
        Prefer a list? Try the classic view:{" "}
        <Link to="/storyteller/systems/las-vegas-by-night">
          Las Vegas: Sin City by Night
        </Link>
      </p>
    </PathLayout>
  );
}
