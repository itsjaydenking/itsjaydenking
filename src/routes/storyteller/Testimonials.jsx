import TestimonialCard from "../../components/TestimonialCard.jsx";
import Scene from "../../components/Scene.jsx";
import { useVisitXP } from "../../hooks/useXP.js";

export default function StorytellerTestimonials() {
  useVisitXP("visit_storyteller_testimonials", 6);
  return (
    <Scene variant="storyteller">
      <div className="container narrative">
        <h1>Storytelling Testimonials</h1>
        <div className="sep" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          <TestimonialCard
            quote="Cinematic, inclusive tables that make every player feel legendary."
            author="Player"
          />
          <TestimonialCard
            quote="Sharp system mastery with a director’s eye for pacing."
            author="Producer"
          />
          <TestimonialCard
            quote="Creates space where everyone feels seen and celebrated."
            author="Community Organizer"
          />
        </div>
      </div>
    </Scene>
  );
}
