import { useXP } from "../hooks/useXP.js";

export default function AwardButton({ xp = 5, awardKey, children }) {
  const { addXP, hasAward } = useXP();
  const awarded = hasAward(awardKey);
  return (
    <button
      type="button"
      className="award-button"
      onClick={() => !awarded && addXP(xp, awardKey)}
      aria-pressed={awarded}
      disabled={awarded}
    >
      {children} {awarded ? "✓" : `+${xp} XP`}
    </button>
  );
}
