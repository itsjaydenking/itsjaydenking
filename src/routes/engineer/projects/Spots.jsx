import { useVisitXP } from "../../../hooks/useXP.js";

export default function EngineerProjectSpots() {
  useVisitXP("visit_engineer_project_spots", 12);
  return (
    <div className="container">
      <h1>Spots — Mobile-First Photo Sharing</h1>
      <p>
        A lightning-fast, Core Web Vitals–friendly photo app with real-time
        interactions.
      </p>
      <ul>
        <li>
          HTML5, CSS3 (BEM), JavaScript ES6+; accessibility and speed focused
        </li>
        <li>
          RESTful endpoints with instant updates; lazy loading + code splitting
        </li>
        <li>
          Result: Sub-100ms interactions on core flows; Vitals met across mobile
        </li>
      </ul>
      <p>
        <a
          className="cta"
          href="https://itsjaydenking.github.io/spots/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>{" "}
        •{" "}
        <a
          className="cta"
          href="https://github.com/itsjaydenking/spots"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </p>
    </div>
  );
}
