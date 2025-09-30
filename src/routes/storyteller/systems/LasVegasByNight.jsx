import { useVisitXP } from "../../../hooks/useXP.js";

export default function StorytellerSystemLV() {
  useVisitXP("visit_storyteller_lvbn", 12);
  return (
    <div className="container narrative">
      <h1>Las Vegas: Sin City by Night — V5 Toolkit + Web App</h1>
      <p>
        Urban-gothic sandbox for Vampire: The Masquerade 5e with a V5-compliant
        dice roller.
      </p>
      <ul>
        <li>Vanilla JS, HTML5, CSS3 → near-instant load</li>
        <li>Sub-100ms dice roller; modular tools; lazy loading</li>
        <li>Result: 40% faster initial load, table-ready</li>
      </ul>
      <p>
        <a
          className="cta"
          href="https://itsjaydenking.github.io/las-vegas-by-night/"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>{" "}
        •{" "}
        <a
          className="cta"
          href="https://github.com/itsjaydenking/las-vegas-by-night"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </p>
    </div>
  );
}
