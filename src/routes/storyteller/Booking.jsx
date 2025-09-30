import { useVisitXP } from "../../hooks/useXP.js";

export default function StorytellerBooking() {
  useVisitXP("visit_storyteller_booking", 8);
  return (
    <div className="container narrative">
      <h1>Booking & Services</h1>
      <ul>
        <li>Private Sessions (GM)</li>
        <li>Actual Play/Performance</li>
        <li>Narrative Design Consults</li>
      </ul>
      <p>
        Email:{" "}
        <a href="mailto:campbelljordan64@gmail.com">
          campbelljordan64@gmail.com
        </a>
      </p>
    </div>
  );
}
