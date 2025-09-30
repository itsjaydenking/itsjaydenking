import { useVisitXP } from "../../hooks/useXP.js";

export default function StorytellerProductions() {
  useVisitXP("visit_storyteller_productions", 8);
  return (
    <div className="container narrative">
      <h1>Productions & Appearances</h1>
      <ul>
        <li>D&D in a Castle — Featured GM</li>
        <li>GenCon — Featured GM</li>
      </ul>
    </div>
  );
}
