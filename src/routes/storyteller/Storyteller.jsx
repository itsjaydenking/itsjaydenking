import { Link } from "react-router-dom";
import PathLayout from "../../components/PathLayout.jsx";
import PathCard from "../../components/PathCard.jsx";
import { useVisitXP } from "../../hooks/useXP.js";

export default function Storyteller() {
  useVisitXP("visit_storyteller", 15);
  return (
    <PathLayout
      variant="storyteller"
      eyebrow="Jayden King"
      title="The Storyteller’s Path"
      links={[
        { to: "/storyteller", label: "Overview" },
        { to: "/storyteller/productions", label: "Productions" },
        { to: "/storyteller/systems", label: "Systems" },
        { to: "/storyteller/testimonials", label: "Testimonials" },
        { to: "/storyteller/booking", label: "Booking" },
      ]}
    >
      <p>Worlds you can step into. Tables you’ll remember.</p>
      <div className="choices" style={{ marginTop: 16 }}>
        <PathCard
          to="/storyteller/productions"
          title="Productions"
          description="Appearances and performance work."
        />
        <PathCard
          to="/storyteller/systems"
          title="Systems"
          description="Tools and settings for narrative play."
        />
        <PathCard
          to="/storyteller/testimonials"
          title="Testimonials"
          description="What players and producers say."
        />
        <PathCard
          to="/storyteller/booking"
          title="Booking & Services"
          description="Private sessions, AP, narrative consults."
          cta="Book"
        />
        <PathCard
          to="/fusion"
          title="Open the Bridge"
          description="Cross into the fusion of story and code."
          cta="Cross"
        />
      </div>
    </PathLayout>
  );
}
